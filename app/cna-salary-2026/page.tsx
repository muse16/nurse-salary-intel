import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'CNA Salary 2026: How Much Do CNAs Make Per Hour & Year?',
  description:
    'CNAs earn $38,200/yr ($18.37/hr) on average in 2026. See CNA pay by state, setting, and experience — plus how much more LPNs and RNs make.',
  alternates: { canonical: 'https://nursesalaryintel.com/cna-salary-2026' },
  openGraph: {
    title: 'CNA Salary 2026: How Much Do CNAs Make?',
    description: 'CNA pay by state, work setting, and experience level — with career ladder comparison to LPN and RN.',
    url: 'https://nursesalaryintel.com/cna-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do CNAs make per hour in 2026?',
    answer: 'CNAs earn an average of $18.37/hour ($38,200/year) nationally in 2026, according to BLS data. Hourly rates range from $14/hr in the lowest-paying states to $24+/hr in California and Washington. Hospital CNAs typically earn $2–$4/hr more than nursing home CNAs.',
  },
  {
    question: 'How much does a CNA make a year?',
    answer: 'The average CNA annual salary is $38,200/year nationally in 2026. Top earners in high-cost states like California ($51,000/yr), Washington ($48,000/yr), and Alaska ($47,000/yr) significantly exceed the national average.',
  },
  {
    question: 'How much more does an LPN make than a CNA?',
    answer: 'LPNs earn approximately $55,000/year vs. $38,200/year for CNAs — a difference of $16,800/year (44% more). The LPN credential requires 12–18 months of additional schooling but pays for itself in under 1 year of the salary difference.',
  },
  {
    question: 'What state pays CNAs the most?',
    answer: 'California pays CNAs the most at an average of $51,000/year ($24.52/hr) in 2026. Washington ($48,000), Alaska ($47,000), and New York ($45,000) round out the top four highest-paying states for CNAs.',
  },
  {
    question: 'Do hospital CNAs make more than nursing home CNAs?',
    answer: 'Yes — hospital CNAs typically earn $2–$5/hr more than CNAs in nursing homes or long-term care facilities. The difference reflects higher acuity, faster pace, and stronger union representation in hospital settings.',
  },
  {
    question: 'Is becoming a CNA worth it financially?',
    answer: 'A CNA license is worth it as a starting point or career pivot, but not as a long-term endpoint. The fastest financial move is using CNA experience to enter an LPN or RN bridge program — the salary jump to LPN ($16,800/yr more) or RN ($51,000/yr more) dramatically outpaces any CNA raise.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$51,000', hourlyRate: '$24.52/hr' },
  { label: 'Washington', avgSalary: '$48,000', hourlyRate: '$23.08/hr' },
  { label: 'Alaska', avgSalary: '$47,000', hourlyRate: '$22.60/hr' },
  { label: 'New York', avgSalary: '$45,000', hourlyRate: '$21.63/hr' },
  { label: 'Massachusetts', avgSalary: '$44,000', hourlyRate: '$21.15/hr' },
  { label: 'Oregon', avgSalary: '$42,000', hourlyRate: '$20.19/hr' },
  { label: 'National Average', avgSalary: '$38,200', hourlyRate: '$18.37/hr' },
  { label: 'Texas', avgSalary: '$33,000', hourlyRate: '$15.87/hr' },
  { label: 'Florida', avgSalary: '$32,500', hourlyRate: '$15.63/hr' },
  { label: 'Mississippi', avgSalary: '$28,000', hourlyRate: '$13.46/hr' },
];

const bySetting = [
  { label: 'Hospital (inpatient)', avgSalary: '$42,500', hourlyRate: '$20.43/hr' },
  { label: 'Home Health / Hospice', avgSalary: '$38,800', hourlyRate: '$18.65/hr' },
  { label: 'Skilled Nursing Facility (SNF)', avgSalary: '$37,500', hourlyRate: '$18.03/hr' },
  { label: 'Assisted Living', avgSalary: '$35,000', hourlyRate: '$16.83/hr' },
  { label: 'Nursing Home / LTC', avgSalary: '$34,200', hourlyRate: '$16.44/hr' },
];

