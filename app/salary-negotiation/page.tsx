import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import RelatedResources from '@/components/RelatedResources';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Salary Negotiation Guide 2026: Scripts, Tactics & Playbooks',
  description:
    'Everything nurses need to negotiate pay confidently — word-for-word scripts, contract clause breakdowns, shift differential math, and step-by-step tactics for new grads and experienced RNs.',
  alternates: { canonical: 'https://nursesalaryintel.com/salary-negotiation' },
  openGraph: {
    title: 'Nurse Salary Negotiation Guide 2026: Scripts, Tactics & Playbooks',
    description: 'Scripts, shift differential math, and contract tactics for every nurse negotiation scenario.',
    url: 'https://nursesalaryintel.com/salary-negotiation',
  },
};

const faqs = [
  {
    question: 'When should a nurse negotiate salary?',
    answer:
      'Always — even new grads. Most hospital systems have negotiable sign-on bonuses, shift differentials, and experience step placement even when base salary ranges appear fixed. The best time to negotiate is after receiving an offer, before you accept. Never negotiate during the interview itself.',
  },
  {
    question: 'How much can a nurse realistically negotiate?',
    answer:
      'Experienced nurses typically negotiate $3,000–$12,000 more per year by combining base pay, shift differential, sign-on bonus, and scheduling concessions. New grads most commonly win $2,000–$5,000 sign-on bonuses and favorable shift placement. Travel nurses negotiating package rates can add $200–$600/week.',
  },
  {
    question: 'What data should I bring to a nurse salary negotiation?',
    answer:
      'BLS OEWS data for your state and specialty, local hospital salary surveys, and your certifications (CCRN, CEN, CNOR). Specific numbers beat vague requests every time. "I see the BLS median for ICU RNs in California is $95,000, and I have 5 years of CCRN-certified experience" is far more effective than "I was hoping for more."',
  },
  {
    question: 'Can nurses negotiate non-salary items?',
    answer:
      'Yes — often more easily than base pay. Shift differential, weekend premium, on-call requirements, preceptor stipends, tuition reimbursement, certification renewal reimbursement, and floating policies are all frequently negotiable. If a hospital says the salary range is fixed, pivot to these items.',
  },
];

const relatedItems = [
  {
    href: '/salary-negotiation/nurse-playbook',
    title: 'The Nurse Salary Negotiation Playbook',
    desc: 'Step-by-step system for researching, scripting, and closing your best offer.',
  },
  {
    href: '/salary-negotiation/night-shift-differential-pay',
    title: 'Night Shift Differential Pay Guide',
    desc: 'How much more night nurses earn — rates by specialty, hospital system, and state.',
  },
  {
    href: '/salary-negotiation/how-to-negotiate-nursing-salary',
    title: 'How to Negotiate Nursing Salary',
    desc: 'Tactical walkthrough from offer letter to signed contract.',
  },
  {
    href: '/salary-negotiation/contract-clauses-to-watch',
    title: 'Contract Clauses to Watch',
    desc: 'Red flag language in nurse employment contracts and how to push back.',
  },
  {
    href: '/salary-negotiation/travel-nursing-contract-review',
    title: 'Travel Nursing Contract Review',
    desc: 'What to scrutinize before signing a travel assignment — pay packages, cancellation policies, and more.',
  },
  {
    href: '/nurse-salary-negotiation-scripts-2026',
    title: 'Negotiation Scripts 2026',
    desc: 'Word-for-word scripts for base pay, sign-on bonuses, scheduling, and benefits conversations.',
  },
  {
    href: '/entry-level-nurse-salary',
    title: 'New Grad RN Salary & First Negotiation',
    desc: 'Starting pay by state, sign-on bonus ranges, and how to negotiate your first offer.',
  },
  {
    href: '/audit',
    title: 'Free Contract Audit Tool',
    desc: 'Run a 15-point red flag check on any nurse employment or travel contract.',
  },
];

export default function SalaryNegotiationHub() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation' },
      ]}
      h1="Nurse Salary Negotiation — 2026 Complete Guide"
      lastUpdated="April 2026"
      schemaTitle="Nurse Salary Negotiation Guide 2026"
      schemaDescription="Scripts, tactics, and playbooks for negotiating nurse salaries, shift differentials, sign-on bonuses, and travel contracts."
      schemaUrl="/salary-negotiation"
      faqs={faqs}
    >
      <p>
        Most nurses leave money on the table — not because they lack leverage, but because they don&apos;t know
        the numbers or the script. This hub covers every negotiation scenario: first offer as a new grad,
        mid-career base pay increase, shift differential math, travel contract package evaluation, and the
        contract clauses that cost nurses thousands without them realizing it.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Why Nurses Don&apos;t Negotiate (and Why They Should)</h2>
      <p>
        Studies consistently show nurses are among the least likely healthcare professionals to negotiate compensation.
        The reasons are cultural: nursing training emphasizes service over self-advocacy, and many nurses assume
        hospital pay scales are fixed. Both are wrong. Most hospitals have negotiating room — particularly on
        sign-on bonuses, shift differentials, experience step placement, and scheduling concessions.
      </p>
      <p>
        The average nurse who negotiates their first offer adds $3,000–$8,000 in year-one value. Over a
        30-year career, that initial conversation — compounded through raises, step increases, and pension
        calculations — is worth $150,000–$400,000.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What You Can Negotiate as a Nurse</h2>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Base pay:</strong> Push for the top of the salary band. Ask HR for the full range before countering.</li>
        <li><strong>Sign-on bonus:</strong> $2,000–$20,000 depending on specialty, state, and market demand. Always ask, even if not offered.</li>
        <li><strong>Experience step placement:</strong> Hospitals assign pay steps based on experience. You can often request a higher step than initially offered by documenting your experience precisely.</li>
        <li><strong>Shift differential:</strong> Night, weekend, and on-call premiums — often 10–25% above base — are frequently offered but worth verifying in writing.</li>
        <li><strong>Certification reimbursement:</strong> CCRN, CEN, CNOR exam fees ($300–$500) and renewal costs are commonly reimbursable if you ask upfront.</li>
        <li><strong>Tuition assistance:</strong> BSN completion programs and RN-to-MSN benefits vary widely. Get the specifics in writing before you accept.</li>
        <li><strong>Floating policy:</strong> Negotiate float unit restrictions in writing. Unlimited float to unfamiliar units is a common source of unsafe conditions and burnout.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differential Math</h2>
      <p>
        Night shift differentials of 10–25% above base pay translate to $8,000–$22,000 per year for most
        hospital RNs. Weekend differentials add another 5–15%. Before accepting a night shift position, calculate
        the full annualized value — the differential often makes night shift the higher-earning choice even
        when base pay is equivalent.
      </p>
      <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary font-semibold hover:underline text-sm">
        See full night shift differential math by state and specialty →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse Contract Negotiation</h2>
      <p>
        Travel nursing contracts add layers of complexity: tax-free stipends, completion bonuses, cancellation
        clauses, and agency fees all affect your real take-home pay. The weekly rate you see in a job posting
        is rarely what you&apos;ll actually earn after agency margin, stipend adjustments, and tax structure.
        Always request a full package breakdown before signing.
      </p>
      <Link href="/salary-negotiation/travel-nursing-contract-review" className="text-primary font-semibold hover:underline text-sm">
        Read the travel nursing contract review guide →
      </Link>

      <RelatedResources
        heading="Salary Negotiation Resources"
        items={relatedItems}
        columns={2}
      />
    </SEOPageLayout>
  );
}
