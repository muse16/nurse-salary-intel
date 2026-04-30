import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Austin RN Salary 2026: $86,320/yr + Top Hospital Pay & Negotiation Tips',
  description: 'Austin RN salary 2026: $86,320 avg, $41.50/hr. Compare pay at St. David\'s, Ascension Dell Seton, and UT Health Austin — plus cost-of-living reality check.',
  alternates: { canonical: 'https://nursesalaryintel.com/austin-rn-salary-2026' },
  openGraph: {
    title: 'Austin RN Salary 2026: $86,320/yr Avg',
    description: 'Austin nurse salary by hospital, specialty, and experience — with COL-adjusted take-home math.',
    url: 'https://nursesalaryintel.com/austin-rn-salary-2026',
  },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$67,000 – $75,500', hourlyRate: '$32.20 – $36.30/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$84,000 – $98,000', hourlyRate: '$40.40 – $47.10/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$98,500 – $118,000', hourlyRate: '$47.40 – $56.70/hr' },
  { label: 'Top 10% earners', avgSalary: '$122,000+', hourlyRate: '$58.70+/hr' },
];

const hospitalData = [
  { label: 'Dell Seton Medical Center at UT', avgSalary: '$88,000 – $112,000', hourlyRate: 'Level 1 Trauma; PSLF eligible' },
  { label: 'St. David\'s Medical Center', avgSalary: '$83,000 – $106,000', hourlyRate: 'Sign-on: $10K–$18K' },
  { label: 'Ascension Seton (main campus)', avgSalary: '$81,000 – $103,000', hourlyRate: 'Sign-on: $8K–$14K' },
  { label: 'St. David\'s North Austin Medical', avgSalary: '$80,500 – $100,000', hourlyRate: 'Strong L&D program' },
  { label: 'UT Health Austin', avgSalary: '$84,000 – $108,000', hourlyRate: 'Outpatient; PSLF eligible' },
  { label: 'Austin State Hospital', avgSalary: '$78,000 – $95,000', hourlyRate: 'State benefits package' },
  { label: 'South Austin Medical Center', avgSalary: '$79,000 – $99,000', hourlyRate: 'HCA system' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$78,500', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$82,400', hourlyRate: '+$3,900' },
  { label: 'L&D', avgSalary: '$85,200', hourlyRate: '+$6,700' },
  { label: 'ER', avgSalary: '$88,800', hourlyRate: '+$10,300' },
  { label: 'OR / Surgical', avgSalary: '$87,500', hourlyRate: '+$9,000' },
  { label: 'ICU / CCU', avgSalary: '$91,200', hourlyRate: '+$12,700' },
  { label: 'NICU', avgSalary: '$88,600', hourlyRate: '+$10,100' },
  { label: 'Trauma (Level 1)', avgSalary: '$97,000', hourlyRate: '+$18,500' },
];

const cityComparison = [
  { label: 'Austin', avgSalary: '$86,320', hourlyRate: 'COL 119 / Effective $72,500' },
  { label: 'Houston', avgSalary: '$82,140', hourlyRate: 'COL 96 / Effective $85,600' },
  { label: 'Dallas', avgSalary: '$80,910', hourlyRate: 'COL 102 / Effective $79,300' },
  { label: 'San Antonio', avgSalary: '$74,800', hourlyRate: 'COL 91 / Effective $82,200' },
  { label: 'Fort Worth', avgSalary: '$76,800', hourlyRate: 'COL 94 / Effective $81,700' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Austin, TX in 2026?',
    answer: 'Austin RNs earn an average of $86,320/year ($41.50/hr) in 2026. New grads start at $67,000–$75,500; experienced nurses (10+ years) earn $98,500–$118,000. Dell Seton and UT Health Austin pay at the top of the market.',
  },
  {
    question: 'Is Austin a good city for nurses?',
    answer: 'Austin has a booming healthcare market driven by rapid population growth, but its cost of living (COL index ~119) is the highest of any major Texas city. On a cost-adjusted basis, Houston and San Antonio nurses take home more in real terms despite lower nominal salaries.',
  },
  {
    question: 'How much do travel nurses earn in Austin?',
    answer: 'Travel nurses in Austin earn $2,200–$3,000/week all-in (base + stipends), with ICU and ER travelers at the high end. Dell Seton and St. David\'s Level 1 Trauma units frequently post travel contracts.',
  },
  {
    question: 'Does Texas have state income tax for nurses?',
    answer: 'No — Texas has no state income tax, which adds $5,000–$9,000/year in take-home pay versus states like California or New York at the same gross salary. This is a major financial advantage for Texas nurses.',
  },
  {
    question: 'What Austin hospitals pay nurses the most?',
    answer: 'Dell Seton Medical Center at UT ($88K–$112K) and UT Health Austin ($84K–$108K) pay the highest base salaries in Austin, often paired with PSLF eligibility. St. David\'s Medical Center offers the most aggressive sign-on bonuses ($10K–$18K).',
  },
];

