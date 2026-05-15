import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Baltimore RN Salary 2026: How Much Do Nurses Make in Baltimore, MD?',
  description:
    'Baltimore RNs earn $89,000/yr ($42.79/hr) on average in 2026. Johns Hopkins pays $88K–$110K. See salary by hospital, specialty, and experience — with Maryland tax breakdown.',
  alternates: { canonical: 'https://nursesalaryintel.com/baltimore-rn-salary-2026' },
  openGraph: {
    title: 'Baltimore RN Salary 2026: $89,000/yr at Johns Hopkins & UMMC',
    description: 'Baltimore nurse salary by hospital, specialty, and experience — with Maryland state + Baltimore City tax analysis.',
    url: 'https://nursesalaryintel.com/baltimore-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Baltimore, MD in 2026?',
    answer:
      'Baltimore RNs earn an average of $89,000/year ($42.79/hr) in 2026, roughly in line with the national average. Johns Hopkins Hospital pays $88,000–$110,000 for experienced nurses. The University of Maryland Shock Trauma Center adds trauma differentials that push ICU and ER nurses meaningfully above the base.',
  },
  {
    question: 'What hospitals pay nurses the most in Baltimore?',
    answer:
      'Johns Hopkins Hospital pays the highest RN salaries in Baltimore ($88,000–$110,000), followed by the University of Maryland Medical Center ($85,000–$105,000), which houses the world-renowned R Adams Cowley Shock Trauma Center. Both are Level 1 Trauma Centers with strong specialty differentials and academic career paths.',
  },
  {
    question: 'How much do Baltimore nurses pay in state taxes?',
    answer:
      "Maryland has a graduated state income tax (up to 5.75%) plus a Baltimore City local tax of 3.2% — one of the highest local tax rates in the US. On an $89,000 salary, that's approximately $7,800–$9,500 in combined state and local income taxes. Nurses living in Baltimore County (not Baltimore City) pay a slightly lower local rate of 2.83%.",
  },
  {
    question: 'Is Baltimore a good city for RN salary vs. cost of living?',
    answer:
      "Baltimore's cost of living is moderate — roughly 10–15% above the national average, significantly lower than DC (35 miles away) or New York. Housing is a particular value: median rent runs $1,400–$1,800/month versus $2,200+ in DC proper. For nurses who want Mid-Atlantic academic hospital access without DC prices, Baltimore is a strong option.",
  },
  {
    question: 'Do Baltimore nurses get sign-on bonuses in 2026?',
    answer:
      'Yes. Johns Hopkins and UMMC both offer sign-on bonuses for specialty nurses — ICU, OR, L&D, and ED roles typically see $10,000–$20,000 with 2-year commitment. Night shift differentials run $4–$7/hr at most Baltimore systems, and some trauma units add an additional trauma pay premium.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$68,000 – $78,000', hourlyRate: '$32.69 – $37.50/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$82,000 – $96,000', hourlyRate: '$39.42 – $46.15/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$93,000 – $108,000', hourlyRate: '$44.71 – $51.92/hr' },
  { label: 'Top 10% earners', avgSalary: '$115,000+', hourlyRate: '$55.29+/hr' },
];

