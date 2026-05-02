import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'PMHNP Salary 2026: How Much Do Psychiatric NPs Make?',
  description:
    'PMHNPs earn $138,000/yr ($66.35/hr) on average in 2026 — the fastest-growing NP specialty. See pay by state, setting, and how PMHNP compares to FNP and CRNA.',
  alternates: { canonical: 'https://nursesalaryintel.com/pmhnp-salary-2026' },
  openGraph: {
    title: 'PMHNP Salary 2026: Psychiatric NP Pay by State & Setting',
    description: 'Psychiatric Mental Health NP salary by state, telehealth vs. inpatient, and career path comparison.',
    url: 'https://nursesalaryintel.com/pmhnp-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do PMHNPs make in 2026?',
    answer: 'PMHNPs earn an average of $138,000/year ($66.35/hr) nationally in 2026 — roughly $12,000–$16,000/year more than FNPs. Top earners in California and New York exceed $170,000/year. Telehealth PMHNPs in private practice can earn $180,000–$220,000/year.',
  },
  {
    question: 'Is PMHNP the highest-paying NP specialty?',
    answer: 'PMHNPs are among the highest-paid NP specialties in 2026, alongside Acute Care NPs (ACNPs). PMHNPs have seen the fastest salary growth of any NP specialty due to the national mental health provider shortage — demand far exceeds supply in most states.',
  },
  {
    question: 'How much do telehealth PMHNPs make?',
    answer: 'Telehealth PMHNPs in full practice authority states earn $150,000–$220,000/year, with independent contractors on platforms like Cerebral, Done, and Talkiatry billing $90–$130/hr. Some high-volume telehealth PMHNPs earn $250,000+ with a full patient panel.',
  },
  {
    question: 'How long does it take to become a PMHNP?',
    answer: 'Becoming a PMHNP typically takes 2–3 years after RN licensure: a Master of Science in Nursing (MSN) or Doctor of Nursing Practice (DNP) with a psychiatric/mental health track. Many programs offer hybrid or online formats with local clinical placements.',
  },
  {
    question: 'What states pay PMHNPs the most?',
    answer: 'California ($172,000/yr), Washington ($158,000/yr), and New York ($155,000/yr) pay PMHNPs the most in 2026. All three have full or reduced NP practice authority and severe psychiatry provider shortages that push salaries higher.',
  },
  {
    question: 'Can PMHNPs prescribe controlled substances?',
    answer: 'Yes — PMHNPs can prescribe Schedule II–V controlled substances (including stimulants, benzodiazepines, and opioids) in most states, either independently or with physician collaboration. This prescriptive authority is a major component of the specialty\'s value and salary premium.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$172,000', hourlyRate: '$82.69/hr' },
  { label: 'Washington', avgSalary: '$158,000', hourlyRate: '$75.96/hr' },
  { label: 'New York', avgSalary: '$155,000', hourlyRate: '$74.52/hr' },
  { label: 'Massachusetts', avgSalary: '$150,000', hourlyRate: '$72.12/hr' },
  { label: 'New Jersey', avgSalary: '$148,000', hourlyRate: '$71.15/hr' },
  { label: 'Oregon', avgSalary: '$144,000', hourlyRate: '$69.23/hr' },
  { label: 'National Average', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'Texas', avgSalary: '$125,000', hourlyRate: '$60.10/hr' },
  { label: 'Florida', avgSalary: '$120,000', hourlyRate: '$57.69/hr' },
  { label: 'Alabama', avgSalary: '$112,000', hourlyRate: '$53.85/hr' },
];

const bySetting = [
  { label: 'Private Practice (independent)', avgSalary: '$165,000–$220,000', hourlyRate: 'Highest earning potential' },
  { label: 'Telehealth Platform (FT)', avgSalary: '$150,000–$185,000', hourlyRate: 'W2 or 1099 structures' },
  { label: 'Community Mental Health Center', avgSalary: '$130,000–$150,000', hourlyRate: 'PSLF eligible (nonprofit)' },
  { label: 'Inpatient Psychiatric Hospital', avgSalary: '$135,000–$155,000', hourlyRate: 'Shift differentials apply' },
  { label: 'VA / Federal Health System', avgSalary: '$130,000–$160,000', hourlyRate: 'Strong benefits + PSLF' },
  { label: 'Outpatient Clinic (employed)', avgSalary: '$125,000–$145,000', hourlyRate: 'Most common setting' },
];

