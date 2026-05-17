import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Shift Differential Nurse Pay 2026: What Night & Weekend Shifts Add',
  description:
    'Night shift differential adds $4–$12/hr to RN pay — $8,000–$25,000/year for full-time night nurses. See rates by hospital system, specialty, and how to negotiate your differential.',
  alternates: { canonical: 'https://nursesalaryintel.com/shift-differential-nurse-pay-2026' },
  openGraph: {
    title: 'Shift Differential Nurse Pay 2026: What Night & Weekend Shifts Actually Add to Your Salary',
    description: 'Night differential adds $8,000–$25,000/year. See rates by system, specialty, and how to negotiate it into your offer.',
    url: 'https://nursesalaryintel.com/shift-differential-nurse-pay-2026',
  },
};

const faqs = [
  {
    question: 'How much is shift differential for nurses in 2026?',
    answer:
      'Night shift differential for nurses typically runs $4–$12/hr above base pay, depending on the hospital system and market. At the low end (community hospitals in lower-cost markets), $3–$4/hr is common. At the high end (major academic centers in high-cost markets), $8–$12/hr is not unusual. Weekend differentials typically run $2–$5/hr, often stacked on top of night differential for weekend nights.',
  },
  {
    question: 'How much does night shift add to an RN annual salary?',
    answer:
      'At 36 hours/week for 50 weeks/year, a night shift differential of $5/hr adds $9,000/year to gross pay. At $8/hr, that\'s $14,400/year. At $12/hr (top market rates), it\'s $21,600/year. Night shift is the single largest salary lever most staff nurses have available to them outside of a specialty change.',
  },
  {
    question: 'Is shift differential negotiable?',
    answer:
      'In most systems, the base differential rate is set by policy or union contract and is not individually negotiable. However, which shifts you are scheduled for — and whether night/weekend differential applies to your orientation period — is often negotiable at hire. Some systems also allow experienced hires to negotiate a higher step on the pay scale that applies differential calculations from a higher base.',
  },
  {
    question: 'Do travel nurses get shift differential?',
    answer:
      'Yes, most travel nurse contracts include shift differential for nights and weekends, though the structure differs from staff positions. Travel differential is often blended into the total package rate. Ask your recruiter to break out the differential component explicitly — some agencies bury it in the stipend structure in ways that affect your taxable income calculation.',
  },
  {
    question: 'What is the difference between night differential and weekend differential?',
    answer:
      'Night differential applies to shifts (or portions of shifts) worked during overnight hours — typically 7pm–7am, though the exact window varies by system. Weekend differential applies to shifts worked on Saturday and Sunday, typically defined as the 7pm Friday – 7am Monday window. Most hospitals pay both simultaneously for weekend nights, making those shifts the highest-paying in the schedule.',
  },
];

const differentialRates = [
  { label: 'Community hospital (low-cost market)', avgSalary: '$3.00 – $5.00/hr', hourlyRate: '$5,400 – $9,000/yr (36hr/wk)' },
  { label: 'Regional medical center (mid market)', avgSalary: '$4.50 – $7.00/hr', hourlyRate: '$8,100 – $12,600/yr' },
  { label: 'Major academic / Level 1 (high market)', avgSalary: '$6.00 – $10.00/hr', hourlyRate: '$10,800 – $18,000/yr' },
  { label: 'Union contracts (CA, NY, WA, OR)', avgSalary: '$8.00 – $12.00/hr', hourlyRate: '$14,400 – $21,600/yr' },
  { label: 'Weekend differential (any shift)', avgSalary: '$2.00 – $5.00/hr', hourlyRate: 'Stacked on night diff for Sat/Sun nights' },
];

