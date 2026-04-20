import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Salary Florida 2026: RN Pay by City + Hourly Rates',
  description: 'Florida RN salary data for 2026. See average nurse pay by city, hourly rates, specialty premiums, and how Florida compares to other no-income-tax states.',
};

const cityData = [
  { label: 'Miami-Dade County', avgSalary: '$82,000', hourlyRate: '$39.42/hr' },
  { label: 'Fort Lauderdale / Broward', avgSalary: '$79,000', hourlyRate: '$37.98/hr' },
  { label: 'Tampa / St. Petersburg', avgSalary: '$78,000', hourlyRate: '$37.50/hr' },
  { label: 'Orlando', avgSalary: '$77,000', hourlyRate: '$37.02/hr' },
  { label: 'Jacksonville', avgSalary: '$74,000', hourlyRate: '$35.58/hr' },
  { label: 'Sarasota / Fort Myers', avgSalary: '$73,000', hourlyRate: '$35.10/hr' },
  { label: 'Gainesville', avgSalary: '$71,000', hourlyRate: '$34.13/hr' },
  { label: 'State Average', avgSalary: '$76,450', hourlyRate: '$36.75/hr' },
];

const faqs = [
  {
    question: 'How much do nurses make in Florida in 2026?',
    answer: 'The average RN salary in Florida is $76,450/year ($36.75/hr) in 2026 — below the national average of approximately $89,000. Miami and Fort Lauderdale nurses earn the most at $78,000–$85,000/year. Florida\'s no state income tax partially offsets the lower gross salary compared to states like New York.',
  },
  {
    question: 'Is Florida a good state for nurses?',
    answer: 'Florida offers strong job availability — it has one of the fastest-growing healthcare markets in the country driven by an aging population — and no state income tax. Downsides include below-average gross salaries, no mandatory nurse-to-patient ratio laws, and limited union presence. Nurses who maximize overtime and shift differentials can close the gap with higher-salary states.',
  },
  {
    question: 'What is the highest paying city for nurses in Florida?',
    answer: 'Miami-Dade County is Florida\'s highest-paying nursing market, with average salaries of $80,000–$86,000 at major systems like Jackson Health System and Baptist Health. Fort Lauderdale and Tampa are close behind. North Florida and rural markets pay the least, typically $68,000–$75,000/year.',
  },
];

export default function NurseSalaryFlorida2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Florida Nurse Salary 2026' },
      ]}
      h1="Florida Nurse Salary 2026 — RN Pay by City and Specialty"
      lastUpdated="April 2026"
      schemaTitle="Florida Nurse Salary 2026"
      schemaDescription="Florida RN salaries by city, specialty, and experience level for 2026, with no-tax state comparisons."
      schemaUrl="/nurse-salary-florida-2026"
      faqs={faqs}
    >
      <p>
        Florida is one of the most active nursing job markets in the United States. With a rapidly growing population — including one of the largest concentrations of retirees in the country — demand for registered nurses is rising faster than supply across most of the state. The tradeoff: Florida gross salaries average $76,450/year, below the national RN average, though the absence of a state income tax closes that gap in real take-home terms.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Florida RN Salary by City (2026)</h2>
      <p>
        Pay varies by as much as $15,000 between South Florida&apos;s major metros and rural North Florida markets. Urban hospital systems with higher patient volumes, trauma designation, and teaching affiliations consistently pay more.
      </p>

      <SalaryTable
        title="RN Salary by Florida City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">No State Income Tax: How It Affects Florida Nurse Pay</h2>
      <p>
        Florida has no state income tax, a meaningful advantage for nurses when comparing real take-home pay across states. A Florida nurse earning $76,450 gross keeps approximately $61,000–$65,000 after federal taxes and standard deductions. Compare that to a New York nurse earning $98,560 who takes home roughly $72,000–$78,000 after combined federal and New York state income taxes — a smaller-than-expected gap given the $22,000 gross difference.
      </p>
      <p>
        The no-tax advantage matters most for nurses who pick up significant overtime and shift differential income. Every additional dollar earned in Florida is subject only to federal income tax, making overtime and night shifts more valuable in net terms than in high-tax states. Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model Florida take-home at your pay rate.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Salary by Specialty and Experience</h2>
      <p>
        Specialty choice has a significant impact on Florida nurse pay. ICU and ER nurses in Florida&apos;s major metros earn $85,000–$96,000, while Nurse Practitioners average $110,000–$120,000 statewide. The specialties with the highest demand growth in Florida are behavioral health (driven by severe shortage), oncology, and gerontology — all tied to demographic trends in the state&apos;s population.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $58,000–$66,000/year. Miami and Tampa offer the highest new grad rates.</li>
        <li><strong>3–5 years experience:</strong> $70,000–$82,000/year. Specialty certifications add $4,000–$9,000 above base.</li>
        <li><strong>10+ years experience:</strong> $84,000–$97,000/year. Senior nurses at major academic centers reach the upper range.</li>
        <li><strong>Nurse Practitioner:</strong> $108,000–$124,000/year statewide. PMHNP roles seeing fastest growth.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Florida vs Other No-Tax States</h2>
      <p>
        Among the eight states with no income tax, Texas pays the most for RNs at $81,510/year — about $5,000 above Florida. Washington State is the highest-paying no-tax state at $100,890/year, but housing costs are significantly higher. Nevada ($90,210/year) and Arizona ($82,000/year) sit above Florida on gross pay. Florida&apos;s unique advantage is the combination of no-tax status, growing job market, and a large number of travel and per diem opportunities driven by seasonal population swings.
      </p>
      <p>
        For full state-by-state context: <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">RN salary in Florida</Link>, <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>, <Link href="/rn-salary-by-state/arizona" className="text-primary hover:underline">RN salary in Arizona</Link>.
      </p>
    </SEOPageLayout>
  );
}
