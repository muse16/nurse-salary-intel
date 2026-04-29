import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ICU Nurse Salary 2026: $95,000/yr Avg + CCRN Adds $5,200/yr',
  description:
    'ICU nurses average $95,000/yr ($45.80/hr) in 2026 — 20% above the RN average. CCRN certification adds $5,200/yr. See pay by state, experience, and how to earn more in critical care.',
};

const faqs = [
  { question: 'How much do ICU nurses make an hour?', answer: 'The national average ICU nurse hourly rate is $45.80 in 2026. This ranges from $38/hr in lower-paying states to $60+/hr in California. Night shift and weekend differentials add $3–$8/hr.' },
  { question: 'Do ICU nurses get paid more than med-surg?', answer: 'Yes — ICU nurses earn approximately $17,000–$20,000 more per year than med-surg nurses. The premium reflects the higher acuity, advanced skills, and greater responsibility of critical care.' },
  { question: 'Does CCRN certification increase ICU pay?', answer: 'Yes. CCRN-certified ICU nurses earn an average of $5,200 more per year than non-certified peers. Many hospitals also pay a $1–$3/hr certification differential.' },
  { question: 'What is the highest-paying state for ICU nurses?', answer: 'California pays ICU nurses the most at an average of $125,000/year. Hawaii, Oregon, Washington, and Massachusetts round out the top five.' },
];

const stateData = [
  { label: 'California', avgSalary: '$125,000', hourlyRate: '$60.10/hr' },
  { label: 'Hawaii', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'Oregon', avgSalary: '$105,000', hourlyRate: '$50.48/hr' },
  { label: 'Washington', avgSalary: '$103,000', hourlyRate: '$49.52/hr' },
  { label: 'New York', avgSalary: '$101,000', hourlyRate: '$48.56/hr' },
  { label: 'Massachusetts', avgSalary: '$99,500', hourlyRate: '$47.84/hr' },
  { label: 'Texas', avgSalary: '$82,000', hourlyRate: '$39.42/hr' },
  { label: 'Florida', avgSalary: '$78,500', hourlyRate: '$37.74/hr' },
  { label: 'National Average', avgSalary: '$95,270', hourlyRate: '$45.80/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 year)', avgSalary: '$72,000–$80,000', hourlyRate: '$35–$38/hr' },
  { label: '2–4 years', avgSalary: '$82,000–$92,000', hourlyRate: '$39–$44/hr' },
  { label: '5–9 years', avgSalary: '$92,000–$105,000', hourlyRate: '$44–$50/hr' },
  { label: '10+ years', avgSalary: '$105,000–$130,000', hourlyRate: '$50–$63/hr' },
];

export default function ICUNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'ICU Nurse Salary' },
      ]}
      h1="ICU Nurse Salary 2026: Pay, Growth & How to Earn More"
      lastUpdated="April 2026"
      schemaTitle="ICU Nurse Salary 2026"
      schemaDescription="ICU nurse salary data by state, experience, and certification for 2026."
      schemaUrl="/nursing-salary/icu-nurse-salary"
      faqs={faqs}
      specialtySlug="icu-nurse-salary"
      specialtyName="ICU Nurse"
    >
      <p>
        ICU nurses are among the highest-paid bedside nurses in healthcare, earning an average of $95,270/year
        in 2026. Critical care demand continues to rise, making ICU nursing one of the best specialties for both
        earning potential and career growth — especially as a stepping stone to CRNA.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average ICU Nurse Salary in 2026</h2>
      <p>
        The national average ICU nurse salary is <strong>$95,270/year ($45.80/hr)</strong>. This is approximately
        23% higher than the overall RN average and reflects the specialized skills required in critical care.
      </p>

      <SalaryTable title="ICU Nurse Pay by State (2026)" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <SalaryTable title="ICU Nurse Salary by Experience Level" headers={['Experience', 'Salary Range', 'Hourly Range']} rows={experienceData} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">CCRN Certification and Pay Impact</h2>
      <p>
        The CCRN (Critical Care Registered Nurse) certification adds an average of <strong>$5,200/year</strong> to ICU nurse
        salaries. Many hospital systems pay a $1–$3/hr differential for CCRN-certified nurses. Beyond pay,
        CCRN is required for most CRNA program admissions.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">ICU Travel Nurse vs. Staff ICU Salary</h2>
      <p>
        ICU travel nurses earn $2,600–$3,500/week ($135,000–$182,000 annualized), compared to staff ICU nurses
        at $95,270. That&apos;s a 40–90% premium, though travel nurses sacrifice benefits and job stability.
      </p>
      <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline text-sm">
        See all travel nurse specialty salaries →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Career Path: From ICU Nurse to CRNA</h2>
      <p>
        ICU experience is the gateway to the highest-paying nursing career: CRNA ($214,200/year). Most CRNA programs
        require 1–2 years of ICU experience and CCRN certification. The ICU → CRNA path is the most financially
        rewarding career trajectory in nursing.
      </p>
      <Link href="/nursing-salary/crna-salary-by-state" className="text-primary font-semibold hover:underline text-sm">
        See CRNA salary data →
      </Link>
    </SEOPageLayout>
  );
}
