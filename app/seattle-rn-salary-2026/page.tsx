import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Seattle RN Salary 2026: $102,740/yr Avg + UW Medicine, Swedish & Virginia Mason Pay',
  description: 'Seattle RN salary 2026: $102,740/yr average, $49.40/hr — highest-paying major metro in the country. Pay by hospital, sign-on bonuses, and WA state vs. national comparison.',
  alternates: { canonical: 'https://nursesalaryintel.com/seattle-rn-salary-2026' },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$83,200 – $93,600', hourlyRate: '$40.00 – $45.00/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$104,800 – $121,400', hourlyRate: '$50.40 – $58.40/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$122,000 – $148,600', hourlyRate: '$58.70 – $71.40/hr' },
  { label: 'Top 10% earners', avgSalary: '$158,000+', hourlyRate: '$76.00+/hr' },
];

const hospitalData = [
  { label: 'UW Medical Center (Montlake)', avgSalary: '$98,400 – $134,600', hourlyRate: 'Sign-on: $12K–$20K' },
  { label: 'Swedish Medical Center', avgSalary: '$96,200 – $128,400', hourlyRate: 'Sign-on: $10K–$18K' },
  { label: 'Virginia Mason Franciscan Health', avgSalary: '$94,800 – $124,200', hourlyRate: 'Sign-on: $8K–$16K' },
  { label: 'Harborview Medical Center (UW)', avgSalary: '$97,600 – $132,800', hourlyRate: 'Trauma Level 1 premium' },
  { label: 'Seattle Children\'s Hospital', avgSalary: '$96,400 – $129,600', hourlyRate: 'Pediatric premium' },
  { label: 'OverlakeHospital (Bellevue)', avgSalary: '$93,200 – $122,400', hourlyRate: 'Eastside premium' },
  { label: 'MultiCare Health System', avgSalary: '$89,400 – $116,800', hourlyRate: 'Tacoma corridor' },
];

const specialtyData = [
  { label: 'Med-Surg / Floor', avgSalary: '$96,400', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$100,200', hourlyRate: '+$3,800' },
  { label: 'L&D', avgSalary: '$105,600', hourlyRate: '+$9,200' },
  { label: 'OR / Surgical', avgSalary: '$107,400', hourlyRate: '+$11,000' },
  { label: 'ER', avgSalary: '$108,800', hourlyRate: '+$12,400' },
  { label: 'ICU / CCU', avgSalary: '$112,600', hourlyRate: '+$16,200' },
  { label: 'Trauma (Level 1)', avgSalary: '$118,400', hourlyRate: '+$22,000' },
];

const cityComparison = [
  { label: 'Seattle, WA', avgSalary: '$102,740', hourlyRate: 'COL Index 150' },
  { label: 'San Francisco, CA', avgSalary: '$145,000', hourlyRate: 'COL Index 194' },
  { label: 'Los Angeles, CA', avgSalary: '$98,600', hourlyRate: 'COL Index 173' },
  { label: 'Denver, CO', avgSalary: '$79,400', hourlyRate: 'COL Index 116' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: 'COL Index 100' },
];

const faqs = [
  { question: 'What is the average RN salary in Seattle in 2026?', answer: 'The average RN salary in Seattle is $102,740/year ($49.40/hour) in 2026 — making it one of the highest-paying nurse markets in the country. Washington state has no income tax, which significantly boosts take-home pay vs. comparable California markets.' },
  { question: 'Why do Seattle nurses earn so much?', answer: 'Three factors: Washington state has no income tax (saving $8,000–$14,000/year vs. California), Seattle has strong union representation driving up base wages, and the city\'s tech-driven cost of living has pushed hospital systems to compete aggressively on compensation.' },
  { question: 'Which Seattle hospital pays nurses the most?', answer: 'UW Medical Center (Montlake) leads at $98,400–$134,600 base, closely followed by Harborview (UW Trauma Level 1) at $97,600–$132,800. Both benefit from academic medical center premiums and strong union contracts.' },
  { question: 'Is Seattle nursing pay worth the cost of living?', answer: 'It depends. Seattle\'s COL index is ~150 vs. national 100. But Washington\'s zero income tax means a $102,740 Seattle salary has a take-home of ~$82,000 vs. a $89,010 national average earner taking home ~$70,000. Adjusted for taxes, Seattle nursing pay is genuinely competitive.' },
  { question: 'Are Seattle nurses unionized?', answer: 'Many are. SEIU 1199NW and Washington State Nurses Association represent nurses at major Seattle-area hospitals including UW Medicine, Swedish, and Providence. Union contracts set minimum wage floors and step increases that drive competitive pay systemwide.' },
  { question: 'How does Seattle compare to California for RN pay?', answer: 'San Francisco pays more nominally ($145K avg) but California state income tax consumes $15,000–$25,000 of that. A Seattle RN earning $102,740 with no state tax often has similar or better net take-home than a Sacramento RN earning $110,000 in California.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Seattle RN Salary 2026', item: 'https://nursesalaryintel.com/seattle-rn-salary-2026/' },
  ],
};

