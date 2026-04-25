import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florida RN Salary 2026: $76K–$96K/Year + Hourly Breakdown by City & Experience',
  description:
    'Florida RN salary 2026: $76,450–$96,000/year depending on metro, experience, and specialty. See city-by-city pay, no-income-tax advantage, specialty premiums, and travel nurse rates — sourced from BLS OEWS.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-by-state/florida' },
  openGraph: {
    title: 'Florida RN Salary 2026: $76K–$96K/Year + City Breakdown',
    description: 'Florida RN average $76,450/yr. See pay by experience, city, specialty, plus no-tax benefit analysis.',
    url: 'https://nursesalaryintel.com/rn-salary-by-state/florida',
  },
};

const faqs = [
  { question: 'How much do nurses make in Florida?', answer: 'The average RN salary in Florida is $76,450/year ($36.75/hr) in 2026. Depending on metro, experience, and specialty, Florida RNs can earn $58,000–$105,000+/year.' },
  { question: 'Is Florida a good state for nursing jobs?', answer: 'Florida has strong demand due to an aging population and growing retiree base. Pay is below the national average, but no state income tax and strong job availability offset this. Best for nurses valuing lifestyle and stability over maximum pay.' },
  { question: 'What is the highest-paying nursing job in Florida?', answer: 'CRNAs earn $192,000+/year. NPs average $112,000. Specialty nurses (ICU, ER, OR) earn $81,000–$96,000/year, 15–20% above med-surg base.' },
  { question: 'Does Florida\'s no-income-tax benefit offset lower base pay?', answer: 'Partially. A Florida nurse earning $76,450 keeps more take-home than a similar earner in a high-tax state. But the nominal gap versus top-paying states (CA, MA, WA) is real. Model the full picture before deciding.' },
  { question: 'Which Florida city pays nurses the most?', answer: 'Naples–Marco Island and Miami–Fort Lauderdale lead at $79,500–$89,000/year. Tampa and Orlando follow. Rural panhandle regions pay 10–15% below state average.' },
  { question: 'How much do new grad RNs earn in Florida?', answer: 'Entry-level (0–1 year) RNs earn $58,000–$66,000/year ($28–$32/hr). Miami and Tampa offer the highest new-grad rates in the state.' },
  { question: 'What is night shift differential pay in Florida?', answer: 'Night shifts typically add $3–$6/hr on top of base. Weekend differentials add another $2–$5/hr. Combined, consistent night nurses add $8,000–$14,000/year in differential income.' },
  { question: 'How does Florida compare to Texas for RN pay?', answer: 'Both are no-income-tax states with similar base pay ranges ($76K–$80K state average). Texas metros (Houston, Dallas) may edge Florida metros by a small margin in base, but total compensation is comparable.' },
];

const cityData = [
  { label: 'Miami–Fort Lauderdale–Pompano Beach', avgSalary: '$79,500–$86,000', hourlyRate: '$38–$41/hr' },
  { label: 'Naples–Marco Island', avgSalary: '$82,000–$89,000', hourlyRate: '$39–$43/hr' },
  { label: 'Tampa–St. Petersburg–Clearwater', avgSalary: '$77,800–$84,000', hourlyRate: '$37–$40/hr' },
  { label: 'Orlando–Kissimmee–Sanford', avgSalary: '$75,200–$82,000', hourlyRate: '$36–$39/hr' },
  { label: 'Jacksonville', avgSalary: '$74,500–$81,000', hourlyRate: '$36–$39/hr' },
  { label: 'Cape Coral–Fort Myers', avgSalary: '$73,800–$80,000', hourlyRate: '$35–$38/hr' },
  { label: 'Sarasota–North Port', avgSalary: '$72,000–$78,000', hourlyRate: '$35–$37/hr' },
  { label: 'Lakeland–Winter Haven', avgSalary: '$71,000–$76,000', hourlyRate: '$34–$36/hr' },
  { label: 'Tallahassee–Pensacola (Panhandle)', avgSalary: '$70,000–$75,000', hourlyRate: '$33–$36/hr' },
  { label: 'State Average', avgSalary: '$76,450', hourlyRate: '$36.75/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$58,000–$66,000', hourlyRate: '$28–$32/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$70,000–$80,000', hourlyRate: '$34–$38/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$78,000–$89,000', hourlyRate: '$37–$43/hr' },
  { label: 'Senior (10–19 yrs)', avgSalary: '$84,000–$97,000', hourlyRate: '$40–$47/hr' },
  { label: 'Veteran (20+ yrs)', avgSalary: '$89,000–$105,000', hourlyRate: '$43–$50/hr' },
];

