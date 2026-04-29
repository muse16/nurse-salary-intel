import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kentucky RN Salary 2026: $69,480/yr + Hourly Rates by City',
  description:
    'Kentucky RNs average $69,480/yr ($33.40/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Kentucky?',
    answer: 'The average RN salary in Kentucky is $69,480/year ($33.40/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Kentucky?',
    answer: 'CRNAs in Kentucky typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Kentucky?',
    answer: 'Yes. Travel RNs in Kentucky typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Kentucky?',
    answer: 'Nursing demand in Kentucky continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Louisville', avgSalary: '$73,500–$82,000', hourlyRate: '$35.34–$39.42/hr' },
  { label: 'Lexington', avgSalary: '$71,000–$79,000', hourlyRate: '$34.13–$37.98/hr' },
  { label: 'Bowling Green', avgSalary: '$67,000–$75,000', hourlyRate: '$32.21–$36.06/hr' },
  { label: 'State Average', avgSalary: '$69,480', hourlyRate: '$33.40/hr' },
];

export default function KentuckyRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Kentucky' },
      ]}
      h1="RN Salary in Kentucky \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Kentucky 2026"
      schemaDescription="Kentucky RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/kentucky"
      stateName="Kentucky"
      stateSlug="kentucky"
      faqs={faqs}
    >
      <p>
        Kentucky registered nurses earn an average of $69,480/year ($33.40/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Kentucky (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Kentucky</h2>
      <p>
        Kentucky hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $69,480 base salary, consistent night shift work adds approximately $6,948\u2013$12,506/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Kentucky</h2>
      <p>
        Travel RN assignments in Kentucky typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Kentucky&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Kentucky \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Kentucky to Other States</h2>
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
