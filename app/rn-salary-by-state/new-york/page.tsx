import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary in New York 2026 | Nurse Pay by City',
  description:
    'New York RN salary data for 2026. Compare nurse pay in NYC, Long Island, Buffalo, and Albany. See how NY nurse salaries stack up after cost of living.',
};

const faqs = [
  { question: 'How much do nurses make in New York?', answer: 'The average RN salary in New York is $98,560/year ($47.38/hr) in 2026. NYC RNs earn $110,000+ on average, while upstate RNs average $82,000–$88,000.' },
  { question: 'Do NYC nurses get paid more than upstate NY?', answer: 'Yes — NYC RNs earn approximately $22,000–$28,000 more per year than upstate RNs. However, housing costs in NYC are 3x higher than upstate, largely offsetting the premium.' },
  { question: 'What is the starting RN salary in New York?', answer: 'New grad RNs in NYC start at $85,000–$95,000/year. Upstate new grads start at $65,000–$75,000. Major systems like NYU Langone and Mount Sinai offer the highest starting rates.' },
  { question: 'Is nursing worth it in NYC with the high cost of living?', answer: 'For most nurses, yes — but only if you accept smaller housing or commute from NJ/CT. Unionized hospitals (NYSNA) offer significant pay and benefit protections that mitigate COL pressure.' },
];

const cityData = [
  { label: 'New York City (Manhattan)', avgSalary: '$115,000', hourlyRate: '$55.29/hr' },
  { label: 'NYC Boroughs', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'Long Island', avgSalary: '$102,500', hourlyRate: '$49.28/hr' },
  { label: 'Westchester', avgSalary: '$98,500', hourlyRate: '$47.36/hr' },
  { label: 'Albany (Capital Region)', avgSalary: '$87,200', hourlyRate: '$41.92/hr' },
  { label: 'Buffalo', avgSalary: '$82,800', hourlyRate: '$39.81/hr' },
  { label: 'Rochester', avgSalary: '$81,500', hourlyRate: '$39.18/hr' },
  { label: 'State Average', avgSalary: '$98,560', hourlyRate: '$47.38/hr' },
];

export default function NewYorkRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'New York' },
      ]}
      h1="RN Salary in New York — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in New York 2026"
      schemaDescription="New York RN salary data by city with cost-of-living context for 2026."
      schemaUrl="/rn-salary-by-state/new-york"
      faqs={faqs}
    >
      <p>
        New York is the 5th highest-paying state for RNs at $98,560/year, driven by NYC&apos;s unionized hospital
        systems and severe nursing shortages. The gap between NYC and upstate pay is one of the largest in any state.
      </p>

      <SalaryTable title="RN Salary by New York Metro (2026)" headers={['Region', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={cityData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC Nurse Pay vs. Cost of Living</h2>
      <p>
        NYC nurses earn $115,000 on average, but Manhattan rent for a 1-bedroom runs $3,500+/month. Many NYC nurses
        live in the outer boroughs, NJ, or CT to optimize take-home pay. Upstate cities (Buffalo, Rochester, Albany)
        offer much better real purchasing power.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">New York vs. Other High-Paying States</h2>
      <p>
        New York pays less than California ($124K) but is comparable to Massachusetts ($96K) and higher than
        New Jersey ($94K). NY state income tax (top rate: 10.9%) reduces take-home pay versus no-tax states.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in New York</h2>
      <p>
        NY CRNAs earn $247,000 (2nd highest in the US), NPs earn $145,000, and ICU nurses earn $101,000. The NYC
        area&apos;s academic medical centers pay the highest rates.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in New York</h2>
      <p>
        NYC is a top travel nursing destination, with weekly rates of $2,600–$3,400. NYSNA-covered hospitals
        sometimes limit travel contracts, but non-union and private hospitals actively recruit travel nurses.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Compare with California →</span>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
