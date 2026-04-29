import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'RN Salary by Years of Experience 2026: How Pay Grows Year by Year',
  description: 'RN salary grows from $62K–$88K as a new grad to $108K–$140K+ with 10+ years experience. See the full 2026 pay trajectory by specialty, state, and certification.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-by-years-of-experience-2026' },
};

const experienceData = [
  { label: 'Year 1 (New Grad)', avgSalary: '$62,000–$88,000', hourlyRate: 'Orientation / residency phase' },
  { label: 'Year 2', avgSalary: '$70,000–$94,000', hourlyRate: 'First step increase, off orientation' },
  { label: 'Year 3', avgSalary: '$76,000–$100,000', hourlyRate: 'Specialty focus, first cert eligible' },
  { label: 'Year 4–5', avgSalary: '$82,000–$108,000', hourlyRate: 'CCRN/CEN adds $4K–$7K' },
  { label: 'Year 6–7', avgSalary: '$88,000–$116,000', hourlyRate: 'Preceptor/charge eligibility' },
  { label: 'Year 8–10', avgSalary: '$94,000–$124,000', hourlyRate: 'Senior staff, lead RN roles' },
  { label: 'Year 10–15', avgSalary: '$100,000–$134,000', hourlyRate: 'Educator, CNS, charge nurse' },
  { label: 'Year 15+ (no APRN)', avgSalary: '$108,000–$140,000', hourlyRate: 'Peak staff RN earning zone' },
  { label: 'APRN (NP, CRNA, CNS)', avgSalary: '$120,000–$250,000+', hourlyRate: 'Advanced practice ceiling' },
];

const specialtyExperienceData = [
  { label: 'ICU — 5 years (CCRN)', avgSalary: '$96,000–$118,000', hourlyRate: 'Night shift adds $10K–$18K' },
  { label: 'ICU — 10 years (CCRN)', avgSalary: '$114,000–$136,000', hourlyRate: 'Charge/lead adds $4K–$8K' },
  { label: 'ER — 5 years (CEN)', avgSalary: '$92,000–$112,000', hourlyRate: 'Trauma cert adds $3K–$5K' },
  { label: 'ER — 10 years (CEN)', avgSalary: '$108,000–$128,000', hourlyRate: 'Level 1 trauma premium' },
  { label: 'OR — 5 years (CNOR)', avgSalary: '$90,000–$110,000', hourlyRate: 'Call pay adds $8K–$15K' },
  { label: 'L&D — 5 years (RNC-OB)', avgSalary: '$86,000–$106,000', hourlyRate: 'On-call premium significant' },
  { label: 'Med-Surg — 5 years', avgSalary: '$76,000–$94,000', hourlyRate: 'Charge adds $4K–$6K' },
  { label: 'Home Health — 5 years', avgSalary: '$68,000–$84,000', hourlyRate: 'Lower ceiling vs acute care' },
];

const stateExperienceData = [
  { label: 'California — 5 yrs ICU', avgSalary: '$118,000–$136,000', hourlyRate: 'Union contract step schedule' },
  { label: 'Washington — 5 yrs ICU', avgSalary: '$108,000–$126,000', hourlyRate: 'UW Medicine / Providence' },
  { label: 'New York — 5 yrs ICU', avgSalary: '$102,000–$118,000', hourlyRate: 'NYC academic centers' },
  { label: 'Texas — 5 yrs ICU', avgSalary: '$88,000–$104,000', hourlyRate: 'No income tax advantage' },
  { label: 'Florida — 5 yrs ICU', avgSalary: '$82,000–$98,000', hourlyRate: 'No income tax; lower base' },
  { label: 'National Avg — 5 yrs ICU', avgSalary: '$96,000–$118,000', hourlyRate: 'CCRN assumed' },
];

const faqs = [
  { question: 'How much does RN salary increase per year of experience?', answer: 'RN salary typically increases 3–8% per year in the first 5 years, driven by step increases and specialty development. The fastest gains come from specialty certification (CCRN, CEN adding $4,000–$7,000/year at year 3–4), shift differential adoption, and moving into charge or preceptor roles. Growth flattens after year 10 for staff RNs without advanced practice credentials.' },
  { question: 'What is the average RN salary with 5 years of experience?', answer: 'RNs with 5 years of experience average $86,000–$108,000 nationally in 2026, depending on specialty and state. ICU nurses with CCRN certification at 5 years average $96,000–$118,000. California RNs with 5 years average $110,000–$130,000 due to union step schedules and higher base rates.' },
  { question: 'At what point does RN salary plateau?', answer: 'Staff RN salary typically plateaus at years 12–18 in the $108,000–$140,000 range without advanced practice credentials. The most effective way to break through the plateau is APRN education (NP, CRNA, or CNS), which opens the $120,000–$250,000+ range. Charge, educator, and management roles also extend the ceiling modestly ($8,000–$20,000 above staff rates).' },
  { question: 'How much more do certified nurses earn than non-certified?', answer: 'Nurses with active specialty certifications earn $4,000–$10,000 more annually than non-certified peers in the same specialty and experience range. CCRN adds the most for ICU nurses ($5,000–$8,000/year at most major systems). Many hospitals also offer one-time certification bonuses of $500–$2,000 when you first pass.' },
  { question: 'Does the type of employer affect how fast RN salary grows?', answer: 'Yes significantly. Union hospitals (especially in California) have mandatory annual step increases locked into collective bargaining agreements — often 3–5% per year guaranteed. Non-union hospitals rely on merit increases that average 2–3% and may be frozen in budget-constrained years. Academic medical centers and Magnet hospitals typically have more defined advancement ladders than community hospitals.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'RN Salary by Years of Experience 2026', item: 'https://nursesalaryintel.com/rn-salary-by-years-of-experience-2026/' },
  ],
};

