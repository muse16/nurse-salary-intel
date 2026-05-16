'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';
import SiteNav from '@/components/SiteNav';
import { calculateContract, getStateTaxRate, getStateList } from './calculateContract';
import { DEFAULT_CONTRACT_A, DEFAULT_CONTRACT_B } from './types';
import type { ContractInputs, ContractResults } from './types';

const fmt = (n: number) => '$' + n.toLocaleString();
const fmtH = (n: number) => '$' + n.toFixed(2);

// ── Shared input field classes ─────────────────────────────────────────────
const inputClass =
  'w-full px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm';
const inputWithPrefixClass =
  'w-full pl-7 pr-3 py-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-sm';

// ── ContractPanel ──────────────────────────────────────────────────────────

interface ContractPanelProps {
  label: string;
  contract: ContractInputs;
  onChange: (c: ContractInputs) => void;
}

function ContractPanel({ label, contract, onChange }: ContractPanelProps) {
  const set = <K extends keyof ContractInputs>(field: K, value: ContractInputs[K]) =>
    onChange({ ...contract, [field]: value });
  const states = getStateList();

  return (
    <div className="bg-surface rounded-2xl border border-outline-variant p-6 space-y-5 h-fit">
      <h2 className="text-lg font-semibold font-headline text-on-surface">{label}</h2>

      {/* Taxable hourly rate */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">Taxable Hourly Rate</label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-on-surface-variant text-sm">$</span>
          <input
            type="number"
            value={contract.taxableHourlyRate}
            onChange={e => set('taxableHourlyRate', parseFloat(e.target.value) || 0)}
            className={inputWithPrefixClass}
            min="0" step="0.50"
          />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">Typical range: $18–$35/hr. Does not include stipends.</p>
      </div>

      {/* Weekly hours + contract weeks */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1">Weekly Hours</label>
          <input
            type="number"
            value={contract.weeklyHours}
            onChange={e => set('weeklyHours', parseFloat(e.target.value) || 36)}
            className={inputClass}
            min="1" max="60" step="1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1">Contract Weeks</label>
          <input
            type="number"
            value={contract.contractWeeks}
            onChange={e => set('contractWeeks', Math.max(1, parseFloat(e.target.value) || 13))}
            className={inputClass}
            min="4" max="52" step="1"
          />
        </div>
      </div>

      {/* Housing stipend */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">
          Housing Stipend <span className="text-on-surface-variant font-normal">(per week)</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-on-surface-variant text-sm">$</span>
          <input
            type="number"
            value={contract.housingStipend}
            onChange={e => set('housingStipend', parseFloat(e.target.value) || 0)}
            className={inputWithPrefixClass}
            min="0" step="50"
          />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">GSA lodging rates: $800–$1,500/wk depending on city.</p>
      </div>

      {/* Meals & incidentals stipend */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">
          Meals & Incidentals <span className="text-on-surface-variant font-normal">(per week)</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-on-surface-variant text-sm">$</span>
          <input
            type="number"
            value={contract.mealsStipend}
            onChange={e => set('mealsStipend', parseFloat(e.target.value) || 0)}
            className={inputWithPrefixClass}
            min="0" step="25"
          />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">GSA M&IE rates: $280–$420/wk. Tax-free with qualifying tax home.</p>
      </div>

      {/* Sign-on bonus */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">
          Sign-On / Completion Bonus <span className="text-on-surface-variant font-normal">(total, optional)</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-on-surface-variant text-sm">$</span>
          <input
            type="number"
            value={contract.signOnBonus}
            onChange={e => set('signOnBonus', parseFloat(e.target.value) || 0)}
            className={inputWithPrefixClass}
            min="0" step="500"
          />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">Taxable. Often split — half on start, half on contract completion.</p>
      </div>

      {/* Assignment state */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">Assignment State</label>
        <select
          value={contract.assignmentState}
          onChange={e => set('assignmentState', e.target.value)}
          className={inputClass}
        >
          {states.map(s => (
            <option key={s} value={s}>
              {s} {getStateTaxRate(s) === 0 ? '(no income tax)' : `(${(getStateTaxRate(s) * 100).toFixed(1)}% state tax)`}
            </option>
          ))}
        </select>
      </div>

      {/* Filing status */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">Filing Status</label>
        <div className="flex gap-3">
          {(['single', 'mfj'] as const).map(s => (
            <button
              key={s}
              type="button"
              onClick={() => set('filingStatus', s)}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                contract.filingStatus === s
                  ? 'bg-primary text-on-primary border-primary'
                  : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {s === 'single' ? 'Single' : 'Married / MFJ'}
            </button>
          ))}
        </div>
      </div>

      {/* Overtime */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">
          Overtime Hours <span className="text-on-surface-variant font-normal">(per week avg)</span>
        </label>
        <input
          type="number"
          value={contract.overtimeHoursPerWeek}
          onChange={e => set('overtimeHoursPerWeek', parseFloat(e.target.value) || 0)}
          className={inputClass}
          min="0" max="20" step="1"
        />
      </div>

      {/* Retirement contribution */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">
          Retirement Contribution <span className="text-on-surface-variant font-normal">(annual, optional)</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-on-surface-variant text-sm">$</span>
          <input
            type="number"
            value={contract.retirementContrib}
            onChange={e => set('retirementContrib', parseFloat(e.target.value) || 0)}
            className={inputWithPrefixClass}
            min="0" max="23000" step="500"
          />
        </div>
        <p className="text-xs text-on-surface-variant mt-1">Pre-tax. 2026 IRS limit: $23,000. Many travel agencies offer limited matching.</p>
      </div>

      {/* Tax home status */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1">Qualifying Tax Home?</label>
        <div className="flex gap-3">
          {([true, false] as const).map(val => (
            <button
              key={String(val)}
              type="button"
              onClick={() => set('hasTaxHome', val)}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                contract.hasTaxHome === val
                  ? val
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-error text-on-error border-error'
                  : 'border-outline-variant text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {val ? 'Yes — I have a tax home' : 'No — full-time traveler'}
            </button>
          ))}
        </div>
        {!contract.hasTaxHome && (
          <p className="text-xs text-error mt-2 font-medium">
            ⚠️ Without a qualifying tax home, all stipends are treated as taxable income — significantly reducing take-home.
          </p>
        )}
        {contract.hasTaxHome && (
          <p className="text-xs text-on-surface-variant mt-1">
            Stipends are tax-free when you maintain a bona fide primary residence.
          </p>
        )}
      </div>
    </div>
  );
}

// ── ResultsPanel ───────────────────────────────────────────────────────────

interface ResultsPanelProps {
  results: ContractResults;
  inputs: ContractInputs;
}

function ResultsPanel({ results, inputs }: ResultsPanelProps) {
  const stateRate = getStateTaxRate(inputs.assignmentState);

  return (
    <div className="space-y-4">
      {/* Primary headline card */}
      <div className="bg-primary rounded-2xl p-6 text-on-primary">
        <div className="text-sm font-medium opacity-80 mb-1">Blended Hourly Rate</div>
        <div className="text-5xl font-bold font-headline">{fmtH(results.blendedHourlyRate)}</div>
        <div className="flex flex-wrap gap-5 mt-3 text-sm opacity-90">
          <div>
            <div className="opacity-70">Weekly take-home</div>
            <div className="font-semibold">{fmt(results.weeklyNetTakeHome)}</div>
          </div>
          <div>
            <div className="opacity-70">Total ({inputs.contractWeeks} wks)</div>
            <div className="font-semibold">{fmt(results.netTakeHome)}</div>
          </div>
          <div>
            <div className="opacity-70">Annualized</div>
            <div className="font-semibold">{fmt(results.annualizedEquivalent)}</div>
          </div>
        </div>
      </div>

      {/* No tax home warning */}
      {!inputs.hasTaxHome && (
        <div className="bg-error-container rounded-xl p-4 border border-error">
          <p className="text-sm text-on-error-container font-medium">
            ⚠️ <strong>No qualifying tax home:</strong> Your stipends ({fmt(results.contractStipends)}) are
            included as taxable income. <a href="#tax-home" className="underline">Learn what a tax home is ↓</a>
          </p>
        </div>
      )}

      {/* Pay breakdown */}
      <div className="bg-surface rounded-2xl border border-outline-variant p-6">
        <h3 className="font-semibold text-on-surface mb-4">Pay Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">Taxable wages ({inputs.contractWeeks} wks)</span>
            <span className="font-semibold text-on-surface">{fmt(results.contractTaxableGross - results.signOnBonus)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-on-surface-variant">
              Stipends {!inputs.hasTaxHome ? <span className="text-error">(taxable — no tax home)</span> : ''}
            </span>
            <span className={inputs.hasTaxHome ? 'text-green-600 font-medium' : 'text-on-surface font-medium'}>
              +{fmt(results.contractStipends)}{inputs.hasTaxHome ? ' tax-free' : ''}
            </span>
          </div>
          {results.signOnBonus > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Sign-on / completion bonus</span>
              <span className="font-semibold text-on-surface">+{fmt(results.signOnBonus)}</span>
            </div>
          )}

          <div className="border-t border-outline-variant pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Federal income tax</span>
              <span className="text-error">−{fmt(results.federalTax)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">FICA (SS + Medicare)</span>
              <span className="text-error">−{fmt(results.ficaTax)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">
                {inputs.assignmentState} state tax ({(stateRate * 100).toFixed(1)}%)
              </span>
              <span className={stateRate === 0 ? 'text-green-600 font-medium' : 'text-error'}>
                {stateRate === 0 ? '$0 (no income tax)' : `−${fmt(results.stateTax)}`}
              </span>
            </div>
            {results.retirementDeduction > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Retirement contribution</span>
                <span className="text-on-surface-variant">−{fmt(results.retirementDeduction)}</span>
              </div>
            )}
          </div>

          <div className="border-t border-outline-variant pt-3 flex justify-between">
            <span className="font-semibold text-on-surface">Estimated Net Take-Home</span>
            <span className="font-bold text-primary text-lg">{fmt(results.netTakeHome)}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-outline-variant flex justify-between text-sm">
          <span className="text-on-surface-variant">Effective tax rate (on taxable income)</span>
          <span className="font-medium text-on-surface">{results.effectiveTaxRate}%</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-surface-container-low rounded-2xl p-4 text-sm text-on-surface-variant">
        <strong className="text-on-surface">Disclaimer:</strong> Estimates for planning purposes only.
        Does not account for city/local taxes (e.g., NYC 3.876%, Philadelphia 3.79%) or agency-specific
        deductions. Consult a travel nurse tax specialist for personalized guidance.
      </div>
    </div>
  );
}

// ── ComparisonSummary ──────────────────────────────────────────────────────

interface ComparisonSummaryProps {
  resultsA: ContractResults;
  resultsB: ContractResults;
  inputsA: ContractInputs;
  inputsB: ContractInputs;
}

function ComparisonSummary({ resultsA, resultsB, inputsA, inputsB }: ComparisonSummaryProps) {
  const weeklyDiff = resultsA.weeklyNetTakeHome - resultsB.weeklyNetTakeHome;
  const winner = weeklyDiff > 0 ? 'A' : weeklyDiff < 0 ? 'B' : null;
  const absWeeklyDiff = Math.abs(weeklyDiff);
  const annualizedDiff = Math.round(absWeeklyDiff * 52);
  const maxWeekly = Math.max(resultsA.weeklyNetTakeHome, resultsB.weeklyNetTakeHome);
  const nearlyIdentical = maxWeekly > 0 && absWeeklyDiff / maxWeekly < 0.02;
  const differentLengths = inputsA.contractWeeks !== inputsB.contractWeeks;

  type Row = { label: string; a: string; b: string; aWins: boolean };
  const rows: Row[] = [
    {
      label: 'Blended hourly rate',
      a: fmtH(resultsA.blendedHourlyRate),
      b: fmtH(resultsB.blendedHourlyRate),
      aWins: resultsA.blendedHourlyRate >= resultsB.blendedHourlyRate,
    },
    {
      label: 'Weekly take-home',
      a: fmt(resultsA.weeklyNetTakeHome),
      b: fmt(resultsB.weeklyNetTakeHome),
      aWins: resultsA.weeklyNetTakeHome >= resultsB.weeklyNetTakeHome,
    },
    {
      label: `Contract total ${differentLengths ? '(different lengths)' : ''}`,
      a: `${fmt(resultsA.netTakeHome)} / ${inputsA.contractWeeks}w`,
      b: `${fmt(resultsB.netTakeHome)} / ${inputsB.contractWeeks}w`,
      aWins: resultsA.weeklyNetTakeHome >= resultsB.weeklyNetTakeHome,
    },
    {
      label: 'Tax-free stipends',
      a: fmt(resultsA.contractStipends),
      b: fmt(resultsB.contractStipends),
      aWins: resultsA.contractStipends >= resultsB.contractStipends,
    },
    {
      label: 'Effective tax rate',
      a: `${resultsA.effectiveTaxRate}%`,
      b: `${resultsB.effectiveTaxRate}%`,
      aWins: resultsA.effectiveTaxRate <= resultsB.effectiveTaxRate,
    },
    {
      label: 'Annualized equivalent',
      a: fmt(resultsA.annualizedEquivalent),
      b: fmt(resultsB.annualizedEquivalent),
      aWins: resultsA.annualizedEquivalent >= resultsB.annualizedEquivalent,
    },
  ];

  return (
    <div className="bg-surface rounded-2xl border border-outline-variant overflow-hidden">
      <div className="bg-surface-container-low px-6 py-4 border-b border-outline-variant flex items-center justify-between">
        <h3 className="font-semibold font-headline text-on-surface">Contract Comparison</h3>
        {differentLengths && (
          <span className="text-xs text-on-surface-variant bg-surface-container rounded-full px-3 py-1">
            ℹ️ Different lengths — use weekly take-home
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-outline-variant">
              <th className="text-left px-6 py-3 text-on-surface-variant font-medium">Metric</th>
              <th className="text-right px-4 py-3 text-on-surface font-semibold">Contract A</th>
              <th className="text-right px-6 py-3 text-on-surface font-semibold">Contract B</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-outline-variant last:border-0">
                <td className="px-6 py-3 text-on-surface-variant">{row.label}</td>
                <td className={`text-right px-4 py-3 font-medium tabular-nums ${row.aWins ? 'text-green-600' : 'text-on-surface-variant'}`}>
                  {row.a} {row.aWins && <span className="text-xs ml-0.5">✓</span>}
                </td>
                <td className={`text-right px-6 py-3 font-medium tabular-nums ${!row.aWins ? 'text-green-600' : 'text-on-surface-variant'}`}>
                  {row.b} {!row.aWins && <span className="text-xs ml-0.5">✓</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Verdict banner */}
      <div className="mx-6 mb-6 mt-4">
        <div className={`rounded-xl p-4 border ${
          nearlyIdentical
            ? 'bg-surface-container-low border-outline-variant'
            : 'bg-primary-fixed border-primary-fixed-dim'
        }`}>
          {nearlyIdentical ? (
            <p className="text-sm font-medium text-on-surface">
              📊 <strong>Nearly identical contracts</strong> — within 2% of each other on a weekly basis.
              Factor in cost of living at each assignment city and agency reputation before deciding.
            </p>
          ) : (
            <p className="text-sm font-medium text-on-surface">
              ✅ <strong>Contract {winner} pays more</strong> —{' '}
              <strong>{fmt(absWeeklyDiff)}/week</strong> more in take-home pay
              ({fmt(annualizedDiff)}/year annualized).
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Calculator Export ─────────────────────────────────────────────────

export default function TravelNurseCalculator() {
  const [contractA, setContractA] = useState<ContractInputs>(DEFAULT_CONTRACT_A);
  const [contractB, setContractB] = useState<ContractInputs>(DEFAULT_CONTRACT_B);
  const [compareMode, setCompareMode] = useState(false);

  const resultsA = useMemo(() => calculateContract(contractA), [contractA]);
  const resultsB = useMemo(() => calculateContract(contractB), [contractB]);

  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <div className={`${compareMode ? 'max-w-5xl' : 'max-w-4xl'} mx-auto px-4 pb-8 pt-24 transition-all duration-300`}>

        {/* Breadcrumbs */}
        <nav className="text-sm text-on-surface-variant mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="hover:underline text-primary">Home</Link></li>
            <li className="before:content-['/'] before:mx-1">
              <Link href="/rn-salary-calculator" className="hover:underline text-primary">Salary Calculators</Link>
            </li>
            <li className="before:content-['/'] before:mx-1">Travel Nurse Pay Calculator</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-2">
          Travel Nurse Pay Calculator 2026
        </h1>
        <p className="text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
          Estimate your take-home pay for any travel nurse contract — including tax-free stipends, blended hourly rate,
          and net weekly income after federal, state, and FICA taxes. Compare two contracts side by side.
        </p>

        {/* Hero image */}
        <Image
          src="/images/travel-nurse-pay-calculator-hero.webp"
          alt="Travel nurse with rolling suitcase standing outside a modern hospital entrance, reviewing her phone with a confident expression, golden hour light"
          width={1200}
          height={630}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="rounded-xl w-full mb-8"
          priority
        />

        {/* Quick Answer box */}
        <div className="bg-surface-container-low rounded-xl p-5 mb-8 border border-outline-variant">
          <p className="text-sm font-semibold text-on-surface uppercase tracking-wide mb-2">📊 Quick Estimate</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            A typical 13-week ICU travel contract at{' '}
            <strong className="text-on-surface">$24/hr taxable + $1,365/wk in stipends</strong> in a no-income-tax state
            yields approximately{' '}
            <strong className="text-on-surface">{fmt(resultsA.weeklyNetTakeHome)}/week</strong> take-home and a{' '}
            <strong className="text-on-surface">{fmtH(resultsA.blendedHourlyRate)}/hr blended rate</strong>.
            Adjust the inputs below for your specific contract.
          </p>
        </div>

        {/* ── CALCULATOR UI ──────────────────────────────────────────── */}

        {!compareMode ? (
          /* Single mode: 2-col on lg */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContractPanel
              label="Your Contract Details"
              contract={contractA}
              onChange={setContractA}
            />
            <div className="space-y-4">
              <ResultsPanel results={resultsA} inputs={contractA} />
              <button
                type="button"
                onClick={() => setCompareMode(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors text-sm font-medium"
              >
                <span aria-hidden>⇄</span>
                Compare with another contract
              </button>
            </div>
          </div>
        ) : (
          /* Compare mode */
          <div className="space-y-6">
            {/* Two input panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ContractPanel label="Contract A" contract={contractA} onChange={setContractA} />
              <div className="space-y-4">
                <ContractPanel label="Contract B" contract={contractB} onChange={setContractB} />
                <button
                  type="button"
                  onClick={() => setCompareMode(false)}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 ml-1"
                >
                  <span aria-hidden>✕</span> Close comparison
                </button>
              </div>
            </div>

            {/* Comparison summary — full width */}
            <ComparisonSummary
              resultsA={resultsA}
              resultsB={resultsB}
              inputsA={contractA}
              inputsB={contractB}
            />

            {/* Individual breakdowns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-3">Contract A Breakdown</p>
                <ResultsPanel results={resultsA} inputs={contractA} />
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide mb-3">Contract B Breakdown</p>
                <ResultsPanel results={resultsB} inputs={contractB} />
              </div>
            </div>
          </div>
        )}

        {/* ── STATIC CONTENT ─────────────────────────────────────────── */}
        <div className="mt-12 space-y-8">

          <div>
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">
              How Your Travel Nurse Pay Is Calculated
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Travel nurse compensation has two distinct components: a{' '}
              <strong className="text-on-surface">taxable hourly wage</strong> (typically $18–$35/hr) and{' '}
              <strong className="text-on-surface">tax-free stipends</strong> for housing and meals and incidentals.
              The taxable wage is subject to federal income tax, state income tax, and FICA.
              Stipends are reimbursements — not wages — and are not subject to any income tax as long as you maintain
              a qualifying tax home and are working away from it on assignment.
            </p>
            <p className="text-on-surface-variant leading-relaxed mt-3">
              The <strong className="text-on-surface">blended rate</strong> — total weekly compensation divided by
              contracted hours — is the number to use when comparing contracts or benchmarking against staff RN pay.
              A contract at $24/hr taxable with $1,365/wk in stipends on a 36-hour week works out to roughly{' '}
              <strong className="text-on-surface">$61.92/hr blended</strong>.
              That is the apples-to-apples number.
            </p>
          </div>

          {/* Data chart */}
          <Image
            src="/images/travel-nurse-pay-calculator-comparison.png"
            alt="Grouped bar chart comparing estimated weekly take-home pay for travel RNs versus staff RNs across five states: California, Texas, Florida, New York, and Washington in 2026"
            width={800}
            height={450}
            sizes="(max-width: 1024px) 100vw, 800px"
            className="rounded-xl w-full"
            loading="lazy"
          />

          {/* Tax home explainer */}
          <div id="tax-home">
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">
              Tax-Free Stipends: What Counts and What Doesn&apos;t
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              The IRS allows travel nurses to receive housing and meals stipends tax-free under IRC §162 — but only
              if you maintain a <strong className="text-on-surface">bona fide tax home</strong>. A tax home is your
              principal place of business or regular workplace. If you own or rent a residence you return to regularly
              and can demonstrate genuine ongoing housing costs there, your stipends are tax-free on assignment.
            </p>
            <p className="text-on-surface-variant leading-relaxed mt-3">
              If you don&apos;t have a qualifying tax home — for example, you gave up your apartment and travel
              full-time — the IRS treats all compensation as taxable income. This can cost{' '}
              <strong className="text-on-surface">$15,000–$25,000/year in additional taxes</strong> depending on your
              stipend level and state. Always work with a tax professional who specializes in travel healthcare
              workers before accepting your first contract.
            </p>
          </div>

          {/* Inline image */}
          <Image
            src="/images/travel-nurse-pay-calculator-hospital.webp"
            alt="Travel nurse in scrubs sitting at a break room table, carefully reviewing printed contract documents and a laptop while comparing compensation offers"
            width={600}
            height={800}
            sizes="(max-width: 1024px) 100vw, 448px"
            className="rounded-xl w-full"
            loading="lazy"
          />

          <div>
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">
              Which States Pay Travel Nurses the Most After Taxes?
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Your assignment state affects take-home in two ways: the going contract rates in that market, and the
              state income tax applied to your taxable wages. The nine states with no income tax — Alaska, Florida,
              Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, and Wyoming — add{' '}
              <strong className="text-on-surface">$1,500–$5,000+ to your net take-home on a 13-week contract</strong>{' '}
              compared to a high-tax state like California or Oregon.
            </p>
            <p className="text-on-surface-variant leading-relaxed mt-3">
              That said, California and Washington typically offer the highest total packages due to strong nursing
              unions and high regional demand — even after taxes, ICU travel contracts in San Francisco or Seattle
              often clear $2,400–$3,000/week net. The calculator accounts for state income tax automatically when
              you select your assignment state.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is a blended rate for travel nurses?',
                  a: 'A blended rate divides your total weekly compensation — taxable wages plus tax-free stipends — by your contracted hours. It is the most useful number for comparing contracts because a lower taxable hourly rate with generous stipends can easily outpay a higher taxable rate with no housing allowance. To calculate it: (weekly taxable wages + weekly stipends) ÷ contracted hours per week.',
                },
                {
                  q: 'Are travel nurse stipends tax-free?',
                  a: 'Yes — housing and meals stipends are exempt from federal and state income tax, and from FICA, as long as you maintain a qualifying tax home and are working away from it on assignment. If you do not have a qualifying tax home (e.g., you gave up your residence and travel full-time), all compensation becomes taxable income.',
                },
                {
                  q: 'How much do travel nurses make per week after taxes in 2026?',
                  a: 'Most travel RNs clear $1,800–$3,200/week after taxes in 2026, depending on specialty, assignment location, and whether they qualify for tax-free stipends. ICU and OR travelers in high-demand markets like California or Washington typically land at the higher end. Use this calculator with your contract details for a personalized estimate.',
                },
                {
                  q: 'How do I compare two travel nurse contracts?',
                  a: 'Calculate the blended rate for each contract: add total weekly taxable wages + weekly stipends, then divide by contracted hours. Also consider contract length, assignment city cost of living, overtime availability, and agency reputation. The comparison tool above runs both contracts side by side and identifies the better offer.',
                },
                {
                  q: 'Does this calculator account for city and local taxes?',
                  a: 'No — this tool estimates state-level income tax only. If your assignment is in a city with a local income tax (New York City adds 3.876%, Philadelphia adds 3.79%, San Francisco adds 1.5%), your actual take-home will be lower. Account for local taxes manually or consult a travel nurse tax specialist.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-outline-variant pb-6 last:border-0">
                  <h3 className="font-semibold text-on-surface mb-2">{q}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related guides grid */}
          <div>
            <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">Related Salary Tools & Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  href: '/rn-salary-calculator',
                  title: 'RN Salary Calculator',
                  desc: 'Staff nurse take-home pay after taxes',
                },
                {
                  href: '/travel-nursing-pay-2026',
                  title: 'Travel Nurse Pay Guide 2026',
                  desc: 'Salary overview + top-paying markets',
                },
                {
                  href: '/shift-differential-nurse-pay-2026',
                  title: 'Shift Differential Guide',
                  desc: 'Night & weekend pay on travel contracts',
                },
                {
                  href: '/nurse-salary-negotiation-guide-2026',
                  title: 'Nurse Salary Negotiation',
                  desc: 'How to negotiate your travel contract offer',
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low hover:border-primary transition-colors"
                >
                  <div className="font-semibold text-on-surface">{title}</div>
                  <div className="text-sm text-on-surface-variant mt-1">{desc}</div>
                </Link>
              ))}
            </div>
          </div>

          <MethodologyBox />

          {/* Sources */}
          <div className="text-sm text-on-surface-variant border-t border-outline-variant pt-6">
            <p className="font-semibold text-on-surface mb-2">Sources & Methodology</p>
            <p className="leading-relaxed">
              Stipend rates based on U.S. General Services Administration (GSA) lodging and M&IE per diem rates
              for 2026. Tax calculations use IRS 2026 federal income tax brackets and FICA rates.
              State income tax rates derived from 2026 published state tax schedules. Travel nurse taxable wage
              ranges sourced from publicly available job postings verified March–May 2026.
              All estimates are informational and do not constitute tax or financial advice.
            </p>
            <div className="flex flex-wrap gap-4 mt-3">
              <a href="https://www.gsa.gov/travel/plan-book/per-diem-rates" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GSA Per Diem Rates</a>
              <a href="https://www.irs.gov/taxtopics/tc751" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IRS FICA Topic 751</a>
              <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BLS OEWS RN Wages</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
