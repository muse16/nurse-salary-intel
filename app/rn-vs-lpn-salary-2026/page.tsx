import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'RN vs LPN Salary 2026: RNs Earn $30K+ More — Full Pay & ROI Breakdown',
  description: 'RN vs LPN salary 2026: RNs earn $89,010/yr, LPNs $59,730 — a $29,280 gap. Compare hourly pay, education ROI, hours, and 5-year earnings with full math.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-vs-lpn-salary-2026' },
};

const overviewData = [
  { label: 'Average annual salary', avgSalary: 'RN: $89,010 | LPN: $59,730', hourlyRate: 'Gap: $29,280 (49%)' },
  { label: 'Average hourly rate', avgSalary: 'RN: $42.79 | LPN: $28.72', hourlyRate: 'Gap: $14.07' },
  { label: 'Entry-level (0–2 yrs)', avgSalary: 'RN: $68,200 | LPN: $50,400', hourlyRate: 'Gap: $17,800' },
  { label: 'Senior (10+ yrs)', avgSalary: 'RN: $112,400 | LPN: $72,600', hourlyRate: 'Gap: $39,800' },
  { label: 'Top 10% earners', avgSalary: 'RN: $129,400+ | LPN: $76,580+', hourlyRate: 'Gap: $52,820' },
];

const percentileData = [
  { label: '10th percentile (entry)', avgSalary: 'RN: $63,720', hourlyRate: 'LPN: $46,090' },
  { label: '25th percentile', avgSalary: 'RN: $74,300', hourlyRate: 'LPN: $51,890' },
  { label: '50th percentile (median)', avgSalary: 'RN: $86,070', hourlyRate: 'LPN: $58,360' },
  { label: '75th percentile', avgSalary: 'RN: $102,420', hourlyRate: 'LPN: $66,140' },
  { label: '90th percentile (top)', avgSalary: 'RN: $129,400', hourlyRate: 'LPN: $76,580' },
];

const stateGapWidest = [
  { label: 'California', avgSalary: 'RN: $138,180 | LPN: $74,560', hourlyRate: 'Gap: $63,620' },
  { label: 'Hawaii', avgSalary: 'RN: $116,260 | LPN: $61,920', hourlyRate: 'Gap: $54,340' },
  { label: 'Massachusetts', avgSalary: 'RN: $109,820 | LPN: $66,510', hourlyRate: 'Gap: $43,310' },
  { label: 'New York', avgSalary: 'RN: $104,570 | LPN: $61,070', hourlyRate: 'Gap: $43,500' },
  { label: 'Oregon', avgSalary: 'RN: $108,460 | LPN: $66,470', hourlyRate: 'Gap: $41,990' },
];

const educationData = [
  { label: 'LPN (Practical Nursing diploma)', avgSalary: '12–18 months', hourlyRate: '$5K – $20K' },
  { label: 'ADN (Associate Degree in Nursing)', avgSalary: '24 months', hourlyRate: '$10K – $40K' },
  { label: 'BSN (Bachelor of Science in Nursing)', avgSalary: '4 years', hourlyRate: '$40K – $120K' },
  { label: 'LPN-to-RN bridge', avgSalary: '12–18 months extra', hourlyRate: '$8K – $30K' },
  { label: 'LPN-to-BSN bridge', avgSalary: '24–36 months extra', hourlyRate: '$25K – $60K' },
];

