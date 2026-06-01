import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Miami RN Salary 2026: Jackson Health, Baptist & UM Pay',
  description:
    "Miami RNs earn around $90,000–$97,000/yr — Florida's top metro. Jackson Health, Baptist & UM/Sylvester pay data plus ICU, ER, and L&D specialty rates.",
  alternates: { canonical: 'https://nursesalaryintel.com/miami-rn-salary-2026' },
  openGraph: {
    title: 'Miami RN Salary 2026: Jackson Health, Baptist & UM Pay',
    description:
      "Miami RNs earn around $90,000–$97,000/yr — Florida's top metro. Jackson Health, Baptist & UM/Sylvester pay data plus ICU, ER, and L&D specialty rates.",
    url: 'https://nursesalaryintel.com/miami-rn-salary-2026',
  },
};

const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024 — Florida', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'BLS OEWS Miami–Fort Lauderdale–Pompano Beach MSA, May 2024', url: 'https://www.bls.gov/oes/current/oes_33100.htm' },
  { title: 'AANA 2024 Practice Profile Survey', url: 'https://www.aana.com' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };

const methodology =
  'Miami-area salary figures are derived from BLS OEWS May 2024 Florida statewide RN mean ($75,990/yr) with Miami–Fort Lauderdale metro premium applied based on BLS metro-level wage differentials. Hospital-specific ranges reflect publicly posted salary bands and nurse-reported figures from 2024–2025 job postings. All figures are estimates — verify current rates directly with each employer.';

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: 'Around $70,500–$81,000/yr', hourlyRate: '~$34–$39/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: 'Around $79,000–$91,500/yr', hourlyRate: '~$38–$44/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: 'Around $87,000–$100,000/yr', hourlyRate: '~$42–$48/hr' },
  { label: 'Senior (10–19 yrs)', avgSalary: 'Around $94,000–$108,000/yr', hourlyRate: '~$45–$52/hr' },
  { label: 'Veteran (20+ yrs)', avgSalary: 'Around $100,000–$118,500/yr', hourlyRate: '~$48–$57/hr' },
];

const hospitalData = [
  { label: 'Jackson Health System', avgSalary: 'Around $87,000–$102,000/yr', notes: 'Public system; union representation on select units' },
  { label: 'Baptist Health South Florida', avgSalary: 'Around $88,000–$103,000/yr', notes: 'Top Magnet system; strong sign-on bonuses' },
  { label: 'UM/Sylvester (UHealth)', avgSalary: 'Around $90,000–$105,000/yr', notes: 'Academic medical center; NCI-designated cancer center' },
  { label: 'HCA Healthcare (South FL)', avgSalary: 'Around $84,000–$97,000/yr', notes: 'Multiple facilities; travel supplement opportunities' },
  { label: 'Cleveland Clinic Florida', avgSalary: 'Around $89,000–$104,000/yr', notes: 'Weston campus; strong ICU and cardiology differentials' },
  { label: 'Memorial Healthcare System', avgSalary: 'Around $85,000–$99,000/yr', notes: 'Broward County; Magnet-designated hospitals' },
];

