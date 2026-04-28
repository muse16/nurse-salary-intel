import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Orlando RN Salary 2026: Hourly Pay, Hospital Breakdown & Florida Tax Advantage',
  description: 'Orlando RN salary 2026: $78,000–$92,000/year average, $38–$44/hr. Orlando Health, AdventHealth, and UCF Health pay data, zero income tax advantage, and sign-on bonus breakdown.',
  alternates: { canonical: 'https://nursesalaryintel.com/orlando-rn-salary-2026' },
};

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'Florida Center for Nursing — Workforce Data', url: 'https://www.flcenterfornursing.org/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
];
const methodology = 'Salary figures derived from BLS OEWS May 2024 Florida state-level RN mean wage ($76,010 reported), projected forward at 3–4% annual wage growth for 2026. Orlando metro premium (approximately 3–5% above statewide FL mean) applied based on historical system compensation benchmarks and regional job postings. Cost-of-living figures from published composite indexes. All figures are estimates.';

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$65,000 – $76,000', hourlyRate: '$31 – $37/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$72,000 – $84,000', hourlyRate: '$35 – $40/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$80,000 – $92,000', hourlyRate: '$38 – $44/hr' },
  { label: 'Senior RN (10+ yrs)', avgSalary: '$88,000 – $102,000', hourlyRate: '$42 – $49/hr' },
  { label: 'Charge RN', avgSalary: '+$2,500 – $5,000/yr', hourlyRate: '+$1.25 – $2.50/hr' },
];

const hospitalData = [
  { label: 'Orlando Health Orlando Regional Medical Center', avgSalary: '$82,000 – $95,000', hourlyRate: '$39 – $46/hr' },
  { label: 'AdventHealth Orlando', avgSalary: '$80,000 – $93,000', hourlyRate: '$38 – $45/hr' },
  { label: 'UCF Health', avgSalary: '$78,000 – $92,000', hourlyRate: '$38 – $44/hr' },
  { label: 'Nemours Children\'s Hospital', avgSalary: '$78,000 – $90,000', hourlyRate: '$38 – $43/hr' },
  { label: 'HCA Florida (Orlando campuses)', avgSalary: '$77,000 – $89,000', hourlyRate: '$37 – $43/hr' },
  { label: 'Orlando VA Medical Center', avgSalary: '$78,000 – $92,000', hourlyRate: '$38 – $44/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Orlando in 2026?',
    answer: 'Orlando RNs average $78,000–$92,000/year in 2026. Senior RNs with specialty certifications at Orlando Health or AdventHealth can reach $100,000+ with night differentials and bonuses.',
  },
  {
    question: 'Which Orlando hospital pays nurses the most?',
    answer: 'Orlando Health Orlando Regional Medical Center leads at $82,000–$95,000 base. AdventHealth Orlando follows closely at $80,000–$93,000. UCF Health is increasing pay as it grows its academic medical center footprint.',
  },
  {
    question: 'Is Orlando a good place to be a nurse?',
    answer: 'Orlando offers zero state income tax, a rapidly growing healthcare market, lower cost of living than Miami or coastal markets, and strong sign-on bonuses. The primary tradeoffs are lower nominal pay than coastal cities and limited union representation.',
  },
  {
    question: 'Does Florida have a nursing shortage?',
    answer: 'Florida has one of the highest projected RN shortages in the US through 2035 (Florida Center for Nursing). This drives sign-on bonuses, steady demand, and a strong environment for experienced RNs to negotiate.',
  },
  {
    question: 'How does Orlando RN pay compare to Miami?',
    answer: 'Miami leads at $83,000–$97,000 vs. Orlando\'s $78,000–$92,000. Miami\'s premium is driven by Jackson Memorial\'s academic scale. However, Orlando\'s cost of living is lower than Miami, which narrows the real purchasing-power gap.',
  },
  {
    question: 'Are travel nurse opportunities good in Orlando?',
    answer: 'Yes — Orlando is a strong travel market. High tourist volume creates steady ER, med-surg, and orthopedic demand. Major agencies post assignments at Orlando Health and HCA Florida campuses at $2,000–$2,800/week total package.',
  },
  {
    question: 'What nursing specialties are most in demand in Orlando?',
    answer: 'Emergency nursing, ICU, and NICU are consistently the hardest-to-fill specialties in Orlando. The tourist-heavy environment creates high ED trauma volume, and the growing pediatric population drives demand at Nemours and Arnold Palmer Hospital.',
  },
  {
    question: "What is Florida's income tax rate for nurses?",
    answer: 'Florida has zero state income tax. For a nurse earning $85,000, this saves approximately $7,905/year compared to California (9.3% tax rate) and $4,250/year compared to Massachusetts (5% tax rate).',
  },
  {
    question: 'How does Orlando RN pay compare to Tampa?',
    answer: 'Orlando leads Tampa slightly at $78,000–$92,000 vs. $76,000–$90,000. The difference is driven by Orlando Health\'s Level I trauma volume and AdventHealth\'s system scale. Both cities offer Florida\'s zero income tax advantage.',
  },
  {
    question: 'What sign-on bonuses do Orlando hospitals offer?',
    answer: 'Major level I trauma and academic centers (Orlando Health) offer $8,000–$15,000 with 1–2 year commitments. Community hospitals offer $4,000–$10,000. Travel assignments offer $1,500–$3,500 per 13-week contract.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Florida RN Salary', item: 'https://nursesalaryintel.com/rn-salary-by-state/florida/' },
    { '@type': 'ListItem', position: 4, name: 'Orlando RN Salary 2026', item: 'https://nursesalaryintel.com/orlando-rn-salary-2026/' },
  ],
};

