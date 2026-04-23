import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary Ohio (2026): Hourly Pay + Highest Paying Cities',
  description:
    'Average RN salary in Ohio is $76,190/year ($36.63/hr) in 2026. Compare pay by city and specialty.',
};

const faqs = [
  {
    question: 'How much do nurses make in Ohio?',
    answer: 'The average RN salary in Ohio is $76,190/year ($36.63/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Ohio?',
    answer: 'CRNAs in Ohio typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Ohio?',
    answer: 'Yes. Travel RNs in Ohio typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Ohio?',
    answer: 'Nursing demand in Ohio continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Columbus', avgSalary: '$80,500–$90,000', hourlyRate: '$38.70–$43.27/hr' },
  { label: 'Cleveland', avgSalary: '$78,000–$87,000', hourlyRate: '$37.50–$41.83/hr' },
  { label: 'Cincinnati', avgSalary: '$75,000–$84,000', hourlyRate: '$36.06–$40.38/hr' },
  { label: 'State Average', avgSalary: '$76,190', hourlyRate: '$36.63/hr' },
];

export default function OhioRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Ohio' },
      ]}
      h1="RN Salary in Ohio \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Ohio 2026"
      schemaDescription="Ohio RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/ohio"
      faqs={faqs}
    >
      <p>
        Ohio registered nurses earn an average of $76,190/year ($36.63/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Ohio (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Ohio</h2>
      <p>
        Ohio hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $76,190 base salary, consistent night shift work adds approximately $7,619\u2013$13,714/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Ohio</h2>
      <p>
        Travel RN assignments in Ohio typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Ohio&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Ohio \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Ohio to Other States</h2>
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
