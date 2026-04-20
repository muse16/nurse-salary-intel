import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Do Nurses Make Per Hour? (2026 RN Hourly Pay)',
  description: 'RN hourly pay rates in 2026 by state, specialty, and experience. See what nurses make per hour across the country and how to increase your hourly rate.',
};

const hourlyByState = [
  { label: 'California', avgSalary: '$59.62/hr', hourlyRate: '$124,000/yr avg' },
  { label: 'New York', avgSalary: '$47.38/hr', hourlyRate: '$98,560/yr avg' },
  { label: 'Nevada', avgSalary: '$43.37/hr', hourlyRate: '$90,210/yr avg' },
  { label: 'Arizona', avgSalary: '$39.42/hr', hourlyRate: '$82,000/yr avg' },
  { label: 'Texas', avgSalary: '$39.19/hr', hourlyRate: '$81,510/yr avg' },
  { label: 'Florida', avgSalary: '$36.75/hr', hourlyRate: '$76,450/yr avg' },
  { label: 'National Average', avgSalary: '$42.88/hr', hourlyRate: '$89,010/yr avg' },
];

const faqs = [
  {
    question: 'What is the national average hourly wage for nurses?',
    answer: 'The national average RN hourly rate is approximately $42.88/hr in 2026, based on a mean annual salary of $89,010. California RNs lead at $59.62/hr; Mississippi RNs are at the bottom at approximately $31.88/hr. Specialty, union status, and shift differential all affect actual take-home hourly earnings.',
  },
  {
    question: 'How much do nurses make per hour in California vs Texas?',
    answer: 'California RNs average $59.62/hr; Texas RNs average $39.19/hr — a $20.43/hr difference. After California state income tax (up to 13.3%), the net hourly gap narrows to roughly $13–$15/hr. On a 36-hour workweek, California nurses still take home significantly more even after tax.',
  },
  {
    question: 'How do I increase my hourly rate as a nurse?',
    answer: 'The most effective strategies are: obtain a specialty certification (CCRN, CEN, CNOR) — adds $2.50–$5.75/hr; work night shifts — differentials add $4–$15/hr; advance to a higher-acuity specialty (ICU, ER, OR); pursue an NP or CRNA credential; or relocate to a higher-paying state. Travel nursing offers the fastest hourly rate increase short-term.',
  },
];

export default function HowMuchDoNursesMakePerHour() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'How Much Do Nurses Make Per Hour' },
      ]}
      h1="How Much Do Nurses Make Per Hour — 2026 RN Hourly Pay"
      lastUpdated="April 2026"
      schemaTitle="How Much Do Nurses Make Per Hour 2026"
      schemaDescription="RN hourly pay rates by state, specialty, and experience level in 2026."
      schemaUrl="/how-much-do-nurses-make-per-hour"
      faqs={faqs}
    >
      <p>
        Registered nurses in the United States earn an average of $42.88 per hour in 2026 — but that number obscures a range from $31/hr in the lowest-paying states to $75+/hr for experienced California ICU nurses on union contracts. Where you work, what specialty you&apos;re in, and whether you work nights all have more impact on your hourly rate than your raw years of experience.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Hourly Pay by State</h2>
      <p>
        State is the single biggest driver of hourly nurse pay. The gap between top and bottom states exceeds $28/hr — more than the total hourly rate in some low-paying states.
      </p>

      <SalaryTable
        title="RN Hourly Pay by State (2026)"
        headers={['State', 'Avg. Hourly Rate', 'Avg. Annual Salary']}
        rows={hourlyByState}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate hourly pay for your specific state, specialty, and experience level. For detailed state breakdowns: <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary</Link>, <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">Texas RN salary</Link>, <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">New York RN salary</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Hourly Pay by Specialty</h2>
      <p>
        Specialty choice adds $5–$70/hr above the basic RN rate depending on role and required credentials:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>CRNA:</strong> $102.88/hr national average; California CRNAs earn $120–$135/hr</li>
        <li><strong>Nurse Practitioner:</strong> $60.58/hr national average</li>
        <li><strong>ICU / Critical Care RN:</strong> $45.67/hr national average</li>
        <li><strong>ER RN:</strong> $43.75/hr national average</li>
        <li><strong>OR RN:</strong> $42.79/hr national average</li>
        <li><strong>Med-Surg RN:</strong> $34.62/hr national average — the entry baseline</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Shift Differentials Add to Your Hourly Rate</h2>
      <p>
        Base hourly rate is only part of what nurses actually earn per hour worked. Shift differentials, overtime premiums, and specialty stipends significantly increase effective hourly earnings:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Night shift differential:</strong> Adds 10–25% to base hourly — approximately $4–$15/hr depending on your base rate and employer</li>
        <li><strong>Weekend differential:</strong> Adds 8–15% above base — $3–$9/hr for weekend shifts</li>
        <li><strong>Overtime (1.5x):</strong> Adds 50% above base rate for qualifying overtime hours; California daily overtime kicks in after hour 8 in a single shift</li>
        <li><strong>On-call / call-back pay:</strong> Typically $5–$10/hr for on-call time plus 1.5x for actual call-back hours worked</li>
      </ul>
      <p>
        A Texas ICU nurse earning $43/hr base who works nights and picks up overtime can earn $58–$65/hr effective rate during those shifts — well above the state average and comparable to lower-pay California markets.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Converting Hourly Rate to Annual Salary</h2>
      <p>
        The standard nurse work year calculation: hourly rate × 2,080 hours (52 weeks × 40 hours). Most staff nurses work 36 hours/week on three 12-hour shifts — so the exact annual formula is hourly rate × 1,872 hours for base pay, then add differential and overtime separately.
      </p>
      <p>
        A nurse earning $42/hr on a three-day 12-hour shift schedule earns $78,624 in base pay annually, before any differentials or overtime. With 15% night differential on all shifts, that becomes approximately $90,418. Add one extra overtime shift per week on average and total annual compensation approaches $100,000+ — significantly above what the headline $42/hr rate implies.
      </p>
    </SEOPageLayout>
  );
}
