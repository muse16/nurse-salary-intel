import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import RelatedResources from '@/components/RelatedResources';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nursing Salary 2026: Pay Packages, Top States & How to Earn More',
  description:
    'Travel nurses earn $90,000–$150,000+/year. Explore 2026 pay packages, top-paying states, specialty premiums, contract red flags, and how to evaluate any travel assignment.',
  alternates: { canonical: 'https://nursesalaryintel.com/travel-nursing' },
  openGraph: {
    title: 'Travel Nursing Salary 2026: Pay Packages, Top States & How to Earn More',
    description: 'Weekly packages, state premiums, specialty rates, and contract evaluation for travel nurses.',
    url: 'https://nursesalaryintel.com/travel-nursing',
  },
};

const topStateData = [
  { label: 'California', avgSalary: '$2,800–$3,600/wk', hourlyRate: '$60–$78/hr' },
  { label: 'New York', avgSalary: '$2,600–$3,200/wk', hourlyRate: '$56–$70/hr' },
  { label: 'Hawaii', avgSalary: '$2,500–$3,100/wk', hourlyRate: '$54–$68/hr' },
  { label: 'Washington', avgSalary: '$2,400–$3,000/wk', hourlyRate: '$52–$65/hr' },
  { label: 'Oregon', avgSalary: '$2,300–$2,900/wk', hourlyRate: '$50–$63/hr' },
  { label: 'Alaska', avgSalary: '$2,400–$3,200/wk', hourlyRate: '$52–$70/hr' },
  { label: 'Texas', avgSalary: '$2,000–$2,600/wk', hourlyRate: '$43–$56/hr' },
  { label: 'Florida', avgSalary: '$1,900–$2,400/wk', hourlyRate: '$41–$52/hr' },
];

const faqs = [
  {
    question: 'How much do travel nurses make in 2026?',
    answer:
      'Travel nurses typically earn $90,000–$150,000+/year depending on specialty, state, and contract structure. Weekly all-in packages (base pay + housing stipend + meals allowance) range from $1,800–$2,200/week in lower-demand markets to $2,800–$3,600/week in California and Hawaii. ICU, OR, and ER travel nurses command the highest weekly rates.',
  },
  {
    question: 'Is travel nursing worth it financially?',
    answer:
      'For most nurses with 1–2 years of experience, travel nursing offers a 20–50% earnings premium over staff positions. The financial case is strongest for nurses who can maintain a tax home, qualify for tax-free housing and meal stipends, and work back-to-back high-demand assignments. The premium shrinks if you factor in instability, benefit gaps, and higher housing costs in major metros.',
  },
  {
    question: 'What does a travel nurse pay package include?',
    answer:
      'A complete travel nurse package includes: taxable hourly base pay, tax-free housing stipend (if you maintain a tax home), tax-free meal/incidentals stipend, completion bonus (varies by agency), health insurance (day-1 or after 30 days depending on contract), and sometimes 401(k) matching. Always ask for a full written breakdown — posted rates often combine taxable and non-taxable income in a single "blended" rate.',
  },
  {
    question: 'How do I evaluate a travel nursing contract?',
    answer:
      'Key items to verify: (1) weekly gross pay broken into taxable base + tax-free stipends, (2) guaranteed hours (36 or 48/week minimum), (3) cancellation policy — what you get paid if the facility cancels early, (4) overtime rate and threshold, (5) float unit restrictions, (6) extension terms and rate lock. Use our contract red flags guide to check for problematic clauses before signing.',
  },
];

const relatedItems = [
  {
    href: '/travel-nursing/salary-guide-2026',
    title: 'Travel Nurse Salary Guide 2026',
    desc: 'Full breakdown of pay packages, tax-free stipends, and how to maximize weekly earnings.',
  },
  {
    href: '/travel-nursing/pay-package-breakdown',
    title: 'Pay Package Breakdown',
    desc: 'Taxable vs. tax-free components, agency margins, and what your "all-in" rate really means.',
  },
  {
    href: '/travel-nursing/salary-by-state',
    title: 'Travel Nurse Salary by State',
    desc: 'Weekly rate ranges for all 50 states — which states pay most and why.',
  },
  {
    href: '/travel-nursing/salary-by-specialty',
    title: 'Travel Nurse Salary by Specialty',
    desc: 'ICU, ER, OR, L&D, and NICU travel pay compared by specialty and market demand.',
  },
  {
    href: '/travel-nursing/how-to-negotiate-contract',
    title: 'How to Negotiate a Travel Contract',
    desc: 'Scripts and tactics for pushing back on rates, hours, and package terms.',
  },
  {
    href: '/travel-nursing/contract-red-flags',
    title: 'Travel Contract Red Flags',
    desc: '10+ clauses to flag before signing — cancellation policies, float language, and penalty traps.',
  },
  {
    href: '/travel-nursing/vs-staff-nurse-salary',
    title: 'Travel vs. Staff Nurse Salary',
    desc: 'Real comparison of total compensation — when travel pays more and when it doesn\'t.',
  },
  {
    href: '/audit',
    title: 'Free Contract Audit Tool',
    desc: 'Run a 15-point red flag check on any travel or employment contract.',
  },
];

