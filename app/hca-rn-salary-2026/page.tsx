import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import OfferBreakdownTable from '@/components/OfferBreakdownTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'HCA RN Salary 2026: Full Pay Breakdown by Market',
  description:
    'HCA nurses earn $72,000–$104,000/year depending on market and specialty. See base pay, shift differentials, sign-on bonuses, and how HCA compares to Ascension and Tenet.',
  alternates: { canonical: 'https://nursesalaryintel.com/hca-rn-salary-2026' },
  openGraph: {
    title: 'HCA RN Salary 2026: What the Largest Hospital System Pays',
    description: 'HCA Healthcare RN pay breakdown — base salary, shift differential, sign-on bonuses, and total comp by market.',
    url: 'https://nursesalaryintel.com/hca-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do HCA nurses make in 2026?',
    answer:
      'HCA Healthcare RN base salaries range from approximately $32–$50/hour depending on market, specialty, and experience — translating to roughly $66,000–$104,000/year for full-time staff. High-cost HCA markets (Austin TX, Nashville TN, Miami FL, Las Vegas NV) pay toward the top of that range; rural and smaller-metro HCA facilities (Midwest, mountain west) pay toward the lower end. Night shift differentials of $4–$7/hour and weekend differentials of $3–$5/hour are common additions.',
  },
  {
    question: 'Does HCA pay well compared to other hospital systems?',
    answer:
      'HCA pays competitively for a large for-profit system — but typically 8–15% below nonprofit academic medical centers (Mayo Clinic, Kaiser Permanente) and below union-covered public hospitals. Within its peer group (Tenet Healthcare, Ascension, CommonSpirit), HCA is generally on par or slightly above. HCA\'s pay is strongest in markets where it faces direct competition from other large systems — Nashville, Austin, Miami, and Las Vegas.',
  },
  {
    question: 'What is HCA\'s night shift differential for nurses?',
    answer:
      'Based on publicly available job postings and nurse-reported figures, HCA Healthcare typically pays a night shift differential of $4.00–$7.00/hour above base for RNs on 7pm–7am or equivalent overnight shifts. Weekend differential is typically $3.00–$5.00/hour, and weekend nights are often stackable (both differentials apply). These rates are consistent across most HCA markets, though specific amounts are negotiated at the facility level and disclosed during the hiring process.',
  },
  {
    question: 'Does HCA offer sign-on bonuses for nurses?',
    answer:
      'Yes. HCA offers sign-on bonuses across many markets, typically ranging from $5,000 for medical-surgical positions to $15,000–$25,000 for critical care, OR, and L&D specialty roles in high-demand markets. Sign-on bonuses typically vest over 2 years (50% at 6 months, remaining 50% at 24 months of service). If you leave before the vesting cliff, you may owe back a prorated portion — a term known as a clawback. Always confirm vesting terms in writing before signing.',
  },
  {
    question: 'Is HCA a good place to work as a nurse?',
    answer:
      'HCA is the largest for-profit hospital system in the US with 180+ hospitals across 20 states — giving it strong resources, a nationwide transfer program, and internal mobility options. Nurse satisfaction ratings are mixed: HCA facilities in high-competition markets invest more in compensation and staffing; smaller or rural HCA hospitals receive more varied reviews. Nurse staffing ratios are set at the facility level and vary. HCA does not have a systemwide mandatory ratio policy, unlike California where ratios are mandated by law.',
  },
  {
    question: 'How does HCA compare to travel nursing pay?',
    answer:
      'HCA staff nurse pay typically runs 20–40% below equivalent travel nurse contract pay, even within the same facility. HCA has addressed this by developing its own internal staffing pool (Galen Health and internal per-diem programs), but the pay gap between staff and travel nurses at HCA facilities remains a frequent point of contention. Some HCA markets have introduced retention bonuses and pay premium programs to narrow this gap.',
  },
];

const offerRows = [
  { element: 'Base hourly (Med-Surg / Tele)', range: '$32 – $42/hr', notes: 'Market-dependent; Austin/Nashville top of range' },
  { element: 'Base hourly (ICU / ED / OR)', range: '$38 – $50/hr', notes: 'Specialty premium above base' },
  { element: 'Night shift differential', range: '$4.00 – $7.00/hr additional', notes: 'Stackable with weekend diff' },
  { element: 'Weekend differential', range: '$3.00 – $5.00/hr additional', notes: 'Sat/Sun; stackable with night' },
  { element: 'Sign-on bonus (Med-Surg)', range: '$5,000 – $10,000', notes: '2-year vesting; clawback if early exit' },
  { element: 'Sign-on bonus (ICU / OR / ED)', range: '$15,000 – $25,000', notes: 'High-demand markets; verify per facility' },
  { element: 'PTO accrual', range: '15–20 days/yr (new hire)', notes: 'Increases with tenure; 25+ days at 10 yrs' },
  { element: 'Tuition reimbursement', range: '$5,250/yr (IRS limit)', notes: 'RN-to-BSN, MSN, specialty cert eligible' },
  { element: '401(k) match', range: '100% of first 3–4% deferred', notes: 'Immediate vesting at most HCA facilities' },
];

