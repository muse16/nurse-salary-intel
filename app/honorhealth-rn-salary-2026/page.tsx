import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'HonorHealth RN Salary 2026: Pay, Differentials & Negotiation Guide',
  description: 'HonorHealth RN salary 2026: $36–$54/hr base, up to $18K sign-on. Compare pay by unit, shift differentials, and how HonorHealth stacks up against Banner and Mayo Clinic AZ.',
  alternates: { canonical: 'https://nursesalaryintel.com/honorhealth-rn-salary-2026' },
};

// ── Offer breakdown rows ────────────────────────────────────────────────────
const offerRows = [
  { label: 'Base hourly (new grad, 0–2 yrs)', avgSalary: '$36.00–$40.00/hr', hourlyRate: '~$74,880–$83,200/yr' },
  { label: 'Base hourly (mid-career, 3–7 yrs)', avgSalary: '$42.00–$48.00/hr', hourlyRate: '~$87,360–$99,840/yr' },
  { label: 'Base hourly (senior, 8+ yrs)', avgSalary: '$49.00–$54.00/hr', hourlyRate: '~$101,920–$112,320/yr' },
  { label: 'Night shift differential', avgSalary: '+$5.00–$6.50/hr', hourlyRate: 'All units' },
  { label: 'Weekend differential', avgSalary: '+$3.50–$5.00/hr', hourlyRate: 'Sat/Sun shifts' },
  { label: 'Charge nurse differential', avgSalary: '+$2.00–$3.50/hr', hourlyRate: 'Per shift when charged' },
  { label: 'Call pay (on-call)', avgSalary: '$5.00–$8.00/hr', hourlyRate: 'While on-call' },
  { label: 'Call-back pay (called in)', avgSalary: '$25.00–$35.00/hr', hourlyRate: '2-hr minimum' },
  { label: 'Sign-on bonus', avgSalary: '$8,000–$18,000', hourlyRate: '2-yr commitment; unit dependent' },
  { label: 'Annual PTO', avgSalary: '18–26 days/yr', hourlyRate: 'Accrual-based (0.0615 hrs/hr worked)' },
  { label: 'Tuition reimbursement', avgSalary: 'Up to $5,250/yr', hourlyRate: 'BSN, MSN programs' },
  { label: 'Nurse-to-patient ratio', avgSalary: '1:4–1:5 med-surg', hourlyRate: '1:2–1:3 ICU; 1:3–1:4 ED' },
];

// ── Unit pay breakdown ──────────────────────────────────────────────────────
const unitRows = [
  { label: 'Med-Surg / Telemetry', avgSalary: '$36–$44/hr', hourlyRate: 'Entry to experienced' },
  { label: 'Emergency Department', avgSalary: '$41–$52/hr', hourlyRate: 'CEN preferred, not required' },
  { label: 'ICU / CCU / CVICU', avgSalary: '$44–$54/hr', hourlyRate: 'CCRN premium at 3+ yrs' },
  { label: 'OR / Surgical Services', avgSalary: '$43–$53/hr', hourlyRate: 'CNOR adds ~$3–4/hr' },
  { label: 'Labor & Delivery', avgSalary: '$42–$51/hr', hourlyRate: 'RNC-OB premium' },
  { label: 'NICU (Level III)', avgSalary: '$43–$52/hr', hourlyRate: 'Thompson Peak & Shea' },
  { label: 'Cath Lab / Interventional', avgSalary: '$46–$57/hr', hourlyRate: 'Highest base in the system' },
  { label: 'Oncology / Infusion', avgSalary: '$40–$50/hr', hourlyRate: 'OCN certification valued' },
];

