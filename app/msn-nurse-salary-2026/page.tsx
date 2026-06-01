import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';
import Image from 'next/image';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'MSN Nurse Salary 2026: FNP, PMHNP, CNM & CNS Pay',
  description:
    'MSN nurses earn $108,000–$131,000/yr in 2026 depending on specialty. FNP, PMHNP, AGNP, CNM, and CNS salary breakdown plus ROI on the MSN degree vs. BSN.',
  alternates: { canonical: 'https://nursesalaryintel.com/msn-nurse-salary-2026' },
  openGraph: {
    title: 'MSN Nurse Salary 2026: FNP, PMHNP, CNM & CNS Pay',
    description:
      'MSN nurses earn $108,000–$131,000/yr in 2026 depending on specialty. FNP, PMHNP, AGNP, CNM, and CNS salary breakdown plus ROI on the MSN vs. BSN.',
    url: 'https://nursesalaryintel.com/msn-nurse-salary-2026',
    type: 'article',
  },
};

const roleData = [
  { label: 'PMHNP (Psychiatric-Mental Health NP)', salary: '$121,000 – $141,000', hourly: '$58 – $68/hr', notes: 'Highest-demand MSN role nationally' },
  { label: 'FNP (Family Nurse Practitioner)', salary: '$116,000 – $135,000', hourly: '$56 – $65/hr', notes: 'Most common MSN-NP track; high volume of openings' },
  { label: 'CNM (Certified Nurse Midwife)', salary: '$113,000 – $130,000', hourly: '$54 – $63/hr', notes: 'Delivery + prenatal care; hospital and birth center settings' },
  { label: 'AGNP (Adult-Gerontology NP)', salary: '$109,000 – $126,000', hourly: '$52 – $61/hr', notes: 'Primary and acute care tracks; growing demand' },
  { label: 'CNS (Clinical Nurse Specialist)', salary: '$98,000 – $118,000', hourly: '$47 – $57/hr', notes: 'System-level role; pay varies widely by setting' },
  { label: 'Nurse Educator (MSN)', salary: '$78,000 – $96,000', hourly: '$37 – $46/hr', notes: 'Academic or hospital-based education roles' },
  { label: 'Nurse Administrator (MSN)', salary: '$88,000 – $115,000', hourly: '$42 – $55/hr', notes: 'Management/leadership track; wide range by level' },
];

const stateData = [
  { label: 'California', salary: '$138,000 – $160,000', notes: 'PMHNP and FNP highest in the US; union premiums in LA/SF' },
  { label: 'New York', salary: '$126,000 – $148,000', notes: 'NYC metro drives state average; strong PMHNP demand' },
  { label: 'Massachusetts', salary: '$124,000 – $145,000', notes: 'Full practice authority; strong academic medical centers' },
  { label: 'Washington', salary: '$122,000 – $142,000', notes: 'Full practice authority; no state income tax' },
  { label: 'Texas', salary: '$113,000 – $132,000', notes: 'Collaborative practice agreement required; no state tax' },
  { label: 'Florida', salary: '$108,000 – $128,000', notes: 'Full practice authority since 2020; growing market' },
  { label: 'National Average (NP/CNM)', salary: '$126,000 (BLS May 2024)', notes: 'BLS SOC 29-1171 + 29-1161 national means' },
];

