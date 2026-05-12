import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'How We Calculate Nurse Salary Estimates | NurseSalaryIntel',
  description:
    'NurseSalaryIntel salary estimates are built from BLS OEWS data, public job postings, regional cost-of-living adjustments, and nurse-reported compensation. Here is exactly how.',
  alternates: { canonical: 'https://nursesalaryintel.com/how-we-calculate-nurse-salary-estimates' },
  openGraph: {
    title: 'How We Calculate Nurse Salary Estimates | NurseSalaryIntel',
    description: 'Transparent methodology behind every nurse salary estimate on NurseSalaryIntel — BLS OEWS sourcing, job posting verification, regional adjustments, and limitations.',
    url: 'https://nursesalaryintel.com/how-we-calculate-nurse-salary-estimates',
  },
};

const faqs = [
  {
    question: 'Where does NurseSalaryIntel get its salary data?',
    answer: 'Our primary source is the U.S. Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS) program, specifically the May 2024 survey data published in March 2025. We cross-reference BLS figures against publicly available job postings, hospital pay schedules, and regional market conditions to produce 2026 estimates.',
  },
  {
    question: 'Is the 2026 BLS nurse salary data available yet?',
    answer: 'No — official BLS OEWS 2026 data has not been published. BLS releases OEWS data approximately 10 months after the May survey period, meaning 2026 data will not be available until early 2027. All salary figures on this site are 2026 estimates derived from the most recent available data (May 2024, published March 2025).',
  },
  {
    question: 'How accurate are your salary estimates?',
    answer: 'Our estimates are designed to be directionally accurate for compensation research and career planning. They should not be treated as guaranteed compensation rates or official government statistics. Individual offers will vary significantly by hospital, unit, shift, negotiation, certifications, and years of experience. Always verify with actual job postings and your recruiter.',
  },
  {
    question: 'Do your salary figures include shift differentials and bonuses?',
    answer: 'Base salary estimates reflect base hourly and annual pay only, unless otherwise noted. Shift differentials, sign-on bonuses, overtime, and per-diem pay are discussed separately in relevant articles. Total compensation can be 15–35% higher than base salary when these elements are included.',
  },
  {
    question: 'How often do you update salary data?',
    answer: 'We update pages when new BLS OEWS data is released (typically annually in March), when significant market shifts occur, or when job posting data indicates notable deviation from BLS figures. Each page displays a "Last Updated" date. Pages marked May 2026 reflect our most current estimates.',
  },
];

