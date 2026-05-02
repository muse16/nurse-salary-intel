import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'FNP Salary 2026: How Much Do Family Nurse Practitioners Make?',
  description:
    'FNPs earn $122,000/yr ($58.65/hr) on average in 2026. See family nurse practitioner salary by state, setting, and how FNP compares to PMHNP, ACNP, and CRNA.',
  alternates: { canonical: 'https://nursesalaryintel.com/fnp-salary-2026' },
  openGraph: {
    title: 'FNP Salary 2026: Family Nurse Practitioner Pay by State',
    description: 'Family NP salary by state, employer type, and specialty comparison for 2026.',
    url: 'https://nursesalaryintel.com/fnp-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do FNPs make in 2026?',
    answer: 'Family Nurse Practitioners (FNPs) earn an average of $122,000/year ($58.65/hr) nationally in 2026. FNP salaries range from $105,000 in lower-paying states to $155,000+ in California. FNPs are the most common NP specialty and serve as primary care providers in both urban and rural settings.',
  },
  {
    question: 'Is FNP the highest-paying NP specialty?',
    answer: 'No — FNP is among the lower-paid NP specialties. PMHNPs ($138,000/yr) and Acute Care NPs ($145,000/yr) earn more. FNPs earn slightly less because primary care billing rates are generally lower than specialty or acute care. However, FNP is the most versatile credential and opens the widest range of practice settings.',
  },
  {
    question: 'How much more does an FNP make than a staff RN?',
    answer: 'FNPs earn $122,000/year vs. $89,010/year for staff RNs — a difference of $32,990/year (37% more). The MSN degree typically takes 2–3 years and costs $30,000–$70,000, with the salary premium recovering that investment in about 1–2 years.',
  },
  {
    question: 'Can FNPs work in urgent care?',
    answer: 'Yes — urgent care is one of the most common settings for FNPs. Urgent care FNPs typically earn $115,000–$135,000/year and often have more schedule flexibility than hospital-employed NPs. Some urgent care groups offer shift-based pay ($65–$90/hr) that can yield higher total compensation for part-time or PRN work.',
  },
  {
    question: 'What state pays FNPs the most?',
    answer: 'California pays FNPs the most at $155,000/year in 2026, followed by Washington ($144,000) and New Jersey ($140,000). Full practice authority states consistently pay more, as FNPs can operate independently and bill directly.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$155,000', hourlyRate: '$74.52/hr' },
  { label: 'Washington', avgSalary: '$144,000', hourlyRate: '$69.23/hr' },
  { label: 'New Jersey', avgSalary: '$140,000', hourlyRate: '$67.31/hr' },
  { label: 'New York', avgSalary: '$137,000', hourlyRate: '$65.87/hr' },
  { label: 'Massachusetts', avgSalary: '$134,000', hourlyRate: '$64.42/hr' },
  { label: 'Oregon', avgSalary: '$128,000', hourlyRate: '$61.54/hr' },
  { label: 'National Average', avgSalary: '$122,000', hourlyRate: '$58.65/hr' },
  { label: 'Texas', avgSalary: '$112,000', hourlyRate: '$53.85/hr' },
  { label: 'Florida', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'Mississippi', avgSalary: '$100,000', hourlyRate: '$48.08/hr' },
];

const bySetting = [
  { label: 'Private Practice (independent)', avgSalary: '$145,000–$190,000', hourlyRate: 'Full practice authority states' },
  { label: 'Federally Qualified Health Center', avgSalary: '$120,000–$140,000', hourlyRate: 'PSLF eligible; loan forgiveness' },
  { label: 'Urgent Care', avgSalary: '$115,000–$135,000', hourlyRate: 'Shift-based pay common' },
  { label: 'Hospital Outpatient Clinic', avgSalary: '$118,000–$132,000', hourlyRate: 'Employed model' },
  { label: 'Rural Health Clinic', avgSalary: '$125,000–$145,000', hourlyRate: 'Shortage area premium' },
  { label: 'Telehealth (primary care)', avgSalary: '$110,000–$130,000', hourlyRate: 'Growing rapidly' },
];

export default function FNPSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'NP Salary', href: '/nurse-practitioner-salary-2026' },
        { label: 'FNP Salary 2026' },
      ]}
      h1="FNP Salary 2026: How Much Do Family Nurse Practitioners Make?"
      lastUpdated="May 2026"
      schemaTitle="FNP Salary 2026"
      schemaDescription="Family Nurse Practitioner salary by state, setting, and specialty comparison in 2026."
      schemaUrl="/fnp-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>FNPs earn $122,000/year ($58.65/hr)</strong> nationally in 2026.
          California FNPs lead at <strong>$155,000/year</strong>.
          FNP is the most common NP specialty — and while not the highest-paid, it&apos;s the most
          versatile, with settings ranging from urgent care to rural health to telehealth.
        </p>
      </div>

      <p>
        Family Nurse Practitioners are the primary care backbone of communities across the US, particularly
        in rural and underserved areas where physician shortages are acute. FNP is the most commonly held
        NP credential, representing nearly 70% of all practicing NPs.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">FNP Salary by State (2026)</h2>
      <SalaryTable
        title="Family NP Average Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">FNP Salary by Work Setting</h2>
      <p>
        Independent private practice offers the highest earnings for FNPs, but requires business management
        skills and capital. FQHCs and rural health clinics offer a strong combination of competitive pay,
        loan forgiveness, and meaningful work — especially for FNPs with significant student debt.
      </p>
      <SalaryTable
        title="FNP Pay by Work Setting (2026)"
        headers={['Setting', 'Annual Salary Range', 'Notes']}
        rows={bySetting}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">FNP vs. Other NP Specialties</h2>
      <p>
        FNP earns less than PMHNP and ACNP but more than most RN specialties. For nurses choosing between
        NP tracks, the specialty decision is one of the most financially significant career choices — a
        PMHNP earns $16,000/year more than an FNP at the national average, and that gap compounds over
        a career.
      </p>
      <p>
        See the full comparison: <Link href="/nurse-practitioner-salary-2026" className="text-primary hover:underline">NP salary by specialty 2026</Link>
        {' '}or compare to <Link href="/pmhnp-salary-2026" className="text-primary hover:underline">PMHNP salary</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nurse-practitioner-salary-2026', label: 'NP Salary Overview 2026', desc: 'All 8 NP specialties compared' },
          { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: 'Highest-growth NP specialty' },
          { href: '/agnp-salary-2026', label: 'AGNP Salary 2026', desc: 'Adult-Gerontology NP pay' },
          { href: '/crna-salary-2026', label: 'CRNA Salary 2026', desc: '$214K/yr — top APRN credential' },
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
