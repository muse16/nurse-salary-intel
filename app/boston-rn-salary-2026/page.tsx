import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Boston RN Salary 2026: Hourly Pay, Hospital Breakdown & What You Keep',
  description: 'Boston RN salary 2026: $105,000–$122,000 average, $50–$59/hr base. Mass General, Brigham, BIDMC, and Boston Children\'s pay data with shift differentials and take-home analysis.',
  alternates: { canonical: 'https://nursesalaryintel.com/boston-rn-salary-2026' },
};

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'Massachusetts Nurses Association (MNA) — Contracts & Research', url: 'https://www.massnurses.org/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
];
const methodology = 'Statewide figures derived from BLS OEWS May 2024 Massachusetts-level RN mean wage ($107,480 reported), projected forward at 3–4% annual wage growth for 2026. Hospital-level ranges reflect published MNA contract step scales, hospital job postings, and cross-referenced specialty salary surveys. Cost-of-living figures from published COL composite indexes. Figures are estimates; actual pay varies by employer, union status, unit, specialty, experience, certification, and shift.';

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$88,000 – $100,000', hourlyRate: '$42 – $48/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$98,000 – $112,000', hourlyRate: '$47 – $54/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$108,000 – $122,000', hourlyRate: '$52 – $59/hr' },
  { label: 'Senior RN (10+ yrs)', avgSalary: '$118,000 – $135,000', hourlyRate: '$57 – $65/hr' },
  { label: 'Charge RN', avgSalary: '+$3,000 – $8,000/yr', hourlyRate: '+$1.50 – $4/hr' },
];

const hospitalData = [
  { label: 'Massachusetts General Hospital (MGH)', avgSalary: '$112,000 – $128,000', hourlyRate: '$54 – $62/hr' },
  { label: 'Brigham and Women\'s Hospital', avgSalary: '$110,000 – $126,000', hourlyRate: '$53 – $61/hr' },
  { label: 'Beth Israel Deaconess (BIDMC)', avgSalary: '$108,000 – $124,000', hourlyRate: '$52 – $60/hr' },
  { label: 'Boston Children\'s Hospital', avgSalary: '$105,000 – $120,000', hourlyRate: '$50 – $58/hr' },
  { label: 'Tufts Medical Center', avgSalary: '$104,000 – $118,000', hourlyRate: '$50 – $57/hr' },
  { label: 'Boston Medical Center', avgSalary: '$100,000 – $115,000', hourlyRate: '$48 – $55/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Boston in 2026?',
    answer: 'Boston RNs average $105,000–$122,000/year in 2026 at major academic centers. New grads start at $88,000–$100,000; senior RNs with specialty certifications can exceed $130,000 with differentials.',
  },
  {
    question: 'Which Boston hospital pays nurses the most?',
    answer: 'Massachusetts General Hospital (MGH) and Brigham and Women\'s Hospital lead at $112,000–$128,000 and $110,000–$126,000 respectively. Both are top academic research centers with strong nursing pay structures.',
  },
  {
    question: 'Do Boston nurses have unions?',
    answer: 'Yes. The Massachusetts Nurses Association (MNA) represents RNs at several major Boston hospitals including Tufts Medical, Boston Children\'s, BIDMC, and others. MNA contracts provide step-based pay scales, staffing ratios, and defined-benefit pensions.',
  },
  {
    question: 'Is Massachusetts a good state for RN pay?',
    answer: 'Yes — Massachusetts ranks #6 nationally for RN pay at an estimated $113,000–$120,000 statewide mean for 2026. Boston metro pay exceeds the statewide average. The 5% flat state income tax is lower than New York or California.',
  },
  {
    question: 'How does Boston RN pay compare to New York City?',
    answer: 'Boston academic centers pay $105,000–$122,000 vs. NYC academic centers at $108,000–$128,000. After taxes, Boston typically yields better take-home because New York has both a state income tax (up to 10.9%) and NYC city income tax (up to 3.88%).',
  },
  {
    question: 'Are there travel nurse opportunities in Boston?',
    answer: 'Yes — the major academic centers use travel nurses for specialty units, especially ICU, NICU, and ER. Boston travel assignments typically pay $2,200–$3,200/week total package.',
  },
  {
    question: 'What is the highest-paying nursing job in Boston?',
    answer: 'CRNAs at Boston academic centers earn $200,000–$250,000. Among RN roles, senior ICU and NICU nurses with specialty certification and night differential can reach $130,000–$145,000 total compensation.',
  },
  {
    question: 'What shift differentials do Boston nurses earn?',
    answer: 'Night shift: +$4–$8/hr; weekend: +$3.50–$6/hr; holiday: +$6–$12/hr. MNA contracts tend to have above-market differential rates. A Boston RN working full-time nights adds $7,000–$15,000/year to base.',
  },
  {
    question: 'How do Boston new grad RN salaries compare to other cities?',
    answer: 'Boston new grads start at $88,000–$100,000 — well above the national new-grad mean of ~$68,000. Only San Francisco and LA new grads typically earn more at coastal academic centers.',
  },
  {
    question: 'What is the NICU nurse salary at Boston Children\'s Hospital?',
    answer: 'Boston Children\'s NICU RNs earn $105,000–$120,000 base, with RNC-NIC certified nurses earning +$3–$6/hr on top. Night differentials push total compensation to $115,000–$130,000+ for full-time night RNs.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Boston RN Salary 2026', item: 'https://nursesalaryintel.com/boston-rn-salary-2026/' },
  ],
};

