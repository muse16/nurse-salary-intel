import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Nurse Salary Cost of Living 2026: Where $89K Goes Furthest',
  description:
    'Nurse salary buys different lives in different cities. Real purchasing power for RNs in 15 metros — what stays in your pocket after taxes and housing.',
  alternates: { canonical: 'https://nursesalaryintel.com/nurse-salary-cost-of-living-2026' },
  openGraph: {
    title: 'Nurse Salary Cost of Living 2026: Where $89K Goes Furthest',
    description: 'Real purchasing power of RN salaries across 15 metros — which markets actually pay nurses the most after COL.',
    url: 'https://nursesalaryintel.com/nurse-salary-cost-of-living-2026',
  },
};

const faqs = [
  {
    question: 'Which city has the best purchasing power for nurses in 2026?',
    answer:
      'Houston and Indianapolis consistently rank as the best markets for real nurse purchasing power. Houston RNs earn $83,500/yr with no state income tax and a cost-of-living index around 103 — their effective purchasing power rivals nurses in cities paying $20,000 more nominally. Indianapolis offers similar dynamics with lower housing costs and a solid nursing job market.',
  },
  {
    question: 'Do California nurses actually take home more money than Texas nurses?',
    answer:
      'Not always. A California RN earning $124,000 in Los Angeles faces a COL index of ~175 and an 11%+ effective state income tax rate. A Texas RN earning $83,500 in Houston pays zero state income tax and faces a COL index of ~103. The adjusted purchasing power gap narrows to roughly $15,000–$20,000 — smaller than the $40,000+ nominal salary gap suggests.',
  },
  {
    question: 'What cities offer the best nurse salary after cost of living?',
    answer:
      'Based on 2026 data: Houston TX, Indianapolis IN, and Nashville TN offer the strongest adjusted purchasing power. Seattle WA offers strong nominal pay plus Washington\'s zero state income tax, making it competitive on an adjusted basis. New York City and San Francisco offer the highest nominal salaries but the lowest adjusted purchasing power due to extreme housing costs.',
  },
  {
    question: 'Does state income tax matter for nurses when comparing salaries?',
    answer:
      'Significantly. On an $89,000 salary, California state income tax adds roughly $5,500–$7,000 in taxes vs. $0 in Texas, Washington, or Florida. On a $120,000+ salary in San Francisco, the California tax impact exceeds $12,000/year. Always compare offers on an after-tax, cost-adjusted basis — not nominal salary alone.',
  },
  {
    question: 'How do I calculate my real purchasing power as a nurse?',
    answer:
      'Step 1: Take your gross salary. Step 2: Subtract estimated federal + state income tax (use a tax calculator for accuracy). Step 3: Divide by the local cost-of-living index divided by 100. This gives you a rough "national equivalent" of your take-home purchasing power. For example: $110,000 gross in Seattle → ~$85,000 after federal tax (no state tax) → divided by 1.38 (COL index) = ~$61,600 national equivalent.',
  },
];

const colData = [
  { label: 'Houston, TX', avgSalary: '$83,500', hourlyRate: 'COL 103 | No state tax | Adj. ~$81,100' },
  { label: 'Indianapolis, IN', avgSalary: '$71,500', hourlyRate: 'COL 91 | 3.15% flat tax | Adj. ~$78,600' },
  { label: 'Nashville, TN', avgSalary: '$67,000', hourlyRate: 'COL 107 | No state income tax | Adj. ~$62,600' },
  { label: 'Phoenix, AZ', avgSalary: '$78,500', hourlyRate: 'COL 110 | 2.5% flat tax | Adj. ~$71,400' },
  { label: 'Dallas, TX', avgSalary: '$80,900', hourlyRate: 'COL 107 | No state tax | Adj. ~$75,600' },
  { label: 'Chicago, IL', avgSalary: '$83,580', hourlyRate: 'COL 107 | 4.95% flat tax | Adj. ~$74,200' },
  { label: 'Denver, CO', avgSalary: '$79,000', hourlyRate: 'COL 132 | 4.4% flat tax | Adj. ~$59,800' },
  { label: 'Atlanta, GA', avgSalary: '$71,600', hourlyRate: 'COL 108 | ~5.49% effective | Adj. ~$62,800' },
  { label: 'Seattle, WA', avgSalary: '$110,000', hourlyRate: 'COL 138 | No state tax | Adj. ~$79,700' },
  { label: 'Boston, MA', avgSalary: '$96,000', hourlyRate: 'COL 162 | 5% flat tax | Adj. ~$56,000' },
  { label: 'New York, NY', avgSalary: '$96,000', hourlyRate: 'COL 187 | ~6.85% effective | Adj. ~$47,900' },
  { label: 'San Francisco, CA', avgSalary: '$133,340', hourlyRate: 'COL 180 | ~11% effective | Adj. ~$66,000' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: 'COL 100 baseline' },
];

