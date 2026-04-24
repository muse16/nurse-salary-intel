import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Highest Paying States for RNs 2026: Full Rankings',
  description: 'The highest paying states for registered nurses in 2026 — full rankings with hourly pay, annual mean, cost-of-living notes, and metro highlights.',
};

const faqs = [
  {
    question: 'Which state pays registered nurses the most in 2026?',
    answer: 'California, by a wide margin — estimated $148,000–$158,000 mean annual pay in 2026.',
  },
  {
    question: 'What are the top 5 highest paying states for nurses?',
    answer: 'California, Hawaii, Oregon, Washington, and Alaska on a nominal basis.',
  },
  {
    question: 'Is California really the best state for RN pay?',
    answer: 'Nominally, yes. On a cost-of-living-adjusted basis it remains strong but not always the top — Oregon and Washington often produce better real pay after housing and taxes.',
  },
  {
    question: 'Why do California nurses make so much more?',
    answer: 'Three reasons: AB 394 staffing ratio legislation, strong union density (CNA), and high structural cost of living.',
  },
  {
    question: 'What about no-income-tax states?',
    answer: "Texas, Florida, Tennessee, Nevada, Washington, and a few others have no state income tax. They don't top nominal rankings but improve significantly on take-home.",
  },
  {
    question: 'Which state has the lowest RN pay?',
    answer: 'Lower-paying states in 2026 estimates include South Dakota, Mississippi, Alabama, Iowa, and Arkansas, with means in the $74,000–$82,000 range.',
  },
  {
    question: 'How does New York rank?',
    answer: '#7 nominally. NYC metro pay is significantly higher than upstate; NYC real pay is mixed due to housing costs.',
  },
  {
    question: 'Does Hawaii really have high RN pay?',
    answer: 'Nominally yes, #2 nationally. But Hawaii has the highest cost of living in the country — real pay is effectively below the US average for most nurses.',
  },
  {
    question: 'Is Texas a good state for RN pay?',
    answer: 'Texas ranks mid-pack nominally but strong on cost-of-living-adjusted real pay, especially in Houston, Dallas, and Austin metros.',
  },
  {
    question: 'What about travel nurses — does the state ranking change?',
    answer: 'Travel rates do not follow staff-pay rankings exactly. High-demand states command high travel rates, but demand-driven spikes can elevate other states unpredictably.',
  },
  {
    question: 'Should I move states for RN pay?',
    answer: 'Only after modeling total compensation, cost of living, taxes, and lifestyle fit. Use the RN Salary Calculator to compare.',
  },
  {
    question: 'Which state has the fastest-growing RN wages?',
    answer: '2026 wage growth is broadly similar across states, but middle-tier states are growing sign-on bonuses fastest as they compete for talent.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Highest Paying States for Nurses', item: 'https://nursesalaryintel.com/highest-paying-states-for-nurses/' },
    { '@type': 'ListItem', position: 3, name: 'Highest Paying States for RNs 2026', item: 'https://nursesalaryintel.com/highest-paying-states-for-rns-2026/' },
  ],
};

const top20 = [
  { rank: 1, state: 'California', annual: '$148,000 – $158,000', hourly: '$71 – $76/hr' },
  { rank: 2, state: 'Hawaii', annual: '$122,000 – $130,000', hourly: '$59 – $63/hr' },
  { rank: 3, state: 'Oregon', annual: '$117,000 – $125,000', hourly: '$56 – $60/hr' },
  { rank: 4, state: 'Washington', annual: '$114,000 – $122,000', hourly: '$55 – $59/hr' },
  { rank: 5, state: 'Alaska', annual: '$113,000 – $121,000', hourly: '$54 – $58/hr' },
  { rank: 6, state: 'Massachusetts', annual: '$110,000 – $118,000', hourly: '$53 – $57/hr' },
  { rank: 7, state: 'New York', annual: '$108,000 – $116,000', hourly: '$52 – $56/hr' },
  { rank: 8, state: 'New Jersey', annual: '$103,000 – $110,000', hourly: '$50 – $53/hr' },
  { rank: 9, state: 'Nevada', annual: '$100,000 – $107,000', hourly: '$48 – $51/hr' },
  { rank: 10, state: 'District of Columbia', annual: '$100,000 – $107,000', hourly: '$48 – $51/hr' },
  { rank: 11, state: 'Minnesota', annual: '$98,000 – $105,000', hourly: '$47 – $50/hr' },
  { rank: 12, state: 'Connecticut', annual: '$97,000 – $104,000', hourly: '$47 – $50/hr' },
  { rank: 13, state: 'Rhode Island', annual: '$96,000 – $103,000', hourly: '$46 – $49/hr' },
  { rank: 14, state: 'Maryland', annual: '$95,000 – $102,000', hourly: '$46 – $49/hr' },
  { rank: 15, state: 'Arizona', annual: '$93,000 – $100,000', hourly: '$45 – $48/hr' },
  { rank: 16, state: 'Colorado', annual: '$92,000 – $98,000', hourly: '$44 – $47/hr' },
  { rank: 17, state: 'New Hampshire', annual: '$91,000 – $97,000', hourly: '$44 – $47/hr' },
  { rank: 18, state: 'Illinois', annual: '$91,000 – $97,000', hourly: '$44 – $47/hr' },
  { rank: 19, state: 'Delaware', annual: '$90,000 – $97,000', hourly: '$43 – $47/hr' },
  { rank: 20, state: 'Vermont', annual: '$89,000 – $96,000', hourly: '$43 – $46/hr' },
];

