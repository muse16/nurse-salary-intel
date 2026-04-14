import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Salary by Specialty 2026 | Full Comparison',
  description:
    'Compare nursing salaries across 20+ specialties. See which nursing roles pay the most in 2026 — CRNA, NP, ICU, ER, NICU, L&D, and more.',
};

const faqs = [
  { question: 'What is the highest-paying nursing specialty?', answer: 'CRNA (Certified Registered Nurse Anesthetist) is the highest-paying nursing specialty, with an average salary of $214,200/year in 2026. Nurse Practitioners are second at $126,260/year.' },
  { question: 'Do nursing specialties require additional certifications?', answer: 'Most specialties have optional certifications that increase pay: CCRN for ICU, CEN for ER, CNOR for OR, RNC-NIC for NICU. Advanced practice roles (CRNA, NP) require graduate degrees and national certification.' },
  { question: 'How much do CRNA nurses make?', answer: 'CRNAs earn an average of $214,200/year nationally, with top earners in states like California and New York exceeding $250,000. This requires a Doctor of Nursing Practice (DNP) or equivalent.' },
  { question: 'Which nursing specialty has the best work-life balance?', answer: 'Outpatient specialties (dermatology, allergy, primary care NP) offer the best work-life balance with regular hours and no nights/weekends, though they typically pay less than acute care specialties.' },
  { question: 'Can I switch nursing specialties mid-career?', answer: 'Yes. Many nurses transition between specialties. Some transitions are natural (ICU to CRNA, L&D to NICU), while others may require additional certifications or bridge programs.' },
  { question: 'Does specialty pay vary by state?', answer: 'Significantly. A CRNA in California earns $250,000+ while the same role in Mississippi pays $170,000. Cost of living, demand, and state regulations all affect specialty pay by location.' },
];

const specialties = [
  { label: 'CRNA (Nurse Anesthetist)', avgSalary: '$214,200', hourlyRate: '$103.00/hr' },
  { label: 'Nurse Practitioner', avgSalary: '$126,260', hourlyRate: '$60.70/hr' },
  { label: 'Clinical Nurse Specialist', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'Nurse Midwife', avgSalary: '$120,880', hourlyRate: '$58.12/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: '$95,270', hourlyRate: '$45.80/hr' },
  { label: 'Operating Room RN', avgSalary: '$93,580', hourlyRate: '$45.00/hr' },
  { label: 'Emergency Room RN', avgSalary: '$89,010', hourlyRate: '$42.79/hr' },
  { label: 'Labor & Delivery RN', avgSalary: '$86,340', hourlyRate: '$41.51/hr' },
  { label: 'NICU RN', avgSalary: '$84,490', hourlyRate: '$40.62/hr' },
  { label: 'Cardiac Cath Lab RN', avgSalary: '$91,200', hourlyRate: '$43.85/hr' },
  { label: 'Oncology RN', avgSalary: '$83,100', hourlyRate: '$39.95/hr' },
  { label: 'Dialysis RN', avgSalary: '$79,500', hourlyRate: '$38.22/hr' },
  { label: 'Psych / Mental Health RN', avgSalary: '$80,200', hourlyRate: '$38.56/hr' },
  { label: 'Pediatric RN', avgSalary: '$78,900', hourlyRate: '$37.93/hr' },
  { label: 'Med-Surg RN', avgSalary: '$77,600', hourlyRate: '$37.31/hr' },
  { label: 'Charge Nurse', avgSalary: '$82,750', hourlyRate: '$39.78/hr' },
  { label: 'Home Health RN', avgSalary: '$75,400', hourlyRate: '$36.25/hr' },
  { label: 'School Nurse', avgSalary: '$62,000', hourlyRate: '$29.81/hr' },
];

export default function NursingSalaryBySpecialty() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'By Specialty 2026' },
      ]}
      h1="Nursing Salary by Specialty — 2026 Complete Guide"
      lastUpdated="April 2026"
      schemaTitle="Nursing Salary by Specialty 2026"
      schemaDescription="Compare nursing salaries across 20+ specialties for 2026."
      schemaUrl="/nursing-salary/by-specialty-2026"
      faqs={faqs}
    >
      <p>
        Your nursing specialty is the single biggest factor in your earning potential — even more than location or
        experience. The gap between the lowest and highest-paying specialties is over $150,000/year. Here&apos;s how
        every specialty stacks up in 2026.
      </p>

      <SalaryTable
        title="Nursing Salary by Specialty — Full Comparison Table"
        headers={['Specialty', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={specialties}
        source="BLS OEWS 2025 + NurseSalaryIntel survey data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in 2026</h2>
      <p>
        Advanced practice roles dominate the top: CRNAs ($214K), Nurse Practitioners ($126K), Nurse Midwives ($121K),
        and Clinical Nurse Specialists ($108K). Among bedside nursing specialties, ICU ($95K), OR ($94K), and Cath Lab ($91K) pay the most.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Experience Affects Specialty Pay</h2>
      <p>
        Entry-level specialty nurses earn 15–20% below the average, while nurses with 10+ years can earn 25–35% above.
        The steepest pay curves are in ICU and OR, where experienced nurses are in highest demand.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Certifications That Increase Your Salary</h2>
      <p>
        Specialty certifications typically add $3,000–$8,000/year: CCRN for ICU (+$5,200), CEN for ER (+$4,800),
        CNOR for OR (+$6,100), RNC-NIC for NICU (+$4,500). Most hospitals also offer certification differentials.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Specialty Pay: Hospital vs. Outpatient vs. Travel</h2>
      <p>
        Hospital-based roles pay 10–20% more than outpatient settings for the same specialty. Travel nursing adds another
        20–50% on top of hospital staff pay. The trade-off is stability and benefits.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Transition to a Higher-Paying Specialty</h2>
      <p>
        Common transition paths: Med-Surg → ICU → CRNA school, L&D → NICU, ER → Flight Nurse, Bedside → NP.
        Most transitions require 1–2 years in the target unit plus the relevant certification.
      </p>

      {/* Hub Links */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Explore Specialty Salary Guides</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/nursing-salary/crna-salary-by-state', title: 'CRNA Salary by State' },
          { href: '/nursing-salary/icu-nurse-salary', title: 'ICU Nurse Salary' },
          { href: '/nursing-salary/nicu-nurse-salary', title: 'NICU Nurse Salary' },
          { href: '/nursing-salary/nurse-practitioner-salary', title: 'Nurse Practitioner Salary' },
          { href: '/nursing-salary/er-nurse-salary', title: 'ER Nurse Salary' },
          { href: '/nursing-salary/labor-delivery-nurse-salary', title: 'L&D Nurse Salary' },
          { href: '/nursing-salary/charge-nurse-salary', title: 'Charge Nurse Salary' },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
            <span className="font-bold text-primary text-sm">{link.title} →</span>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
