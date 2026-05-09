import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'NYC RN Salary 2026: $109,860/yr Avg + NYSNA Union Pay Breakdown',
  description: 'New York City RN salary 2026: $109,860/yr avg ($52.82/hr). See pay at NYU Langone, NY-Presbyterian, Mount Sinai, MSK — plus union step scales and real take-home after NYC taxes.',
  alternates: { canonical: 'https://nursesalaryintel.com/new-york-city-rn-salary-2026' },
  openGraph: {
    title: 'NYC RN Salary 2026: $109,860/yr Avg',
    description: 'New York City nurse salary by hospital, union step, specialty, and real take-home after state + city taxes.',
    url: 'https://nursesalaryintel.com/new-york-city-rn-salary-2026',
  },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$78,000 – $92,000', hourlyRate: '$37.50 – $44.23/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$98,000 – $118,000', hourlyRate: '$47.12 – $56.73/hr' },
  { label: 'Senior (8–15 yrs)', avgSalary: '$118,000 – $148,000', hourlyRate: '$56.73 – $71.15/hr' },
  { label: 'Top 10% / Specialty Lead', avgSalary: '$155,000 – $175,000+', hourlyRate: '$74.52+/hr' },
];

const hospitalData = [
  { label: 'NYU Langone Health', avgSalary: '$105,000 – $148,000', hourlyRate: 'NYSNA union; strong step scale' },
  { label: 'NY-Presbyterian / Columbia', avgSalary: '$102,000 – $145,000', hourlyRate: 'NYSNA; academic premium' },
  { label: 'NY-Presbyterian / Weill Cornell', avgSalary: '$104,000 – $146,000', hourlyRate: 'NYSNA; cross-campus float pay' },
  { label: 'Mount Sinai Health System', avgSalary: '$100,000 – $142,000', hourlyRate: 'NYSNA; 8 campus network' },
  { label: 'Memorial Sloan Kettering', avgSalary: '$108,000 – $155,000', hourlyRate: 'Oncology premium; NYSNA' },
  { label: 'Montefiore Medical Center', avgSalary: '$96,000 – $132,000', hourlyRate: 'NYSNA; Bronx market' },
  { label: 'NYC Health + Hospitals (H+H)', avgSalary: '$92,000 – $128,000', hourlyRate: 'City government; PSLF eligible' },
  { label: 'Northwell Health', avgSalary: '$94,000 – $130,000', hourlyRate: 'Non-union; largest private employer' },
];

const specialtyData = [
  { label: 'Med-Surg / Telemetry', avgSalary: '$96,500', hourlyRate: 'Base' },
  { label: 'ER / Emergency', avgSalary: '$108,200', hourlyRate: '+$11,700' },
  { label: 'ICU / Critical Care', avgSalary: '$116,400', hourlyRate: '+$19,900' },
  { label: 'OR / Perioperative', avgSalary: '$112,800', hourlyRate: '+$16,300' },
  { label: 'L&D / OB', avgSalary: '$108,600', hourlyRate: '+$12,100' },
  { label: 'NICU', avgSalary: '$114,200', hourlyRate: '+$17,700' },
  { label: 'Oncology (MSK, Sloan)', avgSalary: '$118,500', hourlyRate: '+$22,000' },
  { label: 'Psych / Behavioral Health', avgSalary: '$101,400', hourlyRate: '+$4,900' },
];

const taxData = [
  { label: 'Gross annual salary', avgSalary: '$109,860', hourlyRate: 'BLS NYC metro avg' },
  { label: 'Federal income tax (est.)', avgSalary: '−$18,200', hourlyRate: '22% bracket, standard deduction' },
  { label: 'NY state income tax', avgSalary: '−$7,900', hourlyRate: '~7.2% effective rate' },
  { label: 'NYC city income tax', avgSalary: '−$4,000', hourlyRate: '3.876% residents' },
  { label: 'FICA (SS + Medicare)', avgSalary: '−$8,400', hourlyRate: '7.65%' },
  { label: 'Estimated net take-home', avgSalary: '~$71,360/yr', hourlyRate: '~$5,947/mo' },
];

const cityComparison = [
  { label: 'New York City', avgSalary: '$109,860', hourlyRate: 'COL 187 / Effective $58,700' },
  { label: 'San Francisco', avgSalary: '$137,000', hourlyRate: 'COL 234 / Effective $58,500' },
  { label: 'Los Angeles', avgSalary: '$126,800', hourlyRate: 'COL 170 / Effective $74,600' },
  { label: 'Boston', avgSalary: '$98,600', hourlyRate: 'COL 162 / Effective $60,900' },
  { label: 'Chicago', avgSalary: '$83,600', hourlyRate: 'COL 107 / Effective $78,100' },
  { label: 'Philadelphia', avgSalary: '$83,800', hourlyRate: 'COL 101 / Effective $83,000' },
];

