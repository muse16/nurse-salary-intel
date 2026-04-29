import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Virginia RN Salary 2026: $77,720/yr + Hourly Rates by City',
  description:
    'Virginia RNs average $77,720/yr ($37.37/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Virginia?',
    answer: 'The average RN salary in Virginia is $77,720/year ($37.37/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Virginia?',
    answer: 'CRNAs in Virginia typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Virginia?',
    answer: 'Yes. Travel RNs in Virginia typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Virginia?',
    answer: 'Nursing demand in Virginia continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Virginia Beach', avgSalary: '$82,000–$91,500', hourlyRate: '$39.42–$44.00/hr' },
  { label: 'Richmond', avgSalary: '$80,000–$89,000', hourlyRate: '$38.46–$42.79/hr' },
  { label: 'Norfolk', avgSalary: '$77,000–$86,000', hourlyRate: '$37.02–$41.35/hr' },
  { label: 'State Average', avgSalary: '$77,720', hourlyRate: '$37.37/hr' },
];

export default function VirginiaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Virginia' },
      ]}
      h1="RN Salary in Virginia \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Virginia 2026"
      schemaDescription="Virginia RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/virginia"
      stateName="Virginia"
      stateSlug="virginia"
      faqs={faqs}
    >
      <p>
        Virginia registered nurses earn an average of $77,720/year ($37.37/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Virginia (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Virginia</h2>
      <p>
        Virginia hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $77,720 base salary, consistent night shift work adds approximately $7,772\u2013$13,990/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Virginia</h2>
      <p>
        Travel RN assignments in Virginia typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Virginia&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Virginia \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Virginia to Other States</h2>
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