export default function BostonRnSalary2026() {
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
          { label: 'Boston RN Salary 2026' },
        ]}
        h1="Boston RN Salary 2026: Hourly Pay, Hospital Breakdown & What Nurses Actually Keep"
        lastUpdated="May 5, 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Boston RN Salary 2026: Hourly Pay, Hospital Breakdown & What Nurses Actually Keep"
        schemaDescription="Boston RN salary 2026: $105,000–$122,000 average, $50–$59/hr base. Mass General, Brigham, BIDMC, and Boston Children's pay data with MNA union rates and take-home analysis."
        schemaUrl="/boston-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          Boston registered nurses earn <strong>$105,000–$122,000 per year</strong> at major academic medical centers in 2026, with top earners at Mass General and Brigham and Women&apos;s clearing <strong>$130,000+</strong> with night differentials and overtime. Boston ranks among the top 3 RN markets east of California, driven by one of the highest concentrations of academic hospital systems in the world.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Why Boston Pays RNs So Much</h2>
        <p>Three structural factors explain Boston&apos;s premium:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Academic system density</strong> — Mass General Hospital (MGH), Brigham and Women&apos;s, Beth Israel Deaconess (BIDMC), Tufts Medical, Boston Children&apos;s, and Dana-Farber all compete for the same RN talent pool, driving wages up.</li>
          <li><strong>MNA union contracts</strong> — The Massachusetts Nurses Association represents RNs at several major Boston-area hospitals. MNA contracts include step-based pay scales with annual increases, strict nurse-to-patient ratios, and defined-benefit pensions.</li>
          <li><strong>Massachusetts is a high-wage state</strong> — Massachusetts ranks <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">#6 nationally for RN pay</Link>. The state&apos;s competitive healthcare industry elevates nursing wages above national norms.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Boston RN Salary by Hospital (2026 Estimates)</h2>
        <SalaryTable
          title="Boston RN Salary by Hospital (2026)"
          headers={['Hospital', 'Est. Annual Base', 'Est. Hourly Rate']}
          rows={hospitalData}
          source="Ranges reflect base salary for staff RNs with 2–8 years experience. Shift differentials, OT, and bonuses excluded. Sources: MNA contract disclosures, hospital job postings, state OEWS data."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Boston RN Salary by Experience</h2>
        <SalaryTable
          title="Boston RN Salary by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS May 2024 MA state data projected 3–4% annually. Hospital ranges reflect MNA step scales."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials: What Night and Weekend Pay Adds</h2>
        <p>Boston academic hospitals are known for competitive differentials, especially under MNA contracts.</p>
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
                { shift: 'Night (7p–7a)', diff: '+$4.00 – $8.00/hr', annual: '+$7,488 – $14,976/yr' },
                { shift: 'Weekend (Sat/Sun)', diff: '+$3.50 – $6.00/hr', annual: '+$3,640 – $6,240/yr' },
                { shift: 'Holiday', diff: '+$6.00 – $12.00/hr', annual: 'Varies' },
                { shift: 'On-call / callback', diff: '+$3.00 – $5.00/hr', annual: 'Varies' },
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

        <h2 className="text-2xl font-bold font-headline text-on-surface">Massachusetts State Tax: What Boston Nurses Actually Keep</h2>
        <p>
          Massachusetts has a <strong>5% flat income tax</strong> — lower than New York (up to 10.9%) or California (9.3–13.3%), but higher than no-income-tax states like Texas or Florida.
        </p>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Gross Salary</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">MA Tax (~5%)</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Federal Tax (est.)</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Net Take-Home</th>
              </tr>
            </thead>
            <tbody>
              {[
                { gross: '$100,000', ma: '$5,000', fed: '~$17,500', net: '~$77,500' },
                { gross: '$115,000', ma: '$5,750', fed: '~$21,000', net: '~$88,250' },
                { gross: '$130,000', ma: '$6,500', fed: '~$24,500', net: '~$99,000' },
              ].map((row, i) => (
                <tr key={row.gross} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface tabular-nums">{row.gross}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.ma}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.fed}</td>
                  <td className="px-4 py-3 font-semibold text-on-surface tabular-nums">{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Boston vs. Other Major RN Markets (2026)</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">City</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Avg Annual Salary</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Est. Net Take-Home</th>
              </tr>
            </thead>
            <tbody>
              {[
                { city: 'San Francisco', salary: '$145,000 – $158,000', net: '$99K – $107K' },
                { city: 'Los Angeles', salary: '$125,000 – $140,000', net: '$87K – $95K' },
                { city: 'Boston', salary: '$105,000 – $122,000', net: '$80K – $93K' },
                { city: 'New York City', salary: '$108,000 – $128,000', net: '$78K – $90K' },
                { city: 'Seattle', salary: '$110,000 – $125,000', net: '$89K – $101K' },
                { city: 'Houston', salary: '$83,000 – $95,000', net: '$68K – $78K' },
              ].map((row, i) => (
                <tr key={row.city} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.city}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.salary}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Boston offers a strong real-pay position relative to New York City — higher nominal pay than typical NYC non-academic hospitals, with lower combined state+city tax burden. For specialty nursing pay nationally, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">highest-paying nursing specialties 2026</Link>. For the NICU-specific Boston breakdown, see <Link href="/nicu-nurse-salary-2026/" className="text-primary hover:underline">NICU nurse salary 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Boston RN Salary</h2>
        <p>Boston academic systems often operate on published pay scales under union contracts. Key leverage points:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Know the step scale.</strong> MNA contracts use experience-based step increases. Negotiate for a higher step placement at hire — your travel or agency experience may qualify.</li>
          <li><strong>Ask about unit differentials.</strong> ICU, NICU, and ER units often have unit-specific premiums on top of base. Confirm in writing at offer.</li>
          <li><strong>Request sign-on parity.</strong> If a peer was hired 3 months ago with a $15,000 sign-on and you&apos;re offered $10,000, cite the market rate and ask for adjustment.</li>
        </ul>
        <p>
          For copy-paste email scripts, see <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">nurse salary negotiation scripts 2026</Link>. For the statewide Massachusetts picture, see the <Link href="/rn-salary-by-state/" className="text-primary hover:underline">RN salary by state guide</Link>.
        </p>
      </SEOPageLayout>
    </>
  );
}
