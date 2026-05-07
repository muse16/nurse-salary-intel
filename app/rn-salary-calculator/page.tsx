'use client';

import { useState, useCallback } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// Metadata can't be exported from a client component — wrap in layout pattern
// We'll handle this via generateMetadata in a server wrapper; for now, inline

const STATE_TAX_RATES: Record<string, number> = {
  'Alabama': 0.05, 'Alaska': 0, 'Arizona': 0.025, 'Arkansas': 0.047,
  'California': 0.093, 'Colorado': 0.044, 'Connecticut': 0.065,
  'Delaware': 0.066, 'Florida': 0, 'Georgia': 0.055, 'Hawaii': 0.08,
  'Idaho': 0.058, 'Illinois': 0.0495, 'Indiana': 0.0315, 'Iowa': 0.057,
  'Kansas': 0.057, 'Kentucky': 0.045, 'Louisiana': 0.042, 'Maine': 0.072,
  'Maryland': 0.055, 'Massachusetts': 0.09, 'Michigan': 0.0425,
  'Minnesota': 0.0785, 'Mississippi': 0.047, 'Missouri': 0.046,
  'Montana': 0.069, 'Nebraska': 0.0664, 'Nevada': 0, 'New Hampshire': 0,
  'New Jersey': 0.0637, 'New Mexico': 0.059, 'New York': 0.0685,
  'North Carolina': 0.0499, 'North Dakota': 0.025, 'Ohio': 0.04,
  'Oklahoma': 0.0475, 'Oregon': 0.099, 'Pennsylvania': 0.0307,
  'Rhode Island': 0.0599, 'South Carolina': 0.065, 'South Dakota': 0,
  'Tennessee': 0, 'Texas': 0, 'Utah': 0.046, 'Vermont': 0.0875,
  'Virginia': 0.0575, 'Washington': 0, 'West Virginia': 0.065,
  'Wisconsin': 0.0765, 'Wyoming': 0,
};

