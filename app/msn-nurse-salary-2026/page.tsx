import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'MSN Nurse Salary 2026: FNP, PMHNP, CNM & CNS Pay',
  description:
    'MSN nurses earn $108,000–$131,000/yr in 2026 depending on specialty. FNP, PMHNP, AGNP, CNM, and CNS salary breakdown plus ROI on the MSN degree vs. BSN.',
  alternates: { canonical: 'https://nursesalaryintel.com/msn-nurse-salary-2026' },
  openGraph: {
    title: 'MSN Nurse Salary 2026: FNP, PMHNP, CNM & CNS Pay',
    description:
      'MSN nurses earn $108,000–$131,000/yr in 2026. FNP, PMHNP, AGNP, CNM, and CNS salary breakdown plus ROI on the MSN degree vs. BSN.',
    url: 'https://nursesalaryintel.com/msn-nurse-salary-2026',
  },
};

const sources = [
  { title: 'BLS OEWS May 2024 — Nurse Practitioners (SOC 29-1171, $126,470 national mean)', url: 'https://www.bls.gov/oes/current/oes291171.htm' },
  { title: 'BLS OEWS May 2024 — Nurse Midwives (SOC 29-1161, $122,450 national mean)', url: 'https://www.bls.gov/oes/current/oes291161.htm' },
  { title: 'AANP 2024 NP Compensation Survey', url: 'https://www.aanp.org' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };

const methodology =
  'MSN salary figures are derived from BLS OEWS May 2024 national and state-level data for nurse practitioners (SOC 29-1171) and nurse midwives (SOC 29-1161), supplemented by the AANP 2024 NP Compensation Survey. Role-specific ranges reflect published specialty differentials. All figures are estimates — individual compensation depends on specialty, setting, experience, and geography.';

const roleData = [
  { label: 'PMHNP (Psychiatric-Mental Health NP)', avgSalary: 'Around $121,000–$141,000/yr', hourlyRate: '~$58–$68/hr', notes: 'Highest-demand MSN role nationally' },
  { label: 'FNP (Family Nurse Practitioner)', avgSalary: 'Around $116,000–$135,000/yr', hourlyRate: '~$56–$65/hr', notes: 'Most common MSN-NP track; high volume of openings' },
  { label: 'CNM (Certified Nurse Midwife)', avgSalary: 'Around $113,000–$130,000/yr', hourlyRate: '~$54–$63/hr', notes: 'Delivery + prenatal care; hospital and birth center settings' },
  { label: 'AGNP (Adult-Gerontology NP)', avgSalary: 'Around $109,000–$126,000/yr', hourlyRate: '~$52–$61/hr', notes: 'Primary and acute care tracks; growing demand' },
  { label: 'CNS (Clinical Nurse Specialist)', avgSalary: 'Around $98,000–$118,000/yr', hourlyRate: '~$47–$57/hr', notes: 'System-level role; pay varies widely by setting' },
  { label: 'Nurse Educator (MSN)', avgSalary: 'Around $78,000–$96,000/yr', hourlyRate: '~$37–$46/hr', notes: 'Academic or hospital-based education roles' },
];

const stateData = [
  { label: 'California', avgSalary: 'Around $138,000–$160,000/yr', notes: 'PMHNP and FNP highest in US; union premiums in LA/SF' },
  { label: 'New York', avgSalary: 'Around $126,000–$148,000/yr', notes: 'NYC metro drives state average; strong PMHNP demand' },
  { label: 'Massachusetts', avgSalary: 'Around $124,000–$145,000/yr', notes: 'Full practice authority; strong academic medical centers' },
  { label: 'Washington', avgSalary: 'Around $122,000–$142,000/yr', notes: 'Full practice authority; no state income tax' },
  { label: 'Texas', avgSalary: 'Around $113,000–$132,000/yr', notes: 'Collaborative practice agreement required; no state tax' },
  { label: 'Florida', avgSalary: 'Around $108,000–$128,000/yr', notes: 'Full practice authority since 2020; growing market' },
  { label: 'National Average (NP)', avgSalary: '$126,470 (BLS May 2024)', notes: 'BLS SOC 29-1171 national mean' },
];

const roiData = [
  { label: 'BSN RN (National Mean)', avgSalary: '$89,580/yr', notes: 'BLS OEWS May 2024 national mean, SOC 29-1141' },
  { label: 'MSN — NP Entry (1–2 yrs post-grad)', avgSalary: 'Around $108,000–$118,000/yr', notes: 'Typically 2 years to reach full competency compensation' },
  { label: 'MSN — NP Mid-Career (5+ yrs)', avgSalary: 'Around $124,000–$140,000/yr', notes: 'Specialty and geographic premium fully realized' },
  { label: 'Annual pay increase over BSN', avgSalary: 'Around $18,000–$50,000/yr more', notes: 'Wider range reflects specialty choice and geography' },
  { label: 'Avg MSN program cost (online)', avgSalary: 'Around $30,000–$60,000 total', notes: 'AACN survey; public programs at lower end' },
  { label: 'Break-even (typical)', avgSalary: 'Around 1.5–3 years post-graduation', notes: 'Depends on salary increase and loan burden' },
];

const faqs = [
  {
    question: 'How much do MSN nurses make in 2026?',
    answer:
      'MSN nurses earn $98,000–$141,000/year in 2026, depending on specialty and role. Nurse practitioners (FNP, PMHNP, AGNP) earn the most at the graduate nursing level, with PMHNPs averaging $121,000–$141,000. The national mean for nurse practitioners was $126,470 per BLS OEWS May 2024.',
  },
  {
    question: 'Which MSN specialty pays the most?',
    answer:
      'PMHNP (Psychiatric-Mental Health Nurse Practitioner) is currently the highest-paying MSN-level specialty, averaging $121,000–$141,000/year nationally, driven by a critical shortage of mental health providers. FNP is a close second at $116,000–$135,000. CRNAs earn more but require a DNP, not just an MSN.',
  },
  {
    question: 'Is an MSN worth the investment financially?',
    answer:
      'For most nurses, yes. An MSN adds $18,000–$50,000/year over BSN RN pay. Online MSN programs average $30,000–$60,000 in tuition. At a $25,000/year salary increase, the break-even is 1.5–2.5 years post-graduation even accounting for loan repayment.',
  },
  {
    question: 'What states pay MSN nurses the most?',
    answer:
      'California leads nationally, with MSN-level NPs earning $138,000–$160,000/year. New York and Massachusetts follow at $124,000–$148,000. Washington combines high pay ($122,000–$142,000) with no state income tax and full practice authority — a strong combination for NPs.',
  },
  {
    question: 'Can MSN nurses work independently?',
    answer:
      'It depends on the state. Over 28 states plus DC grant full practice authority to nurse practitioners, meaning NPs can evaluate, diagnose, treat, and prescribe without a physician agreement. California, New York, and Florida (since 2020) are full-practice authority states. Texas still requires collaborative agreements.',
  },
  {
    question: 'What is the difference between an MSN and a DNP salary?',
    answer:
      'In most clinical NP roles, MSN and DNP holders earn comparable salaries — the DNP does not automatically add pay. The salary advantage of a DNP is most pronounced for CRNA (requiring DNP by AANA mandate), executive leadership roles, and academic positions.',
  },
  {
    question: 'How long does it take to become an MSN nurse?',
    answer:
      'Most MSN programs take 2–3 years for BSN-prepared nurses attending part-time online. Accelerated full-time tracks can be completed in 18–24 months. Clinical hour requirements for NP tracks typically range from 500–700 supervised hours.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'MSN Nurse Salary 2026', item: 'https://nursesalaryintel.com/msn-nurse-salary-2026/' },
  ],
};

export default function MSNNurseSalaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Salary Guides', href: '/blog' },
          { label: 'MSN Nurse Salary 2026' },
        ]}
        h1="MSN Nurse Salary 2026: FNP, PMHNP, CNM & CNS Pay Guide"
        lastUpdated="June 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="MSN Nurse Salary 2026"
        schemaDescription="MSN nurses earn $98,000–$141,000/year in 2026 depending on specialty. FNP, PMHNP, AGNP, CNM, and CNS salary breakdown with ROI analysis versus BSN pay."
        schemaUrl="/msn-nurse-salary-2026"
        datePublished="2026-06-01"
        faqs={faqs}
      >
        <Image
          src="/images/msn-nurse-salary-2026-hero.webp"
          alt="Advanced practice nurse in professional attire consulting with a patient in a modern outpatient clinic office, representing the MSN-level nursing career path"
          width={1200}
          height={630}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="rounded-xl w-full"
          priority
        />

        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            MSN nurses earn <strong>$98,000–$141,000/year</strong> in 2026 depending on specialty and role. PMHNPs lead at $121,000–$141,000. The national mean for nurse practitioners was <strong>$126,470</strong> per BLS OEWS May 2024. Most MSN tracks break even on degree cost within 1.5–3 years through the pay increase over BSN RN wages.
          </p>
        </div>

        <p>
          A Master of Science in Nursing (MSN) is the entry-level credential for most advanced practice registered nurse (APRN) roles — family nurse practitioner (FNP), psychiatric-mental health NP (PMHNP), certified nurse midwife (CNM), adult-gerontology NP (AGNP), and clinical nurse specialist (CNS). Each track carries a different salary ceiling and job market outlook, and the financial case varies significantly based on specialty and state.
        </p>

        <h2>MSN Nurse Salary by Role / Specialty (2026)</h2>
        <SalaryTable
          title="MSN Nurse Salary by Specialty / Role (National Average, 2026)"
          headers={['Role / Specialty', 'Annual Salary', 'Hourly Rate', 'Market Notes']}
          rows={roleData.map(r => [r.label, r.avgSalary, r.hourlyRate, r.notes])}
          source="BLS OEWS May 2024: NPs (SOC 29-1171) national mean $126,470; CNMs (SOC 29-1161) national mean $122,450. Role-specific ranges from BLS + AANP 2024 survey. Rounded to nearest $1,000."
        />

        <Image
          src="/images/msn-nurse-salary-2026-comparison.png"
          alt="Bar chart comparing MSN nurse salaries by role including FNP, PMHNP, AGNP, CNM, CNS, and BSN RN national average in 2026"
          width={800}
          height={450}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>MSN Nurse Salary by State (2026)</h2>
        <SalaryTable
          title="MSN NP / CNM Salary by State (2026 Est.)"
          headers={['State', 'Annual Salary Range', 'Notes']}
          rows={stateData.map(r => [r.label, r.avgSalary, r.notes])}
          source="BLS OEWS May 2024 state-level NP data + AANP 2024 Compensation Survey. Ranges reflect NP/CNM roles broadly. Rounded to nearest $1,000."
        />

        <Image
          src="/images/msn-nurse-salary-2026-hospital.webp"
          alt="Nurse practitioner in scrubs with a stethoscope consulting with a patient in a modern outpatient exam room, warm clinical lighting"
          width={600}
          height={800}
          sizes="(max-width: 1024px) 100vw, 448px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>MSN vs. BSN Salary: Is the Degree Worth It?</h2>
        <SalaryTable
          title="MSN ROI: Pay Increase vs. Degree Cost"
          headers={['Data Point', 'Value', 'Notes']}
          rows={roiData.map(r => [r.label, r.avgSalary, r.notes])}
          source="BSN mean: BLS OEWS May 2024. MSN program cost: AACN 2023 survey. Break-even assumes $25,000–$30,000 annual pay increase and $45,000 loan at 5% interest."
        />

        <p>
          The break-even point improves significantly with employer tuition reimbursement ($5,250/year tax-free maximum) and Public Service Loan Forgiveness (PSLF) for nurses at qualifying nonprofit hospitals. PSLF can eliminate remaining MSN loan balance after 10 years of qualifying payments.
        </p>

        <h2>PMHNP: The Highest-Paying MSN Track</h2>
        <p>
          The United States faces a severe shortage of mental health providers. PMHNP demand has outpaced supply since 2020, translating directly into pay: $121,000–$141,000 nationally, with telepsychiatry positions reaching $130,000–$160,000. HRSA NHSC programs offer up to $50,000 in tax-free loan repayment for 2-year service at qualifying sites. See the full{' '}
          <Link href="/pmhnp-salary-2026" className="text-primary underline">PMHNP Salary guide</Link> for a complete breakdown.
        </p>

        <h2>Related Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: 'Highest-demand MSN track — full national breakdown' },
            { href: '/fnp-salary-2026', label: 'FNP Salary 2026', desc: 'Most common NP specialty — state and setting breakdown' },
            { href: '/dnp-salary-2026', label: 'DNP Salary 2026', desc: 'MSN vs. DNP — when the extra degree pays off' },
            { href: '/bsn-nurse-salary-career-paths-2026', label: 'BSN Salary & Career Paths', desc: 'BSN as foundation — specialties and advancement' },
          ].map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
            >
              <p className="font-semibold text-primary text-sm">{label}</p>
              <p className="text-on-surface-variant text-xs mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </SEOPageLayout>
    </>
  );
}
