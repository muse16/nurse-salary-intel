import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Washington DC RN Salary 2026 | NurseSalaryIntel',
  description: 'RNs in the Washington DC metro earn around $99,000–$103,000/year in 2026 — among the top 5 metro markets nationally. See pay by hospital, specialty, and…',
  alternates: { canonical: 'https://nursesalaryintel.com/washington-dc-rn-salary-2026' },
  openGraph: {
    title: 'Washington DC RN Salary 2026: How Much Do Nurses Make in DC?',
    description: 'DC metro RNs earn around $99,000–$103,000/year. MedStar, Georgetown, and Inova top the market. See pay by hospital and specialty.',
    url: 'https://nursesalaryintel.com/washington-dc-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Washington DC in 2026?',
    answer:
      'RNs in the Washington-Arlington-Alexandria DC metro area earn around $99,000–$103,000/year in 2026, based on BLS OEWS May 2024 data for the DC-MD-VA metropolitan statistical area. This places DC consistently among the top 5 highest-paying metro markets for nurses nationally.',
  },
  {
    question: 'How much do nurses make per hour in Washington DC?',
    answer:
      'The average hourly rate for RNs in the DC metro is approximately $47–$50/hr in 2026. Night shift and weekend differentials typically add $5–$9/hr on top of base, with some Georgetown and MedStar units reporting differentials reaching $10/hr for overnight ICU shifts.',
  },
  {
    question: 'Which DC hospitals pay nurses the most?',
    answer:
      'MedStar Georgetown University Hospital and MedStar Washington Hospital Center are consistently among the highest payers in the market, with experienced ICU and OR nurses reporting base rates of $52–$58/hr. Inova Fairfax (Virginia side) is also highly competitive and benefits from Virginia\'s lower tax burden.',
  },
  {
    question: 'Is DC nursing pay worth the cost of living?',
    answer:
      'It depends on where you live. DC proper has a high cost of living, but the metro area includes Northern Virginia and suburban Maryland where housing costs are lower while salaries are comparable. Nurses in Prince George\'s County or Alexandria often take home significantly more purchasing power than peers in Manhattan or San Francisco at similar salary levels.',
  },
  {
    question: 'Do DC nurses pay state income tax?',
    answer:
      'DC residents pay DC income tax (top rate 10.75%). However, nurses who live in Virginia or Maryland and commute to DC facilities pay their home state tax rate instead — Virginia tops out at 5.75%, Maryland at 5.75% plus a county tax. Cross-border commuting is extremely common in this market and worth modeling when comparing offers.',
  },
];

const hospitalData = [
  { label: 'MedStar Georgetown University Hospital', avgSalary: 'Around $100,000–$108,000/yr', hourlyRate: '~$48–$52/hr base' },
  { label: 'MedStar Washington Hospital Center', avgSalary: 'Around $98,000–$106,000/yr', hourlyRate: '~$47–$51/hr base' },
  { label: 'George Washington University Hospital', avgSalary: 'Around $97,000–$104,000/yr', hourlyRate: '~$46–$50/hr base' },
  { label: 'Children\'s National Hospital', avgSalary: 'Around $95,000–$103,000/yr', hourlyRate: '~$45–$49/hr base' },
  { label: 'Inova Fairfax Hospital (VA)', avgSalary: 'Around $96,000–$105,000/yr', hourlyRate: '~$46–$50/hr base' },
  { label: 'Johns Hopkins Sibley Memorial', avgSalary: 'Around $94,000–$102,000/yr', hourlyRate: '~$45–$49/hr base' },
];

