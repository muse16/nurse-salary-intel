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

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Data sourced from US Bureau of Labor Statistics OEWS May 2024 and entry-level nursing market surveys. Adjusted for 3–4% annual wage growth projections into 2026. State-level data reflects large health systems, union vs. non-union comparisons, and published new grad residency program data. Sign-on bonus and negotiation data from published offers and HR surveys. Figures are estimates and vary by employer, market, facility type, and contract terms.';

export default function EntryLevelNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Entry Level Nurse Salary' },
      ]}
      h1="Entry Level Nurse Salary — What New RNs Make in 2026"
      lastUpdated="April 2026"
      author={author}
      sources={sources}
      methodology={methodology}
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">State-by-State New Grad RN Pay: What Affects Your Starting Offer</h2>
      <p>
        The $47,000 gap between a Bay Area new grad and a rural Florida new grad isn't random. Several structural factors determine your starting pay before you negotiate a single dollar:
      </p>
      <div className="space-y-4 text-on-surface-variant">
        <div>
          <p className="font-semibold text-on-surface">Union states with mandatory ratios (California, New York, Massachusetts)</p>
          <p>Collective bargaining agreements lock in starting salaries. New grads at union hospitals start on a defined step schedule—often 10–15% above non-union peers in the same state. California new grads at Kaiser or SEIU hospitals start 10–20% higher than non-union rivals. You don't negotiate salary (rarely), but you get automatic raises on a defined timeline.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">High-cost-of-living metros without union protection (Boston, Seattle, Denver)</p>
          <p>These markets compete on salary alone because they can't restrict unions further. New grads command $75,000–$85,000 to offset local housing and childcare costs. Hospitals are constrained by COGS but not by contract terms, so there's room to negotiate.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Mid-tier markets with moderate union presence (Texas, Colorado Springs, Raleigh)</p>
          <p>Base salaries are $62,000–$72,000. New grads compete less on hourly rate and more on bonuses, shift flexibility, and unit assignment. These markets see the most negotiation wins because facilities have flexibility.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Rural and low-COL regions (rural Florida, Mississippi, Nebraska, rural Oregon)</p>
          <p>Starting salaries drop to $50,000–$60,000, but total package value (loan repayment, housing assistance, relocation) often closes the gap. A new grad in rural Kansas might start at $54,000 base + $25,000 in loan repayment vs. a $75,000 Boston new grad with $0 assistance. Do the math on total value.</p>
        </div>
      </div>
      <p className="mt-4">
        <strong>Strategy:</strong> If you're open to relocation, compare total package value (salary + sign-on + loan repayment + benefits) rather than base salary alone. A rural offer with $20,000 in loan repayment may win over a $70,000 metro offer after taxes and cost-of-living adjustments.
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

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonus Breakdown by Region and Facility Type (2026)</h2>
      <p>
        Sign-on bonuses vary dramatically by geography, facility type, and unit demand. Teaching hospitals, academic medical centers, and rural facilities competing for new grad talent typically offer higher sign-ons. Here&apos;s what new grads can realistically expect:
      </p>
      <div className="space-y-4 text-on-surface-variant">
        <div>
          <p className="font-semibold text-on-surface">High-Demand Markets (California Bay Area, New York City, major metro ICUs)</p>
          <p>$8,000–$15,000 typical range. Academic medical centers like UCSF, Mass General, or NYC Health + Hospital often lead at $12,000+. High-acuity units (ICU, ED, Oncology) command premium bonuses.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Mid-Tier Markets (Austin, Denver, Seattle, Phoenix suburbs)</p>
          <p>$4,000–$8,000 typical. Mid-sized health systems and independent hospitals compete on bonuses when salary grades are fixed. Critical units (ICU, Trauma) may push to $10,000.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Rural and Underserved (Texas panhandle, rural Florida, Midwest)</p>
          <p>$2,000–$6,000 standard, but combined with student loan repayment programs ($15,000–$30,000) and relocation assistance. Total package value can exceed high-demand markets.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Telehealth and Home Health (Emerging sector)</p>
          <p>$1,000–$4,000 sign-on, but with flexible scheduling and higher hourly rates ($28–$35/hr). Competitive for new grads willing to work remotely or in home settings.</p>
        </div>
      </div>
      <p className="mt-4">
        <strong>Negotiation rule:</strong> The sign-on bonus listed in the job posting is never the maximum. It&apos;s the offer they make to new grads who don&apos;t ask. Respond to the offer with: &quot;Thank you for the offer. Before I accept, I&apos;d like to discuss the sign-on bonus. What&apos;s the maximum available for this position?&quot; Most recruiters can raise it 20–50% without escalation.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiation Script: What to Say When You Get the Offer</h2>
      <p>
        Most new grads accept the first offer verbatim. This costs them an average of $8,000–$15,000 in negotiable benefits over the first two years. Here's a practical script for your offer conversation:
      </p>
      <div className="bg-surface-variant/20 border-l-4 border-primary p-4 rounded space-y-3 text-on-surface-variant text-sm">
        <div>
          <p className="font-semibold text-on-surface">When the recruiter says: "We're excited to offer you $68,000 and a $3,000 sign-on bonus."</p>
          <p className="italic">Your response:</p>
          <p>&quot;Thank you — I'm excited about this opportunity. Before I accept, I have a few items I'd like to discuss. First, what's the maximum sign-on bonus available for this new grad position? And are there any other benefits we can adjust — such as shift assignment, loan repayment, or tuition reimbursement?&quot;</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">If they say: "Sign-on bonuses are fixed at $3,000 for new grads."</p>
          <p className="italic">Follow-up:</p>
          <p>&quot;I understand. In that case, can we explore night shift assignment? I'm open to nights or weekends, which I understand typically includes a differential. Would that be possible?&quot;</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">If they say: "Night differential can't be negotiated—it applies automatically based on shift."</p>
          <p className="italic">Redirect to unit/commitment:</p>
          <p>&quot;Got it. One more question—are there any loan repayment programs or tuition reimbursement available? And is there flexibility in which unit I start on, or am I assigned based on current needs?&quot;</p>
        </div>
      </div>
      <p className="mt-4">
        <strong>Key principles:</strong> (1) Always ask for the maximum before accepting the first number. (2) Have 2–3 backup negotiation items ready (shift, unit, loan repayment, relocation help). (3) Don't negotiate base salary unless it's a startup or specialty role — health systems rarely move on this. (4) Get everything in writing, including the commitment terms for any bonus or loan repayment. (5) A 1–2 year commitment with prorated repayment is standard; make sure you're comfortable with the numbers before signing.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">First-Year RN Salary Trajectory: Month-by-Month Growth</h2>
      <p>
        Your first year has more variability than years 2–10. Understanding what's coming helps you plan and spot opportunities to accelerate pay growth early.
      </p>
      <div className="space-y-3 text-on-surface-variant text-sm">
        <div className="bg-surface-variant/10 p-3 rounded">
          <p className="font-semibold text-on-surface">Months 1–3: Preceptorship / Onboarding</p>
          <p>You're on your contracted base salary ($68,000 / $32.69/hr in this example). Most preceptorships include a shift differential (10–20%), so effective pay is slightly higher. No overtime unless mandatory. Focus: learning, not earning. You're not eligible for bonuses, shift adjustments, or raises yet.</p>
        </div>
        <div className="bg-surface-variant/10 p-3 rounded">
          <p className="font-semibold text-on-surface">Months 3–6: Off Preceptorship, Independent Practice</p>
          <p>Once preceptorship ends (~3 months), you can pick up extra shifts. This is when most new grads start working 3–4 12-hour shifts (standard), then adding overtime. Overtime pay (1.5x or 2x depending on shifts) can add $200–$400/pay period. Annual equivalent: $68,000 base + $5,000–$10,000 overtime.</p>
        </div>
        <div className="bg-surface-variant/10 p-3 rounded">
          <p className="font-semibold text-on-surface">Months 6–12: Specialty Interest Emerges</p>
          <p>By month 6, your unit's specialty become apparent. If you're in ICU, you can start working toward CCRN eligibility (usually 1,750 hours by month 12). If you started in Med-Surg but ICU calls, this is the window to request a transfer. Transfers often come with a temporary pay freeze, but specialty pay begins 6–12 months later. First-year total comp if you stay put: $68,000–$78,000 with overtime.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">5-Year Salary Growth Path: Multiple Scenarios</h2>
      <p>
        Your second through fifth year determine whether you hit the $100,000 mark by year 5 or plateau at $75,000. The difference is intentionality. Here are three realistic paths:
      </p>
      <div className="space-y-4 text-on-surface-variant">
        <div className="border-l-2 border-primary pl-4">
          <p className="font-semibold text-on-surface">Path 1: Med-Surg → ICU + CCRN (Fastest growth)</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Year 1 (new grad Med-Surg, with overtime): $73,000</li>
            <li>Year 2 (transfer to ICU, 6-month freeze then specialty bump): $76,000</li>
            <li>Year 3 (CCRN certified, annual raise): $82,000</li>
            <li>Year 4 (2% annual + shift differential adjustment): $88,000</li>
            <li>Year 5 (senior ICU RN status): $94,000–$102,000</li>
          </ul>
          <p className="text-xs mt-2">Total 5-year earnings: ~$415,000</p>
        </div>
        <div className="border-l-2 border-primary/50 pl-4">
          <p className="font-semibold text-on-surface">Path 2: Stay Med-Surg, Consistent Overtime (Stable growth)</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Year 1: $73,000 (base + overtime)</li>
            <li>Year 2 (annual raise 2–3%): $75,000</li>
            <li>Year 3: $77,000</li>
            <li>Year 4: $79,000</li>
            <li>Year 5: $81,000–$84,000</li>
          </ul>
          <p className="text-xs mt-2">Total 5-year earnings: ~$385,000 | Growth: +23%</p>
        </div>
        <div className="border-l-2 border-primary/30 pl-4">
          <p className="font-semibold text-on-surface">Path 3: New Grad, Minimal Overtime, No Specialty Move (Slowest growth)</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Year 1: $68,000 (base only)</li>
            <li>Year 2 (annual raise 2%): $69,360</li>
            <li>Year 3: $70,747</li>
            <li>Year 4: $72,162</li>
            <li>Year 5: $73,605</li>
          </ul>
          <p className="text-xs mt-2">Total 5-year earnings: ~$354,000 | Growth: +8%</p>
        </div>
      </div>
      <p className="mt-4">
        <strong>The money move:</strong> If your goal is $100K by year 5, specialty + certification is non-negotiable. The $50,000+ difference between paths 1 and 3 over five years isn't luck — it's deliberate unit transfer timing and certification pursuit.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Before You Accept: Critical Contract Terms to Negotiate</h2>
      <p>
        Salary is one line item. The contract terms around bonuses, repayment, mandatory overtime, and float pool duty can reduce your effective first-year pay by 20%+ if you miss them. Request a contract review from a healthcare employment attorney ($200–$400) before signing a multi-year commitment with repayment penalties.
      </p>
      <p>
        <strong>Red flags in new grad contracts:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Prorated bonus repayment on exit.</strong> If you take a $10,000 sign-on bonus but leave after 18 months (of a 2-year commitment), you owe back $5,000. Ensure the proration is monthly, not annual, and that internal transfers don't trigger repayment.</li>
        <li><strong>Unlimited mandatory overtime.</strong> "As-needed mandatory overtime" can mean 2–4 shifts/month at premium pay (good) or 1–2 uncompensated shifts/month (bad). Clarify the limits and compensation.</li>
        <li><strong>Float pool requirements.</strong> Floating to unfamiliar units isn't a penalty, but if the contract mandates 2+ float shifts/month and you're a new grad, you'll be out of your element frequently. Negotiate new grads out of float pools if possible.</li>
        <li><strong>Non-compete clauses.</strong> Some rural hospitals include 12-month non-competes within a 50-mile radius. This is usually not enforceable, but it's leverage to remove it before signing.</li>
      </ul>

      <p className="mt-6">
        Before accepting your first offer, have your contract reviewed. New grad contracts often contain cancellation penalties, mandatory overtime clauses, and float pool requirements that significantly affect your first-year experience. Use our free <Link href="/audit" className="text-primary hover:underline">contract audit tool</Link> to flag these terms before you sign.
      </p>
    </SEOPageLayout>
  );
}