const roiData = [
  { label: 'BSN RN (National Mean)', salary: '$89,580/yr', notes: 'BLS OEWS May 2024 national mean, SOC 29-1141' },
  { label: 'MSN — NP Entry (1–2 yrs post-grad)', salary: '$108,000 – $118,000/yr', notes: 'Typically 2 years to reach full competency compensation' },
  { label: 'MSN — NP Mid-Career (5+ yrs)', salary: '$124,000 – $140,000/yr', notes: 'Specialty and geographic premium fully realized' },
  { label: 'Annual pay increase over BSN', salary: '$18,000 – $50,000/yr more', notes: 'Wider range reflects specialty choice and geography' },
  { label: 'Avg. MSN program cost (online)', salary: '$30,000 – $60,000 total', notes: 'AACN survey; public programs lower end' },
  { label: 'Break-even (typical)', salary: '1.5 – 3 years post-graduation', notes: 'Depends on salary increase and loan burden' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much do MSN nurses make in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MSN nurses earn $98,000–$141,000/year in 2026, depending on specialty and role. Nurse practitioners (FNP, PMHNP, AGNP) earn the most at the graduate nursing level, with PMHNPs averaging the highest at $121,000–$141,000. The national mean for nurse practitioners was $126,000 per BLS OEWS May 2024.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which MSN specialty pays the most?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PMHNP (Psychiatric-Mental Health Nurse Practitioner) is currently the highest-paying MSN-level specialty, averaging $121,000–$141,000/year nationally, driven by a critical shortage of mental health providers. FNP is a close second at $116,000–$135,000. CRNAs earn more but require a DNP, not just an MSN.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an MSN worth the investment financially?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most nurses, yes. An MSN adds $18,000–$50,000/year over BSN RN pay. Online MSN programs average $30,000–$60,000 in tuition. At a $25,000/year salary increase, the break-even point is 1.5–2.5 years post-graduation — even accounting for loan repayment. PMHNP and FNP tracks offer the clearest ROI given current demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states pay MSN nurses the most?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'California leads nationally, with MSN-level NPs earning $138,000–$160,000/year. New York and Massachusetts follow at $124,000–$148,000. Washington state combines high pay ($122,000–$142,000) with no state income tax and full practice authority — a strong combination for NPs. Texas and Florida offer lower gross pay but also no state income tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can MSN nurses work independently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the state. Over 28 states plus DC grant full practice authority to nurse practitioners, meaning NPs can evaluate, diagnose, treat, and prescribe without a physician agreement. States like California, New York, and Florida (since 2020) are full-practice authority. Texas and Florida still require collaborative agreements, which affects solo practice options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an MSN and a DNP salary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most clinical NP roles, MSN and DNP holders earn comparable salaries — the DNP does not automatically add pay. The salary advantage of a DNP is most pronounced for CRNA (requiring DNP by 2025 AANA mandate), executive leadership roles, and academic positions. For FNP, PMHNP, and CNM practice, the MSN remains the primary credential and salary benchmark.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to become an MSN nurse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most MSN programs take 2–3 years for BSN-prepared nurses attending part-time online. Accelerated full-time tracks can be completed in 18–24 months. MSN-entry programs for non-nurses (like ABSN+MSN pathways) take 3–4 years total. Clinical hour requirements for NP tracks typically range from 500–700 supervised hours.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'MSN Nurse Salary 2026', item: 'https://nursesalaryintel.com/msn-nurse-salary-2026' },
  ],
};

