import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arkansas RN Salary 2026: $67,010/yr — UAMS, Rural Shortage Areas & Loan Repayment',
  description:
    'Arkansas RNs average $67,010/yr ($32.22/hr) in 2026. See pay by city, UAMS vs. Arkansas Children\'s rates, extensive rural HPSA loan repayment programs, and why demand is outpacing supply.',
};

const faqs = [
  {
    question: 'How much do nurses make in Arkansas?',
    answer: 'The average RN salary in Arkansas is $67,010/year ($32.22/hr) in 2026 — below the national average, but with a very low cost of living (index ~85) and some of the most extensive rural loan repayment programs in the South. Little Rock nurses at UAMS and Arkansas Children\'s Hospital earn $71,000–$79,000.',
  },
  {
    question: 'What is the top-paying hospital in Arkansas?',
    answer: 'UAMS (University of Arkansas for Medical Sciences) in Little Rock is the state\'s academic anchor and the top-paying hospital, particularly for experienced specialty nurses. Arkansas Children\'s Hospital is the state\'s only pediatric Level 1 Trauma Center and offers competitive packages for pediatric specialty nurses. Baptist Health and CHI St. Vincent round out the Little Rock market.',
  },
  {
    question: 'Does Arkansas have rural nursing shortage incentives?',
    answer: 'Yes — extensively. Arkansas has among the highest concentrations of Health Professional Shortage Areas (HPSAs) in the South. Nurses in qualifying rural facilities can access NHSC Loan Repayment (up to $50,000 tax-free for 2 years), the NURSE Corps program, and Arkansas Rural Health Partnership incentives. For nurses with $60,000+ in federal loans, rural Arkansas postings can deliver significantly better total compensation than the nominal salary suggests.',
  },
  {
    question: 'What is the nursing job outlook in Arkansas?',
    answer: 'Strong and persistent. Arkansas\'s rural counties face some of the deepest healthcare workforce shortages in the country — driven by high rates of chronic disease, an aging population, and limited pipeline supply from in-state nursing programs. Urban Little Rock and Fayetteville markets are competitive but growing. Nursing demand is projected to outpace supply through at least 2030.',
  },
];

const cityData = [
  { label: 'Little Rock', avgSalary: '$71,000–$79,000', hourlyRate: '$34.13–$37.98/hr' },
  { label: 'Fayetteville', avgSalary: '$66,000–$74,000', hourlyRate: '$31.73–$35.58/hr' },
  { label: 'Jonesboro', avgSalary: '$65,000–$73,000', hourlyRate: '$31.25–$35.10/hr' },
  { label: 'Fort Smith', avgSalary: '$65,000–$73,000', hourlyRate: '$31.25–$35.10/hr' },
  { label: 'State Average', avgSalary: '$67,010', hourlyRate: '$32.22/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$53,000–$58,000', hourlyRate: '$25.48–$27.88/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$60,000–$68,000', hourlyRate: '$28.85–$32.69/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$68,000–$77,000', hourlyRate: '$32.69–$37.02/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$77,000–$90,000', hourlyRate: '$37.02–$43.27/hr' },
];

export default function ArkansasRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Arkansas' },
      ]}
      h1="Arkansas RN Salary 2026: Pay, UAMS Rates & Rural Loan Repayment"
      lastUpdated="May 2026"
      schemaTitle="Arkansas RN Salary 2026"
      schemaDescription="Arkansas RN salary by city and experience level for 2026, with UAMS employer data and extensive rural shortage loan repayment programs."
      schemaUrl="/rn-salary-by-state/arkansas"
      stateName="Arkansas"
      stateSlug="arkansas"
      faqs={faqs}
    >
      <p>
        Arkansas RNs earn an average of <strong>$67,010/year ($32.22/hr)</strong> in 2026 — among
        the lower nominal salaries nationally, but in one of the most medically underserved states
        in the country. Arkansas&apos;s widespread rural Health Professional Shortage Area designations
        create access to some of the most generous loan repayment programs available anywhere — NHSC
        awards of up to $50,000 tax-free can dramatically change the financial calculus for nurses
        with significant federal loans. Little Rock&apos;s UAMS (the state&apos;s academic medical center)
        and Arkansas Children&apos;s Hospital anchor the highest-paying end of the market.
      </p>

      <SalaryTable
        title="Arkansas RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Arkansas RN Salary by Experience Level</h2>
      <SalaryTable
        title="AR RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Rural Loan Repayment: Arkansas&apos;s Real Advantage</h2>
      <p>
        Arkansas has among the highest concentrations of HPSA-designated counties in the South.
        Nurses accepting positions at qualifying rural facilities — which includes many critical
        access hospitals across the Delta, Ozarks, and Ouachita regions — can access NHSC Loan
        Repayment (up to $50,000 tax-free over 2 years) and the NURSE Corps program. For a nurse
        with $80,000 in federal student loans, a rural Arkansas position with NHSC repayment
        effectively adds $25,000/year in tax-free value on top of base salary — bringing total
        compensation well above the nominal headline rate. The Arkansas Rural Health Partnership
        administers additional state-level incentive programs.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Arkansas</h2>
      <p>
        Arkansas hospitals offer night shift differentials of 10–16% above base pay. On the $67,010
        state average, nights add $6,701–$10,722/year. UAMS and Baptist Health both offer structured
        differential packages for specialty night shift nurses.{' '}
        <Link href="/night-shift-differential-nurses" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Arkansas</h2>
      <p>
        Travel RN assignments in Arkansas pay <strong>$1,700–$2,300/week</strong>. UAMS Medical
        Center and Arkansas Children&apos;s Hospital in Little Rock are the primary travel markets.
        Rural critical access hospitals throughout the Delta and Ozarks post consistent openings
        — demand is persistent due to the state&apos;s chronic staffing shortages.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Arkansas&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Arkansas →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Arkansas to Neighboring States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/tennessee" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Tennessee RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">No income tax, Nashville market</p>
        </Link>
        <Link href="/rn-salary-by-state/oklahoma" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Oklahoma RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Similar market, OKC vs. Little Rock</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