const systemExamples = [
  { label: 'OHSU (Portland, OR)', avgSalary: '$8.50 – $11.00/hr night', hourlyRate: 'Union CBA; weekend adds $4.00' },
  { label: 'UW Medical Center (Seattle, WA)', avgSalary: '$8.00 – $10.50/hr night', hourlyRate: 'WSNA union contract' },
  { label: 'Cleveland Clinic (OH)', avgSalary: '$3.50 – $6.50/hr night', hourlyRate: 'Non-union; policy-based' },
  { label: 'Johns Hopkins (Baltimore, MD)', avgSalary: '$4.50 – $7.00/hr night', hourlyRate: 'Varies by unit and shift window' },
  { label: 'HCA Healthcare (multiple)', avgSalary: '$3.00 – $5.50/hr night', hourlyRate: 'Varies significantly by market' },
  { label: 'Kaiser Permanente (CA/OR/WA)', avgSalary: '$7.00 – $12.00/hr night', hourlyRate: 'Union; among highest in country' },
];

const specialtyDiffStack = [
  { label: 'Med-Surg nights (36hr/wk, $5/hr diff)', avgSalary: '+$9,000/yr', hourlyRate: 'Differential only' },
  { label: 'ICU nights (36hr/wk, $5/hr diff + $4/hr ICU)', avgSalary: '+$16,200/yr', hourlyRate: 'Night + specialty stacked' },
  { label: 'ICU weeknight (Sat/Sun, $5/hr + $3/hr wknd)', avgSalary: '+$20,200/yr', hourlyRate: 'Night + specialty + weekend' },
  { label: 'Travel nurse nights (blended, $8/hr diff)', avgSalary: '+$14,400/yr', hourlyRate: 'Contract varies; verify taxable split' },
];

