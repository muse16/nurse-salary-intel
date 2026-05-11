import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Philadelphia RN Salary 2026: $84,200/yr Avg + Penn Medicine vs CHOP Pay',
  description: 'Philadelphia RN salary 2026: $84,200/yr avg ($40.48/hr). See pay at Penn Medicine, CHOP, Jefferson, and Temple — plus city wage tax take-home math and travel nurse rates.',
};

const faqs = [
  {
    question: 'What is the average RN salary in Philadelphia in 2026?',
    answer: 'Registered nurses in Philadelphia earn an average of $84,200/year ($40.48/hour) in 2026, according to BLS OEWS data for the Philadelphia-Camden-Wilmington MSA. That is roughly $5,200 above the Pennsylvania state average of $79,000 but about $25,600 below the NYC metro average. Penn Medicine and CHOP are the highest-paying systems in the market, with experienced nurses reaching $108,000–$118,000.',
  },
  {
    question: 'Which Philadelphia hospital pays nurses the most?',
    answer: 'Penn Medicine (Hospital of the University of Pennsylvania and Pennsylvania Hospital) leads the Philadelphia market, with experienced RNs earning $90,000–$118,000. Children\'s Hospital of Philadelphia (CHOP) is a close second at $85,000–$112,000. Both are Magnet-designated academic medical centers with strong union representation through PASNAP (Pennsylvania Association of Staff Nurses and Allied Professionals). Jefferson Health and Main Line Health are solid mid-market options at $78,000–$96,000.',
  },
  {
    question: 'How does Philadelphia\'s city wage tax affect nurse take-home pay?',
    answer: 'Philadelphia residents pay a 3.79% city wage tax on top of Pennsylvania\'s flat 3.07% state income tax and federal taxes. On an $84,200 salary, a Philadelphia-resident nurse takes home approximately $57,800/year (~$4,817/month) after all deductions — about $3,200 less per year than a comparable nurse living in a nearby suburb who commutes in. Many nurses strategically live in New Jersey, Delaware, or suburban PA to avoid the city wage tax.',
  },
  {
    question: 'What do travel nurses earn in Philadelphia?',
    answer: 'Travel nurses in Philadelphia typically earn $2,600–$4,200/week all-in (taxable base + tax-free housing and meal stipends). ICU and OR specialties command the highest rates, often $3,500–$4,200/week during high-demand periods. Philadelphia is a strong travel market due to its density of academic medical centers, trauma centers, and teaching hospitals — all of which regularly need specialty-trained travelers.',
  },
];

const experienceRows = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$64,800/yr', note: '$31.15/hr' },
  { label: '2–3 Years', avgSalary: '$72,400/yr', note: '$34.81/hr' },
  { label: '5 Years', avgSalary: '$84,200/yr', note: '$40.48/hr (market avg)' },
  { label: '10 Years', avgSalary: '$97,600/yr', note: '$46.92/hr' },
  { label: '15+ Years (union top step)', avgSalary: '$118,000/yr', note: '$56.73/hr (PASNAP max)' },
];

const hospitalRows = [
  { label: 'Penn Medicine / HUP', avgSalary: '$90,000–$118,000', note: 'Magnet, PASNAP union, Level I trauma' },
  { label: "Children's Hospital of Philadelphia (CHOP)", avgSalary: '$85,000–$112,000', note: 'Magnet, peds specialty premium' },
  { label: 'Jefferson Health', avgSalary: '$78,000–$96,000', note: 'Multi-campus, growing system' },
  { label: 'Temple University Hospital', avgSalary: '$72,000–$90,000', note: 'PASNAP union, Level I trauma' },
  { label: 'Main Line Health', avgSalary: '$76,000–$95,000', note: 'Suburban flagship, competitive' },
  { label: 'Einstein Medical Center', avgSalary: '$74,000–$88,000', note: 'Safety-net hospital, Level I trauma' },
  { label: 'Doylestown Health', avgSalary: '$72,000–$86,000', note: 'North suburban, community hospital' },
  { label: 'Virtua Health (South Jersey)', avgSalary: '$70,000–$85,000', note: 'NJ market, no NJ city wage tax' },
];

