import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Atlanta RN Salary 2026: $71,280/yr Avg + Emory, Grady & Piedmont Pay',
  description: 'Atlanta RN salary 2026: $71,280/yr average, $34.27/hr. Pay by hospital, sign-on bonuses, Georgia vs. national comparison, and specialty premiums.',
  alternates: { canonical: 'https://nursesalaryintel.com/atlanta-rn-salary-2026' },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$57,600 – $65,200', hourlyRate: '$27.70 – $31.40/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$72,800 – $84,600', hourlyRate: '$35.00 – $40.70/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$86,200 – $104,400', hourlyRate: '$41.40 – $50.20/hr' },
  { label: 'Top 10% earners', avgSalary: '$112,600+', hourlyRate: '$54.10+/hr' },
];

const hospitalData = [
  { label: 'Emory University Hospital', avgSalary: '$70,200 – $98,600', hourlyRate: 'Sign-on: $8K–$15K' },
  { label: 'Grady Memorial Hospital', avgSalary: '$67,800 – $92,400', hourlyRate: 'PSLF eligible; Level 1 trauma' },
  { label: 'Piedmont Atlanta Hospital', avgSalary: '$68,400 – $94,200', hourlyRate: 'Sign-on: $6K–$12K' },
  { label: 'Children\'s Healthcare of Atlanta', avgSalary: '$69,600 – $96,800', hourlyRate: 'Pediatric premium' },
  { label: 'Northside Hospital Atlanta', avgSalary: '$67,200 – $91,600', hourlyRate: 'OB/L&D premium' },
  { label: 'WellStar Health System', avgSalary: '$65,800 – $88,400', hourlyRate: 'Suburban network' },
  { label: 'Piedmont Henry / Fayette', avgSalary: '$63,400 – $84,200', hourlyRate: 'Southern suburbs' },
];

