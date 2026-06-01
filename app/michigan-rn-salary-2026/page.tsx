import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Michigan RN Salary 2026: Union vs. Non-Union Pay',
  description: 'Michigan RNs earn $78,280/year on average — but Detroit union nurses earn $86,000+. See MI nurse pay by city, hospital, and whether union membership changes…',
  alternates: { canonical: 'https://nursesalaryintel.com/michigan-rn-salary-2026' },
  openGraph: {
    title: 'Michigan RN Salary 2026: Union vs. Non-Union Pay Compared',
    description: 'Michigan RN salary by metro, hospital system, and union status — the numbers nurses actually want to see.',
    url: 'https://nursesalaryintel.com/michigan-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do nurses make in Michigan in 2026?',
    answer:
      'Michigan registered nurses earn a mean annual wage of $78,280 ($37.63/hour) per the latest available BLS OEWS data (May 2024, published 2025). This places Michigan slightly below the national RN mean of $89,010 — but the state mean obscures a large internal gap: Detroit-area union nurses at Michigan Medicine and Henry Ford Health regularly earn $84,000–$96,000, while rural Upper Peninsula nurses may earn $62,000–$70,000.',
  },
  {
    question: 'Do Michigan nurses have strong unions?',
    answer:
      'Yes. Michigan Nurses Association (MNA) is one of the most active state nursing unions in the Midwest. MNA represents thousands of RNs at major systems including Michigan Medicine (University of Michigan), Beaumont Health, and several regional hospitals. MNA contracts have historically secured above-market wages, defined benefit pension contributions, and workload protections. The Michigan Nurses Association is affiliated with the American Federation of Teachers (AFT), which adds broader collective bargaining resources.',
  },
  {
    question: 'How does Detroit RN pay compare to Grand Rapids?',
    answer:
      'Detroit-area (Wayne, Oakland, Macomb counties) RNs earn approximately $84,000–$92,000 at major health systems — driven by Michigan Medicine, Henry Ford Health, and Beaumont (now Corewell Health East). Grand Rapids RNs at Corewell Health West (formerly Spectrum Health) and Mercy Health earn $74,000–$82,000. The gap reflects Detroit\'s larger health system volume, specialty density, and stronger union presence in the Eastern part of the state.',
  },
  {
    question: 'Is Michigan a compact state for nurses?',
    answer:
      'Yes. Michigan joined the Nurse Licensure Compact (NLC) in January 2024. Michigan-licensed RNs with a multistate license can now practice in other compact states without obtaining a separate license. This significantly improves the economics of travel nursing for Michigan-based nurses — multistate licensure opens placements in 40+ states without additional licensing fees or wait times.',
  },
  {
    question: 'What are the best hospitals to work at in Michigan?',
    answer:
      'Michigan Medicine (University of Michigan Health) in Ann Arbor consistently ranks as one of the top-paying and highest-rated Michigan health systems for nurses — offering union wages, a defined benefit pension, and academic medical center breadth. Henry Ford Hospital in Detroit is known for competitive pay and trauma volume. Corewell Health (the merged Spectrum/Beaumont system) is the largest employer in the state by nurse headcount, with wage scales varying by campus. Beaumont Hospital, Royal Oak (now Corewell East) has historically been among the highest-paying non-academic hospitals in the Detroit metro.',
  },
];

const metroData = [
  { label: 'Ann Arbor (Michigan Medicine / union)', avgSalary: 'around $91,000', hourlyRate: 'around $44/hr — academic medical center' },
  { label: 'Detroit metro (Henry Ford, Corewell East)', avgSalary: 'around $86,000', hourlyRate: 'around $41.50/hr' },
  { label: 'Grand Rapids (Corewell West, Mercy Health)', avgSalary: 'around $76,000', hourlyRate: 'around $36.50/hr' },
  { label: 'Lansing / Mid-Michigan', avgSalary: 'around $74,000', hourlyRate: 'around $35.50/hr' },
  { label: 'Flint / Genesee County', avgSalary: 'around $71,000', hourlyRate: 'around $34/hr' },
  { label: 'Michigan state mean', avgSalary: '$78,280', hourlyRate: '$37.63/hr (BLS OEWS May 2024)' },
  { label: 'National RN average', avgSalary: '$89,010', hourlyRate: '$42.80/hr (BLS OEWS May 2024)' },
];

