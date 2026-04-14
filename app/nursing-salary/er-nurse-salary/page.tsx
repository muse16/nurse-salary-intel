import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ER Nurse Salary 2026 | Emergency Nurse Pay Data',
  description:
    'ER nurse salary in 2026 — average pay, salary by state, experience, and certifications. See how emergency department nurses compare to other specialties.',
};

const faqs = [
  { question: 'How much do ER nurses make an hour?', answer: 'The national average ER nurse hourly rate is $42.79 in 2026. Rates range from $35/hr in lower-paying states to $55+/hr in California. Night and weekend differentials add $3–$7/hr.' },
  { question: 'Do ER nurses get paid more than floor nurses?', answer: 'Yes — ER nurses earn approximately $11,000–$15,000 more per year than med-surg nurses, reflecting the higher acuity and unpredictability of emergency care.' },
  { question: 'Is CEN certification worth it for pay?', answer: 'CEN certification adds an average of $4,800/year to ER nurse salaries. It also opens doors to travel nursing and leadership positions that pay even more.' },
  { question: 'What is the highest-paying state for ER nurses?', answer: 'California leads at $116,000/year for ER nurses. Hawaii, Oregon, Washington, and Massachusetts also pay significantly above the national average.' },
];

const stateData = [
  { label: 'California', avgSalary: '$116,000', hourlyRate: '$55.77/hr' },
  { label: 'Oregon', avgSalary: '$100,000', hourlyRate: '$48.08/hr' },
  { label: 'Washington', avgSalary: '$98,000', hourlyRate: '$47.12/hr' },
  { label: 'New York', avgSalary: '$96,000', hourlyRate: '$46.15/hr' },
  { label: 'Massachusetts', avgSalary: '$94,500', hourlyRate: '$45.43/hr' },
  { label: 'Texas', avgSalary: '$78,500', hourlyRate: '$37.74/hr' },
  { label: 'Florida', avgSalary: '$75,000', hourlyRate: '$36.06/hr' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: '$42.79/hr' },
];

export default function ERNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'ER Nurse Salary' },
      ]}
      h1="ER Nurse Salary 2026: Pay, Demand & Growth"
      lastUpdated="April 2026"
      schemaTitle="ER Nurse Salary 2026"
      schemaDescription="Emergency room nurse salary data by state, experience, and certification for 2026."
      schemaUrl="/nursing-salary/er-nurse-salary"
      faqs={faqs}
    >
      <p>
        Emergency room nurses are the frontline of acute care — and their pay reflects it. In 2026, ER nurses
        earn an average of $89,010/year, with strong growth driven by increasing ED volumes and nursing shortages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average ER Nurse Salary in 2026</h2>
      <p>
        The national average ER nurse salary is <strong>$89,010/year ($42.79/hr)</strong>, approximately 15% above
        the overall RN average.
      </p>

      <SalaryTable title="ER Nurse Pay by State (2026)" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Nurse Salary by Experience Level</h2>
      <p>
        New ER nurses start at $68,000–$76,000. With 5+ years of experience, salaries climb to $88,000–$100,000.
        Senior ER nurses with 10+ years and leadership responsibilities earn $100,000–$120,000.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CEN Certification and Pay Impact</h2>
      <p>
        The CEN (Certified Emergency Nurse) certification adds an average of <strong>$4,800/year</strong> to ER nurse
        salaries. Level I trauma centers increasingly prefer or require CEN certification.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Travel Nurse Salary</h2>
      <p>
        ER travel nurses earn $2,400–$3,200/week ($125,000–$166,000 annualized). Urban Level I trauma centers
        pay the most, while rural ERs offer lower rates but often include housing.
      </p>
      <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline text-sm">
        See all travel nurse specialty salaries →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Nurse vs. ICU Nurse Salary</h2>
      <p>
        ICU nurses earn approximately $6,000–$8,000 more per year than ER nurses on average. However, ER nurses
        often earn more in overtime and shift differentials due to 24/7 coverage needs and unpredictable volumes.
      </p>
      <Link href="/nursing-salary/icu-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Compare with ICU nurse salary →
      </Link>
    </SEOPageLayout>
  );
}
