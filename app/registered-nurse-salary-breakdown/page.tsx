import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Registered Nurse Salary Breakdown (2026): Full RN Pay Analysis',
  description: 'Complete breakdown of registered nurse salary in 2026. See base pay, differentials, overtime, benefits value, and total compensation by state and specialty.',
};

const totalCompData = [
  { label: 'Base annual salary', avgSalary: '$89,010 national avg', hourlyRate: 'State ranges: $66K–$124K' },
  { label: 'Night shift differential', avgSalary: '+$8,000–$18,000/yr', hourlyRate: '10–25% of base' },
  { label: 'Weekend differential', avgSalary: '+$4,000–$10,000/yr', hourlyRate: '8–15% of base' },
  { label: 'Overtime premium (weekly)', avgSalary: '+$10,000–$30,000/yr', hourlyRate: '1.5x base rate' },
  { label: 'Health insurance (employer)', avgSalary: '$8,000–$16,000/yr', hourlyRate: 'Employer-subsidized benefit' },
  { label: 'Retirement match (401k/403b)', avgSalary: '$2,500–$5,500/yr', hourlyRate: '3–6% of base typical' },
  { label: 'Specialty certification differential', avgSalary: '+$4,000–$12,000/yr', hourlyRate: 'CCRN, CEN, CNOR' },
];

const faqs = [
  {
    question: 'What is the total compensation for a registered nurse?',
    answer: 'An RN earning $89,000 base salary who works consistent nights and picks up modest overtime has a total compensation package worth $120,000–$140,000 when employer health insurance, retirement contributions, shift differentials, and overtime are included. California RNs with union contracts frequently exceed $160,000 in total compensation.',
  },
  {
    question: 'How does nurse pay break down between base and differentials?',
    answer: 'For a typical acute care RN working three 12-hour shifts per week, approximately 70–80% of total earnings come from base pay and 20–30% from differentials, overtime, and certification stipends. Night nurses and those in high-overtime specialties can see differential and overtime income represent 35–45% of total earnings.',
  },
  {
    question: 'Are nursing benefits part of the salary comparison?',
    answer: 'They should be. Employer-paid health insurance for a family is worth $20,000–$28,000/year. A 5% 401k match on a $85,000 salary is $4,250/year in additional compensation. Pension plans at some academic medical centers add further value. A hospital offering $78,000 with full family benefits and pension may beat a $88,000 offer with high-deductible insurance and no match.',
  },
];

export default function RegisteredNurseSalaryBreakdown() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Registered Nurse Salary Breakdown' },
      ]}
      h1="Registered Nurse Salary Breakdown — Full RN Pay Analysis 2026"
      lastUpdated="April 2026"
      schemaTitle="Registered Nurse Salary Breakdown 2026"
      schemaDescription="Complete breakdown of RN total compensation including base pay, differentials, overtime, and benefits."
      schemaUrl="/registered-nurse-salary-breakdown"
      faqs={faqs}
    >
      <p>
        The headline number you see on a job posting — $82,000/year — tells you less than half the story of what you&apos;ll actually earn and receive. Understanding how RN compensation is structured across base pay, shift differentials, overtime, and benefits determines whether an offer is genuinely competitive or whether a seemingly lower salary at a different hospital would actually put more money in your pocket.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Full RN Compensation Components (2026)</h2>

      <SalaryTable
        title="RN Total Compensation Breakdown"
        headers={['Component', 'Typical Value', 'Notes']}
        rows={totalCompData}
        source="NurseSalaryIntel + BLS compensation data"
      />

      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model your total compensation at your specific state, specialty, and shift schedule. For state salary baselines: <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary</Link>, <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">Texas RN salary</Link>, <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">New York RN salary</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Base Salary vs. Total Earnings: A Real Example</h2>
      <p>
        Consider two nurses both with 5 years of ICU experience, one in California and one in Texas:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California ICU RN:</strong> $118,000 base + $20,000 night differential (17%) + $22,000 daily overtime (California law, 4 hrs/shift × 1.5x) = $160,000 gross earnings. After 11% effective state + federal tax, approximately $108,000 net. Employer health insurance (family): $22,000 value. 401k match (5%): $5,900. Total value: ~$136,000 net.</li>
        <li><strong>Texas ICU RN:</strong> $88,000 base + $14,000 night differential (16%) + $8,000 overtime (weekly threshold only) = $110,000 gross earnings. After federal tax only (no state tax), approximately $83,000 net. Employer health insurance (family): $18,000 value. 401k match (4%): $3,520. Total value: ~$105,000 net.</li>
      </ul>
      <p>
        The real gap: $31,000 in net total compensation advantage for California, not the $40,000+ gross salary gap that headlines imply.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Benefits Nurses Often Undervalue</h2>
      <p>
        When comparing offers, nurses frequently focus on base salary and overlook benefits that represent substantial real value:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Employer-paid health insurance:</strong> Family coverage at large hospital systems is often fully or mostly employer-paid. The difference between a plan with $200/month premium and one with $800/month premium is $7,200/year in out-of-pocket cost.</li>
        <li><strong>Defined benefit pension plans:</strong> Less common than they used to be, but major academic medical centers (UCSF, certain VA systems, some large nonprofits) still offer traditional pensions. A pension worth 2% of final salary per year of service over 30 years is worth $50,000–$80,000 annually in retirement — rivaling 401k balances for nurses who stay long-term.</li>
        <li><strong>Loan repayment:</strong> PSLF (Public Service Loan Forgiveness) applies at 501(c)(3) nonprofit hospitals. Nurses with $80,000–$150,000 in student loans who work at qualifying nonprofits for 10 years have the remaining balance forgiven tax-free after 120 qualifying payments.</li>
        <li><strong>Tuition reimbursement:</strong> Most major systems offer $2,000–$10,000/year in tuition assistance. For nurses pursuing NP or CRNA programs while working, this can offset $20,000–$40,000 in education costs over a multi-year program.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Maximizing Your Total RN Compensation</h2>
      <p>
        The nurses who earn the most in this profession combine multiple levers simultaneously: high-base-salary state or market, night shift differential, overtime, specialty certification, and strong benefits. Each layer compounds. A nurse earning $90,000 base with 20% night differential, moderate overtime, and a 5% 401k match can have total annual compensation — including benefits value — exceeding $140,000 without an advanced degree or specialty credential.
      </p>
      <p>
        Start by benchmarking your current offer against market rates for your location and specialty. Review your employment contract before signing — mandatory overtime clauses, cancellation penalties, and float pool requirements all affect your real compensation. Use the free <Link href="/audit" className="text-primary hover:underline">contract audit tool</Link> to surface hidden terms in any nurse employment agreement.
      </p>
    </SEOPageLayout>
  );
}
