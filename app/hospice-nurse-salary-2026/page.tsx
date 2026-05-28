import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Hospice Nurse Salary 2026: What Hospice RNs Earn',
  description:
    'Hospice nurses earn $79,050–$91,640/year in 2026 depending on setting. See pay by role, state, and employer — plus how hospice compares to hospital RN pay.',
  alternates: { canonical: 'https://nursesalaryintel.com/hospice-nurse-salary-2026' },
  openGraph: {
    title: 'Hospice Nurse Salary 2026: What Hospice RNs Really Earn',
    description: 'Hospice RN salary by state, work setting, and experience — with data on case manager vs. facility roles.',
    url: 'https://nursesalaryintel.com/hospice-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do hospice nurses make in 2026?',
    answer:
      'Hospice RNs earn approximately $79,050–$87,200/year depending on setting, per the latest available BLS OEWS data (May 2024, published 2025). Hospice case managers working for home health agencies average $79,000–$84,000. Inpatient hospice facility RNs (at hospitals or dedicated hospice centers) average $85,000–$92,000, closer to general hospital RN rates. The national RN mean across all settings is $89,010/year.',
  },
  {
    question: 'Do hospice nurses earn less than hospital nurses?',
    answer:
      'Hospice case managers working in home health settings typically earn 5–10% less than their hospital counterparts — reflecting lower patient acuity levels and the absence of night/weekend differential-heavy schedules. However, hospice RNs who work at inpatient facilities or for larger healthcare systems often earn parity with hospital nurses, especially when on-call pay, caseload bonuses, and mileage reimbursement are factored in.',
  },
  {
    question: 'What does a hospice nurse do?',
    answer:
      'Hospice RNs provide comfort-focused care to terminally ill patients and families in homes, nursing facilities, or dedicated hospice units. Responsibilities include pain and symptom management, medication administration, patient and family education, coordination with physicians and social workers, and documentation of care plans. Case managers typically carry a caseload of 10–15 patients; inpatient facility RNs work standard floor shifts.',
  },
  {
    question: 'Is hospice nursing a good career?',
    answer:
      'Hospice nursing offers strong work-life balance (especially in home-based roles), meaningful patient contact, and growing demand as the U.S. population ages. The Bureau of Labor Statistics projects RN employment to grow 6% through 2033, with home health and hospice among the fastest-growing segments. Burnout rates are reported as lower in hospice than critical care by many nurses, though the emotional nature of the work is a significant factor to weigh.',
  },
  {
    question: 'Do hospice nurses work nights and weekends?',
    answer:
      'Home-based hospice case managers typically work standard daytime hours on a rotating caseload schedule, with on-call obligations covering evenings and weekends on a rotation. The on-call pay rate varies by employer — typically $2–$5/hour while on standby, plus regular pay for any visit made. Inpatient hospice facility nurses follow standard shift schedules (day/evening/night), with differential pay similar to hospital RN differentials.',
  },
  {
    question: 'Which states pay hospice nurses the most?',
    answer:
      'California, Massachusetts, Washington, and Oregon are the top-paying states for home health and hospice RNs, mirroring general RN market rates. California hospice RNs employed by large health systems like Sutter or Kaiser can earn $95,000–$115,000/year with union contracts. Massachusetts and Washington hospice RN salaries typically run $85,000–$98,000. Southern and Midwestern states generally pay $68,000–$78,000.',
  },
];

const settingData = [
  { label: 'Hospital Inpatient (general)', avgSalary: 'around $92,000', hourlyRate: 'around $44/hr — top of range' },
  { label: 'Government / VA Hospice', avgSalary: 'around $87,000', hourlyRate: 'around $42/hr + federal benefits' },
  { label: 'Home Health Agency (large system)', avgSalary: 'around $82,000', hourlyRate: 'around $39.50/hr + mileage' },
  { label: 'Dedicated Hospice Facility', avgSalary: '$79,050', hourlyRate: '$38.00/hr (BLS NAICS 621600 baseline)' },
  { label: 'SNF / Long-Term Care Hospice Unit', avgSalary: 'around $74,000', hourlyRate: 'around $35.50/hr' },
  { label: 'Nonprofit / Community Hospice', avgSalary: 'around $76,000', hourlyRate: 'PSLF eligible; lower base' },
];

