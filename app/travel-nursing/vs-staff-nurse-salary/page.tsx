import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nurse vs Staff Nurse Salary 2026: $40K–$60K Gap Explained',
  description:
    'Travel nurses earn $40,000–$60,000 more than staff nurses in 2026 — before accounting for housing and benefits. See total comp comparison, retirement trade-offs, and who wins.',
};

const faqs = [
  { question: 'Do travel nurses make more than staff nurses?', answer: 'Yes — on average 20–50% more in gross weekly pay. However, staff nurses receive benefits (401k match, PTO, tuition reimbursement) worth $10,000–$20,000/year that narrow the gap in total compensation.' },
  { question: 'Do travel nurses get health insurance?', answer: 'Most agencies offer health, dental, and vision insurance. Quality and cost vary — some plans are excellent, others are bare-bones. Compare agency insurance against marketplace plans.' },
  { question: 'Can travel nurses contribute to 401k?', answer: 'Many agencies offer 401(k) plans, but matching is typically lower than hospital employers (1–3% vs. 4–6%). Some agencies require you to work a qualifying period before eligibility.' },
  { question: 'Is travel nursing worth it for new grads?', answer: 'Financially, travel nursing pays more — but most agencies require 1–2 years of experience. New grads are better served building skills at a staff position first, then transitioning to travel after gaining confidence in their specialty.' },
];

const comparison = [
  { label: 'Gross Weekly Pay', avgSalary: '$2,400–$3,200', hourlyRate: '$1,500–$1,900' },
  { label: 'Annual Gross (est.)', avgSalary: '$115,000–$155,000', hourlyRate: '$78,000–$99,000' },
  { label: 'Tax-Free Income', avgSalary: '$20,000–$35,000/yr', hourlyRate: '$0' },
  { label: 'Health Insurance', avgSalary: 'Agency plan (varies)', hourlyRate: 'Employer plan (strong)' },
  { label: '401(k) Match', avgSalary: '1–3%', hourlyRate: '4–6%' },
  { label: 'PTO / Sick Days', avgSalary: 'Usually none', hourlyRate: '15–25 days/yr' },
  { label: 'Tuition Reimbursement', avgSalary: 'Rare', hourlyRate: '$3,000–$5,000/yr' },
  { label: 'Job Security', avgSalary: 'Contract-based', hourlyRate: 'Stable employment' },
];

export default function TravelVsStaffSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'Travel vs. Staff Salary' },
      ]}
      h1="Travel Nurse vs. Staff Nurse Salary: 2026 Comparison"
      lastUpdated="April 2026"
      schemaTitle="Travel Nurse vs Staff Nurse Salary 2026"
      schemaDescription="Compare travel nurse and staff nurse salary, benefits, and total compensation for 2026."
      schemaUrl="/travel-nursing/vs-staff-nurse-salary"
      faqs={faqs}
    >
      <p>
        Is travel nursing actually worth it? The headline numbers look great — travel nurses earn 20–50% more than
        staff nurses. But when you factor in benefits, job security, and lifestyle costs, the picture gets more nuanced.
        Here&apos;s the full comparison.
      </p>

      <SalaryTable
        title="Travel Nurse vs. Staff Nurse — 2026 Comparison"
        headers={['Category', 'Travel Nurse', 'Staff Nurse']}
        rows={comparison}
        source="NurseSalaryIntel analysis, 2026"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Benefits and Retirement: What You Give Up</h2>
      <p>
        Staff nurses at major hospital systems receive benefits worth $10,000–$20,000/year: 401(k) matching (4–6%),
        health insurance with low premiums, 15–25 PTO days, tuition reimbursement ($3,000–$5,000), and sometimes
        pension contributions. Travel nurses trade these for higher gross pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tax Implications of Travel Nursing</h2>
      <p>
        The tax advantage of travel nursing is significant. With a valid tax home, $20,000–$35,000 of your annual
        income is tax-free (housing and M&IE stipends). This effectively saves $5,000–$10,000/year in taxes compared
        to a staff nurse earning the same gross amount.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Lifestyle and Work-Life Balance</h2>
      <p>
        Travel nursing offers adventure and variety, but it comes with trade-offs: time away from family, frequent
        moves, learning new hospital systems, and the stress of job uncertainty between contracts. Staff nursing
        provides stability, routine, and deeper relationships with colleagues and patients.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">When Staff Nursing Pays More Than Travel</h2>
      <p>
        Staff nursing can be financially better when: you&apos;re in a high-paying state with strong union contracts
        (California, New York), you value retirement matching heavily, you don&apos;t have a tax home and stipends
        become taxable, or you factor in the cost of maintaining a permanent residence while paying for travel housing.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Decide Which Is Right for You</h2>
      <p>
        Consider these factors: your financial goals (paying off loans, saving aggressively), your life stage
        (single vs. family), your specialty (some travel better than others), your risk tolerance, and how much
        you value stability vs. variety. Many nurses alternate — traveling for 1–2 years, then going staff for a while.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/travel-nursing/pay-package-breakdown" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Pay Package Breakdown →</span>
          <p className="text-xs text-on-surface-variant mt-1">Understand every line item in travel pay.</p>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Highest-Paying States →</span>
          <p className="text-xs text-on-surface-variant mt-1">Where staff nursing might pay as well as travel.</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
