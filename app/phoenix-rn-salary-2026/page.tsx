import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Phoenix RN Salary 2026: Metro Pay, Top Hospitals & Arizona Tax Advantage',
  description: 'Phoenix RN salary 2026: $85,000–$98,000/year average, $41–$47/hr. Banner Health, Mayo Clinic, and HonorHealth pay data, 2.5% flat tax advantage, and Scottsdale vs. Tucson comparison.',
  alternates: { canonical: 'https://nursesalaryintel.com/phoenix-rn-salary-2026/' },
};

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'Arizona Department of Revenue — Individual Income Tax Rates', url: 'https://azdor.gov/individual-income-tax' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
];
const methodology = 'Salary figures derived from BLS OEWS May 2024 Arizona state-level RN mean wage ($86,730 reported), projected forward at 3–4% annual wage growth for 2026. Phoenix metro premium (approximately 5–8% above statewide AZ mean) applied based on historical system compensation benchmarks and regional job postings. Arizona income tax rate from AZ Dept. of Revenue 2023 Prop 132 implementation. All figures are estimates.';

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$68,000 – $80,000', hourlyRate: '$33 – $38/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$78,000 – $90,000', hourlyRate: '$38 – $43/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$86,000 – $98,000', hourlyRate: '$41 – $47/hr' },
  { label: 'Senior RN (10+ yrs)', avgSalary: '$95,000 – $108,000', hourlyRate: '$46 – $52/hr' },
  { label: 'Charge RN', avgSalary: '+$3,000 – $6,000/yr', hourlyRate: '+$1.50 – $3/hr' },
];

const hospitalData = [
  { label: 'Mayo Clinic (Phoenix/Scottsdale)', avgSalary: '$90,000 – $105,000', hourlyRate: '$43 – $50/hr' },
  { label: 'Banner University Medical Center', avgSalary: '$87,000 – $100,000', hourlyRate: '$42 – $48/hr' },
  { label: 'HonorHealth Scottsdale', avgSalary: '$85,000 – $98,000', hourlyRate: '$41 – $47/hr' },
  { label: 'Dignity Health / CommonSpirit Phoenix', avgSalary: '$84,000 – $96,000', hourlyRate: '$40 – $46/hr' },
  { label: 'Phoenix Children\'s Hospital', avgSalary: '$84,000 – $97,000', hourlyRate: '$40 – $47/hr' },
  { label: 'Valleywise Health (Maricopa Medical)', avgSalary: '$82,000 – $95,000', hourlyRate: '$39 – $46/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Phoenix in 2026?',
    answer: 'Phoenix RNs earn $85,000–$98,000/year on average in 2026. Mayo Clinic Scottsdale is the highest-paying anchor at $90,000–$105,000. The statewide Arizona mean is $82,000–$95,000.',
  },
  {
    question: 'Which Phoenix hospital pays nurses the most?',
    answer: 'Mayo Clinic (Phoenix/Scottsdale campus) leads at $90,000–$105,000 for staff RNs. Banner University Medical Center and HonorHealth Scottsdale follow at $85,000–$100,000.',
  },
  {
    question: 'Is Phoenix a good place for nurses to live?',
    answer: 'Phoenix offers competitive RN pay, a 2.5% flat income tax (one of the lowest in the US), affordable cost of living relative to coastal cities, and strong healthcare infrastructure. The main tradeoffs are summer heat and lack of union density.',
  },
  {
    question: 'How does Phoenix nurse pay compare to Tucson?',
    answer: 'Phoenix averages $85,000–$98,000; Tucson averages $76,000–$90,000. The gap is driven by Mayo Clinic, Banner University, and HonorHealth\'s higher scales in Phoenix. Tucson offers lower cost of living, which partially offsets the pay gap.',
  },
  {
    question: 'Do Phoenix hospitals have nurse unions?',
    answer: 'Valleywise Health (Maricopa Medical Center) is represented by SEIU 1199. The major private systems (Banner, Mayo, HonorHealth, Dignity Health) are non-union, which creates more flexibility on sign-on bonuses and specialty differentials but no built-in step scales.',
  },
  {
    question: "What is Arizona's income tax rate for nurses in 2026?",
    answer: 'Arizona has a 2.5% flat income tax (effective 2023, under Prop 132) — the third-lowest state income tax for nurses at the $85,000–$100,000 income level. This saves Phoenix nurses $6,000+/year compared to California.',
  },
  {
    question: 'How does Phoenix RN pay compare to California?',
    answer: 'California nominally pays $115,000–$148,000 vs. Phoenix\'s $85,000–$98,000. After taxes (CA 9.3–13.3% vs. AZ 2.5%) and cost of living (CA housing typically 80–120% above Phoenix), the real gap narrows — but California still leads on both nominal and real pay.',
  },
  {
    question: 'What nursing shortage situation exists in Phoenix?',
    answer: 'Arizona has significant RN shortages in ER, ICU, and behavioral health specialties. Phoenix metro hospitals use travel nurses and sign-on bonuses to compete. The Arizona Nursing Workforce Center projects ongoing demand growth through 2030.',
  },
  {
    question: 'What sign-on bonuses do Phoenix hospitals offer?',
    answer: 'Major academic centers (Mayo, Banner University) offer $10,000–$18,000 sign-on bonuses with 1–2 year commitments. Community hospitals offer $5,000–$12,000. Always review payback language before signing.',
  },
  {
    question: 'What specialty nursing pays the most in Phoenix?',
    answer: 'CRNAs in Phoenix earn $185,000–$215,000. Among RN specialties, ICU and NICU nurses at Mayo Clinic and Phoenix Children\'s earn $95,000–$108,000 base. See our highest-paying nursing specialties guide for the full ranking.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Arizona RN Salary', item: 'https://nursesalaryintel.com/arizona-rn-salary-2026/' },
    { '@type': 'ListItem', position: 4, name: 'Phoenix RN Salary 2026', item: 'https://nursesalaryintel.com/phoenix-rn-salary-2026/' },
  ],
};

