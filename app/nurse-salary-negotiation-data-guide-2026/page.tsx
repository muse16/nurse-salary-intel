import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'How to Use BLS Data to Negotiate Your Nurse Salary in 2026',
  description:
    'Most nurses negotiate blind. Here\'s exactly how to pull BLS OEWS data, job posting ranges, and cost-of-living benchmarks to walk into any offer conversation with hard numbers.',
  alternates: { canonical: 'https://nursesalaryintel.com/nurse-salary-negotiation-data-guide-2026' },
  openGraph: {
    title: 'How to Use BLS Data to Negotiate Your Nurse Salary in 2026',
    description: 'Pull BLS data, job posting ranges, and cost-of-living benchmarks before your next salary conversation. A data-first negotiation guide for RNs.',
    url: 'https://nursesalaryintel.com/nurse-salary-negotiation-data-guide-2026',
  },
};

const faqs = [
  {
    question: 'Where can nurses find reliable salary data for negotiating?',
    answer:
      'The Bureau of Labor Statistics OEWS (Occupational Employment and Wage Statistics) is the most authoritative public source. The most recent release covers May 2024 wages. Search for SOC code 29-1141 (Registered Nurses) filtered by your state or metropolitan area. For job-level data, search Indeed, LinkedIn, and Glassdoor for your specific role and filter to your city — many postings now include salary ranges due to pay transparency laws.',
  },
  {
    question: 'How do I calculate what I should be making as a nurse?',
    answer:
      'Start with BLS OEWS median wage for your state and MSA. Then adjust upward for specialty (ICU, OR, and trauma nurses typically earn 15–25% above the median), experience (each 5 years of experience adds roughly 8–12% in most markets), and shift (nights add $4–$8/hr). Finally compare your gross offer to cost-of-living: a $75,000 offer in Cleveland has more purchasing power than $95,000 in Seattle after taxes and housing.',
  },
  {
    question: 'Is it OK to ask for more than the posted salary range?',
    answer:
      "Yes — posted ranges are usually floors, not ceilings. Hospital HR departments post ranges based on what they need to budget for, not what they've actually paid top candidates. If you have specialty certification, trauma experience, or a competing offer, it is reasonable to ask for 10–15% above the posted maximum. The worst they can say is no, and declining to negotiate costs you money every pay period for the rest of your time at that employer.",
  },
  {
    question: 'What data sources should I use before negotiating a travel nurse contract?',
    answer:
      'For travel contracts, BLS data is a starting point but agency blended rates vary significantly. Compare the all-in package: base hourly + non-taxed stipends (housing, meals, incidentals) + completion bonuses. Use Vivian Health and NurseRecruiter to compare packages for the same location across multiple agencies. The taxable base rate is critical — it must meet or exceed the BLS median for that MSA to be IRS-defensible.',
  },
  {
    question: 'Should I mention a competing offer when negotiating my nurse salary?',
    answer:
      "Yes, if you have one — it is the single strongest negotiating tool available. A real competing offer from a comparable employer, cited specifically ('I have an offer from [Hospital] at $X'), anchors the conversation in market reality rather than HR budget preferences. If you don't have a competing offer, a competing job posting with a published range serves a similar function.",
  },
];

const blsDataPoints = [
  { label: 'Median US RN salary (BLS May 2024)', avgSalary: '$89,010/yr', hourlyRate: '$42.79/hr' },
  { label: '25th percentile (entry/mid market)', avgSalary: '$72,200/yr', hourlyRate: '$34.71/hr' },
  { label: '75th percentile (experienced/specialty)', avgSalary: '$106,530/yr', hourlyRate: '$51.22/hr' },
  { label: '90th percentile (senior/high-cost market)', avgSalary: '$130,050/yr', hourlyRate: '$62.52/hr' },
];

const specialtyAdjustments = [
  { label: 'Med-Surg (baseline)', avgSalary: '0%', hourlyRate: 'Reference rate' },
  { label: 'ICU / Critical Care', avgSalary: '+15–22%', hourlyRate: 'Most markets' },
  { label: 'OR / Surgical', avgSalary: '+12–18%', hourlyRate: 'Most markets' },
  { label: 'L&D', avgSalary: '+8–14%', hourlyRate: 'Most markets' },
  { label: 'ER / Emergency', avgSalary: '+10–16%', hourlyRate: 'Most markets' },
  { label: 'Trauma (dedicated units)', avgSalary: '+18–28%', hourlyRate: 'Level 1 centers' },
  { label: 'NICU', avgSalary: '+12–18%', hourlyRate: 'Most markets' },
];