const faqs = [
  {
    question: 'What is the average RN salary in New York City in 2026?',
    answer: 'NYC RNs earn an average of $109,860/year ($52.82/hr) in 2026, making it one of the highest nominal salaries in the US. However, after New York State income tax (up to 8.82%), NYC city income tax (3.876%), and a cost-of-living index of 187, the real purchasing power is closer to $58,700 on a national baseline.',
  },
  {
    question: 'Do NYC nurses get union pay scales?',
    answer: 'Most large NYC hospital systems — NYU Langone, NY-Presbyterian, Mount Sinai, Montefiore, and H+H — are unionized under NYSNA (New York State Nurses Association). NYSNA contracts include annual step increases (typically 3–5%/year), guaranteed differentials, and staffing ratio protections. Non-union systems like Northwell Health typically pay 8–12% less in base salary but offer more scheduling flexibility.',
  },
  {
    question: 'How much do NYC nurses take home after taxes?',
    answer: 'On a $109,860 gross salary, a NYC resident nurse takes home approximately $71,360/year (~$5,947/month) after federal, state, and city taxes plus FICA. New York City residents pay both NY state income tax and NYC city income tax on top of federal — the combined effective rate is roughly 35% at this salary level.',
  },
  {
    question: 'Which NYC hospital pays nurses the most?',
    answer: 'Memorial Sloan Kettering Cancer Center pays the highest salaries ($108K–$155K) due to oncology specialty premiums and strong NYSNA contract terms. NYU Langone and NY-Presbyterian Weill Cornell follow closely. NYC Health + Hospitals (H+H) pays slightly less in base but offers Public Service Loan Forgiveness (PSLF) eligibility as a government employer.',
  },
  {
    question: 'Is nursing worth it financially in NYC?',
    answer: 'On a cost-adjusted basis, NYC nursing salaries are less competitive than they appear. The $109,860 average translates to about $58,700 in national purchasing power — below Chicago ($78,100 adjusted) or Philadelphia ($83,000 adjusted). However, NYSNA union protections, step increases, and career advancement opportunities are among the strongest in the country. Nurses who stay in NYC for 10+ years on union step scales can reach $145,000–$175,000.',
  },
];

