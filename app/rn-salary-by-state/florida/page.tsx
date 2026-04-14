import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary in Florida 2026 | Nurse Pay by City',
  description:
    'Florida RN salary data for 2026. See nurse pay in Miami, Tampa, Orlando, and Jacksonville. No state income tax plus low cost of living breakdown.',
};

const faqs = [
  { question: 'How much do nurses make in Florida?', answer: 'The average RN salary in Florida is $76,450/year ($36.75/hr) in 2026 — below the national average. However, no state income tax and low cost of living compensate for the lower base pay.' },
  { question: 'Is Florida a good state for nursing jobs?', answer: 'Florida has strong demand due to an aging population, but pay is below the national average. It\'s best suited for nurses who value lifestyle (weather, no state tax) over maximum earning potential.' },
  { question: 'What is the highest-paying nursing job in Florida?', answer: 'CRNAs in Florida earn $192,000/year, the highest-paid nursing role in the state. NPs earn $112,000 and ICU nurses earn $78,500.' },
  { question: 'Does Florida\'s low pay offset the no-income-tax benefit?', answer: 'Partially. Florida nurses save $3,500–$6,000/year on state taxes, but that doesn\'t fully bridge the $13,000 gap versus the national average. It depends on your cost of living.' },
];

const cityData = [
  { label: 'Miami-Fort Lauderdale', avgSalary: '$79,500', hourlyRate: '$38.22/hr' },
  { label: 'Tampa-St. Petersburg', avgSalary: '$77,800', hourlyRate: '$37.40/hr' },
  { label: 'Orlando', avgSalary: '$75,200', hourlyRate: '$36.15/hr' },
  { label: 'Jacksonville', avgSalary: '$74,500', hourlyRate: '$35.82/hr' },
  { label: 'Fort Myers', avgSalary: '$73,800', hourlyRate: '$35.48/hr' },
  { label: 'State Average', avgSalary: '$76,450', hourlyRate: '$36.75/hr' },
];

export default function FloridaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Florida' },
      ]}
      h1="RN Salary in Florida — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Florida 2026"
      schemaDescription="Florida RN salary by city with no-tax advantage and cost-of-living context."
      schemaUrl="/rn-salary-by-state/florida"
      faqs={faqs}
    >
      <p>
        Florida has strong demand for nurses — but the pay is below the national average. The state&apos;s biggest
        advantages are no state income tax, year-round warm weather, and strong job availability. Whether that&apos;s
        worth the lower salary depends on your priorities.
      </p>

      <SalaryTable title="RN Salary by Florida City (2026)" headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={cityData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Florida Nurse Pay vs. Cost of Living</h2>
      <p>
        Florida&apos;s cost of living is near the national average, but varies widely. Miami and Fort Lauderdale
        are expensive (especially housing), while Tampa, Orlando, and Jacksonville offer more affordable living.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">No State Income Tax: Florida&apos;s Hidden Advantage</h2>
      <p>
        Florida is one of seven no-income-tax states. On a $76,000 salary, that saves $3,500–$5,000/year compared
        to most other states. Combined with no estate tax, Florida is particularly attractive for retirement planning.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in Florida</h2>
      <p>
        In Florida, CRNAs earn $192,000, NPs earn $112,000, and ICU nurses earn $78,500. Specialty pay is generally
        10–15% below national averages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Florida</h2>
      <p>
        Florida is a popular travel nursing destination, especially in winter months. Weekly rates are $2,000–$2,700
        — on the lower end, but strong demand and desirable locations attract many travelers.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/texas" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Compare with Texas →</span>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
