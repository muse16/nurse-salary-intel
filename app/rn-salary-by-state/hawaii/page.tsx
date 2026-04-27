import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hawaii RN Salary 2026: $113,060/yr + Hourly Rates by City',
  description:
    'Hawaii RNs average $113,060/yr ($54.36/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Hawaii?',
    answer: 'The average RN salary in Hawaii is $113,060/year ($54.36/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Hawaii?',
    answer: 'CRNAs in Hawaii typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Hawaii?',
    answer: 'Yes. Travel RNs in Hawaii typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Hawaii?',
    answer: 'Nursing demand in Hawaii continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Honolulu', avgSalary: '$119,000–$132,000', hourlyRate: '$57.21–$63.46/hr' },
  { label: 'Hilo', avgSalary: '$108,000–$120,000', hourlyRate: '$51.92–$57.69/hr' },
  { label: 'Maui', avgSalary: '$112,000–$124,000', hourlyRate: '$53.85–$59.62/hr' },
  { label: 'State Average', avgSalary: '$113,060', hourlyRate: '$54.36/hr' },
];

export default function HawaiiRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Hawaii' },
      ]}
      h1="RN Salary in Hawaii \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Hawaii 2026"
      schemaDescription="Hawaii RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/hawaii"
      faqs={faqs}
    >
      <p>
        Hawaii registered nurses earn an average of $113,060/year ($54.36/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Hawaii (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Hawaii</h2>
      <p>
        Hawaii hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $113,060 base salary, consistent night shift work adds approximately $11,306\u2013$20,351/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Hawaii</h2>
      <p>
        Travel RN assignments in Hawaii typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Hawaii&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Hawaii \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Hawaii to Other States</h2>
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
