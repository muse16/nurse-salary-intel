import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Practitioner Salary 2026: $126,260/yr + PMHNP Tops $165K',
  description:
    'NPs earn $126,260/yr ($60.70/hr) in 2026. PMHNPs earn $140K–$165K. See NP salary by state and specialty (FNP, PMHNP, AGNP) — plus ROI vs. remaining staff RN.',
};

const faqs = [
  { question: 'How much do nurse practitioners make?', answer: 'The national average NP salary is $126,260/year ($60.70/hr) in 2026. Salaries range from $105,000 in lower-paying states to $155,000+ in California and New York.' },
  { question: 'Which NP specialty pays the most?', answer: 'Psychiatric-Mental Health NPs (PMHNPs) earn the most at $140,000–$165,000/year, driven by severe mental health provider shortages. Acute Care NPs and Emergency NPs also command premium pay.' },
  { question: 'Do NPs make more than RNs?', answer: 'Yes — NPs earn approximately $37,000–$50,000 more per year than the average RN. The investment in graduate education typically pays for itself within 3–5 years.' },
  { question: 'What state pays nurse practitioners the most?', answer: 'California ($155,000), New York ($145,000), and New Jersey ($142,000) pay NPs the most. States with full practice authority may offer higher NP salaries due to expanded scope.' },
  { question: 'Is NP school worth it financially?', answer: 'For most nurses, yes. NP programs cost $40,000–$100,000. With a salary increase of $37K–$50K/year over RN pay, most NPs recoup their education investment in 2–4 years.' },
];

const stateData = [
  { label: 'California', avgSalary: '$155,000', hourlyRate: '$74.52/hr' },
  { label: 'New York', avgSalary: '$145,000', hourlyRate: '$69.71/hr' },
  { label: 'New Jersey', avgSalary: '$142,000', hourlyRate: '$68.27/hr' },
  { label: 'Washington', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'Massachusetts', avgSalary: '$136,000', hourlyRate: '$65.38/hr' },
  { label: 'Texas', avgSalary: '$118,000', hourlyRate: '$56.73/hr' },
  { label: 'Florida', avgSalary: '$112,000', hourlyRate: '$53.85/hr' },
  { label: 'National Average', avgSalary: '$126,260', hourlyRate: '$60.70/hr' },
];

const specialtyData = [
  { label: 'Psychiatric-Mental Health (PMHNP)', avgSalary: '$145,000–$165,000' },
  { label: 'Acute Care (ACNP)', avgSalary: '$130,000–$150,000' },
  { label: 'Emergency NP (ENP)', avgSalary: '$128,000–$148,000' },
  { label: 'Family Practice (FNP)', avgSalary: '$118,000–$135,000' },
  { label: 'Adult-Gerontology (AGNP)', avgSalary: '$115,000–$132,000' },
  { label: 'Pediatric NP (PNP)', avgSalary: '$112,000–$128,000' },
  { label: 'Women\'s Health NP (WHNP)', avgSalary: '$110,000–$130,000' },
];

export default function NursePractitionerSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Nurse Practitioner Salary' },
      ]}
      h1="Nurse Practitioner Salary 2026: Pay by State & Specialty"
      lastUpdated="April 2026"
      schemaTitle="Nurse Practitioner Salary 2026"
      schemaDescription="NP salary data by state, specialty, and practice setting for 2026."
      schemaUrl="/nursing-salary/nurse-practitioner-salary"
      faqs={faqs}
    >
      <p>
        Nurse practitioners are among the fastest-growing and highest-paid roles in healthcare. In 2026, NPs
        earn an average of $126,260/year — with PMHNPs and acute care NPs commanding even higher premiums.
        Here&apos;s the complete NP salary picture.
      </p>

      <SalaryTable title="NP Salary by State — 2026" headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={stateData} source="BLS OEWS 2025" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Salary by Specialty</h2>
      <p>
        NP specialty choice has a significant impact on salary. Psychiatric-Mental Health NPs (PMHNPs) earn the most
        due to severe mental health provider shortages nationwide.
      </p>

      <SalaryTable title="NP Salary by Specialty (2026)" headers={['NP Specialty', 'Salary Range']} rows={specialtyData} source="AANP survey + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Salary: Hospital vs. Private Practice vs. Telehealth</h2>
      <p>
        Hospital-employed NPs earn $120,000–$140,000 with strong benefits. Private practice NPs earn $130,000–$160,000
        but may pay for their own benefits. Telehealth NPs earn $100,000–$130,000 with maximum flexibility.
        NP practice owners can earn $200,000+ but take on business risk.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Higher NP Salary</h2>
      <p>
        NPs have more negotiating power than most nurses because of the provider shortage. Negotiate on: base salary,
        RVU bonuses, CME allowance, student loan repayment, schedule flexibility, and scope of practice.
      </p>
      <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="text-primary font-semibold hover:underline text-sm">
        Full negotiation guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP vs. PA Salary Comparison</h2>
      <p>
        NPs and PAs earn similar salaries nationally ($126K vs. $128K). The main differences are in specialty distribution
        and scope of practice laws, which vary by state. In full-practice-authority states, NPs may earn more due to
        independent billing capability.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Job Outlook and Growth</h2>
      <p>
        The BLS projects 45% growth in NP employment through 2032 — one of the fastest-growing occupations in the US.
        Primary care shortages, expanded scope of practice laws, and growing acceptance of NP-led care drive demand.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/nursing-salary/crna-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">CRNA Salary (Highest-Paid NP Role) →</span>
        </Link>
        <Link href="/rn-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">RN Salary by State →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
