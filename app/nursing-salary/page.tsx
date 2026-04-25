import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import RelatedResources from '@/components/RelatedResources';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Salary Hub 2026: Pay by Specialty, Experience & State',
  description:
    'Complete nursing salary data for 2026 — national averages, specialty breakdowns, experience multipliers, and guides for every major RN role from ICU to CRNA.',
  alternates: { canonical: 'https://nursesalaryintel.com/nursing-salary' },
  openGraph: {
    title: 'Nursing Salary Hub 2026: Pay by Specialty, Experience & State',
    description: 'National averages, specialty breakdowns, and experience multipliers for every major nursing role.',
    url: 'https://nursesalaryintel.com/nursing-salary',
  },
};

const specialtySnapshot = [
  { label: 'CRNA', avgSalary: '$214,000', hourlyRate: '$102.88/hr' },
  { label: 'Nurse Practitioner (NP)', avgSalary: '$126,000', hourlyRate: '$60.58/hr' },
  { label: 'Nurse Midwife (CNM)', avgSalary: '$122,000', hourlyRate: '$58.65/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: '$95,000', hourlyRate: '$45.67/hr' },
  { label: 'ER / Emergency RN', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: 'OR / Perioperative RN', avgSalary: '$89,000', hourlyRate: '$42.79/hr' },
  { label: 'Charge Nurse (RN)', avgSalary: '$87,000', hourlyRate: '$41.83/hr' },
  { label: 'Labor & Delivery RN', avgSalary: '$85,000', hourlyRate: '$40.87/hr' },
  { label: 'NICU RN', avgSalary: '$84,000', hourlyRate: '$40.38/hr' },
  { label: 'Med-Surg RN', avgSalary: '$72,000', hourlyRate: '$34.62/hr' },
];

const faqs = [
  {
    question: 'What is the average nursing salary in the US in 2026?',
    answer:
      'The national average RN salary is $89,010/year ($42.79/hour) in 2026, per BLS OEWS data. That average includes all experience levels and specialties. ICU, ER, and advanced practice nurses (NPs, CRNAs) earn significantly above average. New graduates and Med-Surg nurses typically earn below the national mean.',
  },
  {
    question: 'What nursing specialty pays the most?',
    answer:
      'CRNAs (Certified Registered Nurse Anesthetists) are the highest-paid nurses, averaging $214,000/year nationally. In top markets like California and New York, experienced CRNAs earn $250,000–$280,000. Among staff RN roles (BSN only), ICU nurses earn the most at approximately $95,000 nationally.',
  },
  {
    question: 'How much does experience affect nursing salary?',
    answer:
      'Significantly. Entry-level nurses (0–2 years) typically earn 15–25% below the state average. At 5–10 years with specialty certification, most nurses exceed the average. At 15+ years in a high-pay state, bedside nurses routinely earn $110,000–$140,000+. Union step systems in California and New York accelerate this growth through automatic annual step increases.',
  },
  {
    question: 'How does nursing salary compare to other healthcare roles?',
    answer:
      'Staff RNs earn more than most LPNs ($57,000 average) and CNAs ($38,000 average). NPs and CRNAs earn more than many physicians assistants ($130,000 average) and approach primary care physician salaries in some markets. Compared to hospital administrators and healthcare IT roles, experienced bedside RNs in high-pay states are competitive.',
  },
];

const relatedItems = [
  {
    href: '/nursing-salary/by-specialty-2026',
    title: 'Nursing Salary by Specialty 2026',
    desc: 'Complete specialty rankings with state adjustments and certification impact.',
  },
  {
    href: '/nursing-salary/salary-data-2026',
    title: 'Nurse Salary Statistics 2026',
    desc: 'BLS benchmarks, percentile data, and sourced numbers for every nursing role.',
  },
  {
    href: '/nursing-salary/icu-nurse-salary',
    title: 'ICU Nurse Salary',
    desc: 'Critical care pay by state, experience level, and CCRN certification.',
  },
  {
    href: '/nursing-salary/er-nurse-salary',
    title: 'ER Nurse Salary',
    desc: 'Emergency nursing pay rates, CEN certification premium, and top markets.',
  },
  {
    href: '/nursing-salary/charge-nurse-salary',
    title: 'Charge Nurse Salary',
    desc: 'Charge nurse pay differential, responsibilities, and whether the role is worth it.',
  },
  {
    href: '/nursing-salary/nicu-nurse-salary',
    title: 'NICU Nurse Salary',
    desc: 'Neonatal ICU pay by state and experience, plus specialty transition paths.',
  },
  {
    href: '/nursing-salary/nurse-practitioner-salary',
    title: 'Nurse Practitioner Salary',
    desc: 'NP pay by specialty, practice setting, and state — with PMHNP vs. FNP comparison.',
  },
  {
    href: '/nursing-salary/crna-salary-by-state',
    title: 'CRNA Salary by State',
    desc: 'Highest-paid nursing role — state rankings, program ROI, and job outlook.',
  },
  {
    href: '/nursing-salary/labor-delivery-nurse-salary',
    title: 'Labor & Delivery Nurse Salary',
    desc: 'L&D pay rates, on-call considerations, and AWHONN certification value.',
  },
];

export default function NursingSalaryHub() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary' },
      ]}
      h1="Nursing Salary Hub — 2026 Complete Guide"
      lastUpdated="April 2026"
      schemaTitle="Nursing Salary Hub 2026"
      schemaDescription="Complete 2026 nursing salary data: national averages, specialty breakdowns, experience multipliers, and role-specific guides."
      schemaUrl="/nursing-salary"
      faqs={faqs}
    >
      <p>
        The national average RN salary is $89,010/year — but that number obscures a $148,000 range between
        the lowest-paid nurse role (CNA-adjacent new grad in Mississippi) and the highest (CRNA in California).
        This hub organizes nursing salary data by specialty, experience, and state, and links to detailed
        guides for every major role.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nursing Salary Snapshot — All Major Roles (2026)</h2>
      <p>
        The table below shows national salary averages by nursing specialty. State, experience, and
        certifications all create significant variation from these baselines — use the role-specific guides
        linked below to get more precise data for your situation.
      </p>

      <SalaryTable
        title="Nursing Salary by Role (2026)"
        headers={['Nursing Role', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={specialtySnapshot}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Experience Affects Nursing Salary</h2>
      <p>
        Experience is the second-biggest salary driver after specialty and state. Entry-level nurses
        (0–2 years) typically earn $55,000–$75,000 nationally. Nurses at 3–5 years with specialty
        certification can reach $80,000–$105,000. At 10+ years, senior bedside nurses in high-pay states
        routinely earn $110,000–$140,000+.
      </p>
      <p>
        Union step systems — most common in California, New York, and New England — provide automatic
        annual step increases that significantly compress the experience-to-pay gap compared to at-will
        employment states. If you&apos;re in a union hospital, understand your step schedule: that systematic
        progression is worth tens of thousands over a 10-year period.
      </p>
      <Link href="/entry-level-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        See new grad RN salary data and first negotiation guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Certifications That Boost Nursing Pay</h2>
      <p>
        Board certifications provide the fastest return on investment for nurses not ready to change specialty
        or pursue advanced degrees. CCRN certification adds $5,000–$12,000/year for ICU nurses. CEN for ER
        nurses adds $4,000–$9,000. CNOR for OR nurses adds $5,000–$10,000. Most hospitals offer a one-time
        certification bonus ($1,000–$3,000) plus an ongoing hourly differential.
      </p>
      <Link href="/highest-paying-nursing-specialties" className="text-primary font-semibold hover:underline text-sm">
        See full specialty salary rankings and certification ROI →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Salary by State</h2>
      <p>
        Geography is the most powerful salary driver in nursing — more than experience or specialty in many
        cases. California pays $124,000/year on average; Mississippi pays $66,590. Even within states, major
        metro areas pay 15–30% more than rural markets. If you&apos;re willing to relocate or travel, the
        state premium alone can be worth $30,000–$57,000/year.
      </p>
      <Link href="/rn-salary-by-state" className="text-primary font-semibold hover:underline text-sm">
        See RN salary rankings for all 50 states →
      </Link>

      <RelatedResources
        heading="Nursing Salary Guides by Role"
        items={relatedItems}
        columns={2}
      />
    </SEOPageLayout>
  );
}