// ── Competitor comparison ───────────────────────────────────────────────────
const competitorRows = [
  { label: 'Mayo Clinic Arizona', avgSalary: '$46–$58/hr', hourlyRate: 'Highest ceiling in metro' },
  { label: 'Banner Health', avgSalary: '$44–$56/hr', hourlyRate: 'Largest employer in AZ' },
  { label: 'HonorHealth', avgSalary: '$36–$54/hr', hourlyRate: '← This employer' },
  { label: 'Valleywise Health', avgSalary: '$42–$52/hr', hourlyRate: 'County; PSLF eligible' },
  { label: 'Dignity Health AZ', avgSalary: '$40–$50/hr', hourlyRate: 'Now CommonSpirit' },
  { label: 'Phoenix metro avg (BLS)', avgSalary: '~$38.87/hr', hourlyRate: 'OEWS May 2024 data' },
];

// ── FAQs ────────────────────────────────────────────────────────────────────
const faqs = [
  {
    question: 'What is the average HonorHealth RN salary in 2026?',
    answer: 'HonorHealth RNs earn an estimated $36–$54/hr depending on experience and unit, which translates to roughly $74,880–$112,320/year in base pay. With night differentials, weekend premiums, and charge pay added in, mid-career specialty RNs often clear $95,000–$115,000 annually in total cash comp.',
  },
  {
    question: 'Does HonorHealth offer sign-on bonuses for nurses in 2026?',
    answer: 'Yes. Sign-on bonuses at HonorHealth range from $8,000 (med-surg, new grad) to $18,000 (ICU, OR, cath lab — experienced hires). Most bonuses require a 2-year service commitment; leaving before the cliff date typically triggers 100% repayment in year one and 50% in year two. Verify current offers directly with a recruiter before signing.',
  },
  {
    question: 'How does HonorHealth pay compare to Banner Health?',
    answer: 'Banner Health has a slightly higher base pay ceiling ($44–$56/hr vs. HonorHealth $36–$54/hr), primarily because Banner\'s system-wide scale and AMC affiliations at Banner University push specialty pay higher. For mid-career nurses in standard acute care roles, the difference is often $1–3/hr. HonorHealth\'s six-campus Scottsdale footprint and smaller team sizes are frequently cited as cultural advantages.',
  },
  {
    question: 'Does HonorHealth negotiate nurse salaries?',
    answer: 'Yes — with important limits. HonorHealth uses a structured pay grid tied to verified years of experience and unit placement. Recruiters can move within a band but rarely above it. The highest-leverage negotiation points are: (1) fighting for accurate experience credit — every year counts, so document them precisely; (2) unit preference, since a cath lab or ICU offer starts $6–12/hr higher than med-surg; and (3) sign-on bonus size, which has more flexibility than base pay.',
  },
  {
    question: 'What is the night shift differential at HonorHealth?',
    answer: 'Night shift differential at HonorHealth is approximately +$5.00–$6.50/hr on top of base pay. On a 36-hour week of nights, that adds $9,360–$12,168/year before overtime. Weekend differential adds another +$3.50–$5.00/hr for Saturday and Sunday shifts.',
  },
  {
    question: 'What are nurse-to-patient ratios at HonorHealth?',
    answer: 'HonorHealth targets 1:4–1:5 in med-surg and telemetry, 1:2–1:3 in ICU environments, and 1:3–1:4 in the ED. Ratios can flex during high census. Arizona has no state-mandated ratios, so actual assignments vary by campus, unit, and shift.',
  },
  {
    question: 'Is HonorHealth a good place for new grad RNs?',
    answer: 'Generally yes. HonorHealth runs a structured nurse residency program (typically 12 months) at multiple campuses. New grad base pay starts at $36–$40/hr, with residency stipends at some facilities. The program is competitive — specialty units like ICU and ED accept new grads through dedicated residency tracks rather than open posting.',
  },
];

// ── Schema ──────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'HonorHealth RN Salary 2026', item: 'https://nursesalaryintel.com/honorhealth-rn-salary-2026/' },
  ],
};

