import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import SalaryCalculator from '@/components/SalaryCalculator';

export const metadata: Metadata = {
  title: 'Houston RN Salary 2026: $82,140/yr Avg + Top Hospitals & Cost of Living',
  description: 'Houston RN salary 2026: $82,140/yr average, $39.49/hr. See pay by hospital, sign-on bonuses, cost-of-living-adjusted ranking vs Dallas & Austin.',
  alternates: { canonical: 'https://nursesalaryintel.com/houston-rn-salary-2026' },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$66,500 – $74,800', hourlyRate: '$32.00 – $36.00/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$84,200 – $97,500', hourlyRate: '$40.50 – $46.90/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$98,000 – $118,400', hourlyRate: '$47.10 – $56.90/hr' },
  { label: 'Top 10% earners', avgSalary: '$122,460+', hourlyRate: '$58.90+/hr' },
];

const hospitalData = [
  { label: 'Houston Methodist Hospital', avgSalary: '$78,500 – $104,200', hourlyRate: 'Sign-on: $10K–$15K' },
  { label: 'Memorial Hermann–TMC', avgSalary: '$76,200 – $98,800', hourlyRate: 'Sign-on: $8K–$14K' },
  { label: 'MD Anderson Cancer Center', avgSalary: '$80,200 – $108,500', hourlyRate: 'Oncology premium' },
  { label: 'Baylor St. Luke\'s Medical', avgSalary: '$74,800 – $96,500', hourlyRate: 'Cardiac premium' },
  { label: 'Texas Children\'s Hospital', avgSalary: '$77,800 – $101,300', hourlyRate: 'Pediatric premium' },
  { label: 'HCA Houston Healthcare', avgSalary: '$72,400 – $94,800', hourlyRate: 'Aggressive sign-ons' },
  { label: 'Harris Health (LBJ, Ben Taub)', avgSalary: '$74,600 – $93,200', hourlyRate: 'PSLF eligible' },
];

const specialtyData = [
  { label: 'Med-Surg / Floor', avgSalary: '$77,400', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$84,500', hourlyRate: '+$7,100' },
  { label: 'OR / Surgical', avgSalary: '$86,200', hourlyRate: '+$8,800' },
  { label: 'ER', avgSalary: '$87,900', hourlyRate: '+$10,500' },
  { label: 'ICU / CCU', avgSalary: '$89,400', hourlyRate: '+$12,000' },
  { label: 'Cath Lab', avgSalary: '$92,300', hourlyRate: '+$14,900' },
  { label: 'Trauma (Level 1)', avgSalary: '$94,700', hourlyRate: '+$17,300' },
];

const cityComparison = [
  { label: 'Austin', avgSalary: '$86,320', hourlyRate: 'COL Index 119' },
  { label: 'Houston', avgSalary: '$82,140', hourlyRate: 'COL Index 96' },
  { label: 'Dallas', avgSalary: '$80,910', hourlyRate: 'COL Index 102' },
  { label: 'San Antonio', avgSalary: '$76,580', hourlyRate: 'COL Index 91' },
];

const faqs = [
  { question: 'What is the average RN salary in Houston in 2026?', answer: 'The average registered nurse salary in Houston, TX is $82,140/year ($39.49/hour) per the most recent BLS OEWS data, projected to 2026. New grads start near $66,500–$74,800, while senior specialty RNs earn $98,000–$118,400.' },
  { question: 'Which Houston hospital pays nurses the most?', answer: 'MD Anderson Cancer Center tops the range at $80,200–$108,500 base for oncology specialty roles. Houston Methodist and Memorial Hermann TMC follow at $78,500–$104,200 and $76,200–$98,800 respectively. Specialty certifications (CCRN, OCN, BMTCN) shift offers materially.' },
  { question: 'Is Houston a good city for nurses?', answer: 'Yes — when measured by cost-of-living-adjusted pay. Houston\'s effective RN compensation ($85,560 COL-adjusted) outperforms Dallas, Austin, and most coastal cities for take-home dollar value. The Texas Medical Center concentration also offers exceptional career mobility.' },
  { question: 'How much do new graduate RNs make in Houston?', answer: 'New grad RNs in Houston earn $66,500–$74,800/year ($32.00–$36.00/hr) in their first role. Most large systems require completion of a 12-month residency program before placement on specialty units. Sign-on bonuses for new grads typically range $3,000–$7,500.' },
  { question: 'What\'s the difference between Houston and Dallas RN pay?', answer: 'Houston averages $82,140 vs. Dallas $80,910 — a $1,230/year edge for Houston. Houston\'s Texas Medical Center cluster drives more specialty premiums than Dallas, but Dallas has slightly lower housing costs in some submarkets.' },
  { question: 'Do Houston nurses get sign-on bonuses?', answer: 'Yes — almost universally for any specialty experience. ICU, ER, OR, L&D, and trauma roles typically offer $7,500–$20,000 with a 1–2 year commitment. Med-surg and telemetry roles offer $3,000–$10,000.' },
  { question: 'How fast can a Houston RN get to $100K?', answer: 'Realistically, 4–6 years if you specialize. The fastest paths: ICU + CCRN (year 4 = ~$96K), ER + CEN (year 4–5 = ~$94K), or L&D + RNC-OB (year 5 = ~$92K). Adding nights/weekends differential typically adds $12,000–$18,000/year.' },
  { question: 'Are Houston RN unions a factor in pay?', answer: 'Limited. Texas is a right-to-work state, and the Texas Medical Center hospitals are largely non-union. National Nurses United and Texas Nurses Association advocate at the state policy level but don\'t bargain hospital contracts in Houston.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Houston RN Salary 2026', item: 'https://nursesalaryintel.com/houston-rn-salary-2026/' },
  ],
};