const npComparison = [
  { label: 'Women\'s Health NP (WHNP)', avgSalary: '$118,000', hourlyRate: 'OB/GYN focus' },
  { label: 'Family NP (FNP)', avgSalary: '$122,000', hourlyRate: 'Primary care generalist' },
  { label: 'Adult-Gerontology NP (AGNP)', avgSalary: '$126,000', hourlyRate: 'Primary & acute care' },
  { label: 'Psychiatric NP (PMHNP)', avgSalary: '$138,000', hourlyRate: 'Mental health specialist' },
  { label: 'Acute Care NP (ACNP)', avgSalary: '$145,000', hourlyRate: 'Inpatient / ICU focus' },
  { label: 'CRNA', avgSalary: '$214,000', hourlyRate: 'Highest APRN credential' },
];

export default function PMHNPSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nurse Practitioner Salary', href: '/nurse-practitioner-salary-2026' },
        { label: 'PMHNP Salary 2026' },
      ]}
      h1="PMHNP Salary 2026: How Much Do Psychiatric Nurse Practitioners Make?"
      lastUpdated="May 2026"
      schemaTitle="PMHNP Salary 2026"
      schemaDescription="Psychiatric Mental Health Nurse Practitioner salary by state, setting, and specialty comparison in 2026."
      schemaUrl="/pmhnp-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>PMHNPs earn $138,000/year ($66.35/hr)</strong> nationally in 2026 —
          the <strong>fastest-growing NP specialty</strong> driven by the mental health provider shortage.
          California PMHNPs average <strong>$172,000/year</strong>.
          Telehealth and private practice PMHNPs can reach <strong>$180,000–$220,000/year</strong>.
        </p>
      </div>

      <p>
        The Psychiatric Mental Health Nurse Practitioner (PMHNP) specialty has seen the sharpest salary
        growth of any advanced practice role in the last five years. With a national shortage of psychiatrists
        and mental health providers, PMHNPs are in high demand — and compensation reflects it.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">PMHNP Salary by State (2026)</h2>
      <p>
        Full practice authority states dominate the top of the rankings. California and Washington —
        where PMHNPs can run independent practices without physician oversight — pay $20,000–$34,000/year
        above the national average.
      </p>
      <SalaryTable
        title="PMHNP Average Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">PMHNP Salary by Work Setting</h2>
      <p>
        Private practice and telehealth offer the highest earnings for PMHNPs, but employed positions at
        VA medical centers and community mental health centers offer stability, benefits, and Public Service
        Loan Forgiveness eligibility that can be worth $10,000+ per year in effective compensation.
      </p>
      <SalaryTable
        title="PMHNP Pay by Work Setting (2026)"
        headers={['Setting', 'Annual Salary Range', 'Notes']}
        rows={bySetting}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">PMHNP vs. Other NP Specialties</h2>
      <SalaryTable
        title="NP Salary by Specialty — Ranked"
        headers={['NP Specialty', 'Avg Annual Salary', 'Notes']}
        rows={npComparison}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Telehealth and the PMHNP Salary Ceiling</h2>
      <p>
        The rapid expansion of telehealth mental health platforms has created a high-income track for PMHNPs
        that didn&apos;t exist five years ago. Full-time telehealth PMHNPs billing 25–30 patient appointments
        per week on platforms like Talkiatry, Brightside, or Done can earn $150,000–$185,000 as W2 employees.
        Independent contractors managing their own patient panel through telehealth typically earn more,
        but carry overhead and business management responsibilities.
      </p>
      <p>
        In full practice authority states, experienced PMHNPs in private practice regularly exceed
        $200,000/year — a ceiling that few employed positions can match.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related NP Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nurse-practitioner-salary-2026', label: 'NP Salary Overview 2026', desc: 'All NP specialties compared' },
          { href: '/fnp-salary-2026', label: 'FNP Salary 2026', desc: 'Family NP — most common specialty' },
          { href: '/agnp-salary-2026', label: 'AGNP Salary 2026', desc: 'Adult-Gerontology NP pay' },
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
