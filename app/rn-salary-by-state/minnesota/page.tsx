import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minnesota RN Salary 2026: $86,110/yr + Hourly Rates by City',
  description:
    'Minnesota RNs average $86,110/yr ($41.40/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  {
    question: 'How much do nurses make in Minnesota?',
    answer: 'The average RN salary in Minnesota is $86,110/year ($41.40/hr) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in Minnesota?',
    answer: 'CRNAs in Minnesota typically earn $180,000\u2013$220,000/year. Nurse Practitioners average $115,000\u2013$130,000, and ICU nurses average $80,000\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in Minnesota?',
    answer: 'Yes. Travel RNs in Minnesota typically earn $2,000\u2013$2,800/week on assignment \u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in Minnesota?',
    answer: 'Nursing demand in Minnesota continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: 'Minneapolis', avgSalary: '$91,000–$101,000', hourlyRate: '$43.75–$48.56/hr' },
  { label: 'Saint Paul', avgSalary: '$88,000–$98,000', hourlyRate: '$42.31–$47.12/hr' },
  { label: 'Rochester', avgSalary: '$86,000–$96,000', hourlyRate: '$41.35–$46.15/hr' },
  { label: 'State Average', avgSalary: '$86,110', hourlyRate: '$41.40/hr' },
];

export default function MinnesotaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Minnesota' },
      ]}
      h1="RN Salary in Minnesota \u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Minnesota 2026"
      schemaDescription="Minnesota RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/minnesota"
      faqs={faqs}
    >
      <p>
        Minnesota registered nurses earn an average of $86,110/year ($41.40/hr) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in Minnesota (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Minnesota</h2>
      <p>
        Minnesota hospitals typically offer night shift differentials of 10\u201318% above base pay.
        On a $86,110 base salary, consistent night shift work adds approximately $8,611\u2013$15,500/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Minnesota</h2>
      <p>
        Travel RN assignments in Minnesota typically pay $2,000\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Minnesota&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Minnesota \u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Minnesota to Other States</h2>
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
