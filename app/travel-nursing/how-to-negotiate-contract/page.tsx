import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Negotiate a Travel Nursing Contract | 2026',
  description:
    'Step-by-step guide to negotiating your travel nursing contract. Increase pay, improve stipends, and remove bad clauses with these proven tactics.',
};

const faqs = [
  { question: 'Can you negotiate travel nursing pay?', answer: 'Yes. Hourly rate, stipends, completion bonuses, cancellation terms, and most other contract elements are negotiable. Agencies build in margin — your recruiter expects pushback from experienced travelers.' },
  { question: 'What parts of a travel contract are negotiable?', answer: 'Everything: base hourly rate, housing stipend, M&IE, travel reimbursement, completion bonus, cancellation terms, floating policy, overtime guarantees, guaranteed hours, and insurance start date.' },
  { question: 'How much can I realistically increase my pay?', answer: 'Most nurses can negotiate $2–$5/hour more on base rate and $200–$500/month more on stipends. On a 13-week contract, that adds up to $2,000–$5,000 in additional earnings.' },
  { question: 'Should I use a recruiter to negotiate?', answer: 'Your recruiter works for the agency, not you. They can be helpful allies, but always verify pay rates against market data independently. Some nurses work with multiple agencies to compare competing offers.' },
  { question: 'When is the best time to negotiate — before or after the offer?', answer: 'Always negotiate before signing. Once you sign, you have no leverage. Get competing offers from multiple agencies and use them as leverage in negotiations.' },
];

export default function HowToNegotiateContract() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'How to Negotiate' },
      ]}
      h1="How to Negotiate a Travel Nursing Contract in 2026"
      lastUpdated="April 2026"
      schemaType="HowTo"
      schemaTitle="How to Negotiate a Travel Nursing Contract"
      schemaDescription="Step-by-step guide to negotiating your travel nursing contract for better pay and terms."
      schemaUrl="/travel-nursing/how-to-negotiate-contract"
      faqs={faqs}
    >
      <p>
        Every element of your travel nursing contract is negotiable. Most nurses leave $2,000–$5,000 on the table
        per contract because they don&apos;t know what to ask for or how to push back. This step-by-step guide
        gives you the scripts and tactics to negotiate with confidence.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 1: Know Your Market Rate</h2>
      <p>
        Before negotiating, know what your specialty pays in your target location. Use our{' '}
        <Link href="/travel-nursing/salary-by-state" className="text-primary font-semibold hover:underline">salary by state</Link>{' '}
        and{' '}
        <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline">salary by specialty</Link>{' '}
        data. If an offer is below market rate, you have data to back up your counter.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 2: Compare Pay Packages Side by Side</h2>
      <p>
        Get offers from 2–3 agencies for the same location and specialty. Compare total weekly compensation —
        not just the blended rate. Break down each package into base rate, housing, M&IE, and bonuses.
      </p>
      <p>
        <Link href="/travel-nursing/pay-package-breakdown" className="text-primary font-semibold hover:underline">
          How to break down a pay package →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 3: Negotiate Hourly Rate and Stipends Separately</h2>
      <p>
        Don&apos;t accept a blended rate. Ask for the base hourly rate and stipends broken out. Then negotiate each
        independently. If the agency won&apos;t increase the base rate, push for higher stipends or a larger completion bonus.
      </p>

      <ContractAuditCTA variant="inline" heading="Get word-for-word negotiation scripts — $9 audit kit." />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 4: Push Back on Cancellation Clauses</h2>
      <p>
        This is where the most money is at risk. Insist on mutual cancellation terms with equal notice periods
        (2 weeks is standard). If the facility can cancel without penalty, you should be able to as well.
      </p>
      <p>
        <Link href="/travel-nursing/contract-red-flags" className="text-primary font-semibold hover:underline">
          12 contract red flags to check →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 5: Get Everything in Writing</h2>
      <p>
        Verbal promises mean nothing. Every negotiated term — rate increases, stipend changes, floating limitations,
        overtime guarantees — must be in the written contract. If it&apos;s not in writing, it doesn&apos;t exist.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">When to Walk Away from a Contract</h2>
      <p>
        Walk away if: the agency refuses to put negotiated terms in writing, the contract has one-sided cancellation
        clauses they won&apos;t modify, stipends are significantly below GSA rates, or the recruiter pressures you to
        sign immediately. Good contracts don&apos;t require pressure tactics.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiation Scripts You Can Use Today</h2>
      <p>
        Here are starter scripts for common negotiation scenarios:
      </p>
      <div className="space-y-4">
        <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
          <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase">Asking for a higher rate</p>
          <p className="text-sm italic text-on-surface">
            &ldquo;I&apos;ve reviewed market rates for [specialty] in [location] and they&apos;re running $X–$Y/hour.
            This offer is below that range. Can we get the base rate up to $Z?&rdquo;
          </p>
        </div>
        <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
          <p className="text-xs font-semibold text-on-surface-variant mb-1 uppercase">Pushing back on cancellation terms</p>
          <p className="text-sm italic text-on-surface">
            &ldquo;I see the facility can cancel with 48 hours notice, but I have a 30-day penalty for leaving early.
            I&apos;d need mutual cancellation terms with a 2-week notice on both sides.&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/salary-negotiation/nurse-playbook" className="text-primary font-semibold hover:underline">
          Get the full negotiation playbook →
        </Link>
      </div>
    </SEOPageLayout>
  );
}
