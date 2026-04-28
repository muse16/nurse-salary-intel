import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import SalaryCalculator from '@/components/SalaryCalculator';

export const metadata: Metadata = {
  title: 'Dallas RN Salary 2026: $80,910/yr + UT Southwestern, Baylor & Parkland Pay',
  description: 'Dallas RN salary 2026: $80,910 avg, $38.90/hr. Compare pay at UT Southwestern, Baylor Scott & White, Parkland, plus Fort Worth, sign-ons & negotiation tips.',
  alternates: { canonical: 'https://nursesalaryintel.com/dallas-rn-salary-2026' },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$65,800 – $73,400', hourlyRate: '$31.60 – $35.30/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$82,500 – $96,200', hourlyRate: '$39.70 – $46.20/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$96,500 – $116,800', hourlyRate: '$46.40 – $56.20/hr' },
  { label: 'Top 10% earners', avgSalary: '$119,840+', hourlyRate: '$57.60+/hr' },
];

const hospitalData = [
  { label: 'UT Southwestern Medical Center', avgSalary: '$84,000 – $108,000', hourlyRate: 'Sign-on: $12K–$20K' },
  { label: 'Baylor Scott & White Health', avgSalary: '$79,000 – $102,000', hourlyRate: 'Sign-on: $8K–$14K' },
  { label: 'Parkland Health & Hospital', avgSalary: '$77,000 – $98,000', hourlyRate: 'PSLF eligible' },
  { label: 'Methodist Health System', avgSalary: '$75,500 – $96,500', hourlyRate: '1:4 ratios typical' },
  { label: 'Texas Health Resources', avgSalary: '$76,200 – $99,500', hourlyRate: 'BSN tuition support' },
  { label: 'Children\'s Health Dallas', avgSalary: '$79,000 – $103,500', hourlyRate: 'Pediatric premium' },
  { label: 'HCA Medical City Dallas', avgSalary: '$74,800 – $96,000', hourlyRate: 'Aggressive sign-ons' },
  { label: 'Cook Children\'s (Fort Worth)', avgSalary: '$77,800 – $101,000', hourlyRate: 'Strong NICU pay' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$76,400', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$83,500', hourlyRate: '+$7,100' },
  { label: 'OR / Surgical', avgSalary: '$85,600', hourlyRate: '+$9,200' },
  { label: 'ER', avgSalary: '$87,200', hourlyRate: '+$10,800' },
  { label: 'ICU / CCU', avgSalary: '$88,900', hourlyRate: '+$12,500' },
  { label: 'NICU', avgSalary: '$86,400', hourlyRate: '+$10,000' },
  { label: 'Cath Lab', avgSalary: '$93,800', hourlyRate: '+$17,400' },
  { label: 'Trauma (Level 1)', avgSalary: '$96,200', hourlyRate: '+$19,800' },
];

const cityComparison = [
  { label: 'Dallas', avgSalary: '$80,910', hourlyRate: 'COL 102 / Effective $79,320' },
  { label: 'Fort Worth', avgSalary: '$76,800', hourlyRate: 'COL 94 / Effective $81,700' },
  { label: 'Houston', avgSalary: '$82,140', hourlyRate: 'COL 96 / Effective $85,560' },
  { label: 'Austin', avgSalary: '$86,320', hourlyRate: 'COL 119 / Effective $72,540' },
];

const faqs = [
  { question: 'What is the average RN salary in Dallas in 2026?', answer: 'The average registered nurse salary in Dallas, TX is $80,910/year ($38.90/hour) per BLS OEWS data projected to 2026. Entry-level RNs earn $65,800–$73,400; senior specialty RNs earn $96,500–$116,800.' },
  { question: 'Which Dallas hospital pays nurses the most?', answer: 'UT Southwestern Medical Center leads at $84,000–$108,000 base, particularly for transplant, oncology, and ICU specialties. Children\'s Health Dallas, Texas Health Resources, and Cook Children\'s (Fort Worth) follow closely for pediatric and specialty roles.' },
  { question: 'How does Dallas RN salary compare to Houston?', answer: 'Dallas averages $80,910 vs. Houston $82,140 — Houston edges Dallas by about $1,200/year. Houston\'s TMC cluster offers more specialty options. Dallas\'s UT Southwestern offers the highest single-employer ceiling in either city.' },
  { question: 'Is Fort Worth or Dallas better for RN pay?', answer: 'Dallas pays nominally higher ($80,910 vs $76,800 in Fort Worth). But Fort Worth\'s COL-adjusted effective pay ($81,700) actually exceeds Dallas\'s ($79,320) because of lower housing costs.' },
  { question: 'Do Dallas hospitals offer sign-on bonuses?', answer: 'Yes — universally for specialty roles. Med-surg sign-ons: $3,500–$8,000. ICU/ER: $12,000–$18,000. Cath lab/trauma: $15,000–$22,000.' },
  { question: 'What\'s the new graduate RN starting salary in Dallas?', answer: 'New grad RNs in Dallas earn $65,800–$73,400/year ($31.60–$35.30/hour) in their first role, with a 12-month residency typical at major systems.' },
  { question: 'How fast can a Dallas RN reach $100K?', answer: 'Realistically 5–6 years if you specialize. The fastest paths: ICU + CCRN by year 4 (~$92K), cath lab by year 5–6 (~$100K), trauma by year 5–6 (~$98K). Add nights/weekend differentials and OT, and many specialty RNs clear $110K by year 6.' },
  { question: 'What certifications boost Dallas RN pay the most?', answer: 'CCRN (critical care): +$2,500–$5,000/year. CEN (emergency): +$2,000–$4,500/year. RNC-OB: +$2,500–$4,000/year. CNOR: +$3,000–$5,500/year.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Dallas RN Salary 2026', item: 'https://nursesalaryintel.com/dallas-rn-salary-2026/' },
  ],
};

