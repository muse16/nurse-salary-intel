import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary Highest Paying States (2026): Hourly Pay + Highest Paying Cities',
  description:
    'See the average RN salary in the highest paying states for 2026. Compare hourly pay, top cities, and earning potential for registered nurses.',
};

const faqs = [
  { question: 'What state pays nurses the highest salary?', answer: 'California pays nurses the highest at $124,000/year. This is nearly $18,000 more than the second-highest state (Hawaii) and $35,000 above the national average.' },
  { question: 'Which state is best for nurses after cost of living?', answer: 'After cost of living adjustment, Washington, Nevada, and Texas offer the best real purchasing power for nurses. These states combine solid salaries with no state income tax and lower housing costs.' },
  { question: 'Are nurse salaries increasing in 2026?', answer: 'Yes — nurse salaries continue to grow in 2026, averaging 4% year-over-year gains. States with the most severe shortages (California, Nevada, Alaska) are seeing 5–7% annual increases.' },
  { question: 'Should I relocate for a higher nursing salary?', answer: 'Relocation can significantly boost earnings, but consider total take-home pay after taxes and living costs. A 20% raw salary increase may net only 5–10% more after moving expenses, state taxes, and COL differences.' },
];

const rawTop10 = [
  { label: '1. California', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: '2. Hawaii', avgSalary: '$106,530', hourlyRate: '$51.22/hr' },
  { label: '3. Oregon', avgSalary: '$102,700', hourlyRate: '$49.38/hr' },
  { label: '4. Washington', avgSalary: '$100,890', hourlyRate: '$48.51/hr' },
  { label: '5. New York', avgSalary: '$98,560', hourlyRate: '$47.38/hr' },
  { label: '6. Alaska', avgSalary: '$97,230', hourlyRate: '$46.75/hr' },
  { label: '7. Massachusetts', avgSalary: '$96,630', hourlyRate: '$46.46/hr' },
  { label: '8. New Jersey', avgSalary: '$94,690', hourlyRate: '$45.52/hr' },
  { label: '9. Connecticut', avgSalary: '$93,370', hourlyRate: '$44.89/hr' },
  { label: '10. Nevada', avgSalary: '$90,210', hourlyRate: '$43.37/hr' },
];

const colAdjustedTop10 = [
  { label: '1. Washington (WA)', avgSalary: '$100,890', hourlyRate: 'No income tax, moderate COL' },
  { label: '2. Nevada (NV)', avgSalary: '$90,210', hourlyRate: 'No income tax, low COL' },
  { label: '3. Texas (TX)', avgSalary: '$81,510', hourlyRate: 'No income tax, low COL' },
  { label: '4. Oregon (OR)', avgSalary: '$102,700', hourlyRate: 'Moderate COL' },
  { label: '5. Arizona (AZ)', avgSalary: '$84,320', hourlyRate: 'Low-moderate COL' },
  { label: '6. California (CA)', avgSalary: '$124,000', hourlyRate: 'High pay offsets high COL only in mid-tier metros' },
  { label: '7. Minnesota (MN)', avgSalary: '$88,200', hourlyRate: 'Low COL outside Twin Cities' },
  { label: '8. Pennsylvania (PA)', avgSalary: '$80,630', hourlyRate: 'Low COL' },
];

