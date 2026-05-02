import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kentucky RN Salary 2026: $69,480/yr — Louisville, Lexington & Loan Repayment',
  description:
    'Kentucky RNs average $69,480/yr ($33.40/hr) in 2026. See pay at Norton Healthcare, Baptist Health, UK HealthCare — plus rural shortage loan repayment up to $50K.',
};

const faqs = [
  {
    question: 'How much do nurses make in Kentucky?',
    answer: 'The average RN salary in Kentucky is $69,480/year ($33.40/hr) in 2026 — below the national average, but with a cost of living index of approximately 88 and a flat 4.5% state income tax. Louisville nurses at Norton Healthcare and Baptist Health earn significantly more than the state average ($73,500–$82,000).',
  },
  {
    question: 'Which Kentucky hospitals pay nurses the most?',
    answer: 'Norton Healthcare and Baptist Health Louisville offer the highest base salaries in the state, particularly for ICU, ER, and OR nurses. UK HealthCare in Lexington is the academic market leader. Both Louisville systems offer sign-on bonuses of $6,000–$14,000 for critical care specialties.',
  },
  {
    question: 'Is Kentucky a good state for nurse loan repayment?',
    answer: 'Yes — Kentucky has extensive rural Health Professional Shortage Areas, particularly in Appalachian eastern Kentucky. Nurses in qualifying facilities can access NHSC Loan Repayment (up to $50,000 tax-free) and the NURSE Corps program. The Kentucky Office of Rural Health also administers state-level incentive programs.',
  },
  {
    question: 'What is the job outlook for nurses in Kentucky?',
    answer: 'Strong. Kentucky\'s rural nursing shortage is significant and persistent — eastern Kentucky counties face some of the highest per-capita shortage levels in the country. Urban Louisville and Lexington markets are competitive but growing. The state\'s expanding healthcare infrastructure is adding positions across all specialties.',
  },
];

const cityData = [
  { label: 'Louisville', avgSalary: '$73,500–$82,000', hourlyRate: '$35.34–$39.42/hr' },
  { label: 'Lexington', avgSalary: '$71,000–$79,000', hourlyRate: '$34.13–$37.98/hr' },
  { label: 'Bowling Green', avgSalary: '$67,000–$75,000', hourlyRate: '$32.21–$36.06/hr' },
  { label: 'Owensboro', avgSalary: '$65,500–$73,000', hourlyRate: '$31.49–$35.10/hr' },
  { label: 'State Average', avgSalary: '$69,480', hourlyRate: '$33.40/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$54,000–$60,000', hourlyRate: '$25.96–$28.85/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$62,000–$70,000', hourlyRate: '$29.81–$33.65/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$70,000–$80,000', hourlyRate: '$33.65–$38.46/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$80,000–$93,000', hourlyRate: '$38.46–$44.71/hr' },
];

export default function KentuckyRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Kentucky' },
      ]}
      h1="Kentucky RN Salary 2026: Pay by City, Employer & Loan Repayment"
      lastUpdated="May 2026"
      schemaTitle="Kentucky RN Salary 2026"
      schemaDescription="Kentucky RN salary by city and experience level for 2026, with employer data and rural loan repayment opportunities."
      schemaUrl="/rn-salary-by-state/kentucky"
      stateName="Kentucky"
      stateSlug="kentucky"
      faqs={faqs}
    >
      <p>
        Kentucky RNs earn an average of <strong>$69,480/year ($33.40/hr)</strong> in 2026. While below
        the national average, Kentucky&apos;s low cost of living (index ~88) and flat 4.5% state income
        tax make the real take-home more competitive than the headline suggests. Louisville is the
        dominant nursing market — Norton Healthcare and Baptist Health compete aggressively on sign-on
        bonuses for specialty nurses. Eastern Kentucky&apos;s Appalachian corridor carries widespread
        rural shortage designations, opening access to NHSC loan repayment programs worth up to
        $50,000 tax-free.
      </p>

      <SalaryTable
        title="Kentucky RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Kentucky RN Salary by Experience Level</h2>
      <SalaryTable
        title="KY RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Rural Loan Repayment in Kentucky</h2>
      <p>
        Eastern and rural Kentucky counties rank among the most medically underserved in the nation.
        Nurses accepting positions at qualifying rural facilities can access NHSC Loan Repayment
        ($50,000 tax-free over 2 years), the NURSE Corps Loan Repayment Program, and the Kentucky
        Office of Rural Health&apos;s state incentive programs. For nurses with significant federal loan
        balances, a rural Kentucky position combined with loan repayment can be financially stronger
        than a coastal urban job at a higher nominal salary.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Kentucky</h2>
      <p>
        Kentucky hospitals offer night shift differentials of 10–16% above base pay. On the $69,480
        state average, nights add $6,948–$11,117/year. Norton Healthcare and UK HealthCare both
        offer structured differential packages for specialty critical care nurses.{' '}
        <Link href="/night-shift-differential-nurses" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Kentucky</h2>
      <p>
        Travel RN assignments in Kentucky pay <strong>$1,800–$2,400/week</strong>. Louisville&apos;s trauma
        centers and Lexington&apos;s UK HealthCare are the primary travel markets. Rural critical access
        hospitals across eastern Kentucky offer strong packages for specialty travelers willing to work
        in underserved areas.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Kentucky&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Kentucky →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Kentucky to Neighboring States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/tennessee" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Tennessee RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">No income tax neighbor</p>
        </Link>
        <Link href="/rn-salary-by-state/ohio" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Ohio RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Higher pay in Columbus and Cleveland</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
