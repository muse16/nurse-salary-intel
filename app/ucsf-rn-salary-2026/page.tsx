import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import OfferBreakdownTable from '@/components/OfferBreakdownTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'UCSF RN Salary 2026: Pay, Differentials & CNA Contract',
  description:
    'UCSF Health RNs earn $155,000–$170,000/yr — among the highest in the US. CNA union contract, shift differentials ($8.50–$11/hr nights), and UCSF vs. Kaiser comparison.',
  alternates: { canonical: 'https://nursesalaryintel.com/ucsf-rn-salary-2026' },
  openGraph: {
    title: 'UCSF RN Salary 2026: Pay, Differentials & CNA Contract',
    description:
      'UCSF Health RNs earn $155,000–$170,000/yr — among the highest in the US. CNA union contract, shift differentials, and how UCSF compares to other SF-area hospitals.',
    url: 'https://nursesalaryintel.com/ucsf-rn-salary-2026',
    type: 'article',
  },
};

const offerRows = [
  { element: 'Base hourly (Step 1 — New Grad)', range: '$66 – $72/hr', notes: 'CNA union scale; Step 1 entry per current contract' },
  { element: 'Base hourly (Step 6 — ~5 yrs exp)', range: '$80 – $88/hr', notes: 'Step progression tied to years at UCSF' },
  { element: 'Base hourly (Step 10+ — Senior RN)', range: '$92 – $100/hr', notes: 'Top of CNA step scale at UCSF' },
  { element: 'Night shift differential', range: '$8.50 – $11.00/hr additional', notes: 'Among highest in the US; CNA-negotiated' },
  { element: 'Weekend differential', range: '$4.00 – $6.50/hr additional', notes: 'Stackable with night differential' },
  { element: 'Charge RN differential', range: '$3.50 – $5.00/hr additional', notes: 'Per shift when serving as charge' },
  { element: 'Preceptor differential', range: '$1.50 – $2.00/hr additional', notes: 'When training orientees' },
  { element: 'PTO accrual', range: '20–30 days/yr', notes: 'Increases with years of service' },
  { element: 'Retirement (403b match)', range: 'Up to 6% employer match', notes: 'UC Retirement Plan + supplemental options' },
  { element: 'Tuition assistance', range: 'Up to $5,250/yr', notes: 'IRS maximum for employer education benefit' },
];

const experienceData = [
  { label: 'New Grad / Step 1 (0–1 yr)', salary: '$137,000 – $150,000', hourly: '$66 – $72/hr' },
  { label: 'Early Career / Step 3–4 (2–3 yrs)', salary: '$152,000 – $165,000', hourly: '$73 – $79/hr' },
  { label: 'Mid-Career / Step 6 (5 yrs)', salary: '$166,000 – $183,000', hourly: '$80 – $88/hr' },
  { label: 'Senior / Step 8–9 (7–9 yrs)', salary: '$180,000 – $198,000', hourly: '$87 – $95/hr' },
  { label: 'Veterans / Step 10+ (10+ yrs)', salary: '$191,000 – $208,000', hourly: '$92 – $100/hr' },
];

const specialtyData = [
  { label: 'CRNA', salary: '$265,000 – $310,000', notes: 'UCSF CRNA positions; UCSF is a top training program' },
  { label: 'ICU / CVICU', salary: '$175,000 – $210,000', notes: 'Step differentials + night + charge stacking' },
  { label: 'OR / Perioperative', salary: '$170,000 – $205,000', notes: 'High surgical volume; call pay additional' },
  { label: 'ER / Emergency', salary: '$168,000 – $200,000', notes: 'Level I trauma; night/weekend stacking common' },
  { label: 'L&D / NICU', salary: '$165,000 – $195,000', notes: "UCSF Benioff Children's; high NICU acuity" },
  { label: 'Oncology / Infusion', salary: '$162,000 – $190,000', notes: 'NCI-designated cancer center; specialty differential' },
  { label: 'Med-Surg / Tele', salary: '$150,000 – $175,000', notes: 'Base step scale; lower specialty differential' },
];

const sfComparisonData = [
  { label: 'UCSF Health', salary: '$155,000 – $170,000', notes: 'CNA union; academic medical center premium' },
  { label: 'Kaiser SF (CNA)', salary: '$148,000 – $163,000', notes: 'Strong union contract; extensive benefits' },
  { label: 'Stanford Health Care', salary: '$140,000 – $158,000', notes: 'Palo Alto; CRONA union' },
  { label: 'CPMC / Sutter Health SF', salary: '$130,000 – $148,000', notes: 'SEIU-UHW represented' },
  { label: 'SF General / Zuckerberg', salary: '$128,000 – $145,000', notes: 'City/county public hospital; DPH scale' },
  { label: 'SF Metro Average', salary: '$154,000 (BLS May 2024)', notes: 'BLS OEWS San Francisco metro mean' },
];