export default function HighestPayingStatesForRNs2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Highest Paying States for Nurses', href: '/highest-paying-states-for-nurses/' },
          { label: 'Highest Paying States for RNs 2026' },
        ]}
        h1="Highest Paying States for Registered Nurses (2026 Rankings)"
        lastUpdated="April 24, 2026"
        schemaTitle="Highest Paying States for Registered Nurses (2026 Rankings)"
        schemaDescription="The highest paying states for registered nurses in 2026 — full rankings with hourly pay, annual mean, cost-of-living notes, and metro highlights."
        schemaUrl="/highest-paying-states-for-rns-2026/"
        faqs={faqs}
      >
        <p>
          The highest paying states for registered nurses in 2026 are <strong>California ($148,000–$158,000+ mean), Hawaii ($122,000+), Oregon ($117,000+), Washington ($114,000+), and Alaska ($113,000+)</strong>, based on BLS May 2024 OEWS data adjusted for 3–4% projected annual wage growth. The gap between the highest-paying state and the median state is over <strong>$40,000 per year</strong>. Cost of living meaningfully changes the effective ranking — Texas, Florida, and Tennessee improve significantly on a take-home basis.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How We Built the Rankings</h2>
        <p>
          All estimates use the BLS Occupational Employment and Wage Statistics (OEWS) May 2024 release as the baseline for state-level RN mean annual wages, projected forward with a 3–4% annual wage-growth assumption. Pay figures are estimates before shift differentials, specialty premiums, overtime, and bonuses. See the <Link href="/rn-salary-by-state/" className="text-primary hover:underline">state-by-state RN pay</Link> pillar and <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> for granular modeling.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Top 20 Highest Paying States for RNs (2026 — Nominal)</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Rank</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">State</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap">Estimated RN Mean Annual (2026)</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap">Estimated Hourly</th>
              </tr>
            </thead>
            <tbody>
              {top20.map((row, i) => (
                <tr
                  key={row.rank}
                  className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}
                >
                  <td className="px-4 py-3 font-medium text-on-surface tabular-nums">{row.rank}</td>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.state}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.annual}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.hourly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-on-surface-variant -mt-4">Source: BLS OEWS May 2024 (29-1141), projected 3–4% annually. Excludes differentials, OT, and bonuses.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Why These States Lead</h2>
        <p>Three structural factors explain most of the top-tier pay:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Union density</strong> — California, Oregon, Washington, Massachusetts, New York, and Minnesota all have strong nurse union presence. Collective bargaining consistently raises the wage floor and drives step-based progression.</li>
          <li><strong>Staffing ratio legislation</strong> — California&apos;s AB 394 (effective 2004) set minimum nurse-to-patient ratios by unit type. Ratio constraints tighten supply, which raises price. Oregon, Massachusetts, and New York have moved toward ratio or staffing-committee regulation.</li>
          <li><strong>Cost of living floor</strong> — Pacific and Northeast metros have structurally higher housing and service costs, and nominal wages rise to meet them.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living Adjusted: The Real Paycheck</h2>
        <p>
          Nominal rankings don&apos;t reflect what a nurse actually takes home and keeps. California&apos;s $150,000 mean loses significant ground once state income tax and Bay Area / LA housing are factored in. The table below is an illustrative re-ranking — states with lower nominal pay but much lower cost of living can produce better real purchasing power.
        </p>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">State</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap">Nominal Mean (2026)</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap">COL Index (100=US avg)</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Real Pay Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                { state: 'Michigan', nominal: '$81,000 – $87,000', col: '~90', note: 'Strong real pay' },
                { state: 'Tennessee', nominal: '$80,000 – $86,000', col: '~90', note: 'Strong real pay' },
                { state: 'Texas', nominal: '$89,000 – $96,000', col: '~94', note: 'Strong real pay' },
                { state: 'Georgia', nominal: '$84,000 – $90,000', col: '~91', note: 'Strong real pay' },
                { state: 'Oregon', nominal: '$117,000 – $125,000', col: '~113', note: 'High nominal + moderate COL' },
                { state: 'Washington', nominal: '$114,000 – $122,000', col: '~113', note: 'High nominal + moderate COL' },
                { state: 'California', nominal: '$148,000 – $158,000', col: '~142', note: 'High nominal, high COL drag' },
                { state: 'Hawaii', nominal: '$122,000 – $130,000', col: '~185', note: 'Below US avg real pay' },
              ].map((row, i) => (
                <tr
                  key={row.state}
                  className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}
                >
                  <td className="px-4 py-3 font-medium text-on-surface">{row.state}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.nominal}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.col}</td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-on-surface-variant -mt-4">Illustrative only. COL indexes vary by source and metro; always model your actual metro before relying on a statewide index.</p>
        <p>
          The takeaway: <strong>the nominal top-5 isn&apos;t the real top-5 for everyone.</strong> A nurse optimizing for savings rate may do better in Texas, Tennessee, or Michigan than in Hawaii. See our <Link href="/florida-rn-salary-2026/" className="text-primary hover:underline">Florida RN salary guide</Link> for a no-income-tax comparison.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">State-by-State Highlights</h2>
        <p><strong>California</strong> — by far the highest-paying RN market in the US. AB 394 ratios, strong CNA union representation, and massive system concentration in the Bay Area, LA, and San Diego drive pay. Cost of living is the primary offset.</p>
        <p><strong>Hawaii</strong> — second-highest nominal pay; highest cost of living by a wide margin. Best suited for nurses with existing ties to Hawaii or those optimizing for lifestyle.</p>
        <p><strong>Oregon</strong> — strong ONA union density, Magnet systems (OHSU, Providence, Legacy), and a more moderate cost of living than California make it one of the strongest real-pay markets.</p>
        <p><strong>Washington</strong> — WSNA represents a large share of Seattle-area RNs. Strong academic anchor (UW Medicine, Seattle Children&apos;s). Seattle-area housing is the primary COL drag.</p>
        <p><strong>Alaska</strong> — small labor market, high pay driven by recruitment difficulty and a structural remoteness premium. Consider carefully if you don&apos;t have a personal connection to the state.</p>
        <p><strong>Massachusetts</strong> — MNA is a powerful bargaining presence. Boston-metro academic density (MGH, Brigham, BIDMC) produces among the highest RN wages east of the Mississippi.</p>
        <p><strong>New York</strong> — enormous range by region. NYC union-system nurses can clear $130,000+ with differentials; upstate pay sits closer to the national mean.</p>
        <p><strong>Nevada</strong> — Las Vegas and Reno drive the state average. Below-median cost of living makes Nevada a strong real-pay candidate.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pay Premium Drivers Beyond State</h2>
        <p>
          State is the biggest factor, but your actual paycheck is the sum of state + metro + specialty + certification + shift + experience. Even within a top-5 state, rural pay can sit 15–20% below metro pay. An <Link href="/icu-nurse-salary-2026/" className="text-primary hover:underline">ICU nurse</Link> with CCRN in a mid-ranked state may out-earn a med-surg nurse in a top-5 state. See <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">top-paying RN specialties</Link> for specialty premiums.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">2026 Trends Worth Watching</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Staffing ratio legislation</strong> is being actively debated in Pennsylvania, Minnesota, and Illinois. Any law that passes could move those states several ranks higher over 3–5 years.</li>
          <li><strong>Travel-to-staff compression</strong> has closed the gap between a staff RN in a top-5 state and a travel RN in a middle-tier state.</li>
          <li><strong>Sign-on bonus growth</strong> in middle-tier states (Ohio, Indiana, Missouri, Tennessee) continues as those systems compete for coastal talent.</li>
        </ul>

        <p>
          For negotiation help when switching states, see our <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">negotiation scripts</Link>.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> US Bureau of Labor Statistics OEWS, May 2024 (29-1141), state-level; BLS Occupational Outlook Handbook, Registered Nurses; published state-level cost-of-living composite indexes. Internal methodology: BLS state means projected with 3–4% annual wage-growth assumption; COL adjustments are illustrative. Figures are estimates; actual pay varies by employer, experience, metro, specialty, certification, and shift. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
