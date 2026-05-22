import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Bayhealth RN Salary 2026: What Delaware\'s Top System Pays',
  description:
    'Bayhealth RNs earn $68K–$96K/yr. Pay by specialty, sign-on bonuses up to $15K, shift differentials, and how Kent Campus compares to Milford.',
  alternates: { canonical: 'https://nursesalaryintel.com/bayhealth-rn-salary-2026' },
  openGraph: {
    title: 'Bayhealth RN Salary 2026: What Delaware\'s Top System Pays',
    description: 'Bayhealth RN salary by specialty, campus, and experience — with sign-on bonuses and shift differential breakdown.',
    url: 'https://nursesalaryintel.com/bayhealth-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary at Bayhealth Medical Center?',
    answer:
      'Based on active job postings and Delaware BLS OEWS data (May 2024), Bayhealth RNs earn approximately $68,000–$96,000/year depending on specialty, experience, and campus. Delaware\'s statewide RN mean wage is $82,870/year ($39.84/hr) per BLS. Bayhealth\'s specialty ICU and ER roles fall at or above this benchmark, with sign-on bonuses of $8,000–$15,000 available for critical care positions.',
  },
  {
    question: 'Does Bayhealth offer sign-on bonuses for nurses?',
    answer:
      'Yes. Bayhealth has offered sign-on bonuses ranging from $5,000 for med-surg and telemetry to $10,000–$15,000 for ICU, ER, and OR specialties, typically with a 2-year service commitment. Sign-on bonus availability changes with market conditions — verify current offers during the recruitment process.',
  },
  {
    question: 'Is Bayhealth a good place to work as a nurse?',
    answer:
      'Bayhealth is Delaware\'s largest independent health system and the primary employer for nurses in central and southern Delaware. It operates two acute care hospitals (Kent Campus in Dover and Milford Memorial in Milford). As a nonprofit system, it is PSLF-eligible for nurses with federal student loans. Clinical training and specialty development are strengths, particularly for nurses early in their career.',
  },
  {
    question: 'How does Bayhealth nurse salary compare to ChristianaCare?',
    answer:
      'ChristianaCare (Wilmington/Newark) generally pays 5–10% higher than Bayhealth, reflecting the higher cost of living in northern Delaware and proximity to Philadelphia. ChristianaCare is a Magnet-designated Level 1 Trauma Center with more specialty volume. Bayhealth offers lower COL in central Delaware and comparable benefits, making it competitive for nurses who prefer a smaller-metro environment.',
  },
  {
    question: 'What shift differential does Bayhealth pay nurses?',
    answer:
      'Based on nurse-reported figures and job posting data, Bayhealth pays evening differential of approximately $2.50–$3.50/hr and night differential of approximately $4.00–$6.00/hr. Weekend differential of $2.00–$3.00/hr is typically stackable with night differential. These rates are consistent with mid-market Delaware hospital systems and below union-contract rates seen in Pennsylvania and New Jersey.',
  },
];

const specialtyData = [
  { label: 'Med-Surg / Telemetry', avgSalary: '$68,000 – $82,000', hourlyRate: 'Sign-on: $5K–$8K' },
  { label: 'Progressive Care (PCU)', avgSalary: '$72,000 – $87,000', hourlyRate: 'Sign-on: $7K–$10K' },
  { label: 'Emergency Department', avgSalary: '$76,000 – $92,000', hourlyRate: 'Sign-on: $10K–$15K' },
  { label: 'ICU / Critical Care', avgSalary: '$78,000 – $96,000', hourlyRate: 'Sign-on: $10K–$15K' },
  { label: 'OR / Surgical Services', avgSalary: '$76,000 – $94,000', hourlyRate: 'Sign-on: $8K–$12K; call pay additional' },
  { label: 'L&D / OB', avgSalary: '$74,000 – $90,000', hourlyRate: 'Sign-on: $8K–$12K' },
  { label: 'Home Health / Outpatient', avgSalary: '$64,000 – $78,000', hourlyRate: 'Per-visit or salaried options' },
];