export default function NurseSalaryNegotiationDataGuide2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/nurse-salary-negotiation-guide-2026' },
        { label: 'Data-Driven Negotiation Guide 2026' },
      ]}
      h1="How to Use BLS Data and Job Postings to Negotiate Your Nurse Salary in 2026"
      lastUpdated="May 2026"
      schemaTitle="How to Use BLS Data to Negotiate Your Nurse Salary 2026"
      schemaDescription="A data-first guide to researching and negotiating RN salary using BLS OEWS data, job postings, and cost-of-living benchmarks."
      schemaUrl="/nurse-salary-negotiation-data-guide-2026"
      datePublished="2026-05-14"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">The Problem</p>
        <p className="text-on-surface text-base">
          Most nurses walk into salary negotiations with no data. HR departments walk in with spreadsheets.
          That gap costs nurses <strong>$5,000–$15,000/year</strong> — money that compounds every year you stay at
          that employer. This guide closes the gap: here is exactly where to get the data, how to read it,
          and how to use it in a real conversation.
        </p>
      </div>

      <Image
        src="/images/nurse-salary-negotiation-data-guide-2026-hero_compressed.webp"
        alt="Registered nurse in scrubs sitting across from a hospital HR manager reviewing salary documents in a professional office setting"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Salary negotiation advice for nurses is everywhere. Most of it tells you to &ldquo;know your worth&rdquo;
        without explaining where to find that number. The Bureau of Labor Statistics publishes the most comprehensive
        public wage dataset in the country — updated annually, broken down by state, metro area, and occupation.
        Job posting salary ranges, mandated by pay transparency laws in a growing number of states, add a second
        data layer. Combined, these two sources give you everything you need to anchor any salary conversation
        in market reality rather than guesswork.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 1: Pull Your BLS Benchmark</h2>
      <p>
        The BLS Occupational Employment and Wage Statistics (OEWS) program publishes wages for every major
        occupation in every state and metropolitan statistical area. For registered nurses, the SOC code is
        29-1141. The most recent data covers May 2024 wages (published April 2025).
      </p>
      <p>
        Go to bls.gov/oes → &ldquo;Data&rdquo; → &ldquo;Occupational Employment Statistics&rdquo; → search for
        SOC 29-1141 → filter by your state and metro area. You will see the 10th, 25th, 50th (median), 75th,
        and 90th percentile wages. The 75th percentile is your target — that is what experienced, specialty-trained
        nurses in your market earn. If you are being offered the median or below as an experienced nurse, you have
        a documented, sourced number to challenge it with.
      </p>

      <SalaryTable
        title="US RN Salary Benchmarks — BLS OEWS May 2024"
        headers={['Percentile', 'Annual Salary', 'Hourly Rate']}
        rows={blsDataPoints}
        source="Bureau of Labor Statistics OEWS May 2024, SOC 29-1141 Registered Nurses"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 2: Adjust for Your Specialty</h2>

      <Image
        src="/images/nurse-salary-negotiation-data-guide-2026-comparison.png"
        alt="Bar chart showing RN specialty salary premiums above Med-Surg baseline for ICU, OR, ER, L&D, trauma, and NICU nurses"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        BLS state and metro figures blend all RN specialties together — meaning a Med-Surg nurse and an ICU nurse
        are averaged into the same number. If you work in a high-demand specialty, you should be earning meaningfully
        above the published median. Use the adjustments below as a starting point for your specific specialty
        premium, then validate against job posting ranges in your market.
      </p>

      <SalaryTable
        title="Typical Specialty Premium Over Med-Surg Baseline"
        headers={['Specialty', 'Typical Premium', 'Context']}
        rows={specialtyAdjustments}
        source="NurseSalaryIntel 2026 specialty analysis based on BLS OEWS and market data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 3: Search Job Postings for Real Ranges</h2>

      <Image
        src="/images/nurse-salary-negotiation-data-guide-2026-hospital_compressed.webp"
        alt="Nurse in scrubs reviewing salary research documents on a laptop at a hospital workstation"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Pay transparency laws now require salary ranges in job postings across California, Colorado, New York,
        Washington, Illinois, and a growing list of other states. Even where not legally required, many hospital
        systems have started posting ranges voluntarily. This gives you real market data — not survey estimates —
        from the actual employers competing for your skills.
      </p>
      <p>
        Search Indeed or LinkedIn for your role + city. Filter to postings with salary ranges. Look at 10–15
        postings from comparable employers. Note the floor, ceiling, and midpoint. If your current employer is
        offering you the floor while competitors are posting the ceiling, that gap is your negotiating document.
        Print it. Bring it to the conversation.
      </p>

      <blockquote className="border-l-4 border-primary pl-4 italic text-on-surface-variant my-6">
        &ldquo;If what you&apos;re asking for is realistic, what&apos;s wrong with showing that you value
        yourself enough to ask for a little? If you&apos;re going to ask for more, you&apos;d better have
        a response to tell them why you deserve it and look them straight in the eye, don&apos;t bat an eye,
        and tell them exactly how amazing you are.&rdquo;
        <footer className="mt-2 text-sm not-italic">— Keith Carlson, BSN, RN, NC-BC, board-certified nurse coach (<a href="https://www.indeed.com/career-advice/pay-salary/nurse-negotiation-guide" className="underline" target="_blank" rel="noopener noreferrer">via Indeed</a>)</footer>
      </blockquote>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 4: Factor in Cost of Living — Not Just Gross Salary</h2>
      <p>
        A $90,000 offer in Houston and a $90,000 offer in San Francisco are not equivalent. Texas has no income
        tax; California takes 9.3% on that bracket. Houston median rent runs $1,300/month; San Francisco runs
        $3,200+. After taxes and housing, the Houston offer leaves you with substantially more money.
      </p>
      <p>
        When comparing offers across cities — or deciding whether to relocate — run a cost-of-living adjusted
        comparison. The formula is simple: take your gross salary, subtract federal tax (approximately 22% bracket
        for most nurses), state income tax (0–9.9% depending on state), and local income tax (0–3.2%), then
        subtract annualized housing cost. What remains is your real annual purchasing power. That number is what
        you should be comparing, not the headline salary.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step 5: Put It All Together in the Conversation</h2>
      <p>
        The most effective salary negotiation scripts are short and specific. Vague asks get vague answers.
        Compare these two approaches:
      </p>
      <p>
        <strong>Weak:</strong> &ldquo;I was hoping for a little more based on my experience.&rdquo;
      </p>
      <p>
        <strong>Strong:</strong> &ldquo;The BLS OEWS data for this metro puts the 75th percentile for
        experienced ICU nurses at $102,000. I&apos;ve also looked at three current postings from comparable
        hospitals in this area — they&apos;re ranging from $98,000 to $108,000. My current offer is $88,000.
        Based on my seven years of ICU experience and CCRN certification, I&apos;m asking for $97,000.&rdquo;
      </p>
      <p>
        The second version is harder to dismiss because it is grounded in public data, not personal feeling.
        HR can argue with your sense of your own worth. They cannot easily argue with the Bureau of Labor
        Statistics.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What to Do If They Say No</h2>
      <p>
        A no to base salary is not always a no to total compensation. If an employer cannot move on base,
        ask about: sign-on bonus structure and vesting timeline, shift differential rates (nights, weekends),
        tuition reimbursement annual cap, additional PTO accrual for experienced hires, and specialty
        certification pay ($1–$3/hr for CCRN, CEN, TNCC, and similar credentials). These levers are often
        more flexible than base salary because they come from different budget lines.
      </p>
      <p>
        If they cannot move on anything — and the gap between their offer and your data is material — that
        is useful information too. It tells you the employer is either budget-constrained or not willing to
        compete for talent. Both are worth knowing before you sign.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide 2026', desc: 'Full negotiation framework and scripts' },
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'Your BLS benchmark by state' },
          { href: '/rn-salary-by-years-of-experience-2026', label: 'RN Salary by Experience Level', desc: 'How pay grows year by year' },
          { href: '/how-we-calculate-nurse-salary-estimates', label: 'How We Calculate Salary Estimates', desc: 'Our data methodology explained' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">→</span>
          </Link>
        ))}
      </div>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