const specialtyRows = [
  { label: 'CRNA', avgSalary: '$198,000–$228,000', note: 'Highest-paid — Penn, CHOP, Jefferson' },
  { label: 'NICU', avgSalary: '$90,000–$110,000', note: 'CHOP premium for level IV NICU' },
  { label: 'ICU / Critical Care', avgSalary: '$88,000–$108,000', note: 'HUP MICU/SICU top payers' },
  { label: 'OR / Surgical', avgSalary: '$85,000–$105,000', note: 'Robotic surgery premium at HUP' },
  { label: 'Labor & Delivery', avgSalary: '$82,000–$100,000', note: 'High-volume L&D at HUP, Jefferson' },
  { label: 'Emergency / ED', avgSalary: '$80,000–$98,000', note: 'Level I trauma centers pay more' },
  { label: 'Oncology', avgSalary: '$82,000–$100,000', note: "Penn Cancer, CHOP oncology premium" },
  { label: 'Med-Surg', avgSalary: '$70,000–$84,000', note: 'Baseline — entry point for most floors' },
];

const taxRows = [
  { label: 'Gross Salary', avgSalary: '$84,200', note: 'Philadelphia MSA avg' },
  { label: 'Federal Income Tax (22% bracket)', avgSalary: '−$13,940', note: 'Estimated after standard deduction' },
  { label: 'FICA (Social Security + Medicare)', avgSalary: '−$6,441', note: '7.65% of gross' },
  { label: 'Pennsylvania State Tax (3.07%)', avgSalary: '−$2,585', note: 'Flat rate — no brackets' },
  { label: 'Philadelphia City Wage Tax (3.79%)', avgSalary: '−$3,191', note: 'Residents only — suburbs avoid this' },
  { label: 'Estimated Net Take-Home', avgSalary: '~$58,043/yr', note: '~$4,837/month' },
];

const cityRows = [
  { label: 'Philadelphia', avgSalary: '$84,200/yr', note: 'After city tax: ~$58,043 net' },
  { label: 'Pittsburgh', avgSalary: '$72,800/yr', note: 'Lower cost of living' },
  { label: 'New York City', avgSalary: '$109,860/yr', note: 'Highest nominal — but highest taxes too' },
  { label: 'Baltimore', avgSalary: '$81,400/yr', note: 'Similar COL to Philadelphia' },
  { label: 'Washington DC', avgSalary: '$97,200/yr', note: 'Strong fed + academic market' },
  { label: 'Pennsylvania Average', avgSalary: '$79,000/yr', note: 'Philadelphia adds ~$5,200 premium' },
  { label: 'National Average (BLS)', avgSalary: '$89,010/yr', note: 'Philadelphia is 5.4% below national avg' },
];