const campusData = [
  { label: 'Bayhealth Hospital, Kent Campus (Dover)', avgSalary: '$68,000 – $96,000', hourlyRate: '379-bed; Level II Trauma; primary campus' },
  { label: 'Bayhealth Hospital, Milford Memorial', avgSalary: '$66,000 – $88,000', hourlyRate: '106-bed community hospital; general acute care' },
];

const comparisonData = [
  { label: 'Bayhealth Medical Center (DE)', avgSalary: '$68,000 – $96,000', hourlyRate: 'Dover / Milford; nonprofit; PSLF eligible' },
  { label: 'ChristianaCare (DE — Wilmington)', avgSalary: '$74,000 – $102,000', hourlyRate: 'Magnet; Level 1 Trauma; higher COL area' },
  { label: 'Delaware state RN average', avgSalary: '$82,870', hourlyRate: 'BLS OEWS May 2024; $39.84/hr' },
  { label: 'National RN average', avgSalary: '$89,010', hourlyRate: 'BLS OEWS May 2024; $42.80/hr' },
];

export default function BayhealthRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by Hospital', href: '/nurse-salary-by-hospital' },
        { label: 'Bayhealth RN Salary 2026' },
      ]}
      h1="Bayhealth RN Salary 2026: What Delaware's Largest Health System Pays Nurses"
      lastUpdated="May 2026"
      schemaTitle="Bayhealth RN Salary 2026"
      schemaDescription="Bayhealth Medical Center RN salary by specialty, campus, and experience in 2026 — with sign-on bonus data and Delaware market comparison."
      schemaUrl="/bayhealth-rn-salary-2026"
      datePublished="2026-05-22"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Reporting Note</p>
        <p className="text-on-surface text-base">
          Salary ranges on this page are based on <strong>active Bayhealth job postings (2025–2026)</strong>,
          Delaware BLS OEWS data (May 2024), and nurse-reported figures. Bayhealth does not publicly publish
          pay scales. Individual offers vary by experience, specialty, and negotiation.
        </p>
      </div>

      <Image
        src="/images/bayhealth-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy scrubs standing confidently outside the entrance of a modern Delaware hospital on a clear day"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Bayhealth Medical Center is Delaware's largest independent health system and the primary acute care
        employer for nurses in central and southern Delaware. Its two campuses — Kent Hospital in Dover and
        Milford Memorial — collectively serve a large catchment area with limited regional competition.
        For nurses considering a position at Bayhealth, or those already employed and evaluating their market
        position, understanding the pay structure is essential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Bayhealth RN Salary by Specialty (2026)</h2>
      <p>
        The ranges below reflect active job postings and nurse-reported compensation at Bayhealth's Kent and
        Milford campuses. Critical care and procedural specialties sit at the upper end of the range; general
        medical-surgical and outpatient roles fall at the lower end.
      </p>

      <SalaryTable
        title="Bayhealth RN Salary by Specialty (2026)"
        headers={['Specialty / Unit', 'Base Annual Salary', 'Sign-On Bonus']}
        rows={specialtyData}
        source="Bayhealth job postings 2025–2026; NurseSalaryIntel analysis"
      />

      <Image
        src="/images/bayhealth-rn-salary-2026-comparison.png"
        alt="Bar chart comparing Bayhealth RN salary ranges to Delaware state average and national average by specialty in 2026"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Kent Campus vs. Milford Memorial</h2>

      <SalaryTable
        title="Bayhealth Campus Salary Comparison"
        headers={['Campus', 'RN Salary Range', 'Notes']}
        rows={campusData}
        source="NurseSalaryIntel 2026 campus-level analysis"
      />

      <p>
        Kent Campus in Dover is the primary acute care site, handling higher-acuity cases including emergency
        services and surgical specialties. It functions as the system's Level II Trauma Center and offers the
        broadest range of specialty nursing roles. Milford Memorial is a smaller community hospital with a more
        general nursing profile and a slightly lower salary floor — but the gap between the two is typically
        $4,000–$8,000 at the same experience level.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Bayhealth vs. Delaware Market + National Average</h2>

      <Image
        src="/images/bayhealth-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing patient charts together at a hospital workstation in a Delaware medical center"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Delaware Nurse Salary Market Comparison (2026)"
        headers={['Employer / Benchmark', 'RN Salary Range', 'Notes']}
        rows={comparisonData}
        source="BLS OEWS May 2024 + NurseSalaryIntel 2026 hospital data"
      />

      <p>
        Delaware's statewide RN mean of $82,870 (BLS OEWS May 2024) reflects the entire state including
        the higher-paying ChristianaCare complex in northern Delaware. Bayhealth's midrange for experienced
        specialty nurses is generally consistent with this benchmark. The gap versus ChristianaCare — typically
        5–10% in favor of ChristianaCare on base pay — should be evaluated against the cost-of-living
        difference between Dover/Milford (lower COL, more affordable housing) and the Wilmington/Newark
        corridor (northern Delaware / Philadelphia suburb market).
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differential and Total Compensation at Bayhealth</h2>
      <p>
        Based on nurse-reported figures, Bayhealth shift differentials run as follows: evening shift (3p–11p)
        +$2.50–$3.50/hr; night shift (11p–7a or 7p–7a depending on unit) +$4.00–$6.00/hr; weekend
        +$2.00–$3.00/hr, stackable with night differential for weekend nights.
      </p>
      <p>
        A full-time ICU nurse at Kent Campus working consistent nights (36 hrs/week at $5.00/hr differential)
        adds approximately $9,360/year above base. Combined with an $80,000 base, CCRN certification stipend,
        and weekend coverage, total gross compensation can reach $93,000–$100,000 — competitive for the central
        Delaware market.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">PSLF Eligibility and Benefits at Bayhealth</h2>
      <p>
        Bayhealth is a nonprofit health system and qualifies as an eligible employer under the Public Service
        Loan Forgiveness (PSLF) program. Nurses with federal student loans who work full-time at Bayhealth
        and make 120 qualifying payments on an income-driven repayment plan can have the remaining balance
        forgiven tax-free. For nurses with $80,000–$150,000 in nursing school debt, this benefit has
        significant financial value — potentially equivalent to $30,000–$80,000 in forgiven principal over
        10 years.
      </p>
      <p>
        Beyond PSLF, Bayhealth's benefits package includes employer-subsidized health insurance, a 403(b)
        retirement plan with employer match, and tuition assistance. Specific match percentages and insurance
        contribution amounts should be verified directly with Bayhealth HR during the offer stage.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiation Intelligence for Bayhealth Offers</h2>
      <p>
        Bayhealth, like most non-Magnet community health systems, has limited individual salary negotiation
        flexibility on base pay — step scales are typically set by HR policy. However, several things are
        worth asking about: starting step on the pay scale (especially if you have 3+ years of relevant
        specialty experience), sign-on bonus availability and vesting structure, orientation period pay
        (some systems default new night-shift hires to day rates during orientation — ask specifically about
        this), and relocation assistance if you're coming from out of state.
      </p>
      <p>
        The most common negotiation win at community health systems like Bayhealth is a higher starting step
        — moving from Step 3 to Step 5 on a specialty scale can mean $3,000–$5,000/year from day one. Come
        prepared with your years of experience in the specific specialty and any certifications you hold.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to negotiate any hospital offer' },
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Pay 2026', desc: 'Night shift adds $8K–$25K/yr' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay nationwide' },
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
        <li><a href="https://www.bls.gov/oes/current/oes_de.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Delaware Registered Nurse Wage Data (May 2024)</a></li>
        <li><a href="https://www.bayhealth.org/careers" target="_blank" rel="noopener noreferrer">Bayhealth Careers — Job Postings (accessed 2025–2026)</a></li>
        <li><a href="https://studentaid.gov/manage-loans/forgiveness-cancellation/public-service" target="_blank" rel="noopener noreferrer">Federal Student Aid — Public Service Loan Forgiveness Program</a></li>
      </ul>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
