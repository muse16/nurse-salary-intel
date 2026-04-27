import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nurse Salary Guide 2026: $2,000–$3,500/Week Breakdown',
  description:
    'How much do travel nurses make in 2026? Weekly pay ranges, highest-paying states, in-demand specialties, how stipends work, and how travel pay compares to staff nursing.',
};

const faqs = [
  {
    question: 'How much do travel nurses make per week?',
    answer: 'Travel nurse weekly packages in 2026 typically range from $1,800–$3,600 depending on specialty and location. ICU and ER travel contracts in California and New York pay $2,800–$3,600/week all-in. Med-Surg contracts in lower-demand markets run $1,800–$2,400/week. Weekly pay includes a taxable base hourly rate plus tax-free housing and meal stipends.',
  },
  {
    question: 'Do travel nurses make more than staff nurses?',
    answer: 'Yes, typically 20–50% more in gross earnings during assignments. However, travel nurses pay for their own benefits between assignments, have no guaranteed hours during gaps, and face higher tax complexity. After accounting for those factors, experienced travel nurses still usually net more than equivalent staff RN positions, especially during periods of high agency demand.',
  },
  {
    question: 'What specialties pay the most for travel nursing?',
    answer: 'ICU/Critical Care, OR/Surgical Tech, ER, and NICU are consistently the highest-paying travel nursing specialties. L&D and Cardiac ICU also command premium packages. Med-Surg and Telemetry travel contracts pay the least but are the easiest to secure and good entry points for first-time travelers.',
  },
];

export default function TravelNurseSalaryGuide() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nurse Salary Guide' },
      ]}
      h1="Travel Nurse Salary Guide — 2026"
      lastUpdated="April 2026"
      schemaTitle="Travel Nurse Salary Guide 2026"
      schemaDescription="Weekly pay ranges, top states, and specialty premiums for travel nurses in 2026."
      schemaUrl="/travel-nurse-salary-guide"
      faqs={faqs}
    >
      <p>
        Travel nursing remains one of the highest-earning paths in the RN profession. While pandemic-era crisis rates have normalized, 2026 travel pay still beats staff RN compensation at most facilities — and experienced travelers with in-demand specialties continue to earn $80,000–$120,000+ annually while working fewer months of the year.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Travel Nurse Pay Is Structured</h2>
      <p>
        Travel nursing compensation is more complex than staff RN pay because it&apos;s split into two components:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Taxable base hourly rate:</strong> A lower hourly wage, typically $20–$32/hr depending on specialty and market, that is subject to income tax and used to calculate overtime, benefits, and payroll deductions.</li>
        <li><strong>Tax-free stipends:</strong> Housing allowance and meals/incidentals reimbursements that are not subject to federal income tax as long as the nurse maintains a permanent tax home elsewhere. These stipends typically represent $500–$1,200/week of the total package.</li>
      </ul>
      <p>
        The combination of taxable base and tax-free stipends creates the advertised weekly package rate. A contract advertising $2,800/week might include a $28/hr taxable rate (36 hours = $1,008) plus $1,792 in weekly stipends. Always compare the taxable base rate — not just the total package — when evaluating contracts, as a higher total package with a very low base can reduce overtime pay and benefits eligibility.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Top-Paying States for Travel Nurses in 2026</h2>
      <p>
        The highest travel pay is concentrated in states with the most acute staffing shortages and highest base salaries for staff RNs:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California:</strong> $2,800–$3,600/week for ICU and ER. Bay Area and LA trauma centers pay the most. California staffing ratios increase demand for agency nurses when census rises.</li>
        <li><strong>New York:</strong> $2,400–$3,200/week for ICU and surgical specialties. NYC hospitals maintain consistent travel demand due to high staff turnover.</li>
        <li><strong>Texas:</strong> $2,200–$2,800/week across most specialties. Houston and Dallas medical centers offer reliable contracts year-round with no state income tax.</li>
        <li><strong>Arizona:</strong> $2,100–$2,700/week. Phoenix metro has a strong winter travel market driven by seasonal population swells.</li>
        <li><strong>Florida:</strong> $1,900–$2,600/week. Miami and Tampa pay at the high end; rural markets at the low end. Winter season drives highest demand.</li>
      </ul>
      <p>
        For staff RN salary context in these markets, see <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary</Link>, <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">Texas RN salary</Link>, and <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">Florida RN salary</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel vs. Staff RN: A Real Earnings Comparison</h2>
      <p>
        A staff ICU nurse in Texas earns approximately $88,000/year including base and shift differential. A travel ICU nurse working 46 weeks of the year on Texas contracts at $2,400/week earns $110,400 gross — about 25% more. Subtract benefits costs ($4,000–$8,000/year for individual coverage during active assignments) and the gap narrows slightly, but travel still wins on gross income.
      </p>
      <p>
        The calculus shifts for travelers who take significant time between contracts, those with families and complex housing situations, or those who prioritize the consistency and advancement opportunities of a staff position. Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to compare your current staff salary against travel options in your target markets.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Getting Started as a Travel Nurse</h2>
      <p>
        Most travel agencies require a minimum of 1–2 years of recent acute care experience in your specialty before placing you on travel contracts. ICU, ER, and OR experience opens the highest-paying contracts; Med-Surg experience qualifies for entry-level travel positions. Completing a travel assignment successfully builds your profile and typically unlocks better contracts and faster placement on repeat.
      </p>
      <p>
        Before your first assignment, work with a travel nurse tax professional to establish a proper tax home and ensure your stipends qualify as tax-free. Improperly structured travel arrangements can result in significant IRS liability — especially if you&apos;re working in your home state or don&apos;t maintain a permanent residence. Review your agency contract carefully and use our <Link href="/audit" className="text-primary hover:underline">contract audit tool</Link> to flag common red flags before signing.
      </p>
    </SEOPageLayout>
  );
}
