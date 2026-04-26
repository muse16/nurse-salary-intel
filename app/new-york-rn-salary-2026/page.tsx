import type { Metadata } from 'next';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New York RN Salary 2026: NYC Pay + Upstate Breakdown',
  description: 'New York RN salary 2026: NYC averages $108K–$123K+, upstate $75K–$90K. Union pay scales, tax impact, hospital-by-hospital data for NYU Langone, NewYork-Presbyterian, and Mount Sinai.',
  alternates: { canonical: 'https://nursesalaryintel.com/new-york-rn-salary-2026/' },
};

const nycEmployerData = [
  { label: 'NYU Langone Health', avgSalary: '$116,000 – $131,000', hourlyRate: '$56 – $63/hr' },
  { label: 'NewYork-Presbyterian', avgSalary: '$112,000 – $127,000', hourlyRate: '$54 – $61/hr' },
  { label: 'Mount Sinai Health System', avgSalary: '$112,000 – $127,000', hourlyRate: '$54 – $61/hr' },
  { label: 'Northwell Health (Long Island / Queens)', avgSalary: '$108,000 – $123,000', hourlyRate: '$52 – $59/hr' },
  { label: 'Montefiore Medical Center (Bronx)', avgSalary: '$106,000 – $120,000', hourlyRate: '$51 – $58/hr' },
  { label: 'NYC Health + Hospitals (public)', avgSalary: '$104,000 – $118,000', hourlyRate: '$50 – $57/hr' },
];

const upstateData = [
  { label: 'Westchester County', avgSalary: '$96,000 – $110,000', hourlyRate: '$46 – $53/hr' },
  { label: 'Albany', avgSalary: '$81,000 – $94,000', hourlyRate: '$39 – $45/hr' },
  { label: 'Buffalo', avgSalary: '$79,000 – $91,000', hourlyRate: '$38 – $44/hr' },
  { label: 'Rochester', avgSalary: '$79,000 – $89,000', hourlyRate: '$38 – $43/hr' },
  { label: 'Syracuse', avgSalary: '$77,000 – $89,000', hourlyRate: '$37 – $43/hr' },
];

const experienceData = [
  { label: 'New Grad (0–2 yrs) — NYC', avgSalary: '$96,000 – $108,000', hourlyRate: '$46 – $52/hr' },
  { label: 'Mid-Career (5–10 yrs) — NYC', avgSalary: '$114,000 – $129,000', hourlyRate: '$55 – $62/hr' },
  { label: 'Senior (10+ yrs) — NYC', avgSalary: '$125,000 – $141,000', hourlyRate: '$60 – $68/hr' },
  { label: 'New Grad (0–2 yrs) — Upstate', avgSalary: '$71,000 – $81,000', hourlyRate: '$34 – $39/hr' },
  { label: 'Mid-Career (5–10 yrs) — Upstate', avgSalary: '$83,000 – $96,000', hourlyRate: '$40 – $46/hr' },
  { label: 'Senior (10+ yrs) — Upstate', avgSalary: '$92,000 – $104,000', hourlyRate: '$44 – $50/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in New York in 2026?',
    answer: 'Approximately $106,000/year statewide, but with major regional variation. NYC metro averages $108,000–$123,000+; upstate (Buffalo, Rochester, Albany) averages $75,000–$90,000. Based on BLS May 2024 OEWS data projected 3–4% annually.',
  },
  {
    question: 'How much do NYC nurses earn per hour?',
    answer: 'Mid-career RNs at major NYC systems (NYU Langone, NewYork-Presbyterian, Mount Sinai) earn $54–$62/hr base in 2026. Senior union nurses with 10+ years and specialty certifications regularly reach $65–$70/hr.',
  },
  {
    question: 'Is New York a good state for RN pay?',
    answer: 'Nominally yes — second-highest in the nation. But New York state tax (6–10.9%) plus NYC city tax (3.88%) significantly reduces take-home. A Texas nurse at $88,000 and a NYC nurse at $105,000 may net similar after-tax income.',
  },
  {
    question: 'Do NYC nurses have union protection?',
    answer: 'About 70% of NYC hospital RNs are union-represented (NYSNA or 1199SEIU). Union nurses receive structured step pay scales, 3–5% annual raises, defined-benefit pension contributions at major systems, and strong staffing protections.',
  },
  {
    question: 'What is a new grad RN starting salary in NYC?',
    answer: 'An estimated $46–$52/hr or $96,000–$108,000/year at major NYC union hospitals. NYC new grad pay is among the highest in the nation, driven by union step schedules. Formal residency programs are standard at most large systems.',
  },
  {
    question: 'How does upstate New York RN pay compare to NYC?',
    answer: 'Upstate markets (Buffalo, Rochester, Albany) pay $75,000–$90,000 — about 20–25% less than NYC. However, upstate cost of living is dramatically lower, and purchasing power can be comparable or better for lifestyle-focused nurses.',
  },
  {
    question: 'What are the biggest hospital systems to work for in NYC?',
    answer: 'NYU Langone, NewYork-Presbyterian (Cornell/Columbia affiliates), Mount Sinai, Northwell Health, and Montefiore are the largest academic systems. NYC Health + Hospitals is the largest public system. All offer strong union coverage.',
  },
  {
    question: 'Can I negotiate my salary at a New York union hospital?',
    answer: 'Base pay follows the collective bargaining agreement — limited room to negotiate the hourly rate. However, step placement, sign-on bonus, relocation, PTO accrual, and certification pay application date are often negotiable even within union contracts.',
  },
  {
    question: 'Are travel nurse rates high in New York?',
    answer: 'Yes — NYC travel contracts often pay $3,000–$4,500/week all-in (blended rate + stipends). NY is one of the highest travel nursing markets in the nation, particularly in specialty units at large academic centers. Note: New York is NOT an NLC compact state, so out-of-state nurses need a NY license.',
  },
  {
    question: 'What shift differentials do NYC hospitals pay?',
    answer: 'Night shift: +$4–$7/hr; evening: +$2–$4/hr; weekend: +$3–$5/hr; holiday: +$5–$8/hr. A full-time NYC ICU nurse on nights and weekends can add $18,000–$28,000/year to base salary — partially offsetting the city\'s high cost of living.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'New York RN Salary 2026', item: 'https://nursesalaryintel.com/new-york-rn-salary-2026/' },
  ],
};

