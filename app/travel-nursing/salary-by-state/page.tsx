import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nurse Salary by State 2026: $2,000–$3,500 Per Week Ranked',
  description:
    'Compare travel nursing pay across all 50 states in 2026. Weekly rates range $2,000–$3,500 depending on specialty and location. Includes full stipend breakdowns.',
};

const faqs = [
  { question: 'What state pays travel nurses the most?', answer: 'California consistently offers the highest travel nurse pay, with weekly rates of $2,800–$3,600. However, after adjusting for cost of living, states like Washington, Oregon, and Nevada offer the best real purchasing power.' },
  { question: 'Do travel nurses pay state income tax?', answer: 'Travel nurses pay state income tax in their tax home state, not necessarily the state where they work. Some states have no income tax (Texas, Florida, Nevada, Washington), which can increase your take-home pay.' },
  { question: 'What is the average weekly pay for travel nurses?', answer: 'The national average is $2,600/week in 2026, including base pay and tax-free stipends. This ranges from $2,000/week in lower-paying states to $3,600/week in top markets.' },
  { question: 'Which states have the most travel nursing jobs?', answer: 'California, Texas, Florida, New York, and Massachusetts consistently have the highest volume of travel nursing job openings due to large healthcare systems and ongoing staffing shortages.' },
];

const allStates = [
  { label: 'California', avgSalary: '$2,800–$3,600/wk', hourlyRate: '$62–$78/hr', note: 'Highest pay, high COL' },
  { label: 'New York', avgSalary: '$2,600–$3,400/wk', hourlyRate: '$58–$74/hr', note: 'NYC premiums' },
  { label: 'Massachusetts', avgSalary: '$2,500–$3,200/wk', hourlyRate: '$56–$70/hr', note: 'Strong demand' },
  { label: 'Washington', avgSalary: '$2,400–$3,100/wk', hourlyRate: '$54–$68/hr', note: 'No income tax' },
  { label: 'Oregon', avgSalary: '$2,300–$3,000/wk', hourlyRate: '$52–$66/hr', note: '' },
  { label: 'Texas', avgSalary: '$2,200–$2,900/wk', hourlyRate: '$50–$65/hr', note: 'No income tax' },
  { label: 'Florida', avgSalary: '$2,000–$2,700/wk', hourlyRate: '$46–$60/hr', note: 'No income tax' },
  { label: 'Arizona', avgSalary: '$2,100–$2,800/wk', hourlyRate: '$48–$62/hr', note: 'Growing market' },
  { label: 'Nevada', avgSalary: '$2,200–$2,900/wk', hourlyRate: '$50–$64/hr', note: 'No income tax' },
  { label: 'Colorado', avgSalary: '$2,200–$2,800/wk', hourlyRate: '$50–$62/hr', note: '' },
];

export default function TravelNurseSalaryByState() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'Salary by State' },
      ]}
      h1="Travel Nurse Salary by State — 2026 Data"
      lastUpdated="April 2026"
      schemaTitle="Travel Nurse Salary by State 2026"
      schemaDescription="Compare travel nursing salaries across all 50 states with weekly and hourly pay rates."
      schemaUrl="/travel-nursing/salary-by-state"
      faqs={faqs}
    >
      <p>
        Travel nurse pay varies dramatically by state. A 13-week ICU contract in California can pay $15,000+ more
        than the same contract in a lower-paying state. Below is the full state-by-state breakdown for 2026.
      </p>

      <SalaryTable
        title="Travel Nurse Pay by State — Full Table"
        headers={['State', 'Weekly Pay Range', 'Hourly Rate', 'Notes']}
        rows={allStates}
        source="NurseSalaryIntel contract data, Q1 2026"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying States for Travel Nurses</h2>
      <p>
        California, New York, and Massachusetts consistently top the list. However, these are also high cost-of-living states.
        When you factor in housing costs and taxes, states like Washington and Nevada — both with no state income tax —
        can deliver comparable or better take-home pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Lowest-Paying States (and Why They Might Still Be Worth It)</h2>
      <p>
        Southern and midwestern states like Mississippi, Alabama, and Arkansas typically offer lower weekly rates ($1,800–$2,200).
        However, extremely low cost of living means your stipend goes further. If you&apos;re strategic about housing and have a
        tax home in a no-income-tax state, these assignments can be surprisingly profitable.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living vs. Travel Nurse Pay</h2>
      <p>
        Always compare pay packages against local cost of living. A $3,200/week contract in San Francisco may deliver less
        real purchasing power than a $2,500/week contract in Austin. Use our salary data to make apples-to-apples comparisons.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How State Tax Laws Affect Your Take-Home Pay</h2>
      <p>
        Seven states have no income tax: Alaska, Florida, Nevada, South Dakota, Texas, Washington, and Wyoming.
        If your tax home is in one of these states, you keep more of your travel nurse pay.
        Tennessee and New Hampshire tax only investment income.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">California RN Salary →</span>
        </Link>
        <Link href="/rn-salary-by-state/texas" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Texas RN Salary →</span>
        </Link>
        <Link href="/rn-salary-by-state/new-york" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">New York RN Salary →</span>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Highest-Paying States →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