const taxData = [
  { label: 'Texas (Houston, Dallas)', avgSalary: '$0', hourlyRate: '9 states with no income tax' },
  { label: 'Washington (Seattle)', avgSalary: '$0', hourlyRate: 'No income tax; highest nominal wages' },
  { label: 'Florida (Tampa, Miami)', avgSalary: '$0', hourlyRate: 'No income tax + Sunbelt growth' },
  { label: 'Indiana (Indianapolis)', avgSalary: '3.15% flat', hourlyRate: '~$2,250/yr on $71,500 salary' },
  { label: 'Colorado (Denver)', avgSalary: '4.4% flat', hourlyRate: '~$3,480/yr on $79,000 salary' },
  { label: 'Illinois (Chicago)', avgSalary: '4.95% flat', hourlyRate: '~$4,137/yr on $83,580 salary' },
  { label: 'Massachusetts (Boston)', avgSalary: '5% flat', hourlyRate: '~$4,800/yr on $96,000 salary' },
  { label: 'New York (NYC)', avgSalary: '~6.85% effective', hourlyRate: '~$6,576/yr on $96,000 salary' },
  { label: 'California (SF, LA)', avgSalary: '~11% effective', hourlyRate: '~$14,667/yr on $133,340 salary' },
];

export default function NurseSalaryCostOfLiving2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Career Guides', href: '/blog' },
        { label: 'Nurse Salary Cost of Living 2026' },
      ]}
      h1="Nurse Salary Cost of Living 2026: What Your Pay Actually Buys in 15 Cities"
      lastUpdated="May 2026"
      schemaTitle="Nurse Salary Cost of Living 2026"
      schemaDescription="Real purchasing power of RN salaries across 15 US metros — adjusted for cost of living and state income tax."
      schemaUrl="/nurse-salary-cost-of-living-2026"
      datePublished="2026-05-22"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">The Finding</p>
        <p className="text-on-surface text-base">
          A nurse earning <strong>$83,500 in Houston</strong> has more real purchasing power than a nurse
          earning <strong>$96,000 in Boston or New York</strong> — once cost of living and state income taxes are
          factored in. The gap between nominal salary and actual purchasing power is the most underused tool in nurse
          job comparisons.
        </p>
      </div>

      <Image
        src="/images/nurse-salary-cost-of-living-2026-hero.webp"
        alt="Registered nurse in navy scrubs reviewing a salary offer letter at a desk with a city skyline visible through the window behind her"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Every nurse salary comparison you read online uses nominal pay — the number on the job posting before
        taxes, before housing, before the reality of what $89,000 actually buys in San Francisco versus
        Indianapolis. The honest comparison requires two adjustments: state income tax and cost of living. When
        you apply both, the salary rankings look dramatically different from what most nurses expect.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Metro: Nominal vs. Adjusted Purchasing Power (2026)</h2>
      <p>
        The table below shows nominal BLS OEWS salary data for each metro alongside the estimated cost-of-living
        index and a rough adjusted purchasing power figure. Adjusted values use composite COL indices from C2ER
        2024 data and are intended for directional comparison — not exact financial planning. Tax impact shown
        is estimated effective state income tax on the median salary for that market.
      </p>

      <SalaryTable
        title="RN Salary vs. Adjusted Purchasing Power by Metro (2026)"
        headers={['Metro', 'Nominal Annual Salary', 'COL Index | Tax | Adjusted']}
        rows={colData}
        source="BLS OEWS May 2024; C2ER cost-of-living indices 2024; NurseSalaryIntel 2026 analysis"
      />

      <Image
        src="/images/nurse-salary-cost-of-living-2026-comparison.png"
        alt="Bar chart comparing adjusted purchasing power of RN salaries across 10 US metros in 2026 after cost-of-living and state income tax adjustment"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Tax Advantage You're Not Counting</h2>
      <p>
        Nine US states have no state income tax, and three of the top nursing markets are among them: Texas,
        Washington, and Florida. For nurses comparing offers across state lines, this is a significant real-dollar
        difference that rarely appears in job posting comparisons.
      </p>

      <SalaryTable
        title="State Income Tax Impact on Nurse Take-Home Pay"
        headers={['State / Market', 'State Income Tax Rate', 'Annual Tax Impact']}
        rows={taxData}
        source="IRS + state revenue department rates 2026; NurseSalaryIntel estimates"
      />

      <p>
        The starkest example: a nurse moving from Houston (no state tax, COL 103) to Boston (5% flat tax, COL 162)
        for a $96,000 offer is taking a real-dollar cut despite the $12,500 nominal raise. After Massachusetts
        income tax and a 57% higher cost of living, the purchasing power equivalent is roughly $56,000 — well
        below Houston's adjusted value.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Where Nurses Get the Most for Their Money</h2>

      <Image
        src="/images/nurse-salary-cost-of-living-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing financial documents together at a nursing station in a bright modern hospital"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        <strong>Houston, TX</strong> consistently wins the adjusted purchasing power comparison. No state income
        tax, a COL index of roughly 103, and access to the Texas Medical Center — the world's largest medical
        complex — combine to make it one of the best real-value nursing markets in the country. A Houston nurse
        earning $83,500 keeps more of that pay than most nurses in higher-nominal cities.
      </p>
      <p>
        <strong>Indianapolis, IN</strong> is an underrated market. The COL index sits around 91 — meaningfully
        below the national average — and the Indiana flat income tax rate of 3.15% is among the lowest in the
        country. Major health systems including IU Health and Ascension St. Vincent compete for nurses in a
        relatively affordable metro. Adjusted purchasing power rivals markets that appear much more attractive
        on paper.
      </p>
      <p>
        <strong>Seattle, WA</strong> threads the needle. Nominal salary averages $110,000, Washington has no
        state income tax, but COL runs roughly 38% above the national average — primarily housing. The adjusted
        value lands around $79,700, which is genuinely strong. For nurses relocating from California, Seattle
        often represents a real improvement in both nominal pay and after-tax take-home.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Where the Math Works Against You</h2>
      <p>
        <strong>New York City</strong> sits at the bottom of the adjusted rankings. A $96,000 nominal salary
        faces a COL index of roughly 187 and a combined New York State + City effective tax rate that can reach
        10–11%. The adjusted purchasing power drops to approximately $47,900 — less than a new grad RN earns
        in Houston. The city is not a financial winner for most nurses despite appearing competitive on paper.
      </p>
      <p>
        <strong>San Francisco</strong> nominally leads all markets at $133,340, but California's 11%+ effective
        state income tax rate and a COL index near 180 drag the adjusted figure to approximately $66,000. For
        experienced specialty nurses — ICU, OR, CRNA — the gap may narrow considerably, and the career
        development opportunities at UCSF and Sutter are real. But for mid-career nurses comparing offers,
        the numbers support moving to no-tax, lower-COL markets unless career or personal factors favor the Bay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Run This Comparison for Your Offer</h2>
      <p>
        When you receive an offer in a new market, run this four-step comparison before deciding:
      </p>
      <p>
        <strong>Step 1: Get the after-tax number.</strong> Use your state's income tax estimator (most state
        revenue websites have one). Subtract estimated state + federal income tax from gross salary to get
        your approximate annual net income.
      </p>
      <p>
        <strong>Step 2: Apply the COL index.</strong> Divide your net income by the destination city's COL
        index divided by 100. This normalizes your purchasing power to a national baseline. C2ER publishes
        quarterly COL indices — use their data or NerdWallet's city comparison tool.
      </p>
      <p>
        <strong>Step 3: Compare housing specifically.</strong> COL indices blend many categories. If you're
        renting, housing matters most — check Zillow or Apartments.com for current 1BR/2BR market rates in
        both locations. A $500/month housing cost difference is $6,000/year that no salary negotiation can
        easily offset.
      </p>
      <p>
        <strong>Step 4: Factor shift differential and benefits.</strong> Two identical base salaries can
        differ by $12,000–$20,000/year in total compensation once night differential, overtime structure,
        retirement match, and health insurance cost are included. The offer that looks lower may win on
        total value.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide 2026', desc: 'Scripts and framework for any offer' },
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Pay 2026', desc: 'How night/weekend pay adds $8K–$25K/yr' },
          { href: '/houston-rn-salary-2026', label: 'Houston RN Salary 2026', desc: 'The strongest adjusted-value market' },
          { href: '/seattle-rn-salary-2026', label: 'Seattle RN Salary 2026', desc: 'High nominal + no state income tax' },
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sources</h2>
      <ul>
        <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, by Metropolitan Area (May 2024)</a></li>
        <li><a href="https://www.coli.org/" target="_blank" rel="noopener noreferrer">C2ER — Council for Community and Economic Research, ACCRA Cost of Living Index 2024</a></li>
        <li><a href="https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/" target="_blank" rel="noopener noreferrer">Tax Foundation — State Income Tax Rates 2026</a></li>
      </ul>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
