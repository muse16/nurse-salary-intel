import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Colorado RN Salary 2026: $82,010/yr + Hourly Rates by City',
  description:
    'Colorado RNs average $82,010/yr ($39.43/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Colorado?',
    answer: 'The average RN salary in Colorado is $82,010/year ($39.43/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Colorado?',
    answer: 'CRNAs in Colorado typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Colorado?',
    answer: 'Yes. Travel RNs in Colorado typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Colorado?',
    answer: 'Nursing demand in Colorado continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Denver', avgSalary: '$87,000–$97,000', hourlyRate: '$41.83–$46.63/hr' },
  { label: 'Colorado Springs', avgSalary: '$82,000–$92,000', hourlyRate: '$39.42–$44.23/hr' },
  { label: 'Fort Collins', avgSalary: '$80,000–$89,000', hourlyRate: '$38.46–$42.79/hr' },
  { label: 'State Average', avgSalary: '$82,010', hourlyRate: '$39.43/hr' },
];

export default function ColoradoRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Colorado' },
      ]}
      h1="RN Salary in Colorado \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Colorado 2026"
      schemaDescription="Colorado RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/colorado"
      faqs={faqs}
    >
      <p>
        Colorado registered nurses earn an average of $82,010/year ($39.43/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Colorado (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Colorado</h2>
      <p>
        Colorado hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $82,010 base salary, consistent night shift work adds approximately $8,201\u2013$14,762/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Colorado</h2>
      <p>
        Travel RN assignments in Colorado typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Colorado&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Colorado \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Colorado to Other States</h2>
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