const specialtyData = [
  { label: 'CRNA', avgSalary: 'Around $210,000–$240,000/yr', hourlyRate: '~$101–$115/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: 'Around $97,000–$112,000/yr', hourlyRate: '~$47–$54/hr' },
  { label: 'ER / Emergency RN', avgSalary: 'Around $93,000–$108,000/yr', hourlyRate: '~$45–$52/hr' },
  { label: 'OR / Perioperative RN', avgSalary: 'Around $92,000–$107,000/yr', hourlyRate: '~$44–$51/hr' },
  { label: 'L&D / OB RN', avgSalary: 'Around $91,000–$105,000/yr', hourlyRate: '~$44–$50/hr' },
  { label: 'Med-Surg / Tele', avgSalary: 'Around $81,000–$95,500/yr', hourlyRate: '~$39–$46/hr' },
];

const cityComparisonData = [
  { label: 'Miami–Fort Lauderdale–Pompano Beach', avgSalary: 'Around $90,000–$97,000/yr', hourlyRate: '~$43–$47/hr' },
  { label: 'Naples–Marco Island', avgSalary: 'Around $92,000–$100,000/yr', hourlyRate: '~$44–$48/hr' },
  { label: 'Tampa–St. Petersburg', avgSalary: 'Around $86,000–$93,000/yr', hourlyRate: '~$41–$45/hr' },
  { label: 'Orlando–Kissimmee', avgSalary: 'Around $82,000–$89,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Jacksonville', avgSalary: 'Around $82,000–$89,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Florida Statewide Mean (BLS May 2024)', avgSalary: '$75,990/yr', hourlyRate: '$36.53/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Miami in 2026?',
    answer:
      "Miami-area RNs earn around $90,000–$97,000/year in 2026 — Florida's highest-paying metro, roughly 18–25% above the state average of $75,990 (BLS OEWS May 2024). Top systems like Baptist Health, UM/Sylvester, and Cleveland Clinic Florida push experienced RNs past $100,000.",
  },
  {
    question: 'Which Miami hospital pays nurses the most?',
    answer:
      "UM/Sylvester (UHealth) and Cleveland Clinic Florida tend to offer the highest base salaries at around $90,000–$105,000, driven by academic medical center pay scales and specialty unit demand. Baptist Health and Jackson Health are competitive, with strong sign-on bonuses at Baptist.",
  },
  {
    question: 'Do Miami hospitals offer sign-on bonuses for nurses?',
    answer:
      'Yes. Baptist Health South Florida and UM/Sylvester have offered sign-on bonuses of $10,000–$20,000 for ICU, ER, and OR nurses. HCA facilities in South Florida also run periodic sign-on programs. Vesting periods are typically 1–2 years.',
  },
  {
    question: 'How does Miami nurse pay compare to the rest of Florida?',
    answer:
      "Miami is the highest-paying Florida metro, roughly 18–25% above the state average. Naples is comparable or slightly higher, while Tampa, Orlando, and Jacksonville all pay 5–10% less. The gap reflects Miami's cost of living premium rather than purely higher purchasing power.",
  },
  {
    question: 'Is Miami a good city for travel nurses?',
    answer:
      'Miami is a popular travel nursing market. Florida is a compact state, so compact-license holders can start quickly. High-demand specialties (ICU, ER, L&D) see the strongest contract rates. Cost of living is high, so negotiate housing stipends carefully — tax-free stipends can significantly boost net pay.',
  },
  {
    question: 'What is the night shift differential for Miami nurses?',
    answer:
      'Night shift differentials in Miami typically run $4–$7/hr above base rate, depending on the system and unit. ICU and ER nights tend to receive the upper end. Some unionized units at Jackson Health may have negotiated higher differentials per CBA terms.',
  },
  {
    question: 'Does Florida have a state income tax?',
    answer:
      'No. Florida has no state income tax, which adds meaningful take-home value to Miami salaries. A nurse earning $93,000 in Miami keeps roughly $5,000–$8,000 more per year than a counterpart in California or New York earning the same gross salary.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Miami RN Salary 2026', item: 'https://nursesalaryintel.com/miami-rn-salary-2026/' },
  ],
};

