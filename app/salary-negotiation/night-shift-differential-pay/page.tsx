import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Night Shift Differential Pay for Nurses 2026 | Rates',
  description:
    'How much extra do nurses earn for night shifts? See 2026 night shift differential rates by state, hospital system, and specialty.',
};

const faqs = [
  { question: 'How much is night shift differential for nurses?', answer: 'Night shift differentials average $4–$7/hour nationally in 2026. Rates range from $2/hr at smaller facilities to $10+/hr at major academic medical centers.' },
  { question: 'Is night shift differential taxed differently?', answer: 'No — night differential is regular taxable income, subject to the same federal and state taxes as your base pay. It does count toward overtime calculations.' },
  { question: 'Do all hospitals pay night differential?', answer: 'Most hospitals pay some form of night differential, but amounts vary widely. Some facilities build differentials into base pay for 24/7 positions rather than paying separately.' },
  { question: 'Can I negotiate night shift differential?', answer: 'Yes, especially at contract or offer stage. Differentials are often negotiable within 10–20% of the offered rate, particularly for high-demand specialties or hard-to-staff shifts.' },
];

const differentialRates = [
  { label: 'National Average', avgSalary: '$4.50–$5.50/hr', hourlyRate: '10–13% of base' },
  { label: 'Major Academic Medical Centers', avgSalary: '$7–$10/hr', hourlyRate: '15–20% of base' },
  { label: 'Community Hospitals', avgSalary: '$3–$5/hr', hourlyRate: '8–12% of base' },
  { label: 'Rural/Small Hospitals', avgSalary: '$1.50–$3/hr', hourlyRate: '5–8% of base' },
  { label: 'Unionized Hospitals (CA, NY, WA)', avgSalary: '$6–$12/hr', hourlyRate: '15–25% of base' },
];

const byState = [
  { label: 'California', avgSalary: '$7–$12/hr' },
  { label: 'New York', avgSalary: '$6–$10/hr' },
  { label: 'Washington', avgSalary: '$6–$9/hr' },
  { label: 'Massachusetts', avgSalary: '$5–$9/hr' },
  { label: 'Texas', avgSalary: '$3–$6/hr' },
  { label: 'Florida', avgSalary: '$2.50–$5/hr' },
  { label: 'Ohio', avgSalary: '$3–$5/hr' },
];

const differentialTypes = [
  { label: 'Night Shift (7p–7a)', avgSalary: '$4–$7/hr' },
  { label: 'Weekend (Fri PM–Sun)', avgSalary: '$3–$6/hr' },
  { label: 'Holiday', avgSalary: '$5–$15/hr (1.5x)' },
  { label: 'Charge Nurse', avgSalary: '$2–$5/hr' },
  { label: 'Preceptor', avgSalary: '$1–$3/hr' },
  { label: 'Float Pool / PRN', avgSalary: '$3–$8/hr' },
];

export default function NightShiftDifferential() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/salary-negotiation/nurse-playbook' },
        { label: 'Night Shift Differential' },
      ]}
      h1="Night Shift Differential Pay for Nurses — 2026 Rates"
      lastUpdated="April 2026"
      schemaTitle="Night Shift Differential Pay for Nurses 2026"
      schemaDescription="Night shift differential rates by state, hospital system, and specialty for nurses in 2026."
      schemaUrl="/salary-negotiation/night-shift-differential-pay"
      faqs={faqs}
    >
      <p>
        Night shift differential is one of the most overlooked components of nurse compensation. A $5/hr
        differential on 36 hours/week adds up to nearly $10,000/year in additional income. Here&apos;s what
        to expect — and how to negotiate for more.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What Is Night Shift Differential Pay?</h2>
      <p>
        Night shift differential is extra hourly pay for working overnight shifts (typically 7p–7a or 11p–7a).
        The differential compensates for the physical toll and inconvenience of working against your circadian rhythm.
      </p>

      <SalaryTable title="Average Night Shift Differential Rates" headers={['Setting', 'Rate Range', 'Typical % of Base']} rows={differentialRates} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Differential by State</h2>
      <SalaryTable title="Night Differential Rates by State" headers={['State', 'Night Differential Range']} rows={byState} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Differential by Hospital System</h2>
      <p>
        Major academic medical centers (Kaiser, Cleveland Clinic, Mayo, NYU Langone) pay the highest differentials
        at $7–$10/hr. Unionized hospitals also pay above-average rates. Rural and smaller community hospitals
        pay the least, often $1.50–$3/hr.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Weekend vs. Night vs. Holiday Differentials</h2>
      <SalaryTable title="Differential Rates by Shift Type" headers={['Shift Type', 'Typical Differential']} rows={differentialTypes} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Higher Differential</h2>
      <p>
        Differentials are negotiable, especially for high-demand shifts. At offer stage, ask for the differential
        in writing and push for 10–20% above the initial number. For existing positions, propose a differential
        increase at your annual review, backed by data showing what comparable hospitals pay.
      </p>
      <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="text-primary font-semibold hover:underline text-sm">
        Full negotiation guide →
      </Link>
    </SEOPageLayout>
  );
}
