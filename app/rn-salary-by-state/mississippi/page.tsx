import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mississippi RN Salary 2026: $64,320/yr + Hourly Rates by City',
  description:
    'Mississippi RNs average $64,320/yr ($30.92/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Mississippi?',
    answer: 'The average RN salary in Mississippi is $64,320/year ($30.92/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Mississippi?',
    answer: 'CRNAs in Mississippi typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Mississippi?',
    answer: 'Yes. Travel RNs in Mississippi typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Mississippi?',
    answer: 'Nursing demand in Mississippi continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Jackson', avgSalary: '$68,000–$76,000', hourlyRate: '$32.69–$36.54/hr' },
  { label: 'Gulfport', avgSalary: '$63,000–$70,500', hourlyRate: '$30.29–$33.89/hr' },
  { label: 'Hattiesburg', avgSalary: '$62,000–$69,000', hourlyRate: '$29.81–$33.17/hr' },
  { label: 'State Average', avgSalary: '$64,320', hourlyRate: '$30.92/hr' },
];

export default function MississippiRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Mississippi' },
      ]}
      h1="RN Salary in Mississippi \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Mississippi 2026"
      schemaDescription="Mississippi RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/mississippi"
      faqs={faqs}
    >
      <p>
        Mississippi registered nurses earn an average of $64,320/year ($30.92/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Mississippi (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Mississippi</h2>
      <p>
        Mississippi hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $64,320 base salary, consistent night shift work adds approximately $6,432\u2013$11,578/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Mississippi</h2>
      <p>
        Travel RN assignments in Mississippi typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Mississippi&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Mississippi \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Mississippi to Other States</h2>
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
