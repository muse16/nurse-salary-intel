import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary North Dakota (2026): Hourly Pay + Highest Paying Cities',
  description:
    'Average RN salary in North Dakota is $72,140/year ($34.68/hr) in 2026. Compare pay by city and specialty.',
};

const faqs = [
  {
    question: 'How much do nurses make in North Dakota?',
    answer: 'The average RN salary in North Dakota is $72,140/year ($34.68/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in North Dakota?',
    answer: 'CRNAs in North Dakota typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in North Dakota?',
    answer: 'Yes. Travel RNs in North Dakota typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in North Dakota?',
    answer: 'Nursing demand in North Dakota continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Fargo', avgSalary: '$76,000–$85,000', hourlyRate: '$36.54–$40.87/hr' },
  { label: 'Bismarck', avgSalary: '$72,500–$81,000', hourlyRate: '$34.86–$38.94/hr' },
  { label: 'Grand Forks', avgSalary: '$70,000–$78,000', hourlyRate: '$33.65–$37.50/hr' },
  { label: 'State Average', avgSalary: '$72,140', hourlyRate: '$34.68/hr' },
];

export default function NorthDakotaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'North Dakota' },
      ]}
      h1="RN Salary in North Dakota \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in North Dakota 2026"
      schemaDescription="North Dakota RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/north-dakota"
      faqs={faqs}
    >
      <p>
        North Dakota registered nurses earn an average of $72,140/year ($34.68/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in North Dakota (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in North Dakota</h2>
      <p>
        North Dakota hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $72,140 base salary, consistent night shift work adds approximately $7,214\u2013$12,985/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in North Dakota</h2>
      <p>
        Travel RN assignments in North Dakota typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+North+Dakota&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in North Dakota \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare North Dakota to Other States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Compare with California \u2192</span>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States \u2192</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
