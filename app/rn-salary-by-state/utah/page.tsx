import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Utah RN Salary 2026: $74,860/yr + Hourly Rates by City',
  description:
    'Utah RNs average $74,860/yr ($36.00/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Utah?',
    answer: 'The average RN salary in Utah is $74,860/year ($36.00/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Utah?',
    answer: 'CRNAs in Utah typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Utah?',
    answer: 'Yes. Travel RNs in Utah typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Utah?',
    answer: 'Nursing demand in Utah continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Salt Lake City', avgSalary: '$79,000–$88,000', hourlyRate: '$37.98–$42.31/hr' },
  { label: 'Provo', avgSalary: '$74,000–$83,000', hourlyRate: '$35.58–$39.90/hr' },
  { label: 'Ogden', avgSalary: '$72,500–$81,000', hourlyRate: '$34.86–$38.94/hr' },
  { label: 'State Average', avgSalary: '$74,860', hourlyRate: '$36.00/hr' },
];

export default function UtahRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Utah' },
      ]}
      h1="RN Salary in Utah \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Utah 2026"
      schemaDescription="Utah RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/utah"
      faqs={faqs}
    >
      <p>
        Utah registered nurses earn an average of $74,860/year ($36.00/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Utah (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Utah</h2>
      <p>
        Utah hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $74,860 base salary, consistent night shift work adds approximately $7,486\u2013$13,475/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Utah</h2>
      <p>
        Travel RN assignments in Utah typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Utah&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Utah \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Utah to Other States</h2>
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
