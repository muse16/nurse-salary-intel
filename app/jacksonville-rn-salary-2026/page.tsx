import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Jacksonville RN Salary 2026: Mayo Clinic FL & UF Health Pay',
  description:
    'Jacksonville RNs earn around $82,000–$89,000/yr. Mayo Clinic Florida, UF Health & Baptist Health pay data plus specialty rates and negotiation tips.',
  alternates: { canonical: 'https://nursesalaryintel.com/jacksonville-rn-salary-2026' },
  openGraph: {
    title: 'Jacksonville RN Salary 2026: Mayo Clinic FL & UF Health Pay',
    description:
      'Jacksonville RNs earn around $82,000–$89,000/yr. Mayo Clinic Florida, UF Health & Baptist Health pay data plus specialty rates and negotiation tips.',
    url: 'https://nursesalaryintel.com/jacksonville-rn-salary-2026',
  },
};

const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024 — Florida', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'BLS OEWS Jacksonville MSA, May 2024', url: 'https://www.bls.gov/oes/current/oes_27260.htm' },
  { title: 'AANA 2024 Practice Profile Survey', url: 'https://www.aana.com' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };

const methodology =
  'Jacksonville-area salary figures are derived from BLS OEWS May 2024 Florida statewide RN mean ($75,990/yr) with Jacksonville metro adjustment based on BLS metro-level wage data. Hospital-specific ranges reflect publicly posted salary bands and nurse-reported figures from 2024–2025 job postings. All figures are estimates — verify current rates directly with each employer.';

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: 'Around $65,000–$74,000/yr', hourlyRate: '~$31–$36/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: 'Around $73,000–$84,000/yr', hourlyRate: '~$35–$40/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: 'Around $80,000–$92,000/yr', hourlyRate: '~$38–$44/hr' },
  { label: 'Senior (10–19 yrs)', avgSalary: 'Around $87,000–$99,000/yr', hourlyRate: '~$42–$48/hr' },
  { label: 'Veteran (20+ yrs)', avgSalary: 'Around $93,000–$106,000/yr', hourlyRate: '~$45–$51/hr' },
];

const hospitalData = [
  { label: 'Mayo Clinic Florida', avgSalary: 'Around $88,000–$105,000/yr', notes: 'National brand premium; strong benefits + retirement match' },
  { label: 'UF Health Jacksonville', avgSalary: 'Around $82,000–$96,000/yr', notes: 'Level I trauma center; academic pay scale' },
  { label: 'Baptist Health (Jax)', avgSalary: 'Around $80,000–$93,000/yr', notes: 'Largest local system; Magnet-seeking' },
  { label: 'Ascension St. Vincent', avgSalary: 'Around $78,000–$91,000/yr', notes: 'Faith-based; competitive PTO and tuition benefits' },
  { label: 'HCA (Memorial, Orange Park)', avgSalary: 'Around $77,000–$90,000/yr', notes: 'Multiple facilities; travel supplement options' },
];

