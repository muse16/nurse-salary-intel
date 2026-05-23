import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'RN Salary by Years of Experience 2026: From $62K to $121K+',
  description:
    'New grad RNs earn $62K–$70K; senior nurses with 10+ years reach $99K–$121K. Full breakdown by experience tier, specialty, and fastest paths to six figures.',
  alternates: { canonical: 'https://nursesalaryintel.com/nurse-salary-by-age-experience-2026' },
  openGraph: {
    title: 'RN Salary by Years of Experience 2026: From $62K to $121K+',
    description: 'How nurse salary grows with experience — from new grad to senior RN — with specialty and certification paths.',
    url: 'https://nursesalaryintel.com/nurse-salary-by-age-experience-2026',
  },
};

const faqs = [
  {
    question: 'How much does nurse salary increase with experience?',
    answer:
      'Nurse salary typically grows 50–80% over a career. A new grad RN earning $65,000 nationally can expect $85,000–$95,000 by year 5 with specialty experience, and $99,000–$121,000+ at the 10-year mark with specialization. The biggest salary jumps happen between years 1–3 (new grad to mid-career step) and again at years 5–8 (when specialty certifications start paying dividends).',
  },
  {
    question: 'How long does it take a nurse to reach $100K?',
    answer:
      'Realistically 4–8 years, depending on market, specialty, and shift choice. The fastest path: specialize in ICU, ER, or OR within the first 2 years → earn CCRN or CEN certification by year 4 → add consistent night differential. In high-paying markets like California or Seattle, six figures is achievable by year 3–4. In mid-tier markets, years 5–7 is more typical.',
  },
  {
    question: 'Does nursing experience matter more than education for salary?',
    answer:
      'Both matter, but differently. BSN vs. ADN has a relatively small direct pay impact at the individual job level — most hospitals pay the same base regardless of degree once you\'re licensed. What matters more for salary: specialty choice, shift selection (night differential), geographic market, and years in a high-demand unit. That said, a BSN opens doors to clinical ladder advancement and leadership roles that do pay more.',
  },
  {
    question: 'What is the salary difference between a new grad RN and a 10-year RN?',
    answer:
      'Nationally, a new grad RN earns approximately $62,000–$70,000. A nurse with 10 years of specialty experience earns $99,000–$121,000. That\'s a $37,000–$51,000 difference from the same base career path. In California, the gap is larger — new grads start at $85,000+ and experienced specialty nurses exceed $130,000.',
  },
  {
    question: 'Does CCRN certification significantly increase salary?',
    answer:
      'Yes — CCRN certification adds $4,000–$12,000/year depending on the hospital system. Many academic medical centers pay a $1.50–$3.00/hr certification stipend that applies to every shift worked. On a 36-hour/week schedule, $2.50/hr certification differential = $4,680/year in additional income on top of any base pay increase that comes with certification-eligible positions.',
  },
];

const experienceTierData = [
  { label: 'New Grad / Year 1 (0–1 yr)', avgSalary: '$62,000 – $70,000', hourlyRate: '$29.80 – $33.65/hr' },
  { label: 'Early Career (1–3 yrs)', avgSalary: '$68,000 – $79,000', hourlyRate: '$32.70 – $38.00/hr' },
  { label: 'Mid-Career (3–6 yrs)', avgSalary: '$78,000 – $91,000', hourlyRate: '$37.50 – $43.75/hr' },
  { label: 'Experienced (6–10 yrs)', avgSalary: '$88,000 – $104,000', hourlyRate: '$42.30 – $50.00/hr' },
  { label: 'Senior (10–15 yrs)', avgSalary: '$97,000 – $115,000', hourlyRate: '$46.60 – $55.30/hr' },
  { label: 'Expert (15+ yrs)', avgSalary: '$105,000 – $121,000+', hourlyRate: '$50.50 – $58.20+/hr' },
];

