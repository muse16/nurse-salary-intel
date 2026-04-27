import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nursing Contract Review Checklist 2026: 15 Must-Check Items',
  description:
    'Free 15-point checklist to review your travel nursing contract before signing. Verify pay, stipends, cancellation clauses, and more — or get a $9 professional audit.',
};

const faqs = [
  { question: 'What should I look for in a travel nursing contract?', answer: 'Check pay rate and stipends vs. market, cancellation clauses (ideally mutual), floating limits, guaranteed hours, overtime language, completion bonus terms, insurance start date, and travel reimbursement.' },
  { question: 'Can I negotiate after I\'ve already signed?', answer: 'Generally no — once you sign, the terms are binding. Some agencies will make limited adjustments if you haven\'t started the assignment yet, but you lose most of your leverage after signing.' },
  { question: 'Should I have a lawyer review my contract?', answer: 'For standard travel contracts, a lawyer ($300–$500/hour) is usually overkill. A specialized contract audit kit ($9) covers 95% of what a lawyer would flag at a fraction of the cost.' },
  { question: 'How long should I spend reviewing a contract?', answer: 'Plan on at least 1–2 hours. Read every clause. Don\'t let recruiters pressure you to sign quickly — any reputable agency will give you time to review properly.' },
];

const checklist = [
  { section: 'Pay Package', items: ['Base hourly rate broken out from stipends', 'Housing stipend at or above GSA rate', 'M&IE per diem matches GSA rate', 'Completion bonus terms and conditions', 'Overtime pay at 1.5x base rate', 'Guaranteed hours (minimum 36/week)'] },
  { section: 'Cancellation & Termination', items: ['Mutual cancellation terms', 'Equal notice periods for both parties', 'Penalty caps disclosed in dollar amounts', 'No clawback on completion bonus if facility cancels'] },
  { section: 'Scheduling & Working Conditions', items: ['Floating policy (limited to your specialty)', 'On-call requirements and compensation', 'Weekend/holiday frequency', 'Orientation fully paid'] },
  { section: 'Benefits', items: ['Health insurance start date (day one preferred)', 'Dental and vision coverage', '401(k) eligibility and match', 'PTO or sick leave accrual'] },
  { section: 'Licensure & Travel', items: ['Licensure reimbursement amount and timing', 'Certification reimbursement', 'Travel reimbursement amount', 'Moving expense coverage'] },
];

export default function TravelContractReview() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/salary-negotiation/nurse-playbook' },
        { label: 'Travel Contract Review' },
      ]}
      h1="Travel Nursing Contract Review: Your Pre-Signing Checklist"
      lastUpdated="April 2026"
      schemaType="HowTo"
      schemaTitle="Travel Nursing Contract Review Guide 2026"
      schemaDescription="Free checklist to review travel nursing contracts before signing."
      schemaUrl="/salary-negotiation/travel-nursing-contract-review"
      faqs={faqs}
    >
      <p>
        Never sign a travel nursing contract without a thorough review. This checklist covers every clause worth
        verifying — print it out, walk through it clause by clause, and flag anything that doesn&apos;t match.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Contract Review Checklist</h2>
      {checklist.map((section) => (
        <div key={section.section} className="bg-surface-container-lowest rounded-lg border border-outline-variant p-5 my-4">
          <h3 className="font-bold text-on-surface mb-3">{section.section}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-primary font-bold shrink-0 mt-0.5">☐</span>
                <span className="text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <ContractAuditCTA variant="banner" heading="Want an expert-level review? Get the $9 Contract Audit Kit." />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Pay Package: What to Verify</h2>
      <p>
        Make sure your pay package breaks out base rate, housing, and M&IE as separate line items — not rolled
        into a blended rate. Blended rates hide how much is taxable vs. tax-free.
      </p>
      <Link href="/travel-nursing/pay-package-breakdown" className="text-primary font-semibold hover:underline text-sm">
        Full pay package breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Cancellation and Termination Clauses</h2>
      <p>
        The most important clause in any travel contract. Verify mutual cancellation terms with equal notice
        periods. If the facility can cancel with 24 hours notice, you should be able to as well.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Housing and Stipend Terms</h2>
      <p>
        Verify stipend amounts against GSA per diem rates for the assignment location. If your stipend is below
        GSA rate, push back — it&apos;s a clear sign the agency is keeping margin.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Floating, On-Call, and Overtime Policies</h2>
      <p>
        Get floating limits in writing — ideally restricted to units within your specialty. Confirm on-call
        compensation rates and frequency. Ensure overtime is explicitly defined at 1.5x base rate.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What to Do If You Find a Red Flag</h2>
      <p>
        Don&apos;t sign. Contact your recruiter and request the clause be modified. Reputable agencies expect
        pushback and will usually accommodate reasonable requests. If the agency refuses, consider a different agency.
      </p>
      <Link href="/travel-nursing/contract-red-flags" className="text-primary font-semibold hover:underline text-sm">
        See the 12 biggest contract red flags →
      </Link>
    </SEOPageLayout>
  );
}