export default function HowWeCalculatePage() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'How We Calculate Salary Estimates' },
      ]}
      h1="How NurseSalaryIntel Calculates Nurse Salary Estimates"
      lastUpdated="May 2026"
      schemaTitle="How NurseSalaryIntel Calculates Nurse Salary Estimates"
      schemaDescription="Transparent methodology behind NurseSalaryIntel salary estimates — BLS OEWS sourcing, job posting cross-referencing, regional adjustments, and clear limitations."
      schemaUrl="/how-we-calculate-nurse-salary-estimates"
      datePublished="2026-05-09"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">The Short Version</p>
        <p className="text-on-surface text-base leading-relaxed">
          Every salary figure on this site starts with <strong>BLS OEWS data</strong> — the U.S. government&apos;s
          official occupational wage survey. We cross-reference those figures against <strong>publicly available
          job postings and hospital pay schedules</strong>, apply <strong>regional market adjustments</strong>,
          and label the result a <strong>2026 estimate</strong> — not official data, not a guarantee.
          Official 2026 BLS data won&apos;t exist until early 2027.
        </p>
      </div>

      <Image
        src="/images/how-we-calculate-nurse-salary-estimates-hero_compressed.png"
        alt="NurseSalaryIntel team member reviewing BLS salary data on a laptop with nursing salary charts and data sources visible"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Salary data is only useful if you know where it comes from and what it can&apos;t tell you.
        This page explains exactly how we build every estimate on NurseSalaryIntel — the sources we use,
        the adjustments we make, and where the limitations are. If something looks off on any page,
        this is the methodology you should hold us to.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 1: Start With BLS OEWS Data</h2>
      <p>
        Our foundation is the{' '}
        <a href="https://www.bls.gov/oes/" target="_blank" rel="noopener noreferrer" className="underline text-primary">
          Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS)
        </a>{' '}
        program. BLS surveys approximately 1.1 million business establishments every May, collecting wage
        data for more than 800 occupations across every state and metropolitan area in the US. For nursing,
        the relevant occupation codes are:
      </p>
      <ul className="list-disc list-inside space-y-1 my-4 text-on-surface leading-relaxed">
        <li><strong>SOC 29-1141</strong> — Registered Nurses (the primary code for RN salary data)</li>
        <li><strong>SOC 29-1171</strong> — Nurse Practitioners</li>
        <li><strong>SOC 29-1151</strong> — Nurse Anesthetists (CRNAs)</li>
        <li><strong>SOC 29-2061</strong> — Licensed Practical and Licensed Vocational Nurses (LPN/LVN)</li>
        <li><strong>SOC 31-1131</strong> — Nursing Assistants (CNAs)</li>
      </ul>
      <p>
        The most recent OEWS data available is the <strong>May 2024 survey, published March 2025</strong>.
        BLS releases each year&apos;s data approximately 10 months after the survey period. Official 2025 OEWS
        data is not yet published as of May 2026; 2026 data will not be available until early 2027.
        This is why every page on this site labels figures as <em>2026 estimates</em> rather than official
        2026 data.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 2: Cross-Reference Public Job Postings</h2>
      <p>
        BLS OEWS data is comprehensive but lags by 10–22 months. Active job market conditions — sign-on
        bonus inflation, new union contracts, system-wide pay raises — won&apos;t appear in the data until
        the next release cycle. To account for this, we review publicly available job postings from major
        hospital systems, nursing job boards, and hospital careers pages.
      </p>
      <p>
        When posted salary ranges on current job listings diverge meaningfully from BLS OEWS figures — by
        more than 5% consistently across multiple postings — we note this in the relevant page and adjust
        our estimate range accordingly. We do not replace BLS data with job posting data; we use postings
        as a verification layer and flag significant divergence.
      </p>

      <Image
        src="/images/how-we-calculate-nurse-salary-estimates-comparison.png"
        alt="Horizontal bar chart showing the approximate weight of each data source in NurseSalaryIntel salary estimates: BLS OEWS 60%, job postings 25%, regional adjustments 10%, nurse-reported data 5%"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 3: Apply Regional Market Adjustments</h2>
      <p>
        BLS OEWS publishes metro-level data for large metropolitan statistical areas, but not for every
        city or suburb. For cities without direct MSA-level BLS data, we use the nearest available MSA
        figure and apply a regional adjustment based on:
      </p>
      <ul className="list-disc list-inside space-y-1 my-4 text-on-surface leading-relaxed">
        <li><strong>Cost of living index</strong> — sourced from the Council for Community and Economic Research (C2ER)</li>
        <li><strong>State income tax rate</strong> — we cite the 2026 rate where available from state revenue departments</li>
        <li><strong>Local healthcare market conditions</strong> — presence of major academic medical centers, union activity, shortage designations</li>
        <li><strong>Proximity to higher-paying metro</strong> — nurses in satellite suburbs often take small discounts vs. the core metro</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 4: Incorporate Nurse-Reported Compensation</h2>
      <p>
        Where available, we incorporate publicly reported compensation data from nurse surveys and
        community sources — including published nursing salary surveys from organizations like the{' '}
        <a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer" className="underline text-primary">
          American Association of Colleges of Nursing (AACN)
        </a>{' '}
        and published hospital pay transparency data. This is a supplemental source only — we do not
        accept unverified anonymous submissions as data inputs.
      </p>

      <Image
        src="/images/how-we-calculate-nurse-salary-estimates-hospital_compressed.png"
        alt="NurseSalaryIntel researcher at a desk reviewing nursing salary data sources including BLS reports and hospital job postings on a computer"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">What Our Estimates Cannot Tell You</h2>
      <p>
        Understanding the limitations of any salary data source is as important as the data itself.
        NurseSalaryIntel estimates should not be used for:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-on-surface leading-relaxed">
        <li>
          <strong>Specific offer benchmarking without verification.</strong> Always confirm with current
          job postings for the exact unit, system, and shift you are targeting.
        </li>
        <li>
          <strong>Union contract negotiations.</strong> Union pay scales are set by contract and may
          differ significantly from market estimates. Contact your union directly.
        </li>
        <li>
          <strong>Legal or financial advice.</strong> We are not attorneys, financial advisors, or
          certified salary consultants. Our data is for informational and career research purposes only.
        </li>
        <li>
          <strong>Travel nurse package comparison.</strong> Travel nurse total compensation (stipends,
          housing, per diem) does not map cleanly to BLS OEWS figures, which measure W-2 base wages.
          See our{' '}
          <Link href="/travel-nursing" className="underline text-primary">
            travel nurse salary guide
          </Link>{' '}
          for package-specific guidance.
        </li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Use These Estimates in Your Career</h2>
      <p>
        The most effective use of NurseSalaryIntel data is as a starting point for your own research —
        not as the final word. Here is the workflow we recommend:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4 text-on-surface leading-relaxed">
        <li>Use our city and specialty pages to understand the general range for your target market.</li>
        <li>Search active job postings on the careers pages of specific hospitals you are targeting to see posted ranges.</li>
        <li>Check Glassdoor and Indeed salary data for nurse-reported figures at your specific employer.</li>
        <li>Ask your recruiter directly what the pay grid looks like for your experience level and unit.</li>
        <li>Use our{' '}
          <Link href="/nurse-salary-negotiation-guide-2026" className="underline text-primary">
            negotiation guide
          </Link>{' '}
          to understand what is typically flexible and how to ask for more.
        </li>
      </ol>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Frequently Asked Questions</h2>

      <div className="not-prose space-y-4 mt-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-surface-container-low rounded-lg p-4 border border-outline-variant">
            <p className="font-semibold text-on-surface mb-1 text-sm">{faq.question}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface mt-8">Related Pages</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/about', label: 'About NurseSalaryIntel', desc: 'Our team and editorial mission' },
          { href: '/salary-data', label: 'Full Salary Data Hub', desc: 'All nurse salary data by state' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to use data in a real negotiation' },
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states with BLS sourcing' },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">→</span>
          </Link>
        ))}
      </div>

      <MethodologyBox />

      <p className="text-xs text-on-surface-variant mt-4">
        Primary data source:{' '}
        <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="underline">
          U.S. Bureau of Labor Statistics
        </a>{' '}
        OEWS May 2024 survey, published March 2025 ·{' '}
        <a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer" className="underline">
          American Association of Colleges of Nursing (AACN)
        </a>{' '}
        ·{' '}
        <a href="https://www.c2er.org/" target="_blank" rel="noopener noreferrer" className="underline">
          Council for Community and Economic Research (C2ER)
        </a>{' '}
        cost of living data.
      </p>
    </SEOPageLayout>
  );
}