export default function SeattleRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'Seattle RN Salary 2026' }]}
        h1="Seattle RN Salary 2026: $102,740/yr — Why Washington Nurses Take Home More"
        lastUpdated="April 2026"
        schemaTitle="Seattle RN Salary 2026: $102,740/yr Avg + UW Medicine, Swedish & Virginia Mason Pay"
        schemaDescription="Seattle RN salary 2026: $102,740/yr, $49.40/hr. No state income tax, strong unions, and top academic medical centers make Seattle a top market for nurses."
        schemaUrl="/seattle-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          The average <strong>registered nurse salary in Seattle is $102,740/year ($49.40/hour)</strong> in 2026 —
          placing it among the top three highest-paying nurse markets in the country. Add Washington&apos;s
          zero state income tax and a Seattle RN&apos;s effective take-home frequently outperforms coastal
          California nurses earning $30,000+ more on paper.
        </p>

        <Image
          src="/images/seattle-rn-salary-2026-hospital.png"
          alt="Registered nurse in scrubs walking through glass-walled corridor of modern Seattle hospital with city skyline visible"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle RN Salary at a Glance (2026)</h2>

        <SalaryTable
          title="Seattle RN Salary by Experience Level"
          headers={['Experience Level', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS 2025, Seattle-Tacoma-Bellevue MSA + NurseSalaryIntel 2026 projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle RN Pay by Hospital</h2>
        <p>
          The Seattle hospital market is anchored by UW Medicine (including Harborview, the region&apos;s only
          Level 1 trauma center) and Swedish/Providence, with Eastside Bellevue and Tacoma corridor systems
          paying slightly below the Seattle core but offering lower cost-of-living trade-offs.
        </p>

        <SalaryTable
          title="Top Seattle Hospitals — RN Base Pay 2026"
          headers={['Hospital / System', 'Base RN Range', 'Notable']}
          rows={hospitalData}
          source="NurseSalaryIntel hospital data, 2026"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle RN Salary by Specialty</h2>

        <SalaryTable
          title="Seattle RN Pay by Specialty (2026)"
          headers={['Specialty', 'Avg. Seattle Salary', 'Premium vs. Base']}
          rows={specialtyData}
          source="NurseSalaryIntel survey data, 2026"
        />

        <Image
          src="/images/seattle-rn-salary-2026-comparison.png"
          alt="Chart comparing 2026 RN average salaries in Seattle, San Francisco, Los Angeles, Denver, and national average"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle vs. West Coast Cities</h2>

        <SalaryTable
          title="RN Salary — Seattle vs. West Coast + Denver (2026)"
          headers={['City', 'Avg. Annual Salary', 'Cost of Living']}
          rows={cityComparison}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">The No-Tax Advantage: Real Take-Home Math</h2>
        <p>
          Washington has <strong>no state income tax</strong>. This is the single biggest financial differentiator
          for Seattle nurses vs. California counterparts:
        </p>
        <ul>
          <li><strong>Seattle RN at $102,740:</strong> ~$82,200 take-home (federal tax only)</li>
          <li><strong>LA RN at $98,600:</strong> ~$72,800 take-home (federal + CA 9.3% state tax)</li>
          <li><strong>SF RN at $145,000:</strong> ~$94,200 take-home (federal + CA 9.3% state tax on high income)</li>
        </ul>
        <p>
          The Seattle nurse keeps ~$9,400 more than the LA nurse on lower nominal income. The SF gap closes
          significantly once California&apos;s progressive rates kick in above $100K.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/rn-salary-by-state/washington', label: 'Washington State RN Salary', desc: 'Full state guide — all cities' },
            { href: '/nursing-salary/icu-nurse-salary/washington', label: 'ICU Nurse Salary in Washington', desc: 'Critical care pay + CCRN premium' },
            { href: '/rn-salary-los-angeles-2026', label: 'Los Angeles RN Salary 2026', desc: 'Compare West Coast markets' },
            { href: '/travel-nurse-salary-guide', label: 'Travel Nurse Salary Guide', desc: 'WA travel contracts pay $65–$98/hr' },
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
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, Seattle-Tacoma-Bellevue MSA</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
          <li><a href="https://doh.wa.gov/licenses-permits-and-certificates/nursing-commission" target="_blank" rel="noopener noreferrer">Washington State Nursing Commission</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
