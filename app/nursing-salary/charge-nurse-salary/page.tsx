import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Charge Nurse Salary 2026: $79K–$94K + $3–$5/hr Differential',
  description:
    'Charge nurses earn $79,000–$94,000/yr in 2026, plus a $3–$5/hr charge differential. See pay by state, overtime rules, and whether the added responsibility is worth the extra $4K–$10K/yr.',
};

const faqs = [
  { question: 'How much extra do charge nurses make?', answer: 'Charge nurses earn $2–$5/hour more than staff nurses in the same unit, translating to $4,000–$10,000 extra per year. The exact differential varies by hospital system and state.' },
  { question: 'What is the charge nurse differential?', answer: 'The charge nurse differential is the hourly pay bump for taking on charge duties. It averages $3/hr nationally but ranges from $1.50/hr at smaller facilities to $5+/hr at large teaching hospitals.' },
  { question: 'Do charge nurses get overtime?', answer: 'Yes, charge nurses are typically non-exempt and earn overtime (1.5x) for hours over 40/week. However, some facilities misclassify charge nurses as exempt — verify your status.' },
  { question: 'Is being a charge nurse worth the extra pay?', answer: 'It depends on the facility. At hospitals with good staffing and support, the extra $3–$5/hr is worth the leadership experience. At understaffed units, the added stress and liability may not justify the modest pay bump.' },
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
      <p>
        Charge nurses take on leadership duties — managing patient flow, coordinating staffing, and serving as
        the clinical decision-maker on shift. But is the extra pay worth the added responsibility? Here&apos;s the data.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average Charge Nurse Salary in 2026</h2>
      <p>
        The national average charge nurse salary is <strong>$82,750/year ($39.78/hr)</strong>, approximately 7% above
        the staff nurse average for the same unit.
      </p>

      <SalaryTable title="Charge Nurse Pay by State (2026)" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Charge Nurse Differential: How Much Extra?</h2>
      <p>
        The charge nurse differential averages <strong>$3/hour</strong> nationally. On a 36-hour week, that&apos;s $108/week
        or ~$5,600/year in additional pay. Large academic medical centers pay $4–$5/hr differential; smaller community
        hospitals may pay as little as $1.50–$2/hr.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Charge Nurse vs. Staff Nurse Salary</h2>
      <p>
        On the same unit, charge nurses earn $4,000–$10,000 more per year than staff nurses. The gap is larger in
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
      <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="text-primary font-semibold hover:underline text-sm">
        Full salary negotiation guide →
      </Link>

      <div className="mt-8">
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary font-semibold hover:underline text-sm">
          See night shift differential rates →
        </Link>
      </div>
    </SEOPageLayout>
  );
}
