import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'DNP Salary 2026: Doctor of Nursing Practice Pay by Specialty',
  description:
    'DNP-prepared nurses earn $118,000–$214,000/year. See DNP salary by specialty, the premium over MSN, and whether the doctoral degree pays for itself.',
  alternates: { canonical: 'https://nursesalaryintel.com/dnp-salary-2026' },
  openGraph: {
    title: 'DNP Salary 2026: Doctor of Nursing Practice Pay',
    description: 'DNP salary by specialty and comparison to MSN-NP — is the doctorate worth it in 2026?',
    url: 'https://nursesalaryintel.com/dnp-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much does a DNP make in 2026?',
    answer: 'DNP-prepared nurses earn $118,000–$214,000/year depending on specialty. DNP-CRNAs are the highest earners at $214,000/year on average. DNP-NPs in clinical specialties average $128,000–$148,000/year. DNP nurse administrators and educators typically earn $110,000–$125,000/year.',
  },
  {
    question: 'Does a DNP get paid more than an MSN?',
    answer: 'Yes — but the premium ranges from under $5,000/year to over $25,000/year depending on specialty. DNP-NPs earn roughly $5,000–$15,000/year more than MSN-NPs in comparable clinical roles. The doctoral premium is strongest in academic and administrative positions ($15,000–$25,000/year) and weakest in high-demand clinical specialties where the MSN already commands a high salary.',
  },
  {
    question: 'Is a DNP worth it financially?',
    answer: 'For most clinical NPs, the DNP\'s ROI is modest at the bedside — but it unlocks leadership, academic, and independent practice positions that often pay $15,000–$25,000/year more. DNP programs cost $25,000–$60,000 on average. At a $10,000/year salary premium, break-even is 3–6 years. For CRNAs, DNP programs are increasingly required and the premium is built into the base salary.',
  },
  {
    question: 'What is the highest paying DNP specialty?',
    answer: 'Certified Registered Nurse Anesthetist (CRNA) is by far the highest-paying DNP specialty at $214,000/year average nationally. DNP programs for CRNAs are now required by accreditation standards (ACNA mandate). Outside of anesthesia, cardiology and psychiatric-mental health NP specialties offer the strongest compensation for DNP-prepared nurses.',
  },
  {
    question: 'Can a DNP be called a doctor?',
    answer: 'Yes — holders of a Doctor of Nursing Practice degree have earned a doctoral credential and may use the title "Dr." in professional settings. In clinical practice, the appropriate use of "Dr." varies by state and facility policy. Several states require DNPs to disclose they are not physicians when using the title in patient care settings.',
  },
  {
    question: 'How long does it take to earn a DNP?',
    answer: 'Post-BSN DNP programs take 3–4 years. Post-MSN (BSN to DNP bridge) programs take 2–3 years for students who already hold a master\'s in nursing. Most programs require 1,000+ supervised clinical hours. Many working nurses complete DNP programs online while employed full-time, which extends the timeline to 3–5 years.',
  },
];

const specialtyData = [
  { label: 'DNP-CRNA (Anesthesia)', avgSalary: '$214,000', hourlyRate: '$102.88/hr' },
  { label: 'DNP-NP Cardiology', avgSalary: '$148,000', hourlyRate: '$71.15/hr' },
  { label: 'DNP-NP Psych / PMHNP', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'DNP-NP Family (FNP)', avgSalary: '$130,000', hourlyRate: '$62.50/hr' },
  { label: 'DNP Nurse Executive / CNO', avgSalary: '$125,000', hourlyRate: '$60.10/hr' },
  { label: 'DNP Nurse Educator (academic)', avgSalary: '$118,000', hourlyRate: '$56.73/hr' },
  { label: 'MSN-NP (comparison baseline)', avgSalary: '$126,820', hourlyRate: '$60.97/hr' },
];

const stateData = [
  { label: 'California', avgSalary: '$155,000+', hourlyRate: 'CRNA demand drives avg up' },
  { label: 'Massachusetts', avgSalary: '$148,000', hourlyRate: '$71.15/hr' },
  { label: 'Washington', avgSalary: '$144,000', hourlyRate: '$69.23/hr' },
  { label: 'New York', avgSalary: '$140,000', hourlyRate: '$67.31/hr' },
  { label: 'National Average (all DNP roles)', avgSalary: '$130,000', hourlyRate: '$62.50/hr' },
  { label: 'Texas', avgSalary: '$122,000', hourlyRate: '$58.65/hr' },
  { label: 'Florida', avgSalary: '$118,000', hourlyRate: '$56.73/hr' },
];

const roiData = [
  { label: 'DNP program cost (avg)', avgSalary: '$35,000–$55,000', hourlyRate: 'Post-MSN programs are lower' },
  { label: 'Annual salary premium over MSN-NP', avgSalary: '$5,000–$15,000/yr', hourlyRate: 'Clinical roles' },
  { label: 'Annual premium — academic / admin', avgSalary: '$15,000–$25,000/yr', hourlyRate: 'Leadership positions' },
  { label: 'Break-even (clinical premium)', avgSalary: '4–8 years', hourlyRate: '$10K/yr premium scenario' },
  { label: 'Break-even (leadership premium)', avgSalary: '2–3 years', hourlyRate: '$20K/yr premium scenario' },
];

