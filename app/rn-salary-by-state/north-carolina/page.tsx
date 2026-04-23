import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary North Carolina (2026): Hourly Pay + Highest Paying Cities',
  description:
    'Average RN salary in North Carolina is $72,970/year ($35.08/hr) in 2026. Compare pay by city and specialty.',
};

const faqs = [
  {
    question: 'How much do nurses make in North Carolina?',
    answer: 'The average RN salary in North Carolina is $72,970/year ($35.08/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in North Carolina?',
    answer: 'CRNAs in North Carolina typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in North Carolina?',
    answer: 'Yes. Travel RNs in North Carolina typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in North Carolina?',
    answer: 'Nursing demand in North Carolina continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Charlotte', avgSalary: '$77,000–$86,000', hourlyRate: '$37.02–$41.35/hr' },
  { label: 'Raleigh', avgSalary: '$74,500–$83,000', hourlyRate: '$35.82–$39.90/hr' },
  { label: 'Durham', avgSalary: '$73,500–$82,000', hourlyRate: '$35.34–$39.42/hr' },
  { label: 'State Average', avgSalary: '$72,970', hourlyRate: '$35.08/hr' },
];

export default function NorthCarolinaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'North Carolina' },
      ]}
      h1="RN Salary in North Carolina \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in North Carolina 2026"
      schemaDescription="North Carolina RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/north-carolina"
      faqs={faqs}
    >
      <p>
        North Carolina registered nurses earn an average of $72,970/year ($35.08/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in North Carolina (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in North Carolina</h2>
      <p>
        North Carolina hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $72,970 base salary, consistent night shift work adds approximately $7,297\u2013$13,135/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in North Carolina</h2>
      <p>
        Travel RN assignments in North Carolina typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+North+Carolina&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in North Carolina \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare North Carolina to Other States</h2>
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
