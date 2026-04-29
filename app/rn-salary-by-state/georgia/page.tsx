import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Georgia RN Salary 2026: $75,080/yr + Hourly Rates by City',
  description:
    'Georgia RNs average $75,080/yr ($36.10/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Georgia?',
    answer: 'The average RN salary in Georgia is $75,080/year ($36.10/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Georgia?',
    answer: 'CRNAs in Georgia typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Georgia?',
    answer: 'Yes. Travel RNs in Georgia typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Georgia?',
    answer: 'Nursing demand in Georgia continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Atlanta', avgSalary: '$79,500–$88,500', hourlyRate: '$38.22–$42.55/hr' },
  { label: 'Augusta', avgSalary: '$73,000–$81,000', hourlyRate: '$35.10–$38.94/hr' },
  { label: 'Savannah', avgSalary: '$72,000–$80,000', hourlyRate: '$34.62–$38.46/hr' },
  { label: 'State Average', avgSalary: '$75,080', hourlyRate: '$36.10/hr' },
];

export default function GeorgiaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Georgia' },
      ]}
      h1="RN Salary in Georgia \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Georgia 2026"
      schemaDescription="Georgia RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/georgia"
      stateName="Georgia"
      stateSlug="georgia"
      faqs={faqs}
    >
      <p>
        Georgia registered nurses earn an average of $75,080/year ($36.10/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Georgia (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Georgia</h2>
      <p>
        Georgia hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $75,080 base salary, consistent night shift work adds approximately $7,508\u2013$13,514/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Georgia</h2>
      <p>
        Travel RN assignments in Georgia typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Georgia&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Georgia \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Georgia to Other States</h2>
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
