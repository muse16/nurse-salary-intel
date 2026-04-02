'use client';

import Link from 'next/link';
import DataTable from '@/components/DataTable';
import SalaryCalculator from '@/components/SalaryCalculator';
import IntelDashboard from '@/components/IntelDashboard';
import { generateSalaryReportPDF } from '@/lib/pdf-generator';
import { Calculator, TrendingUp, Shield, Database, Award, CheckCircle, ArrowRight, FileText, AlertTriangle, DollarSign } from 'lucide-react';
import { slugify } from '@/lib/utils';
import { NursePosition } from '@/lib/types';

interface HomePageProps {
  stats: {
    avgSalary: number;
    totalPositions: number;
    cleanContracts: number;
    uniqueHospitals: number;
  };
  allData: NursePosition[];
  stateData: Array<{ state: string; cities: string[] }>;
}

export default function HomePage({ stats, allData, stateData }: HomePageProps) {
  const { avgSalary, totalPositions, cleanContracts, uniqueHospitals } = stats;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-700 rounded-full opacity-20" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-700 rounded-full opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-800/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/60 border border-blue-500/50 rounded-full px-4 py-2 text-sm font-semibold text-blue-200 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Free · No email required · BLS 2024 data
              </div>

              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
                Know What You&apos;re Worth.<br />
                <span className="text-yellow-400">Know What to Negotiate.</span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
                Free salary data and contract red flag audit for nurses — no recruiter, no upsell, no BS.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="/audit"
                  className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-yellow-400/25 flex items-center gap-2 text-lg"
                >
                  <Shield className="w-5 h-5" />
                  Run Free Contract Audit
                </Link>
                <a
                  href="#calculator"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2 text-lg"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Salary
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  BLS-verified data
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {totalPositions} positions tracked
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Instant results
                </div>
              </div>
            </div>

            {/* Right — mock audit result card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm ml-auto border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Contract Risk Report</span>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">High Risk</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-black text-green-600">9</div>
                    <div className="text-xs text-gray-500">Looks Good</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-black text-yellow-500">2</div>
                    <div className="text-xs text-gray-500">Check</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-black text-red-600">4</div>
                    <div className="text-xs text-gray-500">Red Flags</div>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="text-xs font-bold text-red-700 mb-2 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Clauses to negotiate:
                  </div>
                  {['Non-Compete Clause', 'Cancellation Terms', 'Mandatory Overtime', 'Completion Bonus'].map(item => (
                    <div key={item} className="flex items-center gap-2 bg-red-50 rounded-lg px-3 py-2">
                      <span className="text-red-500 font-bold text-xs">→</span>
                      <span className="text-xs text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-4 text-white">
                  <div className="text-xs font-bold mb-1 text-purple-200">Recommended</div>
                  <div className="text-sm font-bold mb-2">Get the exact counter-offer scripts</div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-300 font-black text-lg">$9</span>
                    <span className="bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-lg">Instant download</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f9fafb"/>
          </svg>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── STAT CARDS ───────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 -mt-4">
          <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <DollarSign className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Avg Salary</div>
            </div>
            <div className="text-2xl font-black text-blue-700">${avgSalary.toLocaleString()}</div>
            <div className="text-xs text-gray-400 mt-1">Nationally</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg">
                <Database className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Positions</div>
            </div>
            <div className="text-2xl font-black text-green-700">{totalPositions}</div>
            <div className="text-xs text-gray-400 mt-1">{uniqueHospitals} hospitals</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Clean</div>
            </div>
            <div className="text-2xl font-black text-emerald-700">{cleanContracts}</div>
            <div className="text-xs text-gray-400 mt-1">No red flags</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Red Flags</div>
            </div>
            <div className="text-2xl font-black text-red-700">{totalPositions - cleanContracts}</div>
            <div className="text-xs text-gray-400 mt-1">Flagged contracts</div>
          </div>
        </div>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 text-lg">Three steps to walk into any negotiation prepared</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-sm">1</div>
              <div className="bg-blue-50 rounded-xl p-4 mb-5 w-fit">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Check Your Market Rate</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Enter your specialty, state, and experience. Get an accurate salary estimate backed by BLS data — so you know your number before the conversation starts.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-black text-sm">2</div>
              <div className="bg-red-50 rounded-xl p-4 mb-5 w-fit">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Audit Your Contract</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Go through 15 contract clauses and mark each one. The tool scores your risk level and shows you exactly which clauses to push back on.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-black text-sm">3</div>
              <div className="bg-yellow-50 rounded-xl p-4 mb-5 w-fit">
                <FileText className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Negotiate With Confidence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Get the exact email scripts and counter-offer language for every red flag clause. Know what to say, how to say it, and when to walk away.</p>
            </div>
          </div>
        </div>

        {/* ── SALARY CALCULATOR ────────────────────────────────────── */}
        <div id="calculator" className="mb-16 scroll-mt-8">
          <SalaryCalculator onGeneratePDF={generateSalaryReportPDF} />
        </div>

        {/* ── INTEL DASHBOARD ──────────────────────────────────────── */}
        <div id="dashboard" className="mb-16 scroll-mt-8">
          <IntelDashboard />
        </div>

        {/* ── AUDIT CTA BANNER ─────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl shadow-xl p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Free Tool</div>
              <h2 className="text-3xl font-black mb-3">Don&apos;t Sign Before Running the Audit</h2>
              <p className="text-blue-200 mb-6 leading-relaxed">
                15 clauses. 3 buttons each. Takes 5 minutes. Gets you a risk score and a list of exactly what to negotiate — before you sign anything.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg"
              >
                <Shield className="w-5 h-5" />
                Start Free Contract Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📋', label: '15 contract clauses reviewed' },
                { icon: '⚡', label: 'Risk score in under 5 min' },
                { icon: '🎯', label: 'Tells you exactly what to push back on' },
                { icon: '💰', label: 'Negotiation scripts available for $9' },
              ].map(item => (
                <div key={item.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-sm text-blue-100 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── POSITIONS TABLE ───────────────────────────────────────── */}
        <div id="browse" className="mb-16 scroll-mt-8">
          <DataTable data={allData} title="Real Nursing Positions Database" />
        </div>

        {/* ── BROWSE BY LOCATION ───────────────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Browse Salaries by Location</h2>
          <p className="text-gray-500 mb-8">Real salary data from specific hospitals and cities nationwide.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stateData.map(({ state, cities }) => (
              <div key={state} className="border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  {state}
                </h3>
                <ul className="space-y-1.5">
                  {cities.map(city => (
                    <li key={city}>
                      <Link
                        href={`/salary/${slugify(state)}/${slugify(city)}`}
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                      >
                        <ArrowRight className="w-3 h-3" />
                        {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY USE THIS ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <Calculator className="w-8 h-8 mb-4 text-blue-200" />
            <h3 className="text-xl font-bold mb-3">Know Your Worth</h3>
            <p className="text-blue-100 leading-relaxed">
              Compare salaries across cities and hospitals to negotiate confidently. BLS-based calculator with accurate estimates by specialty, location, and experience.
            </p>
          </div>
          <div className="bg-red-600 text-white rounded-2xl p-8">
            <Shield className="w-8 h-8 mb-4 text-red-200" />
            <h3 className="text-xl font-bold mb-3">Avoid Contract Traps</h3>
            <p className="text-red-100 leading-relaxed">
              Identify red flags like late payments, mandatory overtime clauses, and unclear cancellation terms before signing. Spot problems before they cost you.
            </p>
          </div>
          <div className="bg-emerald-600 text-white rounded-2xl p-8">
            <Database className="w-8 h-8 mb-4 text-emerald-200" />
            <h3 className="text-xl font-bold mb-3">Transparent Data</h3>
            <p className="text-emerald-100 leading-relaxed">
              No hidden fees, no recruiter pressure. Clear, actionable salary data from the Bureau of Labor Statistics to help you make the best career decision.
            </p>
          </div>
          <div className="bg-indigo-600 text-white rounded-2xl p-8">
            <TrendingUp className="w-8 h-8 mb-4 text-indigo-200" />
            <h3 className="text-xl font-bold mb-3">2026 Market Trends</h3>
            <p className="text-indigo-100 leading-relaxed">
              Stay ahead with projected growth rates, emerging specialties, and compensation trends. Understand where nursing is heading and plan your career accordingly.
            </p>
          </div>
        </div>

      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-3">Nurse Salary Intelligence</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Transparent salary data and contract analysis for nursing professionals. Powered by BLS data with real market insights.
              </p>
              <p className="text-gray-600 text-xs">
                Data sourced from Bureau of Labor Statistics (BLS) May 2024 with 2026 projections. For informational purposes only.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-gray-400">Tools</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#calculator" className="text-gray-400 hover:text-white flex items-center gap-2"><Calculator className="w-4 h-4" />Salary Calculator</a></li>
                <li><a href="#dashboard" className="text-gray-400 hover:text-white flex items-center gap-2"><TrendingUp className="w-4 h-4" />Market Dashboard</a></li>
                <li><Link href="/audit" className="text-gray-400 hover:text-white flex items-center gap-2"><Shield className="w-4 h-4" />Contract Audit</Link></li>
                <li><a href="#browse" className="text-gray-400 hover:text-white flex items-center gap-2"><Database className="w-4 h-4" />Salary Database</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-gray-400">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>BLS Data Integration</li>
                <li>2026 Market Projections</li>
                <li>Specialty Comparisons</li>
                <li>State-by-State Analysis</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Nurse Salary Intelligence. For informational purposes only.</p>
            <p className="text-xs">Salary estimates based on Bureau of Labor Statistics data. Individual results may vary.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
