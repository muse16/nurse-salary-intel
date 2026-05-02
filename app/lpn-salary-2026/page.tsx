import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'LPN Salary 2026: How Much Do LPNs Make Per Hour & Year?',
  description:
    'LPNs earn $55,000/yr ($26.44/hr) on average in 2026. See LPN pay by state, setting, and how it compares to CNA and RN — plus the fastest path to higher pay.',
  alternates: { canonical: 'https://nursesalaryintel.com/lpn-salary-2026' },
  openGraph: {
    title: 'LPN Salary 2026: How Much Do LPNs Make?',
    description: 'LPN/LVN pay by state, work setting, and career ladder comparison to CNA and RN.',
    url: 'https://nursesalaryintel.com/lpn-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do LPNs make per hour in 2026?',
    answer: 'LPNs earn an average of $26.44/hour ($55,000/year) nationally in 2026. Hourly rates range from $20/hr in lower-paying states to $34+/hr in California. Hospital LPNs and those in home health typically earn more than nursing home LPNs.',
  },
  {
    question: 'How much does an LPN make a year?',
    answer: 'The average LPN annual salary is $55,000/year nationally in 2026. California LPNs average $70,000/year; Mississippi LPNs average $42,000/year. Experience and work setting significantly impact earnings within the same state.',
  },
  {
    question: 'How much more does an RN make than an LPN?',
    answer: 'RNs earn approximately $78,000–$86,000/year vs. $55,000/year for LPNs — a difference of $23,000–$31,000/year. The RN credential requires 2–4 additional years of education but typically pays for itself within 2 years of the wage premium.',
  },
  {
    question: 'What is the difference between LPN and LVN salary?',
    answer: 'LPN (Licensed Practical Nurse) and LVN (Licensed Vocational Nurse) are the same credential — LVN is the term used in California and Texas; all other states use LPN. Salaries are equivalent for the same role and location regardless of which title is used.',
  },
  {
    question: 'What state pays LPNs the most?',
    answer: 'Alaska pays LPNs the most at $62,000/year ($29.81/hr) in 2026, followed by California ($70,000), Massachusetts ($66,000), and Washington ($64,000). High cost-of-living states dominate the top of the rankings.',
  },
  {
    question: 'Is LPN worth it over CNA?',
    answer: 'Yes — LPNs earn $16,800/year more than CNAs on average, and the LPN program takes 12–18 months. The salary difference pays for a typical LPN program cost ($10,000–$20,000) within the first year of employment. It is one of the best ROI moves in healthcare.',
  },
];

const stateData = [
  { label: 'Alaska', avgSalary: '$62,000', hourlyRate: '$29.81/hr' },
  { label: 'California', avgSalary: '$70,000', hourlyRate: '$33.65/hr' },
  { label: 'Massachusetts', avgSalary: '$66,000', hourlyRate: '$31.73/hr' },
  { label: 'Washington', avgSalary: '$64,000', hourlyRate: '$30.77/hr' },
  { label: 'New York', avgSalary: '$60,000', hourlyRate: '$28.85/hr' },
  { label: 'Oregon', avgSalary: '$58,000', hourlyRate: '$27.88/hr' },
  { label: 'National Average', avgSalary: '$55,000', hourlyRate: '$26.44/hr' },
  { label: 'Texas', avgSalary: '$49,000', hourlyRate: '$23.56/hr' },
  { label: 'Florida', avgSalary: '$47,000', hourlyRate: '$22.60/hr' },
  { label: 'Mississippi', avgSalary: '$42,000', hourlyRate: '$20.19/hr' },
];

const bySetting = [
  { label: 'Home Health Agency', avgSalary: '$58,500', hourlyRate: '$28.13/hr' },
  { label: 'Hospital (inpatient)', avgSalary: '$57,000', hourlyRate: '$27.40/hr' },
  { label: 'Physician / Outpatient Office', avgSalary: '$54,000', hourlyRate: '$25.96/hr' },
  { label: 'Skilled Nursing Facility (SNF)', avgSalary: '$53,500', hourlyRate: '$25.72/hr' },
  { label: 'Nursing Home / LTC', avgSalary: '$52,000', hourlyRate: '$25.00/hr' },
  { label: 'Correctional Facility', avgSalary: '$60,000', hourlyRate: '$28.85/hr' },
];