export default function NYCRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'New York RN Salary', href: '/rn-salary-by-state/new-york' },
        { label: 'NYC RN Salary 2026' },
      ]}
      h1="NYC RN Salary 2026: How Much Do Nurses Make in New York City?"
      lastUpdated="May 2026"
      schemaTitle="NYC RN Salary 2026"
      schemaDescription="Average RN salary in New York City in 2026 by hospital, union scale, specialty, and take-home after taxes."
      schemaUrl="/new-york-city-rn-salary-2026"
      faqs={faqs}
    >
      {/* Quick answer */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>NYC RNs earn $109,860/year ($52.82/hr)</strong> on average in 2026 — one of the highest nominal
          salaries in the US. But after New York State tax, NYC city tax, and a cost-of-living index of 187,
          the real take-home is about <strong>$71,360/year</strong>. Most major hospital systems are
          <strong> NYSNA union</strong> with step scales that push senior nurses to <strong>$145,000–$175,000</strong>.
        </p>
      </div>

      {/* Hero image — owner generates */}
      <Image
        src="/images/new-york-city-rn-salary-2026-hero.png"
        alt="Registered nurse in scrubs standing outside a major New York City hospital at dusk, city skyline in background, editorial healthcare photography style"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        New York City&apos;s nursing market is defined by two forces pulling in opposite directions: among the
        highest nominal salaries in the country, and among the highest costs of living anywhere. Understanding
        NYC nurse pay means going beyond the headline number — NYSNA union contracts, city income tax, and
        cost-adjusted purchasing power all change the picture dramatically.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="NYC RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="BLS OEWS 2025, NYSNA contract data 2026"
      />
      <p>
        Entry-level NYC nurses ($78K–$92K) start significantly higher than the national new-grad average of
        $62K–$88K, largely because NYSNA contracts set binding wage floors. Step increases of 3–5%/year mean
        a nurse hired at $80,000 reaches $95,000–$100,000 by year five without any promotion.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/new-york-city-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at top New York City hospitals including NYU Langone, NY-Presbyterian, Mount Sinai, and Memorial Sloan Kettering"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        The majority of NYC&apos;s major hospital systems are covered by NYSNA (New York State Nurses Association)
        contracts, which standardize pay scales, mandate staffing ratios in many units, and guarantee annual
        step increases. Memorial Sloan Kettering leads the market on base salary due to oncology specialty
        premiums. Northwell Health, the largest private employer in New York State, is non-union and pays
        8–12% less in base but has expanded aggressively with sign-on bonuses.
      </p>
      <SalaryTable
        title="RN Salary by Hospital in New York City"
        headers={['Hospital / System', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data, NYSNA contracts"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/new-york-city-rn-salary-2026-hospital.png"
        alt="Two nurses in scrubs reviewing a patient monitor in a softly lit NYC hospital ICU room, professional and focused, clinical setting"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Oncology nurses at Memorial Sloan Kettering earn the highest specialty premium in New York City — a
        reflection of both MSK&apos;s strong union contract and the institution&apos;s position as the world&apos;s
        premier cancer center. ICU and NICU nurses follow closely, with critical care differentials baked
        into NYSNA contracts across all major systems.
      </p>
      <SalaryTable
        title="NYC RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC Nurse Take-Home Pay After Taxes (2026)</h2>
      <p>
        NYC nurses face a three-layer tax burden that significantly reduces take-home pay: federal income tax,
        New York State income tax (up to 10.9% at the highest bracket), and New York City income tax (3.876%
        for residents). On a $109,860 gross salary:
      </p>
      <SalaryTable
        title="NYC RN Take-Home Pay Breakdown (Single Filer, Standard Deduction)"
        headers={['Item', 'Amount', 'Notes']}
        rows={taxData}
        source="IRS 2026 tax brackets, NY state tax rates"
      />
      <p>
        Nurses who live in New Jersey or Connecticut and commute into NYC avoid the NYC city income tax
        (saving ~$4,000/year) while often paying lower state rates. However, NY imposes a convenience-of-employer
        rule that taxes non-resident income earned in NY at NY rates regardless of where you live — so the
        state tax is unavoidable for NYC hospital employees.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC vs. Other Major Cities: Real Purchasing Power</h2>
      <p>
        On a cost-adjusted basis, NYC&apos;s $109,860 average translates to roughly $58,700 in national purchasing
        power — the same as San Francisco despite a $27,000 lower nominal salary. Chicago and Philadelphia
        nurses take home considerably more in real terms.
      </p>
      <SalaryTable
        title="Nurse Salary Comparison — NYC vs Major US Cities (Cost-Adjusted)"
        headers={['City', 'Avg Annual Salary', 'COL Index / Real Value']}
        rows={cityComparison}
        source="BLS OEWS 2025, Cost of Living Index 2026"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYSNA Union: What It Means for NYC Nurse Pay</h2>
      <p>
        The New York State Nurses Association covers nurses at NYU Langone, all NY-Presbyterian campuses,
        Mount Sinai, Montefiore, NYC Health + Hospitals, and dozens of other facilities. Key contract provisions
        that directly affect pay:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Annual step increases</strong> of 3–5% guaranteed regardless of hospital financial performance</li>
        <li><strong>Shift differentials</strong>: evening (3–11pm) adds 15–18%, nights (11pm–7am) add 22–28%, weekends add 10–15%</li>
        <li><strong>Charge nurse differential</strong>: $4–$8/hour above base when serving as charge</li>
        <li><strong>Float pool premium</strong>: additional 10–15% for floating to units outside home department</li>
        <li><strong>Per-diem rates</strong>: union per-diem nurses earn $68–$85/hr with no benefits</li>
      </ul>
      <p className="mt-3">
        Non-union systems (primarily Northwell) offer more flexible scheduling and sometimes higher starting
        bonuses, but lack the guaranteed step increases that compound significantly over a career.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NYC Travel Nurse Pay (2026)</h2>
      <p>
        Travel nurses working 13-week contracts in NYC earn <strong>$3,200–$4,800/week</strong> all-in
        (taxable base + housing stipend + M&IE). ICU and OR travelers are at the top of the range.
        NYC&apos;s high cost of living means housing stipends are among the highest in the country — expect
        $1,800–$2,500/week in housing allowance alone. Most major NYC systems use AMN Healthcare, Cross
        Country, and Aya Healthcare as staffing partners.
      </p>
      <p>
        <Link href="/travel-nurse-agency-comparison-2026" className="text-primary font-semibold hover:underline text-sm">
          Best travel nurse agencies for NYC contracts 2026 →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state/new-york', label: 'New York State RN Salary 2026', desc: 'Statewide averages + upstate vs NYC' },
          { href: '/philadelphia-rn-salary-2026', label: 'Philadelphia RN Salary 2026', desc: 'Best cost-adjusted metro on the East Coast' },
          { href: '/boston-rn-salary-2026', label: 'Boston RN Salary 2026', desc: 'Academic medical center premium' },
          { href: '/critical-care-nurse-salary-2026', label: 'Critical Care Nurse Salary 2026', desc: 'ICU, MICU, CVICU specialty pay' },
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

      <p className="text-sm text-on-surface-variant mt-6">
        <strong>Sources:</strong> U.S. Bureau of Labor Statistics Occupational Employment and Wage Statistics (OEWS) 2025;
        NYSNA collective bargaining agreements 2024–2026; NurseSalaryIntel hospital survey data 2026.
        Cost-of-living index based on C2ER 2026 data. Tax estimates use 2026 IRS brackets and NY DTF rates.
        <em> Last updated May 2026.</em>
      </p>
        <MethodologyBox />
</SEOPageLayout>
  );
}