export default function DNPSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'DNP Salary 2026' },
      ]}
      h1="DNP Salary 2026: What Doctor of Nursing Practice Nurses Really Earn"
      lastUpdated="May 2026"
      schemaTitle="DNP Salary 2026"
      schemaDescription="DNP salary by specialty, state, and comparison to MSN-NP in 2026 — including CRNA, FNP, PMHNP, and nurse executive roles."
      schemaUrl="/dnp-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/dnp-salary-2026-hero.webp"
        alt="Doctor of nursing practice in white coat reviewing clinical notes at a hospital workstation, professional academic healthcare setting"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>DNP-prepared nurses earn $118,000–$214,000/year</strong> in 2026 depending on specialty.
          DNP-CRNAs are the top earners at <strong>$214,000/year</strong>. Clinical DNP-NPs earn
          <strong> $5,000–$15,000/year more</strong> than MSN-NPs in comparable roles — with the largest
          premium in leadership and academic positions.
        </p>
      </div>

      <p>
        The Doctor of Nursing Practice is the fastest-growing doctoral credential in U.S. healthcare.
        Whether the degree pays for itself depends entirely on which path you take it down. A DNP-CRNA
        earns more than most physicians. A DNP nurse educator at a community college earns considerably
        less than a staff RN in California. Specialty selection matters far more than the letters after
        your name.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">DNP Salary by Specialty (2026)</h2>
      <p>
        The widest salary range of any advanced practice credential runs through the DNP. Anesthesia
        sits in a category of its own. Outside of CRNA, cardiology NP and psychiatric-mental health NP
        positions offer the strongest compensation for doctoral-prepared clinicians.
      </p>
      <SalaryTable
        title="DNP Salary by Specialty — 2026 Estimates"
        headers={['DNP Role / Specialty', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={specialtyData}
        source="BLS OEWS May 2024 (NP SOC 29-1171, CRNA SOC 29-1151) + NurseSalaryIntel 2026 estimates"
      />

      <Image
        src="/images/dnp-salary-2026-comparison.png"
        alt="Bar chart comparing DNP nurse salary by specialty in 2026, from nurse educator through CRNA anesthesia with MSN comparison baseline"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">DNP Salary by State</h2>
      <p>
        State salary averages for DNP nurses skew upward because CRNA compensation is included in the
        figure. California&apos;s average reflects the density of high-paying hospital CRNA positions.
        For DNP-NPs specifically (excluding anesthesia), the state spread is more consistent with
        general NP salary data.
      </p>
      <SalaryTable
        title="DNP Nurse Average Salary by State"
        headers={['State', 'Avg Annual Salary (all DNP roles)', 'Notes']}
        rows={stateData}
        source="BLS OEWS May 2024 + NurseSalaryIntel 2026 estimates"
      />

      <Image
        src="/images/dnp-salary-2026-hospital.webp"
        alt="Doctor of nursing practice in professional attire leading a team meeting in a hospital conference room, collaborative academic clinical setting"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Is the DNP Worth It? The Financial Reality</h2>
      <p>
        DNP programs cost $35,000–$55,000 on average (post-MSN programs run lower, post-BSN programs
        run higher). The clinical salary premium over an MSN-NP is $5,000–$15,000/year in most roles —
        meaning break-even is 4–8 years for the median program cost and premium. That math is modest
        unless you factor in the non-salary benefits: leadership eligibility, academic faculty positions,
        full practice authority in more settings, and CRNA program requirements.
      </p>
      <SalaryTable
        title="DNP ROI Analysis"
        headers={['Factor', 'Value', 'Notes']}
        rows={roiData}
        source="AACN DNP data 2024 + NurseSalaryIntel salary analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">DNP vs. MSN: When the Degree Pays Off Fastest</h2>
      <p>
        The DNP pays off fastest in three scenarios. First, CRNA: DNP is increasingly required by
        accreditation standards (ACNA) and the income starts at $190,000+. Second, nurse executive
        and CNO roles: hospitals increasingly require a doctoral degree for chief nursing officer
        positions, where the premium over MSN-prepared candidates is $15,000–$25,000/year. Third,
        academic positions at research universities: tenure-track faculty roles typically require a
        doctoral credential and pay $15,000–$25,000/year more than community college instructor positions.
      </p>
      <p>
        For staff NPs in primary care or urgent care settings, the DNP adds credential credibility
        but the salary premium is modest. If your goal is clinical practice income maximization without
        administrative ambition, an MSN-NP with years of experience will often out-earn a new DNP grad.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">DNP Salary Negotiation Tips</h2>
      <p>
        DNP-prepared nurses have measurable leverage: the degree signals leadership capability that
        many healthcare systems are willing to pay for. Key negotiation angles include the ability
        to supervise NP students (generates revenue for the practice), eligibility for CNO and
        director tracks (future-proofing for the employer), and reduced onboarding costs compared
        to a physician hire for equivalent scope. Raise these points explicitly — most HR departments
        will not volunteer the premium.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/crna-salary-2026', label: 'CRNA Salary 2026', desc: 'The top-earning DNP specialty' },
          { href: '/msn-nurse-salary-2026', label: 'MSN Nurse Salary 2026', desc: 'FNP, PMHNP, CNM — MSN vs. DNP pay comparison' },
          { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: 'Psychiatric NP pay breakdown' },
          { href: '/bsn-nurse-salary-career-paths-2026', label: 'BSN to DNP Career Path', desc: 'Full nursing career ladder' },
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

      <MethodologyBox />
    </SEOPageLayout>
  );
}