export default function RNSalaryByExperience2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'RN Salary by Years of Experience 2026' }]}
        h1="RN Salary by Years of Experience 2026: Full Career Pay Trajectory"
        lastUpdated="April 2026"
        schemaTitle="RN Salary by Years of Experience 2026"
        schemaDescription="RN salary from new grad to 15+ years of experience in 2026. Year-by-year pay growth by specialty, state, and certification milestone."
        schemaUrl="/rn-salary-by-years-of-experience-2026/"
        faqs={faqs}
      >
        {/* Featured snippet */}
        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            RN salary grows from <strong>$62,000–$88,000 as a new grad</strong> to <strong>$108,000–$140,000 at 15+ years</strong>
            without advanced practice credentials. The fastest growth comes in years 3–5 with specialty certification
            (CCRN, CEN adding $4K–$7K/year) and shift differential adoption. APRN credentials (NP, CRNA) break the staff
            RN ceiling, reaching <strong>$120,000–$250,000+</strong>.
          </p>
        </div>

        <p>
          Understanding how RN salary grows with experience is essential for both career planning and negotiation.
          Unlike many professions, nursing has multiple inflection points where the right move — a certification, a
          specialty switch, a shift change, or an advanced degree — can add $10,000–$50,000 to annual compensation
          almost immediately.
        </p>

        <Image
          src="/images/rn-salary-by-years-of-experience-2026-hero.png"
          alt="Registered nurse with 10 years of experience in clinical leadership role reviewing patient charts with newer nursing staff"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Years of Experience — National Average (2026)</h2>

        <SalaryTable
          title="RN Salary Growth by Years of Experience (2026)"
          headers={['Experience Level', 'Typical Salary Range', 'Key Milestone']}
          rows={experienceData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 career trajectory data"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">The Three Fastest Pay-Growth Inflection Points</h2>
        <p>
          Most nurses see their fastest salary acceleration at three specific moments in their career:
        </p>
        <ul>
          <li><strong>Year 3–4: First specialty certification.</strong> CCRN, CEN, CNOR, and RNC-OB certifications add $4,000–$8,000/year and unlock charge nurse eligibility at most facilities. The exam costs $200–$400 and the ROI is typically under 3 months.</li>
          <li><strong>Year 2–5: Shifting to nights.</strong> A 15% night differential on a $90,000 base adds $13,500/year — no new credential required. See the <Link href="/night-shift-differential-nurses" className="text-primary hover:underline">night shift nurse salary guide</Link> for the full math.</li>
          <li><strong>Year 5–8: Moving to charge or preceptor.</strong> Charge differentials of $2–$5/hr add $4,000–$10,000/year and build the leadership experience needed for educator and management roles.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Specialty at 5 and 10 Years</h2>

        <SalaryTable
          title="RN Salary by Specialty — 5 and 10 Year Benchmarks (2026)"
          headers={['Specialty & Experience', 'Salary Range', 'Notes']}
          rows={specialtyExperienceData}
          source="NurseSalaryIntel specialty salary data, 2026"
        />

        <Image
          src="/images/rn-salary-by-years-of-experience-2026-chart.png"
          alt="Line chart showing RN salary growth curves by specialty from new grad through 15 years of experience in 2026"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Experience and State</h2>

        <SalaryTable
          title="5-Year ICU RN Salary by State (CCRN, 2026)"
          headers={['State / Benchmark', 'Salary Range', 'Notes']}
          rows={stateExperienceData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 state projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">When Experience Stops Mattering (and What to Do)</h2>
        <p>
          Staff RN salary plateaus typically hit between years 12 and 18. Union hospitals with defined step schedules
          continue increasing pay through step 20+ in some contracts — California union RNs may not fully plateau until
          year 20–25. Non-union hospitals in most states plateau by year 10–12.
        </p>
        <p>
          At that point, the options that meaningfully reset the ceiling are: APRN education (NP, CRNA, CNS — see the
          <Link href="/crna-salary-2026" className="text-primary hover:underline"> CRNA salary guide</Link> for CRNA ROI math),
          moving into nursing management or education (adds $10,000–$25,000/year for experienced nurses), or maximizing
          travel nursing income while maintaining staff employment.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/new-grad-rn-salary-2026', label: 'New Grad RN Salary 2026', desc: 'First-year pay and how to maximize it' },
            { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary 2026', desc: 'The $4K–$10K experience milestone' },
            { href: '/crna-salary-2026', label: 'CRNA Salary 2026', desc: 'Breaking the staff RN ceiling with CRNA' },
            { href: '/nurse-salary-negotiation-scripts-2026', label: 'Salary Negotiation Scripts', desc: 'Use experience to negotiate higher pay' },
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
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, National and State Data</a></li>
          <li><a href="https://www.aacnnursing.org/news-information/fact-sheets/nursing-workforce" target="_blank" rel="noopener noreferrer">AACN — Nursing Workforce Fact Sheet</a></li>
          <li><a href="https://www.ncsbn.org/" target="_blank" rel="noopener noreferrer">National Council of State Boards of Nursing (NCSBN)</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