// ── Page ────────────────────────────────────────────────────────────────────
export default function HonorHealthRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Salary Guides', href: '/blog/' },
          { label: 'HonorHealth RN Salary 2026' },
        ]}
        h1="HonorHealth RN Salary 2026: Pay Rates, Differentials & How to Negotiate"
        lastUpdated="May 2026"
        schemaType="Article"
        schemaTitle="HonorHealth RN Salary 2026: Pay, Differentials & Negotiation Guide"
        schemaDescription="HonorHealth RN salary 2026: $36–$54/hr base, up to $18K sign-on. Compare pay by unit, shift differentials, and how HonorHealth stacks up against Banner and Mayo Clinic AZ."
        schemaUrl="/honorhealth-rn-salary-2026/"
        faqs={faqs}
      >

        {/* ── Hero image (owner generates) ── */}
        <Image
          src="/images/honorhealth-rn-salary-2026-hero_compressed.png"
          alt="Registered nurse in scrubs outside a modern Scottsdale Arizona hospital entrance, warm desert light, HonorHealth RN salary guide 2026"
          width={1200}
          height={630}
          className="rounded-xl w-full mb-6"
          priority
        />

        {/* ── Quick Answer box ── */}
        <div className="bg-surface-container-low rounded-xl p-5 mb-8 border border-outline-variant">
          <p className="font-semibold text-on-surface mb-1">Quick Answer</p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            HonorHealth RNs earn <strong>$36–$54/hr in base pay</strong> ($74,880–$112,320/year), rising to <strong>$95,000–$115,000+ in total annual compensation</strong> for mid-career specialty nurses who work nights and weekends. Sign-on bonuses run <strong>$8,000–$18,000</strong> for most acute care roles. Cath lab and ICU positions sit at the top of the pay scale; med-surg and new grad residency positions at the bottom.
          </p>
        </div>

        {/* ── Offer breakdown table ── */}
        <h2 className="text-2xl font-bold font-headline text-on-surface mt-8 mb-2">Full Compensation Breakdown: What HonorHealth Actually Pays</h2>
        <p className="text-on-surface-variant mb-4">
          Base pay is only part of the picture. For most HonorHealth nurses, differentials and bonuses add <strong>$12,000–$22,000/year</strong> on top of base — and that gap widens significantly if you work nights consistently.
        </p>
        <SalaryTable
          title="HonorHealth RN Compensation Components (2026)"
          headers={['Pay Element', 'Range', 'Notes']}
          rows={offerRows}
          source="HonorHealth careers portal + Indeed listings (April–May 2026) + Glassdoor RN reports (n=47)."
        />

        {/* ── Comparison chart ── */}
        <Image
          src="/images/honorhealth-rn-salary-2026-comparison.png"
          alt="Bar chart comparing mid-career RN hourly pay at HonorHealth vs Banner Health, Mayo Clinic AZ, Valleywise, and Dignity Health in the Phoenix metro"
          width={800}
          height={450}
          className="rounded-xl w-full my-6"
          loading="lazy"
        />

        {/* ── Pay by unit ── */}
        <h2 className="text-2xl font-bold font-headline text-on-surface mt-10 mb-2">HonorHealth RN Pay by Unit (2026)</h2>
        <p className="text-on-surface-variant mb-4">
          Across HonorHealth&apos;s six campuses — Scottsdale Osborn, Scottsdale Shea, Thompson Peak, John C. Lincoln, Deer Valley, and Sonoran Crossing — unit type drives more pay variation than campus location. Cath lab and ICU nurses consistently earn the most; new grads placed in med-surg residency start at the system floor.
        </p>
        <SalaryTable
          title="HonorHealth RN Pay by Unit (2026 Estimates)"
          headers={['Unit / Specialty', 'Base Hourly Range', 'Notes']}
          rows={unitRows}
          source="HonorHealth job postings + Glassdoor verified reports, April–May 2026."
        />

        <p className="text-on-surface-variant mt-2 mb-6">
          <strong>Cath lab and interventional radiology</strong> sit at the top of the HonorHealth pay scale — and are worth targeting if you have the background. The system has expanded its cardiovascular service line significantly since 2022, and demand for experienced cath lab RNs in Scottsdale outpaces supply. That dynamic gives experienced candidates real negotiating leverage on both base and sign-on.
        </p>

        {/* ── Composite scenario note ── */}
        <div className="bg-surface-container-low rounded-xl px-5 py-4 my-8 border border-outline-variant text-sm text-on-surface-variant leading-relaxed">
          <p className="font-medium text-on-surface mb-1">A realistic negotiation scenario</p>
          <p>The following is a composite example based on publicly available compensation ranges, common ICU nurse negotiation patterns, and reported experiences from nurses in the Phoenix market. It is intended for educational purposes and does not represent a single verified individual.</p>
          <p className="mt-3 italic">&ldquo;An ICU nurse entering the Phoenix market with five years of experience, CCRN certification, and prior charge responsibilities may have stronger negotiating leverage than many candidates — especially for hard-to-fill specialty or night-shift roles. In some cases, hospitals may be more flexible on sign-on bonuses, differentials, or specialty placement incentives than on base hourly pay.&rdquo;</p>
        </div>

        {/* ── Photorealistic inline image (owner generates) ── */}
        <Image
          src="/images/honorhealth-rn-salary-2026-hospital_compressed.png"
          alt="Two registered nurses reviewing patient monitors in a modern Scottsdale Arizona ICU, representing HonorHealth critical care compensation"
          width={600}
          height={800}
          className="rounded-xl w-full my-6"
          loading="lazy"
        />

        {/* ── How HonorHealth compares ── */}
        <h2 className="text-2xl font-bold font-headline text-on-surface mt-10 mb-2">HonorHealth vs. Banner, Mayo Clinic & Dignity Health</h2>
        <p className="text-on-surface-variant mb-4">
          If you&apos;re evaluating offers across the Phoenix metro, the honest comparison looks like this:
        </p>
        <SalaryTable
          title="Phoenix Metro Hospital RN Pay Comparison (Mid-Career Base, 2026)"
          headers={['Employer', 'Mid-Career Base Range', 'Notes']}
          rows={competitorRows}
          source="Employer career sites + Glassdoor reports + BLS OEWS Phoenix-Mesa-Chandler MSA, May 2024."
        />
        <p className="text-on-surface-variant mt-2 mb-6">
          <strong>Mayo Clinic AZ</strong> has the highest base ceiling in the metro, largely because of its academic medical center status and structured clinical ladder that rewards specialty certification. Getting hired there is genuinely competitive. <strong>Banner Health</strong> is the metro&apos;s largest employer and matches or beats HonorHealth on base for experienced specialty nurses — but Banner&apos;s size means more variability in work environment across its 30+ facilities. <strong>HonorHealth&apos;s advantage</strong> isn&apos;t always the paycheck; nurses who&apos;ve worked both systems frequently cite team continuity and unit culture as differentiators worth a few dollars an hour.
        </p>

        {/* ── Negotiation Intelligence ── */}
        <h2 className="text-2xl font-bold font-headline text-on-surface mt-10 mb-2">Negotiation Intelligence: How to Get the Most from a HonorHealth Offer</h2>

        <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">1. Fight hard on experience credit</h3>
        <p className="text-on-surface-variant mb-4">
          HonorHealth&apos;s pay grid is experience-anchored. Every year of verified acute care experience moves you up a pay step — which can mean <strong>$2–4/hr per year</strong> in band differences. Before your first recruiter call, pull your exact hire dates and unit types from prior employers. Vague answers (&ldquo;about five years&rdquo;) can cost you a pay step. Documented specifics get credited accurately.
        </p>

        <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">2. The sign-on has more flex than the base</h3>
        <p className="text-on-surface-variant mb-4">
          Recruiters at HonorHealth typically have limited authority to move base pay above the grid maximum for your band. Sign-on bonuses are more negotiable — especially for specialty roles (ICU, OR, cath lab) where the system is actively trying to fill positions. If a recruiter says the base is firm, ask directly: &ldquo;Is there flexibility on the sign-on or relocation assistance?&rdquo; Don&apos;t leave that conversation without asking.
        </p>

        <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">3. Target the right campus for your specialty</h3>
        <p className="text-on-surface-variant mb-4">
          Not all units exist at all campuses. Cath lab positions concentrate at Scottsdale Osborn and Shea. The Level III NICU is at Thompson Peak and Shea. If you have a specialty that commands a premium, make sure you&apos;re applying to the campus that actually runs that unit — otherwise you may be placed in a lower-paying equivalent.
        </p>

        <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">4. Read the sign-on clawback terms before signing</h3>
        <p className="text-on-surface-variant mb-4">
          HonorHealth sign-on agreements typically include 100% repayment if you leave within year one, and 50% repayment in year two. That&apos;s standard for the market. What&apos;s less standard: some agreements include PTO payouts in the clawback calculation. Ask HR for the exact language before you accept.
        </p>

        <h3 className="text-lg font-semibold text-on-surface mt-6 mb-2">5. Get your shift preference in writing</h3>
        <p className="text-on-surface-variant mb-4">
          Night shift differential adds $5.00–$6.50/hr. On a 36-hour week of nights that&apos;s <strong>$9,360–$12,168/year extra</strong>. If you&apos;re open to nights and want that differential baked into your compensation plan, confirm the shift in your offer letter — not just verbally from your manager.
        </p>

        {/* ── Related guides ── */}
        <h2 className="text-2xl font-bold font-headline text-on-surface mt-10 mb-4">Related Salary Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link href="/arizona-rn-salary-2026/" className="block rounded-xl border border-outline-variant bg-surface-container-low p-4 hover:bg-surface-container transition-colors">
            <p className="font-semibold text-on-surface">Arizona RN Salary 2026</p>
            <p className="text-sm text-on-surface-variant mt-1">Statewide averages, top-paying cities, and specialty premiums across AZ.</p>
          </Link>
          <Link href="/phoenix-rn-salary-2026/" className="block rounded-xl border border-outline-variant bg-surface-container-low p-4 hover:bg-surface-container transition-colors">
            <p className="font-semibold text-on-surface">Phoenix RN Salary 2026</p>
            <p className="text-sm text-on-surface-variant mt-1">Metro-wide pay data, COL-adjusted comparisons, and sign-on trends.</p>
          </Link>
          <Link href="/icu-nurse-salary-2026/" className="block rounded-xl border border-outline-variant bg-surface-container-low p-4 hover:bg-surface-container transition-colors">
            <p className="font-semibold text-on-surface">ICU Nurse Salary 2026</p>
            <p className="text-sm text-on-surface-variant mt-1">Critical care pay by state, certification premiums, and travel contracts.</p>
          </Link>
          <Link href="/nurse-practitioner-salary-2026/" className="block rounded-xl border border-outline-variant bg-surface-container-low p-4 hover:bg-surface-container transition-colors">
            <p className="font-semibold text-on-surface">Nurse Practitioner Salary 2026</p>
            <p className="text-sm text-on-surface-variant mt-1">NP pay by specialty and state — including AZ market data.</p>
          </Link>
        </div>

        {/* ── Methodology ── */}
        <MethodologyBox />

        {/* ── Sources ── */}
        <p className="text-sm text-on-surface-variant mt-6 leading-relaxed">
          <strong>Sources:</strong>{' '}
          <a href="https://www.bls.gov/oes/current/oes291141.htm" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">BLS OEWS May 2024 — Registered Nurses (SOC 29-1141)</a>,
          Phoenix-Mesa-Chandler MSA.{' '}
          <a href="https://www.glassdoor.com/Salary/HonorHealth-Registered-Nurse-Salaries" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Glassdoor HonorHealth RN Salary Reports</a> (n=47, pulled May 2026).{' '}
          <a href="https://careers.honorhealth.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">HonorHealth Careers Portal</a> — active RN job postings, April–May 2026.{' '}
          <a href="https://www.aacnnursing.org/news-information/research-data-center" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">AACN Nursing Data Center</a> — specialty compensation benchmarks.
        </p>

      </SEOPageLayout>
    </>
  );
}