export default function MSNNurseSalaryPage() {
  return (
    <SEOPageLayout
      title="MSN Nurse Salary 2026"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'MSN Nurse Salary 2026', href: '/msn-nurse-salary-2026' },
      ]}
      lastUpdated="June 2026"
      schemaTitle="MSN Nurse Salary 2026"
      schemaDescription="MSN nurses earn $98,000–$141,000/year in 2026 depending on specialty. FNP, PMHNP, AGNP, CNM, and CNS salary breakdown with ROI analysis versus BSN pay."
      schemaUrl="/msn-nurse-salary-2026"
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Image */}
      <Image
        src="/images/msn-nurse-salary-2026-hero.webp"
        alt="Advanced practice nurse in professional attire reviewing patient chart in a modern clinical office, representing the MSN-level nursing career path"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 my-6 border border-outline-variant">
        <p className="text-on-surface">
          <strong>MSN nurse salary in 2026:</strong> <strong>$98,000–$141,000/year</strong> depending on specialty and role. PMHNPs earn the most at $121,000–$141,000. The national mean for nurse practitioners was <strong>$126,000</strong> per BLS OEWS May 2024. Most MSN tracks produce a break-even on degree cost within 1.5–3 years of graduation through the pay increase over BSN RN wages.
        </p>
      </div>

      <p>
        A Master of Science in Nursing (MSN) is the entry-level credential for most advanced practice registered nurse (APRN) roles — family nurse practitioner (FNP), psychiatric-mental health NP (PMHNP), certified nurse midwife (CNM), adult-gerontology NP (AGNP), and clinical nurse specialist (CNS). Each track carries a different salary ceiling and job market outlook, and the financial case for pursuing an MSN varies significantly based on the specialty and state where you practice.
      </p>

      <h2>MSN Nurse Salary by Role / Specialty (2026)</h2>
      <p>
        PMHNP currently commands the highest average pay among MSN tracks, driven by a nationwide shortage of mental health providers. FNP is the most common track and offers strong pay with maximum job availability. CNM compensation is closely tied to obstetric volume and hospital affiliation.
      </p>
      <SalaryTable
        title="MSN Nurse Salary by Specialty / Role (National Average, 2026)"
        headers={['Role / Specialty', 'Annual Salary', 'Hourly Rate', 'Market Notes']}
        rows={roleData.map(r => [r.label, r.salary, r.hourly, r.notes])}
        source="BLS OEWS May 2024: NPs (SOC 29-1171) national mean $126,470; CNMs (SOC 29-1161) national mean $122,450. Role-specific ranges derived from BLS + AANP 2024 survey. Rounded to nearest $1,000."
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
      <p>
        California sets the ceiling for MSN nurse pay nationally — driven by CNA union contracts, high cost of living, and aggressive demand from large academic health systems. Washington and Massachusetts combine high pay with full practice authority, making them particularly attractive for NPs who want to practice independently or own a practice.
      </p>
      <SalaryTable
        title="MSN NP / CNM Salary by State (2026 Est.)"
        headers={['State', 'Annual Salary Range', 'Notes']}
        rows={stateData.map(r => [r.label, r.salary, r.notes])}
        source="BLS OEWS May 2024 state-level NP data + AANP 2024 Compensation Survey. Ranges reflect NP/CNM roles broadly. Rounded to nearest $1,000."
      />

      {/* Photorealistic Inline Image */}
      <Image
        src="/images/msn-nurse-salary-2026-hospital.webp"
        alt="Advanced practice nurse in scrubs consulting with a patient in a modern outpatient clinic, representing the clinical role of an MSN-level nurse practitioner"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>MSN vs. BSN Salary: Is the Degree Worth It?</h2>
      <p>
        The financial case for an MSN is strong for most nurses, particularly those pursuing NP tracks. The table below illustrates the typical return on investment based on national salary data and average program costs.
      </p>
      <SalaryTable
        title="MSN ROI: Pay Increase vs. Degree Cost"
        headers={['Data Point', 'Value', 'Notes']}
        rows={roiData.map(r => [r.label, r.salary, r.notes])}
        source="BSN mean: BLS OEWS May 2024. MSN program cost: AACN 2023 survey. Break-even assumes $25,000–$30,000 annual pay increase and $45,000 loan at 5% interest."
      />

      <p>
        The break-even point improves significantly with employer tuition reimbursement programs ($5,250/year tax-free maximum under IRS rules) and Public Service Loan Forgiveness (PSLF) for nurses at qualifying nonprofit hospitals. A nurse who uses PSLF while working at a 501(c)(3) hospital can have remaining MSN loan balance forgiven after 10 years of qualifying payments — dramatically improving the financial case.
      </p>

      <h2>PMHNP: The Highest-Paying MSN Track Right Now</h2>
      <p>
        The United States faces a severe shortage of mental health providers. PMHNP demand has outpaced supply since 2020, and job postings for PMHNPs frequently go unfilled for months in rural areas and underserved communities. This shortage translates directly into pay:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li>National average: $121,000–$141,000/year</li>
        <li>Telepsychiatry positions: $130,000–$160,000/year (often with remote flexibility)</li>
        <li>Rural or underserved area bonuses: $10,000–$30,000 additional via HRSA NHSC programs</li>
        <li>Loan repayment: NHSC PMHNP program offers up to $50,000 in tax-free loan repayment for 2-year service at qualifying sites</li>
      </ul>
      <p>
        For nurses considering the MSN, PMHNP offers the combination of high pay, scheduling flexibility, and meaningful patient impact that makes it the most attractive current track from a financial standpoint. See the full{' '}
        <Link href="/pmhnp-salary-2026" className="text-primary underline">
          PMHNP Salary guide
        </Link>{' '}
        for a complete breakdown.
      </p>

      <h2>Full Practice Authority and Independent Practice</h2>
      <p>
        As of 2026, over 28 states plus Washington DC grant full practice authority (FPA) to nurse practitioners. FPA allows NPs to evaluate, diagnose, treat, and prescribe without a physician collaborative agreement — opening the door to independent practice ownership. States with both FPA and no state income tax (Washington, Nevada, Florida, Texas — though TX requires a collaborative agreement) are particularly attractive for NPs who want to build a practice.
      </p>
      <p>
        NPs in independent practice can earn significantly above employed NP wages. A primary care NP practice billing 30 patients/day at $150 average reimbursement can generate $1.35M in annual revenue. After overhead (50–60%), a solo NP practice owner can net $150,000–$250,000+ — well above employed NP rates in most markets.
      </p>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: "Highest-demand MSN track — full national breakdown" },
          { href: '/fnp-salary-2026', label: 'FNP Salary 2026', desc: 'Most common NP specialty — state and setting breakdown' },
          { href: '/dnp-salary-2026', label: 'DNP Salary 2026', desc: 'MSN vs. DNP — when the extra degree pays off' },
          { href: '/bsn-nurse-salary-career-paths-2026', label: 'BSN Salary & Career Paths', desc: 'BSN as a foundation — specialties and advancement' },
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

      <MethodologyBox />

      <div className="text-sm text-on-surface-variant mt-8 space-y-1">
        <p><strong>Sources:</strong></p>
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1171 (Nurse Practitioners, $126,470 national mean) and SOC 29-1161 (Nurse Midwives, $122,450 national mean). <a href="https://www.bls.gov/oes/current/oes291171.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>American Association of Nurse Practitioners (AANP), 2024 NP Compensation Survey. <a href="https://www.aanp.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aanp.org</a></p>
        <p>American Association of Colleges of Nursing (AACN), 2023 Nursing Faculty Salaries and Graduate Program Tuition Survey. <a href="https://www.aacnnursing.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aacnnursing.org</a></p>
      </div>
    </SEOPageLayout>
  );
}