const FEDERAL_BRACKETS_SINGLE = [
  { limit: 11600, rate: 0.10 },
  { limit: 47150, rate: 0.12 },
  { limit: 100525, rate: 0.22 },
  { limit: 191950, rate: 0.24 },
  { limit: 243725, rate: 0.32 },
  { limit: 609350, rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];

const FEDERAL_BRACKETS_MFJ = [
  { limit: 23200, rate: 0.10 },
  { limit: 94300, rate: 0.12 },
  { limit: 201050, rate: 0.22 },
  { limit: 383900, rate: 0.24 },
  { limit: 487450, rate: 0.32 },
  { limit: 731200, rate: 0.35 },
  { limit: Infinity, rate: 0.37 },
];

function calcFederalTax(taxableIncome: number, mfj: boolean): number {
  const brackets = mfj ? FEDERAL_BRACKETS_MFJ : FEDERAL_BRACKETS_SINGLE;
  let tax = 0;
  let prev = 0;
  for (const bracket of brackets) {
    if (taxableIncome <= prev) break;
    const taxable = Math.min(taxableIncome, bracket.limit) - prev;
    tax += taxable * bracket.rate;
    prev = bracket.limit;
  }
  return tax;
}

export default function RNSalaryCalculator() {
  const [annualSalary, setAnnualSalary] = useState('89010');
  const [state, setState] = useState('Texas');
  const [filingStatus, setFilingStatus] = useState<'single' | 'mfj'>('single');
  const [retirement401k, setRetirement401k] = useState('6000');
  const [healthInsurance, setHealthInsurance] = useState('2400');
  const [nightDiffPercent, setNightDiffPercent] = useState('0');
  const [overtimeHours, setOvertimeHours] = useState('0');

  const calculate = useCallback(() => {
    const gross = parseFloat(annualSalary) || 0;
    const retContrib = Math.min(parseFloat(retirement401k) || 0, 23000);
    const healthDeduct = parseFloat(healthInsurance) || 0;
    const nightDiff = (parseFloat(nightDiffPercent) || 0) / 100;
    const otHours = parseFloat(overtimeHours) || 0;

    const stdDeduction = filingStatus === 'mfj' ? 29200 : 14600;
    const hourlyBase = gross / 2080;
    const otPay = otHours * 52 * hourlyBase * 0.5; // extra half on top of regular
    const nightDiffPay = gross * nightDiff;
    const totalGross = gross + otPay + nightDiffPay;

    const preTaxDeductions = retContrib + healthDeduct;
    const federalTaxableIncome = Math.max(0, totalGross - preTaxDeductions - stdDeduction);
    const federalTax = calcFederalTax(federalTaxableIncome, filingStatus === 'mfj');
    const ficaTax = Math.min(totalGross, 168600) * 0.062 + totalGross * 0.0145;
    const stateRate = STATE_TAX_RATES[state] ?? 0.05;
    const stateTax = Math.max(0, totalGross - preTaxDeductions) * stateRate;

    const totalDeductions = federalTax + ficaTax + stateTax + preTaxDeductions;
    const netTakeHome = totalGross - totalDeductions;

    return {
      totalGross: Math.round(totalGross),
      federalTax: Math.round(federalTax),
      ficaTax: Math.round(ficaTax),
      stateTax: Math.round(stateTax),
      preTaxDeductions: Math.round(preTaxDeductions),
      netTakeHome: Math.round(netTakeHome),
      monthlyNet: Math.round(netTakeHome / 12),
      biweeklyNet: Math.round(netTakeHome / 26),
      effectiveRate: totalGross > 0 ? Math.round(((federalTax + ficaTax + stateTax) / totalGross) * 1000) / 10 : 0,
      stateRate: Math.round(stateRate * 1000) / 10,
    };
  }, [annualSalary, state, filingStatus, retirement401k, healthInsurance, nightDiffPercent, overtimeHours]);

  const result = calculate();
  const fmt = (n: number) => '$' + n.toLocaleString();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-on-surface-variant mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline text-primary">Home</Link></li>
            <li className="before:content-['/'] before:mx-1">RN Salary Calculator</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold font-headline text-on-surface mb-2">
          RN Salary Calculator 2026
        </h1>
        <p className="text-on-surface-variant mb-8">
          Estimate your nursing take-home pay after federal taxes, state taxes, FICA, and pre-tax deductions — with optional night shift differential and overtime.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input panel */}
          <div className="bg-surface rounded-2xl border border-outline-variant p-6 space-y-5">
            <h2 className="text-lg font-semibold text-on-surface">Your Pay Details</h2>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Annual Base Salary</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-on-surface-variant">$</span>
                <input
                  type="number"
                  value={annualSalary}
                  onChange={e => setAnnualSalary(e.target.value)}
                  className="w-full pl-7 pr-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  min="0"
                  step="1000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">State</label>
              <select
                value={state}
                onChange={e => setState(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {Object.keys(STATE_TAX_RATES).sort().map(s => (
                  <option key={s} value={s}>{s} {STATE_TAX_RATES[s] === 0 ? '(no income tax)' : `(${(STATE_TAX_RATES[s] * 100).toFixed(1)}%)`}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">Filing Status</label>
              <div className="flex gap-3">
                {(['single', 'mfj'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setFilingStatus(s)}
                    className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${filingStatus === s ? 'bg-primary text-on-primary border-primary' : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-low'}`}
                  >
                    {s === 'single' ? 'Single' : 'Married / MFJ'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                403(b) / 401(k) Contribution <span className="text-on-surface-variant font-normal">(annual)</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-on-surface-variant">$</span>
                <input
                  type="number"
                  value={retirement401k}
                  onChange={e => setRetirement401k(e.target.value)}
                  className="w-full pl-7 pr-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  min="0"
                  max="23000"
                  step="500"
                />
              </div>
              <p className="text-xs text-on-surface-variant mt-1">2026 IRS limit: $23,000. Pre-tax reduces federal + state taxable income.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Health Insurance Premium <span className="text-on-surface-variant font-normal">(your share, annual)</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-on-surface-variant">$</span>
                <input
                  type="number"
                  value={healthInsurance}
                  onChange={e => setHealthInsurance(e.target.value)}
                  className="w-full pl-7 pr-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  min="0"
                  step="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Night Shift Differential <span className="text-on-surface-variant font-normal">(% of base, if applicable)</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={nightDiffPercent}
                  onChange={e => setNightDiffPercent(e.target.value)}
                  className="w-full pl-4 pr-8 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  min="0"
                  max="30"
                  step="1"
                />
                <span className="absolute right-3 top-2.5 text-on-surface-variant">%</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-1">Typical range: 10–20% for nights. Enter 0 if day shift only.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-on-surface mb-1">
                Overtime Hours <span className="text-on-surface-variant font-normal">(per week average)</span>
              </label>
              <input
                type="number"
                value={overtimeHours}
                onChange={e => setOvertimeHours(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                min="0"
                max="20"
                step="1"
              />
            </div>
          </div>

          {/* Results panel */}
          <div className="space-y-4">
            <div className="bg-primary rounded-2xl p-6 text-on-primary">
              <div className="text-sm font-medium opacity-80 mb-1">Estimated Annual Take-Home</div>
              <div className="text-5xl font-bold font-headline">{fmt(result.netTakeHome)}</div>
              <div className="flex gap-6 mt-3 text-sm opacity-90">
                <div><div className="opacity-70">Monthly</div><div className="font-semibold">{fmt(result.monthlyNet)}</div></div>
                <div><div className="opacity-70">Bi-weekly</div><div className="font-semibold">{fmt(result.biweeklyNet)}</div></div>
                <div><div className="opacity-70">Effective rate</div><div className="font-semibold">{result.effectiveRate}%</div></div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl border border-outline-variant p-6">
              <h3 className="font-semibold text-on-surface mb-4">Deduction Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Total Gross Pay</span>
                  <span className="font-semibold text-on-surface">{fmt(result.totalGross)}</span>
                </div>
                <div className="border-t border-outline-variant pt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Federal Income Tax</span>
                    <span className="text-error">−{fmt(result.federalTax)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">FICA (SS + Medicare)</span>
                    <span className="text-error">−{fmt(result.ficaTax)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">{state} State Tax ({result.stateRate}%)</span>
                    <span className={result.stateTax === 0 ? 'text-green-600 font-medium' : 'text-error'}>
                      {result.stateTax === 0 ? '$0 (no income tax)' : `−${fmt(result.stateTax)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-on-surface-variant">Pre-tax Deductions (retirement + health)</span>
                    <span className="text-on-surface-variant">−{fmt(result.preTaxDeductions)}</span>
                  </div>
                </div>
                <div className="border-t border-outline-variant pt-3 flex justify-between">
                  <span className="font-semibold text-on-surface">Estimated Net Take-Home</span>
                  <span className="font-bold text-primary text-lg">{fmt(result.netTakeHome)}</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-4 text-sm text-on-surface-variant">
              <p><strong className="text-on-surface">Disclaimer:</strong> This calculator provides estimates for planning purposes only. It does not account for city/local taxes (e.g., Philadelphia 3.79%, NYC 3.876%), deferred compensation, HSA contributions, disability insurance, or other payroll deductions. Consult a tax professional for personalized guidance.</p>
            </div>
          </div>
        </div>

        {/* Context section */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold font-headline text-on-surface">How to Use This Calculator</h2>
          <p className="text-on-surface-variant">
            Enter your base salary, select your state, and adjust pre-tax deductions to see your estimated annual, monthly, and bi-weekly take-home. The calculator accounts for federal marginal tax brackets, state income tax rates, FICA (Social Security + Medicare), and pre-tax deductions that reduce your taxable income.
          </p>
          <p className="text-on-surface-variant">
            <strong className="text-on-surface">Shift differential:</strong> If you work nights, enter your differential as a percentage of base pay (e.g., 15% for a 15% night differential). The calculator adds that to your gross before calculating taxes — because differential pay is fully taxable.
          </p>
          <p className="text-on-surface-variant">
            <strong className="text-on-surface">Overtime:</strong> Enter your average overtime hours per week. The calculator adds 0.5× your hourly rate for each OT hour (assuming you're already compensated 1× through your regular schedule).
          </p>

          <h2 className="text-2xl font-bold font-headline text-on-surface">States With No Income Tax — Worth Knowing</h2>
          <p className="text-on-surface-variant">
            Nine states have no state income tax: Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming. For a nurse earning $89,000, moving from California (effective ~8.5% state rate) to Texas means approximately <strong>$7,500–$9,000/year more in take-home pay</strong> for the same gross salary — equivalent to a substantial raise.
          </p>
          <p className="text-on-surface-variant">
            That said, total compensation matters more than tax savings alone. A California Kaiser nurse earning $140,000 under a CNA contract takes home more after California's high taxes than a Texas non-union nurse earning $90,000 tax-free. See our <Link href="/nurse-salary-by-hospital" className="text-primary hover:underline">hospital salary comparison</Link> to benchmark your offer against what comparable hospitals pay in your market.
          </p>

          <Image
            src="/images/rn-salary-calculator-comparison.png"
            alt="Bar chart showing average RN take-home pay by state after taxes in 2026, comparing gross salary versus net pay in high-tax and no-tax states"
            width={800}
            height={450}
            className="rounded-xl w-full"
            loading="lazy"
          />

          <h2 className="text-2xl font-bold font-headline text-on-surface">Benchmark Your Salary</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/rn-salary-by-state" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
              <div className="font-semibold text-on-surface">RN Salary by State</div>
              <div className="text-sm text-on-surface-variant mt-1">Compare your state against all 50</div>
            </Link>
            <Link href="/rn-salary-by-years-of-experience-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
              <div className="font-semibold text-on-surface">RN Salary by Experience</div>
              <div className="text-sm text-on-surface-variant mt-1">$62K → $134K full career progression</div>
            </Link>
            <Link href="/nurse-salary-by-hospital" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
              <div className="font-semibold text-on-surface">Nurse Salary by Hospital</div>
              <div className="text-sm text-on-surface-variant mt-1">See what your hospital pays vs. peers</div>
            </Link>
            <Link href="/highest-paying-nursing-specialties" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
              <div className="font-semibold text-on-surface">Highest-Paying Specialties</div>
              <div className="text-sm text-on-surface-variant mt-1">Which specialty maximizes career earnings</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}