const specialtyData = [
  { label: 'CRNA (Certified Registered Nurse Anesthetist)', avgSalary: 'Around $220,000–$240,000/yr', hourlyRate: 'Highest-paid nursing role' },
  { label: 'Nurse Practitioner (NP)', avgSalary: 'Around $120,000–$135,000/yr', hourlyRate: '~$58–$65/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: 'Around $108,000–$118,000/yr', hourlyRate: '~$52–$57/hr' },
  { label: 'OR / Surgical RN', avgSalary: 'Around $104,000–$114,000/yr', hourlyRate: '~$50–$55/hr' },
  { label: 'ER / Emergency RN', avgSalary: 'Around $102,000–$112,000/yr', hourlyRate: '~$49–$54/hr' },
  { label: 'L&D RN', avgSalary: 'Around $100,000–$110,000/yr', hourlyRate: '~$48–$53/hr' },
  { label: 'Med-Surg RN', avgSalary: 'Around $92,000–$100,000/yr', hourlyRate: '~$44–$48/hr' },
  { label: 'New Grad RN', avgSalary: 'Around $75,000–$84,000/yr', hourlyRate: '~$36–$40/hr' },
];

const metroComparison = [
  { label: 'San Francisco Bay Area, CA', avgSalary: 'Around $133,000+/yr', hourlyRate: 'Highest US metro' },
  { label: 'New York City, NY', avgSalary: 'Around $110,000–$120,000/yr', hourlyRate: 'High COL offset' },
  { label: 'Washington DC Metro', avgSalary: 'Around $99,000–$103,000/yr', hourlyRate: 'Top 5 nationally' },
  { label: 'Boston, MA', avgSalary: 'Around $98,000–$105,000/yr', hourlyRate: 'Comparable to DC' },
  { label: 'National Average', avgSalary: '$89,010/yr', hourlyRate: '$42.79/hr (BLS May 2024)' },
  { label: 'Houston, TX', avgSalary: 'Around $83,500/yr', hourlyRate: 'No state income tax' },
  { label: 'Charlotte, NC', avgSalary: 'Around $72,000–$76,000/yr', hourlyRate: 'Lower COL offset' },
];

export default function WashingtonDCRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Washington DC RN Salary 2026' },
      ]}
      h1="Washington DC RN Salary 2026: How Much Do Nurses Make in the DC Metro?"
      lastUpdated="May 2026"
      schemaTitle="Washington DC RN Salary 2026"
      schemaDescription="RNs in the Washington DC metro earn around $99,000–$103,000/year in 2026. See pay by hospital, specialty, and how DC compares to other top metro markets."
      schemaUrl="/washington-dc-rn-salary-2026"
      datePublished="2026-05-28"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          RNs in the Washington DC metro area earn around <strong>$99,000–$103,000/year</strong> based on the latest available BLS OEWS data (May 2024), placing DC consistently among the top 5 highest-paying nursing markets in the country. MedStar and Inova lead pay in the market. New grads start around <strong>$75,000–$84,000</strong>; experienced ICU and OR nurses reach <strong>$108,000–$118,000+</strong>.
        </p>
      </div>

      {/* Hero */}
      <Image
        src="/images/washington-dc-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy blue scrubs standing outside a major hospital in Washington DC with the Capitol building softly visible in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <h2>DC Nurse Salaries: What the Data Shows</h2>
      <p>
        The Washington-Arlington-Alexandria metropolitan statistical area is one of the highest-paying nursing markets in the United States. The federal government presence, concentration of academic medical centers, and proximity to NIH create demand for highly skilled nurses that consistently pushes wages above the national average of <strong>$89,010/year</strong> (BLS OEWS May 2024).
      </p>
      <p>
        The DC metro spans three jurisdictions — DC proper, Northern Virginia, and suburban Maryland — with meaningfully different tax treatment. A nurse earning $103,000 in Alexandria, Virginia takes home more after taxes than an identical salary in DC proper, because Virginia tops out at 5.75% income tax versus DC&apos;s 8.5–10.75%. This makes hospital selection and residential address a real financial decision.
      </p>

      <h2>DC Hospital RN Salaries: Estimated Pay by Facility</h2>
      <p>
        Major academic medical centers in DC cluster tightly in pay. MedStar facilities and GWU Hospital compete aggressively for experienced nurses, particularly in ICU, OR, and trauma. Inova Fairfax on the Virginia side is frequently cited by nurses as offering the strongest all-in package when tax treatment is factored in.
      </p>

      <SalaryTable
        title="Washington DC Hospital RN Salary Estimates (2026)"
        headers={['Hospital', 'Estimated Annual Salary Range', 'Estimated Hourly Base']}
        rows={hospitalData}
      />

      {/* Chart */}
      <Image
        src="/images/washington-dc-rn-salary-2026-comparison.png"
        alt="Bar chart comparing Washington DC RN salary to national average and other top metro markets including San Francisco, New York, Boston, and Houston"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>DC RN Salary by Specialty</h2>
      <p>
        Specialty and certification drive significant pay differences in the DC market. CRNA demand in the DC metro is exceptionally high — federal facilities, VA hospitals, and academic centers all compete for certified nurse anesthetists. ICU and OR nurses at Level I trauma centers like MedStar Washington Hospital Center command some of the highest staff RN rates in the region.
      </p>

      <SalaryTable
        title="Washington DC RN Salary by Specialty (2026 Estimates)"
        headers={['Specialty', 'Estimated Annual Salary', 'Notes']}
        rows={specialtyData}
      />

      {/* Inline image */}
      <Image
        src="/images/washington-dc-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing patient monitors in a modern ICU at a Washington DC academic medical center"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>How DC Compares to Other Top Nursing Markets</h2>
      <SalaryTable
        title="DC Metro vs. Top US Nursing Markets — RN Salary Comparison"
        headers={['Metro Market', 'Estimated Average RN Salary', 'Notes']}
        rows={metroComparison}
      />

      <h2>What Affects RN Pay in DC Most</h2>
      <p>
        Three factors move the needle more than anything else in the DC market:
      </p>
      <ul>
        <li><strong>Specialty and certification.</strong> CCRN, CNOR, and CEN certifications consistently add $5,000–$12,000 in the DC market. Magnet hospitals in DC actively reward certification through salary adjustment or one-time bonuses.</li>
        <li><strong>Which side of the metro you work on.</strong> Virginia-side facilities (Inova, Virginia Hospital Center) offer lower state tax burden. Maryland-side (Adventist, Holy Cross) is comparable. DC proper has the highest tax rate — factor this into offer comparisons.</li>
        <li><strong>Night shift differential.</strong> DC hospitals typically pay $5–$9/hr for overnight shifts. On a $100,000 base salary, consistent nights can add $10,000–$18,000 per year — effectively pushing total compensation past $115,000 without a specialty change.</li>
      </ul>

      <h2>Negotiation: What DC Nurses Should Know Before Accepting an Offer</h2>
      <p>
        DC is a competitive market where hospitals actively recruit to fill vacancies. That gives nurses more leverage than in slower markets. A few tactics that work well here:
      </p>
      <ul>
        <li>Use competing offers from across the metro — DC, Maryland, and Virginia hospitals all count, and HR knows it.</li>
        <li>Ask specifically about step increases. Many DC-area systems have published step scales. Knowing where you land on the scale (and asking to start higher) is worth $2,000–$6,000 immediately.</li>
        <li>Negotiate sign-on bonus vesting terms, not just the amount. A $15,000 bonus with a 2-year cliff is worth less than a $10,000 bonus with a 1-year cliff if you plan to reassess at year two.</li>
      </ul>
      <p>
        See the full <Link href="/nurse-salary-negotiation-guide-2026" className="text-primary hover:underline font-semibold">nurse salary negotiation guide</Link> for scripts and step-by-step tactics.
      </p>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/virginia-rn-salary-2026', label: 'Virginia RN Salary 2026', desc: 'Northern VA, Richmond, and Norfolk pay breakdown' },
          { href: '/new-york-city-rn-salary-2026', label: 'NYC RN Salary 2026', desc: 'Highest-paying city market in the Northeast' },
          { href: '/maryland-rn-salary-2026', label: 'Maryland RN Salary', desc: 'State data for Baltimore and suburban MD nurses' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'Scripts and tactics for any offer conversation' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <p className="font-semibold text-primary text-sm">{label}</p>
            <p className="text-on-surface-variant text-xs mt-1">{desc}</p>
          </Link>
        ))}
      </div>

      <MethodologyBox />

      <div className="not-prose text-sm text-on-surface-variant mt-6 space-y-1">
        <p><strong>Sources:</strong></p>
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses), Washington-Arlington-Alexandria MSA. <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>Job posting analysis from Indeed, LinkedIn, and facility career portals, April–May 2026. DC, Maryland, and Virginia tax rate data from respective state revenue agencies, 2026.</p>
        <p>Hospital-level salary estimates are derived from BLS MSA data and job posting ranges — individual pay depends on facility, experience, and negotiation outcome.</p>
      </div>
    </SEOPageLayout>
  );
}