export default function ShiftDifferentialNursePay2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/nurse-salary-negotiation-guide-2026' },
        { label: 'Shift Differential Nurse Pay 2026' },
      ]}
      h1="Shift Differential Nurse Pay 2026: How Much Night and Weekend Shifts Actually Add to RN Salary"
      lastUpdated="May 2026"
      schemaTitle="Shift Differential Nurse Pay 2026"
      schemaDescription="How night shift differential affects total RN compensation in 2026 — rates by hospital system, specialty, and how to negotiate."
      schemaUrl="/shift-differential-nurse-pay-2026"
      datePublished="2026-05-14"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">The Numbers Up Front</p>
        <p className="text-on-surface text-base">
          Night shift differential adds <strong>$4–$12/hr</strong> to base RN pay depending on the system and
          market. For a full-time night nurse working 36 hours/week, that is{' '}
          <strong>$7,200–$21,600/year</strong> in additional gross pay — before stacking specialty differential
          or weekend premium. Shift differential is the most overlooked lever in nurse compensation, and it is
          completely invisible in the headline salary numbers most nurses compare.
        </p>
      </div>

      <Image
        src="/images/shift-differential-nurse-pay-2026-hero_compressed.webp"
        alt="Registered nurse in scrubs working a night shift at a hospital nursing station with dimmed lighting and a quiet hallway behind"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        When nurses compare salaries — between jobs, between cities, between Reddit posts — they almost always
        compare base pay. That comparison misses the most variable and often most significant component of actual
        take-home pay: shift differential. A nurse earning $72,000 base on nights with a $7/hr differential
        is actually earning $84,600 in gross annual pay. A nurse at a higher-paying hospital earning $78,000
        base on days is earning $78,000. The night nurse is earning more — but the base salary comparison
        makes it look the opposite.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Differential Rates by Hospital Type (2026)</h2>
      <SalaryTable
        title="Nurse Night Shift Differential Rates by Hospital Category"
        headers={['Hospital Type', 'Differential Rate', 'Annual Impact (36hr/wk)']}
        rows={differentialRates}
        source="NurseSalaryIntel 2026 market data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Real Differential Rates at Major Systems (2026)</h2>

      <Image
        src="/images/shift-differential-nurse-pay-2026-comparison.png"
        alt="Bar chart comparing night shift differential rates at major hospital systems including OHSU, UW Medical Center, Cleveland Clinic, Johns Hopkins, and Kaiser Permanente"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Union contracts consistently produce the highest differential rates. The California Nurses Association,
        Washington State Nurses Association, Oregon Nurses Association, and New York State Nurses Association
        all negotiate night differentials that are meaningfully above what non-union systems pay in the same
        markets. This is one of the clearest financial arguments for union employment that shows up in actual
        paycheck data.
      </p>

      <SalaryTable
        title="Night Shift Differential at Major Hospital Systems"
        headers={['Hospital System', 'Night Differential Rate', 'Notes']}
        rows={systemExamples}
        source="NurseSalaryIntel 2026 data from job postings, union CBAs, and nurse-reported figures"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Differential Stacks: Night + Specialty + Weekend</h2>

      <Image
        src="/images/shift-differential-nurse-pay-2026-hospital_compressed.webp"
        alt="Night shift nurses in scrubs collaborating at a dimly lit hospital nursing station reviewing patient monitors"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Most discussions of shift differential treat it as a single number. In practice, multiple differentials
        stack — and the total effect on annual pay is significant. An ICU nurse working Saturday and Sunday
        nights might receive: base ICU specialty differential ($3–$5/hr) + night differential ($5–$8/hr) +
        weekend differential ($2–$4/hr). That is $10–$17/hr above base pay on those two shifts.
      </p>

      <SalaryTable
        title="Stacked Differential Annual Impact Scenarios"
        headers={['Scenario', 'Additional Annual Pay', 'Notes']}
        rows={specialtyDiffStack}
        source="NurseSalaryIntel 2026 scenario analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Why This Changes How You Should Compare Offers</h2>
      <p>
        When evaluating a new position, the total compensation comparison needs to account for differential
        eligibility, not just base pay. Ask every employer these specific questions before comparing offers:
      </p>
      <p>
        <strong>What is your night differential rate (7pm–7am)?</strong> Get the exact dollar amount, not a
        percentage — percentages applied to different bases produce different dollar outcomes. <strong>When
        does differential apply during orientation?</strong> Some systems pay day rates during a 6–12 week
        orientation even if you are hired for nights — a real income loss for night nurses. <strong>Is weekend
        differential paid in addition to night differential or instead of it?</strong> Stacked is the better
        structure. <strong>Does specialty certification add an additional hourly premium?</strong> Many systems
        pay $1–$3/hr extra for CCRN, CEN, TNCC, or similar credentials, applied to every shift.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiating Differential at Hire</h2>
      <p>
        The differential rate itself is usually fixed by policy or contract and not individually negotiable.
        What is often negotiable: your starting step on the base pay scale (a higher step means a higher base
        from which differential is calculated), the length of your orientation period on day rates, and
        whether your sign-on bonus is structured to cover the income gap during orientation. Experienced night
        nurses should always ask: &ldquo;Is there any flexibility on the orientation period length given my
        experience, or on day rates during orientation?&rdquo; Many systems have discretion on this that is
        not offered unless asked.
      </p>

      <p>
        A pattern that comes up repeatedly in nurse salary discussions: orientation periods that default to
        day rates cost night-shift hires $2,000–$4,000 in lost differential income over a 10–12 week
        orientation. Many nurses don&apos;t know this is negotiable until their second or third job. At
        systems with any flexibility, asking specifically about orientation structure — and whether night
        differential applies during training — costs you nothing and can meaningfully change your first-year
        take-home pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/salary-negotiation/night-shift-differential-pay', label: 'Night Shift Differential Pay Rates', desc: 'Full breakdown of rates by hospital and state' },
          { href: '/nurse-salary-negotiation-data-guide-2026', label: 'Using Data to Negotiate Your Salary', desc: 'BLS data + job postings as your negotiation toolkit' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide 2026', desc: 'Full framework and scripts' },
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'Base pay benchmarks for all 50 states' },
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
    </SEOPageLayout>
  );
}
