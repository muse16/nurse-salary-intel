import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Salary Negotiation Playbook 2026 | Free Guide',
  description:
    'The complete nurse salary negotiation playbook. Scripts, tactics, and data-backed strategies to earn more as a staff or travel nurse. Free 2026 guide.',
};

const faqs = [
  { question: 'Can nurses negotiate their salary?', answer: 'Yes. Every nursing salary is negotiable — staff, travel, PRN, and advanced practice. Most nurses don\'t negotiate, leaving $5,000–$15,000/year on the table.' },
  { question: 'When is the best time to negotiate nursing pay?', answer: 'Negotiate before accepting any offer. For existing positions, negotiate during annual reviews, after completing certifications, or when taking on new responsibilities (charge, preceptor, etc.).' },
  { question: 'How much more can I earn by negotiating?', answer: 'Most nurses can negotiate $2,000–$8,000 more in annual pay on a first offer, plus additional benefits like sign-on bonuses, relocation stipends, and certification reimbursement.' },
  { question: 'Should I negotiate base pay or benefits?', answer: 'Negotiate both. Base pay compounds over time (every raise builds on it), while benefits like tuition reimbursement, PTO, and sign-on bonuses are immediate wins. Ask for both, in that order.' },
  { question: 'What if my employer says the salary is non-negotiable?', answer: 'If base pay is locked, negotiate other compensation: sign-on bonus, certification differentials, extra PTO, shift preferences, loan repayment, or faster path to promotion.' },
  { question: 'Do travel nurses negotiate differently than staff nurses?', answer: 'Yes. Travel nurses negotiate hourly rates, stipends, cancellation terms, and completion bonuses — often with multiple agencies competing. Staff nurses negotiate base salary, benefits, and differentials.' },
];

export default function NurseNegotiationPlaybook() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/salary-negotiation/nurse-playbook' },
        { label: 'Nurse Playbook' },
      ]}
      h1="The Nurse Salary Negotiation Playbook — 2026 Edition"
      lastUpdated="April 2026"
      schemaType="HowTo"
      schemaTitle="Nurse Salary Negotiation Playbook 2026"
      schemaDescription="The complete guide to negotiating nurse salary with scripts, tactics, and data-backed strategies."
      schemaUrl="/salary-negotiation/nurse-playbook"
      faqs={faqs}
    >
      <p>
        Most nurses leave thousands of dollars on the table every year because they don&apos;t negotiate — or don&apos;t
        know how. This playbook gives you the exact scripts, data, and tactics to earn what you&apos;re worth.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Why Most Nurses Don&apos;t Negotiate (and What It Costs Them)</h2>
      <p>
        Nursing culture often discourages salary negotiation — it feels uncomfortable, greedy, or &ldquo;not what
        nurses do.&rdquo; But hospitals budget margin into every offer. A nurse who doesn&apos;t negotiate a $2/hr
        raise loses <strong>$75,000+ over a 20-year career</strong> when compounded with future raises.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 1: Know Your Market Value</h2>
      <p>
        Before negotiating, gather data: average RN salary in your state, pay for your specialty, and what
        comparable hospitals pay. Use our salary database and specialty guides as your starting point.
      </p>
      <div className="flex flex-wrap gap-3 my-4">
        <Link href="/rn-salary-by-state" className="text-sm px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-primary hover:bg-primary-fixed transition-colors">
          RN Salary by State
        </Link>
        <Link href="/nursing-salary/by-specialty-2026" className="text-sm px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-primary hover:bg-primary-fixed transition-colors">
          Salary by Specialty
        </Link>
        <Link href="/salary-data" className="text-sm px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant text-primary hover:bg-primary-fixed transition-colors">
          Salary Database
        </Link>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 2: Build Your Case with Data</h2>
      <p>
        Document your value: years of experience, certifications, specialty skills, patient satisfaction scores,
        preceptor or charge experience, and any hard-to-fill specialties you cover. Quantify where possible.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 3: Negotiation Scripts for Common Scenarios</h2>
      <div className="space-y-4 my-6">
        <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant">
          <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase">Scenario: First offer on a new position</p>
          <p className="text-sm italic text-on-surface">
            &ldquo;Thank you for the offer. Based on the market rate for [specialty] RNs in [city] — which averages
            $X/hr according to BLS data — I was hoping we could land closer to $Y/hr. Given my [specific qualifications],
            I believe that&apos;s a fair place to start.&rdquo;
          </p>
        </div>
        <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant">
          <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase">Scenario: Asking for a raise at annual review</p>
          <p className="text-sm italic text-on-surface">
            &ldquo;Over the past year I&apos;ve [achievements]. I&apos;ve researched comparable roles and nurses
            with my experience in this market earn $X–$Y. Can we discuss bringing my rate in line with that range?&rdquo;
          </p>
        </div>
        <div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant">
          <p className="text-xs font-semibold text-on-surface-variant mb-2 uppercase">Scenario: Countering when they say &ldquo;budget is fixed&rdquo;</p>
          <p className="text-sm italic text-on-surface">
            &ldquo;I understand there may be constraints on base pay. Can we look at other options — a sign-on bonus,
            certification differential, or tuition reimbursement? I want to make this work.&rdquo;
          </p>
        </div>
      </div>

      <ContractAuditCTA variant="banner" heading="Get word-for-word email scripts for every scenario — $9." />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 4: Negotiating Travel Nursing Contracts</h2>
      <p>
        Travel nurse negotiation is different: you&apos;re negotiating with a recruiter, not a hospital. Get competing
        offers from 2–3 agencies. Negotiate base rate and stipends separately. Push back on cancellation clauses.
      </p>
      <Link href="/travel-nursing/how-to-negotiate-contract" className="text-primary font-semibold hover:underline text-sm">
        Full travel contract negotiation guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 5: Following Up and Getting It in Writing</h2>
      <p>
        Every negotiated term must be in your written contract or offer letter. Verbal promises from recruiters
        or managers aren&apos;t enforceable. If it isn&apos;t in writing, it doesn&apos;t exist.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">When to Walk Away</h2>
      <p>
        Walk away when: the employer refuses all compromise on a below-market offer, written terms don&apos;t
        match verbal agreements, pressure tactics are used to rush your decision, or red flags appear in the contract.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">All Negotiation Resources</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/salary-negotiation/how-to-negotiate-nursing-salary', title: 'How to Negotiate Nursing Salary', desc: 'Step-by-step guide for staff positions.' },
          { href: '/salary-negotiation/travel-nursing-contract-review', title: 'Travel Contract Review', desc: 'Pre-signing checklist for travelers.' },
          { href: '/salary-negotiation/contract-clauses-to-watch', title: 'Contract Clauses to Watch', desc: 'Deep dive into specific clauses.' },
          { href: '/salary-negotiation/night-shift-differential-pay', title: 'Night Shift Differential Pay', desc: 'Current rates and how to negotiate.' },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
            <span className="font-bold text-primary text-sm">{link.title} →</span>
            <p className="text-xs text-on-surface-variant mt-1">{link.desc}</p>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
