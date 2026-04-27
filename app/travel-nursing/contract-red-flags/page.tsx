import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nursing Contract Red Flags 2026: 12 Warning Signs',
  description:
    "12 travel nursing contract red flags nurses miss — cancellation penalties, low stipends, unprotected floating, and clauses that quietly cut your take-home pay. Know before you sign.",
};

const faqs = [
  { question: 'What is the biggest red flag in a travel nursing contract?', answer: 'One-sided cancellation clauses — where the facility can cancel your contract at any time with no penalty, but you face financial consequences for leaving — are the most costly red flag. Always negotiate mutual cancellation terms.' },
  { question: 'Can I negotiate a travel nursing contract?', answer: 'Yes. Every element of a travel nursing contract is negotiable: pay rate, stipends, cancellation terms, floating policy, overtime, and more. Agencies expect pushback from experienced travelers.' },
  { question: 'Should I have my contract reviewed before signing?', answer: 'Absolutely. A single bad clause can cost thousands. Our $9 contract audit kit gives you a checklist and negotiation scripts to review any travel nursing contract before signing.' },
  { question: 'What happens if I break a travel nursing contract?', answer: 'Consequences vary by contract. Common penalties include forfeiting completion bonuses, repaying housing stipends, and being placed on a "do not return" list at that facility. Read your termination clause carefully.' },
  { question: 'Are cancellation clauses standard?', answer: 'Yes, but the terms vary widely. Fair contracts have mutual cancellation with equal notice periods (typically 2 weeks). Unfair contracts let the facility cancel anytime while penalizing you for leaving.' },
];

const redFlags = [
  { title: 'Vague Cancellation Clauses', desc: 'The facility can cancel your contract at any time, but you face penalties for leaving early. Look for: mutual cancellation terms, equal notice periods, and written penalty caps.' },
  { title: 'Low or Missing Housing Stipends', desc: 'Stipend significantly below GSA rates for the assignment location. Compare your offered stipend against GSA per diem rates — if it\'s more than 20% below, push back.' },
  { title: 'Mandatory Floating to Other Units', desc: 'Contract allows the facility to float you to any unit regardless of your competency. Negotiate a clause limiting floating to units within your specialty area.' },
  { title: 'Unpaid Orientation Periods', desc: 'Some contracts exclude orientation days from your billable hours. Confirm that orientation is paid at your full contract rate from day one.' },
  { title: 'Excessive Early Termination Penalties', desc: 'Penalties over $5,000 for early termination, especially without mutual terms. Reasonable penalties are $1,000–$2,500 with equal application to both parties.' },
  { title: 'Missing Overtime Guarantees', desc: 'No language guaranteeing overtime pay for hours over 40/week. Ensure overtime is explicitly addressed at 1.5x your base rate, not your blended rate.' },
  { title: 'No Guaranteed Hours', desc: 'Contract doesn\'t guarantee minimum weekly hours. Without guaranteed hours, the facility can cut your schedule and you earn nothing. Insist on 36-hour minimums.' },
  { title: 'Delayed Health Insurance', desc: 'Coverage doesn\'t start for 30+ days. Negotiate day-one coverage or budget for gap insurance.' },
  { title: 'Non-Compete Clauses', desc: 'Restrictions preventing you from taking assignments at the same facility or in the same area. These are often unenforceable but can cause headaches.' },
  { title: 'Clawback Provisions on Bonuses', desc: 'Completion bonus or travel reimbursement must be repaid if you leave early — even if the facility cancels your contract.' },
  { title: 'Vague Call-Back/On-Call Language', desc: 'Contract requires on-call availability without specifying compensation. Get on-call pay rates and frequency limits in writing.' },
  { title: 'Missing Licensure Reimbursement', desc: 'No reimbursement for state licenses, certifications, or compact license fees required for the assignment.' },
];

export default function ContractRedFlags() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'Contract Red Flags' },
      ]}
      h1="12 Travel Nursing Contract Red Flags (Don't Sign Until You Read This)"
      lastUpdated="April 2026"
      schemaTitle="Travel Nursing Contract Red Flags"
      schemaDescription="12 red flags to watch for in travel nursing contracts before signing."
      schemaUrl="/travel-nursing/contract-red-flags"
      faqs={faqs}
    >
      <p>
        A bad contract can cost you thousands of dollars and months of frustration. Before you sign your next travel
        nursing contract, check for these 12 red flags. Each one is negotiable — if your agency won&apos;t budge,
        it may be time to find a new agency.
      </p>

      {redFlags.map((flag, i) => (
        <div key={i}>
          <h2 className="text-xl font-bold font-headline text-on-surface">
            {i + 1}. {flag.title}
          </h2>
          <p>{flag.desc}</p>
          {(i === 3 || i === 7) && (
            <ContractAuditCTA variant="inline" heading="Get your contract reviewed before signing — $9." />
          )}
        </div>
      ))}

      <h2 className="text-2xl font-bold font-headline text-on-surface">What a Clean Contract Looks Like</h2>
      <p>
        A fair travel nursing contract has: mutual cancellation terms with equal notice periods, guaranteed hours (36/week minimum),
        explicit overtime language at 1.5x base rate, housing stipend at or above GSA rates, day-one health insurance,
        floating limited to your specialty, and clear bonus terms without clawback provisions.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/salary-negotiation/contract-clauses-to-watch" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Contract Clauses to Watch →</span>
          <p className="text-xs text-on-surface-variant mt-1">Deep dive into specific clause language.</p>
        </Link>
        <Link href="/travel-nursing/how-to-negotiate-contract" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">How to Negotiate Your Contract →</span>
          <p className="text-xs text-on-surface-variant mt-1">Scripts and tactics for fixing red flags.</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
