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
      'UCSF Health RNs earn $155,000–$170,000/yr — among the highest in the US. CNA union contract, shift differentials, and UCSF vs. Kaiser comparison.',
    url: 'https://nursesalaryintel.com/ucsf-rn-salary-2026',
  },
};

const sources = [
  { title: 'BLS OEWS May 2024 — San Francisco–Oakland–Hayward MSA ($154,230 RN mean)', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'California Nurses Association — CNA/UCSF Collective Bargaining Agreement', url: 'https://www.calnurses.org' },
  { title: 'AANA 2024 Practice Profile Survey', url: 'https://www.aana.com' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };

const methodology =
  'UCSF salary figures are derived from BLS OEWS May 2024 San Francisco–Oakland–Hayward metro mean ($154,230) and CNA contract step-scale data. Step-specific estimates are approximations based on publicly available contract information and nurse-reported compensation. Individual pay depends on step placement, shift, specialty unit, and applicable premiums. All figures are estimates — verify with UCSF HR.';

const offerRows = [
  { element: 'Base hourly (Step 1 — New Grad)', range: 'Around $66–$72/hr', notes: 'CNA union scale; Step 1 entry per current contract' },
  { element: 'Base hourly (Step 6 — ~5 yrs exp)', range: 'Around $80–$88/hr', notes: 'Step progression tied to years at UCSF' },
  { element: 'Base hourly (Step 10+ — Senior RN)', range: 'Around $92–$100/hr', notes: 'Top of CNA step scale at UCSF' },
  { element: 'Night shift differential', range: 'Around $8.50–$11.00/hr additional', notes: 'Among highest in the US; CNA-negotiated' },
  { element: 'Weekend differential', range: 'Around $4.00–$6.50/hr additional', notes: 'Stackable with night differential' },
  { element: 'Charge RN differential', range: 'Around $3.50–$5.00/hr additional', notes: 'Per shift when serving as charge' },
  { element: 'PTO accrual', range: '20–30 days/yr', notes: 'Increases with years of service' },
  { element: 'Retirement (UC Pension)', range: 'Defined benefit (UCRP)', notes: 'Vests after 5 years; significant long-term value' },
  { element: 'Tuition assistance', range: 'Up to $5,250/yr', notes: 'IRS maximum for employer education benefit' },
];

const experienceData = [
  { label: 'New Grad / Step 1', avgSalary: 'Around $137,000–$150,000/yr', hourlyRate: '~$66–$72/hr (day shift)' },
  { label: 'Step 3–4 (~2–3 yrs)', avgSalary: 'Around $152,000–$165,000/yr', hourlyRate: '~$73–$79/hr' },
  { label: 'Step 6 (~5 yrs)', avgSalary: 'Around $166,000–$183,000/yr', hourlyRate: '~$80–$88/hr' },
  { label: 'Step 8–9 (~7–9 yrs)', avgSalary: 'Around $180,000–$198,000/yr', hourlyRate: '~$87–$95/hr' },
  { label: 'Step 10+ (10+ yrs)', avgSalary: 'Around $191,000–$208,000/yr', hourlyRate: '~$92–$100/hr' },
];

const specialtyData = [
  { label: 'CRNA', avgSalary: 'Around $265,000–$310,000/yr', note: 'UCSF CRNA program; top APRN compensation nationally' },
  { label: 'ICU / CVICU', avgSalary: 'Around $175,000–$210,000/yr', note: 'Step differentials + night + charge stacking' },
  { label: 'OR / Perioperative', avgSalary: 'Around $170,000–$205,000/yr', note: 'High surgical volume; call pay additional' },
  { label: 'ER / Emergency', avgSalary: 'Around $168,000–$200,000/yr', note: 'Level I trauma; night/weekend stacking common' },
  { label: 'L&D / NICU', avgSalary: 'Around $165,000–$195,000/yr', note: "UCSF Benioff Children's; high NICU acuity" },
  { label: 'Med-Surg / Tele', avgSalary: 'Around $150,000–$175,000/yr', note: 'Base step scale; lower specialty differential' },
];

const sfComparisonData = [
  { label: 'UCSF Health', avgSalary: 'Around $155,000–$170,000/yr', note: 'CNA union; academic medical center premium' },
  { label: 'Kaiser SF (CNA)', avgSalary: 'Around $148,000–$163,000/yr', note: 'Strong union contract; extensive benefits' },
  { label: 'Stanford Health Care', avgSalary: 'Around $140,000–$158,000/yr', note: 'Palo Alto; CRONA union' },
  { label: 'CPMC / Sutter Health SF', avgSalary: 'Around $130,000–$148,000/yr', note: 'SEIU-UHW represented' },
  { label: 'SF Metro Mean (BLS May 2024)', avgSalary: '$154,230/yr', note: 'BLS OEWS San Francisco MSA mean' },
];

const faqs = [
  {
    question: 'How much do UCSF nurses make in 2026?',
    answer:
      'UCSF Health RNs earn approximately $155,000–$170,000/year as a base range, with experienced and senior RNs on the CNA step scale reaching $180,000–$210,000. Night shift and specialty differentials can add $20,000–$40,000 on top of base, making UCSF one of the highest-paying hospital employers in the United States.',
  },
  {
    question: 'Is UCSF nursing union?',
    answer:
      'Yes. UCSF registered nurses are represented by the California Nurses Association (CNA), one of the most powerful nursing unions in the US. The CNA contract governs base pay steps, shift differentials, nurse-to-patient ratios, scheduling, and benefits.',
  },
  {
    question: 'What is the UCSF nurse shift differential?',
    answer:
      'UCSF night shift differentials run approximately $8.50–$11.00/hr above base rate under the CNA contract — among the highest in the country. Weekend differentials add $4.00–$6.50/hr and are stackable with night pay. A senior UCSF RN working full-time nights can exceed $230,000 in total compensation.',
  },
  {
    question: 'How does UCSF compare to Kaiser SF for nurse pay?',
    answer:
      'UCSF base pay is typically 5–10% above Kaiser San Francisco, driven by the academic medical center premium. Kaiser SF also has a strong CNA contract, but UCSF step progression and specialty differentials tend to produce higher total compensation for experienced nurses.',
  },
  {
    question: 'Is it hard to get a nursing job at UCSF?',
    answer:
      'UCSF is highly competitive. Most staff positions require 1–2+ years of RN experience. New grad residency programs exist but are limited and highly selective. Strong references, UCSF clinical rotations, and specialty certifications (CCRN, CEN) improve candidacy significantly.',
  },
  {
    question: 'Do UCSF nurses get a pension?',
    answer:
      'Yes. UCSF is part of the UC system, which offers the UC Retirement Plan (UCRP) — a defined benefit pension for employees who meet eligibility requirements. This is a significant benefit compared to most private hospitals that offer only 401k/403b plans. The UC pension vests after 5 years of service.',
  },
  {
    question: 'What does a new grad RN earn at UCSF?',
    answer:
      "New graduate RNs at UCSF start at approximately $66–$72/hr (Step 1), translating to $137,000–$150,000/year for full-time day shift. This is roughly double the national new grad average and reflects California's cost of living, mandatory nurse staffing ratios, and the CNA contract's strong entry-level pay floor.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'UCSF RN Salary 2026', item: 'https://nursesalaryintel.com/ucsf-rn-salary-2026/' },
  ],
};

export default function UCSFRNSalaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Salary Guides', href: '/blog' },
          { label: 'UCSF RN Salary 2026' },
        ]}
        h1="UCSF RN Salary 2026: CNA Contract, Step Scale & Differentials"
        lastUpdated="June 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="UCSF RN Salary 2026"
        schemaDescription="UCSF Health RNs earn $155,000–$170,000/year under the CNA union contract — among the highest hospital nurse salaries in the US. Full step scale, differentials, and SF comparison."
        schemaUrl="/ucsf-rn-salary-2026"
        datePublished="2026-06-01"
        faqs={faqs}
      >
        <Image
          src="/images/ucsf-rn-salary-2026-hero.webp"
          alt="Registered nurse in navy blue scrubs standing confidently outside a large modern academic medical center in San Francisco with a coastal city hillside in the soft background"
          width={1200}
          height={630}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="rounded-xl w-full"
          priority
        />

        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            UCSF Health RNs earn <strong>$155,000–$170,000/year</strong> under the California Nurses Association (CNA) union contract — with senior RNs reaching <strong>$191,000–$208,000</strong>. Night shift differentials of $8.50–$11.00/hr stack on top of base. UCSF is consistently one of the highest-paying hospital nursing employers in the United States.
          </p>
        </div>

        <p>
          UCSF Health — comprising UCSF Medical Center (Parnassus and Mission Bay campuses), UCSF Benioff Children&apos;s Hospitals, and affiliated sites — is a top-5 ranked academic medical center. Its nurses are represented by the California Nurses Association, which has negotiated one of the strongest step-progression contracts in the country, combining high base pay, stacked differentials, a UC pension, and mandatory nurse-to-patient ratios.
        </p>

        <p className="text-sm text-on-surface-variant italic">
          <strong>Reporting Note:</strong> Figures below are derived from CNA contract step-scale data, BLS OEWS May 2024 San Francisco metro figures ($154,230 mean), and nurse-reported compensation from public forums (2024–2025). Individual pay depends on step placement, shift, and specialty unit.
        </p>

        <h2>UCSF Nurse Full Compensation Package</h2>
        <OfferBreakdownTable employer="UCSF Health" city="San Francisco, CA" asOf="2026 Est." rows={offerRows} />

        <Image
          src="/images/ucsf-rn-salary-2026-comparison.png"
          alt="Bar chart comparing UCSF Health RN salaries versus Kaiser SF, Stanford, CPMC, and the San Francisco metro average in 2026"
          width={800}
          height={450}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>UCSF RN Salary by Step / Experience (2026)</h2>
        <SalaryTable
          title="UCSF RN Salary by Step / Experience"
          headers={['Step / Experience Level', 'Annual Salary (Day Shift)', 'Hourly Rate']}
          rows={experienceData}
          source="Derived from CNA contract step scale data and BLS OEWS May 2024 San Francisco metro mean ($154,230). Day shift base only — differentials additional. Rounded to nearest $1,000."
        />

        <Image
          src="/images/ucsf-rn-salary-2026-hospital.webp"
          alt="Two nurses in scrubs reviewing patient monitors in a modern ICU at an academic medical center in San Francisco, professional clinical environment with blue-toned lighting"
          width={600}
          height={800}
          sizes="(max-width: 1024px) 100vw, 448px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>UCSF RN Salary by Specialty (2026)</h2>
        <SalaryTable
          title="UCSF RN Salary by Specialty (Total Compensation Estimate)"
          headers={['Specialty', 'Total Compensation (Est.)', 'Notes']}
          rows={specialtyData}
          source="Estimated from CNA step-scale base + specialty differentials + night/weekend add-ons where typical. Rounded to nearest $1,000. CRNA from AANA 2024 survey."
        />

        <h2>UCSF vs. Other San Francisco Hospitals</h2>
        <SalaryTable
          title="RN Salary: UCSF vs. San Francisco Area Hospitals (2026)"
          headers={['Hospital / System', 'Annual Salary Range', 'Notes']}
          rows={sfComparisonData}
          source="BLS OEWS May 2024 San Francisco metro ($154,230 mean) + union contract data + job posting analysis. Rounded to nearest $1,000."
        />

        <h2>Negotiation at UCSF: Step Placement Is Everything</h2>
        <p>
          The CNA contract limits base salary negotiation, but step placement at hire is negotiable and matters significantly. Each step represents roughly $3–$5/hr, or $6,000–$10,000/year.
        </p>
        <ul>
          <li><strong>Negotiate your starting step.</strong> If you have 5 years of ICU experience, push for Step 5 or 6 placement rather than Step 1. Each step gained at hire compounds for your entire UCSF tenure.</li>
          <li><strong>Night shift is the largest total-comp lever.</strong> A Step 6 RN on nights earns $25,000–$35,000/year more than the same step on days.</li>
          <li><strong>Factor in the UC pension.</strong> A UCSF RN vesting into UCRP after 5 years builds a retirement asset worth $500,000–$1,000,000+ over a 20-year career. Most private hospitals offer only 401k matches.</li>
          <li><strong>Internal transfers are easier.</strong> Starting at another UC campus (Davis, Irvine, San Diego) can make UCSF transfer more accessible than external hire.</li>
        </ul>

        <h2>Related Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { href: '/san-francisco-rn-salary-2026', label: 'San Francisco RN Salary 2026', desc: 'Full SF metro overview across all major systems' },
            { href: '/california-rn-salary-2026', label: 'California RN Salary 2026', desc: 'Statewide breakdown — why CA leads the nation' },
            { href: '/hca-rn-salary-2026', label: 'HCA RN Salary 2026', desc: 'How the largest for-profit system compares to UCSF' },
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
      </SEOPageLayout>
    </>
  );
}
