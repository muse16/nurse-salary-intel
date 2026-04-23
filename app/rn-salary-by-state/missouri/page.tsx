import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary Missouri (2026): Hourly Pay + Highest Paying Cities',
  description:
    'Average RN salary in Missouri is $71,390/year ($34.32/hr) in 2026. Compare pay by city and specialty.',
};

const faqs = [
  {
    question: 'How much do nurses make in Missouri?',
    answer: 'The average RN salary in Missouri is $71,390/year ($34.32/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Missouri?',
    answer: 'CRNAs in Missouri typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Missouri?',
    answer: 'Yes. Travel RNs in Missouri typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Missouri?',
    answer: 'Nursing demand in Missouri continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Kansas City', avgSalary: '$75,500–$84,000', hourlyRate: '$36.30–$40.38/hr' },
  { label: 'St. Louis', avgSalary: '$74,000–$82,500', hourlyRate: '$35.58–$39.66/hr' },
  { label: 'Springfield', avgSalary: '$69,000–$77,000', hourlyRate: '$33.17–$37.02/hr' },
  { label: 'State Average', avgSalary: '$71,390', hourlyRate: '$34.32/hr' },
];

export default function MissouriRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Missouri' },
      ]}
      h1="RN Salary in Missouri \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Missouri 2026"
      schemaDescription="Missouri RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/missouri"
      faqs={faqs}
    >
      <p>
        Missouri registered nurses earn an average of $71,390/year ($34.32/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Missouri (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Missouri</h2>
      <p>
        Missouri hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $71,390 base salary, consistent night shift work adds approximately $7,139\u2013$12,850/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Missouri</h2>
      <p>
        Travel RN assignments in Missouri typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Missouri&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Missouri \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Missouri to Other States</h2>
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
