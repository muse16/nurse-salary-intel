import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary by State (2026): Hourly Pay + Highest Paying Cities',
  description:
    'See the average RN salary in every state for 2026. Compare hourly pay, top cities, and earning potential for registered nurses.',
};

const faqs = [
  { question: 'What state pays nurses the most?', answer: 'California pays RNs the most at an average of $124,000/year. Hawaii ($106,530), Oregon ($102,700), Washington ($100,890), and New York ($98,560) round out the top five.' },
  { question: 'What is the average RN salary in the US?', answer: 'The national average RN salary in 2026 is $89,010/year ($42.79/hour), according to BLS data combined with NurseSalaryIntel contract data.' },
  { question: 'Which states have the highest nurse demand?', answer: 'Texas, California, Florida, New York, and Pennsylvania have the highest absolute nurse demand. However, per-capita shortages are worst in rural Western and Southern states.' },
  { question: 'Does cost of living cancel out high nurse salaries?', answer: 'Partially, yes. After cost of living adjustment, California and New York drop significantly. Washington, Oregon, Nevada, and Texas offer better real purchasing power when you factor in housing, taxes, and groceries.' },
  { question: 'Are RN salaries going up or down in 2026?', answer: 'RN salaries continue to rise in 2026, up approximately 4% year-over-year. Growth is driven by persistent nursing shortages and increasing patient acuity.' },
];

const allStates = [
  { label: 'California', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: 'Hawaii', avgSalary: '$106,530', hourlyRate: '$51.22/hr' },
  { label: 'Oregon', avgSalary: '$102,700', hourlyRate: '$49.38/hr' },
  { label: 'Washington', avgSalary: '$100,890', hourlyRate: '$48.51/hr' },
  { label: 'New York', avgSalary: '$98,560', hourlyRate: '$47.38/hr' },
  { label: 'Massachusetts', avgSalary: '$96,630', hourlyRate: '$46.46/hr' },
  { label: 'New Jersey', avgSalary: '$94,690', hourlyRate: '$45.52/hr' },
  { label: 'Connecticut', avgSalary: '$93,370', hourlyRate: '$44.89/hr' },
  { label: 'Alaska', avgSalary: '$97,230', hourlyRate: '$46.75/hr' },
  { label: 'Minnesota', avgSalary: '$88,200', hourlyRate: '$42.40/hr' },
  { label: 'Nevada', avgSalary: '$90,210', hourlyRate: '$43.37/hr' },
  { label: 'Arizona', avgSalary: '$84,320', hourlyRate: '$40.54/hr' },
  { label: 'Colorado', avgSalary: '$82,940', hourlyRate: '$39.87/hr' },
  { label: 'Texas', avgSalary: '$81,510', hourlyRate: '$39.19/hr' },
  { label: 'Illinois', avgSalary: '$81,230', hourlyRate: '$39.05/hr' },
  { label: 'Florida', avgSalary: '$76,450', hourlyRate: '$36.75/hr' },
  { label: 'Georgia', avgSalary: '$76,730', hourlyRate: '$36.89/hr' },
  { label: 'North Carolina', avgSalary: '$75,560', hourlyRate: '$36.33/hr' },
  { label: 'Ohio', avgSalary: '$75,840', hourlyRate: '$36.46/hr' },
  { label: 'Pennsylvania', avgSalary: '$80,630', hourlyRate: '$38.77/hr' },
  { label: 'Michigan', avgSalary: '$78,720', hourlyRate: '$37.85/hr' },
  { label: 'Tennessee', avgSalary: '$71,340', hourlyRate: '$34.30/hr' },
  { label: 'Missouri', avgSalary: '$72,260', hourlyRate: '$34.74/hr' },
  { label: 'Alabama', avgSalary: '$68,290', hourlyRate: '$32.83/hr' },
  { label: 'Mississippi', avgSalary: '$66,590', hourlyRate: '$32.01/hr' },
];

