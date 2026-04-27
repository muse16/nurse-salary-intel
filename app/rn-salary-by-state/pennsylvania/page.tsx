import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pennsylvania RN Salary 2026: $79,750/yr + Hourly Rates by City',
  description:
    'Pennsylvania RNs average $79,750/yr ($38.34/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Pennsylvania?',
    answer: 'The average RN salary in Pennsylvania is $79,750/year ($38.34/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Pennsylvania?',
    answer: 'CRNAs in Pennsylvania typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Pennsylvania?',
    answer: 'Yes. Travel RNs in Pennsylvania typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Pennsylvania?',
    answer: 'Nursing demand in Pennsylvania continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Philadelphia', avgSalary: '$84,000–$94,000', hourlyRate: '$40.38–$45.19/hr' },
  { label: 'Pittsburgh', avgSalary: '$81,000–$90,000', hourlyRate: '$38.94–$43.27/hr' },
  { label: 'Allentown', avgSalary: '$78,000–$87,000', hourlyRate: '$37.50–$41.83/hr' },
  { label: 'State Average', avgSalary: '$79,750', hourlyRate: '$38.34/hr' },
];

export default function PennsylvaniaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Pennsylvania' },
      ]}
      h1="RN Salary in Pennsylvania \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Pennsylvania 2026"
      schemaDescription="Pennsylvania RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/pennsylvania"
      faqs={faqs}
    >
      <p>
        Pennsylvania registered nurses earn an average of $79,750/year ($38.34/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Pennsylvania (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Pennsylvania</h2>
      <p>
        Pennsylvania hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $79,750 base salary, consistent night shift work adds approximately $7,975\u2013$14,355/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Pennsylvania</h2>
      <p>
        Travel RN assignments in Pennsylvania typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Pennsylvania&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Pennsylvania \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Pennsylvania to Other States</h2>
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