export default function TravelNursingHub() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing' },
      ]}
      h1="Travel Nursing Salary — 2026 Complete Guide"
      lastUpdated="April 2026"
      schemaTitle="Travel Nursing Salary Guide 2026"
      schemaDescription="Weekly pay packages, top-paying states, specialty premiums, and contract evaluation for travel nurses in 2026."
      schemaUrl="/travel-nursing"
      faqs={faqs}
    >
      <p>
        Travel nursing offers RNs 20–50% more than equivalent staff positions — but the pay structures are
        complex, and what you see in a job posting is rarely what you take home. This hub covers everything
        you need to evaluate, negotiate, and maximize a travel nursing assignment in 2026: weekly package
        breakdowns, top-paying states and specialties, contract red flags, and real comparisons to staff pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Top-Paying States for Travel Nurses (2026)</h2>
      <p>
        California, New York, and Hawaii consistently pay the highest travel nurse rates — driven by strict
        nurse-to-patient ratio laws, union contracts, and chronic nursing shortages. Alaska is also a
        premium market due to geographic difficulty and isolation pay. Texas and Florida offer lower weekly
        rates but have no state income tax, which improves net take-home pay.
      </p>

      <SalaryTable
        title="Travel Nurse Weekly Pay by State (2026)"
        headers={['State', 'Weekly All-In Package', 'Blended Hourly Rate']}
        rows={topStateData}
        source="NurseSalaryIntel travel contract data + BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Travel Nurse Pay Packages Work</h2>
      <p>
        A travel nurse package has two components: taxable base pay and tax-free stipends. The tax-free
        portion (housing + meals + incidentals) is only available to nurses who maintain a legitimate tax
        home — a permanent residence in a different location from their assignment. For nurses who qualify,
        this dramatically reduces effective tax rate and boosts real take-home pay.
      </p>
      <p>
        A typical $2,400/week package might break down as: $800 taxable base pay ($20/hr × 40 hrs) +
        $1,200/week tax-free housing stipend + $400/week tax-free meals allowance. On a staff comparison,
        the $2,400 total is equivalent to a $130,000+ salary when you account for the tax advantage on
        stipend income. Always ask for a full itemized breakdown before comparing packages across agencies.
      </p>
      <Link href="/travel-nursing/pay-package-breakdown" className="text-primary font-semibold hover:underline text-sm">
        Read the full pay package breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Travel Nurse Specialties</h2>
      <p>
        ICU/critical care travel nurses command the highest weekly rates — typically $2,600–$3,800/week in
        premium markets. OR, NICU, and ER travel nurses are close behind. Med-Surg travel nurses earn the
        least but are the most consistently in demand. Specialty certifications (CCRN, CNOR, CEN) add
        meaningful premiums on top of base travel rates.
      </p>
      <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline text-sm">
        Compare travel nurse pay by specialty →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Before You Sign: Contract Red Flags</h2>
      <p>
        The most expensive mistake travel nurses make is signing without reading the cancellation and float
        clauses. Facility-side cancellation with no guaranteed pay means you can lose a 13-week contract
        with two weeks&apos; notice and no compensation for relocation or housing commitments. Float language
        that allows unlimited assignments to unfamiliar units is both a safety issue and a pay issue.
        Use our contract audit tool to check any travel contract before you sign.
      </p>
      <Link href="/travel-nursing/contract-red-flags" className="text-primary font-semibold hover:underline text-sm">
        See the full list of travel contract red flags →
      </Link>

      <RelatedResources
        heading="Travel Nursing Resources"
        items={relatedItems}
        columns={2}
      />
    </SEOPageLayout>
  );
}