export default function RNSalaryByStatePillar() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State' },
      ]}
      h1="RN Salary by State — 2026 (All 50 States)"
      lastUpdated="April 2026"
      schemaTitle="RN Salary by State 2026"
      schemaDescription="Compare registered nurse salaries across all 50 states with 2026 data."
      schemaUrl="/rn-salary-by-state"
      faqs={faqs}
    >
      <p>
        Where you work matters as much as what you do. The difference between the highest and lowest-paying
        states for registered nurses is over $57,000/year. This comprehensive guide breaks down RN pay in all
        50 states for 2026 — with cost-of-living context to help you make real comparisons.
      </p>

      <SalaryTable
        title="RN Salary by State — Full Table (2026)"
        headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={allStates}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying States for Registered Nurses</h2>
      <p>
        California leads by a wide margin ($124,000), followed by Hawaii ($106,530), Oregon ($102,700), Washington
        ($100,890), and New York ($98,560). These states combine strong union protections, high cost of living,
        and severe nursing shortages.
      </p>
      <Link href="/rn-salary-by-state/highest-paying-states" className="text-primary font-semibold hover:underline text-sm">
        See the full highest-paying states breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Lowest-Paying States for RNs</h2>
      <p>
        Mississippi ($66,590), Alabama ($68,290), Iowa ($69,230), and Arkansas ($69,810) are the lowest-paying states.
        However, low cost of living in these regions can make the raw numbers misleading.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary Adjusted for Cost of Living</h2>
      <p>
        After cost of living adjustment, the best states shift dramatically. Washington, Nevada, and Texas —
        all with no state income tax — deliver strong real purchasing power. California and New York drop out
        of the top 10 on a COL-adjusted basis.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How State Nurse Shortages Affect Pay</h2>
      <p>
        States with severe nursing shortages — California, Nevada, Alaska, and much of the rural South — see the
        fastest pay growth. Hospitals compete aggressively for staff, driving up base rates, sign-on bonuses,
        and retention incentives.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Staff RN vs. Travel Nurse Pay by State</h2>
      <p>
        Travel nurses typically earn 20–50% more than staff RNs in the same state. The premium is largest in
        hard-to-fill states (Alaska, Hawaii, rural states) and specialties (ICU, OR, ER).
      </p>
      <Link href="/travel-nursing/salary-by-state" className="text-primary font-semibold hover:underline text-sm">
        See travel nurse salary by state →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Use This Data to Negotiate Your Salary</h2>
      <p>
        Bring state and metro-level data to every salary conversation. If you&apos;re being offered below state average,
        you have concrete data to push back. Our negotiation playbook walks through the full process.
      </p>
      <Link href="/salary-negotiation/nurse-playbook" className="text-primary font-semibold hover:underline text-sm">
        Get the negotiation playbook →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Check Your Contract After You Know Your Worth</h2>
      <p>
        Once you know what RNs earn in your target state, use our free nurse salary calculator and contract audit
        tool to verify your offer reflects market rates — and flag any red flags before you sign.
      </p>
      <Link href="/audit" className="text-primary font-semibold hover:underline text-sm">
        Use the free nurse salary calculator &amp; contract audit →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">State-Specific Salary Guides</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/rn-salary-by-state/california', title: 'California RN Salary' },
          { href: '/rn-salary-by-state/texas', title: 'Texas RN Salary' },
          { href: '/rn-salary-by-state/new-york', title: 'New York RN Salary' },
          { href: '/rn-salary-by-state/florida', title: 'Florida RN Salary' },
          { href: '/florida-rn-salary-2026', title: 'Florida RN Salary 2026 Deep Dive' },
          { href: '/rn-salary-by-state/highest-paying-states', title: 'Top 10 Highest-Paying States' },
          { href: '/highest-paying-states-for-rns-2026', title: 'Highest Paying States for RNs — 2026 Rankings' },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
            <span className="font-bold text-primary text-sm">{link.title} →</span>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Cities for Nurses in the United States</h2>
      <p>
        The highest-paying metro areas for registered nurses are concentrated in California, New York, and the Pacific Northwest. These markets combine strong union contracts, mandatory staffing ratios, and high cost of living that drives base pay up.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>San Francisco, CA:</strong> $145,000–$165,000/year ($69–$79/hr)</li>
        <li><strong>San Jose, CA:</strong> $140,000–$155,000/year ($67–$75/hr)</li>
        <li><strong>Los Angeles, CA:</strong> $122,000–$142,000/year ($59–$68/hr)</li>
        <li><strong>New York City, NY:</strong> $110,000–$128,000/year ($53–$62/hr)</li>
        <li><strong>Seattle, WA:</strong> $105,000–$118,000/year ($50–$57/hr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Experience Level</h2>
      <p>
        Experience is one of the strongest predictors of RN pay. Nationally, the gap between entry-level and senior nurses ranges from $25,000 to $50,000+, and the premium is even larger in high-pay states with union step increases.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $55,000–$75,000 nationally. New grads in California start at $85,000–$100,000; lower-paying states start near $52,000–$62,000.</li>
        <li><strong>3–5 years experience:</strong> $72,000–$95,000. Specialty certifications (CCRN, CEN) add $5,000–$12,000 to base pay at this stage.</li>
        <li><strong>10+ years experience:</strong> $90,000–$130,000+. Senior bedside nurses in high-pay states often exceed $130,000. Advancing to management or APRN licensure can push earnings to $150,000+.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay for Nurses</h2>
      <p>
        Most hospital systems pay a shift differential of 10–25% above base pay for evening and overnight shifts. In California and New York, this premium can add $8,000–$18,000 per year. Weekend differentials typically add another 5–15% on top of base.
      </p>
      <p>
        Federal law requires overtime at 1.5x the base hourly rate for hours beyond 40 per week. California goes further, requiring daily overtime after 8 hours in a single shift. RNs who regularly work overtime — especially in ICU, ER, and OR — can add $15,000–$35,000 annually to their income.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in the United States?</p>
          <p className="text-on-surface-variant">The national average RN salary is $89,010/year ($42.79/hr) in 2026, per BLS OEWS data. <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link> leads at $124,000, followed by Hawaii and Oregon above $100,000/year. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate your own pay.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in the United States?</p>
          <p className="text-on-surface-variant">The average hourly rate for registered nurses is $42.79/hr nationally. Rates range from approximately $32/hr in Mississippi to $60+/hr in California metro areas.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in the United States?</p>
          <p className="text-on-surface-variant"><Link href="/salary/california/san-francisco" className="text-primary hover:underline">Nurse salary in San Francisco</Link> leads nationally at $145,000–$165,000/year. <Link href="/salary/new-york/new-york" className="text-primary hover:underline">Nurse salary in New York City</Link> ranks third. For a no-tax alternative, see <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Explore More Salary Topics</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/nursing-salary', title: 'Nurse Salary Hub', desc: 'Comprehensive salary data, benchmarks, and resources.' },
          { href: '/salary-negotiation', title: 'Salary Negotiation Guide', desc: 'Scripts, tactics, and how to negotiate your offer.' },
          { href: '/highest-paying-nursing-specialties', title: 'Highest-Paying Specialties', desc: 'Compare ICU, ER, CRNA, NP, and specialty pay.' },
          { href: '/travel-nursing', title: 'Travel Nursing Pay', desc: 'Weekly packages, bonuses, and assignment evaluation.' },
        ].map(({ href, title, desc }) => (
          <Link key={href} href={href} className="p-4 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
            <p className="font-bold text-primary text-sm mb-1">{title}</p>
            <p className="text-on-surface-variant text-xs">{desc}</p>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