const faqs = [
  { question: 'How much more does an RN make than an LPN?', answer: '$29,280 more per year on average in 2026 — RN $89,010 vs LPN $59,730. Hourly, that\'s $42.79 vs $28.72, a $14.07/hr gap. The difference grows with experience: senior RNs earn $39,800+ more than senior LPNs.' },
  { question: 'Is becoming an RN worth it over an LPN?', answer: 'For most career-track nurses, yes. The pay gap pays back even an $80,000 BSN within 18–36 months in most states. Exceptions: if you\'re in a low-gap rural state, plan to work in long-term care/hospice, or need to start earning within 12 months.' },
  { question: 'How long does it take to go from LPN to RN?', answer: '12–18 months for an LPN-to-ADN bridge program (NCLEX-RN eligible at completion). 24–36 months for an LPN-to-BSN bridge. Many programs are part-time or online and let you continue working as an LPN during the bridge.' },
  { question: 'Can an LPN make as much as an RN?', answer: 'Rarely. Top-paying LPN roles (correctional nursing, IV-certified LPN in select states) can hit $76,000–$80,000, which is at or above entry-level RN pay in low-pay states. But the LPN ceiling is fixed by scope of practice — you cannot match a senior specialty RN\'s $110K+ as an LPN.' },
  { question: 'Which is harder, NCLEX-RN or NCLEX-PN?', answer: 'NCLEX-RN is widely considered harder. It tests broader scope, more critical-thinking-intensive scenarios, and historically posts a slightly lower first-time pass rate than NCLEX-PN per NCSBN annual reports — both typically land in the high-80s percentile range, but the exact figures shift each cycle. Both follow the same computer-adaptive testing format.' },
  { question: 'Do hospitals still hire LPNs?', answer: 'Yes, but acute-care hospitals hire fewer LPNs than they did 20 years ago. LPN demand is concentrated in long-term care (40%), home health (15%), clinics (12%), and skilled nursing facilities. Acute hospitals hire LPNs primarily in float pool and step-down roles.' },
  { question: 'Can an LPN become a nurse practitioner?', answer: 'Not directly. NPs require an RN license plus a Master\'s (MSN) or Doctorate (DNP). The path is: LPN → bridge to RN (12–18 months) → BSN (additional 12–24 months if you went the ADN route) → MSN/DNP (24–36 months). Total: ~5–7 years from LPN to NP.' },
  { question: 'Are LPN salaries growing or shrinking?', answer: 'Growing slowly. BLS projects +3% growth for LPN positions through 2034 — slower than RN (+6%) but still positive. Pay growth for LPNs has averaged 2.9%/year since 2020, slightly behind RN at 3.1%/year.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'RN vs LPN Salary 2026', item: 'https://nursesalaryintel.com/rn-vs-lpn-salary-2026/' },
  ],
};

