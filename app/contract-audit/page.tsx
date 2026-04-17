import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQSection from '@/components/FAQSection';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '$9 Nursing Contract Audit | NurseSalaryIntel',
  description:
    'Upload your nursing contract and get a detailed audit for just $9. We flag hidden clauses, low pay rates, and missing protections in travel nursing contracts.',
  openGraph: {
    title: '$9 Nursing Contract Audit | NurseSalaryIntel',
    description:
      'Upload your nursing contract and get a detailed audit for just $9. We flag hidden clauses, low pay rates, and missing protections in travel nursing contracts.',
    url: 'https://nursesalaryintel.com/contract-audit',
  },
};

const gumroadLink = 'https://maveryholdings.gumroad.com/l/djnau';

const faqs = [
  {
    question: 'What does the $9 contract audit include?',
    answer:
      'You get a clause-by-clause review of your nursing contract covering pay rates, stipends, cancellation terms, floating policies, overtime guarantees, and more. We flag red flags and provide word-for-word negotiation scripts for every issue found.',
  },
  {
    question: 'How long does the contract review take?',
    answer:
      'The audit kit is an instant digital download. You get the checklist, red-flag guide, and negotiation scripts immediately after purchase so you can review your contract right away.',
  },
  {
    question: 'Can you review staff nurse contracts or only travel nursing?',
    answer:
      'The audit kit works for both travel nursing contracts and staff nurse offer letters. The checklist covers pay terms, benefits, scheduling, and clauses common to all nursing employment agreements.',
  },
  {
    question: 'What red flags do you look for?',
    answer:
      'We check for vague cancellation clauses, low or missing housing stipends, mandatory floating to other units, unpaid orientation, excessive early termination penalties, missing overtime guarantees, and more.',
  },
  {
    question: 'Is my contract information kept confidential?',
    answer:
      'Absolutely. The audit kit is a self-service tool — you review your own contract using our checklist and scripts. Your contract never leaves your hands.',
  },
  {
    question: 'Can I get a second audit if my contract changes?',
    answer:
      'Yes — the audit kit is yours to keep and reuse. Use it on every new contract, extension, or renegotiation.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Download the Audit Kit',
    description: 'Instant access to the contract review checklist, red-flag guide, and negotiation scripts.',
  },
  {
    num: '2',
    title: 'Review Your Contract',
    description: 'Walk through each section of your contract using our step-by-step checklist to identify issues.',
  },
  {
    num: '3',
    title: 'Negotiate with Confidence',
    description: 'Use the word-for-word scripts and counter-offer templates to fix bad clauses before signing.',
  },
];

const redFlags = [
  'Vague cancellation clauses that let the facility cancel penalty-free',
  'Housing stipends below market rate for the assignment location',
  'Mandatory floating to units outside your specialty',
  'Unpaid orientation or training periods',
  'Excessive early termination penalties ($5,000+)',
  'No guaranteed hours or overtime language',
  'Missing or delayed health insurance coverage',
  'Non-compete clauses restricting future assignments',
];

export default function ContractAuditPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Nursing Contract Audit Kit',
    description:
      'Complete contract review checklist, red-flag guide, and negotiation scripts for travel nurses and staff RNs.',
    offers: {
      '@type': 'Offer',
      price: '9.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: gumroadLink,
    },
  };

  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <header className="bg-gradient-to-br from-[#0a1628] via-[#004ac6] to-[#0a1628] text-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-block bg-yellow-400 text-[#0a1628] text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            ONLY $9
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-headline mb-4">
            Get Your Nursing Contract Reviewed
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Red flags, missing protections, and word-for-word negotiation scripts — everything you need to sign with confidence.
          </p>
          <a
            href={gumroadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#0a1628] font-bold py-4 px-10 rounded-xl transition-colors text-lg shadow-lg"
          >
            Get the Contract Audit Kit — $9
          </a>
          <p className="text-sm text-blue-200 mt-4">Instant download · One-time payment · Reusable on every contract</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contract Audit' },
          ]}
        />

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
            What&apos;s Included in the $9 Contract Audit Kit
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Step-by-step contract review checklist',
              'Red-flag identification guide',
              'Word-for-word counter-offer emails',
              'Recruiter phone negotiation scripts',
              'Legal addendum clause templates',
              'Pay package comparison worksheet',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-surface-container-lowest p-4 rounded-lg border border-outline-variant">
                <span className="text-primary font-bold">✓</span>
                <span className="text-on-surface text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags We Check */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
            Red Flags We Help You Check For
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="space-y-3">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3 text-sm">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">⚠</span>
                  <span className="text-red-900">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
            How the Contract Audit Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 gradient-primary text-on-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-on-surface mb-2">{step.title}</h3>
                <p className="text-sm text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
            Who This Is For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Travel Nurses', desc: 'Review agency contracts before signing — catch bad clauses early.' },
              { title: 'Staff Nurses', desc: 'Evaluate offer letters and negotiate better terms at hire.' },
              { title: 'New Grad Nurses', desc: 'Know what a fair contract looks like from day one.' },
              { title: 'PRN & Per Diem Nurses', desc: 'Make sure your flexible arrangement actually protects you.' },
            ].map((card) => (
              <div key={card.title} className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant">
                <h3 className="font-bold text-on-surface mb-1">{card.title}</h3>
                <p className="text-sm text-on-surface-variant">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-page CTA (unified $9 product CTA) */}
        <ContractAuditCTA variant="banner" />

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">Related Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/travel-nursing/contract-red-flags" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors">
              <h3 className="font-bold text-primary mb-1">Travel Nursing Contract Red Flags →</h3>
              <p className="text-sm text-on-surface-variant">12 warning signs to watch for before signing.</p>
            </Link>
            <Link href="/salary-negotiation/contract-clauses-to-watch" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors">
              <h3 className="font-bold text-primary mb-1">Contract Clauses to Watch →</h3>
              <p className="text-sm text-on-surface-variant">Non-competes, cancellation penalties, and more.</p>
            </Link>
            <Link href="/salary-negotiation/travel-nursing-contract-review" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors">
              <h3 className="font-bold text-primary mb-1">Contract Review Checklist →</h3>
              <p className="text-sm text-on-surface-variant">Free pre-signing checklist for travel nurses.</p>
            </Link>
            <Link href="/travel-nursing/how-to-negotiate-contract" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors">
              <h3 className="font-bold text-primary mb-1">How to Negotiate Your Contract →</h3>
              <p className="text-sm text-on-surface-variant">Step-by-step negotiation guide.</p>
            </Link>
            <Link href="/audit" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors">
              <h3 className="font-bold text-primary mb-1">Free Nurse Salary Calculator &amp; Contract Audit →</h3>
              <p className="text-sm text-on-surface-variant">Use our free nurse salary calculator to verify your offer and flag red flags instantly.</p>
            </Link>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </main>
    </div>
  );
}
