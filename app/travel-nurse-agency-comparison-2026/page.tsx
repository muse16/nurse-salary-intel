import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Best Travel Nurse Agencies 2026: Pay Comparison + Which Agency Pays Most',
  description: 'Best travel nurse agencies 2026 ranked by pay, transparency, and contract terms. Compare AMN, Aya, FlexCare, Atlas, and 8 more — plus how to negotiate your package.',
};

const faqs = [
  {
    question: 'Which travel nurse agency pays the most in 2026?',
    answer: 'No single agency consistently pays the most — pay depends on the contract, facility, specialty, and location. However, smaller boutique agencies (FlexCare, Atlas MedStaff, Nomad Health) frequently offer higher weekly packages than national giants (AMN, Aya) because they have lower overhead and pass more of the bill rate to the nurse. The most effective strategy is to submit your profile to 3–4 agencies simultaneously and compare packages for the same contract. The nurse who takes the first offer from one agency often leaves $100–$300/week on the table.',
  },
  {
    question: 'What is a typical travel nurse pay package in 2026?',
    answer: 'A typical travel nurse package in 2026 includes: (1) a taxable base wage ($22–$30/hr for most specialties), (2) a tax-free housing stipend ($900–$1,800/week depending on location), and (3) a tax-free meals/incidentals stipend ($280–$500/week). All-in, most travel nurses earn $2,600–$4,800/week depending on specialty and location. ICU, OR, and L&D specialties in California consistently command the highest all-in packages. The tax-free stipends are only legally valid if you maintain a qualifying tax home.',
  },
  {
    question: 'What is a tax home and why does it matter for travel nurses?',
    answer: 'A tax home is your primary place of business — typically your permanent residence where you maintain financial ties (mortgage or rent, voter registration, driver\'s license, etc.). To receive tax-free housing and meal stipends from a travel agency, IRS rules require that you travel away from your tax home for work. If you don\'t have a qualifying tax home, all stipends become taxable income. Most experienced travel nurses keep an apartment or room in their home state to preserve tax home status — typically costing $400–$800/month but saving $1,000–$2,000/month in taxes on stipends.',
  },
  {
    question: 'What should I look for in a travel nurse contract?',
    answer: 'The five things to audit in every contract: (1) guaranteed hours — ensure 36 hours/week is contractually guaranteed, not just "expected"; (2) cancellation policy — understand what happens if the facility cancels your shift or your contract; (3) extension clause — know your rights and notice requirements if the facility wants to extend; (4) housing stipend structure — confirm it\'s tax-free stipend vs. agency-provided housing (you want stipend); (5) overtime rate — confirm the base wage used to calculate overtime, not just that OT is "time and a half" (low base + high stipend is a common trick to reduce OT cost).',
  },
];

const agencyRows = [
  { label: 'Aya Healthcare', avgSalary: '★★★★☆', note: 'Largest agency by volume. Broad contract access. Pay competitive, not top. Excellent app/tech platform.' },
  { label: 'AMN Healthcare', avgSalary: '★★★☆☆', note: 'Largest national staffing company. More system contracts. Lower pay transparency. Good benefits.' },
  { label: 'FlexCare Medical Staffing', avgSalary: '★★★★★', note: 'Boutique, high pay transparency. "G.O. (Gold Option)" program shows full package breakdown. Consistently top-3 on pay.' },
  { label: 'Atlas MedStaff', avgSalary: '★★★★★', note: 'Employee-owned, strong nurse loyalty. Known for high packages and honest recruiters.' },
  { label: 'Nomad Health', avgSalary: '★★★★☆', note: 'Tech-forward, self-service. Shows package breakdown upfront. Competes well on ICU/OR specialty contracts.' },
  { label: 'Travel Nurse Across America (TNAA)', avgSalary: '★★★★☆', note: 'Mid-size. Strong in South/Midwest. Nurse reviews consistently positive on recruiter quality.' },
  { label: 'Host Healthcare', avgSalary: '★★★★☆', note: 'Strong West Coast/California inventory. Good package transparency. Day-one benefits.' },
  { label: 'Stability Healthcare', avgSalary: '★★★★☆', note: 'Tech-transparent pay model. Shows blended rate vs. stipend breakdown. Strong CA contracts.' },
  { label: 'TotalMed', avgSalary: '★★★☆☆', note: 'Broad geography, mid-tier pay. Good for nurses who want high placement volume.' },
  { label: 'Medical Solutions', avgSalary: '★★★☆☆', note: 'Large mid-tier. Strong rural/underserved placements. Standard packages.' },
];

