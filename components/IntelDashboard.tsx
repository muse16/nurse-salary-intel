'use client';

import { useState } from 'react';
import { TrendingUp, DollarSign, Users, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { stateData, nurseSpecialties, nursingTrends2026 } from '@/lib/bls-data';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function IntelDashboard() {
  const [selectedView, setSelectedView] = useState<'states' | 'specialties' | 'trends'>('trends');

  const topStates = [...stateData]
    .sort((a, b) => b.avgSalary - a.avgSalary)
    .slice(0, 10)
    .map(s => ({ name: s.state.length > 12 ? s.state.slice(0, 10) + '…' : s.state, fullName: s.state, salary: s.avgSalary, col: s.costOfLivingIndex, employed: s.employmentLevel }));

  const topSpecialties = [...nurseSpecialties]
    .sort((a, b) => b.avgSalary - a.avgSalary)
    .slice(0, 8)
    .map(s => ({ name: s.name.length > 14 ? s.name.slice(0, 13) + '…' : s.name, fullName: s.name, salary: s.avgSalary, min: s.minSalary, max: s.maxSalary, desc: s.description }));

  const stateColors = ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa', '#7c3aed', '#8b5cf6', '#a78bfa', '#059669', '#10b981', '#34d399'];

  const formatSalary = (v: number) => `$${(v / 1000).toFixed(0)}k`;

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { fullName?: string } }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 text-sm">
          <div className="font-bold text-gray-900 mb-1">{payload[0]?.payload?.fullName || label}</div>
          <div className="text-blue-600 font-semibold">${payload[0].value.toLocaleString()}/yr</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-indigo-600 p-3 rounded-xl">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-black text-gray-900">Nursing Intel Dashboard</h2>
      </div>
      <p className="text-gray-500 mb-8">
        National compensation data and trends for nursing professionals. Based on BLS statistics with 2026 projections.
      </p>

      {/* Tab Navigation */}
      <div className="flex gap-1 mb-8 bg-gray-100 rounded-xl p-1 w-fit">
        {(['trends', 'states', 'specialties'] as const).map(view => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              selectedView === view
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {view === 'trends' ? '2026 Trends' : view === 'states' ? 'Top States' : 'Specialties'}
          </button>
        ))}
      </div>

      {/* 2026 Trends View */}
      {selectedView === 'trends' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl p-6">
              <TrendingUp className="w-6 h-6 mb-3 text-blue-200" />
              <div className="text-4xl font-black mb-1">{nursingTrends2026.nationalGrowth}%</div>
              <div className="text-blue-200 text-sm font-medium">Projected job growth through 2026</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl p-6">
              <DollarSign className="w-6 h-6 mb-3 text-emerald-200" />
              <div className="text-4xl font-black mb-1">{nursingTrends2026.avgSalaryIncrease}%</div>
              <div className="text-emerald-200 text-sm font-medium">Average annual salary growth</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-2xl p-6">
              <Users className="w-6 h-6 mb-3 text-purple-200" />
              <div className="text-4xl font-black mb-1">{nursingTrends2026.topGrowthSpecialties.length}</div>
              <div className="text-purple-200 text-sm font-medium">High-demand nursing roles</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-500" /> Fastest Growing Specialties
            </h3>
            <div className="space-y-3">
              {nursingTrends2026.topGrowthSpecialties.map((specialty, index) => (
                <div key={index} className="bg-white rounded-xl p-4 flex items-center justify-between border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 text-indigo-700 font-black w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{specialty.specialty}</div>
                      <div className="text-xs text-gray-500">Demand: {specialty.demand}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-xl font-black">{specialty.growth}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">2026 Market Insights</h3>
            <ul className="space-y-3">
              {nursingTrends2026.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Top States View */}
      {selectedView === 'states' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
            Average annual salary across all nursing specialties. Consider cost of living when comparing states.
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">Highest Paying States — Avg Annual Salary</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={topStates} layout="vertical" margin={{ left: 10, right: 40, top: 0, bottom: 0 }}>
                <XAxis type="number" tickFormatter={formatSalary} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6' }} />
                <Bar dataKey="salary" radius={[0, 6, 6, 0]} maxBarSize={28}>
                  {topStates.map((_, index) => (
                    <Cell key={index} fill={stateColors[index % stateColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h4 className="font-bold text-yellow-900 mb-1 text-sm">Cost of Living Considerations</h4>
            <p className="text-xs text-gray-700">COL Index: 100 = national average. A higher salary in a high COL area may have less purchasing power than a lower salary elsewhere.</p>
          </div>
        </div>
      )}

      {/* Specialties View */}
      {selectedView === 'specialties' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
            <Award className="w-4 h-4 text-emerald-600 shrink-0" />
            National average salaries for major nursing specialties. Actual compensation varies by location and experience.
          </div>

          {/* Bar Chart */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4">Nursing Specialties — Avg Annual Salary</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSpecialties} layout="vertical" margin={{ left: 10, right: 40, top: 0, bottom: 0 }}>
                <XAxis type="number" tickFormatter={formatSalary} tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#374151', fontWeight: 600 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f6' }} />
                <Bar dataKey="salary" radius={[0, 6, 6, 0]} maxBarSize={28}>
                  {topSpecialties.map((_, index) => (
                    <Cell key={index} fill={['#059669', '#10b981', '#34d399', '#6ee7b7', '#1d4ed8', '#3b82f6', '#7c3aed', '#a78bfa'][index % 8]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topSpecialties.map((specialty, index) => (
              <div key={specialty.fullName} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-sm">{specialty.fullName}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{specialty.desc}</div>
                  </div>
                  <div className={`ml-2 font-bold px-2 py-1 rounded-lg text-xs ${
                    index === 0 ? 'bg-yellow-100 text-yellow-700' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    'bg-emerald-50 text-emerald-600'
                  }`}>#{index + 1}</div>
                </div>
                <div className="text-xl font-black text-emerald-600 mb-1">${specialty.salary.toLocaleString()}</div>
                <div className="text-xs text-gray-400">${specialty.min.toLocaleString()} – ${specialty.max.toLocaleString()}</div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-1.5 rounded-full"
                    style={{ width: `${((specialty.salary - specialty.min) / (specialty.max - specialty.min)) * 100}%` }}
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
