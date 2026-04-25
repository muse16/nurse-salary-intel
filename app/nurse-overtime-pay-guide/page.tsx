import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Overtime Pay 2026: $60+/hr Math + FLSA Rules Decoded',
  description:
    'Most RNs earn $60–$95/hr in overtime in 2026 (1.5x base). See FLSA exemption rules, mandatory-OT laws by state, double-time triggers, and how to calculate your take-home.',
  alternates: { canonical: 'https://nursesalaryintel.com/nurse-overtime-pay-guide' },
  openGraph: {
    title: 'Nurse Overtime Pay 2026: $60+/hr Math + FLSA Decoded',
    description: 'RNs earn $60–$95/hr in OT in 2026. FLSA rules + state law + take-home math.',
    url: 'https://nursesalaryintel.com/nurse-overtime-pay-guide',
  },
};

const faqs = [
  {
    question: 'How much do nurses make in overtime?',
    answer: 'Federal law requires 1.5x base hourly rate for hours beyond 40 per week. A nurse earning $40/hr earns $60/hr in overtime. In California, daily overtime kicks in after 8 hours in a single shift and double-time after 12 hours, significantly increasing overtime earnings for nurses on 12-hour shifts.',
  },
  {
    question: 'How much extra can nurses earn from overtime?',
    answer: 'Nurses working one extra 12-hour shift per week typically add $10,000–$20,000 annually. Those picking up two extra shifts per week can add $20,000–$35,000. California nurses earn more due to daily overtime laws that apply even on standard 12-hour shifts.',
  },
  {
    question: 'Is mandatory overtime legal for nurses?',
    answer: 'It depends on the state. Fourteen states have laws limiting mandatory overtime for nurses, including California, New York, and Texas. In states without restrictions, hospitals can legally require overtime during staffing shortages. Always review your contract and applicable state law before accepting a position.',
  },
];

export default function NurseOvertimePayGuide() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nurse Overtime Pay Guide' },
      ]}
      h1="Nurse Overtime Pay Guide — 2026"
      lastUpdated="April 2026"
      schemaTitle="Nurse Overtime Pay Guide 2026"
      schemaDescription="How overtime works for RNs, federal and state rules, and how much extra nurses earn working additional shifts."
      schemaUrl="/nurse-overtime-pay-guide"
      faqs={faqs}
    >
      <p>
        Overtime is one of the most reliable income accelerators available to registered nurses. For nurses willing to work extra shifts, federal overtime law and state-specific rules create significant earning opportunities — sometimes adding $15,000–$35,000 to annual take-home pay without a new job, promotion, or credential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Federal Overtime Rules for Nurses</h2>
      <p>
        Under the Fair Labor Standards Act (FLSA), most staff RNs are classified as non-exempt employees entitled to overtime pay at 1.5x their base hourly rate for all hours worked beyond 40 in a single workweek. This applies regardless of whether the nurse is hourly or salaried, as long as they don&apos;t meet the FLSA&apos;s executive/administrative exemption thresholds.
      </p>
      <p>
        At the national average RN hourly rate of approximately $42.88/hr, federal overtime pay comes to $64.32/hr. A nurse working 52 hours per week earns 12 hours of overtime weekly — approximately $800/week in overtime income, or roughly $40,000/year in overtime on top of base salary.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">California&apos;s Stronger Overtime Law</h2>
      <p>
        California has the strongest nursing overtime protections in the country. Unlike the federal 40-hour weekly threshold, California&apos;s overtime law is triggered daily:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>1.5x pay</strong> for all hours beyond 8 in a single workday</li>
        <li><strong>2x pay (double-time)</strong> for all hours beyond 12 in a single workday</li>
        <li><strong>2x pay</strong> for all hours on the 7th consecutive workday</li>
      </ul>
      <p>
        This means California nurses routinely working standard 12-hour shifts automatically earn 4 hours of overtime (hours 9–12) on every shift. At the California average of $59.62/hr base, those 4 daily overtime hours at 1.5x rate add $357/shift — roughly $18,600/year for a three-day workweek schedule.
      </p>
      <p>
        For full California salary context, see <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link>. Compare with <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link> where weekly-threshold federal rules apply.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Overtime Pay by State and Salary Level</h2>
      <p>
        The dollar value of overtime varies significantly by state because it&apos;s calculated on base pay:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California nurses ($59.62/hr avg):</strong> Overtime rate $89.43/hr; double-time $119.24/hr</li>
        <li><strong>New York nurses ($47.38/hr avg):</strong> Overtime rate $71.07/hr</li>
        <li><strong>Arizona nurses ($39.42/hr avg):</strong> Overtime rate $59.13/hr</li>
        <li><strong>Texas nurses ($39.19/hr avg):</strong> Overtime rate $58.79/hr</li>
        <li><strong>Florida nurses ($36.75/hr avg):</strong> Overtime rate $55.13/hr</li>
      </ul>
      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate your total annual income including overtime at your specific hourly rate and state.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Voluntary vs. Mandatory Overtime</h2>
      <p>
        Voluntary overtime — picking up additional shifts by choice — is universally legal and often incentivized by hospitals offering bonus premiums on top of the standard 1.5x rate. During staffing shortages, facilities frequently offer double-time or time-and-a-half-plus-bonus to attract extra coverage, creating significant earning windows for nurses who can work the additional hours.
      </p>
      <p>
        Mandatory overtime — being required by your employer to work beyond your scheduled hours — is legal in most states but restricted in fourteen. Before accepting a position, review your employment contract for mandatory overtime clauses and confirm whether your state limits mandatory overtime for nurses. States with protective laws include California, New York, Connecticut, Illinois, and Maryland. Always have your contract reviewed before signing — use our free <Link href="/audit" className="text-primary hover:underline">contract audit tool</Link> to flag mandatory overtime clauses automatically.
      </p>
    </SEOPageLayout>
  );
}