const specialtyRateRows = [
  { label: 'ICU / Critical Care (California)', avgSalary: '$4,000–$5,200/week', note: 'Highest-paying specialty + market combo' },
  { label: 'OR (California)', avgSalary: '$3,800–$4,800/week', note: 'Robotic proficiency adds $200–$500/week' },
  { label: 'ICU (New York / Boston)', avgSalary: '$3,800–$4,600/week', note: 'Competitive with CA on top contracts' },
  { label: 'L&D (California)', avgSalary: '$3,600–$4,400/week', note: 'High-risk MFM at top of range' },
  { label: 'NICU (national)', avgSalary: '$3,400–$4,600/week', note: 'Level IV facilities pay premium' },
  { label: 'ER / ED (national)', avgSalary: '$3,200–$4,400/week', note: 'Level I trauma premium' },
  { label: 'Med-Surg / PCU (California)', avgSalary: '$2,800–$3,600/week', note: 'Ratio law keeps CA floor high' },
  { label: 'Med-Surg (South / Midwest)', avgSalary: '$2,400–$3,000/week', note: 'Lowest-paying market / specialty combo' },
];

const negotiationRows = [
  { label: 'Submit to 3–4 agencies simultaneously', avgSalary: 'High impact', note: 'Creates competition — agencies may match or beat each other' },
  { label: 'Request blended rate / pay breakdown', avgSalary: 'High impact', note: 'Agencies that won\'t show breakdown are hiding unfavorable splits' },
  { label: 'Negotiate guaranteed hours (36/week)', avgSalary: 'Critical', note: 'Without this, you can be sent home unpaid on slow days' },
  { label: 'Ask about referral bonuses', avgSalary: 'Medium impact', note: '$500–$2,000 per referred nurse who completes a contract' },
  { label: 'Time extensions for same facility', avgSalary: 'Medium impact', note: 'Often higher pay than initial contract — facilities pay for proven performers' },
  { label: 'Request completion bonus in writing', avgSalary: 'Medium impact', note: '$500–$2,000 common on hard-to-fill contracts' },
];

