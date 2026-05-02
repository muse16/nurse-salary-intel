import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'AGNP Salary 2026: Adult-Gerontology NP Pay by State & Track',
  description:
    'AGNPs earn $126,000/yr ($60.58/hr) on average in 2026. See adult-gerontology NP salary by state, primary vs. acute care track, and how AGNP compares to FNP and PMHNP.',
  alternates: { canonical: 'https://nursesalaryintel.com/agnp-salary-2026' },
  openGraph: {
    title: 'AGNP Salary 2026: Adult-Gerontology NP Pay',
    description: 'AGNP salary by state, primary vs. acute care track, and NP specialty comparison.',
    url: 'https://nursesalaryintel.com/agnp-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do AGNPs make in 2026?',
    answer: 'Adult-Gerontology Nurse Practitioners (AGNPs) earn an average of $126,000/year ($60.58/hr) nationally in 2026. The AGNP credential covers two tracks: primary care (AGNP-PC) and acute care (AGNP-AC). Acute care AGNPs earn more on average ($138,000–$145,000/yr) due to inpatient hospital complexity.',
  },
  {
    question: 'What is the difference between AGNP-PC and AGNP-AC salary?',
    answer: 'AGNP-AC (Acute Care) earns significantly more than AGNP-PC (Primary Care) — roughly $15,000–$20,000/year more. AGNP-AC practitioners work in hospitals managing complex inpatient cases, while AGNP-PC practitioners typically work in outpatient settings. Both credentials require an MSN or DNP.',
  },
  {
    question: 'Is AGNP better than FNP?',
    answer: 'It depends on your career goals. AGNP-AC pays more and focuses on complex adult/older adult care in hospital settings. FNP is more versatile — you can practice across all ages in primary care, urgent care, and many outpatient settings. If you want to work in ICU, hospitalist medicine, or specialty clinics, AGNP-AC is the stronger credential.',
  },
  {
    question: 'What states pay AGNPs the most?',
    answer: 'California ($158,000/yr), Washington ($146,000/yr), and New York ($142,000/yr) pay AGNPs the most in 2026. Full practice authority and high cost-of-living drive the premium in these states.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$158,000', hourlyRate: '$75.96/hr' },
  { label: 'Washington', avgSalary: '$146,000', hourlyRate: '$70.19/hr' },
  { label: 'New York', avgSalary: '$142,000', hourlyRate: '$68.27/hr' },
  { label: 'Massachusetts', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'New Jersey', avgSalary: '$136,000', hourlyRate: '$65.38/hr' },
  { label: 'National Average', avgSalary: '$126,000', hourlyRate: '$60.58/hr' },
  { label: 'Texas', avgSalary: '$114,000', hourlyRate: '$54.81/hr' },
  { label: 'Florida', avgSalary: '$110,000', hourlyRate: '$52.88/hr' },
];

const byTrack = [
  { label: 'AGNP-AC (Acute Care) — Hospital', avgSalary: '$138,000–$148,000', hourlyRate: 'ICU, hospitalist, specialty' },
  { label: 'AGNP-AC (Acute Care) — Procedural', avgSalary: '$145,000–$165,000', hourlyRate: 'Cardiology, pulm, GI' },
  { label: 'AGNP-PC (Primary Care) — Private', avgSalary: '$130,000–$155,000', hourlyRate: 'FPA states' },
  { label: 'AGNP-PC (Primary Care) — Employed', avgSalary: '$115,000–$130,000', hourlyRate: 'Outpatient clinic' },
  { label: 'AGNP-PC (Primary Care) — FQHC', avgSalary: '$118,000–$135,000', hourlyRate: 'PSLF eligible' },
  { label: 'AGNP-PC — Telehealth', avgSalary: '$108,000–$125,000', hourlyRate: 'Rapid growth setting' },
];

export default function AGNPSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'NP Salary', href: '/nurse-practitioner-salary-2026' },
        { label: 'AGNP Salary 2026' },
      ]}
      h1="AGNP Salary 2026: Adult-Gerontology NP Pay by State and Track"
      lastUpdated="May 2026"
      schemaTitle="AGNP Salary 2026"
      schemaDescription="Adult-Gerontology Nurse Practitioner salary by state, primary care vs. acute care track, and NP specialty comparison in 2026."
      schemaUrl="/agnp-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>AGNPs earn $126,000/year ($60.58/hr)</strong> on average in 2026.
          Acute care track AGNPs (AGNP-AC) earn <strong>$138,000–$148,000/year</strong> in hospital settings.
          Primary care track AGNPs (AGNP-PC) earn <strong>$115,000–$155,000/year</strong> depending on
          practice setting and state. California leads at <strong>$158,000/year</strong>.
        </p>
      </div>

      <p>
        The Adult-Gerontology NP credential comes in two tracks — primary care (AGNP-PC) and acute care
        (AGNP-AC) — which serve very different practice environments and carry meaningfully different salaries.
        Here&apos;s how the two tracks compare and where pay is highest.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">AGNP Salary by State (2026)</h2>
      <SalaryTable
        title="AGNP Average Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">AGNP-AC vs. AGNP-PC Salary by Setting</h2>
      <p>
        Acute care AGNPs working in procedural specialties (cardiology, pulmonology, GI) consistently earn
        the most — their billing productivity and procedural involvement justify compensation above standard
        employed NP rates. Primary care AGNPs in private practice in full practice authority states also
        approach acute care earnings.
      </p>
      <SalaryTable
        title="AGNP Salary by Track and Setting"
        headers={['Track & Setting', 'Annual Salary Range', 'Notes']}
        rows={byTrack}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">AGNP vs. FNP: Which Pays More?</h2>
      <p>
        On a primary care basis, FNP and AGNP-PC salaries are nearly identical — both average $122,000–$126,000/year
        nationally. The real salary divergence comes when comparing AGNP-AC (acute care) to FNP: acute care
        AGNPs earn $12,000–$23,000/year more, driven by inpatient complexity and hospital billing rates.
      </p>
      <p>
        FNP offers broader scope — you can see pediatric and OB patients that AGNPs cannot. AGNP-AC offers
        a clearer path into hospital-based specialty practice with higher earning potential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related NP Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nurse-practitioner-salary-2026', label: 'NP Salary Overview 2026', desc: 'All specialties compared' },
          { href: '/fnp-salary-2026', label: 'FNP Salary 2026', desc: 'Family NP — primary care generalist' },
          { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: 'Psychiatric NP — fastest growth' },
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