const stateData = [
  { label: 'California', avgSalary: 'around $101,000', hourlyRate: 'around $48.50/hr' },
  { label: 'Massachusetts', avgSalary: 'around $95,000', hourlyRate: 'around $45.50/hr' },
  { label: 'Washington', avgSalary: 'around $90,000', hourlyRate: 'around $43.50/hr' },
  { label: 'National RN Mean', avgSalary: '$89,010', hourlyRate: '$42.80/hr (BLS OEWS May 2024)' },
  { label: 'Texas', avgSalary: 'around $76,000', hourlyRate: 'around $36.50/hr' },
  { label: 'Florida', avgSalary: 'around $74,000', hourlyRate: 'around $35.50/hr' },
  { label: 'Georgia', avgSalary: 'around $72,000', hourlyRate: 'around $34.50/hr' },
];

const roleData = [
  { label: 'Hospice RN Case Manager', avgSalary: '$79,000 – $87,000', hourlyRate: 'Caseload 10–15 patients' },
  { label: 'Hospice Triage / On-Call RN', avgSalary: '$82,000 – $90,000', hourlyRate: 'On-call premium + visit pay' },
  { label: 'Inpatient Hospice RN (facility)', avgSalary: '$85,000 – $95,000', hourlyRate: 'Hospital-equivalent shift pay' },
  { label: 'Hospice Charge RN / Team Lead', avgSalary: '$88,000 – $102,000', hourlyRate: 'Supervisory differential' },
  { label: 'Director of Nursing — Hospice', avgSalary: '$95,000 – $125,000', hourlyRate: 'Management; MSN preferred' },
];

