import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New York RN Salary 2026: $98,560/yr + Hourly Rates by City',
  description:
    'New York RNs average $98,560/yr ($47.38/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
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
      stateName="New York"
      stateSlug="new-york"
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Cities in New York</h2>
      <p>
        New York has one of the widest intrastate pay gaps in the country. NYC and its suburbs pay dramatically more than upstate markets, driven by union contracts, higher living costs, and the concentration of major academic medical centers.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Manhattan (NYC):</strong> $112,000–$128,000/year ($54–$62/hr)</li>
        <li><strong>NYC Boroughs:</strong> $104,000–$115,000/year ($50–$55/hr)</li>
        <li><strong>Long Island:</strong> $98,000–$110,000/year ($47–$53/hr)</li>
        <li><strong>Westchester:</strong> $95,000–$105,000/year ($46–$50/hr)</li>
        <li><strong>Albany / Capital Region:</strong> $84,000–$94,000/year ($40–$45/hr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Experience in New York</h2>
      <p>
        NYSNA union contracts at major NYC hospitals provide structured step increases that make New York one of the fastest states for salary growth over a nursing career. Upstate hospitals are less likely to be unionized, resulting in slower wage progression outside the metro area.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $72,000–$88,000/year. NYC new grads at NYU Langone and Mount Sinai typically start at $85,000+.</li>
        <li><strong>3–5 years experience:</strong> $92,000–$110,000/year. NYSNA union step increases accelerate pay growth significantly at covered facilities.</li>
        <li><strong>10+ years experience:</strong> $115,000–$138,000/year. Senior nurses at major NYC academic centers frequently earn above $120,000 with shift differentials included.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in New York</h2>
      <p>
        New York union hospitals pay night shift differentials of 15–22% above base pay. On a $98,560 statewide average, night nurses earn an additional $14,800–$21,700/year. NYC hospitals consistently offer the highest differentials. Weekend premiums add 10–18% above base pay.
      </p>
      <p>
        Overtime in New York is paid at 1.5x the hourly base rate for hours beyond 40 per week. NYC RNs working frequent overtime can add $18,000–$30,000 annually. Note that NY state income tax (up to 10.9%) and NYC local income tax reduce take-home on overtime compared to no-tax states.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — New York</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in New York?</p>
          <p className="text-on-surface-variant">The average RN salary in New York is $98,560/year ($47.38/hr) in 2026. NYC nurses average $110,000–$125,000, while upstate markets average $80,000–$92,000. Compare with <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link> or the cost-adjusted value of <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model NY pay by specialty.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in New York?</p>
          <p className="text-on-surface-variant">New York RNs average $47.38/hr statewide. Manhattan nurses earn $54–$62/hr at major hospital systems, while upstate markets (Buffalo, Rochester) average $39–$43/hr.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in New York?</p>
          <p className="text-on-surface-variant">See <Link href="/salary/new-york/new-york" className="text-primary hover:underline">nurse salary in New York City</Link>, averaging $112,000–$128,000/year, and compare with <Link href="/salary/new-york/buffalo" className="text-primary hover:underline">nurse salary in Buffalo</Link> for upstate purchasing power. NYU Langone and Mount Sinai are the top-paying systems.</p>
        </div>
      </div>
    </SEOPageLayout>
  );
}
