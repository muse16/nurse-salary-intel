import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Labor and Delivery Nurse Salary 2026: $86,340/yr + California Pays $108K+',
  description:
    'L&D nurses average $86,340/yr ($41.51/hr) in 2026. California pays $108K+. See pay by state, shift differentials, and the L&D vs NICU vs ER salary comparison.',
};

const faqs = [
  { question: 'How much do L&D nurses make?', answer: 'The national average L&D nurse salary is $86,340/year ($41.51/hr) in 2026. In high-paying states like California, L&D nurses earn $108,000+.' },
  { question: 'Is labor and delivery nursing a good career?', answer: 'L&D is one of the most personally rewarding nursing specialties with good pay and strong demand. It pays above the RN average and offers a clear career path to NP (CNM) or NICU.' },
  { question: 'Do L&D nurses work 12-hour shifts?', answer: 'Yes, most L&D nurses work three 12-hour shifts per week (36 hours). Night shift and weekend differentials add $3–$6/hr to base pay.' },
  { question: 'What certifications help L&D nurses earn more?', answer: 'RNC-OB (Inpatient Obstetric Nursing) certification adds $4,000–$5,000/year. C-EFM (Electronic Fetal Monitoring) is also valued and may qualify for a differential.' },
];

const stateData = [
  { label: 'California', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'New York', avgSalary: '$94,000', hourlyRate: '$45.19/hr' },
  { label: 'Washington', avgSalary: '$92,000', hourlyRate: '$44.23/hr' },
  { label: 'Massachusetts', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: 'Texas', avgSalary: '$75,000', hourlyRate: '$36.06/hr' },
  { label: 'Florida', avgSalary: '$72,000', hourlyRate: '$34.62/hr' },
  { label: 'National Average', avgSalary: '$86,340', hourlyRate: '$41.51/hr' },
];

export default function LaborDeliveryNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'L&D Nurse Salary' },
      ]}
      h1="Labor and Delivery Nurse Salary 2026: Complete Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="Labor & Delivery Nurse Salary 2026"
      schemaDescription="L&D nurse salary data by state, experience, and certification for 2026."
      schemaUrl="/nursing-salary/labor-delivery-nurse-salary"
      faqs={faqs}
    >
      <p>
        Labor and delivery nurses combine high-acuity clinical skills with deeply rewarding patient care. In 2026,
        L&D nurses earn an average of $86,340/year — above the RN average with solid growth and career advancement options.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average L&D Nurse Salary in 2026</h2>
      <p>
        The national average L&D nurse salary is <strong>$86,340/year ($41.51/hr)</strong>, approximately 11% above
        the overall RN average.
      </p>

      <SalaryTable title="L&D Nurse Pay by State (2026)" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Nurse Salary by Experience</h2>
      <p>
        New L&D nurses start at $64,000–$72,000. With 5+ years, salaries reach $84,000–$96,000. Senior L&D nurses
        with 10+ years and RNC-OB certification earn $96,000–$115,000 in top states.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RNC-OB Certification and Pay</h2>
      <p>
        RNC-OB certification adds <strong>$4,000–$5,000/year</strong> to L&D nurse salaries and is increasingly
        preferred by high-volume delivery centers.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Travel Nurse Salary</h2>
      <p>
        L&D travel nurses earn $2,300–$3,100/week ($120,000–$161,000 annualized). High-volume delivery units
        in urban areas pay the best rates.
      </p>
      <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline text-sm">
        See all travel nurse specialty salaries →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D vs. NICU vs. Postpartum Salary</h2>
      <p>
        L&D ($86K) pays slightly more than postpartum ($78K) and comparable to NICU ($84K). Many nurses rotate
        between these related specialties. The L&D → NICU transition is one of the most natural in nursing.
      </p>
      <Link href="/nursing-salary/nicu-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Compare with NICU nurse salary →
      </Link>
    </SEOPageLayout>
  );
}
