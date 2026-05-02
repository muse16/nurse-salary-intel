import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Nurse Practitioner Salary 2026: $126K Avg + Pay by Specialty & State',
  description:
    'NPs earn $126,000/yr ($60.58/hr) on average in 2026. See NP salary by specialty (FNP, PMHNP, ACNP), state rankings, and how NP pay compares to RN and physician.',
  alternates: { canonical: 'https://nursesalaryintel.com/nurse-practitioner-salary-2026' },
  openGraph: {
    title: 'Nurse Practitioner Salary 2026: $126K Avg',
    description: 'NP salary by specialty, state, and setting — with FNP, PMHNP, ACNP, and CRNA comparisons.',
    url: 'https://nursesalaryintel.com/nurse-practitioner-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do nurse practitioners make in 2026?',
    answer: 'Nurse practitioners earn an average of $126,000/year ($60.58/hr) nationally in 2026, according to BLS OEWS data. NP salaries range from $105,000 in lower-paying states to $160,000+ in California. Specialty and practice setting significantly affect earnings within the same state.',
  },
  {
    question: 'What is the highest-paying NP specialty?',
    answer: 'Acute Care NPs (ACNP) and Psychiatric/Mental Health NPs (PMHNP) are the highest-paid NP specialties in 2026, averaging $135,000–$145,000/year. PMHNPs have seen the fastest salary growth due to the national mental health provider shortage. Family NPs (FNPs) — the most common specialty — average $122,000/year.',
  },
  {
    question: 'How much more does an NP make than an RN?',
    answer: 'NPs earn $126,000/year on average vs. $89,010/year for RNs — a difference of $36,990/year (41% more). The MSN degree required for NP practice typically takes 2–3 years beyond RN licensure and costs $30,000–$80,000, but the salary premium pays for graduate school within 1–2 years.',
  },
  {
    question: 'Can nurse practitioners make $200,000 a year?',
    answer: 'Yes — in high-paying specialties and states. PMHNPs in California, New York, and Washington can exceed $200,000/year, especially in private practice or telehealth. CRNAs (a separate APRN credential) average $214,000/year nationally and routinely exceed $200,000.',
  },
  {
    question: 'Do NPs make more in private practice?',
    answer: 'Often, yes. NPs in independent or group private practice can earn $140,000–$180,000/year, compared to $120,000–$135,000 in employed hospital settings. However, private practice income varies more widely and comes with overhead costs and business management responsibilities.',
  },
  {
    question: 'Which state pays nurse practitioners the most?',
    answer: 'California pays NPs the most at $161,000/year ($77.40/hr) in 2026. Washington ($148,000), New Jersey ($145,000), and New York ($142,000) round out the top four. All four states have strong union contracts or independent NP practice authority that supports higher pay.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$161,000', hourlyRate: '$77.40/hr' },
  { label: 'Washington', avgSalary: '$148,000', hourlyRate: '$71.15/hr' },
  { label: 'New Jersey', avgSalary: '$145,000', hourlyRate: '$69.71/hr' },
  { label: 'New York', avgSalary: '$142,000', hourlyRate: '$68.27/hr' },
  { label: 'Massachusetts', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'Oregon', avgSalary: '$132,000', hourlyRate: '$63.46/hr' },
  { label: 'National Average', avgSalary: '$126,000', hourlyRate: '$60.58/hr' },
  { label: 'Texas', avgSalary: '$116,000', hourlyRate: '$55.77/hr' },
  { label: 'Florida', avgSalary: '$112,000', hourlyRate: '$53.85/hr' },
  { label: 'Alabama', avgSalary: '$105,000', hourlyRate: '$50.48/hr' },
];

const bySpecialty = [
  { label: 'Acute Care NP (ACNP)', avgSalary: '$145,000', hourlyRate: 'Hospital inpatient focus' },
  { label: 'Psychiatric NP (PMHNP)', avgSalary: '$138,000', hourlyRate: 'Fastest salary growth' },
  { label: 'Neonatal NP (NNP)', avgSalary: '$134,000', hourlyRate: 'NICU / Level III centers' },
  { label: 'Certified Nurse Midwife (CNM)', avgSalary: '$128,000', hourlyRate: 'L&D and women\'s health' },
  { label: 'Adult-Gerontology NP (AGNP)', avgSalary: '$126,000', hourlyRate: 'Primary & acute care tracks' },
  { label: 'Family NP (FNP)', avgSalary: '$122,000', hourlyRate: 'Most common NP specialty' },
  { label: 'Pediatric NP (PNP)', avgSalary: '$120,000', hourlyRate: 'Outpatient and hospital' },
  { label: 'Women\'s Health NP (WHNP)', avgSalary: '$118,000', hourlyRate: 'OB/GYN and primary care' },
];

