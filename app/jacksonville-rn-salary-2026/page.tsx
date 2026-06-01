import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';
import Image from 'next/image';
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
    type: 'article',
  },
};

const experienceData = [
  { label: 'New Grad (0–1 yr)', salary: '$65,000 – $74,000', hourly: '$31 – $36/hr' },
  { label: 'Early Career (2–4 yrs)', salary: '$73,000 – $84,000', hourly: '$35 – $40/hr' },
  { label: 'Mid-Career (5–9 yrs)', salary: '$80,000 – $92,000', hourly: '$38 – $44/hr' },
  { label: 'Senior (10–19 yrs)', salary: '$87,000 – $99,000', hourly: '$42 – $48/hr' },
  { label: 'Veteran (20+ yrs)', salary: '$93,000 – $106,000', hourly: '$45 – $51/hr' },
];

const hospitalData = [
  { label: 'Mayo Clinic Florida', salary: '$88,000 – $105,000', notes: 'National brand premium; strong benefits + retirement match' },
  { label: 'UF Health Jacksonville', salary: '$82,000 – $96,000', notes: 'Level I trauma center; academic pay scale' },
  { label: 'Baptist Health (Jax)', salary: '$80,000 – $93,000', notes: 'Largest health system in NE Florida; Magnet-seeking' },
  { label: 'Ascension St. Vincent', salary: '$78,000 – $91,000', notes: 'Faith-based; competitive PTO and tuition benefits' },
  { label: 'HCA (Memorial, Orange Park)', salary: '$77,000 – $90,000', notes: 'Multiple facilities; travel supplement options' },
  { label: 'Brooks Rehab', salary: '$74,000 – $86,000', notes: 'Rehab specialty; predictable scheduling advantage' },
];

const specialtyData = [
  { label: 'CRNA', salary: '$195,000 – $225,000', hourly: '$94 – $108/hr' },
  { label: 'ICU / Critical Care RN', salary: '$90,000 – $104,000', hourly: '$43 – $50/hr' },
  { label: 'ER / Emergency RN', salary: '$87,000 – $101,000', hourly: '$42 – $49/hr' },
  { label: 'OR / Perioperative RN', salary: '$86,000 – $100,000', hourly: '$41 – $48/hr' },
  { label: 'L&D / OB RN', salary: '$84,000 – $98,000', hourly: '$40 – $47/hr' },
  { label: 'Oncology RN', salary: '$83,000 – $96,000', hourly: '$40 – $46/hr' },
  { label: 'Med-Surg / Tele', salary: '$75,000 – $88,000', hourly: '$36 – $42/hr' },
  { label: 'Home Health / Hospice', salary: '$70,000 – $82,000', hourly: '$34 – $39/hr' },
];

