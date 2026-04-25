import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import RelatedResources from '@/components/RelatedResources';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Highest-Paying Nursing Specialties 2026: Top 10 (CRNA $214K)',
  description:
    'CRNAs top the 2026 list at $214,000/yr ($102.88/hr), followed by NPs at $126K and CNMs at $122K. See all 10 highest-paying nursing specialties with hourly rates and entry paths.',
  alternates: { canonical: 'https://nursesalaryintel.com/highest-paying-nursing-specialties' },
  openGraph: {
    title: 'Highest-Paying Nursing Specialties 2026: Top 10 (CRNA $214K)',
    description: 'CRNAs lead at $214K. Full top-10 with hourly rates, ROI, and entry paths.',
    url: 'https://nursesalaryintel.com/highest-paying-nursing-specialties',
  },
};

const specialtyData = [
  { label: 'CRNA (Certified Registered Nurse Anesthetist)', avgSalary: '$214,000', hourlyRate: '$102.88/hr' },
  { label: 'Nurse Practitioner (NP)', avgSalary: '$126,000', hourlyRate: '$60.58/hr' },
  { label: 'Nurse Midwife (CNM)', avgSalary: '$122,000', hourlyRate: '$58.65/hr' },
  { label: 'Clinical Nurse Specialist (CNS)', avgSalary: '$118,000', hourlyRate: '$56.73/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: '$95,000', hourlyRate: '$45.67/hr' },
  { label: 'ER / Emergency RN', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: 'OR / Perioperative RN', avgSalary: '$89,000', hourlyRate: '$42.79/hr' },
  { label: 'Labor & Delivery RN', avgSalary: '$85,000', hourlyRate: '$40.87/hr' },
  { label: 'NICU RN', avgSalary: '$84,000', hourlyRate: '$40.38/hr' },
  { label: 'Med-Surg RN (entry level)', avgSalary: '$72,000', hourlyRate: '$34.62/hr' },
];

const faqs = [
  {
    question: 'What is the highest paying nursing specialty?',
    answer: 'CRNAs (Certified Registered Nurse Anesthetists) are the highest-paid nurses, averaging $214,000/year nationally. In high-cost states like California, top CRNAs earn $270,000+. The role requires a master\'s or doctoral degree and typically 2+ years of ICU experience before entering a CRNA program.',
  },
  {
    question: 'How much more do specialized nurses make than general RNs?',
    answer: 'Significant differentials exist. ICU nurses earn $15,000–$25,000 more than Med-Surg nurses. NPs earn $40,000–$55,000 more than staff RNs. CRNAs earn $120,000–$145,000 more than the average RN. Specialty certifications (CCRN, CEN, CNOR) at the staff RN level typically add $5,000–$12,000/year without a degree change.',
  },
  {
    question: 'Which specialty has the best work-life balance relative to pay?',
    answer: 'Nurse Practitioners consistently rank highly for work-life balance relative to pay. Most NP roles offer Monday–Friday office hours, predictable schedules, and salaries of $110,000–$145,000. ICU travel nurses maximize hourly pay but face the most demanding shifts. OR nurses often enjoy set schedules with minimal on-call requirements at most facilities.',
  },
];

export default function HighestPayingNursingSpecialties() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Highest Paying Nursing Specialties' },
      ]}
      h1="Highest Paying Nursing Specialties — 2026 Salary Guide"
      lastUpdated="April 2026"
      schemaTitle="Highest Paying Nursing Specialties 2026"
      schemaDescription="Salary rankings for all major nursing specialties in 2026, from CRNA to Med-Surg RN."
      schemaUrl="/highest-paying-nursing-specialties"
      faqs={faqs}
    >
      <p>
        Nursing is not a single salary. Depending on your specialty, education level, and state of practice, you can earn anywhere from $66,000 as a starting Med-Surg nurse to $270,000+ as an experienced CRNA in California. Understanding where specialties sit on the pay spectrum is the first step toward maximizing your earning trajectory.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nursing Specialty Salary Rankings (2026)</h2>
      <p>
        The following ranges reflect national averages. State-level pay varies significantly — California salaries run 20–40% above national averages for most specialties, while Southern states often run 10–20% below. Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to adjust for your state and experience level.
      </p>

      <SalaryTable
        title="Nurse Salary by Specialty (2026)"
        headers={['Specialty', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={specialtyData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Advanced Practice: CRNAs, NPs, and CNMs</h2>
      <p>
        The four Advanced Practice Registered Nurse (APRN) roles — CRNA, NP, CNM, and CNS — command the highest salaries in nursing because they require master&apos;s or doctoral-level education and carry independent practice authority in many states. CRNAs are in a class of their own: they administer anesthesia, a high-skill, high-liability service with limited practitioner supply. National shortages of CRNAs have driven salaries above $200,000 nationally, with top markets reaching $250,000–$280,000.
      </p>
      <p>
        Nurse Practitioners represent the most common APRN path and the best balance of salary, demand, and lifestyle. The NP workforce is projected to grow 46% through 2033, and salaries have risen steadily as full-practice authority expands across more states. Psychiatric-mental health NPs (PMHNPs) have seen the sharpest salary growth in recent years due to the behavioral health shortage.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Staff RN Specialties: ICU, ER, OR, and L&amp;D</h2>
      <p>
        Among staff RN roles requiring only a BSN, ICU and ER positions pay the most — and for good reason. Critical care and emergency nursing demand rapid clinical judgment, broad technical skills, and tolerance for high-acuity, high-volume environments. ICU nurses typically earn $8,000–$15,000 more than floor nurses at the same facility, and the specialty opens direct pathways to CRNA school. See the <Link href="/icu-nurse-salary-2026/" className="text-primary hover:underline">full ICU salary breakdown</Link> for 2026 pay by experience, state, and certification.
      </p>
      <p>
        OR nursing commands a premium for technical specialization and procedure-based workflows. L&amp;D and NICU nurses earn above-average salaries with somewhat more predictable patient populations than ICU or ER. Med-Surg nursing, while the foundation of RN practice, pays the least among hospital specialties — making it a common launching point rather than a long-term destination for nurses focused on earnings.
      </p>
      <p>
        For state-by-state specialty salary data, compare <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary</Link> with <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">Texas RN salary</Link> and <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">New York RN salary</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Certifications That Boost Specialty Pay</h2>
      <p>
        For nurses who want to increase specialty pay without changing roles, board certifications are the most direct path. CCRN certification for ICU nurses adds $5,000–$12,000/year at most hospitals. CEN for ER nurses adds $4,000–$9,000. CNOR for OR nurses adds $5,000–$10,000. These certifications typically require 2 years of specialty experience and are renewed every 3–5 years.
      </p>
      <p>
        Many hospitals offer a one-time certification bonus ($1,000–$3,000) plus an ongoing hourly differential for maintaining active specialty certification. Combined with base pay, the total return on a certification investment is typically realized within 3–6 months.
      </p>

      <RelatedResources
        heading="Explore More Salary Resources"
        items={[
          { href: '/rn-salary-by-state', title: 'RN Salary by State', desc: 'All 50 states ranked by average RN pay with cost-of-living context.' },
          { href: '/nursing-salary', title: 'Nursing Salary Hub', desc: 'Comprehensive salary data and guides for every major RN and APRN role.' },
          { href: '/icu-nurse-salary-2026', title: 'ICU Nurse Salary 2026', desc: 'Critical care pay by state, experience level, and CCRN certification.' },
          { href: '/nursing-salary/er-nurse-salary', title: 'ER Nurse Salary', desc: 'Emergency nursing pay rates, CEN certification premium, and top markets.' },
          { href: '/nursing-salary/crna-salary-by-state', title: 'CRNA Salary by State', desc: 'The highest-paid nursing role — state rankings and program ROI.' },
          { href: '/nursing-salary/nurse-practitioner-salary', title: 'Nurse Practitioner Salary', desc: 'NP pay by specialty and state, with PMHNP vs. FNP comparison.' },
          { href: '/entry-level-nurse-salary', title: 'New Grad RN Salary', desc: 'Starting pay, sign-on bonuses, and first negotiation playbook.' },
          { href: '/salary-negotiation/night-shift-differential-pay', title: 'Night Shift Differential Pay', desc: 'How much more night nurses earn — rates by specialty and state.' },
        ]}
        columns={2}
      />
    </SEOPageLayout>
  );
}
