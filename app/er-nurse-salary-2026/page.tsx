import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';
import { TravelPayDisclaimer } from '@/components/TravelPayDisclaimer';
// placeholder-remove from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'ER Nurse Salary 2026: $92,800/yr Est. + CEN Adds $4,800/yr',
  description:
    'ER nurses earn an estimated $92,800/yr. Pay by state, CEN certification premium, Level 1 trauma differentials, and travel ER nurse weekly rates.',
  alternates: { canonical: 'https://nursesalaryintel.com/er-nurse-salary-2026' },
  openGraph: {
    title: 'ER Nurse Salary 2026: $92,800/yr Est. + CEN Adds $4,800/yr',
    description: 'ER nurse pay by state, hospital, specialty tier, and experience — with CEN certification premium and travel rates.',
    url: 'https://nursesalaryintel.com/er-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average ER nurse salary in 2026?',
    answer:
      'Emergency room nurses earn an average of $92,800/year ($44.62/hr) — approximately 4% above the overall RN national average of $89,010 (BLS OEWS May 2024). California leads at $116,000–$125,000/year. CEN certification adds an average of $4,800/year on top of base pay. Travel ER nurses earn $2,400–$3,200/week on contract.',
  },
  {
    question: 'How much does CEN certification add to ER nurse salary?',
    answer:
      'CEN (Certified Emergency Nurse) certification adds an average of $4,800/year to ER nurse base salary, based on specialty certification premium data. Many hospital systems pay a per-hour certification stipend of $1.50–$3.00/hr that applies to every shift worked. On a 36-hour/week schedule, a $2.50/hr CEN stipend = $4,680/year in additional income. Level I and Level II trauma centers are the most likely to offer certification differentials.',
  },
  {
    question: 'Do ER nurses make more than ICU nurses?',
    answer:
      'Generally no — ICU nurses earn approximately $2,000–$5,000 more per year than ER nurses on base salary. However, ER nurses often have higher overtime income due to unpredictable census volumes and mandatory coverage. In total compensation (base + overtime + differential), the gap narrows significantly. Both specialties pay well above the floor nursing average.',
  },
  {
    question: 'What is the highest-paying state for ER nurses?',
    answer:
      'California leads ER nurse pay at $116,000–$125,000/year for staff nurses, driven by CNA union contracts and mandatory nurse-to-patient ratios. Washington, Oregon, New York, and Massachusetts round out the top five. For adjusted purchasing power, Washington (no state income tax) and Oregon (lower COL than California) often rank ahead of California despite lower nominal salaries.',
  },
  {
    question: 'How much do travel ER nurses make per week?',
    answer:
      'Travel ER nurses earn $2,400–$3,200/week (total package: taxable base + non-taxable housing and meal stipends). Level I trauma center contracts in high-demand markets pay at the top of this range. Weekly rates vary significantly by contract type — ask your recruiter to break out the taxable base hourly rate from the non-taxable stipends, as they have different tax and financial implications.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$116,000 – $125,000', hourlyRate: '$55.77 – $60.10/hr' },
  { label: 'Washington', avgSalary: '$105,000 – $116,000', hourlyRate: '$50.48 – $55.77/hr' },
  { label: 'Oregon', avgSalary: '$100,000 – $110,000', hourlyRate: '$48.08 – $52.88/hr' },
  { label: 'New York', avgSalary: '$96,000 – $106,000', hourlyRate: '$46.15 – $50.96/hr' },
  { label: 'Massachusetts', avgSalary: '$95,000 – $104,000', hourlyRate: '$45.67 – $50.00/hr' },
  { label: 'Colorado', avgSalary: '$82,000 – $90,000', hourlyRate: '$39.42 – $43.27/hr' },
  { label: 'Texas', avgSalary: '$80,000 – $88,000', hourlyRate: '$38.46 – $42.31/hr' },
  { label: 'Florida', avgSalary: '$76,000 – $84,000', hourlyRate: '$36.54 – $40.38/hr' },
  { label: 'National Average', avgSalary: '$92,800', hourlyRate: '$44.62/hr' },
];

