import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';
import Image from 'next/image';
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
    type: 'article',
  },
};

const experienceData = [
  { label: 'New Grad (0–1 yr)', salary: '$70,500 – $81,000', hourly: '$34 – $39/hr' },
  { label: 'Early Career (2–4 yrs)', salary: '$79,000 – $91,500', hourly: '$38 – $44/hr' },
  { label: 'Mid-Career (5–9 yrs)', salary: '$87,000 – $100,000', hourly: '$42 – $48/hr' },
  { label: 'Senior (10–19 yrs)', salary: '$94,000 – $108,000', hourly: '$45 – $52/hr' },
  { label: 'Veteran (20+ yrs)', salary: '$100,000 – $118,500', hourly: '$48 – $57/hr' },
];

const hospitalData = [
  { label: 'Jackson Health System', salary: '$87,000 – $102,000', notes: 'Public system; union representation on select units' },
  { label: 'Baptist Health South Florida', salary: '$88,000 – $103,000', notes: 'Top Magnet system; strong sign-on bonuses' },
  { label: 'UM/Sylvester (UHealth)', salary: '$90,000 – $105,000', notes: 'Academic medical center; NCI-designated cancer center' },
  { label: 'HCA Healthcare (South FL)', salary: '$84,000 – $97,000', notes: 'Multiple facilities; travel supplement opportunities' },
  { label: 'Cleveland Clinic Florida', salary: '$89,000 – $104,000', notes: 'Weston campus; strong ICU and cardiology differentials' },
  { label: 'Memorial Healthcare System', salary: '$85,000 – $99,000', notes: 'Broward County system; Magnet-designated hospitals' },
];

const specialtyData = [
  { label: 'CRNA (Certified RN Anesthetist)', salary: '$210,000 – $240,000', hourly: '$101 – $115/hr' },
  { label: 'ICU / Critical Care RN', salary: '$97,000 – $112,000', hourly: '$47 – $54/hr' },
  { label: 'ER / Emergency RN', salary: '$93,000 – $108,000', hourly: '$45 – $52/hr' },
  { label: 'OR / Perioperative RN', salary: '$92,000 – $107,000', hourly: '$44 – $51/hr' },
  { label: 'L&D / OB RN', salary: '$91,000 – $105,000', hourly: '$44 – $50/hr' },
  { label: 'Oncology RN', salary: '$90,000 – $104,000', hourly: '$43 – $50/hr' },
  { label: 'Med-Surg / Tele', salary: '$81,000 – $95,500', hourly: '$39 – $46/hr' },
  { label: 'Home Health / Hospice', salary: '$76,000 – $89,000', hourly: '$37 – $43/hr' },
];

const cityComparisonData = [
  { label: 'Miami–Fort Lauderdale–Pompano Beach', salary: '$90,000 – $97,000', hourly: '$43 – $47/hr' },
  { label: 'Naples–Marco Island', salary: '$92,000 – $100,000', hourly: '$44 – $48/hr' },
  { label: 'Tampa–St. Petersburg', salary: '$86,000 – $93,000', hourly: '$41 – $45/hr' },
  { label: 'Orlando–Kissimmee', salary: '$82,000 – $89,000', hourly: '$39 – $43/hr' },
  { label: 'Jacksonville', salary: '$82,000 – $89,000', hourly: '$39 – $43/hr' },
  { label: 'Tallahassee', salary: '$76,000 – $82,000', hourly: '$36 – $39/hr' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average RN salary in Miami in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami-area RNs earn around $90,000–$97,000/year in 2026, making it the highest-paying metro in Florida. The Florida statewide mean is $75,990 per BLS OEWS May 2024, and the Miami metro significantly outpaces it due to higher cost of living and competitive demand from major academic systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Miami hospital pays nurses the most?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'UM/Sylvester (UHealth) and Cleveland Clinic Florida tend to offer the highest base salaries, around $90,000–$105,000, driven by academic medical center pay scales and specialty unit demand. Baptist Health and Jackson Health are competitive, with strong sign-on bonuses at Baptist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Miami hospitals offer sign-on bonuses for nurses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Baptist Health South Florida and UM/Sylvester have offered sign-on bonuses of $10,000–$20,000 for ICU, ER, and OR nurses. HCA facilities in South Florida also run periodic sign-on programs. Vesting periods are typically 1–2 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Miami nurse pay compare to the rest of Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami is the highest-paying Florida metro, roughly 18–25% above the state average. Naples is comparable or slightly higher, while Tampa, Orlando, and Jacksonville all pay 5–10% less. The gap reflects Miami\'s cost of living premium rather than purely higher purchasing power.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Miami a good city for travel nurses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Miami is a popular travel nursing market. Florida is a compact state, so compact-license holders can start quickly. High-demand specialties (ICU, ER, L&D) see the strongest contract rates. Cost of living is high, so negotiate housing stipends carefully — tax-free stipends can significantly boost net pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the night shift differential for Miami nurses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Night shift differentials in Miami typically run $4–$7/hr above base rate, depending on the system and unit. ICU and ER nights tend to receive the upper end. Some unionized units at Jackson Health may have negotiated higher differentials per CBA terms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Florida have a state income tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Florida has no state income tax, which adds meaningful take-home value to Miami salaries. A nurse earning $93,000 in Miami keeps roughly $5,000–$8,000 more per year than a counterpart in California or New York earning the same gross salary.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Miami RN Salary 2026', item: 'https://nursesalaryintel.com/miami-rn-salary-2026' },
  ],
};

