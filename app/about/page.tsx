import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About NurseSalaryIntel | Founder, Mission & Editorial Standards',
  description: 'NurseSalaryIntel was founded by Courtney Palmer to bring transparent, BLS-sourced nurse salary data to every RN making a career or contract decision. Learn about our mission and methodology.',
  openGraph: {
    title: 'About NurseSalaryIntel | Founder, Mission & Editorial Standards',
    description: 'Founded by Courtney Palmer. Salary data sourced from BLS OEWS. Insights contributed by practicing nurses in ICU, med-surg, and labor & delivery.',
    url: 'https://nursesalaryintel.com/about',
  },
  alternates: { canonical: 'https://nursesalaryintel.com/about' },
};

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://nursesalaryintel.com/about',
  name: 'About NurseSalaryIntel',
  description: 'NurseSalaryIntel was founded by Courtney Palmer to provide transparent, BLS-sourced nurse salary data and contract intelligence to registered nurses across the United States.',
  about: {
    '@type': 'Organization',
    name: 'Nurse Salary Intel',
    url: 'https://nursesalaryintel.com',
    founder: {
      '@type': 'Person',
      name: 'Courtney Palmer',
      jobTitle: 'Founder',
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Last Updated: May 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mb-4">
            About NurseSalaryIntel
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Transparent compensation data for every nurse making a career or contract decision.
          </p>
        </div>

        <div className="prose-content space-y-10 text-on-surface-variant leading-relaxed">

          {/* Founder section */}
          <section className="bg-surface-container-low rounded-2xl p-7 border border-outline-variant/30">
            <h2 className="text-xl font-semibold font-headline text-on-surface mb-4">From the Founder</h2>
            <p>
              I&apos;m <strong className="text-on-surface">Courtney Palmer</strong>, the founder of NurseSalaryIntel. I built this site because the nurses in my family — across ICU, med-surg, and labor &amp; delivery — kept running into the same problem: salary data online was vague, outdated, or buried behind job listing paywalls.
            </p>
            <p className="mt-4">
              They deserved a resource that gave them real numbers — by state, by city, by specialty — so they could walk into a negotiation or a contract review with actual data behind them, not just a gut feeling.
            </p>
            <p className="mt-4">
              NurseSalaryIntel exists to be that resource. Every salary figure on this site is sourced from the Bureau of Labor Statistics OEWS survey, cross-referenced against employer job postings, and updated annually. No guesswork. No recruiter spin.
            </p>
            <p className="mt-6 text-sm font-semibold text-on-surface">— Courtney Palmer, Founder</p>
          </section>

          {/* Clinical contributors */}
          <section>
            <h2 className="text-xl font-semibold font-headline text-on-surface mb-3">Clinical Insights</h2>
            <p>
              Salary data is only half the picture. Understanding what those numbers mean at the bedside — how charge differentials actually work, what a travel package really nets you after stipends, which certifications move the needle on pay — requires clinical perspective.
            </p>
            <div className="mt-5 bg-surface-container-low rounded-xl px-6 py-5 border border-outline-variant/30">
              <p className="text-sm font-semibold text-on-surface mb-1">Clinical Contributors</p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Insights contributed by practicing nurses in ICU, med-surg, and labor &amp; delivery specialties. Contributors provide real-world context on pay structures, contract terms, and compensation norms across hospital systems and regions.
              </p>
            </div>
          </section>

          <hr className="border-outline-variant/20" />

          {/* Methodology */}
          <section>
            <h2 className="text-xl font-semibold font-headline text-on-surface mb-3">How We Source Salary Data</h2>
            <p>Every salary figure on NurseSalaryIntel is built from the following sources, in order of priority:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>
                <strong className="text-on-surface">BLS Occupational Employment and Wage Statistics (OEWS)</strong> — the most comprehensive, government-collected nurse salary dataset in the US. Updated annually from May survey data.
              </li>
              <li>
                <strong className="text-on-surface">State-level BLS metro area estimates</strong> — used for city and regional pages where statewide averages would mislead.
              </li>
              <li>
                <strong className="text-on-surface">Hospital and employer job postings</strong> — cross-referenced to validate that published figures match real advertised ranges.
              </li>
              <li>
                <strong className="text-on-surface">AACN, SHRM, and published nursing compensation surveys</strong> — used for specialty and credential-level premium estimates.
              </li>
            </ol>
            <p className="mt-4">
              All figures are estimates. Actual pay varies by employer, union status, experience, certifications, and location. We cite the specific BLS survey year on every page and flag when figures are projections rather than directly published data.
            </p>
          </section>

          <hr className="border-outline-variant/20" />

          {/* Editorial standards */}
          <section>
            <h2 className="text-xl font-semibold font-headline text-on-surface mb-3">Editorial Standards</h2>
            <p>
              Content on NurseSalaryIntel is written to inform, not to sell. We do not accept payment to rank products, agencies, or programs more favorably. Where we earn affiliate revenue — such as referrals to RN-to-BSN programs — we disclose it on the relevant page.
            </p>
            <p className="mt-4">
              Pages are reviewed and updated when BLS data is refreshed (annually) or when material changes occur in a specific market. The &ldquo;Last Updated&rdquo; date shown on each page reflects the most recent content or data review.
            </p>
          </section>

          <hr className="border-outline-variant/20" />

          {/* Funding */}
          {/* Funding */}
          <section>
            <h2 className="text-xl font-semibold font-headline text-on-surface mb-3">How This Site Is Funded</h2>
            <p>NurseSalaryIntel is free to use. We sustain it through:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Display advertising (Google AdSense)</li>
              <li>Affiliate referrals to nursing programs and tools, disclosed on each relevant page</li>
            </ul>
            <p className="mt-4">
              Advertiser relationships do not influence salary estimates, rankings, or editorial recommendations.
            </p>
          </section>

          <hr className="border-outline-variant/20" />

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold font-headline text-on-surface mb-3">Contact</h2>
            <p>
              Spotted an error? Have a suggestion? We read every message.
            </p>
            <p className="mt-3">
              <a href="mailto:support@nursesalaryintel.com" className="text-primary underline hover:opacity-80 font-medium">
                support@nursesalaryintel.com
              </a>
            </p>
          </section>

          <div className="pt-4 border-t border-outline-variant/20">
            <p className="text-sm text-on-surface-variant/60">
              NurseSalaryIntel &middot; Founded by Courtney Palmer &middot; Last reviewed May 2026
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
