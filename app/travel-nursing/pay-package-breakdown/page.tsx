import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nurse Pay Package Breakdown 2026 | Explained',
  description:
    'Understand every line item in your travel nurse pay package. Hourly rate, stipends, per diems, bonuses, and tax-free income explained simply.',
};

const faqs = [
  { question: 'What is a blended rate in travel nursing?', answer: 'A blended rate combines your taxable hourly rate and tax-free stipends into a single hourly figure. Agencies often quote the blended rate because it looks higher, but it hides how much is actually taxable. Always ask for the broken-out numbers.' },
  { question: 'How much is the typical housing stipend?', answer: 'Housing stipends in 2026 range from $1,800–$3,200/month depending on location. High-cost cities like San Francisco and NYC offer higher stipends, while rural areas are lower. The stipend is tax-free if you maintain a tax home.' },
  { question: 'Are travel nurse stipends taxed?', answer: 'Stipends are tax-free only if you maintain a legitimate tax home — a permanent residence you pay for and return to between assignments. Without a tax home, all stipends become taxable income.' },
  { question: 'How do I know if my pay package is competitive?', answer: 'Compare your total weekly compensation (base + stipends + bonuses) against market rates for your specialty and location. Use our salary database and get a $9 contract audit to verify your package is fair.' },
  { question: 'What is a completion bonus?', answer: 'A completion bonus is a lump sum paid after you finish your full contract (typically 13 weeks). Average bonuses are $500–$2,000. Watch for clawback clauses that require repayment if you leave early — even if the facility cancels your contract.' },
];

export default function PayPackageBreakdown() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'Pay Package Breakdown' },
      ]}
      h1="Travel Nurse Pay Package Breakdown: Everything You Need to Know"
      lastUpdated="April 2026"
      schemaType="HowTo"
      schemaTitle="Travel Nurse Pay Package Breakdown 2026"
      schemaDescription="Understand every line item in your travel nurse pay package."
      schemaUrl="/travel-nursing/pay-package-breakdown"
      faqs={faqs}
    >
      <p>
        A travel nurse pay package is far more complex than a staff nurse salary. Instead of a single hourly rate, you
        receive a mix of taxable wages and tax-free stipends. Understanding each component is the difference between
        a great deal and getting shortchanged.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What&apos;s in a Travel Nurse Pay Package?</h2>
      <p>Every travel nurse pay package includes these components:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Taxable hourly base rate</strong> — your actual wage, subject to income tax</li>
        <li><strong>Housing stipend</strong> — tax-free monthly allowance for lodging</li>
        <li><strong>Meals & Incidentals (M&IE)</strong> — tax-free daily per diem</li>
        <li><strong>Travel reimbursement</strong> — one-time payment to cover travel costs</li>
        <li><strong>Completion bonus</strong> — lump sum for finishing the full contract</li>
        <li><strong>Benefits</strong> — health insurance, dental, vision, 401(k)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Hourly Base Rate vs. Blended Rate</h2>
      <p>
        The <strong>base rate</strong> is your taxable hourly wage — usually $20–$35/hour for travel nurses. The <strong>blended
        rate</strong> rolls stipends into the hourly figure to make it look higher ($50–$70/hour). Always ask for the
        broken-out numbers. A high blended rate with a low base rate means more of your pay depends on maintaining
        a tax home.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Housing Stipend Explained</h2>
      <p>
        The housing stipend covers your lodging during the assignment. In 2026, stipends range from $1,800/month in
        low-cost areas to $3,200+/month in cities like San Francisco and Boston. This money is <strong>tax-free</strong> as
        long as you maintain a tax home. You can use it to rent an apartment, stay in extended-stay hotels, or pocket
        the difference if you find cheap housing.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Meals & Incidentals (M&IE) Per Diem</h2>
      <p>
        The M&IE per diem covers daily food and expenses. Rates are set by the GSA and vary by location — typically
        $50–$75/day in 2026. Like the housing stipend, this is tax-free with a valid tax home.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Reimbursement & Bonuses</h2>
      <p>
        Most agencies reimburse travel costs to and from your assignment — typically $300–$800 depending on distance.
        Completion bonuses ($500–$2,000) reward you for finishing the full 13-week contract. Watch for clawback
        provisions that require repayment if you leave early.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tax-Free vs. Taxable Income</h2>
      <p>
        The tax-free portion of your pay (housing + M&IE stipends) is the biggest financial advantage of travel nursing.
        On a $2,600/week package, $1,000–$1,500 might be tax-free — saving you $300–$500/week in taxes compared
        to a staff nurse earning the same gross amount.
      </p>

      <ContractAuditCTA variant="inline" heading="Have a pay package? Verify it's competitive — $9 audit." />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Compare Pay Packages from Different Agencies</h2>
      <p>
        When comparing offers, look at <strong>total weekly take-home</strong>, not just the blended rate. Account for:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Taxable base rate × hours per week</li>
        <li>Weekly housing stipend amount</li>
        <li>Weekly M&IE amount</li>
        <li>Benefits value (if you need agency insurance)</li>
        <li>Completion bonus prorated over contract length</li>
        <li>Travel reimbursement</li>
      </ol>

      <div className="mt-8">
        <Link href="/travel-nursing/contract-red-flags" className="text-primary font-semibold hover:underline">
          Next: 12 contract red flags to check before signing →
        </Link>
      </div>
    </SEOPageLayout>
  );
}