const careerLadder = [
  { label: 'CNA', avgSalary: '$38,200/yr', hourlyRate: '$18.37/hr' },
  { label: 'LPN/LVN', avgSalary: '$55,000/yr', hourlyRate: '$26.44/hr — +$16,800/yr' },
  { label: 'RN (ADN)', avgSalary: '$78,000/yr', hourlyRate: '$37.50/hr — +$39,800/yr vs CNA' },
  { label: 'RN (BSN)', avgSalary: '$86,000/yr', hourlyRate: '$41.35/hr — +$47,800/yr vs CNA' },
  { label: 'Nurse Practitioner (NP)', avgSalary: '$126,000/yr', hourlyRate: '$60.58/hr — +$87,800/yr vs CNA' },
];

export default function CNASalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'CNA Salary 2026' },
      ]}
      h1="CNA Salary 2026: How Much Do CNAs Make Per Hour and Per Year?"
      lastUpdated="May 2026"
      schemaTitle="CNA Salary 2026"
      schemaDescription="Average CNA salary by state, work setting, and experience level in 2026."
      schemaUrl="/cna-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>CNAs earn $38,200/year ($18.37/hr)</strong> on average nationally in 2026.
          Hospital CNAs earn more ($42,500/yr) than nursing home CNAs ($34,200/yr).
          California tops the state rankings at <strong>$51,000/year</strong>.
          The jump to LPN adds <strong>$16,800/year</strong>; the jump to RN adds <strong>$39,800/year</strong>.
        </p>
      </div>

      <p>
        CNAs are the backbone of bedside care — but CNA pay varies significantly by state, employer type,
        and shift. Here&apos;s exactly what CNAs earn in 2026, where pay is highest, and how the career ladder
        stacks up financially.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNA Salary by State (2026)</h2>
      <p>
        California CNAs earn 33% more than the national average — driven by the state&apos;s minimum wage laws,
        strong union contracts, and mandatory staffing ratios that increase demand for all bedside staff.
      </p>
      <SalaryTable
        title="CNA Average Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNA Salary by Work Setting</h2>
      <p>
        Hospital CNAs consistently out-earn their counterparts in nursing homes and assisted living.
        If maximizing CNA pay is the goal, targeting inpatient hospital positions — especially ICU step-down,
        emergency department, or labor &amp; delivery — yields the best hourly rates.
      </p>
      <SalaryTable
        title="CNA Pay by Employer Type (2026)"
        headers={['Work Setting', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={bySetting}
        source="BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNA vs. LPN vs. RN: The Career Ladder</h2>
      <p>
        The most impactful financial decision a CNA can make is pursuing the LPN or RN credential. The salary
        jump is immediate and dramatic — an LPN earns $16,800/year more than a CNA, and an RN earns nearly
        $40,000–$48,000/year more. Both credentials can be earned while working as a CNA.
      </p>
      <SalaryTable
        title="Nursing Career Ladder — Salary by Credential"
        headers={['Credential', 'Avg Annual Salary', 'Hourly Rate & Premium']}
        rows={careerLadder}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />
      <p>
        See the full comparison:{' '}
        <Link href="/lpn-salary-2026" className="text-primary hover:underline">LPN salary 2026</Link>
        {' '}and{' '}
        <Link href="/entry-level-nurse-salary" className="text-primary hover:underline">entry-level RN salary 2026</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Increase Your CNA Pay</h2>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Target hospital employers.</strong> The $4,300/year gap between hospital and nursing home CNA pay is significant. Applying to inpatient hospital positions is the fastest way to raise CNA earnings without additional credentials.</li>
        <li><strong>Pursue specialty certifications.</strong> CCRN-certified nursing assistants, geriatric care certifications (CNA-G), and medication aide certifications (where permitted) add $1–$3/hr at many facilities.</li>
        <li><strong>Work nights and weekends.</strong> Night differentials ($1–$3/hr) and weekend premiums apply to CNAs at most hospitals, adding $2,000–$5,000/year.</li>
        <li><strong>Negotiate at offer stage.</strong> CNA pay bands have more range than most new hires realize — asking for the top of the posted range is reasonable, especially with 2+ years of experience.</li>
        <li><strong>Start an LPN bridge program.</strong> Most LPN programs run 12–18 months. The $16,800/year salary jump means the program pays for itself within the first year of LPN employment.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/lpn-salary-2026', label: 'LPN Salary 2026', desc: 'The next step up from CNA' },
          { href: '/entry-level-nurse-salary', label: 'New Grad RN Salary 2026', desc: 'What RNs make starting out' },
          { href: '/nurse-practitioner-salary-2026', label: 'Nurse Practitioner Salary 2026', desc: 'Top of the nursing career ladder' },
          { href: '/nursing-salary/by-specialty-2026', label: 'Nursing Salary by Specialty', desc: 'Full credential and specialty breakdown' },
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