export default function MiamiRNSalaryPage() {
  return (
    <SEOPageLayout
      title="Miami RN Salary 2026"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Miami RN Salary 2026', href: '/miami-rn-salary-2026' },
      ]}
      lastUpdated="June 2026"
      schemaTitle="Miami RN Salary 2026"
      schemaDescription="Miami-area RNs earn around $90,000–$97,000/year in 2026 — Florida's highest-paying metro. Jackson Health, Baptist, and UM/Sylvester pay breakdown with specialty rates and negotiation tips."
      schemaUrl="/miami-rn-salary-2026"
      faqSchema={faqSchema}
      breadcrumbSchema={breadcrumbSchema}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Image */}
      <Image
        src="/images/miami-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy blue scrubs standing confidently outside a modern Miami hospital entrance with the South Florida skyline softly blurred in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 my-6 border border-outline-variant">
        <p className="text-on-surface">
          <strong>Miami RN salary in 2026:</strong> around <strong>$90,000–$97,000/year</strong> — the highest-paying metro in Florida, roughly 18–25% above the state average of $75,990 (BLS OEWS May 2024). No state income tax adds $5,000–$8,000/year in effective take-home over higher-tax states. Top systems like Baptist Health, UM/Sylvester, and Cleveland Clinic Florida push experienced RNs past <strong>$100,000</strong>.
        </p>
      </div>

      <p>
        The Miami–Fort Lauderdale–Pompano Beach metropolitan area is Florida&apos;s most competitive nursing market, anchored by Jackson Health System, Baptist Health South Florida, and the University of Miami Health System (UHealth/Sylvester). Academic medical center pay scales, Magnet designation premiums, and intense competition for experienced critical care nurses drive wages above every other Florida metro.
      </p>

      <h2>Miami RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Miami RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary', 'Hourly Rate']}
        rows={experienceData.map(r => [r.label, r.salary, r.hourly])}
        source="Derived from BLS OEWS May 2024 Florida statewide data + Miami metro premium estimates. Figures rounded to nearest $500. See methodology."
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
      <p>
        Miami&apos;s hospital landscape spans public safety-net systems, large Magnet-designated private networks, and academic medical centers affiliated with the University of Miami Miller School of Medicine. Each pays differently — and negotiates differently.
      </p>
      <SalaryTable
        title="Miami Hospital RN Base Salary by System"
        headers={['Hospital / System', 'Base Salary Range', 'Notes']}
        rows={hospitalData.map(r => [r.label, r.salary, r.notes])}
        source="Estimated from BLS OEWS Miami metro data, job posting analysis, and nurse-reported figures. Ranges reflect median-experienced RNs (3–10 yrs). Rounded to nearest $1,000."
      />

      {/* Photorealistic Inline Image */}
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
      <p>
        Critical care and procedural specialties command the largest premiums in Miami. CRNA demand is exceptionally high — South Florida surgical volumes and a growing outpatient ASC sector push CRNA compensation well above the national average.
      </p>
      <SalaryTable
        title="Miami RN Salary by Specialty"
        headers={['Specialty', 'Annual Salary', 'Hourly Rate']}
        rows={specialtyData.map(r => [r.label, r.salary, r.hourly])}
        source="Derived from BLS OEWS specialty differentials + Miami metro premium. Rounded to nearest $500. CRNA figures from AACN and published job postings."
      />

      <h2>How Miami Compares to Other Florida Cities</h2>
      <p>
        Miami leads Florida on raw salary numbers. The Naples–Marco Island metro is the only comparable market — smaller, but with high private hospital demand and fewer supply constraints. Tampa and Orlando are 5–10% lower; Jacksonville and Tallahassee are lower still.
      </p>
      <SalaryTable
        title="RN Salary: Miami vs. Florida Cities (2026 Est.)"
        headers={['Metro Area', 'Annual Salary', 'Hourly Rate']}
        rows={cityComparisonData.map(r => [r.label, r.salary, r.hourly])}
        source="BLS OEWS May 2024 Florida statewide mean ($75,990) with metro-level adjustments. All figures estimated and rounded to nearest $500."
      />

      <h2>Cost of Living Context</h2>
      <p>
        Miami&apos;s higher salaries are partially offset by South Florida&apos;s cost of living. Median rent for a 1-bedroom in Miami proper runs $2,200–$2,800/month. Nurses who live in Broward or Palm Beach County and commute south often find the best balance of wage and housing cost. The zero state income tax is a real and material advantage — a nurse earning $93,000 in Miami keeps roughly $5,000–$8,000 more annually than a counterpart at the same gross in California or New York.
      </p>
      <p>
        For travel nurses, Miami is a popular assignment market. Housing stipends are negotiable and critical — a $1,500/week housing stipend on a 13-week contract adds $19,500 in untaxed income that doesn&apos;t show in base wage comparisons.
      </p>

      <h2>Shift Differentials and Night Pay</h2>
      <p>
        Night shift differentials in Miami typically run <strong>$4–$7/hr</strong> above base rate. Weekend differentials add $2–$4/hr at most facilities. At a mid-career base of $47/hr, a full-time night position with differentials can push effective hourly pay to $52–$55/hr — translating to $108,000–$114,000 annually before overtime. ICU and ER night positions at UM/Sylvester and Baptist Health have historically carried the strongest differential packages.
      </p>

      <h2>Negotiation Tips for Miami Nurses</h2>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Leverage competing offers.</strong> With multiple large systems in close proximity, it is entirely reasonable to present a competing offer. Baptist Health and Cleveland Clinic Florida are known to match or exceed when nurses produce written competing offers.</li>
        <li><strong>Target sign-on bonuses in critical care.</strong> ICU, ER, and OR nurses are the highest-demand units. Baptist Health and HCA South Florida have run $10,000–$20,000 sign-on programs for these specialties. Ask specifically — these aren&apos;t always posted publicly.</li>
        <li><strong>Negotiate shift differential in writing.</strong> Some systems cap base salary movement but have flexibility on differential structure. Locking in a higher night or weekend rate compounds over your entire tenure.</li>
        <li><strong>Float pool vs. per diem.</strong> Per diem and float pool positions can command $10–$18/hr above base rates at Miami systems, with scheduling flexibility. Ideal for experienced nurses who can absorb the benefit trade-off.</li>
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

      <MethodologyBox />

      <div className="text-sm text-on-surface-variant mt-8 space-y-1">
        <p><strong>Sources:</strong></p>
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses), Florida statewide and Miami–Fort Lauderdale–Pompano Beach metro. <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>American Association of Nurse Anesthesiology (AANA), 2024 Practice Profile Survey. <a href="https://www.aana.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aana.com</a></p>
        <p>Job posting analysis: Baptist Health South Florida, Jackson Health System, and UM Health System (2024–2025 postings). Salary ranges rounded per site methodology.</p>
      </div>
    </SEOPageLayout>
  );
}