const hospitalData = [
  { label: 'Johns Hopkins Hospital', avgSalary: '$88,000 – $110,000', hourlyRate: 'Magnet; Level 1 Trauma; PSLF eligible' },
  { label: 'Univ. of Maryland Medical Center', avgSalary: '$85,000 – $105,000', hourlyRate: 'R Adams Cowley Shock Trauma Center' },
  { label: 'MedStar Franklin Square', avgSalary: '$80,000 – $95,000', hourlyRate: 'Strong night shift differentials' },
  { label: 'Mercy Medical Center', avgSalary: '$78,000 – $93,000', hourlyRate: 'Competitive sign-on bonuses' },
  { label: 'GBMC (Greater Baltimore MC)', avgSalary: '$77,000 – $92,000', hourlyRate: 'Suburban; lower cost of living offset' },
  { label: 'Sinai Hospital of Baltimore', avgSalary: '$76,000 – $91,000', hourlyRate: 'LifeBridge Health system' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$82,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$88,000', hourlyRate: '+$6,000' },
  { label: 'ER', avgSalary: '$93,000', hourlyRate: '+$11,000' },
  { label: 'OR / Surgical', avgSalary: '$91,000', hourlyRate: '+$9,000' },
  { label: 'ICU / Critical Care', avgSalary: '$99,000', hourlyRate: '+$17,000' },
  { label: 'Trauma / Shock Trauma', avgSalary: '$103,000', hourlyRate: '+$21,000' },
  { label: 'NICU', avgSalary: '$95,000', hourlyRate: '+$13,000' },
  { label: 'CRNA (Certified)', avgSalary: '$215,000+', hourlyRate: 'Advanced practice' },
];

export default function BaltimoreRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Maryland RN Salary', href: '/rn-salary-by-state/maryland' },
        { label: 'Baltimore RN Salary 2026' },
      ]}
      h1="Baltimore RN Salary 2026: How Much Do Nurses Make in Baltimore, Maryland?"
      lastUpdated="May 2026"
      schemaTitle="Baltimore RN Salary 2026"
      schemaDescription="Average RN salary in Baltimore, MD by hospital, specialty, and experience level in 2026."
      schemaUrl="/baltimore-rn-salary-2026"
      datePublished="2026-05-14"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Baltimore RNs earn $89,000/year ($42.79/hr)</strong> on average in 2026 — roughly at the national
          average, with Johns Hopkins and UMMC anchoring the top of the market at{' '}
          <strong>$88,000–$110,000</strong>. New grads start at <strong>$68,000–$78,000</strong>; senior ICU and
          trauma nurses can reach <strong>$103,000–$115,000+</strong> with specialty differentials.
          Maryland&apos;s combined state and Baltimore City income tax (up to 9%) is the most important number
          to factor into your take-home.
        </p>
      </div>

      <Image
        src="/images/baltimore-rn-salary-2026-hero_compressed.webp"
        alt="Registered nurse in navy scrubs standing outside a modern Baltimore Maryland hospital with the Inner Harbor visible in the background"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Baltimore sits at the center of one of the most concentrated academic medical ecosystems in the United
        States. Johns Hopkins Hospital — consistently ranked among the top hospitals in the world — anchors the
        high end of the nurse salary market, while the University of Maryland Medical Center and its R Adams Cowley
        Shock Trauma Center draw specialty nurses from across the country. For RNs who want academic career paths,
        teaching hospital differentials, and PSLF-eligible federal loan forgiveness, Baltimore competes well against
        larger and more expensive cities.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Baltimore RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Baltimore RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Baltimore RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/baltimore-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Baltimore hospitals including Johns Hopkins, UMMC, MedStar Franklin Square, and Mercy Medical versus national average"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Johns Hopkins Hospital leads the Baltimore market on base pay and is one of the few systems in the region
        that consistently matches or exceeds what nurses can earn in DC. UMMC&apos;s Shock Trauma Center adds
        trauma-specific differentials for nurses working in one of the busiest trauma programs in the country —
        the pay premium for that environment is real and negotiable.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Baltimore, MD"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Baltimore RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/baltimore-rn-salary-2026-hospital_compressed.webp"
        alt="Two registered nurses in scrubs reviewing a patient chart in a bright modern Baltimore hospital unit"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Baltimore RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Maryland Taxes: What Baltimore Nurses Actually Take Home</h2>
      <p>
        Maryland&apos;s tax structure is the most important factor to model before comparing Baltimore salaries to
        other cities. At $89,000, a Baltimore City RN faces Maryland state income tax (4.75% marginal rate at this
        income level) plus Baltimore City&apos;s local income tax of 3.2% — one of the highest local rates in the
        country. That&apos;s roughly $7,100 in state tax plus $2,850 in city tax, totaling approximately $9,950 in
        state and local taxes alone.
      </p>
      <p>
        Nurses who live in Baltimore County (Towson, Catonsville, Pikesville) rather than Baltimore City pay a
        county rate of 2.83% instead of 3.2% — a meaningful difference over a career. Many Baltimore hospital
        nurses choose to live just outside city limits specifically for this reason. Compare this to neighboring DC,
        where nurses pay DC&apos;s 8.5% income tax but often earn $10,000–$15,000 more annually at major DC systems.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Baltimore Salary vs. Cost of Living</h2>
      <p>
        Baltimore&apos;s cost of living is moderate by mid-Atlantic standards — roughly 10–15% above the national
        average, but significantly lower than Washington DC (35 miles south) or Philadelphia. Median rent in
        Baltimore City runs $1,400–$1,800/month for a one-bedroom; suburban Baltimore County and Anne Arundel County
        offer comparable housing at similar or lower prices.
      </p>
      <p>
        For nurses relocating from high-cost metros like New York or San Francisco, Baltimore offers genuine value:
        a nationally competitive academic hospital ecosystem at a fraction of the housing cost. For nurses moving
        from lower-cost Southern or Midwestern cities, the tax burden requires careful modeling — the $89,000 gross
        salary effectively becomes closer to $72,000–$74,000 after federal, state, and local withholding.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses and Shift Differentials in Baltimore (2026)</h2>
      <p>
        Sign-on bonuses remain competitive at Baltimore&apos;s major systems. ICU, OR, and trauma nurses at Johns
        Hopkins and UMMC typically see $10,000–$20,000 with a 2-year commitment clause. Night shift differentials
        run $4–$7/hr at most Baltimore hospitals, and dedicated trauma and shock trauma units add an additional
        $2–$4/hr trauma differential on top of that. Nurses negotiating offers at UMMC should specifically ask about
        trauma differential eligibility — it is not always included in initial written offers.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state/maryland', label: 'Maryland RN Salary 2026', desc: 'Full state breakdown by region' },
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to ask for more and get it' },
          { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary 2026', desc: 'What the step up to charge actually pays' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">→</span>
          </Link>
        ))}
      </div>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