export default function HighestPayingStates() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Highest-Paying States' },
      ]}
      h1="Top 10 Highest-Paying States for Nurses in 2026"
      lastUpdated="April 2026"
      schemaTitle="Top 10 Highest-Paying States for Nurses 2026"
      schemaDescription="The top 10 highest-paying states for registered nurses — raw salary and cost-of-living adjusted."
      schemaUrl="/rn-salary-by-state/highest-paying-states"
      faqs={faqs}
    >
      <p>
        Where you work matters as much as what you do. The gap between the highest and lowest-paying states for
        RNs is over $57,000/year. Here are the top 10 best-paying states in 2026 — both raw salary and adjusted
        for cost of living.
      </p>

      <SalaryTable title="Top 10 Highest-Paying States for RNs (Raw Salary)" headers={['Rank & State', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={rawTop10} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Adjusted for Cost of Living — The Real Top 10</h2>
      <p>
        When you factor in state income taxes, housing costs, and everyday expenses, the ranking changes dramatically.
        Washington and Nevada — with no state income tax and moderate COL — deliver the best real take-home pay.
      </p>

      <SalaryTable title="Top 10 States by COL-Adjusted Nurse Take-Home" headers={['Rank & State', 'Avg. Salary', 'Why It Ranks High']} rows={colAdjustedTop10} source="NurseSalaryIntel analysis, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Why Some States Pay More</h2>
      <p>
        Top-paying states share several characteristics: severe nursing shortages, strong union representation
        (California Nurses Association, NYSNA, WSNA), high cost of living that drives up wages, and regulations
        like mandatory nurse-to-patient ratios in California.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">States with the Biggest Salary Growth (2024–2026)</h2>
      <p>
        Nevada (+14%), Texas (+12%), Arizona (+11%), and North Carolina (+10%) have seen the fastest RN salary
        growth over the past two years, driven by population growth and persistent shortages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Best States for Nurses Considering Pay + Quality of Life</h2>
      <p>
        Washington State ranks at the top: high RN pay, no income tax, strong nursing laws, and excellent quality
        of life. Oregon, Minnesota, and Colorado also balance good pay with strong quality of life metrics.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Use This Data in Salary Negotiations</h2>
      <p>
        If you&apos;re negotiating pay, reference the state average and compare it to your offer. If your offer
        is below state average — even in a low-paying state — you have data to justify a higher ask.
      </p>
      <Link href="/salary-negotiation/nurse-playbook" className="text-primary font-semibold hover:underline text-sm">
        Get the full negotiation playbook →
      </Link>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">California Detail →</span>
        </Link>
        <Link href="/travel-nursing/salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Travel Nurse Salary by State →</span>
        </Link>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Cities in the Top-Paying States</h2>
      <p>
        Within the highest-paying states, pay varies significantly by metro area. Urban centers with major academic medical systems and strong union representation offer the most competitive nurse salaries in the country.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>San Francisco, CA:</strong> $145,000–$165,000/year ($70–$79/hr)</li>
        <li><strong>San Jose, CA:</strong> $140,000–$155,000/year ($67–$75/hr)</li>
        <li><strong>New York City, NY:</strong> $112,000–$128,000/year ($54–$62/hr)</li>
        <li><strong>Seattle, WA:</strong> $105,000–$118,000/year ($50–$57/hr)</li>
        <li><strong>Honolulu, HI:</strong> $104,000–$118,000/year ($50–$57/hr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Experience in the Highest-Paying States</h2>
      <p>
        The highest-paying states also offer the steepest experience premiums. Union step increases, specialty certifications, and competitive retention bonuses compound over a career, creating the largest salary gaps at the 10+ year mark.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $75,000–$100,000 in the top-paying states. California new grads start at $85,000–$100,000; Hawaii at $78,000–$88,000.</li>
        <li><strong>3–5 years experience:</strong> $105,000–$130,000 in top-paying states. Union step increases in California and New York accelerate pay growth significantly at this stage.</li>
        <li><strong>10+ years experience:</strong> $130,000–$175,000+ in top-paying states. Senior nurses at UCSF, NYU Langone, and Swedish Medical Center in Seattle reach the upper end of this range.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in High-Pay States</h2>
      <p>
        The highest-paying states also offer the strongest shift differentials. California union hospitals pay 15–25% for nights; New York NYSNA contracts pay 15–22%; Washington State pays 12–20%. On a $100,000+ base salary, these differentials add $15,000–$25,000/year for consistent night nurses.
      </p>
      <p>
        California has the most favorable overtime law in the nation: daily overtime applies after 8 hours per shift. Washington and Oregon use the federal 40-hour weekly threshold at 1.5x base. Double-time rates for voluntary extra shifts are common at major systems during staffing shortages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — Highest Paying States</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in the highest paying states?</p>
          <p className="text-on-surface-variant"><Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link> leads at $124,000, followed by Hawaii ($106,530), Oregon ($102,700), and Washington ($100,890). <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">RN salary in New York</Link> rounds out the top 5 at $98,560. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate your pay in any state.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in the highest paying states?</p>
          <p className="text-on-surface-variant">Nurses in the top-paying states earn $46–$60+/hr on average. California averages $59.62/hr, Hawaii $51.22/hr, Oregon $49.38/hr, and Washington $48.51/hr.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in the United States?</p>
          <p className="text-on-surface-variant"><Link href="/salary/california/san-francisco" className="text-primary hover:underline">Nurse salary in San Francisco</Link> leads nationally at $145,000–$165,000/year, followed by <Link href="/salary/new-york/new-york" className="text-primary hover:underline">nurse salary in New York City</Link> at $112,000–$128,000/year. The Bay Area&apos;s combination of high cost of living, shortages, and union contracts drives the highest nurse pay in the country.</p>
        </div>
      </div>
    </SEOPageLayout>
  );
}