export default function HoustonRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Houston RN Salary 2026' }]}
        h1="Houston RN Salary 2026: What Registered Nurses Actually Earn at the World's Largest Medical Center"
        lastUpdated="April 27, 2026"
        schemaTitle="Houston RN Salary 2026: $82,140/yr Avg + Top Hospitals & Cost of Living"
        schemaDescription="Houston RN salary 2026: $82,140/yr average, $39.49/hr. See pay by hospital, sign-on bonuses, cost-of-living-adjusted ranking vs Dallas & Austin."
        schemaUrl="/houston-rn-salary-2026/"
        faqs={faqs}
      >
        <Image src="/images/houston-rn-salary-2026-hero.png" alt="Houston registered nurse walking toward Texas Medical Center skyline at dusk, illustrating 2026 RN salary guide" width={1200} height={630} className="w-full rounded-lg mb-6" priority />

        <p>The average <strong>registered nurse salary in Houston, TX is $82,140 per year ($39.49/hour)</strong> as of 2026 — about 4% above the Texas state average of $78,830 and within 8% of the U.S. national mean of $89,010. But that headline number hides a wide spread: Houston Methodist, Memorial Hermann, and the Texas Medical Center cluster pay senior ICU and ER nurses well past $108,000 a year, while ambulatory and clinic roles can sit closer to $68,000.</p>
        <p>Here&apos;s the full breakdown — by hospital, specialty, experience, and what your dollar actually buys you in Houston.</p>

        <Image src="/images/houston-rn-salary-2026-context.png" alt="Registered nurse reviewing patient chart on tablet in Houston hospital corridor" width={600} height={800} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Houston RN Salary by Experience (2026)</h2>
        <SalaryTable title="Houston RN Pay by Experience Tier (2026)" headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']} rows={experienceData} source="BLS OEWS Houston-The Woodlands-Sugar Land MSA, May 2024, projected 3.1% annually." />
        <p>Houston RNs earn roughly $3,300 more per year than the average Texas RN and about $6,870 less than the U.S. mean. The gap to the national average shrinks dramatically once you factor in cost of living — Houston&apos;s COL index sits near 96 (national = 100), so a Houston RN&apos;s effective purchasing power often exceeds that of an East Coast or West Coast colleague making $20,000+ more on paper.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Estimate Your Houston RN Salary</h2>
        <p>Use our calculator to model your projected salary by specialty, state, and experience level. Houston-specific figures derive from the Texas state baseline plus the cost-of-living adjustment described above.</p>
        <div className="bg-surface-container-lowest rounded-xl p-6 my-6 border border-outline-variant">
          <SalaryCalculator />
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Houston RN Pay by Hospital (Top Employers)</h2>
        <SalaryTable title="Houston Top Hospital RN Salary Ranges (2026)" headers={['Hospital / System', 'Base RN Range', 'Notes']} rows={hospitalData} source="Glassdoor (verified Houston RN reports, n over 250) + hospital career pages, April 2026." />
        <p>The Texas Medical Center is the largest medical complex on Earth — 60+ institutions, more than 106,000 employees. <strong>Houston Methodist Hospital</strong> consistently ranks in the U.S. News top 20 hospitals nationally, with Magnet-designated shared-governance pay structure. <strong>MD Anderson Cancer Center</strong> sits at the top of Houston&apos;s salary band because of oncology premiums — but the role is highly specialized and competitive. CCRN, OCN, or BMTCN certifications meaningfully shift offers. Note: the upper end of each hospital&apos;s base range generally requires specialty-unit placement, completed clinical ladder advancement, and 5+ years of acute experience — entry to mid-tier offers typically land in the lower 60–70% of each band.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Houston RN Pay by Specialty</h2>
        <SalaryTable title="Houston RN Specialty Pay (2026)" headers={['Specialty', 'Avg Houston Salary', 'Premium vs Base']} rows={specialtyData} source="Specialty premium estimates based on BLS OES classifications and verified Houston market reports." />

        <Image src="/images/houston-rn-salary-2026-comparison-chart.png" alt="Bar chart comparing 2026 RN average salary across Houston, Dallas, Austin, San Antonio, and U.S. national mean" width={700} height={500} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses + Shift Differentials in Houston</h2>
        <p>Houston hospitals are aggressive on sign-on bonuses for hard-to-fill specialties. Typical 2026 ranges:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Med-Surg:</strong> $3,000–$7,500 (1-year commitment)</li>
          <li><strong>Telemetry / Step-Down:</strong> $5,000–$10,000</li>
          <li><strong>L&amp;D / OR:</strong> $7,500–$12,000</li>
          <li><strong>ICU / ER:</strong> $10,000–$15,000 (2-year commitment most common)</li>
          <li><strong>Trauma / Cath Lab:</strong> $12,000–$20,000</li>
        </ul>
        <p><strong>Shift differentials</strong> add meaningfully to base. Most Houston hospitals pay:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Evening shift (3p–11p): +$2.25–$3.50/hr</li>
          <li>Night shift (11p–7a): +$4.00–$6.50/hr</li>
          <li>Weekend differential: +$2.00–$4.00/hr (sometimes stacks with evening/night)</li>
          <li>Charge nurse stipend: +$2.50–$4.00/hr or flat $200/shift</li>
        </ul>
        <p>A full-time night-shift ICU RN with 5 years&apos; experience and CCRN certification can realistically clear <strong>$96,000–$108,000</strong> in total comp before sign-on bonus, OT, or call pay.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living: Is Houston RN Pay Actually Worth It?</h2>
        <p>Houston&apos;s cost of living index is roughly 96 (national = 100). Housing is the biggest swing factor — median home price around $325,000 versus the national $440,000, with no Texas state income tax meaning more take-home dollars compared to nominally higher-paying states.</p>
        <p>A Houston RN earning $82,140 takes home approximately $66,500 after federal taxes (no state tax). A San Francisco Bay Area RN earning $145,000 takes home about $93,500 after federal and California state taxes — but housing costs in SF are 2.6× Houston&apos;s, so the real lifestyle dollar value of the Houston package is closer to $90,000 SF-equivalent.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Houston vs Dallas vs Austin: Which Texas City Pays RNs Best?</h2>
        <SalaryTable title="Texas City RN Pay Comparison (2026)" headers={['City', 'Avg RN Salary', 'COL Context']} rows={cityComparison} source="BLS OEWS metro area data + COL Index from BEA Regional Price Parities." />
        <p><strong>Houston wins on COL-adjusted pay</strong> despite Austin&apos;s higher nominal number. Austin&apos;s housing premium (median $565,000) and rapid cost growth since 2021 have eroded its advantage for healthcare workers. For a deeper comparison, see <Link href="/texas-rn-salary-2026/" className="text-primary hover:underline">Texas RN Salary 2026</Link> and <Link href="/dallas-rn-salary-2026/" className="text-primary hover:underline">Dallas RN Salary 2026</Link>.</p>

        <Image src="/images/houston-rn-salary-2026-team.png" alt="Diverse Houston nursing team collaborating in hospital break room, illustrating Texas Medical Center workforce" width={600} height={800} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate Your Houston Hospital Offer</h2>
        <p>Houston is a multi-offer market for any nurse with 1+ year of acute-care experience and a specialty cert. Recruiters consistently report leaving 5–12% on the table when nurses don&apos;t negotiate.</p>
        <p><strong>Three Houston-specific levers:</strong></p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Use TMC competition.</strong> Methodist, Memorial Hermann, and HCA actively recruit from each other. Mentioning a competing offer (with documentation) reliably moves base $2–4/hr.</li>
          <li><strong>Push for shift commitment premiums.</strong> If you commit to nights or weekends for 12 months, ask for a +$1.50/hr &ldquo;shift commitment differential&rdquo; on top of the standard differential.</li>
          <li><strong>Negotiate cert reimbursement before salary.</strong> Most Houston systems reimburse $2,500–$5,000/year for continuing education and specialty certs — easier to win than a pure salary bump.</li>
        </ol>
        <p>For full negotiation scripts, see our <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link> guide.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Career Growth Path for Houston RNs</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Year 1:</strong> New grad on med-surg or telemetry, $66,500–$74,800. Most large systems rotate new grads through a residency for the first 12 months.</li>
          <li><strong>Year 2–3:</strong> Move to a specialty unit (ICU, ER, L&amp;D), $76,000–$86,000. Pursue CCRN/CEN/RNC-OB certifications.</li>
          <li><strong>Year 4–6:</strong> Charge nurse, preceptor, or specialty senior, $88,000–$98,000. Many begin BSN-to-MSN bridge or NP school.</li>
          <li><strong>Year 7–10:</strong> Lead clinical, educator, or specialty director, $98,000–$118,000. NP graduates earn $115,000–$145,000.</li>
          <li><strong>Year 10+:</strong> CRNA ($210K+), NP director, hospital administrator ($125K–$180K).</li>
        </ul>

        <p className="text-sm text-on-surface-variant mt-8"><strong>Sources:</strong> U.S. Bureau of Labor Statistics — OEWS, Houston-The Woodlands-Sugar Land MSA, May 2024; Texas Workforce Commission Healthcare Labor Market Report; Texas Board of Nursing Workforce Statistics; American Association of Colleges of Nursing 2026 Workforce Survey; Houston Methodist, Memorial Hermann, and HCA Houston careers and benefits pages (April 2026). <strong>Methodology:</strong> BLS OEWS May 2024 wages projected at 3.1% annual RN growth; hospital ranges cross-referenced against Glassdoor (n over 250 Houston RN reports) and direct career-page postings collected April 2026. All figures reflect base RN compensation; sign-on bonuses, shift differentials, and certification premiums are noted separately. Not career or financial advice.</p>
      </SEOPageLayout>
    </>
  );
}
