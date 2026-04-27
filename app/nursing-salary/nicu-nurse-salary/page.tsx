import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NICU Nurse Salary 2026: $84,490/yr Avg + Travel NICU Earns $2,300–$3,000/wk',
  description:
    'NICU nurses earn $84,490/yr ($40.62/hr) in 2026. Travel NICU RNs make $2,300–$3,000/week. See pay by state, RNC-NIC certification premium, and job outlook through 2030.',
};

const faqs = [
  { question: 'How much do NICU nurses make?', answer: 'The national average NICU nurse salary is $84,490/year ($40.62/hr) in 2026. Experience and certification can push this to $95,000–$105,000 in high-paying states.' },
  { question: 'Is NICU a good nursing specialty for pay?', answer: 'NICU pays above the overall RN average but slightly less than ICU and ER. The trade-off is a more predictable patient population and strong emotional rewards for nurses who love working with neonates.' },
  { question: 'Do NICU travel nurses make more?', answer: 'Yes — NICU travel nurses earn $2,300–$3,000/week ($120,000–$156,000 annualized), which is 40–85% more than staff NICU nurses.' },
  { question: 'What certifications do NICU nurses need?', answer: 'RNC-NIC (Neonatal Intensive Care Nursing) is the primary certification, adding $4,500/year on average. NRP (Neonatal Resuscitation Program) certification is typically required for hire.' },
];

const stateData = [
  { label: 'California', avgSalary: '$110,000', hourlyRate: '$52.88/hr' },
  { label: 'New York', avgSalary: '$95,000', hourlyRate: '$45.67/hr' },
  { label: 'Massachusetts', avgSalary: '$93,500', hourlyRate: '$44.95/hr' },
  { label: 'Washington', avgSalary: '$92,000', hourlyRate: '$44.23/hr' },
  { label: 'Texas', avgSalary: '$76,000', hourlyRate: '$36.54/hr' },
  { label: 'Florida', avgSalary: '$73,500', hourlyRate: '$35.34/hr' },
  { label: 'National Average', avgSalary: '$84,490', hourlyRate: '$40.62/hr' },
];

export default function NICUNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'NICU Nurse Salary' },
      ]}
      h1="NICU Nurse Salary 2026: What Neonatal Nurses Earn"
      lastUpdated="April 2026"
      schemaTitle="NICU Nurse Salary 2026"
      schemaDescription="NICU nurse salary data by state, experience, and certification for 2026."
      schemaUrl="/nursing-salary/nicu-nurse-salary"
      faqs={faqs}
    >
      <p>
        NICU nurses provide critical care to the most vulnerable patients — premature and critically ill newborns.
        In 2026, NICU nurses earn an average of $84,490/year nationally, with significant variation by state,
        experience, and certification status.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average NICU Nurse Salary in 2026</h2>
      <p>
        The national average NICU nurse salary is <strong>$84,490/year ($40.62/hr)</strong>. This is approximately
        9% above the overall RN average, reflecting the specialized skills needed in neonatal intensive care.
      </p>

      <SalaryTable title="NICU Nurse Pay by State (2026)" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NICU Nurse Salary by Experience Level</h2>
      <p>
        New NICU nurses start at $65,000–$74,000. After 5 years, salaries climb to $82,000–$95,000. Senior NICU
        nurses with 10+ years and RNC-NIC certification earn $95,000–$115,000 in top-paying states.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How RNC-NIC Certification Affects Pay</h2>
      <p>
        The RNC-NIC certification adds an average of <strong>$4,500/year</strong> to NICU nurse salaries. Many Level III
        and Level IV NICUs prefer or require this certification. It demonstrates mastery of neonatal nursing
        and is increasingly expected for senior NICU positions.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NICU Travel Nurse Salary</h2>
      <p>
        NICU travel nurses earn $2,300–$3,000/week — 40–85% more than staff positions. Level III/IV NICU
        experience and RNC-NIC certification command the highest rates.
      </p>
      <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline text-sm">
        See all travel nurse specialty salaries →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NICU vs. Other Nursing Specialties — Pay Comparison</h2>
      <p>
        NICU pays slightly less than ICU ($95K) and ER ($89K), but more than med-surg ($77K) and pediatrics ($79K).
        Many nurses choose NICU for the unique patient population rather than maximizing pay.
      </p>
      <Link href="/nursing-salary/labor-delivery-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Compare with L&D nurse salary →
      </Link>
    </SEOPageLayout>
  );
}
