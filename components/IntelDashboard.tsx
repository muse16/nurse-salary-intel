'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Users, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { stateData, nurseSpecialties, nursingTrends2026 } from '@/lib/bls-data';

export default function IntelDashboard() {
  const [selectedView, setSelectedView] = useState<'states' | 'specialties' | 'trends'>('trends');

  const topStates = [...stateData]
    .sort((a, b) => b.avgSalary - a.avgSalary)
    .slice(0, 10);

  const topSpecialties = [...nurseSpecialties]
    .sort((a, b) => b.avgSalary - a.avgSalary)
    .slice(0, 8);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-purple-50 to-indigo-600 p-3 rounded-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Nursing Intel Dashboard</h2>
      </div>

      <p className="text-gray-600 mb-8">
        National compensation data and trends for nursing professionals. All data based on BLS statistics with 2026 projections.
      </p>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-8 border-b-2 border-gray-200">
        <button
          onClick={() => setSelectedView('trends')}
          className={`px-6 py-3 font-semibold transition-all ${
            selectedView === 'trends'
              ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          2026 Trends
        </button>
        <button
          onClick={() => setSelectedView('states')}
          className={`px-6 py-3 font-semibold transition-all ${
            selectedView === 'states'
              ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Top States
        </button>
        <button
          onClick={() => setSelectedView('specialties')}
          className={`px-6 py-3 font-semibold transition-all ${
            selectedView === 'specialties'
              ? 'text-blue-600 border-b-2 border-blue-600 -mb-0.5'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Specialties
        </button>
      </div>

      {/* 2026 Trends View */}
      {selectedView === 'trends' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900">National Growth</h3>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {nursingTrends2026.nationalGrowth}%
              </div>
              <p className="text-sm text-gray-700">Projected job growth through 2026</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-gray-900">Salary Increase</h3>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {nursingTrends2026.avgSalaryIncrease}%
              </div>
              <p className="text-sm text-gray-700">Average annual salary growth</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-purple-600" />
                <h3 className="font-bold text-gray-900">Hot Specialties</h3>
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {nursingTrends2026.topGrowthSpecialties.length}
              </div>
              <p className="text-sm text-gray-700">High-demand nursing roles</p>
            </div>
          </div>

          {/* Top Growth Specialties */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              Fastest Growing Specialties
            </h3>
            <div className="space-y-3">
              {nursingTrends2026.topGrowthSpecialties.map((specialty, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 text-indigo-600 font-bold w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{specialty.specialty}</div>
                      <div className="text-sm text-gray-600">Demand: {specialty.demand}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">
                      {specialty.growth}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">2026 Market Insights</h3>
            <ul className="space-y-3">
              {nursingTrends2026.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Top States View */}
      {selectedView === 'states' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-600" />
              Highest Paying States for Nurses
            </h3>
            <p className="text-gray-700">
              Based on average annual salary across all nursing specialties. Remember to consider cost of living when evaluating opportunities.
            </p>
          </div>

          <div className="space-y-3">
            {topStates.map((state, index) => (
              <div key={state.state} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-indigo-400 hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`font-bold w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                      index === 0 ? 'bg-yellow-100 text-yellow-700' :
                      index === 1 ? 'bg-gray-100 text-gray-700' :
                      index === 2 ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-50 text-blue-600'
                    }`}>
                      #{index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{state.state}</div>
                      <div className="text-sm text-gray-600">
                        {state.employmentLevel.toLocaleString()} employed nurses
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      ${state.avgSalary.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">avg. annual salary</div>
                    <div className="text-xs text-gray-600 mt-1">
                      COL Index: {state.costOfLivingIndex}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-5 mt-6">
            <h4 className="font-bold text-yellow-900 mb-2">Cost of Living Considerations</h4>
            <p className="text-sm text-gray-700">
              COL Index shows the relative cost of living (100 = national average). A higher salary in a high COL area may have less purchasing power than a lower salary in a low COL area. Consider your take-home pay after adjusting for living expenses.
            </p>
          </div>
        </div>
      )}

      {/* Specialties View */}
      {selectedView === 'specialties' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              Nursing Specialties by Compensation
            </h3>
            <p className="text-gray-700">
              National average salaries for major nursing specialties. Actual compensation varies by location and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topSpecialties.map((specialty, index) => (
              <div key={specialty.id} className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-green-400 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{specialty.name}</div>
                    <div className="text-sm text-gray-600 mb-3">{specialty.description}</div>
                  </div>
                  <div className={`ml-3 font-bold px-3 py-1 rounded-lg text-sm ${
                    index === 0 ? 'bg-yellow-100 text-yellow-700' :
                    index === 1 ? 'bg-gray-100 text-gray-700' :
                    'bg-green-50 text-green-600'
                  }`}>
                    #{index + 1}
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    ${specialty.avgSalary.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">avg.</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>${specialty.minSalary.toLocaleString()} min</span>
                  <span>${specialty.maxSalary.toLocaleString()} max</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    style={{
                      width: `${((specialty.avgSalary - specialty.minSalary) /
                              (specialty.maxSalary - specialty.minSalary)) * 100}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