const faqs = [
  {
    '@type': 'Question',
    name: 'How much do UCSF nurses make in 2026?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'UCSF Health RNs earn approximately $155,000–$170,000/year as a base range, with experienced and senior RNs on the CNA step scale reaching $180,000–$210,000. Night shift and specialty differentials can add $20,000–$40,000 on top of base, making UCSF one of the highest-paying hospital employers in the United States.',
    },
  },
  {
    '@type': 'Question',
    name: 'Is UCSF nursing union?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Yes. UCSF registered nurses are represented by the California Nurses Association (CNA), one of the most powerful nursing unions in the US. The CNA contract governs base pay steps, shift differentials, nurse-to-patient ratios, scheduling, and benefits. Contract negotiations happen every few years and have historically resulted in above-market increases.',
    },
  },
  {
    '@type': 'Question',
    name: 'What is the UCSF nurse shift differential?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'UCSF night shift differentials run approximately $8.50–$11.00/hr above base rate under the CNA contract — among the highest in the country. Weekend differentials add $4.00–$6.50/hr and are stackable with night pay. A senior UCSF RN working full-time nights can exceed $230,000 in total compensation.',
    },
  },
  {
    '@type': 'Question',
    name: 'How does UCSF compare to Kaiser SF for nurse pay?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'UCSF base pay is typically 5–10% above Kaiser San Francisco, driven by the academic medical center premium and UCSF\'s position as a top-ranked hospital. Kaiser SF also has a strong CNA contract, but UCSF step progression and specialty differentials tend to produce higher total compensation for experienced nurses.',
    },
  },
  {
    '@type': 'Question',
    name: 'Is it hard to get a nursing job at UCSF?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'UCSF is highly competitive. Most staff positions require RN experience (1–2+ years minimum for most units; 2+ years for critical care). New grad residency programs exist but are limited and highly selective. Strong references, UCSF clinical rotations during school, and specialty certifications (CCRN, CEN) improve candidacy significantly.',
    },
  },
  {
    '@type': 'Question',
    name: 'Do UCSF nurses get a pension?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Yes. UCSF is part of the University of California system, which offers the UC Retirement Plan (UCRP) — a defined benefit (pension) plan for employees who meet eligibility requirements. This is a significant benefit compared to most private hospital systems that offer only 401k/403b-type plans. The UC pension vests after 5 years of service.',
    },
  },
  {
    '@type': 'Question',
    name: 'What does a new grad RN earn at UCSF?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'New graduate RNs at UCSF start at approximately $66–$72/hr (Step 1 of the CNA scale), translating to $137,000–$150,000/year for full-time day shift. This is roughly double the national new grad average and reflects California\'s cost of living, mandatory nurse staffing ratios, and the CNA contract\'s strong entry-level pay floor.',
    },
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'UCSF RN Salary 2026', item: 'https://nursesalaryintel.com/ucsf-rn-salary-2026' },
  ],
};

