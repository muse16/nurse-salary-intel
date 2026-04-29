import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Maryland RN Salary 2026: $84,820/yr + Hourly Rates by City',
  description:
    'Maryland RNs average $84,820/yr ($40.78/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Maryland?',
    answer: 'The average RN salary in Maryland is $84,820/year ($40.78/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Maryland?',
    answer: 'CRNAs in Maryland typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Maryland?',
    answer: 'Yes. Travel RNs in Maryland typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Maryland?',
    answer: 'Nursing demand in Maryland continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Baltimore', avgSalary: '$89,500–$100,000', hourlyRate: '$43.03–$48.08/hr' },
  { label: 'Frederick', avgSalary: '$85,000–$95,000', hourlyRate: '$40.87–$45.67/hr' },
  { label: 'Rockville', avgSalary: '$87,000–$97,000', hourlyRate: '$41.83–$46.63/hr' },
  { label: 'State Average', avgSalary: '$84,820', hourlyRate: '$40.78/hr' },
];

export default function MarylandRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Maryland' },
      ]}
      h1="RN Salary in Maryland \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Maryland 2026"
      schemaDescription="Maryland RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/maryland"
      stateName="Maryland"
      stateSlug="maryland"
      faqs={faqs}
    >
      <p>
        Maryland registered nurses earn an average of $84,820/year ($40.78/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Maryland (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Maryland</h2>
      <p>
        Maryland hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $84,820 base salary, consistent night shift work adds approximately $8,482\u2013$15,268/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Maryland</h2>
      <p>
        Travel RN assignments in Maryland typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Maryland&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Maryland \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Maryland to Other States</h2>
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