const specialtyData = [
  { label: 'Med-Surg / Tele', avgSalary: '$75,000–$86,000', hourlyRate: '$36–$41/hr' },
  { label: 'ICU / Critical Care', avgSalary: '$83,000–$96,000', hourlyRate: '$40–$46/hr' },
  { label: 'ER / Emergency', avgSalary: '$81,000–$94,000', hourlyRate: '$39–$45/hr' },
  { label: 'OR / Surgical', avgSalary: '$85,000–$99,000', hourlyRate: '$41–$48/hr' },
  { label: 'L&D / Labor and Delivery', avgSalary: '$80,000–$92,000', hourlyRate: '$38–$44/hr' },
  { label: 'NICU', avgSalary: '$82,000–$95,000', hourlyRate: '$39–$46/hr' },
  { label: 'Oncology', avgSalary: '$81,000–$93,000', hourlyRate: '$39–$45/hr' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Data sourced from US Bureau of Labor Statistics OEWS May 2024, adjusted for 3–4% annual wage growth projections into 2026. City-level and specialty data derived from metro-area OEWS summaries and cost-of-living adjustments. Travel nursing rates based on current market surveys. Figures are estimates and vary by employer, experience, certifications, location, and contract terms.';

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
      author={author}
      sources={sources}
      methodology={methodology}
      schemaTitle="RN Salary in Florida 2026"
      schemaDescription="Florida RN salary by city with no-tax advantage and cost-of-living context."
      schemaUrl="/rn-salary-by-state/florida"
      faqs={faqs}
    >
      <p>
        Florida has strong demand for nurses — but the pay is below the national average. The state&apos;s biggest
        advantages are no state income tax, year-round warm weather, and strong job availability. Whether that&apos;s
        worth the lower salary depends on your priorities. Depending on metro, experience, and specialty, Florida RNs can earn $58,000–$105,000+/year.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Florida RN Pay Compares Nationally</h2>
      <p>
        Florida consistently ranks in the middle-to-lower tier of state RN pay. The national mean annual wage for
        registered nurses was roughly $98,000 in May 2024 (BLS OEWS); Florida&apos;s mean sat near $83,000 in the
        same release. Applying 3–4% projected annual wage growth into 2026 puts Florida&apos;s mean in the{' '}
        <strong>$88,000–$90,000 range</strong>, with the 25th–75th percentile spanning roughly{' '}
        <strong>$74,000–$103,000</strong>.
      </p>
      <p>
        The gap between Florida and top-paying states (California, Hawaii, Oregon, Washington, Massachusetts) is
        primarily driven by union density, cost-of-living baselines, and staffing ratio legislation. See the{' '}
        <Link href="/highest-paying-states-for-rns-2026" className="text-primary hover:underline">
          full state-by-state RN pay rankings
        </Link>{' '}
        for comparison.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Experience Level (2026)</h2>
      <p>
        Experience is one of the largest drivers of Florida RN pay. New grads typically start $58,000–$66,000, while
        veteran nurses with 20+ years reach $89,000–$105,000. Specialty certifications add $1,000–$9,000 annually at each tier.
      </p>
      <SalaryTable title="Florida RN Salary by Experience (2026)" headers={['Experience Tier', 'Estimated Annual Base', 'Estimated Hourly']} rows={experienceData} source="BLS OEWS 2025 + career progression benchmarks" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Florida City (2026)</h2>
      <p>
        Pay varies significantly across Florida — high-paying South Florida metros (Miami, Naples) sit 8–12% above the state
        average, while panhandle and rural regions sit 10–15% below. Urban hospital systems with higher acuity and teaching affiliations consistently pay more.
      </p>
      <SalaryTable title="RN Salary by Florida City (2026)" headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={cityData} source="BLS OEWS 2025 + NurseSalaryIntel data" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/florida-rn-salary-2026-cities.png"
        alt="Bar chart comparing 2026 mean hourly RN pay across Florida metros"
        className="w-full rounded-lg border border-outline-variant my-6"
        loading="lazy"
      />

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

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/florida-rn-salary-2026-notax.png"
        alt="Florida no state income tax illustrated impact on RN take-home pay"
        className="w-full rounded-lg border border-outline-variant my-6"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in Florida</h2>
      <p>
        Specialty choice has significant impact on Florida RN pay. ICU, ER, OR, and NICU roles command the highest base pay (15–20% above med-surg). CRNAs earn $192,000+, and NPs average $112,000 statewide.
      </p>
      <SalaryTable title="Florida RN Specialty Pay (2026)" headers={['Specialty', 'Estimated Annual Base', 'Estimated Hourly']} rows={specialtyData} source="BLS OEWS 2025 + specialty premium data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Florida</h2>
      <p>
        Florida is a strong travel nursing market, especially Miami, Tampa, and Orlando. While base rates have normalized
        post-2022, demand remains solid due to seasonal population swings and tourism-driven healthcare demand.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Med-surg, 13-week contract (Miami/Tampa):</strong> $1,900–$2,400/week gross blended rate</li>
        <li><strong>ICU/ED, 13-week contract:</strong> $2,200–$2,900/week gross blended rate</li>
        <li><strong>OR, 13-week contract:</strong> $2,400–$3,100/week gross blended rate</li>
      </ul>
      <p className="text-sm text-on-surface-variant mt-4">
        Travel rates include housing stipend, per diem, and blended hourly. Actual rates vary by facility, specialty, and contract terms.
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">What&apos;s Changing in Florida Nursing in 2026</h2>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Continued travel rate normalization:</strong> Staff-to-travel differentials have compressed and are expected to stay tighter than 2021–2022 peaks.</li>
        <li><strong>Sign-on bonus growth in non-coastal markets:</strong> Jacksonville, Tallahassee, and Gainesville systems are using larger sign-ons ($3,000–$8,000) to compete with coastal wages.</li>
        <li><strong>Certification premiums rising:</strong> CCRN, CEN, and PCCN are increasingly paid as ongoing hourly differentials (not one-time awards), adding $1–$3/hr permanently.</li>
        <li><strong>BSN preference enforcement:</strong> Magnet hospitals and large systems (HCA, AdventHealth, Baptist) are requiring BSN within 5 years of hire — plan accordingly.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Florida vs. Other No-Tax States</h2>
      <p>
        Among states with no income tax, Texas pays RNs roughly $81,510/year — about $5,000 above Florida&apos;s
        BLS mean. Washington State leads no-tax states at $100,890/year, but housing costs are significantly higher.
        Nevada ($90,210/year) and Arizona ($82,000/year) also sit above Florida on gross pay. Florida&apos;s unique
        advantage is the combination of no-tax status, a large travel-nursing market driven by seasonal population
        swings, and strong year-round demand from a large retiree base.
      </p>
      <p>
        For full state-by-state context:{' '}
        <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">
          RN salary in Texas
        </Link>{' '}
        ·{' '}
        <Link href="/rn-salary-by-state/arizona" className="text-primary hover:underline">
          RN salary in Arizona
        </Link>{' '}
        ·{' '}
        <Link href="/highest-paying-states-for-rns-2026" className="text-primary hover:underline">
          Highest-paying states for RNs
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — Florida</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in Florida?</p>
          <p className="text-on-surface-variant">The average RN salary in Florida is $76,450/year ($36.75/hr) in 2026 — below the national average of $89,010. For higher-paying no-tax alternatives, see <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>. For the nation&apos;s highest pay, compare <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link>. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate Florida pay.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in Florida?</p>
          <p className="text-on-surface-variant">Florida RNs average $36.75/hr statewide. Miami-area nurses earn $38–$41/hr, while rural Florida markets average $33–$36/hr. Night shift and specialty pay add $3–$10/hr on top of base.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in Florida?</p>
          <p className="text-on-surface-variant">Naples–Marco Island and Miami–Fort Lauderdale are Florida&apos;s highest-paying markets at $79,500–$89,000/year. Explore <Link href="/salary/florida/miami" className="text-primary hover:underline">nurse salary in Miami</Link> or <Link href="/salary/florida/tampa" className="text-primary hover:underline">nurse salary in Tampa</Link> for city-specific detail. Jackson Health System and Baptist Health are the top-paying facilities.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How does Florida&apos;s no-income-tax benefit affect take-home?</p>
          <p className="text-on-surface-variant">A Florida nurse earning $76,450 keeps more net pay than a similar earner in New York or California due to no state income tax. However, the gap narrows when accounting for cost of living (South Florida housing is expensive). Use a full cost-of-living comparison before deciding.</p>
        </div>
      </div>

      <p className="text-sm text-on-surface-variant border-t border-outline-variant pt-4 mt-8">
        <strong>Sources:</strong> US Bureau of Labor Statistics OEWS May 2024 (occupation 29-1141, RN). BLS Occupational Outlook Handbook. Internal methodology: BLS state means projected with 3–4% annual wage-growth assumptions for 2026 estimates. City-level data from BLS metro area summaries and NurseSalaryIntel market research. Figures are estimates; actual pay varies by employer, experience, certifications, location, shift type, and contract terms.
      </p>
    </SEOPageLayout>
  );
}