const unionVsNon = [
  { label: 'MNA-represented (Ann Arbor / Michigan Medicine)', avgSalary: '$88,000 – $96,000', hourlyRate: 'Step scale + pension + OT floors' },
  { label: 'Union-represented (Detroit metro systems)', avgSalary: '$82,000 – $91,000', hourlyRate: 'Strong shift differential minimums' },
  { label: 'Non-union (mid-size regional systems)', avgSalary: '$72,000 – $82,000', hourlyRate: 'Merit-based increases; no floor' },
  { label: 'Non-union (rural / critical access hospitals)', avgSalary: '$62,000 – $73,000', hourlyRate: 'Cost-of-living offset; lower volume' },
];

const specialtyData = [
  { label: 'CRNA', avgSalary: '$185,000 – $220,000', hourlyRate: 'Michigan Medicine / large ASC' },
  { label: 'ICU / Critical Care RN', avgSalary: '$86,000 – $102,000', hourlyRate: 'Level 1 trauma centers lead' },
  { label: 'OR / Perioperative RN', avgSalary: '$84,000 – $98,000', hourlyRate: 'Strong market at academic centers' },
  { label: 'Emergency Department RN', avgSalary: '$83,000 – $97,000', hourlyRate: 'Trauma volume drives pay' },
  { label: 'Labor & Delivery RN', avgSalary: '$80,000 – $93,000', hourlyRate: 'Corewell and Henry Ford lead' },
  { label: 'Med-Surg / Telemetry RN', avgSalary: '$72,000 – $83,000', hourlyRate: 'State mean baseline' },
];