const npVsOthers = [
  { label: 'CNA', avgSalary: '$38,200/yr', hourlyRate: '$18.37/hr' },
  { label: 'LPN/LVN', avgSalary: '$55,000/yr', hourlyRate: '$26.44/hr' },
  { label: 'RN (BSN)', avgSalary: '$86,000/yr', hourlyRate: '$41.35/hr' },
  { label: 'Nurse Practitioner (NP)', avgSalary: '$126,000/yr', hourlyRate: '$60.58/hr — +$40K vs RN' },
  { label: 'CRNA', avgSalary: '$214,000/yr', hourlyRate: '$102.88/hr — highest APRN' },
];

export default function NursePractitionerSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Nurse Practitioner Salary 2026' },
      ]}
      h1="Nurse Practitioner Salary 2026: How Much Do NPs Make?"
      lastUpdated="May 2026"
      schemaTitle="Nurse Practitioner Salary 2026"
      schemaDescription="Average nurse practitioner salary by specialty, state, and setting in 2026."
      schemaUrl="/nurse-practitioner-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Nurse practitioners earn $126,000/year ($60.58/hr)</strong> nationally in 2026 —
          <strong> $37,000/year more than staff RNs</strong>.
          California NPs lead at <strong>$161,000/year</strong>.
          PMHNPs and ACNPs are the highest-paid specialties at $138,000–$145,000/year.
          CRNAs — a separate APRN credential — average $214,000/year.
        </p>
      </div>

      <p>
        Nurse practitioners are the fastest-growing segment of the healthcare workforce, with full practice
        authority in 27 states. NP salaries have grown steadily as the shortage of primary care providers
        expands NP scope and bargaining power. Here&apos;s the full 2026 picture.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Salary by Specialty (2026)</h2>
      <p>
        Specialty matters as much as state. Acute Care and Psychiatric NPs command a 10–15% premium over
        Family NPs, reflecting higher complexity of care and greater provider shortage in those areas.
      </p>
      <SalaryTable
        title="Nurse Practitioner Salary by Specialty"
        headers={['NP Specialty', 'Avg Annual Salary', 'Notes']}
        rows={bySpecialty}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />
      <div className="not-prose flex flex-wrap gap-3 mt-2">
        <Link href="/fnp-salary-2026" className="text-primary text-sm font-semibold hover:underline">FNP salary breakdown →</Link>
        <Link href="/pmhnp-salary-2026" className="text-primary text-sm font-semibold hover:underline">PMHNP salary breakdown →</Link>
        <Link href="/agnp-salary-2026" className="text-primary text-sm font-semibold hover:underline">AGNP salary breakdown →</Link>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Salary by State (2026)</h2>
      <p>
        States with full practice authority (no physician oversight requirement) tend to pay NPs more —
        independent practice means more patient panels, more billing, and stronger negotiating leverage.
        California, Washington, and Oregon all have full or reduced practice authority.
      </p>
      <SalaryTable
        title="Nurse Practitioner Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP vs. RN vs. CRNA: Full Career Ladder</h2>
      <SalaryTable
        title="Nursing Career Ladder — Credential Salary Comparison"
        headers={['Credential', 'Avg Annual Salary', 'Hourly Rate']}
        rows={npVsOthers}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Full Practice Authority and NP Pay</h2>
      <p>
        NPs in full practice authority (FPA) states earn 8–12% more on average than NPs in restricted
        practice states, because FPA allows independent clinic ownership, direct billing, and larger
        patient panels without required physician supervision hours. If you&apos;re choosing between job offers
        in different states, FPA status is a meaningful salary factor.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related NP Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/fnp-salary-2026', label: 'FNP Salary 2026', desc: 'Family Nurse Practitioner pay by state' },
          { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: 'Psychiatric NP — fastest salary growth' },
          { href: '/agnp-salary-2026', label: 'AGNP Salary 2026', desc: 'Adult-Gerontology NP pay breakdown' },
          { href: '/crna-salary-2026', label: 'CRNA Salary 2026', desc: 'Highest-paid APRN at $214K/yr' },
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
    </SEOPageLayout>
  );
}