export default function DallasRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Dallas RN Salary 2026' }]}
        h1="Dallas RN Salary 2026: What Nurses Earn at UT Southwestern, Baylor, Parkland & Beyond"
        lastUpdated="April 27, 2026"
        schemaTitle="Dallas RN Salary 2026: $80,910/yr + UT Southwestern, Baylor & Parkland Pay"
        schemaDescription="Dallas RN salary 2026: $80,910 avg, $38.90/hr. Compare pay at UT Southwestern, Baylor Scott & White, Parkland, plus Fort Worth, sign-ons & negotiation tips."
        schemaUrl="/dallas-rn-salary-2026/"
        faqs={faqs}
      >
        <Image src="/images/dallas-rn-salary-2026-hero.png" alt="Dallas RN salary 2026 hero graphic with Texas-themed geometric design highlighting nurse compensation data" width={1200} height={630} className="w-full rounded-lg mb-6" priority />

        <p>The average <strong>registered nurse salary in Dallas, TX is $80,910 per year ($38.90/hour)</strong> as of 2026 — about 2% above the Texas state average and within striking distance of the U.S. national mean of $89,010. Dallas-Fort Worth (DFW) is the fourth-largest metro in the country and home to four of the top 30 academic medical centers in Texas, which means real specialty premium opportunities for nurses willing to certify and commit.</p>
        <p>Here&apos;s the full Dallas RN compensation picture — by hospital, specialty, experience tier, and across the DFW metroplex.</p>

        <Image src="/images/dallas-rn-salary-2026-uniformed-nurse.png" alt="Registered nurse in Dallas hospital lobby illustrating 2026 DFW RN compensation guide" width={600} height={800} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Dallas RN Salary by Experience (2026)</h2>
        <SalaryTable title="Dallas RN Pay by Experience Tier (2026)" headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']} rows={experienceData} source="BLS OEWS Dallas-Fort Worth-Arlington MSA, May 2024, projected 3.1% annually." />
        <p>Dallas RN pay sits between Houston ($82,140) and Austin ($86,320) on the Texas city ladder, but UT Southwestern and Baylor Scott &amp; White&apos;s specialty premiums push senior ICU, OR, and cath lab nurses well past $110,000.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Estimate Your Dallas RN Salary</h2>
        <p>Use our calculator to model your projected salary by specialty, state, and experience level. Dallas-specific figures derive from the Texas state baseline plus the COL adjustment.</p>
        <div className="bg-surface-container-lowest rounded-xl p-6 my-6 border border-outline-variant">
          <SalaryCalculator />
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Dallas RN Pay by Hospital (Top Employers)</h2>
        <SalaryTable title="Dallas Top Hospital RN Salary Ranges (2026)" headers={['Hospital / System', 'Base RN Range', 'Notes']} rows={hospitalData} source="Glassdoor (verified DFW RN reports, n over 280) + hospital career pages, April 2026." />
        <p><strong>UT Southwestern Medical Center</strong> is the highest academic-medical-center payer in DFW. Magnet-designated, with strong shared governance and clinical ladder advancement that adds $3,000–$8,000/year per rung. The published $108K ceiling typically requires specialty-unit placement (ICU, transplant, oncology), CCRN-tier certification, and 5+ years acute experience — entry-level offers at UT Southwestern more commonly land in the $78K–$92K range. <strong>Baylor Scott &amp; White Health</strong>&apos;s pay-for-performance structure gives top-quartile clinical performers an additional 4–6% annual bonus on top of base. <strong>Parkland Health</strong> tracks slightly below private peers in base pay but offers federal Public Service Loan Forgiveness (PSLF) eligibility — meaningful for new grads carrying nursing-school debt.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Dallas vs Fort Worth: DFW Pay Differences</h2>
        <SalaryTable title="DFW + Texas City RN Pay Comparison (2026)" headers={['City', 'Avg RN Salary', 'COL Context']} rows={cityComparison} source="BLS OEWS metro area data + COL Index from BEA Regional Price Parities." />
        <p><strong>Bottom line:</strong> Fort Worth and Houston edge out Dallas on COL-adjusted dollars, but Dallas&apos;s UT Southwestern and Baylor specialty premiums are stronger than what&apos;s available in Fort Worth or San Antonio. If you&apos;re chasing maximum specialty pay, Dallas wins. If you&apos;re chasing maximum lifestyle dollar, Fort Worth or Houston wins. See our <Link href="/houston-rn-salary-2026/" className="text-primary hover:underline">Houston RN Salary 2026 guide</Link> for direct comparison.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Specialty Pay in Dallas</h2>
        <SalaryTable title="Dallas RN Specialty Pay (2026)" headers={['Specialty', 'Avg Dallas Salary', 'Premium vs Base']} rows={specialtyData} source="Specialty premium estimates based on BLS OES classifications and verified DFW market reports." />

        <Image src="/images/dallas-rn-salary-2026-hospital-table.png" alt="Salary comparison table of top 5 Dallas hospitals: UT Southwestern, Baylor, Parkland, Methodist, Texas Health" width={700} height={500} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses + Shift Differentials</h2>
        <p>Dallas hospitals are consistently in the top quartile nationally for sign-on bonus aggressiveness as of April 2026:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Med-Surg / Telemetry:</strong> $3,500–$8,000 (1-year commitment)</li>
          <li><strong>L&amp;D / OR:</strong> $8,000–$14,000 (1–2 year)</li>
          <li><strong>ICU / ER:</strong> $12,000–$18,000 (2-year)</li>
          <li><strong>Cath Lab / Trauma:</strong> $15,000–$22,000 (2-year)</li>
          <li><strong>Pediatric ICU / Cardiac:</strong> $14,000–$20,000 (2-year)</li>
        </ul>
        <p><strong>Shift differentials in Dallas:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Evening: +$2.00–$3.50/hr</li>
          <li>Night: +$4.00–$6.50/hr</li>
          <li>Weekend: +$2.50–$4.50/hr (often stacks)</li>
          <li>Charge: +$2.50–$4.00/hr or $200/shift flat</li>
          <li>Float pool premium: +$3.00–$6.00/hr</li>
        </ul>
        <p>A full-time Dallas ICU night RN with 5 years&apos; experience and CCRN can clear <strong>$94,000–$108,000</strong> in total compensation before sign-on.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Dallas Hospital Offer</h2>
        <p>Dallas&apos;s hospital market is competitive — UT Southwestern, Baylor, and HCA all actively recruit each other&apos;s nurses. Three negotiation levers that work in DFW specifically:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Cite UT Southwestern as the floor.</strong> UT Southwestern&apos;s published clinical ladder rates effectively set the upper bound for academic-medical pay in Dallas. Use it as a benchmark even when negotiating with Baylor or Methodist.</li>
          <li><strong>Negotiate clinical ladder placement before salary.</strong> Most Dallas systems use formal ladders (Clinical Nurse I, II, III, IV). Getting placed at CN-II or CN-III as an external hire saves you 12–18 months of waiting and is worth $5,000–$12,000/year.</li>
          <li><strong>Push for relocation + housing stipend separate from sign-on.</strong> Dallas hospitals will frequently offer $5,000–$10,000 relocation for out-of-state hires <em>on top of</em> sign-on bonuses.</li>
        </ol>
        <p>For step-by-step scripts, see our <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link> guide.</p>

        <Image src="/images/dallas-rn-salary-2026-icu-team.png" alt="ICU nursing team at Dallas hospital nursing station representing specialty pay tiers in DFW" width={600} height={800} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Career Trajectory: Dallas RN to Nurse Practitioner</h2>
        <p>Many Dallas RNs target an NP transition by year 5–7. Typical path:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Year 1–2:</strong> New grad on med-surg, complete residency, $65,800–$73,400.</li>
          <li><strong>Year 3–4:</strong> Specialty unit (ICU, ER, L&amp;D), CCRN/CEN/RNC-OB cert, $79,000–$88,000.</li>
          <li><strong>Year 5–6:</strong> Begin BSN-to-DNP or MSN at UT Arlington, Baylor, or Texas Woman&apos;s University. Most Dallas systems offer $5,250/year tuition reimbursement; UT Southwestern offers up to $10,000.</li>
          <li><strong>Year 7+:</strong> NP graduate. Family Practice NP: $108,000–$125,000. Acute Care NP: $118,000–$140,000. Psych NP: $128,000–$155,000.</li>
        </ul>

        <p className="text-sm text-on-surface-variant mt-8"><strong>Sources:</strong> U.S. Bureau of Labor Statistics — OEWS, Dallas-Fort Worth-Arlington MSA, May 2024; Texas Workforce Commission Healthcare Labor Market; Texas Board of Nursing Workforce Reports; American Association of Colleges of Nursing 2026 Workforce Survey; UT Southwestern, Baylor Scott &amp; White, Parkland, Texas Health Resources, Methodist Health System career and benefits pages (April 2026). <strong>Methodology:</strong> BLS OEWS May 2024 wages projected at 3.1% annual RN growth; hospital ranges cross-referenced against Glassdoor (n over 280 DFW RN reports) and direct career-page postings. Not career or financial advice.</p>
      </SEOPageLayout>
    </>
  );
}
