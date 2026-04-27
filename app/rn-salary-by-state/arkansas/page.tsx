import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arkansas RN Salary 2026: $67,010/yr + Hourly Rates by City',
  description:
    'Arkansas RNs average $67,010/yr ($32.22/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Arkansas?',
    answer: 'The average RN salary in Arkansas is $67,010/year ($32.22/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Arkansas?',
    answer: 'CRNAs in Arkansas typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Arkansas?',
    answer: 'Yes. Travel RNs in Arkansas typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Arkansas?',
    answer: 'Nursing demand in Arkansas continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Little Rock', avgSalary: '$71,000–$79,000', hourlyRate: '$34.13–$37.98/hr' },
  { label: 'Fort Smith', avgSalary: '$65,000–$73,000', hourlyRate: '$31.25–$35.10/hr' },
  { label: 'Fayetteville', avgSalary: '$66,000–$74,000', hourlyRate: '$31.73–$35.58/hr' },
  { label: 'State Average', avgSalary: '$67,010', hourlyRate: '$32.22/hr' },
];

export default function ArkansasRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Arkansas' },
      ]}
      h1="RN Salary in Arkansas \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Arkansas 2026"
      schemaDescription="Arkansas RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/arkansas"
      faqs={faqs}
    >
      <p>
        Arkansas registered nurses earn an average of $67,010/year ($32.22/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Arkansas (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Arkansas</h2>
      <p>
        Arkansas hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $67,010 base salary, consistent night shift work adds approximately $6,701\u2013$12,062/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Arkansas</h2>
      <p>
        Travel RN assignments in Arkansas typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Arkansas&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Arkansas \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Arkansas to Other States</h2>
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