const specialtyByExperienceData = [
  { label: 'Med-Surg, 0–3 yrs', avgSalary: '$62,000 – $74,000', hourlyRate: 'Entry specialty; common residency path' },
  { label: 'ICU, 3–5 yrs + CCRN', avgSalary: '$88,000 – $104,000', hourlyRate: '+CCRN adds $4,680–$9,360/yr' },
  { label: 'ER, 3–6 yrs + CEN', avgSalary: '$85,000 – $100,000', hourlyRate: 'CEN adds ~$4,800/yr avg' },
  { label: 'OR / Surgical, 4–8 yrs', avgSalary: '$88,000 – $106,000', hourlyRate: 'CNOR premium + on-call pay' },
  { label: 'L&D, 4–8 yrs', avgSalary: '$84,000 – $102,000', hourlyRate: 'Specialty demand driven' },
  { label: 'Charge RN, 5–10 yrs', avgSalary: '$95,000 – $115,000', hourlyRate: '+$3–$5/hr charge stipend' },
  { label: 'Travel Nurse, 2+ yrs', avgSalary: '$95,000 – $155,000', hourlyRate: 'Contract-dependent; $2,400–$3,200/wk' },
];

const pathToSixFiguresData = [
  { label: 'ICU + CCRN + nights (year 4)', avgSalary: '$98,000 – $110,000', hourlyRate: 'Base + cert + differential stacked' },
  { label: 'OR + CNOR + call pay (year 5–6)', avgSalary: '$100,000 – $118,000', hourlyRate: 'Call pay adds $10K–$18K/yr' },
  { label: 'Travel ICU/ER (year 2–3)', avgSalary: '$100,000 – $145,000', hourlyRate: 'Contract pay; verify taxable split' },
  { label: 'Charge RN + nights (year 5–7)', avgSalary: '$100,000 – $120,000', hourlyRate: 'Leadership + differential combined' },
  { label: 'Any specialty in CA + nights', avgSalary: '$110,000 – $140,000+', hourlyRate: 'Union pay floor + high differentials' },
];

