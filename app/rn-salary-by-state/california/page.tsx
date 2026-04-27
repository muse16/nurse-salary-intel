import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California RN Salary 2026: $124,000/yr + Hourly Rates by City',
  description:
    'California RNs average $124,000/yr ($59.62/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Cities in California</h2>
      <p>
        California nurse pay varies dramatically by metro area. The Bay Area consistently leads the nation, while inland markets like Sacramento and Fresno offer better cost-of-living-adjusted pay despite lower base salaries.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>San Francisco-Oakland:</strong> $145,000–$165,000/year ($70–$79/hr)</li>
        <li><strong>San Jose (Silicon Valley):</strong> $140,000–$155,000/year ($67–$75/hr)</li>
        <li><strong>Los Angeles-Long Beach:</strong> $122,000–$142,000/year ($59–$68/hr)</li>
        <li><strong>San Diego:</strong> $115,000–$130,000/year ($55–$63/hr)</li>
        <li><strong>Sacramento:</strong> $112,000–$122,000/year ($54–$59/hr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Experience in California</h2>
      <p>
        California has the highest new graduate starting salaries in the nation. Union contracts at systems like Kaiser Permanente, UCSF, and Cedars-Sinai provide structured step increases that accelerate pay growth with experience.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $85,000–$100,000/year. Bay Area new grads frequently start above $95,000 at top systems.</li>
        <li><strong>3–5 years experience:</strong> $115,000–$135,000/year. CCRN and CEN-certified nurses typically earn toward the top of this range.</li>
        <li><strong>10+ years experience:</strong> $140,000–$175,000/year. Senior nurses at UCSF, Cedars-Sinai, and Kaiser Oakland reach the upper end of this range.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in California</h2>
      <p>
        California union hospitals pay night shift differentials of 15–25% above base. On a $124,000 base salary, that premium adds $18,600–$31,000 annually for consistent night nurses. Weekend differentials add another 10–20%.
      </p>
      <p>
        California has the strongest overtime law in the country: daily overtime applies after 8 hours in a single shift, not just after 40 hours per week. Double-time kicks in after 12 hours. ICU and ER nurses working standard 12-hour shifts regularly earn daily overtime, which can add $20,000–$40,000 annually on top of base pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — California</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in California?</p>
          <p className="text-on-surface-variant">The average RN salary in California is $124,000/year ($59.62/hr) in 2026 — the highest of any state. Experienced nurses at major Bay Area systems earn $140,000–$170,000. Compare with <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">RN salary in New York</Link> or <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link> for a no-tax alternative. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to compare by specialty.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in California?</p>
          <p className="text-on-surface-variant">California RNs average $59.62/hr statewide. San Francisco and San Jose nurses earn $70–$79/hr, while Central Valley markets average $52–$59/hr.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in California?</p>
          <p className="text-on-surface-variant">See <Link href="/salary/california/san-francisco" className="text-primary hover:underline">nurse salary in San Francisco</Link>, averaging $145,000–$165,000/year, and <Link href="/salary/california/los-angeles" className="text-primary hover:underline">nurse salary in Los Angeles</Link> at $122,000–$142,000/year. UCSF Medical Center and Kaiser San Francisco are among the top-paying facilities.</p>
        </div>
      </div>
    </SEOPageLayout>
  );
}
