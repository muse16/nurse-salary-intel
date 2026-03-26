'use client';

import Link from 'next/link';
import DataTable from '@/components/DataTable';
import SalaryCalculator from '@/components/SalaryCalculator';
import IntelDashboard from '@/components/IntelDashboard';
import { generateSalaryReportPDF } from '@/lib/pdf-generator';
import { Calculator, TrendingUp, Shield, Database, Award, CheckCircle } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nurse Salary Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transparent salary data, market trends, and contract analysis for nursing professionals.
              Make informed career decisions with real BLS data and 2026 projections.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Calculate Salary
              </a>
              <a
                href="#dashboard"
                className="bg-blue-700 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-800 transition-all border-2 border-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View Market Trends
              </a>
              <Link
                href="/audit"
                className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                Contract Audit
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Database className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-sm font-medium text-gray-600">Average Salary</div>
            </div>
            <div className="text-3xl font-bold text-blue-600">
              ${avgSalary.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 mt-1">Nationally</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm font-medium text-gray-600">Total Positions</div>
            </div>
            <div className="text-3xl font-bold text-green-600">
              {totalPositions}
            </div>
            <div className="text-xs text-gray-500 mt-1">Across {uniqueHospitals} hospitals</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-emerald-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-sm font-medium text-gray-600">Clean Contracts</div>
            </div>
            <div className="text-3xl font-bold text-emerald-600">
              {cleanContracts}
            </div>
            <div className="text-xs text-gray-500 mt-1">No red flags identified</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-600 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-sm font-medium text-gray-600">Red Flags</div>
            </div>
            <div className="text-3xl font-bold text-red-600">
              {totalPositions - cleanContracts}
            </div>
            <div className="text-xs text-gray-500 mt-1">Contracts with concerns</div>
          </div>
        </div>

        {/* Salary Calculator Section */}
        <div id="calculator" className="mb-16 scroll-mt-8">
          <SalaryCalculator onGeneratePDF={generateSalaryReportPDF} />
        </div>

        {/* Intel Dashboard Section */}
        <div id="dashboard" className="mb-16 scroll-mt-8">
          <IntelDashboard />
        </div>

        {/* Why Use This Tool */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Nurse Salary Intelligence Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                Know Your Worth
              </h3>
              <p className="text-gray-700">
                Compare salaries across cities and hospitals to negotiate confidently.
                Our BLS-based calculator provides accurate estimates based on your specialty,
                location, and experience level.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Avoid Contract Traps
              </h3>
              <p className="text-gray-700">
                Identify red flags like late payments, mandatory overtime clauses, and unclear
                cancellation terms before signing. Our audit tool helps you spot problems early.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-600 mb-3 flex items-center gap-2">
                <Database className="w-6 h-6" />
                Transparent Data
              </h3>
              <p className="text-gray-700">
                No hidden fees, no recruiter pressure. Just clear, actionable salary data sourced
                from Bureau of Labor Statistics and real market data to help you make the best
                decision for your career.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-indigo-600 mb-3 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                2026 Market Trends
              </h3>
              <p className="text-gray-700">
                Stay ahead with projected growth rates, emerging specialties, and compensation
                trends. Understand where the nursing market is heading and plan your career
                accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* All Positions Table */}
        <div id="browse" className="mb-16 scroll-mt-8">
          <DataTable data={allData} title="Real Nursing Positions Database" />
        </div>

        {/* Browse by Location */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Browse Salaries by Location
          </h2>
          <p className="text-gray-600 mb-6">
            Explore real salary data from specific hospitals and cities nationwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateData.map(({ state, cities }) => (
              <div key={state} className="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  {state}
                </h3>
                <ul className="space-y-2">
                  {cities.map(city => (
                    <li key={city}>
                      <Link
                        href={`/salary/${slugify(state)}/${slugify(city)}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                      >
                        <span>{city}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Sign Without Auditing Your Contract
          </h2>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Use our free Contract Red Flag Audit Tool to review payment terms, cancellation clauses,
            overtime policies, and more. Protect your rights and maximize your earnings.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-white text-red-600 font-bold py-4 px-10 rounded-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
          >
            <Shield className="w-5 h-5" />
            Start Your Contract Audit
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-3">Nurse Salary Intelligence</h3>
              <p className="text-gray-400 text-sm mb-4">
                Transparent salary data and contract analysis for nursing professionals.
                Powered by BLS data with real market insights.
              </p>
              <p className="text-gray-500 text-xs">
                Data sourced from Bureau of Labor Statistics (BLS) May 2024 with 2026 projections.
                For informational purposes only.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#calculator" className="text-gray-400 hover:text-white flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Salary Calculator
                  </a>
                </li>
                <li>
                  <a href="#dashboard" className="text-gray-400 hover:text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Market Dashboard
                  </a>
                </li>
                <li>
                  <Link href="/audit" className="text-gray-400 hover:text-white flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Contract Audit
                  </Link>
                </li>
                <li>
                  <a href="#browse" className="text-gray-400 hover:text-white flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Salary Database
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-400">BLS Data Integration</li>
                <li className="text-gray-400">2026 Market Projections</li>
                <li className="text-gray-400">Specialty Comparisons</li>
                <li className="text-gray-400">State-by-State Analysis</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2026 Nurse Salary Intelligence. For informational purposes only.</p>
            <p className="mt-2 text-xs">
              Salary estimates based on Bureau of Labor Statistics data. Individual results may vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
