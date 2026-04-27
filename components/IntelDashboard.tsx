'use client';

import { useState } from 'react';
import { stateData, nurseSpecialties, nursingTrends2026 } from '@/lib/bls-data';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

export default function IntelDashboard() {
  const [selectedView, setSelectedView] = useState<'states' | 'specialties' | 'trends'>('trends');

  const topStates = [...stateData]
    .sort((a, b) => b.avgSalary - a.avgSalary)
    .slice(0, 10)
    .map(s => ({ name: s.state.length > 12 ? s.state.slice(0, 10) + '\u2026' : s.state, fullName: s.state, salary: s.avgSalary, col: s.costOfLivingIndex, employed: s.employmentLevel }));

  const topSpecialties = [...nurseSpecialties]
    .sort((a, b) => b.avgSalary - a.avgSalary)
    .slice(0, 8)
    .map(s => ({ name: s.name.length > 14 ? s.name.slice(0, 13) + '\u2026' : s.name, fullName: s.name, salary: s.avgSalary, min: s.minSalary, max: s.maxSalary, desc: s.description }));

  const stateColors = ['#004ac6', '#0053db', '#2563eb', '#3b82f6', '#60a5fa', '#004ac6', '#0053db', '#2563eb', '#3b82f6', '#60a5fa'];

  const formatSalary = (v: number) => `$${(v / 1000).toFixed(0)}k`;

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; payload: { fullName?: string } }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface-container-lowest ghost-border rounded-xl shadow-sunken px-4 py-3 text-sm">
          <div className="font-bold text-on-surface mb-1">{payload[0]?.payload?.fullName || label}</div>
          <div className="text-primary font-semibold">${payload[0].value.toLocaleString()}/yr</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm ghost-border">
      {/* Tab Navigation */}
      <div className="flex gap-1 mb-8 bg-surface-container rounded-xl p-1 w-fit">
        {(['trends', 'states', 'specialties'] as const).map(view => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
              selectedView === view
                ? 'bg-surface-container-lowest text-primary shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {view === 'trends' ? '2026 Trends' : view === 'states' ? 'Top States' : 'Specialties'}
          </button>
        ))}
      </div>

      {/* 2026 Trends View */}
      {selectedView === 'trends' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-primary text-on-primary rounded-2xl p-6">
              <svg className="w-6 h-6 mb-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <div className="text-4xl font-headline font-extrabold mb-1">{nursingTrends2026.nationalGrowth}%</div>
              <div className="text-white/90 text-sm font-medium">Projected job growth through 2026</div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container rounded-2xl p-6">
              <svg className="w-6 h-6 mb-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="text-4xl font-headline font-extrabold mb-1">{nursingTrends2026.avgSalaryIncrease}%</div>
              <div className="text-sm font-medium">Average annual salary growth</div>
            </div>
            <div className="bg-tertiary-fixed text-on-tertiary-fixed rounded-2xl p-6">
              <svg className="w-6 h-6 mb-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <div className="text-4xl font-headline font-extrabold mb-1">{nursingTrends2026.topGrowthSpecialties.length}</div>
              <div className="text-sm font-medium">High-demand nursing roles</div>
            </div>
          </div>

          <div className="bg-surface-container rounded-2xl p-6">
            <h3 className="text-lg font-headline font-bold text-on-surface mb-6">Fastest Growing Specialties</h3>
            <div className="space-y-3">
              {nursingTrends2026.topGrowthSpecialties.map((specialty, index) => (
                <div key={index} className="bg-surface-container-lowest rounded-xl p-4 flex items-center justify-between ghost-border">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-fixed text-primary font-extrabold w-8 h-8 rounded-full flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">{specialty.specialty}</div>
                      <div className="text-xs text-on-surface-variant">Demand: {specialty.demand}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                    <span className="text-xl font-headline font-extrabold">{specialty.growth}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-fixed/30 ghost-border rounded-2xl p-6">
            <h3 className="text-lg font-headline font-bold text-primary mb-4">2026 Market Insights</h3>
            <ul className="space-y-3">
              {nursingTrends2026.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="gradient-primary text-on-primary rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {index + 1}
                  </div>
                  <span className="text-on-surface-variant text-sm leading-relaxed">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Top States View */}
      {selectedView === 'states' && (
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-on-surface-variant text-sm bg-primary-fixed/30 ghost-border rounded-xl px-4 py-3">
            <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Average annual salary across all nursing specialties. Consider cost of living when comparing states.
          </div>

          <div className="bg-surface-container rounded-2xl p-6">
            <h3 className="text-base font-headline font-bold text-on-surface mb-4">Highest Paying States &mdash; Avg Annual Salary</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={topStates} layout="vertical" margin={{ left: 10, right: 40, top: 0, bottom: 0 }}>
                <XAxis type="number" tickFormatter={formatSalary} tick={{ fontSize: 11, fill: '#737686' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#191c1d', fontWeight: 600 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f5' }} />
                <Bar dataKey="salary" radius={[0, 6, 6, 0]} maxBarSize={28}>
                  {topStates.map((_, index) => (
                    <Cell key={index} fill={stateColors[index % stateColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-tertiary-fixed/30 ghost-border rounded-xl p-4">
            <h4 className="font-bold text-on-tertiary-container mb-1 text-sm">Cost of Living Considerations</h4>
            <p className="text-xs text-on-surface-variant">COL Index: 100 = national average. A higher salary in a high COL area may have less purchasing power than a lower salary elsewhere.</p>
          </div>
        </div>
      )}

      {/* Specialties View */}
      {selectedView === 'specialties' && (
        <div className="space-y-8">
          <div className="flex items-center gap-2 text-on-surface-variant text-sm bg-secondary-container/30 ghost-border rounded-xl px-4 py-3">
            <svg className="w-4 h-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            National average salaries for major nursing specialties. Actual compensation varies by location and experience.
          </div>

          <div className="bg-surface-container rounded-2xl p-6">
            <h3 className="text-base font-headline font-bold text-on-surface mb-4">Nursing Specialties &mdash; Avg Annual Salary</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topSpecialties} layout="vertical" margin={{ left: 10, right: 40, top: 0, bottom: 0 }}>
                <XAxis type="number" tickFormatter={formatSalary} tick={{ fontSize: 11, fill: '#737686' }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#191c1d', fontWeight: 600 }} axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f3f4f5' }} />
                <Bar dataKey="salary" radius={[0, 6, 6, 0]} maxBarSize={28}>
                  {topSpecialties.map((_, index) => (
                    <Cell key={index} fill={['#004ac6', '#0053db', '#2563eb', '#3b82f6', '#004ac6', '#0053db', '#2563eb', '#3b82f6'][index % 8]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topSpecialties.map((specialty, index) => (
              <div key={specialty.fullName} className="bg-surface-container-lowest ghost-border rounded-xl p-5 hover:shadow-sunken transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-bold text-on-surface text-sm">{specialty.fullName}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{specialty.desc}</div>
                  </div>
                  <div className={`ml-2 font-bold px-2.5 py-1 rounded-full text-xs ${
                    index === 0 ? 'bg-tertiary-fixed text-on-tertiary-container' :
                    index === 1 ? 'bg-secondary-container text-on-secondary-container' :
                    'bg-primary-fixed text-primary'
                  }`}>#{index + 1}</div>
                </div>
                <div className="text-xl font-headline font-extrabold text-primary mb-1">${specialty.salary.toLocaleString()}</div>
                <div className="text-xs text-on-surface-variant">${specialty.min.toLocaleString()} &ndash; ${specialty.max.toLocaleString()}</div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-3">
                  <div
                    className="gradient-primary h-1.5 rounded-full opacity-60"
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