export default function MiamiRNSalaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Salary Guides', href: '/blog' },
          { label: 'Miami RN Salary 2026' },
        ]}
        h1="Miami RN Salary 2026: What South Florida Nurses Actually Earn"
        lastUpdated="June 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Miami RN Salary 2026"
        schemaDescription="Miami-area RNs earn around $90,000–$97,000/year in 2026 — Florida's highest-paying metro. Jackson Health, Baptist, and UM/Sylvester pay breakdown with specialty rates."
        schemaUrl="/miami-rn-salary-2026"
        datePublished="2026-06-01"
        faqs={faqs}
      >
        <Image
          src="/images/miami-rn-salary-2026-hero.webp"
          alt="Registered nurse in navy blue scrubs standing confidently outside a modern Miami hospital entrance with the South Florida skyline softly blurred in the background"
          width={1200}
          height={630}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="rounded-xl w-full"
          priority
        />

        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            Miami-area RNs earn around <strong>$90,000–$97,000/year</strong> in 2026 — Florida&apos;s highest-paying metro, roughly 18–25% above the state average of $75,990 (BLS OEWS May 2024). No state income tax adds $5,000–$8,000/year in effective take-home. Top systems like Baptist Health and UM/Sylvester push experienced RNs past <strong>$100,000</strong>.
          </p>
        </div>

        <p>
          The Miami–Fort Lauderdale–Pompano Beach metro is Florida&apos;s most competitive nursing market, anchored by Jackson Health System, Baptist Health South Florida, and the University of Miami Health System (UHealth/Sylvester). Academic medical center pay scales, Magnet designation premiums, and intense competition for experienced critical care nurses drive wages above every other Florida metro.
        </p>

        <h2>Miami RN Salary by Experience Level (2026)</h2>
        <SalaryTable
          title="Miami RN Salary by Years of Experience"
          headers={['Experience Level', 'Annual Salary', 'Hourly Rate']}
          rows={experienceData.map(r => [r.label, r.avgSalary, r.hourlyRate])}
          source="Derived from BLS OEWS May 2024 Florida statewide data + Miami metro premium. Figures rounded to nearest $500."
        />

        <Image
          src="/images/miami-rn-salary-2026-comparison.png"
          alt="Bar chart comparing Miami RN salaries versus other Florida cities and the national average in 2026"
          width={800}
          height={450}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>Miami Hospital RN Pay Breakdown (2026)</h2>
        <SalaryTable
          title="Miami Hospital RN Base Salary by System"
          headers={['Hospital / System', 'Base Salary Range', 'Notes']}
          rows={hospitalData.map(r => [r.label, r.avgSalary, r.notes])}
          source="Estimated from BLS OEWS Miami metro data, job posting analysis, and nurse-reported figures. Ranges reflect median-experienced RNs (3–10 yrs). Rounded to nearest $1,000."
        />

        <Image
          src="/images/miami-rn-salary-2026-hospital.webp"
          alt="Two nurses in scrubs reviewing patient monitors together in a softly lit ICU room at a modern Miami hospital, professional and focused clinical setting"
          width={600}
          height={800}
          sizes="(max-width: 1024px) 100vw, 448px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>Miami RN Salary by Specialty (2026)</h2>
        <SalaryTable
          title="Miami RN Salary by Specialty"
          headers={['Specialty', 'Annual Salary', 'Hourly Rate']}
          rows={specialtyData.map(r => [r.label, r.avgSalary, r.hourlyRate])}
          source="Derived from BLS OEWS specialty differentials + Miami metro premium. Rounded to nearest $500. CRNA figures from AANA and published job postings."
        />

        <h2>How Miami Compares to Other Florida Cities</h2>
        <SalaryTable
          title="RN Salary: Miami vs. Florida Cities (2026 Est.)"
          headers={['Metro Area', 'Annual Salary', 'Hourly Rate']}
          rows={cityComparisonData.map(r => [r.label, r.avgSalary, r.hourlyRate])}
          source="BLS OEWS May 2024 Florida statewide mean ($75,990) with metro-level adjustments. All figures estimated and rounded to nearest $500."
        />

        <h2>Night Shift and Total Compensation</h2>
        <p>
          Night shift differentials in Miami typically run <strong>$4–$7/hr</strong> above base rate. Weekend differentials add $2–$4/hr at most facilities. A mid-career RN at $47/hr base on a full-time night schedule can reach an effective $52–$55/hr — pushing annual compensation to $108,000–$114,000 before overtime. ICU and ER night positions at UM/Sylvester and Baptist Health historically carry the strongest differential packages.
        </p>

        <h2>Negotiation Tips for Miami Nurses</h2>
        <ul>
          <li><strong>Leverage competing offers.</strong> With multiple large systems nearby, presenting a written competing offer is entirely reasonable. Baptist Health and Cleveland Clinic Florida have been known to match or exceed when nurses produce written comparisons.</li>
          <li><strong>Target sign-on bonuses in critical care.</strong> ICU, ER, and OR nurses are the highest-demand units. Baptist Health and HCA South Florida have run $10,000–$20,000 sign-on programs. Ask specifically — these aren&apos;t always posted publicly.</li>
          <li><strong>No state income tax compounds quickly.</strong> A $2,000 raise in Florida is worth more net than the same raise in a state with a 5–6% income tax. Frame your negotiation around net take-home when comparing offers.</li>
        </ul>
        <p>
          For a full negotiation framework including scripts and counter-offer tactics, see the{' '}
          <Link href="/nurse-salary-negotiation-guide-2026" className="text-primary underline">
            Nurse Salary Negotiation Guide
          </Link>.
        </p>

        <h2>Related Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: '/jacksonville-rn-salary-2026', label: 'Jacksonville RN Salary 2026', desc: 'Mayo Clinic Florida & UF Health pay breakdown' },
            { href: '/tampa-rn-salary-2026', label: 'Tampa RN Salary 2026', desc: 'AdventHealth, BayCare, and TGH pay data' },
            { href: '/travel-nurse-salary-guide', label: 'Travel Nurse Pay Guide', desc: 'Florida compact license advantage + stipend math' },
            { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'Scripts and tactics for South Florida hospital offers' },
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
      </SEOPageLayout>
    </>
  );
}