export default function OrlandoRnSalary2026() {
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
          { label: 'Florida RN Salary', href: '/rn-salary-by-state/florida/' },
          { label: 'Orlando RN Salary 2026' },
        ]}
        h1="Orlando RN Salary 2026: Hourly Pay, Hospital Breakdown & Florida Tax Advantage"
        lastUpdated="May 8, 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Orlando RN Salary 2026: Hourly Pay, Hospital Breakdown & Florida Tax Advantage"
        schemaDescription="Orlando RN salary 2026: $78,000–$92,000/year, $38–$44/hr. Orlando Health, AdventHealth, and UCF Health pay data, zero income tax advantage, and sign-on bonus breakdown."
        schemaUrl="/orlando-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          Orlando registered nurses earn <strong>$78,000–$92,000 per year</strong> in 2026 — Florida&apos;s <strong>zero state income tax</strong> gives Orlando nurses a meaningful take-home advantage over nurses in California, New York, or Massachusetts. The Orlando metro is Florida&apos;s second-largest healthcare market, anchored by Orlando Health, AdventHealth&apos;s national headquarters, and the growing UCF Health academic system.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Orlando&apos;s Biggest Pay Advantage: Zero State Income Tax</h2>
        <p>Florida has no state income tax. For nurses, this is a material financial advantage:</p>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">State</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Income Tax at $85K</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Annual Savings vs. CA</th>
              </tr>
            </thead>
            <tbody>
              {[
                { state: 'California', tax: '9.3%', savings: '—' },
                { state: 'New York', tax: '6.85% + NYC city tax', savings: '—' },
                { state: 'Massachusetts', tax: '5.0%', savings: '—' },
                { state: 'Arizona', tax: '2.5%', savings: '+$5,780/yr' },
                { state: 'Florida (Orlando)', tax: '0%', savings: '+$7,905/yr vs. CA' },
              ].map((row, i) => (
                <tr key={row.state} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.state}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.tax}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Orlando RN Salary by Hospital (2026 Estimates)</h2>
        <SalaryTable
          title="Orlando RN Salary by Hospital (2026)"
          headers={['Hospital', 'Est. Annual Base', 'Est. Hourly Rate']}
          rows={hospitalData}
          source="Ranges reflect base salary for staff RNs with 2–8 years experience. Shift differentials, OT, and bonuses excluded."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Orlando RN Salary by Experience</h2>
        <SalaryTable
          title="Orlando RN Salary by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS May 2024 FL state data projected 3–4% annually, with 3–5% Orlando metro premium applied."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials in Orlando</h2>
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
                { shift: 'Night (7p–7a)', diff: '+$3.00 – $6.00/hr', annual: '+$5,616 – $11,232/yr' },
                { shift: 'Weekend (Sat/Sun)', diff: '+$2.50 – $4.50/hr', annual: '+$2,600 – $4,680/yr' },
                { shift: 'Holiday', diff: '+$4.00 – $8.00/hr', annual: 'Varies' },
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

        <h2 className="text-2xl font-bold font-headline text-on-surface">Orlando vs. Other Florida Cities</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">City</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">RN Salary Range</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                { city: 'Miami / South Florida', range: '$83,000 – $97,000', note: "Florida's highest-paying RN market" },
                { city: 'Orlando', range: '$78,000 – $92,000', note: 'Strong academic/specialty cluster' },
                { city: 'Tampa', range: '$76,000 – $90,000', note: 'BayCare, HCA, Tampa General' },
                { city: 'Jacksonville', range: '$73,000 – $87,000', note: 'Mayo Clinic (Jax campus)' },
              ].map((row, i) => (
                <tr key={row.city} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.city}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.range}</td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          See the <Link href="/rn-salary-by-state/florida/" className="text-primary hover:underline">Florida RN salary guide</Link> for statewide context and <Link href="/rn-salary-miami-fl-2026/" className="text-primary hover:underline">Miami RN salary 2026</Link> for the South Florida comparison.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate an RN Salary in Orlando</h2>
        <p>Orlando hospitals are predominantly non-union, making individual negotiation more flexible. Key leverage points:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cite the market rate.</strong> Orlando Health and AdventHealth compete for the same talent — an offer from one creates leverage with the other.</li>
          <li><strong>Push on sign-on.</strong> Orlando sign-on bonuses have more flexibility than base salary. If the base is firm, ask for an additional $2,000–$5,000 upfront.</li>
          <li><strong>Specialty certification premium.</strong> CEN, CCRN, RNC-NIC — always get the specific dollar differential in writing.</li>
        </ul>
        <p>
          For copy-paste email scripts, see <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">nurse salary negotiation scripts 2026</Link>. Run any offer letter through the <Link href="/audit" className="text-primary hover:underline">Contract Red Flag Audit</Link> before signing. For the full Florida picture, see our <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">highest-paying states for RNs guide</Link>.
        </p>
      </SEOPageLayout>
    </>
  );
}