const cityComparisonData = [
  { label: 'Jacksonville', salary: '$82,000 – $89,000', hourly: '$39 – $43/hr' },
  { label: 'Miami–Fort Lauderdale', salary: '$90,000 – $97,000', hourly: '$43 – $47/hr' },
  { label: 'Tampa–St. Petersburg', salary: '$86,000 – $93,000', hourly: '$41 – $45/hr' },
  { label: 'Orlando–Kissimmee', salary: '$82,000 – $89,000', hourly: '$39 – $43/hr' },
  { label: 'Tallahassee', salary: '$76,000 – $82,000', hourly: '$36 – $39/hr' },
  { label: 'Florida Statewide Mean', salary: '$75,990 (BLS May 2024)', hourly: '$36.53/hr' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the average RN salary in Jacksonville FL in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jacksonville RNs earn around $82,000–$89,000/year in 2026, above the Florida state average of $75,990 (BLS OEWS May 2024). Mayo Clinic Florida is the highest-paying employer, with experienced RNs reaching $100,000+.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Mayo Clinic Florida pay nurses more than Baptist Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Mayo Clinic Florida typically pays $88,000–$105,000, versus $80,000–$93,000 at Baptist Health Jacksonville. Mayo also offers stronger retirement matching and a national brand premium that supports higher starting offers. Baptist is more accessible for new grads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Jacksonville good for travel nurses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jacksonville is a solid travel market. Florida is a compact state, and Level I trauma access at UF Health drives periodic high-demand contracts. Critical care and ER specialties see the strongest rates. Cost of living is among the lowest of any major Florida city, which improves net income on standard housing stipends.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do Jacksonville new grad nurses earn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New grad RNs in Jacksonville typically start at $65,000–$74,000/year ($31–$36/hr). Baptist Health and UF Health run residency programs that often include small sign-on commitments with 1–2 year service agreements. Mayo Clinic Florida is competitive for top BSN graduates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Jacksonville have night shift differentials for nurses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Night shift differentials in Jacksonville typically run $3–$6/hr above base rate. ICU and ER nights tend to receive the upper end. Weekend differentials add $2–$3/hr at most facilities. A night shift position can add $7,000–$14,000 annually over a day position at the same base.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Jacksonville compare to Orlando for nurse pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jacksonville and Orlando are closely matched, both in the $82,000–$89,000 range. Jacksonville has a lower cost of living — particularly for housing — which gives it a slight advantage in purchasing power despite similar gross salaries. Orlando\'s larger hospital market offers more employer choice.',
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
    { '@type': 'ListItem', position: 3, name: 'Jacksonville RN Salary 2026', item: 'https://nursesalaryintel.com/jacksonville-rn-salary-2026' },
  ],
};