export default function MichiganRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Michigan RN Salary 2026' },
      ]}
      h1="Michigan RN Salary 2026: What We Found Comparing Union and Non-Union Pay"
      lastUpdated="May 2026"
      schemaTitle="Michigan RN Salary 2026"
      schemaDescription="Michigan RN salary by metro area, union status, and hospital system — including Detroit vs. Grand Rapids pay gap analysis for 2026."
      schemaUrl="/michigan-rn-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/michigan-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy scrubs standing outside a Michigan hospital, confident professional posture, overcast Great Lakes sky in background, editorial healthcare photography, no text, no logos"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Reporting Note</p>
        <p className="text-on-surface text-base">
          Michigan nurse wages show a <strong>$20,000–$30,000 spread</strong> depending on geography
          and union status — wider than almost any other Midwestern state. This page breaks down that
          gap using BLS OEWS May 2024 state and metro data alongside publicly available collective
          bargaining agreements and job posting analysis.
        </p>
      </div>

      <p>
        Michigan&apos;s statewide RN mean of <strong>$78,280/year</strong> understates what nurses
        at the state&apos;s top health systems actually earn. An Ann Arbor RN under a Michigan Nurses
        Association contract at Michigan Medicine typically earns <strong>$88,000–$96,000</strong> —
        almost $20,000 above the state average. Meanwhile, a staff nurse at a critical access hospital
        in the Upper Peninsula may earn $62,000. The story of Michigan RN pay is largely the story
        of where you land — geographically and organizationally.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Michigan RN Salary by Metro Area</h2>
      <p>
        The Ann Arbor–Detroit corridor pays the most. Michigan Medicine (U of M Health) in Ann Arbor
        sits at the top of the state pay scale — driven by its academic medical center status and
        strong MNA contract. Detroit-metro hospitals (Henry Ford, Corewell East / Beaumont) follow.
        Grand Rapids and Lansing are meaningfully lower; rural and UP markets are a further step down.
      </p>
      <SalaryTable
        title="Michigan RN Salary by Metro Area (2026 Estimates)"
        headers={['Metro / Region', 'Estimated Annual Wage', 'Hourly / Notes']}
        rows={metroData}
        source="BLS OEWS May 2024 Michigan metropolitan area data (SOC 29-1141) + job posting analysis"
      />

      <Image
        src="/images/michigan-rn-salary-2026-comparison.png"
        alt="Bar chart comparing Michigan RN salary by metro — Ann Arbor union, Detroit, Grand Rapids, Lansing, Flint — highlighting union versus non-union pay gap with national average line"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">What the Union vs. Non-Union Gap Actually Looks Like</h2>
      <p>
        The Michigan Nurses Association (MNA) represents RNs at Michigan Medicine, Beaumont (Corewell East),
        and a growing number of regional systems. MNA contracts typically include multi-step wage
        scales that automatically increase pay with years of service, minimum shift differential
        floors (often $3–$6/hour for nights, $2–$4/hour for weekends), defined benefit pension
        contributions (rare outside of unionized settings), and mandatory overtime protections.
      </p>
      <p>
        The practical result: an MNA-represented nurse with 5 years of experience at Michigan Medicine
        typically earns <strong>$10,000–$18,000 more</strong> per year than a nurse with identical
        experience at a comparable non-union Michigan system — before overtime and differentials.
        When you factor in pension value (estimated at $3,000–$6,000/year in employer contributions),
        the total compensation gap often reaches $15,000–$24,000/year.
      </p>
      <SalaryTable
        title="Michigan RN Pay: Union vs. Non-Union Systems (2026)"
        headers={['Employment Context', 'Annual Range', 'Key Drivers']}
        rows={unionVsNon}
        source="NurseSalaryIntel job posting analysis + Michigan Nurses Association contract reference data"
      />

      <Image
        src="/images/michigan-rn-salary-2026-hospital.webp"
        alt="Two Michigan hospital nurses reviewing patient charts together in a hospital break room, collegial and relaxed, no text, no logos, editorial healthcare photography"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Michigan RN Salary by Specialty</h2>
      <p>
        Specialty premiums follow national patterns in Michigan — CRNA, ICU, and OR roles earn the
        most. What makes Michigan distinct is the concentration of specialty volume at a small number
        of systems: Michigan Medicine alone handles over 60% of the state&apos;s Level 1 trauma,
        transplant, and complex surgical volume, which concentrates high-pay specialty positions in Ann Arbor.
      </p>
      <SalaryTable
        title="Michigan RN Salary by Specialty (2026 Estimates)"
        headers={['Specialty', 'Estimated Annual Range', 'Market Notes']}
        rows={specialtyData}
        source="NurseSalaryIntel job posting analysis + BLS OEWS May 2024 Michigan specialty data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Michigan Joined the Compact in 2024 — What That Means for Pay</h2>
      <p>
        Michigan officially joined the Nurse Licensure Compact (NLC) in January 2024. For Michigan
        nurses, this means a single multistate RN license now enables practice in 40+ compact states
        — dramatically improving travel nurse economics. Michigan-licensed RNs who hold multistate
        licenses can take travel assignments in major markets (Texas, Florida, Arizona, Colorado) without
        paying additional licensing fees or waiting through separate applications. The compact also
        improves the market for <Link href="/travel-nurse-agency-comparison-2026" className="underline text-primary">travel nurse agencies</Link> recruiting from Michigan,
        which increases competition for Michigan-based nurses and supports upward wage pressure statewide.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What This Means for Your Negotiation</h2>
      <p>
        If you are in Michigan and at a non-union system: the union wage scale at comparable MNA-covered
        facilities is your most powerful negotiating benchmark. Request the posted wage range — employers
        are increasingly required to disclose this in Michigan job postings. If you have ICU, OR, or
        specialty certification, push for at minimum the state mean ($78,280) as your floor regardless
        of experience, and target the metro-area mean for your market as the offer point.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/detroit-rn-salary-2026', label: 'Detroit RN Salary 2026', desc: 'Deep dive into the Motor City RN market' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation 2026', desc: 'How to use union data in your negotiation' },
          { href: '/travel-nurse-agency-comparison-2026', label: 'Travel Nurse Agencies 2026', desc: 'Michigan compact opens new travel options' },
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Pay 2026', desc: 'MNA differential rates in context' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">→</span>
          </Link>
        ))}
      </div>

      <MethodologyBox />

      <div className="text-sm text-on-surface-variant mt-8 space-y-1">
        <p className="font-semibold">Sources</p>
        <p>
          U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), May 2024,
          published April 2025. SOC 29-1141: Registered Nurses — Michigan state and metro estimates.{' '}
          <a href="https://www.bls.gov/oes/current/oes_mi.htm" className="underline" target="_blank" rel="noopener noreferrer">
            bls.gov/oes/current/oes_mi.htm
          </a>
        </p>
        <p>
          Michigan Nurses Association (MNA), union contract and membership information.{' '}
          <a href="https://www.minurses.org/" className="underline" target="_blank" rel="noopener noreferrer">
            minurses.org
          </a>
        </p>
        <p>
          National Council of State Boards of Nursing (NCSBN), Nurse Licensure Compact.{' '}
          <a href="https://www.ncsbn.org/nurse-licensure-compact.htm" className="underline" target="_blank" rel="noopener noreferrer">
            ncsbn.org/nurse-licensure-compact.htm
          </a>
        </p>
      </div>
    </SEOPageLayout>
  );
}
