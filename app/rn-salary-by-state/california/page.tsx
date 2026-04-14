import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary in California 2026 | Nurse Pay Data',
  description:
    'California RN salary data for 2026. Average pay, salary by city (LA, SF, San Diego), cost of living, and how CA compares to other states.',
};

const faqs = [
  { question: 'How much do RNs make in California?', answer: 'The average RN salary in California is $124,000/year ($59.62/hr) in 2026 — the highest in the nation. Experienced nurses at major systems like Kaiser and UCSF earn $140,000–$170,000.' },
  { question: 'What is the starting RN salary in California?', answer: 'New grad RNs in California start at $85,000–$105,000/year depending on metro area. New grads in the Bay Area and LA command the highest starting rates.' },
  { question: 'Is California the highest-paying state for nurses?', answer: 'Yes, California has been the highest-paying state for RNs for over a decade. Strong union contracts, mandatory nurse-to-patient ratios, and severe shortages drive pay up.' },
  { question: 'Is it worth being a nurse in California with the high cost of living?', answer: 'For most nurses, yes — but location matters. San Francisco and LA nurse pay is offset by extreme housing costs. Sacramento, San Diego, and Central Valley cities offer better real purchasing power.' },
];

const cityData = [
  { label: 'San Francisco-Oakland', avgSalary: '$155,000', hourlyRate: '$74.52/hr' },
  { label: 'San Jose (Silicon Valley)', avgSalary: '$148,000', hourlyRate: '$71.15/hr' },
  { label: 'Los Angeles-Long Beach', avgSalary: '$128,000', hourlyRate: '$61.54/hr' },
  { label: 'San Diego', avgSalary: '$118,500', hourlyRate: '$56.97/hr' },
  { label: 'Sacramento', avgSalary: '$115,000', hourlyRate: '$55.29/hr' },
  { label: 'Fresno (Central Valley)', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'State Average', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
];

export default function CaliforniaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'California' },
      ]}
      h1="RN Salary in California — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in California 2026"
      schemaDescription="California RN salary by city, cost of living context, and comparisons for 2026."
      schemaUrl="/rn-salary-by-state/california"
      faqs={faqs}
    >
      <p>
        California is the highest-paying state for registered nurses in 2026, with an average salary of
        $124,000/year — more than $35,000 above the national average. Strong union contracts, mandatory staffing
        ratios, and severe nursing shortages all drive pay up.
      </p>

      <SalaryTable title="RN Salary by California City (2026)" headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={cityData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">California Nurse Pay vs. Cost of Living</h2>
      <p>
        California nurses earn the highest salaries but face the highest living costs. Housing in SF and LA can
        consume 40–50% of take-home pay. Nurses who live in less expensive metros (Sacramento, Fresno, San Diego)
        enjoy the best real purchasing power while still earning well above national averages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">California vs. Other High-Paying States</h2>
      <p>
        California pays $17,000 more than Hawaii and $21,000 more than Oregon. However, when you factor in state
        income tax (top rate: 13.3%), the gap narrows versus no-tax states like Washington and Texas.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in California</h2>
      <p>
        In California, CRNAs earn $258,000, Nurse Practitioners $155,000, and ICU nurses $125,000. Every specialty
        pays significantly above the national average.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in California</h2>
      <p>
        California is one of the top destinations for travel nurses, with weekly pay ranging from $2,800–$3,600.
        The Bay Area, LA, and San Diego consistently offer the highest travel contracts.
      </p>
      <Link href="/travel-nursing/salary-by-state" className="text-primary font-semibold hover:underline text-sm">
        See travel nurse salaries by state →
      </Link>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States →</span>
        </Link>
        <Link href="/nursing-salary/crna-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">CRNA Salary by State →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