export default function PhiladelphiaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Philadelphia RN Salary 2026' },
      ]}
      h1="Philadelphia RN Salary 2026: What Nurses Actually Earn in the City of Brotherly Love"
      lastUpdated="May 2026"
      schemaTitle="Philadelphia RN Salary 2026"
      schemaDescription="Average RN salary in Philadelphia 2026: $84,200/year. Pay data by hospital, specialty, and experience level with city wage tax take-home analysis."
      schemaUrl="/philadelphia-rn-salary-2026"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-6 border border-outline-variant">
        <p className="text-on-surface font-medium">
          <strong>Quick Answer:</strong> Philadelphia RNs earn an average of <strong>$84,200/year ($40.48/hr)</strong> in 2026 — about $5,200 above the Pennsylvania average but $25,000 below NYC. Penn Medicine and CHOP top the local market at <strong>$90,000–$118,000</strong> for experienced nurses. Philadelphia's 3.79% city wage tax cuts take-home by ~$3,200/year versus a suburban commuter — a real financial consideration when choosing where to live.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/philadelphia-rn-salary-2026-hero.png"
        alt="Registered nurse in navy scrubs standing outside a Philadelphia hospital entrance with city skyline visible in the background"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Philadelphia sits at the intersection of some of the most prestigious academic medicine in the country — Penn Medicine, CHOP, Jefferson, and Temple all operate here — and a cost-of-living that, while rising, still undercuts NYC and DC by a meaningful margin. For nurses, that combination creates a market where <strong>$84,200/year</strong> goes further than it sounds, especially for those who live in surrounding suburbs and sidestep the city's 3.79% wage tax.
      </p>
      <p>
        The key variable in Philadelphia nursing compensation isn't just the base rate — it's whether you're covered by a PASNAP union contract. Nurses at Penn Medicine and CHOP who reach the top of a union step scale can clear <strong>$115,000–$118,000/year</strong>, which puts them within range of NYC-market nurses despite a substantially lower cost of living.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Philadelphia RN Salary by Experience (2026)</h2>
      <p>
        Experience is the single biggest driver of compensation in the Philadelphia market, especially at union hospitals where step increases are contractually guaranteed. A nurse who joins Penn Medicine as a new grad and stays 15 years can nearly double their starting salary through step increases alone.
      </p>
      <SalaryTable
        headers={['Experience Level', 'Annual Salary', 'Hourly Rate']}
        rows={experienceRows}
        title="Philadelphia RN salary by years of experience, 2026. BLS OEWS Philadelphia-Camden-Wilmington MSA data."
      />

      {/* Data chart */}
      <Image
        src="/images/philadelphia-rn-salary-2026-comparison.png"
        alt="Bar chart comparing Philadelphia RN salaries at major hospitals including Penn Medicine, CHOP, Jefferson, Temple, and Main Line Health in 2026"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Hospital in Philadelphia (2026)</h2>
      <p>
        Philadelphia's hospital market is dominated by academic medical centers — which is good news for nurses who want the highest pay. Magnet designation, union contracts, and trauma-center designation all push wages up. Penn Medicine leads the market; community hospitals in the suburbs can pay 15–20% less for the same role.
      </p>
      <SalaryTable
        headers={['Hospital / System', 'RN Salary Range', 'Notes']}
        rows={hospitalRows}
        title="Philadelphia-area hospital RN salary ranges, 2026."
      />
      <p>
        <strong>PASNAP note:</strong> The Pennsylvania Association of Staff Nurses and Allied Professionals represents nurses at Penn Medicine, Temple University Hospital, and several other Philadelphia facilities. PASNAP contracts include negotiated step increases, differential pay schedules, and mandatory nurse-to-patient ratio language. Being at a PASNAP hospital adds an average of <strong>$8,000–$14,000/year</strong> versus comparable non-union systems in the region.
      </p>

      {/* Photorealistic inline image */}
      <Image
        src="/images/philadelphia-rn-salary-2026-hospital.png"
        alt="Two nurses in scrubs reviewing a patient chart in a modern Philadelphia hospital hallway with natural light and clean clinical environment"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Philadelphia RN Salary by Specialty (2026)</h2>
      <p>
        CHOP's level IV NICU creates one of the strongest pediatric specialty premiums in the country — NICU nurses there consistently earn at the top of the range below. For adult critical care and OR nursing, Penn Medicine's Hospital of the University of Pennsylvania (HUP) is the regional benchmark.
      </p>
      <SalaryTable
        headers={['Specialty', 'Salary Range', 'Notes']}
        rows={specialtyRows}
        title="Philadelphia RN specialty salary ranges, 2026."
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Philadelphia City Wage Tax: What Your Take-Home Actually Looks Like</h2>
      <p>
        Philadelphia is one of the few U.S. cities with a municipal wage tax — currently <strong>3.79% for residents</strong> and 3.44% for non-residents (commuters). On an $84,200 salary, that's an additional $3,191/year coming out of your paycheck that nurses in Pittsburgh, Baltimore, or DC don't pay.
      </p>
      <SalaryTable
        headers={['Deduction', 'Amount', 'Notes']}
        rows={taxRows}
        title="Estimated take-home for a Philadelphia RN earning $84,200/year, 2026. Individual circumstances vary — consult a tax professional."
      />
      <p>
        The practical implication: many Philadelphia nurses choose to live in Montgomery County, Bucks County, or South Jersey (Camden or Cherry Hill areas) and commute in. Non-residents pay the lower 3.44% wage tax rate only on days worked in the city, and some suburban municipalities have no local income tax at all. The savings can reach <strong>$3,000–$4,500/year</strong> depending on your situation — effectively a small raise without changing jobs.
      </p>
      <p>
        Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model your specific take-home based on salary, tax filing status, and pre-tax deductions like 403(b) contributions and health insurance.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Philadelphia vs. Nearby Markets: Is the Grass Greener?</h2>
      <p>
        Philadelphia competes for nurses with NYC, Baltimore, and DC — all within driving or Amtrak distance. Here's how the markets compare on gross salary and estimated net after taxes:
      </p>
      <SalaryTable
        headers={['Market', 'Avg RN Salary', 'Context']}
        rows={cityRows}
        title="Philadelphia RN salary vs. comparable metro markets, 2026. BLS OEWS data."
      />
      <p>
        The Philadelphia-to-NYC gap looks large in gross terms ($84,200 vs. $109,860), but NYC nurses face their own high tax burden — New York City residents pay a city income tax of up to 3.876% on top of New York State's rates. After taxes and cost-of-living adjustment, the effective earnings advantage of NYC over Philadelphia narrows considerably. For nurses who can leverage PASNAP step increases at Penn Medicine or CHOP, <strong>Philadelphia's top-of-scale pay ($118,000) is fully competitive with mid-range NYC pay</strong> when adjusted for cost of living.
      </p>
      <p>
        See the full comparison: <Link href="/new-york-city-rn-salary-2026" className="text-primary hover:underline">NYC RN salary 2026</Link> · <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">New York state data</Link> · <Link href="/rn-salary-by-state/pennsylvania" className="text-primary hover:underline">Pennsylvania RN salary</Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse Pay in Philadelphia (2026)</h2>
      <p>
        Philadelphia's density of Level I trauma centers, academic medical centers, and specialty hospitals makes it a consistently active travel nursing market. Penn Medicine, Jefferson, and Temple regularly post travel contracts, particularly for ICU, OR, and L&D specialties.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>ICU / Critical Care travel:</strong> $3,400–$4,200/week all-in (taxable base + housing + meals)</li>
        <li><strong>OR / Surgical travel:</strong> $3,200–$4,000/week</li>
        <li><strong>L&D travel:</strong> $3,000–$3,800/week</li>
        <li><strong>Med-Surg / PCU travel:</strong> $2,600–$3,200/week</li>
        <li><strong>NICU travel (CHOP-adjacent facilities):</strong> $3,500–$4,200/week</li>
      </ul>
      <p className="mt-3">
        Travel nurses working in Philadelphia on 13-week contracts who maintain a tax home outside the area qualify for tax-free housing and meal stipends — which can add <strong>$800–$1,200/week</strong> in non-taxable income on top of the taxable base. On an annualized basis, that brings total travel nurse compensation to <strong>$135,000–$185,000/year</strong> for specialty nurses willing to work consecutive Philadelphia contracts.
      </p>
      <p>
        Compare agency offerings: <Link href="/travel-nurse-agency-comparison-2026" className="text-primary hover:underline">Best travel nurse agencies 2026</Link> · <Link href="/travel-nurse-salary-guide" className="text-primary hover:underline">Travel nurse salary guide</Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Maximize Your Philadelphia RN Salary</h2>
      <p>
        Three levers move the needle most in the Philadelphia market:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-on-surface-variant">
        <li>
          <strong>Target PASNAP hospitals:</strong> Penn Medicine and CHOP's union contracts provide automatic step increases every 1–2 years. A nurse who stays 10–15 years at either system will reach a salary level that's competitive with any non-union hospital in the country.
        </li>
        <li>
          <strong>Choose your specialty deliberately:</strong> The gap between a Med-Surg nurse ($70,000–$84,000) and a NICU nurse at CHOP ($90,000–$110,000) is $20,000+/year for the same experience level. Investing in a specialty certification — CCRN for critical care, RNC-NIC for NICU — unlocks higher pay bands and preferential hiring at the top systems.
        </li>
        <li>
          <strong>Model the tax math before accepting an offer:</strong> If two hospitals are within $5,000/year of each other and one is in the city while the other is in the suburbs, the suburban offer may net more after the city wage tax differential. Use the <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline">shift differential guide</Link> to model night/weekend premiums into your total comp.
        </li>
      </ul>

      {/* Sources */}
      <p className="mt-8 text-sm text-on-surface-variant">
        <strong>Sources & Methodology:</strong> Salary ranges based on BLS Occupational Employment and Wage Statistics (OEWS) for the Philadelphia-Camden-Wilmington, PA-NJ-DE-MD Metropolitan Statistical Area, 2024 data (published 2025). Hospital-level ranges sourced from Glassdoor, Indeed, and PASNAP public contract schedules. Take-home estimates use 2026 federal tax brackets (22% marginal), Pennsylvania flat 3.07% state rate, and Philadelphia city wage tax of 3.79% for residents. Individual results will vary based on filing status, deductions, and benefit elections. Consult a tax professional for personalized guidance.
      </p>

      {/* Related guides */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/pennsylvania" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Pennsylvania RN Salary</div>
          <div className="text-sm text-on-surface-variant mt-1">Statewide data: Philly vs. Pittsburgh vs. rural PA</div>
        </Link>
        <Link href="/new-york-city-rn-salary-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">NYC RN Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">$109,860/yr avg — NYSNA union breakdown</div>
        </Link>
        <Link href="/nurse-salary-by-hospital" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Nurse Salary by Hospital</div>
          <div className="text-sm text-on-surface-variant mt-1">Kaiser, HCA, Mayo, Penn Medicine compared</div>
        </Link>
        <Link href="/nursing-salary/nicu-nurse-salary" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">NICU Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">CHOP leads the country — see the data</div>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