export default function PhoenixRnSalary2026() {
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
          { label: 'Arizona RN Salary', href: '/arizona-rn-salary-2026/' },
          { label: 'Phoenix RN Salary 2026' },
        ]}
        h1="Phoenix RN Salary 2026: Metro Pay, Top Hospitals & the Arizona Tax Advantage"
        lastUpdated="May 7, 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Phoenix RN Salary 2026: Metro Pay, Top Hospitals & the Arizona Tax Advantage"
        schemaDescription="Phoenix RN salary 2026: $85,000–$98,000/year, $41–$47/hr. Banner Health, Mayo Clinic, and HonorHealth pay data, 2.5% flat-tax advantage, and Scottsdale vs. Tucson comparison."
        schemaUrl="/phoenix-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          Phoenix registered nurses earn <strong>$85,000–$98,000 per year</strong> in 2026, with Arizona&apos;s <strong>2.5% flat income tax</strong> giving Phoenix nurses a substantial take-home edge over markets in California or New York. The Phoenix metro is the dominant RN job market in Arizona, home to Banner Health (the state&apos;s largest employer), Mayo Clinic&apos;s Southwest flagship, and HonorHealth&apos;s major system.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona&apos;s 2.5% Tax: The Real Take-Home Advantage</h2>
        <p>Arizona&apos;s flat 2.5% income tax is the third-lowest in the US for nurses at the $85,000–$100,000 income level. The annual savings vs. other markets:</p>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">State</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Income Tax Rate (~$90K)</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Annual Tax on $90K</th>
              </tr>
            </thead>
            <tbody>
              {[
                { state: 'California', rate: '9.3%', tax: '~$8,370' },
                { state: 'New York', rate: '6.85%', tax: '~$6,165' },
                { state: 'Massachusetts', rate: '5.0%', tax: '~$4,500' },
                { state: 'Arizona (Phoenix)', rate: '2.5%', tax: '~$2,250' },
                { state: 'Texas / Florida', rate: '0%', tax: '$0' },
              ].map((row, i) => (
                <tr key={row.state} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.state}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.rate}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Phoenix RN Salary by Hospital (2026 Estimates)</h2>
        <SalaryTable
          title="Phoenix RN Salary by Hospital (2026)"
          headers={['Hospital', 'Est. Annual Base', 'Est. Hourly Rate']}
          rows={hospitalData}
          source="Ranges reflect base salary for staff RNs with 2–8 years experience. Differentials, OT, and bonuses excluded. Sources: published job postings and system benchmarks."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Phoenix RN Salary by Experience</h2>
        <SalaryTable
          title="Phoenix RN Salary by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS May 2024 AZ state data projected 3–4% annually, with Phoenix metro premium of 5–8% applied."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Phoenix vs. Tucson vs. Rural Arizona</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Location</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">RN Salary Range</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { loc: 'Phoenix metro (Maricopa County)', range: '$85,000 – $98,000', note: 'Highest pay, most jobs' },
                { loc: 'Scottsdale (Mayo Clinic, HonorHealth)', range: '$88,000 – $105,000', note: 'Premium market via Mayo' },
                { loc: 'Tucson metro', range: '$76,000 – $90,000', note: 'Banner + TMC systems' },
                { loc: 'Flagstaff', range: '$78,000 – $92,000', note: 'Remoteness premium' },
                { loc: 'Rural Arizona', range: '$72,000 – $86,000', note: 'Shortage-area premiums' },
              ].map((row, i) => (
                <tr key={row.loc} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.loc}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.range}</td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials in Phoenix</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Shift</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Differential</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Annual Impact (FT, 3×12)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { shift: 'Night (7p–7a)', diff: '+$3.00 – $5.50/hr', annual: '+$5,616 – $10,296/yr' },
                { shift: 'Weekend (Sat/Sun)', diff: '+$2.50 – $4.50/hr', annual: '+$2,600 – $4,680/yr' },
                { shift: 'Holiday', diff: '+$5.00 – $9.00/hr', annual: 'Varies' },
              ].map((row, i) => (
                <tr key={row.shift} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.shift}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.diff}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate an RN Offer in Phoenix</h2>
        <p>Phoenix lacks the union density of Boston or California, so negotiation is more individual. Key leverage points:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Competing offers</strong> — Phoenix hospitals respond to competing offers, even from nearby cities or systems.</li>
          <li><strong>National certification premiums</strong> — CEN (emergency), CCRN (ICU), RNC-NIC (NICU) add $2–$5/hr. Ask for the specific differential in writing.</li>
          <li><strong>Sign-on stacking</strong> — With a specialty credential + multi-year commitment + relocation, you may qualify for layered bonuses.</li>
        </ul>
        <p>
          For email scripts, see <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">nurse salary negotiation scripts 2026</Link>. For statewide Arizona context, see the <Link href="/arizona-rn-salary-2026/" className="text-primary hover:underline">Arizona RN salary guide</Link>. For NICU specialty pay at Phoenix Children&apos;s, see <Link href="/nicu-nurse-salary-2026/" className="text-primary hover:underline">NICU nurse salary 2026</Link>.
        </p>
      </SEOPageLayout>
    </>
  );
}