export default function NewYorkRNSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'RN Salary by State', href: '/rn-salary-by-state/' },
          { label: 'New York RN Salary 2026' },
        ]}
        h1="New York RN Salary 2026: NYC Pay, Upstate Rates & What Nurses Actually Keep"
        lastUpdated="April 30, 2026"
        schemaTitle="New York RN Salary 2026: NYC Pay + Upstate Breakdown"
        schemaDescription="New York RN salary 2026: NYC averages $108K–$123K+, upstate $75K–$90K. Union pay scales, tax impact, hospital-by-hospital data for NYU Langone, NewYork-Presbyterian, and Mount Sinai."
        schemaUrl="/new-york-rn-salary-2026/"
        faqs={faqs}
      >
        <Image
          src="/images/new-york-rn-salary-2026.png"
          alt="New York City RN salary 2026 skyline graphic showing $106K+ average annual pay."
          width={1200}
          height={630}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p>
          New York ranks <strong>second in the nation for RN pay</strong> — but the headline number masks two very different markets. New York City metro RNs earn an estimated <strong>$52–$62/hr base ($108,000–$128,000/year)</strong> at major academic health systems, while upstate markets (Buffalo, Rochester, Albany) are closer to national norms at $75,000–$90,000. Add New York&apos;s 6–10.9% state income tax and NYC&apos;s 3.88% city tax, and the take-home picture changes significantly. Here&apos;s what New York nurses actually earn — and keep — in 2026.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">NYC RN Salary by Major Hospital System (2026)</h2>
        <SalaryTable
          title="NYC RN Pay by Employer (2026 Estimates)"
          headers={['Employer / System', 'Est. Annual Salary', 'Est. Hourly']}
          rows={nycEmployerData}
          source="BLS OEWS May 2024 NYC metro data, projected 3–4% annually. Cross-referenced with NYSNA and 1199SEIU contract disclosures. Figures are estimates."
        />
        <p>
          NYU Langone leads in estimated base pay, followed by NewYork-Presbyterian and Mount Sinai. All major NYC academic systems operate under NYSNA or 1199SEIU union contracts, which set structured step scales with predictable annual increases of 3–5%. Non-union positions at smaller community hospitals or long-term care facilities typically pay 10–15% less. Use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model your take-home after NYC taxes.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Upstate New York RN Salaries (2026)</h2>
        <SalaryTable
          title="Upstate New York RN Pay by City (2026)"
          headers={['City / Metro', 'Est. Annual Salary', 'Est. Hourly']}
          rows={upstateData}
          source="BLS OEWS May 2024 metro-level data, projected 3–4% annually. Figures are estimates."
        />
        <p>
          Westchester County, just north of NYC, commands near-city pay levels while offering substantially lower cost of living. Buffalo, Rochester, and Albany track closer to national norms but benefit from New York&apos;s generally strong union culture — upstate nurses at Kaleida Health (Buffalo), University of Rochester Medical Center, and Albany Medical Center are often union-represented with structured pay progressions.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN Pay by Experience: NYC vs. Upstate</h2>
        <SalaryTable
          title="New York RN Pay by Experience Tier (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly']}
          rows={experienceData}
          source="BLS OEWS May 2024 percentile data, NYC and upstate metros, projected 3–4% annually."
        />
        <p>
          NYC union step progression is one of the most structured in the country. At NewYork-Presbyterian or NYU Langone, a nurse advancing from year 0 to year 10 typically moves through 12–15 step increases, each adding $0.75–$1.50/hr, compounding on top of any negotiated annual contract increases.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">The Tax Reality: What New York Nurses Keep</h2>
        <p>
          New York&apos;s high-tax environment meaningfully erodes nominal salary advantages. For a NYC-based RN at $115,000 gross, estimated deductions look like this:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Federal income tax:</strong> ~$20,700 (22% bracket on taxable income)</li>
          <li><strong>NY state income tax:</strong> ~$9,660 (9.3% effective on $115K)</li>
          <li><strong>NYC city income tax:</strong> ~$4,468 (3.88% rate)</li>
          <li><strong>FICA (Social Security + Medicare):</strong> ~$8,798 (7.65%)</li>
          <li><strong>Estimated take-home after all deductions:</strong> ~$71,000–$74,000</li>
        </ul>
        <p>
          By comparison, a Texas RN earning $88,000 nets an estimated $66,000–$68,000 after federal taxes alone (no state tax). The nominal $27,000 NYC advantage shrinks to roughly a $5,000–$8,000 real advantage after taxes — and nearly disappears once housing costs are factored in. For the full no-tax state comparison, see <Link href="/texas-rn-salary-2026/" className="text-primary hover:underline">Texas RN Salary 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">NYC Shift Differentials</h2>
        <p>NYC hospitals pay some of the highest shift differentials in the nation:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Night shift (11 PM–7 AM):</strong> +$4–$7/hr or 12–18% of base</li>
          <li><strong>Evening shift:</strong> +$2–$4/hr</li>
          <li><strong>Weekend:</strong> +$3–$5/hr</li>
          <li><strong>Charge nurse:</strong> +$3–$5/hr</li>
          <li><strong>Holiday:</strong> +$5–$8/hr or 1.5× base</li>
        </ul>
        <p>
          A full-time NYC ICU nurse working nights and weekends can add <strong>$18,000–$28,000/year</strong> to base salary. Night and weekend differentials partially compensate for NYC&apos;s cost-of-living premium and high tax burden. For negotiating differential rates, sign-on bonuses, or step placement at a NYC hospital, see <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in New York</h2>
        <p>
          New York is one of the highest-paying travel nursing markets in the nation. Important note: <strong>New York is NOT a Nurse Licensure Compact (NLC) state</strong>, so out-of-state nurses need a New York license before starting — allow 6–10 weeks for processing. For nurses who have or get a NY license, 13-week contracts at major NYC academic centers typically offer:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>All-in weekly packages: $3,000–$4,500/week (blended rate + tax-free stipends)</li>
          <li>ICU/ER/OR: highest packages, especially at NYU Langone and NewYork-Presbyterian</li>
          <li>Housing stipends: $2,000–$3,000/month in addition to base hourly</li>
        </ul>
        <p>
          For comparing New York to the other top states for RNs, see <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">Highest Paying States for RNs 2026</Link> or our <Link href="/california-rn-salary-2026/" className="text-primary hover:underline">California RN Salary 2026</Link> guide.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics OEWS, New York state and metro areas, May 2024; New York State Nurses Association collective bargaining disclosures; 1199SEIU wage reports. Internal methodology: BLS mean wages projected with 3–4% annual wage-growth assumption through 2026. All figures are estimates; actual pay varies by employer, experience, location, shift, and contract terms. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