const experienceData = [
  { label: 'New Grad / ER Residency (0–1 yr)', avgSalary: '$68,000 – $76,000', hourlyRate: '$32.69 – $36.54/hr' },
  { label: 'Early Career (1–3 yrs)', avgSalary: '$76,000 – $86,000', hourlyRate: '$36.54 – $41.35/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$86,000 – $100,000', hourlyRate: '$41.35 – $48.08/hr' },
  { label: 'Senior (7–12 yrs)', avgSalary: '$98,000 – $115,000', hourlyRate: '$47.12 – $55.29/hr' },
  { label: 'Expert / Charge (12+ yrs)', avgSalary: '$112,000 – $130,000', hourlyRate: '$53.85 – $62.50/hr' },
];

const compensationData = [
  { label: 'ER base salary (national avg)', avgSalary: '$92,800', hourlyRate: 'Baseline' },
  { label: 'Night shift differential (+$5/hr)', avgSalary: '+$9,360/yr', hourlyRate: '36 hrs/wk, 50 wks/yr' },
  { label: 'CEN certification stipend (+$2.50/hr)', avgSalary: '+$4,680/yr', hourlyRate: 'Applied every shift' },
  { label: 'Weekend differential (+$3/hr, 2 shifts/wk)', avgSalary: '+$2,808/yr', hourlyRate: 'Stackable with night diff' },
  { label: 'Level 1 Trauma differential (+$2.50/hr)', avgSalary: '+$4,680/yr', hourlyRate: 'Varies by system' },
  { label: 'Charge RN stipend (2x/wk at $4/hr)', avgSalary: '+$2,496/yr', hourlyRate: 'When acting as charge' },
  { label: 'Total (all stacked, nights + cert + L1)', avgSalary: '~$114,000–$118,000', hourlyRate: 'Before overtime' },
];