const specialtyData = [
  { label: 'Med-Surg / Floor', avgSalary: '$67,400', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$70,600', hourlyRate: '+$3,200' },
  { label: 'L&D', avgSalary: '$74,800', hourlyRate: '+$7,400' },
  { label: 'OR / Surgical', avgSalary: '$75,900', hourlyRate: '+$8,500' },
  { label: 'ER', avgSalary: '$76,400', hourlyRate: '+$9,000' },
  { label: 'ICU / CCU', avgSalary: '$78,200', hourlyRate: '+$10,800' },
  { label: 'NICU', avgSalary: '$76,800', hourlyRate: '+$9,400' },
  { label: 'Trauma (Level 1)', avgSalary: '$82,600', hourlyRate: '+$15,200' },
];

const cityComparison = [
  { label: 'Atlanta, GA', avgSalary: '$71,280', hourlyRate: 'COL Index 104' },
  { label: 'Charlotte, NC', avgSalary: '$69,800', hourlyRate: 'COL Index 96' },
  { label: 'Nashville, TN', avgSalary: '$70,400', hourlyRate: 'COL Index 99' },
  { label: 'Miami, FL', avgSalary: '$74,200', hourlyRate: 'COL Index 123' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: 'COL Index 100' },
];

const faqs = [
  { question: 'What is the average RN salary in Atlanta in 2026?', answer: 'The average registered nurse salary in Atlanta is $71,280/year ($34.27/hour) in 2026, based on BLS OEWS data for the Atlanta-Sandy Springs-Roswell MSA. This is about 20% below the national mean, but Georgia\'s low state income tax (5.49% flat) and lower cost of living narrow the real-dollar gap.' },
  { question: 'Which Atlanta hospital pays nurses the most?', answer: 'Emory University Hospital leads at $70,200–$98,600 base for specialty roles, with Grady Memorial (Level 1 trauma) close behind at $67,800–$92,400. Emory offers the strongest academic advancement pathway; Grady offers PSLF eligibility for nurses with federal student loans.' },
  { question: 'Why does Atlanta pay nurses less than the national average?', answer: 'Georgia has a lower cost of living than the national average (COL index ~104 for Atlanta), and the state has historically had lower union density in healthcare. Wages are market-driven with less collective bargaining pressure than Northeast or West Coast cities.' },
  { question: 'How do sign-on bonuses work in Atlanta?', answer: 'Atlanta hospitals offer competitive sign-ons, particularly for ICU, ER, OR, and L&D. Emory leads at $8K–$15K for 2-year commitments in critical care. Children\'s Healthcare of Atlanta is aggressive for pediatric specialty nurses. Most commitments require 2 years; early departure triggers prorated clawback.' },
  { question: 'Is Atlanta growing as a nursing market?', answer: 'Yes. Georgia\'s population is growing 1.5% annually — faster than the national rate — driving hospital expansion across the Atlanta metro. Emory and Piedmont have both opened new facilities since 2023, increasing demand for experienced RNs across all specialties.' },
  { question: 'How much do travel nurses make in Atlanta?', answer: 'Travel RNs in Atlanta typically earn $42–$62/hr ($87,000–$128,000/year annualized), significantly above local staff rates. Demand is highest at Grady (trauma), Children\'s Healthcare (PICU), and Emory (oncology/transplant).' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Atlanta RN Salary 2026', item: 'https://nursesalaryintel.com/atlanta-rn-salary-2026/' },
  ],
};

export default function AtlantaRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'Atlanta RN Salary 2026' }]}
        h1="Atlanta RN Salary 2026: What Nurses Earn at Emory, Grady & Children's Healthcare"
        lastUpdated="April 2026"
        schemaTitle="Atlanta RN Salary 2026: $71,280/yr Avg + Emory, Grady & Piedmont Pay"
        schemaDescription="Atlanta RN salary 2026: $71,280/yr average, $34.27/hr. Pay by hospital, sign-on bonuses, Georgia vs. national comparison, and specialty premiums."
        schemaUrl="/atlanta-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          The average <strong>registered nurse salary in Atlanta is $71,280/year ($34.27/hour)</strong> in 2026.
          That&apos;s 20% below the national mean — but Atlanta&apos;s COL-adjusted pay is more competitive than
          the headline suggests. A flat 5.49% Georgia income tax (vs. California&apos;s 9.3%+) and housing costs
          well below the coasts mean Atlanta RNs keep more of each dollar. Meanwhile, the metro&apos;s rapid
          population growth is pushing hospitals to compete harder on sign-ons and specialty premiums.
        </p>

        <Image
          src="/images/atlanta-rn-salary-2026-hospital.png"
          alt="Atlanta registered nurse in scrubs reviewing tablet outside Emory University Hospital entrance"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta RN Salary at a Glance (2026)</h2>

        <SalaryTable
          title="Atlanta RN Salary by Experience Level"
          headers={['Experience Level', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS 2025, Atlanta-Sandy Springs-Roswell MSA + NurseSalaryIntel 2026 projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta RN Pay by Hospital</h2>

        <SalaryTable
          title="Top Atlanta Hospitals — RN Base Pay 2026"
          headers={['Hospital / System', 'Base RN Range', 'Notable']}
          rows={hospitalData}
          source="NurseSalaryIntel hospital data, 2026"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta RN Salary by Specialty</h2>

        <SalaryTable
          title="Atlanta RN Pay by Specialty (2026)"
          headers={['Specialty', 'Avg. Atlanta Salary', 'Premium vs. Base']}
          rows={specialtyData}
          source="NurseSalaryIntel survey data, 2026"
        />

        <Image
          src="/images/atlanta-rn-salary-2026-comparison.png"
          alt="Bar chart comparing 2026 average RN salaries in Atlanta, Charlotte, Nashville, Miami, and the national average"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta vs. Southeast Metros</h2>

        <SalaryTable
          title="RN Salary — Atlanta vs. Southeast Cities (2026)"
          headers={['City', 'Avg. Annual Salary', 'Cost of Living']}
          rows={cityComparison}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses in Atlanta (2026)</h2>
        <ul>
          <li><strong>Med-Surg / Telemetry:</strong> $3,000 – $7,000 (1-year commitment)</li>
          <li><strong>L&D / OR / NICU:</strong> $6,000 – $12,000 (2-year commitment)</li>
          <li><strong>ICU / ER:</strong> $8,000 – $15,000 (2-year commitment)</li>
          <li><strong>Trauma / Pediatric Specialty:</strong> $10,000 – $18,000 (2-year commitment)</li>
        </ul>

        <Image
          src="/images/atlanta-rn-salary-2026-team.png"
          alt="Diverse nursing team collaborating in hallway of modern Atlanta hospital system"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/rn-salary-by-state/georgia', label: 'Georgia RN Salary (Full State)', desc: 'Statewide data — all cities' },
            { href: '/nursing-salary/icu-nurse-salary/georgia', label: 'ICU Nurse Salary in Georgia', desc: 'Critical care pay statewide' },
            { href: '/orlando-rn-salary-2026', label: 'Orlando RN Salary 2026', desc: 'Compare Southeast markets' },
            { href: '/rn-salary-miami-fl-2026', label: 'Miami RN Salary 2026', desc: 'South Florida nursing market' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
              <div>
                <p className="text-sm font-semibold text-primary">{label}</p>
                <p className="text-xs text-on-surface-variant">{desc}</p>
              </div>
              <span className="text-on-surface-variant text-xs ml-3">→</span>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sources</h2>
        <ul>
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, Atlanta-Sandy Springs-Roswell MSA</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
          <li><a href="https://sos.ga.gov/index.php/licensing/plb/45" target="_blank" rel="noopener noreferrer">Georgia Secretary of State — Nursing Board</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