export default function UCSFRNSalaryPage() {
  return (
    <SEOPageLayout
      title="UCSF RN Salary 2026"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'UCSF RN Salary 2026', href: '/ucsf-rn-salary-2026' },
      ]}
      lastUpdated="June 2026"
      schemaTitle="UCSF RN Salary 2026"
      schemaDescription="UCSF Health RNs earn $155,000–$170,000/year under the CNA union contract — among the highest hospital nurse salaries in the US. Full pay breakdown, step scale, differentials, and SF comparison."
      schemaUrl="/ucsf-rn-salary-2026"
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
        src="/images/ucsf-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy blue scrubs standing confidently outside the UCSF Medical Center in San Francisco with the Parnassus Heights campus visible in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 my-6 border border-outline-variant">
        <p className="text-on-surface">
          <strong>UCSF RN salary in 2026:</strong> Base pay of <strong>$155,000–$170,000/year</strong> under the California Nurses Association (CNA) union contract — with senior RNs reaching <strong>$191,000–$208,000</strong>. Night shift differentials of $8.50–$11.00/hr and weekend pay stack on top of base. UCSF is consistently one of the highest-paying hospital nursing employers in the United States.
        </p>
      </div>

      <p>
        UCSF Health — comprising UCSF Medical Center (Parnassus and Mission Bay campuses), UCSF Benioff Children&apos;s Hospitals, and affiliated sites — is a top-5 ranked academic medical center and the flagship of the University of California health system. Its nurses are represented by the California Nurses Association, which has negotiated one of the strongest step-progression contracts in the country, combining high base pay, stacked differentials, a UC pension, and mandatory 1:2 to 1:5 nurse-to-patient ratios by law.
      </p>

      <p className="text-sm text-on-surface-variant italic">
        <strong>Reporting Note:</strong> Salary figures below are derived from CNA contract step-scale data, BLS OEWS May 2024 San Francisco metro figures ($154,230 mean for RNs), and nurse-reported compensation on public forums (2024–2025). Individual pay depends on step placement, shift, specialty unit, and any applicable premiums.
      </p>

      <h2>UCSF Nurse Full Compensation Package</h2>
      <p>
        The offer breakdown below reflects the key compensation components for a staff RN at UCSF Health under the current CNA contract. Total compensation — especially for night shift experienced nurses — often exceeds what base salary figures suggest.
      </p>
      <OfferBreakdownTable rows={offerRows} />

      <Image
        src="/images/ucsf-rn-salary-2026-comparison.png"
        alt="Bar chart comparing UCSF Health RN salaries versus Kaiser SF, Stanford, CPMC, and SF General in 2026"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>UCSF RN Salary by Experience / Step Level (2026)</h2>
      <p>
        UCSF uses a step-progression system tied to years of service at UCSF (not just years as an RN). Step advancement is automatic on anniversary dates. Nurses coming from outside UCSF may receive partial step credit depending on their experience and the CNA contract terms at hire.
      </p>
      <SalaryTable
        title="UCSF RN Salary by Step / Experience"
        headers={['Step / Experience Level', 'Annual Salary (Day Shift)', 'Hourly Rate']}
        rows={experienceData.map(r => [r.label, r.salary, r.hourly])}
        source="Derived from CNA contract step scale data and BLS OEWS May 2024 San Francisco metro mean ($154,230). Day shift base only — differentials additional. Rounded to nearest $1,000."
      />

      {/* Photorealistic Inline Image */}
      <Image
        src="/images/ucsf-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing patient monitors together in a modern ICU at an academic medical center in San Francisco, professional clinical environment with blue-toned lighting"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>UCSF RN Salary by Specialty (2026)</h2>
      <p>
        Specialty differentials at UCSF stack on top of CNA step-scale base pay. ICU, OR, and ER nurses who work nights can routinely exceed $200,000 in total compensation. CRNA positions are separate from staff RN classifications and represent the highest-earning nursing roles in the UC system.
      </p>
      <SalaryTable
        title="UCSF RN Salary by Specialty (Total Compensation Estimate)"
        headers={['Specialty', 'Total Compensation (Est.)', 'Notes']}
        rows={specialtyData.map(r => [r.label, r.salary, r.notes])}
        source="Estimated from CNA step-scale base + specialty differentials + night/weekend add-ons where typical. Rounded to nearest $1,000. CRNA from AANA 2024 survey."
      />

      <h2>UCSF vs. Other San Francisco Hospitals</h2>
      <p>
        UCSF sits at the top of the San Francisco nursing salary market. Kaiser SF is the closest competitor, also CNA-represented with a strong contract. Stanford Health Care (in neighboring Palo Alto) is CRONA-represented and slightly below Kaiser on base. Non-union facilities like CPMC/Sutter pay considerably less than union counterparts.
      </p>
      <SalaryTable
        title="RN Salary: UCSF vs. San Francisco Area Hospitals (2026)"
        headers={['Hospital / System', 'Annual Salary Range', 'Notes']}
        rows={sfComparisonData.map(r => [r.label, r.salary, r.notes])}
        source="BLS OEWS May 2024 San Francisco metro ($154,230 mean) + union contract data + job posting analysis. Rounded to nearest $1,000."
      />

      <h2>Negotiation Intelligence: Getting Into UCSF</h2>
      <p>
        The CNA contract sets pay on a step scale, which limits base salary negotiation at UCSF compared to non-union employers. However, step placement at hire is negotiable — and it matters significantly. Each step represents roughly $3–$5/hr, or $6,000–$10,000/year.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Negotiate your starting step, not just your salary.</strong> If you have 5 years of ICU experience, push for Step 5 or 6 placement rather than Step 1. Each step you gain at hire compounds for your entire UCSF tenure.</li>
        <li><strong>Specialty certifications improve step credit.</strong> CCRN, CEN, and other specialty certifications can support higher step placement requests. Document these during the hiring process.</li>
        <li><strong>Night shift is the largest total-comp lever.</strong> A Step 6 RN on nights earns $25,000–$35,000/year more than the same step on days. If you can tolerate nights, UCSF night pay is among the best in the country.</li>
        <li><strong>The UC pension is a real number.</strong> Most private-sector nurses don&apos;t have pension access. A UCSF RN vesting into UCRP after 5 years is building a retirement asset worth $500,000–$1,000,000+ over a 20-year career, on top of salary. Factor this into any comparison with private hospitals offering only 401k matches.</li>
        <li><strong>Internal transfer is easier than external hire.</strong> Nurses already in the UC system have priority for UCSF transfers. If UCSF is the goal, consider starting at a UC Davis, UC Irvine, or UC San Diego facility first.</li>
      </ul>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/san-francisco-rn-salary-2026', label: 'San Francisco RN Salary 2026', desc: 'Full SF metro overview across all major systems' },
          { href: '/california-rn-salary-2026', label: 'California RN Salary 2026', desc: 'Statewide breakdown — why CA leads the nation' },
          { href: '/hca-rn-salary-2026', label: 'HCA RN Salary 2026', desc: "How the largest for-profit system compares to UCSF" },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'Step negotiation scripts + CNA contract context' },
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
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses), San Francisco–Oakland–Hayward metro ($154,230 mean). <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>California Nurses Association, CNA/UCSF collective bargaining agreement (current contract). <a href="https://www.calnurses.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">calnurses.org</a></p>
        <p>American Association of Nurse Anesthesiology (AANA), 2024 Practice Profile Survey. <a href="https://www.aana.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aana.com</a></p>
      </div>
    </SEOPageLayout>
  );
}
