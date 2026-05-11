import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'San Diego RN Salary 2026: $104,800/yr Avg + UC San Diego vs. Scripps Pay',
  description: 'San Diego RN salary 2026: $104,800/yr avg ($50.38/hr). Pay at UCSD Health, Scripps, Sharp, and Kaiser — plus California state license premium and travel nurse rates.',
};

const faqs = [
  {
    question: 'What is the average RN salary in San Diego in 2026?',
    answer: 'Registered nurses in San Diego earn an average of $104,800/year ($50.38/hour) in 2026, based on BLS OEWS data for the San Diego-Chula Vista-Carlsbad MSA. That puts San Diego above the national average of $89,010 but about $40,000–$50,000 below Kaiser Permanente nurses in the Bay Area. UC San Diego Health and Scripps Health lead the local market, with experienced nurses earning $110,000–$138,000.',
  },
  {
    question: 'Does California CNA union coverage apply in San Diego?',
    answer: 'Yes — UC San Diego Health nurses are covered by the California Nurses Association (CNA), which negotiates one of the most favorable step-increase contracts in the country. UCSD RNs start around $89,000 and can reach $138,000+ at the top union step. Scripps and Sharp Health are non-union but pay competitively to retain staff in a tight labor market. Kaiser San Diego nurses are also CNA-represented and fall under the same statewide contract that drives Bay Area wages.',
  },
  {
    question: 'How does San Diego RN pay compare to Los Angeles?',
    answer: 'San Diego ($104,800 avg) runs about $8,000–$12,000 below the Los Angeles metro average ($113,000–$116,000) for staff nurses. The gap is larger at the top: Kaiser LA nurses can exceed $165,000 while Kaiser San Diego nurses typically top out around $140,000–$148,000 under the same CNA contract. Cost of living in San Diego is slightly lower than LA, which partially offsets the wage difference. See our Los Angeles RN salary guide for a full comparison.',
  },
  {
    question: 'What do travel nurses earn in San Diego?',
    answer: 'Travel nurses in San Diego typically earn $3,000–$4,800/week all-in (taxable base + tax-free housing + meal stipends). California travel rates are among the highest in the country due to strict nurse-to-patient ratios that limit overtime and force hospitals to rely heavily on agency staff. ICU and OR travelers command $3,800–$4,800/week. The San Diego market is competitive — agencies fill slots quickly, so applying early matters.',
  },
];

const experienceRows = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$76,400/yr', note: '$36.73/hr — California new grad premium' },
  { label: '2–3 Years', avgSalary: '$88,600/yr', note: '$42.60/hr' },
  { label: '5 Years', avgSalary: '$104,800/yr', note: '$50.38/hr (market avg)' },
  { label: '10 Years', avgSalary: '$121,400/yr', note: '$58.37/hr' },
  { label: '15+ Years (CNA top step)', avgSalary: '$138,000/yr', note: '$66.35/hr at UCSD Health' },
];

const hospitalRows = [
  { label: 'UC San Diego Health', avgSalary: '$89,000–$138,000', note: 'CNA union, Magnet, top step at 15+ yrs' },
  { label: 'Kaiser San Diego', avgSalary: '$87,000–$148,000', note: 'CNA union, statewide contract — highest ceiling' },
  { label: 'Scripps Health', avgSalary: '$88,000–$118,000', note: 'Non-union, 5-hospital system, Magnet x2' },
  { label: 'Sharp HealthCare', avgSalary: '$86,000–$114,000', note: 'Non-union, largest San Diego-based system' },
  { label: 'Rady Children\'s Hospital', avgSalary: '$84,000–$110,000', note: 'Peds specialty premium, Level II pediatric trauma' },
  { label: 'Palomar Health', avgSalary: '$80,000–$100,000', note: 'North County, competitive for area' },
  { label: 'Naval Medical Center San Diego', avgSalary: '$78,000–$96,000', note: 'Federal GS scale, military hospital' },
  { label: 'Tri-City Medical Center', avgSalary: '$78,000–$96,000', note: 'Oceanside, community hospital' },
];

