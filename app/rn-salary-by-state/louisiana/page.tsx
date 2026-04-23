import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary Louisiana (2026): Hourly Pay + Highest Paying Cities',
  description:
    'Average RN salary in Louisiana is $69,980/year ($33.65/hr) in 2026. Compare pay by city and specialty.',
};

const faqs = [
  {
    question: 'How much do nurses make in Louisiana?',
    answer: 'The average RN salary in Louisiana is $69,980/year ($33.65/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Louisiana?',
    answer: 'CRNAs in Louisiana typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Louisiana?',
    answer: 'Yes. Travel RNs in Louisiana typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Louisiana?',
    answer: 'Nursing demand in Louisiana continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'New Orleans', avgSalary: '$74,000–$82,500', hourlyRate: '$35.58–$39.66/hr' },
  { label: 'Baton Rouge', avgSalary: '$71,000–$79,000', hourlyRate: '$34.13–$37.98/hr' },
  { label: 'Shreveport', avgSalary: '$67,000–$75,000', hourlyRate: '$32.21–$36.06/hr' },
  { label: 'State Average', avgSalary: '$69,980', hourlyRate: '$33.65/hr' },
];

export default function LouisianaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Louisiana' },
      ]}
      h1="RN Salary in Louisiana \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Louisiana 2026"
      schemaDescription="Louisiana RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/louisiana"
      faqs={faqs}
    >
      <p>
        Louisiana registered nurses earn an average of $69,980/year ($33.65/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Louisiana (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Louisiana</h2>
      <p>
        Louisiana hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $69,980 base salary, consistent night shift work adds approximately $6,998\u2013$12,596/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Louisiana</h2>
      <p>
        Travel RN assignments in Louisiana typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Louisiana&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Louisiana \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Louisiana to Other States</h2>
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
