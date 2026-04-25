import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Miami RN Salary 2026: Hourly Pay + Pay by Experience',
  description: 'Miami RN salary 2026: hourly pay, pay by experience, hospital-system pay notes, differentials, and how Miami compares to the rest of Florida.',
};

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$70,500 – $81,000', hourlyRate: '$34 – $39/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$79,000 – $91,500', hourlyRate: '$38 – $44/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$87,000 – $100,000', hourlyRate: '$42 – $48/hr' },
  { label: 'Senior (10–19 yrs)', avgSalary: '$94,000 – $108,000', hourlyRate: '$45 – $52/hr' },
  { label: 'Veteran (20+ yrs)', avgSalary: '$100,000 – $118,500', hourlyRate: '$48 – $57/hr' },
];

const cityComparisonData = [
  { label: 'Miami–Fort Lauderdale–Pompano Beach', avgSalary: '$90,000 – $97,000', hourlyRate: '$43 – $47/hr' },
  { label: 'Naples–Marco Island', avgSalary: '$92,000 – $100,000', hourlyRate: '$44 – $48/hr' },
  { label: 'Tampa–St. Petersburg–Clearwater', avgSalary: '$86,000 – $93,000', hourlyRate: '$41 – $45/hr' },
  { label: 'Orlando–Kissimmee–Sanford', avgSalary: '$82,000 – $89,000', hourlyRate: '$39 – $43/hr' },
  { label: 'Jacksonville', avgSalary: '$82,000 – $89,000', hourlyRate: '$39 – $43/hr' },
  { label: 'Tallahassee', avgSalary: '$76,000 – $82,000', hourlyRate: '$36 – $39/hr' },
];

const specialtyData = [
  { label: 'Med-Surg / Tele', avgSalary: '$81,000 – $95,500', hourlyRate: '$39 – $46/hr' },
  { label: 'ICU / Critical Care', avgSalary: '$91,500 – $108,000', hourlyRate: '$44 – $52/hr' },
  { label: 'ER / Emergency', avgSalary: '$89,000 – $106,000', hourlyRate: '$43 – $51/hr' },
  { label: 'OR / Surgical', avgSalary: '$94,000 – $112,000', hourlyRate: '$45 – $54/hr' },
  { label: 'L&D / NICU', avgSalary: '$91,500 – $108,000', hourlyRate: '$44 – $52/hr' },
  { label: 'Cath Lab', avgSalary: '$95,500 – $114,500', hourlyRate: '$46 – $55/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Miami in 2026?',
    answer: 'An estimated $90,000–$97,000 per year (mean), or roughly $43–$47/hr, based on BLS May 2024 metro data projected forward with 3–4% annual wage growth.',
  },
  {
    question: 'What is the starting salary for a new grad RN in Miami?',
    answer: 'An estimated $34–$39/hr, or roughly $70,500–$81,000 annually, depending on hospital system and unit.',
  },
  {
    question: 'Which Miami hospital pays RNs the most?',
    answer: 'System-specific dollar figures vary by unit, shift, and experience. Jackson Health (public/union), Baptist Health South Florida (nonprofit), and HCA East Florida (for-profit) are the three largest employers, each competitive on different components.',
  },
  {
    question: 'Does Miami pay more than the Florida average?',
    answer: 'Yes. Miami is estimated at $3,000–$7,000 above the Florida state mean in 2026, though cost of living offsets most of that gap.',
  },
  {
    question: 'How does Miami RN pay compare to other major US cities?',
    answer: 'Miami sits below California, Oregon, and New York metros on nominal base pay but compares favorably on take-home once no-state-income-tax is factored in.',
  },
  {
    question: 'Do Miami hospitals offer sign-on bonuses?',
    answer: 'Yes. Typical 2026 ranges: $3,000–$8,000 for med-surg, $10,000–$20,000 for ICU/ED/OR, with 2-year commitment terms.',
  },
  {
    question: 'What shift differentials do Miami hospitals pay?',
    answer: 'Estimated 2026 ranges: night $3–$6/hr, evening $1–$3/hr, weekend $2–$5/hr, charge $2–$4/hr, float $3–$6/hr.',
  },
  {
    question: 'Do Miami RNs get paid more with a BSN?',
    answer: 'Many systems pay a $1–$2/hr BSN differential or advance a BSN-holder on the career ladder. Magnet hospitals generally require BSN within five years.',
  },
  {
    question: 'How much do ICU nurses make in Miami?',
    answer: 'An estimated $44–$52/hr base in 2026, before differentials. A mid-career Miami ICU RN working nights with a CCRN can earn $50–$58/hr loaded.',
  },
  {
    question: 'Is Miami a good travel nurse city?',
    answer: 'Yes. Blended 13-week Miami travel contracts run roughly $2,000–$2,750/week for med-surg, $2,300–$3,000/week for ICU/ED.',
  },
  {
    question: 'How much should a 10-year-experience Miami RN make?',
    answer: 'Estimated $45–$52/hr base in 2026, or roughly $94,000–$108,000/year before differentials.',
  },
  {
    question: "What's the cost of living in Miami vs. Tampa or Orlando?",
    answer: "Miami's housing index is meaningfully higher — often 15–25% above Tampa or Orlando on a 1-bedroom rental basis. Factor this into any Miami offer evaluation.",
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Florida RN Salary 2026', item: 'https://nursesalaryintel.com/florida-rn-salary-2026/' },
    { '@type': 'ListItem', position: 4, name: 'RN Salary in Miami, FL', item: 'https://nursesalaryintel.com/rn-salary-miami-fl-2026/' },
  ],
};