export default function TravelNurseAgencyComparison() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/salary-guides' },
        { label: 'Travel Nurse Agency Comparison 2026' },
      ]}
      h1="Best Travel Nurse Agencies 2026: Pay Comparison, Contract Terms & How to Negotiate"
      lastUpdated="May 2026"
      schemaTitle="Best Travel Nurse Agencies 2026"
      schemaDescription="Travel nurse agency comparison 2026: AMN, Aya, FlexCare, Atlas, Nomad, and more ranked by pay, transparency, and contract terms."
      schemaUrl="/travel-nurse-agency-comparison-2026"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-6 border border-outline-variant">
        <p className="text-on-surface font-medium">
          <strong>Quick Answer:</strong> Travel nurses earn <strong>$2,600–$5,200/week</strong> all-in depending on specialty, location, and agency. No single agency consistently pays the most — the highest packages come from submitting to <strong>3–4 agencies simultaneously</strong> and comparing packages for the same contract. FlexCare and Atlas MedStaff lead on pay transparency; Aya and AMN lead on contract volume. ICU nurses in California command the highest packages nationally at <strong>$4,000–$5,200/week</strong>.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/travel-nurse-agency-comparison-2026-hero.png"
        alt="Travel nurse with a rolling suitcase arriving at a hospital entrance in a new city, wearing scrubs and badge, golden hour light suggesting movement and independence"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Travel nursing has matured significantly since the pandemic-era pay peak. The $10,000/week rates of 2021–2022 are gone, but 2026 travel nurse pay remains substantially above pre-pandemic levels — and well above staff nurse rates in most markets. A California ICU traveler clearing <strong>$4,200–$5,000/week</strong> earns $175,000–$200,000+ annualized, tax-free stipends included.
      </p>
      <p>
        The agency you work with matters — but not in the way most nurses assume. The question isn't "which agency is best?" It's "which agency is offering the best package for this specific contract at this specific facility?" Those answers change weekly. The travel nurses who earn the most treat agencies as distribution channels, not partners — submitting their profile to multiple agencies simultaneously and letting competition drive the best offer to the top.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Top Travel Nurse Agencies Ranked (2026)</h2>
      <p>
        Rankings based on nurse-reported pay packages, Glassdoor/Indeed reviews, pay transparency practices, and contract volume in specialty markets. Five stars = recommended without reservation; three stars = decent for specific use cases.
      </p>
      <SalaryTable
        headers={['Agency', 'Rating', 'Summary']}
        rows={agencyRows}
        title="Travel nurse agency comparison 2026. Ratings based on nurse reviews and pay transparency."
      />

      {/* Data chart */}
      <Image
        src="/images/travel-nurse-agency-comparison-2026-comparison.png"
        alt="Bar chart showing average weekly travel nurse pay packages by specialty in 2026, with California ICU leading at $4,000–$5,200 per week"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse Pay by Specialty and Market (2026)</h2>
      <p>
        Bill rates — what the hospital pays the agency — vary enormously by specialty, state, and time of year. The agency's margin (typically 20–35% of the bill rate) is why comparing packages across agencies for the same contract is so valuable. Here's the current market by specialty:
      </p>
      <SalaryTable
        headers={['Specialty + Market', 'Weekly Package (All-In)', 'Notes']}
        rows={specialtyRateRows}
        title="Travel nurse weekly pay by specialty and market, 2026. All-in includes taxable base + tax-free housing + meal stipends."
      />
      <p>
        California consistently tops the range because: (1) mandatory nurse-to-patient ratios limit the hospital's ability to run short-staffed as an alternative to agency, (2) cost of living drives housing stipend amounts up, and (3) the state's labor market competitiveness keeps bill rates elevated. For travelers willing to build consecutive California contracts across different facilities (to maintain tax-home compliance), the earning potential is unmatched.
      </p>

      {/* Photorealistic inline image */}
      <Image
        src="/images/travel-nurse-agency-comparison-2026-hospital.png"
        alt="Travel nurse reviewing a contract on a tablet in a hospital break room, professional setting with nursing badge visible and natural light"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate the Best Travel Nurse Package</h2>
      <p>
        Most travel nurses accept the first offer from their recruiter. The nurses who maximize their earnings treat every contract as a negotiation. Here's the leverage you have:
      </p>
      <SalaryTable
        headers={['Tactic', 'Impact Level', 'How to Use It']}
        rows={negotiationRows}
        title="Travel nurse contract negotiation tactics and their pay impact."
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Understanding Your Pay Package: The Blended Rate Breakdown</h2>
      <p>
        Every travel nurse package is built from the same components. Understanding them protects you from low-base tricks that reduce your overtime earnings:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-on-surface-variant">
        <li>
          <strong>Taxable base wage ($22–$30/hr):</strong> This is what's used to calculate overtime. Agencies sometimes quote a high all-in rate while keeping the base low — which means overtime is calculated at 1.5× a small number rather than 1.5× your true effective rate. Always ask: "What is my base wage for overtime calculation?"
        </li>
        <li>
          <strong>Tax-free housing stipend ($900–$1,800/week):</strong> Only valid if you maintain a qualifying tax home. Paid weekly regardless of hours, not included in overtime calculation. The geographic component — GSA per diem rates set the IRS maximum for each city.
        </li>
        <li>
          <strong>Tax-free meals/incidentals stipend ($280–$500/week):</strong> Also tied to GSA rates. Paid as a daily rate across your contract weeks, not per shift.
        </li>
        <li>
          <strong>Agency-provided housing vs. stipend:</strong> Always choose the <em>stipend</em> over agency-provided housing. Agency housing is often shared, distant from the facility, or lower quality than what you'd choose. The stipend gives you control and usually nets you more flexibility.
        </li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tax Home Rules: The #1 Travel Nurse Financial Mistake</h2>
      <p>
        The IRS requires that you be "away from home" to receive non-taxable travel benefits. If you don't have a qualifying tax home — a permanent place of business where you bear duplicated expenses — then ALL of your housing and meal stipends are legally taxable income.
      </p>
      <p>
        For nurses who sold their permanent residence and became "nomadic," the IRS considers wherever they work to be their tax home, eliminating stipend tax-free status. The cost of maintaining a tax home (rent, utilities — typically $600–$1,000/month) is almost always worth it: at a $1,400/week combined stipend, having that stipend be tax-free saves approximately <strong>$19,000–$26,000/year</strong> in federal and state income taxes versus having it taxed at your marginal rate.
      </p>
      <p>
        Consult a tax professional familiar with travel nursing before your first contract. The RV and nomadic nurse communities have built significant expertise here — look for CPAs who specialize in travel healthcare workers.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Specialty Pay — Which Units Travel Best?</h2>
      <p>
        Not all nurses can travel in every specialty. Most facilities require demonstrable recent experience in the specific unit type — typically 2+ years. Here's how the specialties rank by travel market desirability and earnings:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>ICU (best overall):</strong> Highest demand, highest pay, broadest geography. CCRN certification materially improves placement rate in premium contracts.</li>
        <li><strong>OR (high demand, specialized):</strong> High pay but harder to place — facilities require specialty service experience (cardiac, ortho, robotics). The pool of qualified OR travelers is small, which keeps rates high.</li>
        <li><strong>L&D (stable, year-round):</strong> Birth volume doesn't vary seasonally like flu/respiratory. Consistent demand. RNC-OB and C-EFM required or preferred at most facilities.</li>
        <li><strong>ER/ED (high demand, volatile):</strong> Rates are high but contract cancellations are more common — ED census is unpredictable and facilities sometimes cancel when volume drops.</li>
        <li><strong>NICU (specialty premium):</strong> Level IV NICU experience is rare. Nurses who can demonstrate NICU-specific skills command premium placement.</li>
        <li><strong>Med-Surg/PCU (easiest entry, lowest pay):</strong> Easiest to enter travel nursing, but also the most price-competitive specialty. Good for building initial travel experience before transitioning to higher-acuity travel roles.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Staff vs. Travel: The Long-Run Math</h2>
      <p>
        Travel nursing earns more on a per-week basis, but the comparison isn't straightforward over a career. Consider:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Retirement contributions:</strong> Many travel agencies offer 401(k) matches, but the benefit is typically less generous than a Magnet hospital's 403(b) with pension top-up. A nurse who stays staff at Kaiser for 20 years accumulates a defined benefit pension that travel nursing can't replicate.</li>
        <li><strong>Step scale earnings:</strong> A CNA-contract Kaiser nurse reaches $140,000–$148,000 after 15 years through guaranteed step increases. That's competitive with, and in some scenarios exceeds, what an average traveler earns once you normalize for gaps between contracts and the cost of maintaining a tax home.</li>
        <li><strong>The hybrid strategy:</strong> Many nurses do 3–5 years of travel to pay off loans or build capital, then return to staff nursing to lock in union step scale benefits for the last 15–20 years of their career. That combined arc often outperforms either pure strategy alone.</li>
      </ul>
      <p>
        Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model your specific numbers — staff vs. travel, by specialty and state.
      </p>

      {/* Sources */}
      <p className="mt-8 text-sm text-on-surface-variant">
        <strong>Sources & Methodology:</strong> Agency ratings based on aggregate nurse reviews from Glassdoor, Indeed, Travel Nursing Central, and The Gypsy Nurse community surveys (2024–2025). Pay package ranges based on recruiter-reported rates and NurseFly/Vivian marketplace data for Q1 2026. Tax home guidance based on IRS Publication 463 (Travel, Gift, and Car Expenses). Individual contract rates vary by facility, specialty, and timing. This page does not constitute tax or legal advice.
      </p>

      {/* Related guides */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link href="/critical-care-nurse-salary-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Critical Care Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">ICU pay — the top travel specialty</div>
        </Link>
        <Link href="/or-nurse-salary-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">OR Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Perioperative pay and travel premium</div>
        </Link>
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">California RN Salary</div>
          <div className="text-sm text-on-surface-variant mt-1">Why CA consistently tops travel pay</div>
        </Link>
        <Link href="/salary-negotiation/night-shift-differential-pay" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Night Shift Differential Pay</div>
          <div className="text-sm text-on-surface-variant mt-1">Maximize differential on travel contracts</div>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
