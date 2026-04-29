import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Houston vs Dallas RN Salary 2026: Which Texas City Pays Nurses More?',
  description: 'Houston RNs average $82,140/yr vs Dallas $80,910/yr in 2026. Full comparison: hospitals, specialties, cost of living, sign-on bonuses, and which city wins for nurses.',
  alternates: { canonical: 'https://nursesalaryintel.com/houston-vs-dallas-rn-salary-2026' },
};

const comparisonData = [
  { label: 'Average RN Salary', avgSalary: 'Houston: $82,140', hourlyRate: 'Dallas: $80,910' },
  { label: 'Avg. Hourly Rate', avgSalary: 'Houston: $39.49/hr', hourlyRate: 'Dallas: $38.90/hr' },
  { label: 'Entry-Level (0–2 yrs)', avgSalary: 'Houston: $66,500–$74,800', hourlyRate: 'Dallas: $64,400–$73,200' },
  { label: 'Senior (10+ yrs)', avgSalary: 'Houston: $98,000–$118,400', hourlyRate: 'Dallas: $95,800–$114,600' },
  { label: 'ICU / Critical Care', avgSalary: 'Houston: $89,400', hourlyRate: 'Dallas: $87,800' },
  { label: 'ER / Emergency', avgSalary: 'Houston: $87,900', hourlyRate: 'Dallas: $86,400' },
  { label: 'Trauma (Level 1)', avgSalary: 'Houston: $94,700', hourlyRate: 'Dallas: $92,600' },
];

const hospitalComparisonData = [
  { label: 'Top Academic Medical Center', avgSalary: 'Houston: UW Med $98–134K', hourlyRate: 'Dallas: UT Southwestern $82–112K' },
  { label: 'Largest Private System', avgSalary: 'Houston Methodist $78–104K', hourlyRate: 'Baylor Scott & White $76–102K' },
  { label: 'Level 1 Trauma', avgSalary: 'Houston: Memorial Hermann', hourlyRate: 'Dallas: Parkland Memorial' },
  { label: 'Children\'s Hospital', avgSalary: 'Texas Children\'s $77–101K', hourlyRate: 'Children\'s Medical $76–99K' },
  { label: 'Top Sign-On (ICU)', avgSalary: 'Houston: up to $20,000', hourlyRate: 'Dallas: up to $18,000' },
];

const colData = [
  { label: 'Cost of Living Index', avgSalary: 'Houston: 96', hourlyRate: 'Dallas: 102' },
  { label: 'Median Home Price (2026)', avgSalary: 'Houston: ~$325,000', hourlyRate: 'Dallas: ~$388,000' },
  { label: 'Median Rent (1BR)', avgSalary: 'Houston: ~$1,380/mo', hourlyRate: 'Dallas: ~$1,580/mo' },
  { label: 'State Income Tax', avgSalary: 'TX: None', hourlyRate: 'TX: None' },
  { label: 'COL-Adjusted RN Pay', avgSalary: 'Houston: ~$85,600', hourlyRate: 'Dallas: ~$79,300' },
];

const faqs = [
  { question: 'Do Houston or Dallas nurses earn more in 2026?', answer: 'Houston edges out Dallas on base salary — $82,140/year vs. $80,910/year, a $1,230 annual difference. But the more important number is cost-of-living-adjusted pay: Houston\'s COL index (96) is lower than Dallas\'s (102), meaning a Houston RN\'s $82,140 stretches further than a Dallas RN\'s $80,910.' },
  { question: 'Which Texas city has better hospitals for nurses?', answer: 'Houston has a structural advantage: the Texas Medical Center is the world\'s largest medical complex, with 60+ institutions offering unmatched specialty access and career mobility. Dallas has excellent systems (UT Southwestern, Baylor Scott & White) but fewer hospital options at the highest tier.' },
  { question: 'Do Dallas or Houston offer better nursing sign-on bonuses?', answer: 'Both are competitive, with Houston slightly ahead for specialty ICU and trauma roles ($15,000–$20,000) vs. Dallas ($12,000–$18,000). Med-Surg and Telemetry sign-ons are comparable in both cities ($4,000–$10,000).' },
  { question: 'Is it easier to find a nursing job in Houston or Dallas?', answer: 'Both markets have strong demand. Houston has more absolute positions due to TMC concentration. Dallas has been expanding rapidly with new hospital construction (Medical City, Baylor expansions). New grads may find Dallas slightly more accessible for first jobs outside of ICU residency.' },
  { question: 'Which city is better for travel nurses — Houston or Dallas?', answer: 'Both pay travel nurses $42–$68/hr depending on specialty and contract. Houston\'s TMC complex creates more sustained demand for ICU and ER travel contracts. Dallas sees stronger seasonal demand in L&D and pediatrics at Children\'s Medical and Medical City.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Houston vs Dallas RN Salary 2026', item: 'https://nursesalaryintel.com/houston-vs-dallas-rn-salary-2026/' },
  ],
};