const careerLadder = [
  { label: 'CNA', avgSalary: '$38,200/yr', hourlyRate: '$18.37/hr' },
  { label: 'LPN/LVN', avgSalary: '$55,000/yr', hourlyRate: '$26.44/hr — +$16,800/yr vs CNA' },
  { label: 'RN (ADN)', avgSalary: '$78,000/yr', hourlyRate: '$37.50/hr — +$23,000/yr vs LPN' },
  { label: 'RN (BSN)', avgSalary: '$86,000/yr', hourlyRate: '$41.35/hr — +$31,000/yr vs LPN' },
  { label: 'Nurse Practitioner (NP)', avgSalary: '$126,000/yr', hourlyRate: '$60.58/hr — +$71,000/yr vs LPN' },
];

export default function LPNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'LPN Salary 2026' },
      ]}
      h1="LPN Salary 2026: How Much Do LPNs and LVNs Make?"
      lastUpdated="May 2026"
      schemaTitle="LPN Salary 2026"
      schemaDescription="Average LPN and LVN salary by state, work setting, and career ladder comparison in 2026."
      schemaUrl="/lpn-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>LPNs earn $55,000/year ($26.44/hr)</strong> on average nationally in 2026 —
          <strong> $16,800/year more than CNAs</strong> and <strong>$23,000–$31,000/year less than RNs</strong>.
          California LPNs top the state rankings at <strong>$70,000/year</strong>.
          Home health and correctional facilities pay the most by work setting.
        </p>
      </div>

      <p>
        LPNs (Licensed Practical Nurses) — called LVNs in California and Texas — are essential to
        clinical care in nursing homes, home health, and outpatient settings. Pay varies significantly
        by state and employer type. Here&apos;s the full 2026 breakdown.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">LPN Salary by State (2026)</h2>
      <p>
        Alaska edges California for the top LPN salary on a nominal basis, though California&apos;s LVN pay
        of $70,000/year reflects the state&apos;s higher cost of living and minimum wage floor. The spread
        between the highest and lowest states is $28,000/year.
      </p>
      <SalaryTable
        title="LPN / LVN Average Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">LPN Salary by Work Setting</h2>
      <p>
        Home health agencies and correctional facilities pay LPNs the most. Nursing homes historically
        employed the largest share of LPNs, but home health has surpassed it in both employment volume
        and pay at many sites.
      </p>
      <SalaryTable
        title="LPN Pay by Employer Type (2026)"
        headers={['Work Setting', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={bySetting}
        source="BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">LPN vs. CNA vs. RN: Career Ladder Salary</h2>
      <p>
        The LPN credential sits squarely in the middle of the nursing career ladder. It costs 12–18 months
        and $10,000–$20,000 in tuition, and the salary premium over CNA ($16,800/year) typically recoups
        that investment within the first year of employment.
      </p>
      <SalaryTable
        title="Nursing Career Ladder — Salary by Credential"
        headers={['Credential', 'Avg Annual Salary', 'Hourly Rate & Premium']}
        rows={careerLadder}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">LPN to RN Bridge Programs: The ROI Case</h2>
      <p>
        LPN-to-RN bridge programs allow LPNs to earn an ADN (Associate Degree in Nursing) in as little as
        12–18 months by crediting prior clinical experience. The salary jump from LPN ($55,000) to RN
        ($78,000–$86,000) is $23,000–$31,000/year. Most bridge programs cost $8,000–$20,000, making the
        ROI timeline under 1 year after graduation.
      </p>
      <p>
        Many hospitals offer tuition reimbursement for LPN-to-RN programs — particularly in rural and
        underserved areas where RN recruitment is difficult.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/cna-salary-2026', label: 'CNA Salary 2026', desc: 'How LPN compares to the step below' },
          { href: '/entry-level-nurse-salary', label: 'New Grad RN Salary 2026', desc: 'What RNs make starting out' },
          { href: '/nurse-practitioner-salary-2026', label: 'Nurse Practitioner Salary 2026', desc: 'Top of the nursing career ladder' },
          { href: '/rn-salary-by-years-of-experience-2026', label: 'RN Salary by Experience', desc: 'How pay grows over a nursing career' },
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