const marketData = [
  { label: 'Nashville, TN (HCA HQ market)', avgSalary: '$82,000 – $98,000', hourlyRate: 'Flagship market; strong competition' },
  { label: 'Austin, TX', avgSalary: '$86,000 – $104,000', hourlyRate: 'High COL; top TX HCA market' },
  { label: 'Miami / South Florida', avgSalary: '$82,000 – $99,000', hourlyRate: 'Large HCA presence in FL' },
  { label: 'Las Vegas, NV', avgSalary: '$84,000 – $100,000', hourlyRate: 'Strong specialty demand' },
  { label: 'Kansas City / Midwest', avgSalary: '$72,000 – $86,000', hourlyRate: 'Lower COL; mid-range pay' },
  { label: 'Richmond, VA', avgSalary: '$74,000 – $89,000', hourlyRate: 'HCA presence in Henrico area' },
];

const comparisonData = [
  { label: 'HCA Healthcare (national)', avgSalary: '$72,000 – $104,000', hourlyRate: 'For-profit; 180+ hospitals' },
  { label: 'Ascension Health', avgSalary: '$74,000 – $102,000', hourlyRate: 'Catholic nonprofit; 140+ hospitals' },
  { label: 'CommonSpirit Health', avgSalary: '$76,000 – $105,000', hourlyRate: 'Nonprofit; 140+ hospitals' },
  { label: 'Tenet Healthcare', avgSalary: '$70,000 – $98,000', hourlyRate: 'For-profit; smaller than HCA' },
  { label: 'Kaiser Permanente', avgSalary: '$88,000 – $130,000', hourlyRate: 'Integrated; union-heavy; CA focus' },
  { label: 'National RN average', avgSalary: '$89,010', hourlyRate: '$42.80/hr (BLS OEWS May 2024)' },
];