export default function HospiceNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Hospice Nurse Salary 2026' },
      ]}
      h1="Hospice Nurse Salary 2026: What Hospice and Palliative Care RNs Earn"
      lastUpdated="May 2026"
      schemaTitle="Hospice Nurse Salary 2026"
      schemaDescription="Hospice nurse salary by work setting, state, and role — including case manager, inpatient facility, and on-call RN pay for 2026."
      schemaUrl="/hospice-nurse-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/hospice-nurse-salary-2026-hero.webp"
        alt="Hospice nurse in soft scrubs sitting beside a patient in a warm home setting, compassionate presence, natural window light, editorial healthcare photography, no text, no logos"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Hospice nurses earn an estimated <strong>$79,000–$92,000/year</strong> in 2026 depending on setting.
          Home-based case managers average <strong>$79,000–$84,000</strong>; inpatient hospice facility RNs
          earn <strong>$85,000–$95,000</strong>. The national RN mean across all settings is{' '}
          <strong>$89,010/year</strong> per BLS OEWS May 2024.
        </p>
      </div>

      <p>
        Hospice nursing is one of the fastest-growing RN sectors — driven by an aging U.S. population
        and a nationwide shift toward home-based end-of-life care. The pay gap between hospice and
        hospital nursing has narrowed in recent years, particularly for inpatient facility roles and
        positions at large integrated health systems. For nurses seeking meaningful patient contact and
        a more predictable schedule than acute care, hospice is an increasingly competitive option.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Hospice RN Salary by Work Setting</h2>
      <p>
        Setting is the biggest driver of hospice nurse pay. Inpatient hospital-based hospice units
        pay at or above general hospital RN rates. Home health agencies pay less base salary but often
        add mileage reimbursement ($0.67–$0.70/mile) and visit bonuses that close the gap. Nonprofit
        community hospice organizations typically pay below market but offer Public Service Loan
        Forgiveness (PSLF) eligibility for nurses with federal student loans.
      </p>
      <SalaryTable
        title="Hospice RN Salary by Work Setting (2026)"
        headers={['Work Setting', 'Estimated Annual Pay', 'Hourly / Notes']}
        rows={settingData}
        source="BLS OEWS May 2024 (NAICS 621600 home health; NAICS 622 hospitals) + NurseSalaryIntel analysis"
      />

      <Image
        src="/images/hospice-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing hospice RN annual salary by work setting — inpatient hospital, VA government, home health agency, dedicated hospice facility, and SNF — with national RN average line"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Hospice Nurse Salary by Role</h2>
      <p>
        Roles within hospice nursing vary in pay, autonomy, and schedule burden. Case managers carry
        ongoing patient relationships; triage and on-call RNs field after-hours crises. The on-call
        structure — standby pay plus per-visit pay — means total compensation for triage nurses can
        exceed their base rate by $8,000–$15,000/year depending on call frequency.
      </p>
      <SalaryTable
        title="Hospice RN Salary by Role (2026 Estimates)"
        headers={['Role', 'Annual Range', 'Notes']}
        rows={roleData}
        source="NurseSalaryIntel job posting analysis + BLS OEWS May 2024 (SOC 29-1141)"
      />

      <Image
        src="/images/hospice-nurse-salary-2026-hospital.webp"
        alt="Hospice registered nurse reviewing medication chart in a quiet patient room, focused and professional, warm indoor lighting, no text, no logos, editorial style"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Hospice Nurse Salary by State</h2>
      <p>
        State-level pay tracks the general RN market — California, Massachusetts, and Washington top
        the list. California hospice RNs at unionized systems can earn $95,000–$115,000 with experience.
        Southern markets (Texas, Florida, Georgia) average 15–20% below the national RN mean for
        hospice-specific roles, though lower cost of living partially offsets the gap.
      </p>
      <SalaryTable
        title="Hospice / Home Health RN Mean Wage by State"
        headers={['State / Benchmark', 'Annual Mean Wage', 'Hourly Mean']}
        rows={stateData}
        source="BLS OEWS May 2024 (SOC 29-1141, NAICS 621600 home health services)"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Hospice vs. Hospital: Is the Pay Trade-Off Worth It?</h2>
      <p>
        A hospice case manager earns roughly $5,000–$12,000/year less in base pay than a comparable
        hospital floor RN. The tradeoffs nurses typically cite in favor of hospice: daytime scheduling
        (most visits occur 8am–5pm), no mandatory overtime, lower physical strain, meaningful long-term
        patient relationships, and significantly lower acute-care stress levels. Factors against:
        on-call obligations, emotional weight of end-of-life care, and mileage burden in home-based roles.
      </p>
      <p>
        For nurses with federal student loans, nonprofit and government-operated hospice organizations
        qualify for PSLF — which can eliminate up to $20,000–$50,000 in loan balances over 10 years
        and effectively increase total compensation above equivalent for-profit hospital pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/home-health-rn-salary-2026', label: 'Home Health RN Salary', desc: 'Close cousin to hospice — pay comparison' },
          { href: '/certified-nurse-midwife-salary-2026', label: 'CNM Salary 2026', desc: 'Another community-based RN specialty' },
          { href: '/nurse-salary-cost-of-living-2026', label: 'Nurse Salary Cost of Living', desc: 'Does hospice pay stretch further in low-COL markets?' },
          { href: '/highest-paying-nursing-specialties', label: 'Highest Paying Nursing Specialties', desc: 'Where does hospice rank in the full spectrum?' },
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

      <MethodologyBox />

      <div className="text-sm text-on-surface-variant mt-8 space-y-1">
        <p className="font-semibold">Sources</p>
        <p>
          U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), May 2024,
          published April 2025. SOC 29-1141: Registered Nurses; NAICS 621600: Home Health Care Services.{' '}
          <a href="https://www.bls.gov/oes/current/oes291141.htm" className="underline" target="_blank" rel="noopener noreferrer">
            bls.gov/oes/current/oes291141.htm
          </a>
        </p>
        <p>
          National Hospice and Palliative Care Organization (NHPCO), Facts and Figures 2024.{' '}
          <a href="https://www.nhpco.org/" className="underline" target="_blank" rel="noopener noreferrer">
            nhpco.org
          </a>
        </p>
        <p>
          American Nurses Association (ANA), Palliative and Hospice Nursing Practice Standards.{' '}
          <a href="https://www.nursingworld.org/" className="underline" target="_blank" rel="noopener noreferrer">
            nursingworld.org
          </a>
        </p>
      </div>
    </SEOPageLayout>
  );
}
