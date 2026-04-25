import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florida RN Salary 2026: $76,450/yr + Top 5 Highest-Pay Cities',
  description:
    'Florida RNs earn $76,450/yr ($36.75/hr) on average in 2026. See city-by-city pay, top hospitals, no-state-income-tax math, and how Florida compares to other states — sourced from BLS.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-by-state/florida' },
  openGraph: {
    title: 'Florida RN Salary 2026: $76,450/yr + Top 5 Pay Cities',
    description: 'Florida RNs earn $36.75/hr in 2026. City-by-city pay, top hospitals, no-tax math.',
    url: 'https://nursesalaryintel.com/rn-salary-by-state/florida',
  },
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Cities in Florida</h2>
      <p>
        Florida nurse pay is highest in South Florida, where the Miami-Fort Lauderdale market supports the strongest base salaries. Orlando and Tampa lag behind Miami but benefit from lower housing costs and strong demand from a large retiree population.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Miami-Fort Lauderdale:</strong> $76,000–$86,000/year ($37–$41/hr)</li>
        <li><strong>Tampa-St. Petersburg:</strong> $74,000–$84,000/year ($36–$40/hr)</li>
        <li><strong>Fort Lauderdale:</strong> $75,000–$83,000/year ($36–$40/hr)</li>
        <li><strong>Orlando:</strong> $72,000–$80,000/year ($35–$38/hr)</li>
        <li><strong>Jacksonville:</strong> $71,000–$79,000/year ($34–$38/hr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Experience in Florida</h2>
      <p>
        Florida has one of the largest nursing workforces in the country, which moderates pay growth. However, persistent shortages in specialty units and high retiree demand continue to push pay upward, especially for experienced nurses in critical care.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $58,000–$66,000/year. Miami and Tampa offer the highest new grad starting rates in the state.</li>
        <li><strong>3–5 years experience:</strong> $70,000–$80,000/year. Specialty certifications add $4,000–$9,000 above base pay at this stage.</li>
        <li><strong>10+ years experience:</strong> $84,000–$97,000/year. Senior nurses at large academic medical centers like Jackson Health and Mayo Clinic Jacksonville reach the upper range.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in Florida</h2>
      <p>
        Florida nurses working night shifts earn an additional 12–18% per hour. On a $76,450 base salary, a consistent night nurse earns an additional $7,600–$13,800/year. Weekend differentials generally add 8–12% for shifts worked Saturday and Sunday. See our complete{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>
      <p>
        Overtime in Florida is paid at 1.5x the base hourly rate for hours beyond 40 per week. Nurses who regularly pick up extra shifts — especially during high-demand winter months when Florida&apos;s population swells — can add $8,000–$16,000/year in overtime income. Florida&apos;s no-income-tax status means every overtime dollar is only subject to federal tax.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — Florida</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in Florida?</p>
          <p className="text-on-surface-variant">The average RN salary in Florida is $76,450/year ($36.75/hr) in 2026 — below the national average of $89,010. For higher-paying no-tax alternatives, see <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>. For the nation&apos;s highest pay, compare <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link>. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate Florida pay.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in Florida?</p>
          <p className="text-on-surface-variant">Florida RNs average $36.75/hr statewide. Miami-area nurses earn $37–$41/hr, while rural Florida markets average $33–$36/hr.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in Florida?</p>
          <p className="text-on-surface-variant">Explore <Link href="/salary/florida/miami" className="text-primary hover:underline">nurse salary in Miami</Link>, averaging $76,000–$86,000/year, or compare with <Link href="/salary/florida/tampa" className="text-primary hover:underline">nurse salary in Tampa</Link> at $74,000–$84,000/year. Jackson Health System and Baptist Health are the top-paying facilities.</p>
        </div>
      </div>
    </SEOPageLayout>
  );
}