const specialtyRows = [
  { label: 'CRNA', avgSalary: '$215,000–$250,000', note: 'CA premium — among highest nationally' },
  { label: 'ICU / Critical Care', avgSalary: '$105,000–$132,000', note: 'UCSD and Kaiser top payers' },
  { label: 'OR / Surgical', avgSalary: '$102,000–$128,000', note: 'Robotic surgery demand at Scripps, UCSD' },
  { label: 'NICU', avgSalary: '$100,000–$128,000', note: 'Rady Children\'s level IV NICU premium' },
  { label: 'Labor & Delivery', avgSalary: '$98,000–$122,000', note: 'High volume — Sharp Mary Birch is #1 CA birth center' },
  { label: 'Emergency / ED', avgSalary: '$96,000–$118,000', note: 'Level I trauma (UCSD) adds premium' },
  { label: 'Oncology', avgSalary: '$98,000–$120,000', note: 'UC San Diego Moores Cancer Center' },
  { label: 'Med-Surg', avgSalary: '$84,000–$102,000', note: 'California ratio law ensures strong floor wages' },
];

const taxRows = [
  { label: 'Gross Salary', avgSalary: '$104,800', note: 'San Diego MSA avg' },
  { label: 'Federal Income Tax (22% bracket)', avgSalary: '−$16,940', note: 'Estimated after standard deduction' },
  { label: 'FICA (Social Security + Medicare)', avgSalary: '−$8,017', note: '7.65% of gross' },
  { label: 'California State Tax (~8.5% effective)', avgSalary: '−$8,908', note: 'Progressive rate — highest bracket 12.3%' },
  { label: 'SDI (State Disability Insurance)', avgSalary: '−$1,048', note: 'CA deducts ~1%' },
  { label: 'Estimated Net Take-Home', avgSalary: '~$69,887/yr', note: '~$5,824/month' },
];

const cityRows = [
  { label: 'San Diego', avgSalary: '$104,800/yr', note: 'Est. net ~$69,887/yr after CA taxes' },
  { label: 'Los Angeles', avgSalary: '$113,600/yr', note: 'Higher pay, higher COL' },
  { label: 'San Francisco / Bay Area', avgSalary: '$138,000/yr', note: 'Kaiser top-step benchmark' },
  { label: 'Sacramento', avgSalary: '$97,400/yr', note: 'Lower COL than coastal CA' },
  { label: 'Phoenix, AZ', avgSalary: '$83,600/yr', note: 'No state income tax — net closer than gross suggests' },
  { label: 'Las Vegas, NV', avgSalary: '$84,200/yr', note: 'No state income tax, no union premiums' },
  { label: 'National Average (BLS)', avgSalary: '$89,010/yr', note: 'San Diego is 17.7% above national avg' },
];

