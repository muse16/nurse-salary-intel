import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nevada RN Salary 2026: $88,290/yr + Hourly Rates by City',
  description:
    'Nevada RNs average $88,290/yr ($42.45/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Nevada?',
    answer: 'The average RN salary in Nevada is $88,290/year ($42.45/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Nevada?',
    answer: 'CRNAs in Nevada typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Nevada?',
    answer: 'Yes. Travel RNs in Nevada typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Nevada?',
    answer: 'Nursing demand in Nevada continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Las Vegas', avgSalary: '$93,000–$104,000', hourlyRate: '$44.71–$50.00/hr' },
  { label: 'Reno', avgSalary: '$89,000–$99,000', hourlyRate: '$42.79–$47.60/hr' },
  { label: 'Henderson', avgSalary: '$87,000–$97,000', hourlyRate: '$41.83–$46.63/hr' },
  { label: 'State Average', avgSalary: '$88,290', hourlyRate: '$42.45/hr' },
];

export default function NevadaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Nevada' },
      ]}
      h1="RN Salary in Nevada \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Nevada 2026"
      schemaDescription="Nevada RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/nevada"
      stateName="Nevada"
      stateSlug="nevada"
      faqs={faqs}
    >
      <p>
        Nevada registered nurses earn an average of $88,290/year ($42.45/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Nevada (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Nevada</h2>
      <p>
        Nevada hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $88,290 base salary, consistent night shift work adds approximately $8,829\u2013$15,892/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Nevada</h2>
      <p>
        Travel RN assignments in Nevada typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Nevada&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Nevada \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Nevada to Other States</h2>
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