export default function JacksonvilleRNSalaryPage() {
  return (
    <SEOPageLayout
      title="Jacksonville RN Salary 2026"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Jacksonville RN Salary 2026', href: '/jacksonville-rn-salary-2026' },
      ]}
      lastUpdated="June 2026"
      schemaTitle="Jacksonville RN Salary 2026"
      schemaDescription="Jacksonville RNs earn around $82,000–$89,000/year in 2026. Mayo Clinic Florida, UF Health, and Baptist Health pay breakdown with specialty rates and negotiation tips."
      schemaUrl="/jacksonville-rn-salary-2026"
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
        src="/images/jacksonville-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy blue scrubs standing outside a modern Jacksonville Florida hospital entrance with the St. Johns River bridge softly blurred in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 my-6 border border-outline-variant">
        <p className="text-on-surface">
          <strong>Jacksonville RN salary in 2026:</strong> around <strong>$82,000–$89,000/year</strong> — above the Florida state average of $75,990 (BLS OEWS May 2024). Mayo Clinic Florida is the standout employer, with experienced RNs reaching <strong>$100,000+</strong>. No state income tax boosts effective take-home by $5,000–$8,000/year versus higher-tax states.
        </p>
      </div>

      <p>
        Jacksonville is northeast Florida&apos;s healthcare hub, anchored by Mayo Clinic Florida — one of the nation&apos;s premier academic medical systems — alongside UF Health Jacksonville (the region&apos;s only Level I trauma center), Baptist Health, and Ascension St. Vincent. The combination of a large population base, low cost of living relative to Miami or Tampa, and strong hospital competition makes Jacksonville a financially compelling market for experienced nurses.
      </p>

      <h2>Jacksonville RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Jacksonville RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary', 'Hourly Rate']}
        rows={experienceData.map(r => [r.label, r.salary, r.hourly])}
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
      <p>
        Mayo Clinic Florida commands a significant premium over other Jacksonville systems — both in base salary and in total compensation (retirement match, CME allowance, and benefit quality). UF Health&apos;s trauma center designation drives demand for critical care nurses. Baptist Health, as the largest local system, offers the most positions and a range of shift configurations.
      </p>
      <SalaryTable
        title="Jacksonville Hospital RN Base Salary by System"
        headers={['Hospital / System', 'Base Salary Range', 'Notes']}
        rows={hospitalData.map(r => [r.label, r.salary, r.notes])}
        source="Estimated from BLS OEWS Jacksonville metro data, job posting analysis, and nurse-reported figures. Ranges reflect median-experienced RNs (3–10 yrs). Rounded to nearest $1,000."
      />

      {/* Photorealistic Inline Image */}
      <Image
        src="/images/jacksonville-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing patient records together in a bright modern ICU at a Jacksonville Florida hospital, professional clinical setting with warm overhead lighting"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>Jacksonville RN Salary by Specialty (2026)</h2>
      <p>
        Critical care, OR, and CRNA positions carry the largest premiums across Jacksonville systems. UF Health&apos;s Level I trauma center and Mayo&apos;s surgical volume keep demand high for perioperative and ICU nurses year-round.
      </p>
      <SalaryTable
        title="Jacksonville RN Salary by Specialty"
        headers={['Specialty', 'Annual Salary', 'Hourly Rate']}
        rows={specialtyData.map(r => [r.label, r.salary, r.hourly])}
        source="Derived from BLS OEWS specialty differentials + Jacksonville metro premium. Rounded to nearest $500. CRNA figures from AANA and published job postings."
      />

      <h2>How Jacksonville Compares to Florida Cities</h2>
      <p>
        Jacksonville sits in the middle of the Florida salary range — above Tallahassee, roughly tied with Orlando, and below Tampa and Miami. Its cost-of-living advantage over South Florida is meaningful: median rent for a 1-bedroom in Jacksonville runs $1,400–$1,900, versus $2,200–$2,800 in Miami proper.
      </p>
      <SalaryTable
        title="RN Salary: Jacksonville vs. Florida Cities (2026 Est.)"
        headers={['Metro Area', 'Annual Salary', 'Hourly Rate']}
        rows={cityComparisonData.map(r => [r.label, r.salary, r.hourly])}
        source="BLS OEWS May 2024 Florida statewide mean ($75,990) with metro-level adjustments. All figures estimated and rounded to nearest $500."
      />

      <h2>Night Shift Differentials and Total Compensation</h2>
      <p>
        Night shift differentials in Jacksonville run <strong>$3–$6/hr</strong> above base rate, with weekend differentials adding another $2–$3/hr. A mid-career RN at $42/hr base on a full-time night schedule can reach an effective $46–$50/hr — pushing annual compensation to $96,000–$104,000. Mayo Clinic Florida is known for competitive total compensation beyond base: a 4% retirement match, CME funding, and tuition assistance programs add meaningful value.
      </p>

      <h2>Negotiation Tips for Jacksonville Nurses</h2>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Mayo Clinic is the leverage point.</strong> Having a Mayo offer letter — or even a pending application — strengthens negotiating position at any other Jacksonville system. Baptist and Ascension have been known to respond to written Mayo comparisons.</li>
        <li><strong>UF Health trauma differential.</strong> Level I trauma experience commands pay premium. Nurses with trauma certification (TNCC) should call this out explicitly in salary conversations at any Jacksonville ER or ICU.</li>
        <li><strong>Sign-on bonuses in critical care.</strong> ICU, ER, and OR nurses at UF Health and Baptist have seen $8,000–$15,000 sign-on offers during high-demand periods. These are not always posted publicly — ask the recruiter directly.</li>
        <li><strong>No state income tax compounds quickly.</strong> A $2,000 raise in Florida is worth more net than the same raise in a state with a 5–6% income tax. Frame your negotiation on net take-home when comparing Florida offers to out-of-state positions.</li>
      </ul>

      <p>
        For a full negotiation playbook including counter-offer scripts, see the{' '}
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

      <MethodologyBox />

      <div className="text-sm text-on-surface-variant mt-8 space-y-1">
        <p><strong>Sources:</strong></p>
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses), Florida statewide and Jacksonville metro. <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>American Association of Nurse Anesthesiology (AANA), 2024 Practice Profile Survey. <a href="https://www.aana.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aana.com</a></p>
        <p>Job posting analysis: Mayo Clinic Florida, UF Health Jacksonville, Baptist Health (2024–2025 postings). Ranges rounded per site methodology.</p>
      </div>
    </SEOPageLayout>
  );
}
