import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Grad RN Salary 2026: $62K–$105K + Sign-On Bonus Range',
  description:
    'New-grad RNs earn $62,000–$105,000 in 2026 depending on state, plus $5K–$15K sign-on bonuses at most hospitals. See pay by market, top employers, and how to negotiate your first offer.',
  alternates: { canonical: 'https://nursesalaryintel.com/entry-level-nurse-salary' },
  openGraph: {
    title: 'New Grad RN Salary 2026: $62K–$105K + Sign-On Bonus',
    description: 'New grads earn $62K–$105K in 2026 + $5–$15K sign-ons. Top markets + negotiation tips.',
    url: 'https://nursesalaryintel.com/entry-level-nurse-salary',
  },
};

const newGradData = [
  { label: 'California (Bay Area)', avgSalary: '$90,000–$105,000', hourlyRate: '$43–$50/hr' },
  { label: 'California (Sacramento/San Diego)', avgSalary: '$82,000–$95,000', hourlyRate: '$39–$46/hr' },
  { label: 'New York City', avgSalary: '$82,000–$92,000', hourlyRate: '$39–$44/hr' },
  { label: 'Texas (Houston / Austin)', avgSalary: '$62,000–$72,000', hourlyRate: '$30–$35/hr' },
  { label: 'Arizona (Phoenix)', avgSalary: '$62,000–$70,000', hourlyRate: '$30–$34/hr' },
  { label: 'Florida (Miami / Tampa)', avgSalary: '$58,000–$68,000', hourlyRate: '$28–$33/hr' },
  { label: 'National Average (New Grad)', avgSalary: '$65,000–$78,000', hourlyRate: '$31–$37/hr' },
];

const faqs = [
  {
    question: 'What is the average salary for a new grad nurse in 2026?',
    answer: 'New graduate RNs earn $65,000–$78,000/year nationally in 2026. California new grads are the exception, starting at $82,000–$105,000 depending on market. Texas and Florida new grads typically start $58,000–$72,000. Entry-level pay varies by state, specialty unit, and whether the hospital has a union contract.',
  },
  {
    question: 'Can new grad nurses negotiate their starting salary?',
    answer: 'Yes, though the leverage is limited at large health systems with standardized new grad pay grades. You typically cannot negotiate the grade level, but you can negotiate: sign-on bonus ($2,000–$10,000 is common), shift assignment (nights pay more), BSN premium if applicable, and loan repayment programs. Start with the sign-on bonus and shift assignment — these are the easiest to move.',
  },
  {
    question: 'How fast does nurse salary grow after entry level?',
    answer: 'Rapidly in the first 5 years. Most nurses see a 25–40% salary increase from new grad to 5-year experience. The typical trajectory: new grad $68,000 → 2 years $76,000 → 5 years $85,000–$95,000 (faster if you move to a higher-acuity specialty or obtain a certification). After 10 years, staff RN salaries plateau in many markets — the next step-up requires a specialty, charge role, or advanced degree.',
  },
];

export default function EntryLevelNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Entry Level Nurse Salary' },
      ]}
      h1="Entry Level Nurse Salary — What New RNs Make in 2026"
      lastUpdated="April 2026"
      schemaTitle="Entry Level Nurse Salary 2026"
      schemaDescription="New graduate RN salaries by state, negotiation tips, and salary growth trajectory for entry-level nurses."
      schemaUrl="/entry-level-nurse-salary"
      faqs={faqs}
    >
      <p>
        Starting salary for registered nurses varies more than most new grads expect. A new RN in California can earn $90,000+ at a union hospital in the Bay Area. The same new grad in rural Florida might start at $55,000. Understanding where entry-level salaries actually land — and knowing how to negotiate — can be worth $10,000–$20,000 annually from day one.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">New Grad RN Salary by State and City (2026)</h2>
      <p>
        Geography is the dominant variable in new grad pay. State union laws, mandatory nurse-to-patient ratios, and local cost of living all shape what health systems are willing to pay new nurses. The following ranges reflect standard new grad RN positions at acute care hospitals — not specialty residency programs, which may start lower.
      </p>

      <SalaryTable
        title="Entry Level RN Salary by Market (2026)"
        headers={['Market', 'Annual Range', 'Hourly Range']}
        rows={newGradData}
        source="NurseSalaryIntel new grad data + BLS OEWS 2025"
      />

      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate starting salary by state and experience level. For full state salary context: <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary</Link>, <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">Texas RN salary</Link>, <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">Florida RN salary</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What New Grad Nurses Can Negotiate</h2>
      <p>
        Large hospital systems often have rigid pay grades for new graduate nurses — Step 1 or Grade N1 is non-negotiable at facilities like HCA, Ascension, or Kaiser. What&apos;s usually negotiable even in these systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Sign-on bonus:</strong> $2,000–$12,000 is common at facilities with high new grad demand. Ask for the maximum available, not the amount initially offered. Sign-on bonuses typically require a 1–2 year commitment with prorated repayment if you leave early.</li>
        <li><strong>Shift assignment:</strong> Requesting nights or weekends gets you differential pay immediately. A 15% night differential on a $68,000 base adds $10,200/year from day one.</li>
        <li><strong>Unit assignment:</strong> ICU new grad residencies pay the same as floor positions initially but accelerate you to higher-paying specialty pay within 1–2 years.</li>
        <li><strong>Loan repayment:</strong> Many rural and underserved facilities offer $10,000–$30,000 in student loan repayment for multi-year commitments. This is often not mentioned unless you ask.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Entry-Level RN Pay Grows Over Time</h2>
      <p>
        Nursing salary growth in the first decade follows a predictable pattern. Year-over-year raises at most non-union hospitals average 2–4%. Union step increases at places like Kaiser California can deliver 4–6% annually through automatic steps. The faster paths to income growth are specialty certification and unit transfer, not waiting for annual reviews.
      </p>
      <p>
        Typical progression for a Med-Surg new grad who moves to ICU at year 2 and obtains CCRN certification at year 4:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li>Year 1 (new grad Med-Surg): $68,000</li>
        <li>Year 2 (transfer to ICU): $74,000–$78,000</li>
        <li>Year 4 (CCRN certification): $84,000–$90,000</li>
        <li>Year 6–7 (senior ICU RN): $90,000–$100,000</li>
        <li>Year 10+ (charge, senior, or NP pathway): $100,000–$130,000+</li>
      </ul>
      <p>
        Before accepting your first offer, have your contract reviewed. New grad contracts often contain cancellation penalties, mandatory overtime clauses, and float pool requirements that significantly affect your first-year experience. Use our free <Link href="/audit" className="text-primary hover:underline">contract audit tool</Link> to flag these terms before you sign.
      </p>
    </SEOPageLayout>
  );
}
