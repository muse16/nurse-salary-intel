import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Contract Clauses to Watch 2026: 10 Costly Terms',
  description:
    'Know which nursing contract clauses can cost you money in 2026. Non-competes, cancellation penalties, floating, and overtime — what to look for before signing.',
};

const faqs = [
  { question: 'Are non-compete clauses enforceable for nurses?', answer: 'Enforceability varies by state. California, North Dakota, and Oklahoma generally don\'t enforce them. Other states enforce narrow, reasonable non-competes. The FTC has moved to ban most non-competes nationally — check current status before signing.' },
  { question: 'What is a standard cancellation penalty?', answer: 'Reasonable cancellation penalties are $1,000–$2,500, applied equally to both parties. Anything over $5,000 — especially if only applied to you — is a red flag.' },
  { question: 'Can I refuse to float to another unit?', answer: 'It depends on your contract. If floating is specified as a condition of employment, refusing can be grounds for termination. Always negotiate floating limits in writing before signing.' },
  { question: 'What if my contract doesn\'t mention overtime?', answer: 'Federal FLSA law requires 1.5x overtime for hours over 40/week for non-exempt employees. But without explicit contract language, you may only receive overtime on the taxable base rate, not the blended rate — costing you significantly.' },
];

const clauses = [
  {
    title: 'Non-Compete Clauses',
    body: 'Restrictions that prevent you from working at the same facility or within a geographic area after your contract ends. Look for narrow scope (specific facility, short duration) and push back on broad restrictions that would limit future career opportunities.',
  },
  {
    title: 'Cancellation and Early Termination Penalties',
    body: 'Financial consequences for leaving a contract early. Fair contracts have mutual terms (facility faces equal consequences for cancellation). Penalties over $5,000 or asymmetric terms are red flags.',
  },
  {
    title: 'Floating and Reassignment Policies',
    body: 'Language permitting the facility to move you to units outside your normal assignment. Negotiate: floating limited to units within your specialty competency, maximum frequency per month, and clear guidelines for unfamiliar units.',
  },
  {
    title: 'Overtime and Guaranteed Hours',
    body: 'Explicit overtime language at 1.5x base rate, plus minimum guaranteed hours per week (36 is standard for travel). Without these, the facility can cut your schedule and your pay, leaving you unable to cover living expenses.',
  },
  {
    title: 'Orientation and Training Pay',
    body: 'Confirm that orientation days are paid at your full contract rate. Some contracts exclude orientation from billable hours — a hidden cost of $500–$1,500.',
  },
  {
    title: 'Benefits, Insurance, and PTO Terms',
    body: 'Health insurance start date (ideally day one), 401(k) match percentage and vesting, PTO accrual (rare for travel, standard for staff), and sick leave. Read the fine print on insurance plans — some are bare-bones.',
  },
];

export default function ContractClausesToWatch() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/salary-negotiation/nurse-playbook' },
        { label: 'Contract Clauses to Watch' },
      ]}
      h1="Nursing Contract Clauses to Watch: Protect Your Pay and Rights"
      lastUpdated="April 2026"
      schemaTitle="Nursing Contract Clauses to Watch"
      schemaDescription="Know which nursing contract clauses can cost you money — detailed guide to clauses to watch."
      schemaUrl="/salary-negotiation/contract-clauses-to-watch"
      faqs={faqs}
    >
      <p>
        Contract language determines your real take-home pay, working conditions, and career flexibility. These
        are the clauses that cost nurses the most money — and how to handle each one.
      </p>

      {clauses.map((clause, i) => (
        <div key={clause.title}>
          <h2 className="text-xl font-bold font-headline text-on-surface">{clause.title}</h2>
          <p>{clause.body}</p>
          {i === 2 && <ContractAuditCTA variant="inline" heading="Every clause reviewed — $9 contract audit." />}
        </div>
      ))}

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Push Back on Bad Clauses</h2>
      <p>
        Don&apos;t sign until bad clauses are modified. Ask for specific language changes in writing. If the
        agency or employer refuses to modify clear red-flag clauses, that&apos;s your signal to look elsewhere.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/travel-nursing/contract-red-flags" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">12 Contract Red Flags →</span>
        </Link>
        <Link href="/travel-nursing/how-to-negotiate-contract" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">How to Negotiate Your Contract →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
