import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Maine RN Salary 2026: $78,920/yr — Oldest State, Highest Nursing Demand',
  description:
    'Maine RNs average $78,920/yr ($37.94/hr) in 2026. See pay by city, MaineHealth vs. Northern Light rates, rural shortage bonuses, and why demand is surging in the oldest US state.',
};

const faqs = [
  {
    question: 'How much do nurses make in Maine?',
    answer: 'The average RN salary in Maine is $78,920/year ($37.94/hr) in 2026. Portland-area nurses at Maine Medical Center earn more ($83,000–$93,000), while rural northern Maine pays less. Maine has among the highest per-capita demand for nurses in the US due to its rapidly aging population.',
  },
  {
    question: 'Why is nursing in Maine in such high demand?',
    answer: 'Maine is the oldest state by median age in the US. Its disproportionately large senior population drives high demand for hospital, home health, and long-term care nurses. Combined with ongoing rural workforce shortages, Maine nurses have strong job security and growing leverage in salary negotiations.',
  },
  {
    question: 'What is the biggest hospital employer in Maine?',
    answer: 'MaineHealth is the dominant health system, anchored by Maine Medical Center in Portland — the state\'s only Level 1 Trauma Center. Northern Light Health covers central and northern Maine. Both systems offer sign-on bonuses for specialty roles and tuition assistance.',
  },
  {
    question: 'Are there nursing shortage incentives in Maine?',
    answer: 'Yes. Maine has extensive HPSA designations in rural and northern counties. Nurses in qualifying areas can access NHSC Loan Repayment (up to $50,000 tax-free for 2 years) and state-funded loan assistance through MaineHEAF. For new grads with federal loans, rural Maine postings can be financially compelling.',
  },
];

const cityData = [
  { label: 'Portland', avgSalary: '$83,000–$93,000', hourlyRate: '$39.90–$44.71/hr' },
  { label: 'Lewiston / Auburn', avgSalary: '$77,000–$86,000', hourlyRate: '$37.02–$41.35/hr' },
  { label: 'Bangor', avgSalary: '$76,000–$85,000', hourlyRate: '$36.54–$40.87/hr' },
  { label: 'Augusta', avgSalary: '$74,000–$83,000', hourlyRate: '$35.58–$39.90/hr' },
  { label: 'State Average', avgSalary: '$78,920', hourlyRate: '$37.94/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$60,000–$67,000', hourlyRate: '$28.85–$32.21/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$70,000–$79,000', hourlyRate: '$33.65–$37.98/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$79,000–$90,000', hourlyRate: '$37.98–$43.27/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$90,000–$104,000', hourlyRate: '$43.27–$50.00/hr' },
];

export default function MaineRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Maine' },
      ]}
      h1="Maine RN Salary 2026: Pay, Demand & Shortage Incentives"
      lastUpdated="May 2026"
      schemaTitle="Maine RN Salary 2026"
      schemaDescription="Maine RN salary by city and experience level for 2026, with demand analysis and rural shortage incentives."
      schemaUrl="/rn-salary-by-state/maine"
      stateName="Maine"
      stateSlug="maine"
      faqs={faqs}
    >
      <p>
        Maine RNs earn an average of <strong>$78,920/year ($37.94/hr)</strong> in 2026 — below the
        national average, but in one of the tightest nursing labor markets in the US. Maine is
        the oldest state by median age, and its disproportionately large senior population drives
        demand that consistently outpaces supply. Maine Medical Center (Level 1 Trauma, Portland)
        anchors the highest-paying end of the market, while rural shortage designations statewide
        create access to significant loan repayment programs that can add $25,000–$50,000 in
        tax-free value.
      </p>

      <SalaryTable
        title="Maine RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Maine RN Salary by Experience Level</h2>
      <SalaryTable
        title="ME RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Rural Shortage Incentives</h2>
      <p>
        Much of rural Maine — particularly Aroostook, Washington, and Piscataquis counties — carries
        Health Professional Shortage Area (HPSA) designations. Nurses working in qualifying facilities
        can access NHSC Loan Repayment (up to $50,000 tax-free for 2 years), the NURSE Corps program,
        and Maine&apos;s state loan assistance through MaineHEAF. For new grads with $60,000–$100,000
        in federal loans, a rural Maine position can be financially superior to a higher-paying urban
        role once loan repayment value is factored in.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Maine</h2>
      <p>
        Maine hospitals offer night shift differentials of 12–18% above base pay. On a $78,920 base,
        consistent nights add approximately $9,470–$14,200/year. MaineHealth and Northern Light Health
        both run competitive differential structures for specialty night nurses.{' '}
        <Link href="/night-shift-differential-nurses" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Maine</h2>
      <p>
        Travel RN assignments in Maine pay <strong>$1,900–$2,600/week</strong>. Maine Medical Center
        and Northern Light Eastern Maine Medical Center are the strongest markets. Summer seasonal
        demand in coastal communities adds contract opportunities, particularly for home health and
        rehabilitation nurses.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Maine&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Maine →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Maine to Other New England States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/massachusetts" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Massachusetts RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Higher pay, much higher COL</p>
        </Link>
        <Link href="/rn-salary-by-state/new-hampshire" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">New Hampshire RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">No income tax neighbor</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
