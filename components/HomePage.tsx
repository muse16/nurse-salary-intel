'use client';

import Link from 'next/link';
import DataTable from '@/components/DataTable';
import LiveJobsTable from '@/components/LiveJobsTable';
import AdSenseSlot from '@/components/AdSenseSlot';
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

        {/* ── SEO CONTENT — BELOW CALCULATOR ──────────────── */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* How to Use */}
            <div>
              <h2 className="font-headline font-extrabold text-3xl text-editorial mb-6">How to Use the Nurse Salary Calculator</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
                Our nurse salary calculator estimates your RN pay based on four inputs: state, specialty, years of experience, and employment type. Each factor is weighted using 2026 BLS OEWS data combined with real contract data from NurseSalaryIntel&apos;s database of nursing positions.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
                To get your estimate, select your state from the dropdown — this sets the baseline pay for your region. Then choose your specialty (ICU, ER, Med-Surg, etc.) and your years of experience. Finally, select whether you are a staff nurse or travel nurse. The calculator applies a specialty multiplier and experience adjustment to generate a personalized salary range.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                The result shows your estimated annual salary, hourly rate, and how your pay compares to the state average. Use the &quot;Generate Report&quot; option to download a full salary breakdown as a PDF — useful for job offer comparisons and salary negotiations.
              </p>
            </div>

            {/* Average RN Salary by State */}
            <div>
              <h2 className="font-headline font-extrabold text-3xl text-editorial mb-6">Average RN Salary by State</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                RN pay varies by more than $57,000 between the highest and lowest-paying states. Geography is the single biggest factor in nurse compensation — even more than experience or specialty in many cases. Here is a snapshot of average RN salaries across key states in 2026:
              </p>
              <div className="overflow-x-auto rounded-xl border border-outline-variant">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant">
                      <th className="text-left px-5 py-3 font-bold text-on-surface">State</th>
                      <th className="text-left px-5 py-3 font-bold text-on-surface">Avg. Annual Salary</th>
                      <th className="text-left px-5 py-3 font-bold text-on-surface">Avg. Hourly Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {[
                      { state: 'California', salary: '$124,000', hourly: '$59.62/hr', href: '/rn-salary-by-state/california' },
                      { state: 'Hawaii', salary: '$106,530', hourly: '$51.22/hr', href: '/rn-salary-by-state/highest-paying-states' },
                      { state: 'Oregon', salary: '$102,700', hourly: '$49.38/hr', href: '/rn-salary-by-state/highest-paying-states' },
                      { state: 'Washington', salary: '$100,890', hourly: '$48.51/hr', href: '/rn-salary-by-state/highest-paying-states' },
                      { state: 'New York', salary: '$98,560', hourly: '$47.38/hr', href: '/rn-salary-by-state/new-york' },
                      { state: 'Nevada', salary: '$90,210', hourly: '$43.37/hr', href: '/rn-salary-by-state/highest-paying-states' },
                      { state: 'Arizona', salary: '$82,000', hourly: '$39.42/hr', href: '/rn-salary-by-state/arizona' },
                      { state: 'Texas', salary: '$81,510', hourly: '$39.19/hr', href: '/rn-salary-by-state/texas' },
                      { state: 'Florida', salary: '$76,450', hourly: '$36.75/hr', href: '/rn-salary-by-state/florida' },
                      { state: 'Minnesota', salary: '$88,200', hourly: '$42.40/hr', href: '/rn-salary-by-state' },
                      { state: 'National Average', salary: '$89,010', hourly: '$42.79/hr', href: null },
                    ].map(({ state, salary, hourly, href }) => (
                      <tr key={state} className="hover:bg-surface-container-low transition-colors">
                        <td className="px-5 py-3 font-medium text-on-surface">
                          {href ? <Link href={href} className="text-primary hover:underline">RN salary in {state}</Link> : state}
                        </td>
                        <td className="px-5 py-3 text-on-surface-variant">{salary}</td>
                        <td className="px-5 py-3 text-on-surface-variant">{hourly}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-on-surface-variant text-sm mt-3">Source: BLS OEWS 2025 + NurseSalaryIntel data</p>
              <div className="mt-4">
                <Link href="/rn-salary-by-state" className="text-primary font-semibold hover:underline text-sm">
                  See the full RN salary by state breakdown →
                </Link>
              </div>
            </div>

            {/* Factors That Affect Nurse Salary */}
            <div>
              <h2 className="font-headline font-extrabold text-3xl text-editorial mb-6">Factors That Affect Nurse Salary</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Location</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    State and metro area are the most powerful salary drivers. California pays RNs $124,000/year on average — over $47,000 more than Mississippi ($66,590). Within states, the gap between major metros and rural areas can be $10,000–$25,000. Urban markets with strong union presence (California Nurses Association, NYSNA) tend to pay the most. No-income-tax states like Texas, Florida, and Washington often deliver better take-home pay than their raw salaries suggest.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Experience</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Years of experience correlates strongly with RN pay. Entry-level nurses (0–2 years) typically earn 15–25% below the state average. At 3–5 years, nurses approach or exceed the average, especially if they hold specialty certifications. At 10+ years, senior nurses often earn 20–35% above average at the bedside — and significantly more in management, education, or advanced practice roles.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Specialty</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Specialty adds a meaningful premium above staff RN base pay. ICU nurses typically earn 10–18% more than Med-Surg nurses. ER nurses earn 8–14% more. CRNAs earn the most of any nursing role — averaging $198,000–$258,000 depending on state. Nurse Practitioners average $118,000–$155,000. Certifications like CCRN, CEN, and CNOR add $5,000–$12,000 on top of base.
                  </p>
                </div>

                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Shift Type</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Night shift, weekend, and overtime pay can significantly boost annual income. Most hospitals offer a night differential of 10–25% above base. Weekend premiums add another 5–15%. Nurses who consistently work nights and pick up overtime can add $10,000–$30,000 per year over their base salary. Travel nurses earn the most — typically 20–50% more than staff RNs in the same location, with the largest premiums in hard-to-fill markets like Alaska, Hawaii, and rural states.
                  </p>
                </div>
              </div>
            </div>

            {/* Nurse Salary by City */}
            <div>
              <h2 className="font-headline font-extrabold text-3xl text-editorial mb-6">Nurse Salary by City</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                City-level data gives you the most precise salary benchmarks. Explore detailed salary breakdowns, top-paying hospitals, and contract data for major nursing markets:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/salary/california/san-francisco', label: 'RN Salary in San Francisco, CA' },
                  { href: '/salary/new-york/new-york', label: 'RN Salary in New York City, NY' },
                  { href: '/salary/texas/houston', label: 'RN Salary in Houston, TX' },
                  { href: '/salary/texas/dallas', label: 'RN Salary in Dallas, TX' },
                  { href: '/salary/florida/miami', label: 'RN Salary in Miami, FL' },
                  { href: '/salary/florida/tampa', label: 'RN Salary in Tampa, FL' },
                  { href: '/salary/arizona/phoenix', label: 'RN Salary in Phoenix, AZ' },
                  { href: '/salary/california/los-angeles', label: 'RN Salary in Los Angeles, CA' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors text-sm font-semibold text-primary"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-headline font-extrabold text-3xl text-editorial mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="border-b border-outline-variant pb-6">
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-3">How accurate is this nurse salary calculator?</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    The calculator uses 2026 BLS OEWS data as the baseline and adjusts it with real contract and position data from NurseSalaryIntel&apos;s database. Results are estimates — actual pay depends on your employer, union status, shift schedule, and negotiated rate. The calculator is most accurate for staff RN roles in major metro areas where we have the most data points. For travel nurse estimates, actual weekly packages vary significantly by agency and contract.
                  </p>
                </div>
                <div className="border-b border-outline-variant pb-6">
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-3">Does RN pay vary by state?</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Yes — significantly. The gap between the highest-paying state (California, $124,000/year) and the lowest-paying state (Mississippi, $66,590/year) is over $57,000 annually. State factors that drive pay include nurse-to-patient ratio laws, union density, cost of living, and the severity of local nursing shortages. No-income-tax states like Texas, Florida, and Washington often deliver better real take-home pay than their nominal salaries suggest when compared to high-tax states like California and New York.
                  </p>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-3">How much do travel nurses make?</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed">
                    Travel nurses typically earn 20–50% more than staff RNs in the same location. Weekly all-in packages (base pay + housing stipend + meals) range from $1,800–$2,200/week in lower-demand markets to $2,800–$3,600/week in high-demand states like California, New York, and Hawaii. ICU, OR, and ER travel nurses command the highest rates. The premium is largest during staffing crisis periods and in rural or hard-to-fill markets like Alaska. Annual travel nurse income commonly ranges from $90,000 to $150,000+ depending on state and specialty.
                  </p>
                </div>
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

        {/* ── AD SLOT 1 — between calculator and positions ── */}
        <div className="py-4 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <AdSenseSlot position="header" />
          </div>
        </div>

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

        {/* ── AD SLOT 2 — between positions and browse ── */}
        <div className="py-4 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <AdSenseSlot position="mid-content" />
          </div>
        </div>

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

            {/* Night Shift Differential callout */}
            <div className="mb-12">
              <Link
                href="/salary-negotiation/night-shift-differential-pay"
                className="block bg-primary/10 border border-primary/30 rounded-2xl p-6 hover:bg-primary/15 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface text-lg mb-1">Night Shift Differential Guide — How Much More Do Night Nurses Earn?</h3>
                    <p className="text-on-surface-variant text-sm">Night shift nurses earn 10–25% above base pay. See rates by specialty, hospital system, and state.</p>
                    <span className="text-primary text-sm font-semibold mt-2 inline-block">Read the guide →</span>
                  </div>
                </div>
              </Link>
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
