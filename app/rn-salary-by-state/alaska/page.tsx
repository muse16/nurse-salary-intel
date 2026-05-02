import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Alaska RN Salary 2026: $96,990/yr + No State Income Tax Advantage',
  description:
    'Alaska RNs average $96,990/yr ($46.63/hr) in 2026 with zero state income tax. See pay by city, remote location premiums, and why Alaska is a top travel nurse destination.',
};

const faqs = [
  {
    question: 'How much do nurses make in Alaska?',
    answer: 'The average RN salary in Alaska is $96,990/year ($46.63/hr) in 2026. Alaska has no state income tax, so nurses keep significantly more of that than counterparts in high-tax states. Anchorage nurses at Providence and Alaska Regional earn $103,000–$115,000 for experienced roles.',
  },
  {
    question: 'Does Alaska have state income tax for nurses?',
    answer: 'No — Alaska has zero state income tax. On a $96,990 salary, this saves approximately $5,000–$9,000/year compared to states like California or Minnesota. Combined with the higher base pay, Alaska nurses have strong real take-home despite the high cost of living.',
  },
  {
    question: 'What is the Alaska cost of living for nurses?',
    answer: 'Anchorage has a cost of living index of approximately 130 (vs. national 100), driven by higher food, transportation, and housing costs. Rural Alaska is significantly more expensive. Nurses considering Alaska should factor in the COL premium against the no-tax advantage when comparing offers.',
  },
  {
    question: 'What are the best hospitals to work at in Alaska?',
    answer: 'Providence Alaska Medical Center (Anchorage) and Alaska Regional Hospital are the two largest employers. The Alaska Native Tribal Health Consortium (ANTHC) operates the Alaska Native Medical Center — a unique employer with strong mission-driven culture and competitive compensation.',
  },
];

const cityData = [
  { label: 'Anchorage', avgSalary: '$103,000–$115,000', hourlyRate: '$49.52–$55.29/hr' },
  { label: 'Fairbanks', avgSalary: '$98,000–$108,000', hourlyRate: '$47.12–$51.92/hr' },
  { label: 'Juneau', avgSalary: '$95,000–$105,000', hourlyRate: '$45.67–$50.48/hr' },
  { label: 'Kenai / Soldotna', avgSalary: '$92,000–$102,000', hourlyRate: '$44.23–$49.04/hr' },
  { label: 'State Average', avgSalary: '$96,990', hourlyRate: '$46.63/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$76,000–$83,000', hourlyRate: '$36.54–$39.90/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$87,000–$97,000', hourlyRate: '$41.83–$46.63/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$97,000–$110,000', hourlyRate: '$46.63–$52.88/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$110,000–$128,000', hourlyRate: '$52.88–$61.54/hr' },
];

export default function AlaskaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Alaska' },
      ]}
      h1="Alaska RN Salary 2026: High Pay, No Income Tax, Remote Premiums"
      lastUpdated="May 2026"
      schemaTitle="Alaska RN Salary 2026"
      schemaDescription="Alaska RN salary by city and experience level for 2026, with no-income-tax analysis and remote location premiums."
      schemaUrl="/rn-salary-by-state/alaska"
      stateName="Alaska"
      stateSlug="alaska"
      faqs={faqs}
    >
      <p>
        Alaska RNs earn an average of <strong>$96,990/year ($46.63/hr)</strong> in 2026 — above the
        national average of $89,010, with zero state income tax amplifying every paycheck. The combination
        of high base pay, no state tax, and remote location premiums makes Alaska one of the most
        financially compelling markets for nurses willing to relocate. Anchorage&apos;s Providence Alaska
        Medical Center and the Alaska Native Medical Center are the anchor employers, with experienced
        specialty nurses reaching $110,000–$128,000.
      </p>

      <SalaryTable
        title="Alaska RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Alaska RN Salary by Experience Level</h2>
      <SalaryTable
        title="AK RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">No State Income Tax: The Real Advantage</h2>
      <p>
        Alaska has no state income tax. On a $96,990 salary, this saves approximately $5,000–$9,000/year
        compared to states like California (9.3%) or Minnesota (9.85%). A nurse moving from Minnesota
        to Anchorage at the same gross salary effectively gets a $5,000–$8,000 raise from tax savings alone
        — before factoring in Alaska&apos;s Permanent Fund Dividend (typically $1,000–$2,000/year paid to
        residents), which adds further real income.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Alaska</h2>
      <p>
        Travel RN rates in Alaska run <strong>$2,400–$3,400/week</strong> — among the highest nationally
        due to persistent staffing shortages in remote areas. Rural Alaska hospitals, including those
        operated by the Alaska Native Tribal Health Consortium, offer some of the most competitive travel
        packages in the country. No state income tax on stipends further boosts net pay.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Alaska&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Alaska →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Alaska to Other High-Paying States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/washington" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Washington RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Another no-tax state with high pay</p>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States →</span>
          <p className="text-xs text-on-surface-variant mt-1">Where does Alaska rank?</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