export default function NurseSalaryByExperience2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'RN Salary by Experience 2026' },
      ]}
      h1="RN Salary by Years of Experience 2026: How Nurse Pay Grows at Every Career Stage"
      lastUpdated="May 2026"
      schemaTitle="RN Salary by Years of Experience 2026"
      schemaDescription="How registered nurse salary grows from new grad to senior RN — with data by experience tier, specialty, and fastest paths to six figures."
      schemaUrl="/nurse-salary-by-age-experience-2026"
      datePublished="2026-05-22"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          New grad RNs earn <strong>$62,000–$70,000 nationally</strong> in 2026. By year 5 with specialty experience,
          that grows to <strong>$78,000–$91,000</strong>. Senior nurses with 10+ years reach{' '}
          <strong>$99,000–$121,000+</strong>. The fastest path to six figures: ICU or OR specialty + night shift +
          certification — achievable in 4–5 years in most markets, 3 years in California.
        </p>
      </div>

      <Image
        src="/images/nurse-salary-by-age-experience-2026-hero.webp"
        alt="Experienced registered nurse in navy scrubs reviewing patient records at a hospital workstation, calm professional setting with warm overhead lighting"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        The national average registered nurse salary of <strong>approximately $89,000/year</strong> (BLS OEWS May 2024) obscures a
        wide range that depends heavily on where you are in your career. A nurse with 1 year of med-surg experience
        and a nurse with 12 years of ICU experience are both captured in that average — but their actual salaries
        are separated by $40,000–$50,000. Understanding how pay grows — and what drives the biggest jumps — is
        the most actionable career planning tool available to nurses at any stage.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Years of Experience (2026 National)</h2>
      <p>
        The data below represents national median salary ranges by experience tier, based on BLS OEWS occupational
        wage data and NurseSalaryIntel analysis of pay scale structures across acute care hospital systems.
        Figures reflect base salary only — shift differentials, overtime, and certification stipends are additive.
      </p>

      <SalaryTable
        title="Registered Nurse Salary by Experience Level (2026)"
        headers={['Experience Tier', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceTierData}
        source="BLS OEWS May 2024 + NurseSalaryIntel experience-tier analysis"
      />

      <Image
        src="/images/nurse-salary-by-age-experience-2026-comparison.png"
        alt="Bar chart showing average RN salary progression from new grad through 15+ years of experience in 2026, from $66K to $113K"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Where the Salary Jumps Are — and Why</h2>
      <p>
        Nurse pay doesn't grow linearly. There are two inflection points where salary accelerates meaningfully.
        The first is the transition from new grad to established staff nurse at roughly years 2–3. Most hospital
        systems run step-based pay scales where years 1–2 are locked into lower steps, and then nurses advance
        2–3 steps at the annual review cycle. This typically adds $4,000–$7,000 in one move.
      </p>
      <p>
        The second inflection — often the bigger one — happens between years 4–7 when specialty certifications
        and demonstrated critical care experience open doors to charge positions, clinical ladder advancement, and
        traveler-competitive offers. A nurse who earns CCRN at year 4 and moves to a Level 1 trauma ICU has
        crossed a salary threshold that a med-surg nurse with 10 years of experience often hasn't.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Specialty + Experience Combination</h2>

      <Image
        src="/images/nurse-salary-by-age-experience-2026-hospital.webp"
        alt="Senior nurse in scrubs mentoring a younger nurse at a hospital workstation, reviewing patient data together in a clinical setting"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Experience years alone don't determine salary — specialty matters as much as tenure. The table below shows
        realistic salary ranges when experience and specialty intersect, including the certification premium where
        applicable.
      </p>

      <SalaryTable
        title="RN Salary by Specialty + Experience Level (2026)"
        headers={['Specialty + Experience', 'Annual Salary Range', 'Notes']}
        rows={specialtyByExperienceData}
        source="NurseSalaryIntel 2026 market data + specialty certification survey analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Fastest Paths to Six Figures for RNs</h2>
      <p>
        Six-figure nursing salaries are real and achievable — they require deliberate choices in specialty,
        shift, and market. The table below shows the combinations most likely to clear $100,000/year, with
        approximate timelines.
      </p>

      <SalaryTable
        title="Fastest Paths to $100K+ for RNs (2026)"
        headers={['Path', 'Realistic Salary Range', 'Key Notes']}
        rows={pathToSixFiguresData}
        source="NurseSalaryIntel 2026 compensation analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Experience vs. Market: Which Matters More?</h2>
      <p>
        A critical care nurse with 5 years of experience earns roughly <strong>$92,000–$104,000</strong> nationally —
        but that same nurse earns <strong>$112,000–$125,000</strong> in Seattle and potentially{' '}
        <strong>$118,000–$135,000</strong> in San Francisco. The market multiplier on experience is the largest
        variable in nursing compensation planning. For nurses who are geographically flexible, the highest-leverage
        move is often relocation to a high-paying compact state market combined with specialty certification — not
        simply waiting for years to accumulate.
      </p>
      <p>
        California, Washington, New York, and Massachusetts consistently pay the highest nominal salaries at
        every experience level. Texas, Florida, and Indiana offer stronger real purchasing power relative to cost
        of living. The optimal choice depends on personal circumstances — but the math should be run explicitly,
        not assumed.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What Actually Drives the Biggest Pay Increases</h2>
      <p>
        Across all experience levels, the most powerful salary levers available to nurses are: specialty change
        (moving from med-surg to ICU or OR), shift change (adding consistent night differential worth $7,000–$18,000/year),
        certification (adding $4,000–$12,000 through CCRN, CEN, CNOR, or CRNFA), and market change (relocating
        to a higher-paying metro or accepting a travel contract). Any one of these can outpace 3–5 years of
        step-based pay increases. Combining two or more — a mid-career nurse moving to nights in ICU with CCRN
        in a strong market — can add $25,000–$40,000 to annual income in a single year.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Pay 2026', desc: 'Night shift adds $8K–$25K/yr' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay + CCRN premium' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to use experience as leverage' },
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'Base pay benchmarks for all 50 states' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
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
        <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, National and State Data (May 2024)</a></li>
        <li><a href="https://www.aacnnursing.org/news-data/all-news/aacn-research" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing — Nursing Workforce Data</a></li>
        <li><a href="https://www.shrm.org/topics-tools/tools/hr-answers/what-is-merit-based-pay" target="_blank" rel="noopener noreferrer">SHRM — Merit Pay and Step Increase Structures</a></li>
      </ul>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