export default function HCARNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nurse Salary by Hospital', href: '/nurse-salary-by-hospital' },
        { label: 'HCA RN Salary 2026' },
      ]}
      h1="HCA RN Salary 2026: Full Pay Breakdown for the Largest Hospital System in the US"
      lastUpdated="May 2026"
      schemaTitle="HCA RN Salary 2026"
      schemaDescription="HCA Healthcare RN salary breakdown — base pay, shift differentials, sign-on bonuses, and market comparisons across HCA's top nurse markets."
      schemaUrl="/hca-rn-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/hca-rn-salary-2026-hero.webp"
        alt="Registered nurse in scrubs at a hospital nurse station reviewing documentation, modern hospital interior, professional and focused, editorial healthcare photography, no text, no logos"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          HCA Healthcare RNs earn <strong>$32–$50/hour base</strong> ($66,000–$104,000/year) depending
          on market and specialty. Night shift adds <strong>$4–$7/hr</strong>; weekend adds{' '}
          <strong>$3–$5/hr</strong>. Sign-on bonuses reach <strong>$25,000</strong> for critical care
          in high-demand markets. HCA pays on par with Ascension and Tenet — but 15–25% below
          Kaiser Permanente for comparable experience.
        </p>
      </div>

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-4 mb-4">
        <p className="text-xs text-on-surface-variant">
          <strong>Reporting note:</strong> HCA does not publish a systemwide pay scale. The figures below are
          compiled from publicly available job postings on HCA Careers, nurse-reported data, and
          HCA market-specific salary information. Individual offers vary by facility, specialty, shift,
          and experience. Verify current rates directly with the hiring facility.
        </p>
      </div>

      <OfferBreakdownTable
        employer="HCA Healthcare"
        city="System-wide (varies by market)"
        asOf="May 2026"
        rows={offerRows}
      />

      <p>
        HCA Healthcare is the largest private hospital operator in the United States — 180+ hospitals,
        2,000+ ambulatory surgery sites, and a nurse workforce of over 90,000 RNs across 20 states.
        If you are job-hunting as a nurse, there is a reasonable chance HCA will appear in your results
        regardless of where you live. Understanding how HCA structures pay — and where the leverage
        points are — is worth the time.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">HCA Nurse Pay by Top Markets</h2>
      <p>
        HCA&apos;s pay is most competitive in markets where it faces direct competition from other
        large systems. Nashville (HCA&apos;s home market), Austin, Miami, and Las Vegas are where
        HCA invests most heavily in compensation to retain staff. Midwest and rural markets
        pay toward the lower end of the range.
      </p>
      <SalaryTable
        title="HCA RN Salary by Market (2026 Estimates)"
        headers={['Market', 'Estimated Annual RN Pay', 'Notes']}
        rows={marketData}
        source="NurseSalaryIntel HCA Careers job posting analysis + BLS OEWS May 2024 metro area data"
      />

      <Image
        src="/images/hca-rn-salary-2026-comparison.png"
        alt="Bar chart comparing RN base pay at major US hospital systems — HCA Healthcare, Ascension, CommonSpirit, Tenet, Kaiser Permanente — with national average line"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">HCA vs. Major Competing Hospital Systems</h2>
      <p>
        Within the for-profit hospital peer group (HCA, Tenet, Universal Health Services), HCA
        is generally the highest or second-highest payer — reflecting its market share and ability
        to spread overhead costs across a larger system. Compared to large nonprofit systems
        (Ascension, CommonSpirit), HCA pays comparably. The widest gap is between HCA and Kaiser
        Permanente — where union contracts and California-specific wage scales push total compensation
        well above what HCA offers in most markets.
      </p>
      <SalaryTable
        title="RN Pay — HCA vs. Comparable Hospital Systems"
        headers={['System', 'Estimated Annual RN Range', 'Context']}
        rows={comparisonData}
        source="NurseSalaryIntel job posting analysis + BLS OEWS May 2024 national RN mean"
      />

      <Image
        src="/images/hca-rn-salary-2026-hospital.webp"
        alt="Two nurses collaborating at a modern hospital nursing station, reviewing information together, professional setting, overhead fluorescent and natural light, no text, no logos"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">HCA Night Shift Differential: What the Numbers Show</h2>
      <p>
        HCA&apos;s night shift differential — one of the most-searched questions on this topic —
        runs <strong>$4.00–$7.00/hour above base</strong> across most HCA markets based on
        publicly available job postings. For a nurse earning $40/hour base on nights, that adds
        $8,320–$14,560 per year at full-time hours. Weekend differential ($3–$5/hr) is stackable,
        meaning a weekend night shift earns base + night diff + weekend diff simultaneously.
        At the high end of both differentials ($7/hr night + $5/hr weekend), a weekend overnight
        shift can pay <strong>$52/hour effective</strong> on a $40 base.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">HCA Sign-On Bonus: Vesting Terms to Know</h2>
      <p>
        HCA sign-on bonuses range from $5,000 (Med-Surg, general acute care) to $25,000 (ICU, OR,
        ED in high-demand markets). The standard vesting structure is a 2-year commitment, with a
        clawback provision — if you leave before the commitment expires, you repay a prorated share
        of the bonus. Confirm these terms in writing at offer stage: the specific vesting schedule
        and clawback terms should appear in your offer letter or a separate bonus agreement.
        Some HCA markets have moved to 50% at 6 months / 50% at 24 months structures, but
        this varies by facility and year.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiation Intelligence: What Moves at HCA</h2>
      <p>
        HCA&apos;s base pay is more negotiable than many nurses assume — especially for specialty
        roles in competitive markets. Key leverage points: a competing offer from a local system
        (even from Tenet or an independent hospital); specialty certifications (CCRN, CEN, CNOR)
        that HCA cannot easily hire around; and willingness to work night or weekend shifts, which
        HCA actively needs to fill. Sign-on bonus amounts are often negotiable upward by $2,000–$5,000
        in high-demand markets without requiring manager escalation. Ask for relocation assistance
        ($2,000–$5,000) if you are moving to take the position — this is often available but not
        volunteered unless requested.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/bayhealth-rn-salary-2026', label: 'Bayhealth RN Salary 2026', desc: 'Another hospital offer breakdown' },
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Pay 2026', desc: 'Differential rates in full detail' },
          { href: '/nurse-sign-on-bonus-guide-2026', label: 'Sign-On Bonus Guide 2026', desc: 'Vesting terms, clawbacks, and negotiation' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to negotiate your HCA offer' },
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
          published April 2025. SOC 29-1141: Registered Nurses, national and metro-level data.{' '}
          <a href="https://www.bls.gov/oes/current/oes291141.htm" className="underline" target="_blank" rel="noopener noreferrer">
            bls.gov/oes/current/oes291141.htm
          </a>
        </p>
        <p>
          HCA Healthcare Careers, job postings accessed April–May 2026.{' '}
          <a href="https://careers.hcahealthcare.com/" className="underline" target="_blank" rel="noopener noreferrer">
            careers.hcahealthcare.com
          </a>
        </p>
        <p>
          NurseSalaryIntel job posting analysis: HCA facilities across 12 markets, April–May 2026.
          Individual salaries compiled from publicly disclosed pay ranges in job postings as required
          by applicable state pay transparency laws.
        </p>
      </div>
    </SEOPageLayout>
  );
}
