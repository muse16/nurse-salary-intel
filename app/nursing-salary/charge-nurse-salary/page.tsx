import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Charge Nurse Salary 2026: $39.78/hr Avg + Charge Nurse Pay Differential Guide',
  description:
    'Charge nurses earn $82,750/yr ($39.78/hr) in 2026. Charge nurse pay differential averages $3/hr ($5,600/yr). See pay by state, hourly rates, and whether the added responsibility is worth it.',
  alternates: { canonical: 'https://nursesalaryintel.com/nursing-salary/charge-nurse-salary' },
};

const faqs = [
  { question: 'How much do charge nurses make an hour?', answer: 'Charge nurses earn an average of $39.78/hour ($82,750/year) nationally in 2026. Hourly rates range from $34/hr in lower-paying states like Florida to $52/hr in California. The charge nurse differential adds $2\u2013$5/hr on top of the base staff RN rate.' },
  { question: 'What is the charge nurse pay differential?', answer: "The charge nurse pay differential is the hourly pay premium added to a nurse's base rate when taking on charge duties. It averages $3/hr nationally, adding approximately $5,600/year on a 36-hour schedule. Large academic medical centers pay $4\u2013$5/hr differential; smaller community hospitals may pay $1.50\u2013$2/hr." },
  { question: 'How much extra do charge nurses make per year?', answer: 'Charge nurses earn $4,000\u2013$10,000 more per year than staff nurses on the same unit, driven primarily by the hourly differential ($2\u2013$5/hr) rather than a separate salary structure. ICU and ER charge nurses typically receive the highest differentials.' },
  { question: 'Do charge nurses get overtime?', answer: 'Yes, charge nurses are typically non-exempt and earn overtime (1.5x) for hours over 40/week. However, some facilities misclassify charge nurses as exempt \u2014 verify your FLSA status with HR.' },
  { question: 'Is being a charge nurse worth the extra pay?', answer: 'It depends on the facility. At well-staffed hospitals, the $3\u2013$5/hr differential plus leadership experience and faster path to management make it worthwhile. At understaffed units, the added liability and stress may not justify the pay bump \u2014 especially at facilities paying only $1.50\u2013$2/hr differential.' },
];

const stateData = [
  { label: 'California', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'New York', avgSalary: '$93,000', hourlyRate: '$44.71/hr' },
  { label: 'Washington', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: 'Massachusetts', avgSalary: '$90,000', hourlyRate: '$43.27/hr' },
  { label: 'Texas', avgSalary: '$74,000', hourlyRate: '$35.58/hr' },
  { label: 'Florida', avgSalary: '$71,000', hourlyRate: '$34.13/hr' },
  { label: 'National Average', avgSalary: '$82,750', hourlyRate: '$39.78/hr' },
];

export default function ChargeNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Charge Nurse Salary' },
      ]}
      h1="Charge Nurse Salary 2026: Pay, Differentials & Is It Worth It?"
      lastUpdated="April 2026"
      schemaTitle="Charge Nurse Salary 2026"
      schemaDescription="Charge nurse salary, differential pay, and salary by state for 2026."
      schemaUrl="/nursing-salary/charge-nurse-salary"
      faqs={faqs}
      specialtySlug="charge-nurse-salary"
      specialtyName="Charge Nurse"
    >
      {/* Featured snippet answer block */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Charge nurses earn $39.78/hour ($82,750/year)</strong> on average nationally in 2026.
          The <strong>charge nurse pay differential</strong> adds <strong>$2\u2013$5/hr</strong> ($4,000\u2013$10,000/yr)
          on top of base staff RN pay. California charge nurses average $51.92/hr; Florida averages $34.13/hr.
        </p>
      </div>

      <p>
        Charge nurses take on leadership duties \u2014 managing patient flow, coordinating staffing, and serving as
        the clinical decision-maker on shift. But is the extra pay worth the added responsibility? Here&apos;s the full breakdown.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Much Do Charge Nurses Make an Hour?</h2>
      <p>
        The national average charge nurse hourly rate is <strong>$39.78/hour ($82,750/year)</strong> in 2026 \u2014
        approximately 7% above the staff nurse average for the same unit. Hourly rates vary significantly by
        state, facility type, and shift differential:
      </p>
      <ul>
        <li><strong>California:</strong> $51.92/hr ($108,000/yr)</li>
        <li><strong>Washington:</strong> $43.75/hr ($91,000/yr)</li>
        <li><strong>Massachusetts:</strong> $43.27/hr ($90,000/yr)</li>
        <li><strong>Texas:</strong> $35.58/hr ($74,000/yr)</li>
        <li><strong>Florida:</strong> $34.13/hr ($71,000/yr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average Charge Nurse Salary by State (2026)</h2>

      <SalaryTable title="Charge Nurse Pay by State (2026)" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Charge Nurse Pay Differential: What to Expect</h2>
      <p>
        The <strong>charge nurse pay differential</strong> averages <strong>$3/hour</strong> nationally in 2026.
        On a 36-hour week, that&apos;s $108/week or approximately <strong>$5,600/year</strong> in additional pay
        on top of base staff RN salary. Here&apos;s how differentials break down by facility type:
      </p>
      <ul>
        <li><strong>Large academic medical center / Magnet hospital:</strong> $4\u2013$5/hr differential</li>
        <li><strong>Community hospital (300+ beds):</strong> $2.50\u2013$4/hr differential</li>
        <li><strong>Small community hospital (&lt;200 beds):</strong> $1.50\u2013$2.50/hr differential</li>
        <li><strong>Long-term care / SNF:</strong> $1\u2013$2/hr differential (sometimes flat per-shift stipend)</li>
      </ul>
      <p>
        Differentials are typically paid only during the hours you are actively assigned as charge, not for
        your full shift if you carry a patient load simultaneously.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Charge Nurse vs. Staff Nurse Salary</h2>
      <p>
        On the same unit, charge nurses earn $4,000\u2013$10,000 more per year than staff nurses. The gap is larger in
        high-acuity units (ICU, ER) where charge responsibilities are more demanding.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Responsibilities vs. Pay: Is It Worth It?</h2>
      <p>
        Charge nurses manage staffing assignments, handle patient flow, resolve conflicts, communicate with physicians
        and management, and often still carry a patient load. At well-staffed hospitals, the experience is valuable
        career building. At understaffed facilities, the added stress may not justify a $3/hr bump.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate Charge Nurse Pay</h2>
      <p>
        If you&apos;re asked to take on charge duties, negotiate the differential before accepting. Points to raise:
        the additional liability, the management responsibilities, and what comparable facilities pay. If the
        differential is too low, it&apos;s fair to decline.
      </p>
      <Link href="/nurse-salary-negotiation-scripts-2026" className="text-primary font-semibold hover:underline text-sm">
        Full salary negotiation guide for nurses \u2192
      </Link>

      <div className="mt-8">
        <Link href="/night-shift-differential-nurses" className="text-primary font-semibold hover:underline text-sm">
          See night shift nurse salary &amp; differential rates \u2192
        </Link>
      </div>
    </SEOPageLayout>
  );
}