export default function AustinRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Texas RN Salary', href: '/rn-salary-by-state/texas' },
        { label: 'Austin RN Salary 2026' },
      ]}
      h1="Austin RN Salary 2026: How Much Do Nurses Make in Austin, TX?"
      lastUpdated="April 2026"
      schemaTitle="Austin RN Salary 2026"
      schemaDescription="Average RN salary in Austin, TX in 2026 by hospital, specialty, and experience level."
      schemaUrl="/austin-rn-salary-2026"
      faqs={faqs}
    >
      {/* Featured snippet block */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Austin RNs earn $86,320/year ($41.50/hr)</strong> on average in 2026 — above the
          Texas state average of $77,800 but the highest cost-of-living of any major Texas city.
          New grads start at <strong>$67,000–$75,500</strong>; ICU and trauma nurses reach <strong>$91,000–$122,000</strong>.
          No state income tax adds $5,000–$9,000 in annual take-home.
        </p>
      </div>

      <p>
        Austin&apos;s rapid population growth has made it one of the hottest healthcare hiring markets in Texas,
        with Dell Seton Medical Center, St. David&apos;s HealthCare, and Ascension Seton all expanding capacity.
        But Austin&apos;s rising cost of living means the nominal salary advantage over Houston and Dallas nearly
        disappears on a cost-adjusted basis. Here&apos;s the full picture.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Austin RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Austin RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Austin RN Salary by Hospital (2026)</h2>
      <p>
        Dell Seton Medical Center at UT — Austin&apos;s only Level 1 Trauma Center — pays the highest base salaries
        and offers Public Service Loan Forgiveness (PSLF) eligibility as a nonprofit academic medical center.
        St. David&apos;s leads on sign-on bonuses.
      </p>
      <SalaryTable
        title="Nurse Salary by Hospital in Austin, TX"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Austin RN Salary by Specialty (2026)</h2>
      <p>
        Trauma RNs at Dell Seton earn the highest specialty premium. ICU and NICU nurses are the next tier.
        Med-Surg serves as the baseline; all specialties are shown as premiums above it.
      </p>
      <SalaryTable
        title="Austin RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Austin vs. Other Texas Cities: Cost-Adjusted Pay</h2>
      <p>
        Austin pays the highest nominal salary of any Texas metro, but its cost-of-living index of 119 (vs.
        Houston&apos;s 96) means Houston nurses actually take home more in real purchasing power. If maximizing
        purchasing power is the goal, Houston and San Antonio beat Austin despite lower listed salaries.
      </p>
      <SalaryTable
        title="Texas RN Salary Comparison — Nominal vs. Cost-Adjusted"
        headers={['City', 'Avg Annual Salary', 'COL Index / Real Value']}
        rows={cityComparison}
        source="BLS OEWS 2025 + Cost of Living Index 2026"
      />
      <p>
        See the full comparison: <Link href="/houston-vs-dallas-rn-salary-2026" className="text-primary hover:underline">Houston vs. Dallas RN salary 2026</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Texas Tax Advantage for Austin Nurses</h2>
      <p>
        Texas has no state income tax. On an $86,320 salary, a nurse moving from California (9.3% marginal
        state rate) saves approximately $8,000/year in state taxes alone. For nurses relocating from New York
        or Oregon, the savings are similar. This makes Austin&apos;s effective take-home considerably higher than
        comparable salaries in high-tax states — even accounting for the higher cost of living.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Austin Nurse Salary Negotiation Tips</h2>
      <p>
        Austin&apos;s tight nursing labor market gives candidates real leverage. Key tactics:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Ask about sign-on bonuses upfront.</strong> St. David&apos;s and Ascension Seton routinely offer $10K–$18K for ICU, ER, and L&D. If it&apos;s not offered, ask — these budgets exist even when not advertised.</li>
        <li><strong>Target Level 1 Trauma pay.</strong> Dell Seton&apos;s trauma designation justifies salary floors 10–15% above community hospitals. This is baked into their pay bands.</li>
        <li><strong>Leverage PSLF eligibility.</strong> Both Dell Seton and UT Health Austin qualify for Public Service Loan Forgiveness. If you carry nursing school debt, this benefit is worth $10,000+ per year in effective compensation.</li>
        <li><strong>Night and weekend differentials.</strong> Austin hospitals typically pay 12–18% differentials for overnight shifts and 8–12% for weekends — adding $8,000–$15,000/year for full-time night nurses.</li>
      </ul>
      <p>
        <Link href="/salary-negotiation/nurse-playbook" className="text-primary font-semibold hover:underline text-sm">
          Full nurse salary negotiation playbook →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Texas Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state/texas', label: 'Texas RN Salary 2026', desc: 'Statewide averages and rankings' },
          { href: '/houston-rn-salary-2026', label: 'Houston RN Salary 2026', desc: 'Cost-adjusted leader in Texas' },
          { href: '/dallas-rn-salary-2026', label: 'Dallas RN Salary 2026', desc: 'UT Southwestern, Baylor & Parkland pay' },
          { href: '/houston-vs-dallas-rn-salary-2026', label: 'Houston vs Dallas', desc: 'Side-by-side Texas metro comparison' },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">→</span>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
