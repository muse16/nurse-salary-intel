import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

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
  { question: 'Do travel nurses earn more in California?', answer: 'Yes. California travel RNs typically earn $2,800–$3,600/week on 13-week assignments. The Bay Area, LA, and San Diego consistently offer the highest travel contracts in the country.' },
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

const experienceData = [
  { label: 'Entry Level (0–2 yrs)', avgSalary: '$85,000–$105,000', hourlyRate: '$41–$50/hr' },
  { label: 'Mid-Career (3–5 yrs)', avgSalary: '$115,000–$135,000', hourlyRate: '$55–$65/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$140,000–$175,000', hourlyRate: '$67–$84/hr' },
];

const hospitalData = [
  { label: 'UCSF Medical Center (San Francisco)', avgSalary: '$148,000–$172,000', hourlyRate: 'Top academic payer, CNA union' },
  { label: 'Kaiser Permanente (statewide)', avgSalary: '$145,000–$168,000', hourlyRate: 'SEIU-UHW union, strong step raises' },
  { label: 'Cedars-Sinai Medical Center (LA)', avgSalary: '$132,000–$155,000', hourlyRate: 'Magnet-designated, competitive base' },
  { label: 'UCLA Health (Los Angeles)', avgSalary: '$130,000–$152,000', hourlyRate: 'Academic system, CNA union coverage' },
  { label: 'UC San Diego Health', avgSalary: '$122,000–$142,000', hourlyRate: 'Strong specialty pay, tuition benefits' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Data sourced from US Bureau of Labor Statistics OEWS May 2024, adjusted for 3–4% annual wage growth projections into 2026. City-level and hospital data derived from metro-area OEWS summaries, CNA/SEIU-UHW union contracts, and NurseSalaryIntel market research. Travel nursing rates based on current market surveys. Figures are estimates and vary by employer, experience, certifications, location, and contract terms.';

export default function CaliforniaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'California' },
      ]}
      h1="RN Salary in California — 2026 Nurse Pay Guide"
      lastUpdated="May 2026"
      author={author}
      sources={sources}
      methodology={methodology}
      schemaTitle="RN Salary in California 2026"
      schemaDescription="California RN salary by city, cost of living context, and comparisons for 2026."
      schemaUrl="/rn-salary-by-state/california"
      stateName="California"
      stateSlug="california"
      faqs={faqs}
    >
      <p>
        California is the highest-paying state for registered nurses in 2026, with an average salary of{' '}
        <strong>$124,000/year ($59.62/hr)</strong> — more than $35,000 above the national average. Strong union
        contracts, mandatory staffing ratios, and severe nursing shortages all drive pay up.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Experience Level in California (2026)</h2>
      <p>
        California has the highest new graduate starting salaries in the nation. Union contracts at systems like
        Kaiser Permanente, UCSF, and Cedars-Sinai provide structured step increases that accelerate pay growth
        significantly with experience.
      </p>
      <SalaryTable
        title="California RN Salary by Experience (2026)"
        headers={['Experience Tier', 'Estimated Annual Base', 'Estimated Hourly']}
        rows={experienceData}
        source="BLS OEWS 2025 + CNA/SEIU-UHW contract data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by California City (2026)</h2>
      <p>
        California nurse pay varies dramatically by metro area. The Bay Area consistently leads the nation, while
        inland markets like Sacramento and Fresno offer better cost-of-living-adjusted pay despite lower base
        salaries. The San Francisco–Oakland metro pays nearly 45% above the state average.
      </p>
      <SalaryTable
        title="RN Salary by California City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Hospitals in California</h2>
      <p>
        UCSF Medical Center and Kaiser Permanente are the top-paying employers for nurses in California. Union
        contracts with CNA (California Nurses Association) and SEIU-UHW cover the majority of California hospital
        nurses, providing structured annual raises and strong benefit packages including retirement and tuition support.
      </p>
      <SalaryTable
        title="Top Hospitals — California Nurse Pay (2026)"
        headers={['Hospital System', 'Avg. RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel data"
      />

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
        pays significantly above the national average due to mandatory ratios, union coverage, and chronic staffing
        shortages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in California</h2>
      <p>
        California is one of the top destinations for travel nurses, with weekly pay ranging from $2,800–$3,600.
        The Bay Area, LA, and San Diego consistently offer the highest travel contracts. California&apos;s daily
        overtime law — OT after 8 hours, double-time after 12 — means travel nurses working 12-hour shifts earn
        additional overtime on top of their already high rates.
      </p>
      <Link
        href="/travel-nurse-salary-guide"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Travel Nurse Salary Guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in California</h2>
      <p>
        California union hospitals pay night shift differentials of 15–25% above base. On a $124,000 base salary,
        that premium adds $18,600–$31,000 annually for consistent night nurses. Weekend differentials add another
        10–20%. See our complete{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>
      <p>
        California has the strongest overtime law in the country: daily overtime applies after 8 hours in a single
        shift, not just after 40 hours per week. Double-time kicks in after 12 hours. ICU and ER nurses working
        standard 12-hour shifts regularly earn daily overtime, which can add $20,000–$40,000 annually on top of
        base pay.
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

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States →</span>
        </Link>
        <Link href="/nursing-salary/crna-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">CRNA Salary by State →</span>
        </Link>
        <Link href="/rn-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">RN Salary by State →</span>
        </Link>
        <Link href="/travel-nurse-salary-guide" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Travel Nurse Salary Guide →</span>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