export default function SanDiegoRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'San Diego RN Salary 2026' },
      ]}
      h1="San Diego RN Salary 2026: What Nurses Earn in America's Finest City"
      lastUpdated="May 2026"
      schemaTitle="San Diego RN Salary 2026"
      schemaDescription="Average RN salary in San Diego 2026: $104,800/year. Pay by hospital, specialty, and experience level with California tax take-home analysis."
      schemaUrl="/san-diego-rn-salary-2026"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-6 border border-outline-variant">
        <p className="text-on-surface font-medium">
          <strong>Quick Answer:</strong> San Diego RNs earn an average of <strong>$104,800/year ($50.38/hr)</strong> in 2026 — 17.7% above the national average. Kaiser San Diego tops the local market with CNA union nurses reaching <strong>$148,000+</strong> at senior step levels. California's mandatory nurse-to-patient ratio law provides a wage floor that keeps even new grad San Diego nurses earning <strong>$76,400/year</strong> — well above the national new grad average.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/san-diego-rn-salary-2026-hero.png"
        alt="Registered nurse in navy scrubs standing outside a modern San Diego hospital entrance with palm trees and clear blue sky in the background"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        San Diego's nursing market is shaped by three forces that most other cities lack working in combination: California's legally mandated nurse-to-patient staffing ratios (which compress supply and drive up wages), a robust CNA union presence at UC San Diego Health and Kaiser, and a cost-of-living premium that forces every employer — union or not — to keep base pay competitive enough to retain staff. The result is a market where <strong>$104,800/year</strong> is the average and six-figure salaries are within reach for nearly every nurse with five or more years of experience.
      </p>
      <p>
        The tradeoff is California's state income tax — at an effective rate of roughly 8.5% on nursing salaries, it takes a meaningful bite out of gross pay. A San Diego nurse clearing $104,800 takes home approximately <strong>$69,900/year net</strong>, roughly comparable to a Phoenix or Las Vegas nurse earning $84,000 who pays no state income tax. That math matters when evaluating cross-border travel contracts or relocation offers.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Diego RN Salary by Experience (2026)</h2>
      <p>
        California's staffing ratio law means new grad nurses in San Diego start materially above what their peers earn in non-ratio states — hospitals can't run short-staffed, so they pay up for every level of experience. CNA step increases at UC San Diego Health and Kaiser compound these gains over a career.
      </p>
      <SalaryTable
        headers={['Experience Level', 'Annual Salary', 'Hourly Rate']}
        rows={experienceRows}
        title="San Diego RN salary by years of experience, 2026. BLS OEWS San Diego-Chula Vista-Carlsbad MSA data."
      />

      {/* Data chart */}
      <Image
        src="/images/san-diego-rn-salary-2026-comparison.png"
        alt="Bar chart comparing RN salaries at San Diego hospitals including UCSD Health, Kaiser, Scripps, Sharp, and Rady Children's in 2026"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Hospital in San Diego (2026)</h2>
      <p>
        San Diego's hospital market splits cleanly between CNA-unionized academic systems (UCSD, Kaiser) with the highest ceilings and non-union community systems (Scripps, Sharp) that compete on competitive base pay and benefits. The spread between top and bottom of the market is roughly <strong>$40,000–$50,000/year</strong> for an experienced nurse.
      </p>
      <SalaryTable
        headers={['Hospital / System', 'RN Salary Range', 'Notes']}
        rows={hospitalRows}
        title="San Diego-area hospital RN salary ranges, 2026."
      />
      <p>
        <strong>CNA contract note:</strong> The California Nurses Association negotiates a single statewide contract that covers both UCSD Health and Kaiser facilities. Step increases are guaranteed annually for the first 12–15 years, creating predictable career earnings growth. Nurses who join Kaiser San Diego early and stay can realistically reach <strong>$140,000–$148,000</strong> through the step scale — without seeking management or travel positions.
      </p>

      {/* Photorealistic inline image */}
      <Image
        src="/images/san-diego-rn-salary-2026-hospital.png"
        alt="Nurse and physician collaborating over a patient chart in a bright, modern San Diego hospital room with large windows overlooking the city"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Diego RN Salary by Specialty (2026)</h2>
      <p>
        California's nurse-to-patient ratios apply across specialties — but the ratio itself varies by unit, creating different demand dynamics. ICU ratios (1:2) and OR requirements keep those specialties at premium pay levels. Sharp Mary Birch's status as the highest-volume birth center in California drives strong L&D compensation citywide.
      </p>
      <SalaryTable
        headers={['Specialty', 'Salary Range', 'Notes']}
        rows={specialtyRows}
        title="San Diego RN specialty salary ranges, 2026."
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">California State Tax: What San Diego Nurses Actually Take Home</h2>
      <p>
        California has the highest marginal income tax rate in the country (13.3% at the top bracket), and nursing salaries in San Diego fall squarely in the range where the effective rate climbs steeply. On a $104,800 salary, the effective California state tax rate is approximately 8.5% — that's roughly $8,900/year just in state taxes, before federal or FICA.
      </p>
      <SalaryTable
        headers={['Deduction', 'Amount', 'Notes']}
        rows={taxRows}
        title="Estimated take-home for a San Diego RN earning $104,800/year, 2026. Individual circumstances vary."
      />
      <p>
        Pre-tax deductions are especially valuable in California. Every dollar contributed to a 403(b) or 457(b) retirement plan reduces both federal and state taxable income — at a combined marginal rate of 30–35% for many San Diego nurses, that's a significant effective match on top of any employer contribution. If your hospital offers a 457(b) in addition to a 403(b), maxing both can shelter <strong>$46,000–$69,000/year</strong> from income taxes.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Diego vs. Other California and Southwest Markets</h2>
      <SalaryTable
        headers={['Market', 'Avg RN Salary', 'Context']}
        rows={cityRows}
        title="San Diego RN salary vs. comparable markets, 2026. BLS OEWS data."
      />
      <p>
        San Diego's location near the Arizona and Nevada borders creates a genuine cross-border comparison for nurses. A Las Vegas or Phoenix nurse earning $84,000 with zero state income tax takes home approximately <strong>$67,000–$69,000/year</strong> — close to San Diego's $69,900 net — while working in a significantly lower cost-of-living environment. For nurses considering relocation, the net-pay-adjusted comparison often favors San Diego only when the CNA step-increase ceiling ($138,000–$148,000) is factored in. Over a 15-year career, the compounding step increases at a San Diego CNA hospital outperform the lower-tax advantage of Arizona or Nevada by a wide margin.
      </p>
      <p>
        Compare: <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary</Link> · <Link href="/las-vegas-rn-salary-2026" className="text-primary hover:underline">Las Vegas RN salary</Link> · <Link href="/rn-salary-by-state/arizona" className="text-primary hover:underline">Arizona RN salary</Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse Pay in San Diego (2026)</h2>
      <p>
        California's staffing ratio laws create structural agency demand — hospitals that fall below ratio must bring in travelers to stay legally compliant. San Diego is one of the most active travel markets in the West Coast, with strong demand at Scripps and Sharp (which rely on travelers more heavily than the union hospitals).
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>ICU / Critical Care travel:</strong> $3,800–$4,800/week all-in</li>
        <li><strong>OR travel:</strong> $3,600–$4,400/week</li>
        <li><strong>NICU travel (Rady adjacent):</strong> $3,600–$4,600/week</li>
        <li><strong>L&D travel:</strong> $3,200–$4,200/week</li>
        <li><strong>Med-Surg travel:</strong> $2,800–$3,400/week</li>
      </ul>
      <p className="mt-3">
        Important: California charges state income tax on wages earned in California regardless of where the nurse lives. Travel nurses working San Diego contracts owe California state tax on those earnings — which reduces the net advantage of the higher bill rates. Plan accordingly, especially if your tax home is in a zero-income-tax state like Nevada or Texas.
      </p>
      <p>
        See our <Link href="/travel-nurse-agency-comparison-2026" className="text-primary hover:underline">travel nurse agency comparison</Link> for the top agencies placing nurses in California markets.
      </p>

      {/* Sources */}
      <p className="mt-8 text-sm text-on-surface-variant">
        <strong>Sources & Methodology:</strong> Salary ranges based on BLS Occupational Employment and Wage Statistics (OEWS) for the San Diego-Chula Vista-Carlsbad, CA Metropolitan Statistical Area, 2024 data (published 2025). Hospital-level ranges sourced from Glassdoor, Indeed, and CNA public contract schedules. California tax estimates use 2026 state tax brackets with standard deduction, 2026 federal brackets, and California SDI at 1.0%. Individual results vary. Consult a tax professional for personalized guidance.
      </p>

      {/* Related guides */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">California RN Salary</div>
          <div className="text-sm text-on-surface-variant mt-1">Statewide data: Bay Area vs. LA vs. San Diego</div>
        </Link>
        <Link href="/travel-nurse-agency-comparison-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Best Travel Nurse Agencies 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Which agencies pay most for CA contracts</div>
        </Link>
        <Link href="/critical-care-nurse-salary-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Critical Care Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">ICU pay by state, system, and certification</div>
        </Link>
        <Link href="/nursing-salary/nicu-nurse-salary" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">NICU Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Rady Children's and top NICU pay nationally</div>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
