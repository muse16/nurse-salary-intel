import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California RN Salary 2026: Regional Breakdown & Hourly Pay',
  description: 'California RN salary 2026: $120K–$145K statewide, hourly rates $57–$70/hr. Regional breakdown for Bay Area, LA, San Diego, and Central Valley with experience tiers.',
  alternates: { canonical: 'https://nursesalaryintel.com/california-rn-salary-2026/' },
};

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$99,840 – $116,480', hourlyRate: '$48 – $56/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$112,320 – $128,960', hourlyRate: '$54 – $62/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$124,800 – $141,440', hourlyRate: '$60 – $68/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$137,280 – $156,000', hourlyRate: '$66 – $75/hr' },
];

const regionalData = [
  { label: 'San Francisco / Bay Area', avgSalary: '$140,000 – $155,000', hourlyRate: '$67 – $75/hr' },
  { label: 'Los Angeles Metro', avgSalary: '$125,000 – $140,000', hourlyRate: '$60 – $67/hr' },
  { label: 'San Diego', avgSalary: '$120,000 – $135,000', hourlyRate: '$58 – $65/hr' },
  { label: 'Oakland / East Bay', avgSalary: '$128,000 – $142,000', hourlyRate: '$61 – $68/hr' },
  { label: 'Sacramento', avgSalary: '$115,000 – $128,000', hourlyRate: '$55 – $61/hr' },
  { label: 'Inland Empire', avgSalary: '$108,000 – $122,000', hourlyRate: '$52 – $59/hr' },
  { label: 'Central Valley (Fresno, Bakersfield)', avgSalary: '$100,000 – $115,000', hourlyRate: '$48 – $55/hr' },
];

const specialtyData = [
  { label: 'ICU / Critical Care', avgSalary: '+$8,320 – $12,480/yr', hourlyRate: '+$4 – $6/hr' },
  { label: 'ER / Emergency', avgSalary: '+$6,240 – $10,400/yr', hourlyRate: '+$3 – $5/hr' },
  { label: 'OR / Surgical', avgSalary: '+$6,240 – $10,400/yr', hourlyRate: '+$3 – $5/hr' },
  { label: 'Trauma / Burn', avgSalary: '+$10,400 – $14,560/yr', hourlyRate: '+$5 – $7/hr' },
  { label: 'NICU', avgSalary: '+$6,240 – $8,320/yr', hourlyRate: '+$3 – $4/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in California in 2026?',
    answer: 'Approximately $132,000 annually, or $63/hour statewide. The SF Bay Area averages $140,000–$155,000; inland areas average $100,000–$115,000. Source: BLS May 2024 OEWS projected 3–4% annually.',
  },
  {
    question: 'Which California city pays registered nurses the most?',
    answer: 'San Francisco leads at $140,000–$155,000 annually. Oakland/East Bay follows closely at $128,000–$142,000. Los Angeles metro averages $125,000–$140,000. Sacramento offers a more affordable entry point at $115,000–$128,000.',
  },
  {
    question: 'What do ICU nurses earn in California?',
    answer: 'ICU RNs earn +$4–$6/hr above base RN rates, plus night differentials of +$2–$5/hr. In coastal metros, a mid-career ICU night RN can reach $70–$80/hr loaded — $145,000–$166,000 annually at full-time hours.',
  },
  {
    question: 'Is California a good state for RN pay after taxes?',
    answer: 'Nominally yes — highest in the nation. But California\'s 9.3–13.3% state income tax and high cost of living reduce real purchasing power. An RN earning $132,000 in California nets roughly $95,000–$100,000 take-home, comparable to a Texas RN earning $88,000.',
  },
  {
    question: 'Do California hospitals offer sign-on bonuses?',
    answer: 'Yes — commonly $5,000–$25,000 depending on specialty and location. ER/ICU roles and coastal metros command higher bonuses. Most tie to a 1–2 year commitment.',
  },
  {
    question: 'What unions represent California RNs?',
    answer: 'The California Nurses Association (CNA) and SEIU are the largest. Union membership typically secures 3–4% annual raises, strict staffing ratios, and defined-benefit pension contributions. Non-union hospitals pay 5–10% less on average.',
  },
  {
    question: 'How much do shift differentials add to a California RN\'s salary?',
    answer: 'Night shift: +$2–$5/hr; weekend: +$2–$4/hr; holiday: +$4–$8/hr. A full-time RN on nights and weekends can add $15,000–$25,000/year to base. ICU night nurses in Bay Area or LA can clear $80+/hr loaded.',
  },
  {
    question: 'What is the starting salary for a new graduate RN in California?',
    answer: 'New grads in California start at $99,840–$116,480/year ($48–$56/hr). SF and LA new grads typically start at the higher end; rural or inland areas are lower. Expect progression to mid-career rates ($120K+) within 3–5 years.',
  },
  {
    question: 'Is there a nursing shortage in California?',
    answer: 'California has episodic shortages in certain specialties (ER, ICU, behavioral health) and regions (rural). Major metros are competitive for hiring but not critically short. Specialty-certified RNs face less competition.',
  },
  {
    question: 'How does California RN salary compare to Texas or Florida?',
    answer: 'California pays $132K vs Texas $88K vs Florida $80K nominally. But after taxes (California 9.3–13.3%, Texas/Florida 0%) and cost of living (California housing 50–80% above national average), a Texas or Florida RN may have equal or better real purchasing power.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'California RN Salary 2026', item: 'https://nursesalaryintel.com/california-rn-salary-2026/' },
  ],
};