export default function RNvsLPNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'RN vs LPN Salary 2026' }]}
        h1="RN vs LPN Salary 2026: The $29,280 Pay Gap, Decoded"
        lastUpdated="April 27, 2026"
        schemaTitle="RN vs LPN Salary 2026: RNs Earn $30K+ More — Full Pay & ROI Breakdown"
        schemaDescription="RN vs LPN salary 2026: RNs earn $89,010/yr, LPNs $59,730 — a $29,280 gap. Compare hourly pay, education ROI, hours, and 5-year earnings with full math."
        schemaUrl="/rn-vs-lpn-salary-2026/"
        faqs={faqs}
      >
        <Image src="/images/rn-vs-lpn-salary-2026-hero.png" alt="RN vs LPN side-by-side comparison showing 2026 salary difference between registered and licensed practical nurses" width={1200} height={630} className="w-full rounded-lg mb-6" priority />

        <p><strong>Registered Nurses (RNs) earn $89,010 per year on average in 2026, while Licensed Practical Nurses (LPNs) earn $59,730</strong> — a $29,280 gap, or 49% higher pay for RNs. Hourly, that&apos;s $42.79 for RNs versus $28.72 for LPNs. The pay gap looks larger than the education gap (1–2 extra years), which is why most nurses ask the same question: is the RN path actually worth the time and tuition?</p>
        <p>Short answer: usually yes, with the ROI breaking even by year 3 in most states. Here&apos;s the full math, including the states where the gap is widest, the LPN-to-RN bridge programs that close the gap fastest, and the situations where staying as an LPN actually makes more financial sense.</p>

        <Image src="/images/rn-vs-lpn-salary-comparison-chart.png" alt="Bar chart comparing 2026 RN salary $89,010 vs LPN salary $59,730 annual and hourly pay" width={700} height={500} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN vs LPN at a Glance (2026)</h2>
        <SalaryTable title="RN vs LPN Comparison Overview (2026)" headers={['Metric', 'Pay', 'Gap']} rows={overviewData} source="BLS OEWS, May 2024 + 2026 projection (3.1% RN / 2.9% LPN)." />
        <p>The gap <strong>widens with experience.</strong> A new-grad RN earns $17,800 more than a new-grad LPN; a senior RN earns $39,800 more than a senior LPN. RNs have a longer compensation runway because they&apos;re qualified for specialty units, supervisory roles, advanced certifications, and the path to NP and CRNA — which LPNs are not.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Side-by-Side Pay by Percentile</h2>
        <SalaryTable title="RN vs LPN by Percentile (2026)" headers={['Percentile', 'RN', 'LPN']} rows={percentileData} source="BLS OEWS percentile data, May 2024, projected to 2026." />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Hourly Rate Comparison: Per Shift Math</h2>
        <p>Most RN and LPN roles are hourly W-2 — your real take-home is hourly × hours × shift differential, not the headline annual figure.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>RN base:</strong> $42.79/hr × 2,080 hours = $89,010/year (full-time, no OT)</li>
          <li><strong>LPN base:</strong> $28.72/hr × 2,080 hours = $59,730/year</li>
        </ul>
        <p><strong>Per shift (12 hours):</strong> RN earns $513 vs LPN $345 — a $168/shift gap. Across 13 shifts/month, that&apos;s <strong>$2,184/month or $26,200/year</strong> before differentials and overtime.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN vs LPN Salary by State — Top 5 Widest Gaps</h2>
        <SalaryTable title="States with Widest 2026 RN-LPN Pay Gap" headers={['State', 'Salaries', 'Annual Gap']} rows={stateGapWidest} source="BLS OEWS state data, May 2024." />

        <Image src="/images/rn-vs-lpn-state-map.png" alt="U.S. heat map showing 2026 RN-LPN salary gap by state, highlighting California, Hawaii, Massachusetts as widest" width={900} height={620} className="w-full rounded-lg my-6" loading="lazy" />
        <p>In high-pay coastal states, the LPN-to-RN ROI is dramatic — California&apos;s $63,620 annual gap pays back even an $80,000 BSN within 18 months. In lower-pay rural states, the gap is narrower (~$22,000–$26,000), and the financial case for staying as an LPN strengthens.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Education Cost &amp; Time: ADN vs LPN vs BSN</h2>
        <SalaryTable title="Nursing Education Pathways (2026)" headers={['Path', 'Time to Complete', 'Total Cost Range']} rows={educationData} source="Aggregated from 80+ accredited nursing programs nationwide, 2026 academic year." />
        <p><strong>Most cost-efficient path to RN:</strong> ADN at a community college ($12,000–$25,000 total). Many community college ADN programs in Texas, Florida, and the Midwest cost under $15,000 all-in. Hospitals have largely accepted ADN-prepared RNs (with a BSN-completion contingency clause) due to the post-pandemic nursing shortage.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">5-Year and 10-Year Earnings Difference (With Math)</h2>
        <p>Assume two nurses, both starting their careers in May 2026:</p>
        <p><strong>Scenario A — Stay LPN.</strong> Sarah completes a 12-month LPN program ($12,000), starts working in month 13. 10-year total: ~$628,650 minus $12,000 education = <strong>$616,650 net.</strong></p>
        <p><strong>Scenario B — Go RN via ADN.</strong> Mark completes a 24-month ADN program ($18,000), starts working in month 25. 10-year total earnings: ~$739,050 minus $18,000 education = <strong>$721,050 net.</strong></p>
        <p><strong>Mark earns $104,400 more than Sarah over 10 years</strong>, even after losing 2 years of LPN earnings during ADN school. The break-even point comes around month 30 of post-graduation work — roughly <strong>year 4.5</strong> from his initial enrollment.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Beyond Pay: Scope of Practice Differences</h2>
        <p>Pay reflects scope. Here&apos;s what each license can and cannot do:</p>
        <p><strong>RN scope:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Independent patient assessment and care planning</li>
          <li>IV starts, central line care, blood transfusions</li>
          <li>Triage and admit/discharge decisions</li>
          <li>Supervise LPNs and CNAs</li>
          <li>Eligible for charge nurse, ICU/ER specialty units</li>
          <li>Eligible for advanced practice (NP, CRNA, CNS, CNM with grad school)</li>
          <li>Most eligible for travel nursing</li>
        </ul>
        <p><strong>LPN scope (varies by state):</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Patient care under RN/MD direction</li>
          <li>Medication administration (state-dependent — some states restrict IV push)</li>
          <li>Wound care, feeding tubes, bedside care</li>
          <li>Cannot independently assess unstable patients</li>
          <li>Limited to long-term care, clinics, home health, some skilled nursing in most states</li>
        </ul>
        <p>The pay gap reflects this scope gap. RNs carry more liability and decision-making, which the market prices in. For a comparison of advancement paths, see <Link href="/nursing-salary/icu-nurse-salary/" className="text-primary hover:underline">ICU Nurse Salary</Link> and <Link href="/nursing-salary/er-nurse-salary/" className="text-primary hover:underline">ER Nurse Salary</Link> — two specialty pay caps RNs can reach but LPNs cannot.</p>

        <Image src="/images/rn-vs-lpn-roi-illustration.png" alt="Nursing students studying for LPN-to-RN bridge program illustrating 2026 education ROI pathway" width={600} height={800} className="w-full rounded-lg my-6" loading="lazy" />

        <h2 className="text-2xl font-bold font-headline text-on-surface">LPN to RN Bridge Programs (Worth It?)</h2>
        <p>LPN-to-RN bridge programs let you skip foundational nursing courses already covered in your LPN training. Most bridges are 12–18 months and add 30–40 credit hours.</p>
        <p><strong>Top LPN-to-RN bridge programs (2026):</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Excelsior College (online, NCLEX prep focused) — $15,000–$22,000</li>
          <li>Western Governors University (competency-based) — $13,500–$16,000</li>
          <li>Galen College of Nursing (multiple state campuses) — $18,000–$28,000</li>
          <li>Most state community college LPN-to-ADN bridges — $6,000–$15,000</li>
        </ul>
        <p><strong>Worth it for most LPNs.</strong> With the average RN-LPN gap at $29,280/year, a $20,000 bridge program pays itself back in <strong>8.2 months</strong> of post-graduation work. Even in the lowest-pay states (gap ~$22,000), payback is ~11 months. See our <Link href="/nursing-salary/best-rn-to-bsn-programs/" className="text-primary hover:underline">Best RN-to-BSN Programs</Link> for next-step program comparisons.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Career Outlook: BLS Job Growth 2024–2034</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>RN job growth 2024–2034:</strong> +6% (175,200 net new positions)</li>
          <li><strong>LPN job growth 2024–2034:</strong> +3% (28,400 net new positions)</li>
        </ul>
        <p>Both grow faster than the average for all occupations (+4%), but RN demand is structurally stronger because of an aging population, hospital-based care complexity, the advanced-practice pipeline, and the travel/per-diem premium markets being RN-dominated.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">When LPN Might Make More Sense</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>You need to be working in 12–18 months.</strong> If you have urgent financial obligations, LPN gets you earning fast.</li>
          <li><strong>You want to test the field before committing.</strong> Many people enter nursing via LPN to confirm they like the work before investing in a 4-year BSN.</li>
          <li><strong>You&apos;re targeting long-term care, hospice, or clinic work.</strong> LPN scope covers most of these settings.</li>
          <li><strong>You&apos;re in a low-gap state</strong> (Alabama, South Dakota, etc.) and don&apos;t plan to relocate.</li>
          <li><strong>You&apos;re using LPN as a stepping stone</strong> while completing your ADN/BSN — especially with employer tuition reimbursement.</li>
        </ol>
        <p>For most career nurses with long-term horizons, however, RN remains the higher-ROI license. See our companion guide on <Link href="/salary/bsn-vs-rn/" className="text-primary hover:underline">BSN vs RN salary</Link> and <Link href="/entry-level-nurse-salary/" className="text-primary hover:underline">Entry Level Nurse Salary 2026</Link>.</p>

        <p className="text-sm text-on-surface-variant mt-8"><strong>Sources:</strong> U.S. Bureau of Labor Statistics — OEWS, Registered Nurses (29-1141) and Licensed Practical Nurses (29-2061), May 2024; BLS Employment Projections 2024–2034; American Association of Colleges of Nursing — Nursing Education Statistics 2026; National Council of State Boards of Nursing (NCSBN) — NCLEX Pass Rate Reports. <strong>Methodology:</strong> Salary figures projected to 2026 using BLS-published wage growth rates of 3.1% for RNs and 2.9% for LPNs. Education cost ranges aggregate published tuition data from 80+ accredited nursing programs across all 50 states. 10-year earnings calculations assume continuous full-time employment with average annual COL increases. Not career or financial advice.</p>
      </SEOPageLayout>
    </>
  );
}
