import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nebraska RN Salary 2026: $69,790/yr — Nebraska Medicine, CHI Health & Rural Incentives',
  description:
    'Nebraska RNs average $69,790/yr ($33.55/hr) in 2026. See pay by city, Nebraska Medicine vs. CHI Health rates, rural shortage area loan repayment, and Omaha market analysis.',
};

const faqs = [
  {
    question: 'How much do nurses make in Nebraska?',
    answer: 'The average RN salary in Nebraska is $69,790/year ($33.55/hr) in 2026. Omaha nurses at Nebraska Medicine and CHI Health earn $73,500–$82,000, significantly above the state average. Nebraska\'s low cost of living (index ~87) improves real take-home relative to the nominal pay.',
  },
  {
    question: 'What is the biggest hospital employer in Nebraska?',
    answer: 'Nebraska Medicine (affiliated with UNMC) is Nebraska\'s only Level 1 Trauma Center and the state\'s academic anchor employer in Omaha. CHI Health operates a large regional network across eastern Nebraska and western Iowa. Both systems offer structured step increases and competitive sign-on bonuses for ICU, ER, and OR nurses.',
  },
  {
    question: 'Are there nursing loan repayment programs in Nebraska?',
    answer: 'Yes. Nebraska\'s Sandhills, Panhandle, and many rural counties carry Health Professional Shortage Area (HPSA) designations. Nurses in qualifying rural facilities can access NHSC Loan Repayment (up to $50,000 tax-free for 2 years) and the NURSE Corps program. For new grads with significant federal loans, rural Nebraska positions can be financially stronger than higher-paying urban roles.',
  },
  {
    question: 'What is the job outlook for nurses in Nebraska?',
    answer: 'Strong and growing. Nebraska\'s rural nursing shortage is persistent, particularly in the western Panhandle and Sandhills regions. Omaha\'s healthcare sector continues to expand — Nebraska Medicine\'s ongoing growth and CHI Health\'s regional network are both adding positions. The state projects continued demand growth through 2030.',
  },
];

const cityData = [
  { label: 'Omaha', avgSalary: '$73,500–$82,000', hourlyRate: '$35.34–$39.42/hr' },
  { label: 'Lincoln', avgSalary: '$70,000–$78,000', hourlyRate: '$33.65–$37.50/hr' },
  { label: 'Bellevue', avgSalary: '$68,500–$76,500', hourlyRate: '$32.93–$36.78/hr' },
  { label: 'Grand Island', avgSalary: '$66,000–$74,000', hourlyRate: '$31.73–$35.58/hr' },
  { label: 'State Average', avgSalary: '$69,790', hourlyRate: '$33.55/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$55,000–$61,000', hourlyRate: '$26.44–$29.33/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$63,000–$71,000', hourlyRate: '$30.29–$34.13/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$71,000–$81,000', hourlyRate: '$34.13–$38.94/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$81,000–$94,000', hourlyRate: '$38.94–$45.19/hr' },
];

export default function NebraskaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Nebraska' },
      ]}
      h1="Nebraska RN Salary 2026: Pay by City, Employer & Loan Repayment"
      lastUpdated="May 2026"
      schemaTitle="Nebraska RN Salary 2026"
      schemaDescription="Nebraska RN salary by city and experience level for 2026, with employer data and rural loan repayment opportunities."
      schemaUrl="/rn-salary-by-state/nebraska"
      stateName="Nebraska"
      stateSlug="nebraska"
      faqs={faqs}
    >
      <p>
        Nebraska RNs earn an average of <strong>$69,790/year ($33.55/hr)</strong> in 2026 — below
        the national average, but Nebraska&apos;s low cost of living (index ~87) and stable Midwest
        job market make it more competitive in practice. Omaha is the dominant market: Nebraska
        Medicine — the state&apos;s only Level 1 Trauma Center and academic medical center — and CHI
        Health&apos;s regional network both compete aggressively for specialty nurses, particularly ICU
        and OR. Rural Nebraska carries widespread shortage designations that unlock NHSC loan
        repayment of up to $50,000 tax-free.
      </p>

      <SalaryTable
        title="Nebraska RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nebraska RN Salary by Experience Level</h2>
      <SalaryTable
        title="NE RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Rural Loan Repayment in Nebraska</h2>
      <p>
        Nebraska&apos;s Sandhills, Panhandle, and scattered rural counties across the state carry Health
        Professional Shortage Area (HPSA) designations. Nurses accepting positions at qualifying rural
        facilities can access NHSC Loan Repayment (up to $50,000 tax-free over 2 years) and the NURSE
        Corps Loan Repayment Program. For new grads carrying $60,000–$100,000 in federal loans, a rural
        Nebraska position with loan forgiveness can deliver better total compensation than an Omaha staff
        nurse role without forgiveness benefits.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Nebraska</h2>
      <p>
        Nebraska hospitals offer night shift differentials of 10–18% above base pay. On the $69,790
        state average, nights add $6,979–$12,562/year. Nebraska Medicine and CHI Health both run
        structured differential packages for specialty critical care nurses.{' '}
        <Link href="/night-shift-differential-nurses" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Nebraska</h2>
      <p>
        Travel RN assignments in Nebraska pay <strong>$1,900–$2,600/week</strong>. Nebraska Medicine
        and CHI Health Creighton are the primary travel markets in Omaha. Rural critical access hospitals
        throughout the Sandhills and Panhandle post consistent openings for specialty travelers, often
        with housing stipends that significantly boost net pay.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Nebraska&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Nebraska →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Nebraska to Neighboring States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/iowa" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Iowa RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Similar Midwest market, Des Moines rates</p>
        </Link>
        <Link href="/rn-salary-by-state/kansas" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Kansas RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Border state comparison, Wichita market</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
