'use client';

import Link from 'next/link';
import DataTable from '@/components/DataTable';
import LiveJobsTable from '@/components/LiveJobsTable';
import SalaryCalculator from '@/components/SalaryCalculator';
import IntelDashboard from '@/components/IntelDashboard';
import SiteNav from '@/components/SiteNav';
import { generateSalaryReportPDF } from '@/lib/pdf-generator';
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
  const { avgSalary, totalPositions, cleanContracts } = stats;

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">

      {/* ── GLASS NAV ─────────────────────────────────────────── */}
      <SiteNav />

      {/* ── HERO SECTION ─────────────────────────────────────── */}
      <header className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10" />
          <img
            className="w-full h-full object-cover object-center grayscale-[20%]"
            src="/images/hero-nurse.jpg"
            alt="Professional nurse in modern medical setting"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-6">
              Empowering Healthcare Careers
            </span>

            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface text-editorial leading-[1.1] mb-6">
              Know your worth.<br />
              <span className="text-primary">Know What to Negotiate.</span>
            </h1>

            <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed mb-10 max-w-xl">
              Unbiased salary transparency and contract intelligence designed by nurses, for nurses. Get the data you need to negotiate with authority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="gradient-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-sunken flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
              >
                Run Free Contract Audit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </Link>
              <a
                href="#calculator"
                className="bg-surface-container-lowest border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-fixed transition-colors flex items-center justify-center"
              >
                Calculate Salary
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── NURSE SALARY CALCULATOR (overlapping hero) ───── */}
        <section id="calculator" className="py-24 px-6 bg-surface-container-low scroll-mt-40">
          <div className="max-w-7xl mx-auto">
            <div className="relative -mt-32 z-30 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20">
              <div className="bg-gradient-to-r from-primary to-blue-800 px-8 md:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">Free Tool — No Sign-Up Required</span>
                  <h1 className="font-headline font-bold text-2xl md:text-3xl text-white">Nurse Salary Calculator</h1>
                  <p className="text-blue-100 text-sm mt-1">Estimate your RN pay by state, specialty, and experience using real BLS data.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <div className="text-blue-200 text-xs">Updated with 2026 BLS data</div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 md:p-12">
                <SalaryCalculator onGeneratePDF={generateSalaryReportPDF} />
              </div>
            </div>
          </div>
        </section>

        {/* ── NURSING INTEL DASHBOARD ─────────────────────── */}
        <section id="dashboard" className="py-24 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="font-headline font-extrabold text-4xl text-editorial mb-4">Nursing Intel Dashboard</h2>
                <p className="text-on-surface-variant text-lg">Real-time market signals and projection data.</p>
              </div>
              <a href="#positions" className="text-primary font-bold flex items-center gap-2 hover:underline">
                View Full Market Report
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* 3 Stat Cards — matching mockup */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 — Market Growth */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm ghost-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  </div>
                  <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Market Growth</span>
                </div>
                <div className="text-4xl font-headline font-extrabold mb-2">+14.2%</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Projected job demand growth over the next 24 months in specialty settings.</p>
              </div>

              {/* Card 2 — Salary Average */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm ghost-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center">
                    <svg className="w-6 h-6 text-on-tertiary-fixed-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Salary Average</span>
                </div>
                <div className="text-4xl font-headline font-extrabold mb-2">${avgSalary.toLocaleString()}</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">National median for BSN-prepared nurses with 5+ years of clinical experience.</p>
              </div>

              {/* Card 3 — Contract Health */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm ghost-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                    <svg className="w-6 h-6 text-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Contract Health</span>
                </div>
                <div className="text-4xl font-headline font-extrabold mb-2">{Math.round((cleanContracts / totalPositions) * 100)}%</div>
                <p className="text-on-surface-variant text-sm leading-relaxed">Of audited contracts are clean &mdash; {totalPositions - cleanContracts} flagged with red flag clauses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── POSITIONS TABLE ────────────────────────────── */}
        <section id="positions" className="py-24 px-6 bg-surface-container-low scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="font-headline font-extrabold text-4xl text-editorial mb-4">Real Nursing Positions</h2>
              <p className="text-on-surface-variant text-lg">Live openings posted in the last 2 weeks with direct apply links.</p>
            </div>
            <LiveJobsTable />
          </div>
        </section>

        {/* ── BROWSE SALARIES BY LOCATION — City Image Cards ── */}
        <section id="browse" className="py-24 px-6 bg-surface scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline font-extrabold text-4xl text-editorial mb-4">Browse Salaries by Location</h2>
              <p className="text-on-surface-variant text-lg">Compare rates across the nation&apos;s top nursing hubs.</p>
            </div>

            {/* City Image Grid — matching mockup */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { city: 'San Francisco', state: 'California', avg: '$154,000', img: '/images/city-sf.jpg' },
                { city: 'New York', state: 'New York', avg: '$128,500', img: '/images/city-ny.jpg' },
                { city: 'Chicago', state: 'Illinois', avg: '$98,200', img: '/images/city-chicago.jpg' },
                { city: 'Dallas', state: 'Texas', avg: '$94,200', img: '/images/city-dallas.jpg' },
              ].map(({ city, state, avg, img }) => (
                <Link
                  key={city}
                  href={`/salary/${slugify(state)}/${slugify(city)}`}
                  className="group relative overflow-hidden rounded-2xl aspect-square flex flex-col justify-end p-6"
                >
                  <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-700">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      src={img}
                      alt={city}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-xl">{city}</h3>
                    <p className="text-white/80 text-sm">Avg: {avg}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Full State/City Links below */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateData.map(({ state, cities }) => (
                <div key={state} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm ghost-border hover:shadow-sunken transition-all">
                  <h3 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {state}
                  </h3>
                  <ul className="space-y-2">
                    {cities.map(city => (
                      <li key={city}>
                        <Link
                          href={`/salary/${slugify(state)}/${slugify(city)}`}
                          className="text-sm text-primary hover:text-primary-container hover:underline flex items-center gap-1.5 py-0.5"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEL DASHBOARD (detailed) ─────────────────── */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <IntelDashboard />
          </div>
        </section>
      </main>

      {/* ── FOOTER — matching mockup ──────────────────────── */}
      <footer className="bg-surface-container-low border-t border-outline-variant/20">
        <div className="w-full py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="font-bold text-on-surface text-lg font-headline">Nurse Salary Intel</div>
            <p className="text-on-surface-variant text-sm text-center md:text-left">&copy; 2026 Nurse Salary Intel. Empowering healthcare professionals through data.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Privacy Policy</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Terms of Service</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Contact Support</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-opacity opacity-80 hover:opacity-100 underline decoration-primary/30 text-sm">Data Methodology</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