export default function HoustonVsDallasRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'Houston vs Dallas RN Salary 2026' }]}
        h1="Houston vs Dallas RN Salary 2026: Which Texas City Actually Pays Nurses More?"
        lastUpdated="April 2026"
        schemaTitle="Houston vs Dallas RN Salary 2026: Which Texas City Pays Nurses More?"
        schemaDescription="Houston RNs average $82,140/yr vs Dallas $80,910/yr. Full head-to-head: hospitals, specialties, cost of living, sign-on bonuses, and which city wins for nurses."
        schemaUrl="/houston-vs-dallas-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          Houston RNs earn <strong>$82,140/year</strong> on average vs. Dallas at <strong>$80,910/year</strong> —
          a $1,230 gap that sounds decisive but isn&apos;t the full story. Once you factor in cost of living,
          hospital quality, sign-on bonuses, and career trajectory, the choice between Texas&apos; two biggest
          nursing markets comes down to more than the headline salary number.
        </p>

        <Image
          src="/images/houston-vs-dallas-rn-salary-2026-hero.png"
          alt="Split comparison graphic showing Houston Texas Medical Center skyline vs Dallas downtown skyline representing the 2026 RN salary comparison"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Houston vs. Dallas: RN Salary Head-to-Head</h2>

        <SalaryTable
          title="Houston vs. Dallas RN Salary Comparison (2026)"
          headers={['Metric', 'Houston', 'Dallas']}
          rows={comparisonData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Hospital Comparison: Where the Best Nursing Jobs Are</h2>

        <SalaryTable
          title="Houston vs. Dallas — Top Hospitals for Nurses"
          headers={['Category', 'Houston', 'Dallas']}
          rows={hospitalComparisonData}
          source="NurseSalaryIntel hospital data, 2026"
        />

        <p>
          <strong>Houston&apos;s edge:</strong> The Texas Medical Center concentration means more specialty access
          and lateral career moves without relocating. MD Anderson (oncology), Texas Children&apos;s (pediatrics),
          and Baylor St. Luke&apos;s (cardiac) each represent top-5 national rankings in their specialty — creating
          a level of clinical prestige and learning environment Dallas can&apos;t fully match.
        </p>

        <Image
          src="/images/houston-vs-dallas-rn-salary-2026-comparison.png"
          alt="Side-by-side bar chart comparing Houston and Dallas average RN salaries by specialty including ICU, ER, L&D, and trauma"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living: The Real Differentiator</h2>

        <SalaryTable
          title="Houston vs. Dallas — Cost of Living Comparison"
          headers={['Factor', 'Houston', 'Dallas']}
          rows={colData}
          source="NurseSalaryIntel COL analysis, 2026"
        />

        <p>
          Houston&apos;s cost of living index of 96 vs. Dallas&apos;s 102 means <strong>Houston nurses keep
          more of each dollar</strong>. Median home prices in Houston (~$325,000) are meaningfully lower than
          Dallas (~$388,000), and rental costs run $150–$250/month cheaper. On a COL-adjusted basis, Houston&apos;s
          $82,140 salary is equivalent to about $85,600 in Dallas dollars — making Houston the stronger value even
          though Dallas nurses nominally earn less.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Which City Should You Choose?</h2>
        <ul>
          <li><strong>Choose Houston if:</strong> You want specialty depth (ICU, oncology, pediatrics, cardiac), maximum career mobility, and the lowest cost of living of any major Texas city</li>
          <li><strong>Choose Dallas if:</strong> You prefer a more spread-out metro, growing suburban hospital markets, and slightly easier new grad hiring at non-TMC facilities</li>
          <li><strong>Either works for travel:</strong> Both cities have strong travel nursing markets paying $42–$68/hr depending on specialty</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/houston-rn-salary-2026', label: 'Houston RN Salary 2026 (Full Guide)', desc: 'Hospital breakdown, sign-ons, COL math' },
            { href: '/dallas-rn-salary-2026', label: 'Dallas RN Salary 2026 (Full Guide)', desc: 'UT Southwestern, Baylor, Parkland pay' },
            { href: '/rn-salary-by-state/texas', label: 'Texas RN Salary — Full State Guide', desc: 'All Texas cities + statewide data' },
            { href: '/nurse-salary-california-vs-texas', label: 'California vs Texas Nurse Salary', desc: 'Interstate comparison with tax math' },
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
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, Houston and Dallas MSAs</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
          <li><a href="https://www.bon.texas.gov/" target="_blank" rel="noopener noreferrer">Texas Board of Nursing</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