export default function ERNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Specialties', href: '/nursing-salary/by-specialty-2026' },
        { label: 'ER Nurse Salary 2026' },
      ]}
      h1="ER Nurse Salary 2026: Pay by State, CEN Premium, and How to Reach $100K in the ED"
      lastUpdated="May 2026"
      schemaTitle="ER Nurse Salary 2026"
      schemaDescription="Emergency room nurse salary in 2026 by state, experience, and certification — with CEN premium, trauma differentials, and travel nurse weekly rates."
      schemaUrl="/er-nurse-salary-2026"
      datePublished="2026-05-22"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Emergency room nurses earn <strong>$92,800/year ($44.62/hr)</strong> based on the latest BLS data, roughly 4%
          above the general RN average. California ER nurses exceed <strong>$116,000/year</strong>. CEN
          certification adds <strong>~$4,800/year</strong>. A Level 1 trauma ER nurse on nights with CEN can
          realistically clear <strong>$110,000–$118,000</strong> in total compensation before overtime.
        </p>
      </div>

      <Image
        src="/images/er-nurse-salary-2026-hero.webp"
        alt="Emergency room nurse in scrubs standing alert at the entrance of a busy modern hospital emergency department, professional confident posture"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Emergency nursing is one of the highest-demand specialties in acute care — and the pay reflects it.
        ER nurses earn above the general RN average at every experience level, driven by the specialty complexity
        of emergency triage, high patient volume, and 24/7 coverage requirements that produce consistent
        night-shift and overtime income. For nurses considering the ED as a specialty, or evaluating their
        current ER compensation against the market, the 2026 data tells a clear story.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Nurse Salary by State (2026)</h2>
      <SalaryTable
        title="Emergency Room Nurse Salary by State (2026)"
        headers={['State', 'Annual Salary Range', 'Hourly Rate']}
        rows={stateData}
        source="BLS OEWS May 2024 state data + NurseSalaryIntel 2026 ER specialty estimates"
      />

      <Image
        src="/images/er-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 ER nurse salary by state including California, Washington, New York, Texas, and national average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Nurse Salary by Experience Level</h2>
      <p>
        Emergency nursing salary scales closely with years of experience and specialty volume. The jump from
        new grad to mid-career is steep — ER nurses who accumulate Level 1 or Level 2 trauma volume in years
        2–5 see the most significant pay acceleration. CEN certification typically becomes achievable at 2
        years of ER experience (the eligibility threshold) and consistently moves nurses up one or two pay steps.
      </p>

      <SalaryTable
        title="ER Nurse Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 ER specialty data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Nurse Total Compensation: How It Stacks</h2>

      <Image
        src="/images/er-nurse-salary-2026-hospital.webp"
        alt="Emergency room nurse in scrubs at a triage workstation in a modern Level 1 trauma center, focused professional expression"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Base salary is only part of the ER nurse compensation picture. The table below shows how different
        premium components stack for a full-time night-shift ER nurse at a Level 1 trauma center with CEN
        certification. These are national averages — actual rates vary significantly by employer and market.
      </p>

      <SalaryTable
        title="ER Nurse Compensation Stack (Nights + CEN + Level 1, 2026)"
        headers={['Compensation Component', 'Annual Addition', 'Notes']}
        rows={compensationData}
        source="NurseSalaryIntel 2026 compensation analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">CEN Certification: The Most Direct Pay Lever</h2>
      <p>
        The Certified Emergency Nurse (CEN) credential, administered by BCEN, is the single most direct
        salary lever available to ER nurses. Eligibility requires 2 years of emergency nursing experience —
        at which point most nurses are already mid-career in the ED. The exam covers triage, trauma,
        toxicology, cardiovascular, respiratory, and neurological emergencies across a 175-question format.
      </p>
      <p>
        Beyond the stipend, CEN opens specific doors: Level 1 trauma centers often list it as preferred or
        required for charge roles, TCRN (Trauma Certified Registered Nurse) adds a second certification
        premium where available, and travel nurse agencies frequently offer premium placement to CEN-certified
        ER nurses. The combination of CEN + TNCC (Trauma Nursing Core Course) is the resume stack that
        produces the most competitive total compensation offers in emergency nursing.
      </p>

      <TravelPayDisclaimer />
      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel ER Nurse Salary (2026)</h2>
      <p>
        Travel ER nurses earn $2,400–$3,200/week (total package: taxable base + non-taxable housing and meal stipends). Level I trauma center placements in California, New York, and Washington command the top of the range. When evaluating a contract, ask the recruiter to break out the taxable base hourly rate from the non-taxable stipends — the blended rate can obscure actual taxable income, which affects Social Security, retirement contributions, and qualifying income calculations. See the <a href="/travel-nurse-vs-staff-nurse-salary-2026" className="text-primary hover:underline">Travel vs. Staff Nurse Salary guide</a> for a full comparison.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER vs. ICU: Which Specialty Pays More?</h2>
      <p>
        ICU nurses earn approximately $95,200/year based on the latest BLS data, versus $92,800 for ER nurses — a
        nominal gap of about $2,400 annually in favor of ICU. The gap widens at senior levels, where
        CCRN-certified ICU nurses at academic medical centers consistently outpace their ER counterparts
        by $5,000–$10,000 in base pay. However, ER nurses often have higher overtime earnings due to
        unpredictable census, and the weekly schedule variety of the ED makes consistent night + weekend
        differential accumulation more accessible. For nurses deciding between specialties, the pay
        difference is too small to be the deciding factor — unit culture, patient population, and career
        goals matter more.
      </p>
      <p>
        See the full comparison: <Link href="/icu-vs-er-nurse-salary-2026" className="text-primary hover:underline">ICU vs. ER Nurse Salary 2026 — Full Breakdown</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/icu-vs-er-nurse-salary-2026', label: 'ICU vs ER Nurse Salary 2026', desc: '$95,200 vs $92,800 — full breakdown' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay + CCRN premium' },
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Nurse Pay 2026', desc: 'Night pay adds $8K–$25K/yr' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'Scripts for any ER offer negotiation' },
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
        <li><a href="https://www.bcen.org/cen/" target="_blank" rel="noopener noreferrer">Board of Certification for Emergency Nursing (BCEN) — CEN Certification</a></li>
        <li><a href="https://www.ena.org/practice-resources/resource-library/salary-survey" target="_blank" rel="noopener noreferrer">Emergency Nurses Association (ENA) — Annual Salary Survey</a></li>
      </ul>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