const specialtyData = [
  { label: 'CRNA', avgSalary: 'Around $195,000–$225,000/yr', hourlyRate: '~$94–$108/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: 'Around $90,000–$104,000/yr', hourlyRate: '~$43–$50/hr' },
  { label: 'ER / Emergency RN', avgSalary: 'Around $87,000–$101,000/yr', hourlyRate: '~$42–$49/hr' },
  { label: 'OR / Perioperative RN', avgSalary: 'Around $86,000–$100,000/yr', hourlyRate: '~$41–$48/hr' },
  { label: 'L&D / OB RN', avgSalary: 'Around $84,000–$98,000/yr', hourlyRate: '~$40–$47/hr' },
  { label: 'Med-Surg / Tele', avgSalary: 'Around $75,000–$88,000/yr', hourlyRate: '~$36–$42/hr' },
];

const cityComparisonData = [
  { label: 'Jacksonville', avgSalary: 'Around $82,000–$89,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Miami–Fort Lauderdale', avgSalary: 'Around $90,000–$97,000/yr', hourlyRate: '~$43–$47/hr' },
  { label: 'Tampa–St. Petersburg', avgSalary: 'Around $86,000–$93,000/yr', hourlyRate: '~$41–$45/hr' },
  { label: 'Orlando–Kissimmee', avgSalary: 'Around $82,000–$89,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Tallahassee', avgSalary: 'Around $76,000–$82,000/yr', hourlyRate: '~$36–$39/hr' },
  { label: 'Florida Statewide Mean (BLS May 2024)', avgSalary: '$75,990/yr', hourlyRate: '$36.53/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Jacksonville FL in 2026?',
    answer:
      'Jacksonville RNs earn around $82,000–$89,000/year in 2026, above the Florida state average of $75,990 (BLS OEWS May 2024). Mayo Clinic Florida is the standout employer, with experienced RNs reaching $100,000+.',
  },
  {
    question: 'Does Mayo Clinic Florida pay nurses more than Baptist Health?',
    answer:
      'Yes. Mayo Clinic Florida typically pays $88,000–$105,000 versus $80,000–$93,000 at Baptist Health Jacksonville. Mayo also offers stronger retirement matching and a national brand premium that supports higher starting offers. Baptist is more accessible for new grads.',
  },
  {
    question: 'Is Jacksonville good for travel nurses?',
    answer:
      "Jacksonville is a solid travel market. Florida is a compact state, and Level I trauma access at UF Health drives periodic high-demand contracts. Critical care and ER specialties see the strongest rates. Cost of living is among the lowest of any major Florida city, which improves net income on standard housing stipends.",
  },
  {
    question: 'What do Jacksonville new grad nurses earn?',
    answer:
      'New grad RNs in Jacksonville typically start at $65,000–$74,000/year ($31–$36/hr). Baptist Health and UF Health run residency programs that often include small sign-on commitments with 1–2 year service agreements.',
  },
  {
    question: 'Does Jacksonville have night shift differentials for nurses?',
    answer:
      'Yes. Night shift differentials in Jacksonville typically run $3–$6/hr above base rate. Weekend differentials add $2–$3/hr at most facilities. A full-time night position can add $7,000–$14,000 annually over a day position at the same base.',
  },
  {
    question: 'How does Jacksonville compare to Orlando for nurse pay?',
    answer:
      "Jacksonville and Orlando are closely matched, both in the $82,000–$89,000 range. Jacksonville has a lower cost of living — particularly for housing — which gives it a slight purchasing power advantage despite similar gross salaries.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Jacksonville RN Salary 2026', item: 'https://nursesalaryintel.com/jacksonville-rn-salary-2026/' },
  ],
};

export default function JacksonvilleRNSalaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Salary Guides', href: '/blog' },
          { label: 'Jacksonville RN Salary 2026' },
        ]}
        h1="Jacksonville RN Salary 2026: Mayo Clinic FL, UF Health & Baptist Pay"
        lastUpdated="June 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Jacksonville RN Salary 2026"
        schemaDescription="Jacksonville RNs earn around $82,000–$89,000/year in 2026. Mayo Clinic Florida, UF Health, and Baptist Health pay breakdown with specialty rates and negotiation tips."
        schemaUrl="/jacksonville-rn-salary-2026"
        datePublished="2026-06-01"
        faqs={faqs}
      >
        <Image
          src="/images/jacksonville-rn-salary-2026-hero.webp"
          alt="Registered nurse in navy blue scrubs standing outside a modern Jacksonville Florida hospital entrance with bright blue sky and green trees in the background"
          width={1200}
          height={630}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="rounded-xl w-full"
          priority
        />

        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            Jacksonville RNs earn around <strong>$82,000–$89,000/year</strong> in 2026 — above the Florida state average of $75,990 (BLS OEWS May 2024). Mayo Clinic Florida leads the market with experienced RNs reaching <strong>$100,000+</strong>. No state income tax boosts effective take-home by $5,000–$8,000/year versus higher-tax states.
          </p>
        </div>

        <p>
          Jacksonville is northeast Florida&apos;s healthcare hub, anchored by Mayo Clinic Florida — one of the nation&apos;s premier academic medical systems — alongside UF Health Jacksonville (the region&apos;s only Level I trauma center), Baptist Health, and Ascension St. Vincent. Low cost of living relative to Miami or Tampa and strong hospital competition make Jacksonville a financially compelling market for experienced nurses.
        </p>

        <h2>Jacksonville RN Salary by Experience Level (2026)</h2>
        <SalaryTable
          title="Jacksonville RN Salary by Years of Experience"
          headers={['Experience Level', 'Annual Salary', 'Hourly Rate']}
          rows={experienceData.map(r => [r.label, r.avgSalary, r.hourlyRate])}
          source="Derived from BLS OEWS May 2024 Florida statewide data + Jacksonville metro adjustment. Figures rounded to nearest $500."
        />

        <Image
          src="/images/jacksonville-rn-salary-2026-comparison.png"
          alt="Bar chart comparing Jacksonville RN salaries versus other Florida cities and the national average in 2026"
          width={800}
          height={450}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>Jacksonville Hospital RN Pay Breakdown (2026)</h2>
        <SalaryTable
          title="Jacksonville Hospital RN Base Salary by System"
          headers={['Hospital / System', 'Base Salary Range', 'Notes']}
          rows={hospitalData.map(r => [r.label, r.avgSalary, r.notes])}
          source="Estimated from BLS OEWS Jacksonville metro data, job posting analysis, and nurse-reported figures. Ranges reflect median-experienced RNs (3–10 yrs). Rounded to nearest $1,000."
        />

        <Image
          src="/images/jacksonville-rn-salary-2026-hospital.webp"
          alt="Two nurses in scrubs reviewing patient records together in a bright modern ICU corridor at a Jacksonville Florida hospital, professional clinical setting"
          width={600}
          height={800}
          sizes="(max-width: 1024px) 100vw, 448px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>Jacksonville RN Salary by Specialty (2026)</h2>
        <SalaryTable
          title="Jacksonville RN Salary by Specialty"
          headers={['Specialty', 'Annual Salary', 'Hourly Rate']}
          rows={specialtyData.map(r => [r.label, r.avgSalary, r.hourlyRate])}
          source="Derived from BLS OEWS specialty differentials + Jacksonville metro premium. Rounded to nearest $500. CRNA figures from AANA and published job postings."
        />

        <h2>How Jacksonville Compares to Florida Cities</h2>
        <SalaryTable
          title="RN Salary: Jacksonville vs. Florida Cities (2026 Est.)"
          headers={['Metro Area', 'Annual Salary', 'Hourly Rate']}
          rows={cityComparisonData.map(r => [r.label, r.avgSalary, r.hourlyRate])}
          source="BLS OEWS May 2024 Florida statewide mean ($75,990) with metro-level adjustments. All figures estimated and rounded to nearest $500."
        />

        <h2>Negotiation Tips for Jacksonville Nurses</h2>
        <ul>
          <li><strong>Mayo Clinic is the leverage point.</strong> Having a Mayo offer letter strengthens negotiating position at any other Jacksonville system. Baptist and Ascension have responded to written Mayo comparisons.</li>
          <li><strong>UF Health trauma differential.</strong> Level I trauma experience commands a pay premium. Nurses with TNCC certification should call this out explicitly in ICU and ER salary conversations.</li>
          <li><strong>Sign-on bonuses in critical care.</strong> ICU, ER, and OR nurses at UF Health and Baptist have seen $8,000–$15,000 sign-on offers during high-demand periods. Ask the recruiter directly — not always posted publicly.</li>
        </ul>
        <p>
          For a full negotiation playbook, see the{' '}
          <Link href="/nurse-salary-negotiation-guide-2026" className="text-primary underline">
            Nurse Salary Negotiation Guide
          </Link>.
        </p>

        <h2>Related Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: '/miami-rn-salary-2026', label: 'Miami RN Salary 2026', desc: "Florida's highest-paying metro — Jackson Health & Baptist pay" },
            { href: '/tampa-rn-salary-2026', label: 'Tampa RN Salary 2026', desc: 'AdventHealth, BayCare & TGH pay data' },
            { href: '/travel-nurse-salary-guide', label: 'Travel Nurse Pay Guide', desc: 'Florida compact license + stipend math' },
            { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'Scripts and tactics for Northeast Florida offers' },
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
