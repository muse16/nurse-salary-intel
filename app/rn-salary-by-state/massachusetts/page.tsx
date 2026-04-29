import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Massachusetts RN Salary 2026: $103,090/yr + Hourly Rates by City',
  description:
    'Massachusetts RNs average $103,090/yr ($49.56/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Massachusetts?',
    answer: 'The average RN salary in Massachusetts is $103,090/year ($49.56/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Massachusetts?',
    answer: 'CRNAs in Massachusetts typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Massachusetts?',
    answer: 'Yes. Travel RNs in Massachusetts typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Massachusetts?',
    answer: 'Nursing demand in Massachusetts continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Boston', avgSalary: '$109,000–$121,000', hourlyRate: '$52.40–$58.17/hr' },
  { label: 'Worcester', avgSalary: '$100,000–$111,000', hourlyRate: '$48.08–$53.37/hr' },
  { label: 'Springfield', avgSalary: '$97,000–$108,000', hourlyRate: '$46.63–$51.92/hr' },
  { label: 'State Average', avgSalary: '$103,090', hourlyRate: '$49.56/hr' },
];

export default function MassachusettsRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Massachusetts' },
      ]}
      h1="RN Salary in Massachusetts \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Massachusetts 2026"
      schemaDescription="Massachusetts RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/massachusetts"
      stateName="Massachusetts"
      stateSlug="massachusetts"
      faqs={faqs}
    >
      <p>
        Massachusetts registered nurses earn an average of $103,090/year ($49.56/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Massachusetts (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Massachusetts</h2>
      <p>
        Massachusetts hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $103,090 base salary, consistent night shift work adds approximately $10,309\u2013$18,556/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Massachusetts</h2>
      <p>
        Travel RN assignments in Massachusetts typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Massachusetts&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Massachusetts \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Massachusetts to Other States</h2>
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