export default function RNSalaryMiami2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'RN Salary by State', href: '/rn-salary-by-state/' },
          { label: 'Florida RN Salary 2026', href: '/florida-rn-salary-2026/' },
          { label: 'RN Salary in Miami, FL' },
        ]}
        h1="RN Salary in Miami, FL (2026): Hourly Pay + Pay by Experience"
        lastUpdated="April 21, 2026"
        schemaTitle="RN Salary in Miami, FL (2026): Hourly Pay + Pay by Experience"
        schemaDescription="Miami RN salary 2026: hourly pay, pay by experience, hospital-system pay notes, differentials, and how Miami compares to the rest of Florida."
        schemaUrl="/rn-salary-miami-fl-2026/"
        faqs={faqs}
      >
        <p>
          Miami registered nurses earn an estimated <strong>$43–$47 per hour in 2026</strong>, or roughly <strong>$90,000–$97,000 annually</strong> (mean), based on BLS May 2024 metro data projected with 3–4% annual wage growth. Miami pay sits above the Florida state mean but is offset by a high cost of living. New grads typically start at $34–$39/hr; senior nurses with 10+ years and critical-care certifications regularly clear $50/hr.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Miami RN Pay: The 2026 Estimate</h2>
        <p>
          The BLS OEWS May 2024 release placed the Miami–Fort Lauderdale–Pompano Beach metro RN mean annual wage near $86,500. Projecting forward with a 3–4% annual wage-growth assumption through 2026 places the Miami metro RN mean in the <strong>$90,000–$97,000 band</strong>, with the 25th–75th percentile spanning roughly <strong>$78,000 to $108,000</strong>. In hourly terms at 2,080 hours per year, that&apos;s a metro mean of <strong>$43–$47/hr</strong> before any shift, specialty, or certification differentials. Use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model differentials and overtime.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Miami RN Pay by Experience (2026 Estimates)</h2>
        <SalaryTable
          title="Miami RN Pay by Experience Tier (2026)"
          headers={['Experience Tier', 'Estimated Annual Base', 'Estimated Hourly']}
          rows={experienceData}
          source="BLS OEWS May 2024 Miami metro wage percentiles, projected 3–4% annually. Excludes differentials, OT, and bonuses."
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rn-salary-miami-fl-2026-experience.png"
          alt="Estimated 2026 Miami RN pay progression by years of experience"
          className="w-full rounded-lg border border-outline-variant my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Miami Hospital Systems: What to Know About Pay</h2>
        <p>Miami&apos;s RN labor market is dominated by three system families plus a handful of academic and specialty hospitals.</p>
        <p>
          <strong>Jackson Health System</strong> — a public health system operating Jackson Memorial and serving as the University of Miami teaching affiliate. Union-represented in several bargaining units, with structured step progression.
        </p>
        <p>
          <strong>Baptist Health South Florida</strong> — large nonprofit covering Baptist Hospital, South Miami Hospital, and multiple suburban facilities. Generally rated highly for culture and benefits.
        </p>
        <p>
          <strong>HCA Healthcare (East Florida Division)</strong> — for-profit system with multiple Miami-area campuses. Often leads on sign-on bonus and fast hire-in speed.
        </p>
        <p>Other notable employers: Nicklaus Children&apos;s Hospital, Mount Sinai Medical Center (Miami Beach), University of Miami Health System, Cleveland Clinic Florida (Weston), and Memorial Healthcare System (Broward).</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Miami vs. the Rest of Florida</h2>
        <SalaryTable
          title="Miami RN Pay vs. Other Florida Metros (2026)"
          headers={['Metro', 'Estimated Mean Annual', 'Estimated Hourly']}
          rows={cityComparisonData}
          source="BLS OEWS May 2024 metro-level data, projected 3–4% annually."
        />
        <p>
          Naples narrowly edges Miami in estimated mean pay, but Miami&apos;s labor market is an order of magnitude larger in job volume and specialty depth. For the full state view, see our <Link href="/florida-rn-salary-2026/" className="text-primary hover:underline">Florida RN salary guide</Link>.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rn-salary-miami-fl-2026-vs-florida.png"
          alt="Miami RN pay vs. other Florida metros 2026 estimates"
          className="w-full rounded-lg border border-outline-variant my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials and Premium Pay in Miami</h2>
        <p>Most Miami hospitals publish differentials on top of base. 2026 estimated ranges:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Night shift (11 p.m.–7 a.m.):</strong> $3–$6/hr</li>
          <li><strong>Evening shift:</strong> $1–$3/hr</li>
          <li><strong>Weekend:</strong> $2–$5/hr</li>
          <li><strong>Charge nurse:</strong> $2–$4/hr</li>
          <li><strong>Float pool:</strong> $3–$6/hr</li>
          <li><strong>CCRN / CEN / certification pay:</strong> $1–$4/hr</li>
          <li><strong>BSN differential (system-dependent):</strong> $0–$2/hr</li>
        </ul>
        <p>A mid-career Miami ICU RN working nights with a CCRN can realistically earn <strong>$50–$58/hr loaded</strong> once every differential stacks.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Specialty Pay in Miami (2026 Estimates)</h2>
        <SalaryTable
          title="Miami RN Specialty Pay (2026)"
          headers={['Specialty', 'Estimated Annual Base', 'Estimated Hourly']}
          rows={specialtyData}
          source="BLS OEWS May 2024 Miami metro + specialty premium estimates."
        />
        <p>
          For the broader specialty ranking, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">Highest Paying RN Specialties</Link>. For negotiating a specialty premium, see our <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">salary negotiation scripts</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Cost of Living: The Miami Catch</h2>
        <p>
          Miami&apos;s nominal pay advantage over most of Florida evaporates once housing is factored in. Median rent for a 1-bedroom in Miami-proper sits materially above Tampa, Orlando, or Jacksonville. When evaluating a Miami offer, always compute <strong>take-home minus rent</strong> rather than headline salary.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Miami RN Offer</h2>
        <p>Miami offers have more levers than most candidates realize. Beyond base hourly, the most commonly negotiable items are:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Step placement</strong> — experienced hires can often negotiate one or two steps above default</li>
          <li><strong>Sign-on bonus</strong> — amount and commitment term</li>
          <li><strong>Certification reimbursement and ongoing certification pay</strong></li>
          <li><strong>PTO accrual rate</strong> — some systems will bump accrual for experienced hires</li>
          <li><strong>Relocation</strong> — non-local hires should always ask</li>
        </ul>
        <p>
          See our <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">salary negotiation scripts post</Link> for specific email and counteroffer templates.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</stro