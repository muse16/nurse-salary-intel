import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Salary: California vs Texas (2026) — Which State Pays More?',
  description: 'California vs Texas nurse salary compared for 2026. See gross pay, take-home pay after taxes, cost of living, and which state is actually better for nurses.',
};

const comparisonData = [
  { label: 'Average RN Salary', avgSalary: 'California: $124,000', hourlyRate: 'Texas: $81,510' },
  { label: 'Average Hourly Rate', avgSalary: 'California: $59.62/hr', hourlyRate: 'Texas: $39.19/hr' },
  { label: 'State Income Tax', avgSalary: 'California: up to 13.3%', hourlyRate: 'Texas: 0%' },
  { label: 'Salary After State Tax (est.)', avgSalary: 'California: ~$107,600', hourlyRate: 'Texas: $81,510' },
  { label: 'Typical Overtime Rate', avgSalary: 'California: $89.43/hr', hourlyRate: 'Texas: $58.79/hr' },
  { label: 'Night Shift Differential', avgSalary: 'California: 15–25%', hourlyRate: 'Texas: 12–18%' },
  { label: 'Union Coverage', avgSalary: 'California: High (CNA)', hourlyRate: 'Texas: Low' },
];

const faqs = [
  {
    question: 'Do California nurses actually take home more than Texas nurses?',
    answer: 'Yes, but the gap is smaller than gross salary suggests. After California\'s top marginal state income tax rate of 13.3% and higher federal withholding due to higher income, a California nurse earning $124,000 takes home roughly $85,000–$92,000 depending on deductions. A Texas nurse earning $81,510 takes home approximately $63,000–$67,000. California still leads by $20,000–$25,000 in net take-home, but purchasing power depends heavily on where you live.',
  },
  {
    question: 'Which state is better for nursing career growth?',
    answer: 'California leads for wages, union protections, mandatory staffing ratios, and career advancement opportunities in major academic medical centers. Texas leads for cost of living, no state income tax, a large and growing job market, and licensing reciprocity through the Nurse Licensure Compact (NLC). Nurses prioritizing earnings in absolute terms choose California; those optimizing for real purchasing power often find Texas or Washington better.',
  },
  {
    question: 'How does cost of living compare for nurses in California vs Texas?',
    answer: 'Texas housing costs are dramatically lower. A nurse earning $81,510 in Dallas can afford a 3-bedroom house in most suburbs. A nurse earning $124,000 in San Francisco or Los Angeles may rent a 1-bedroom apartment. Sacramento and San Diego offer middle ground within California — still above Texas costs but with much better real purchasing power than the Bay Area.',
  },
];

export default function NurseSalaryCaliforniaVsTexas() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nurse Salary: California vs Texas' },
      ]}
      h1="Nurse Salary: California vs Texas — 2026 Comparison"
      lastUpdated="April 2026"
      schemaTitle="Nurse Salary California vs Texas 2026"
      schemaDescription="Side-by-side comparison of RN salaries in California and Texas, including net take-home pay, cost of living, and career factors."
      schemaUrl="/nurse-salary-california-vs-texas"
      faqs={faqs}
    >
      <p>
        California vs Texas is the defining debate in nurse compensation. California offers the highest gross RN salary in the nation at $124,000/year. Texas offers no state income tax, dramatically lower cost of living, and a massive, growing job market at $81,510/year. The $42,490 gross gap narrows significantly after taxes and shrinks further when adjusted for housing costs. Which state is actually better for nurses depends on your priorities.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Gross Salary, Taxes, and Net Take-Home</h2>

      <SalaryTable
        title="California vs Texas RN Pay Comparison (2026)"
        headers={['Metric', 'California', 'Texas']}
        rows={comparisonData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <p>
        The tax math matters. California&apos;s state income tax tops out at 13.3% — the highest of any state. On a $124,000 salary with standard deductions, a California nurse pays approximately $14,000–$18,000 in state income tax annually. A Texas nurse pays zero state income tax on $81,510. The federal tax bill is higher in California too, since higher income pushes you further up the federal bracket ladder.
      </p>
      <p>
        After all taxes, the net take-home gap between an average California and average Texas nurse is closer to $20,000–$25,000 — still significant, but roughly half the $42,000+ gross difference. Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model take-home at your specific experience level and specialty.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living: Where the Real Gap Closes</h2>
      <p>
        Housing is where Texas&apos;s advantage becomes dramatic. The median home price in the Dallas-Fort Worth metro is approximately $380,000. In the San Francisco Bay Area, it&apos;s $1,200,000+. Even in Sacramento — California&apos;s most affordable major metro — median home prices run $550,000–$650,000.
      </p>
      <p>
        A Texas nurse earning $81,510 and putting 20% down on a $380,000 Dallas home pays approximately $2,100/month on a 30-year mortgage. A California nurse earning $124,000 in San Francisco would need over $200,000 down just to get to a comparable monthly payment, and homes start at $1,000,000 in most desirable neighborhoods. The purchasing power gap inverts when housing costs are fully factored in.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Overtime, Differentials, and Specialty Pay</h2>
      <p>
        California&apos;s overtime rules are the most favorable for nurses in the country. Daily overtime kicks in after 8 hours (not weekly), meaning California nurses on 12-hour shifts earn overtime on every shift. On a $59.62/hr base rate, 4 daily overtime hours at 1.5x add $357/shift — approximately $18,600/year for a three-day schedule. Texas nurses on 12-hour shifts only trigger overtime after 40 hours in the workweek under federal FLSA rules.
      </p>
      <p>
        Night shift differentials are also higher in California (15–25%) versus Texas (12–18%). Union presence in California (California Nurses Association covers many major hospital systems) provides structured step increases and negotiated differentials that non-union Texas hospitals don&apos;t match.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Which State Is Right for You?</h2>
      <p>
        Choose <strong>California</strong> if you want the highest absolute salary, strong union protections, daily overtime, and plan to work in one of the major metro academic medical centers. Best cities: San Francisco, Los Angeles, Sacramento. See detailed data: <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link>.
      </p>
      <p>
        Choose <strong>Texas</strong> if you want no state income tax, affordable housing, a large job market, NLC license portability, and strong long-term career growth in a rapidly expanding healthcare sector. Best cities: Houston, Dallas, Austin. See detailed data: <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>.
      </p>
      <p>
        Also worth considering: <Link href="/rn-salary-by-state/arizona" className="text-primary hover:underline">RN salary in Arizona</Link> and <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">RN salary in Florida</Link> offer no-state-tax advantages with growing healthcare markets and lower housing costs than California.
      </p>
    </SEOPageLayout>
  );
}