export default function CaliforniaRNSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'RN Salary by State', href: '/rn-salary-by-state/' },
          { label: 'California RN Salary 2026' },
        ]}
        h1="California RN Salary 2026: Regional Breakdown, Hourly Pay & What Nurses Actually Keep"
        lastUpdated="April 27, 2026"
        schemaTitle="California RN Salary 2026: Regional Breakdown & Hourly Pay"
        schemaDescription="California RN salary 2026: $120K–$145K statewide, hourly rates $57–$70/hr. Regional breakdown for Bay Area, LA, San Diego, and Central Valley with experience tiers."
        schemaUrl="/california-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          California consistently ranks as the <strong>highest-paying state for registered nurses</strong> in the nation. As of 2026, the statewide mean RN salary is approximately <strong>$132,000/year ($63/hr)</strong>, based on BLS May 2024 OEWS data projected with 3–4% annual wage growth. But that headline number masks major regional variation — San Francisco Bay Area nurses average $140,000–$155,000 while Central Valley RNs start at $100,000–$115,000.
        </p>
        <p>
          Before accepting a California offer, you need to understand the full picture: high state income taxes (9.3–13.3%), cost of living, union dynamics, and specialty premiums all determine what that $132,000 actually buys you.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">California RN Salary by Region (2026 Estimates)</h2>
        <SalaryTable
          title="California RN Salary by Metro Area (2026)"
          headers={['Region', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={regionalData}
          source="BLS OEWS May 2024, projected 3–4% annually. Figures are estimates; actual pay varies by employer and experience."
        />
        <p>
          The Bay Area premium reflects tech-sector wage inflation, severe housing costs, and competition between UCSF, Stanford, Kaiser, and Sutter Health for top nursing talent. LA&apos;s market is nearly as tight, with Cedars-Sinai, UCLA Health, and USC Keck all competing aggressively. Use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model your take-home by region.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">California RN Pay by Experience Tier</h2>
        <SalaryTable
          title="California RN Pay by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS percentile data, May 2024, projected forward. Excludes shift differentials, OT, and bonuses."
        />
        <p>
          The steepest pay jump in California nursing happens in years 2–5, when specialty certification, union step progression, and market-rate adjustments stack together. A CCRN-certified ICU nurse moving from year 2 to year 5 can see $15,000–$20,000 in total compensation growth beyond base raises.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">California Specialty Premiums</h2>
        <SalaryTable
          title="California RN Specialty Premiums Above Base (2026)"
          headers={['Specialty', 'Additional Annual', 'Additional Hourly']}
          rows={specialtyData}
          source="Specialty premium estimates based on BLS OES specialty classifications and reported union contract differentials."
        />
        <p>
          Specialty premiums stack on top of base pay and differentials. An SF Bay Area ICU RN working nights ($140K base + $5/hr specialty + $4/hr night differential) can reach <strong>$160,000–$170,000+ annually</strong> at full-time hours.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials and Overtime in California</h2>
        <p>California hospitals typically pay:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Night shift (10 PM–6 AM):</strong> +$2–$5/hr or 10–15% of base</li>
          <li><strong>Weekend:</strong> +$2–$4/hr or 8–12% premium</li>
          <li><strong>Holiday:</strong> +$4–$8/hr or flat $75–$150/shift</li>
          <li><strong>Charge nurse:</strong> +$2–$4/hr supplemental</li>
          <li><strong>Float pool:</strong> +$3–$5/hr (generalist premium)</li>
        </ul>
        <p>
          California overtime law kicks in after 8 hours in a day (1.25×) and after 12 hours (1.5×) — stronger protections than federal law. A nurse picking up extra shifts earns overtime faster, which inflates reported annual earnings.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Union Influence on California RN Pay</h2>
        <p>
          California&apos;s two major nursing unions — the <strong>California Nurses Association (CNA)</strong> and <strong>SEIU</strong> — represent the majority of RNs at major health systems. Union contracts typically secure:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>3–4% annual base wage increases</li>
          <li>Strict nurse-to-patient staffing ratios (California law mandates maximums)</li>
          <li>Defined-benefit pension contributions at older systems (a significant benefit)</li>
          <li>Comprehensive health and dental coverage</li>
        </ul>
        <p>Non-union hospitals pay roughly 5–10% less on average but may offer more scheduling flexibility.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living Reality Check</h2>
        <p>
          California&apos;s $132,000 mean RN salary is compelling on paper but faces significant headwinds:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>State income tax:</strong> 9.3–13.3% marginal rate — one of the highest in the nation</li>
          <li><strong>Median home price:</strong> $650,000–$800,000 (vs. $320,000 national average)</li>
          <li><strong>Rent:</strong> $1,800–$2,400/month for a 1-bedroom in coastal metros</li>
          <li><strong>Gas and groceries:</strong> 25–35% above national averages</li>
        </ul>
        <p>
          A California RN netting $95,000–$100,000 after taxes may have comparable or lower purchasing power than a Texas RN netting $70,000–$73,000. For the full comparison, see <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">Highest Paying States for RNs 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses and Incentives (2026)</h2>
        <p>California hospitals compete intensely for specialty talent:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>ICU/ER/OR specialty roles:</strong> $10,000–$25,000 sign-on (coastal metros)</li>
          <li><strong>Med-surg floor positions:</strong> $5,000–$12,000</li>
          <li><strong>Relocation packages:</strong> $3,000–$8,000 for out-of-state RNs</li>
          <li><strong>Student loan repayment:</strong> Up to $10,000 for recent BSN grads</li>
          <li><strong>Housing stipends:</strong> $500–$1,500/month (rare but emerging in Bay Area and LA)</li>
        </ul>
        <p>
          For maximizing your offer, see the <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link> — including sign-on bonus counter templates.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Should You Move to California as a Nurse?</h2>
        <p>The honest answer depends on your priorities:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Highest nominal salary + union protections + staffing ratios:</strong> Yes, California wins</li>
          <li><strong>Best real purchasing power:</strong> Texas, Arizona, or Pacific Northwest may offer better value</li>
          <li><strong>Career development / academic medicine / specialty depth:</strong> California (UCSF, Stanford, UCLA, Cedars-Sinai) is unmatched</li>
          <li><strong>Quality of life + outdoor lifestyle:</strong> Depends on region; San Diego and Sacramento offer better balance than SF or LA</li>
        </ul>
        <p>
          For the broader state comparison, see <Link href="/rn-salary-by-state/" className="text-primary hover:underline">RN Salary by State 2026</Link> or our <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">top-paying states guide</Link>.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics OEWS, California statewide and metro areas, May 2024; California Nurses Association wage survey data; SEIU healthcare division publications. Internal methodology: BLS mean wages projected with 3–4% annual wage-growth assumption through 2026. All figures are estimates; actual pay varies by employer, experience, location, shift, and contract terms. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
