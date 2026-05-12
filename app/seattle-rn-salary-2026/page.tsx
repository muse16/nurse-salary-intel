import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Seattle RN Salary 2026: How Much Do Nurses Make in Seattle, WA?',
  description:
    'Seattle RNs earn $110,000/yr ($52.88/hr) on average in 2026 — among the highest in the US. See pay at UW Medical Center, Swedish Health, Virginia Mason, and Seattle Children\'s.',
  alternates: { canonical: 'https://nursesalaryintel.com/seattle-rn-salary-2026' },
  openGraph: {
    title: "Seattle RN Salary 2026: $110,000/yr — Among America's Highest",
    description: 'Seattle nurse salary by hospital, specialty, and experience — with Washington state tax and cost-of-living analysis.',
    url: 'https://nursesalaryintel.com/seattle-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Seattle, WA in 2026?',
    answer: "Seattle RNs earn an average of $110,000/year ($52.88/hr) in 2026 — among the highest nominal RN salaries in the US. Washington state has no income tax, which preserves more of that pay. UW Medical Center and Seattle Children's Hospital pay at the top of the market ($112,000–$130,000+ for experienced nurses).",
  },
  {
    question: 'What hospitals pay nurses the most in Seattle?',
    answer: "UW Medical Center ($112,000–$130,000) and Seattle Children's Hospital ($108,000–$128,000) pay Seattle's highest RN salaries. Swedish Health Services and Virginia Mason Franciscan Health are strong mid-market options, with competitive sign-on bonuses for specialty nurses.",
  },
  {
    question: 'Does Washington state have income tax for nurses?',
    answer: "No — Washington has no state income tax. On a $110,000 Seattle RN salary, that's $0 in state taxes vs. $4,840 in Colorado, $6,050 in Georgia, or $9,350 in California. The no-tax advantage is significant at Seattle's high salary levels.",
  },
  {
    question: 'Is the high Seattle nurse salary worth the cost of living?',
    answer: "Seattle's cost of living is high — housing costs roughly 60% more than the national average. However, Washington's no-income-tax advantage and consistently high RN wages make the real purchasing power competitive. Nurses who own homes or have roommate situations tend to do well financially in Seattle.",
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$85,000 – $95,000', hourlyRate: '$40.87 – $45.67/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$102,000 – $118,000', hourlyRate: '$49.04 – $56.73/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$115,000 – $132,000', hourlyRate: '$55.29 – $63.46/hr' },
  { label: 'Top 10% earners', avgSalary: '$138,000+', hourlyRate: '$66.35+/hr' },
];

const hospitalData = [
  { label: 'UW Medical Center', avgSalary: '$112,000 – $130,000', hourlyRate: 'Level 1 Trauma; academic; PSLF eligible' },
  { label: "Seattle Children's Hospital", avgSalary: '$108,000 – $128,000', hourlyRate: 'Top pediatric facility in PNW' },
  { label: 'Swedish Health Services', avgSalary: '$105,000 – $124,000', hourlyRate: 'Multiple Seattle campuses' },
  { label: 'Virginia Mason Franciscan', avgSalary: '$103,000 – $120,000', hourlyRate: 'Strong specialty differentials' },
  { label: 'Providence Swedish', avgSalary: '$100,000 – $118,000', hourlyRate: 'Sign-on bonuses for ICU/ER' },
  { label: 'Overlake Medical Center', avgSalary: '$98,000 – $115,000', hourlyRate: 'Bellevue; strong compensation package' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$98,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$105,000', hourlyRate: '+$7,000' },
  { label: 'ER', avgSalary: '$112,000', hourlyRate: '+$14,000' },
  { label: 'OR / Surgical', avgSalary: '$110,000', hourlyRate: '+$12,000' },
  { label: 'ICU / Critical Care', avgSalary: '$118,000', hourlyRate: '+$20,000' },
  { label: 'NICU', avgSalary: '$113,000', hourlyRate: '+$15,000' },
  { label: 'CRNA (Certified)', avgSalary: '$230,000+', hourlyRate: 'Advanced practice' },
];

export default function SeattleRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Washington RN Salary', href: '/rn-salary-by-state/washington' },
        { label: 'Seattle RN Salary 2026' },
      ]}
      h1="Seattle RN Salary 2026: How Much Do Nurses Make in Seattle, Washington?"
      lastUpdated="May 2026"
      schemaTitle="Seattle RN Salary 2026"
      schemaDescription="Average RN salary in Seattle, WA by hospital, specialty, and experience level in 2026."
      schemaUrl="/seattle-rn-salary-2026"
      datePublished="2026-05-09"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Seattle RNs earn $110,000/year ($52.88/hr)</strong> on average in 2026 — among the highest
          nominal nurse salaries in the US. Washington has <strong>no state income tax</strong>, preserving more of
          that pay. New grads start at <strong>$85,000–$95,000</strong>; senior ICU and trauma nurses reach
          <strong> $130,000–$138,000+</strong>. UW Medical Center and Seattle Children&apos;s pay the market top.
        </p>
      </div>

      <Image
        src="/images/seattle-rn-salary-2026-hero_compressed.png"
        alt="Registered nurse in navy scrubs standing outside a modern Seattle Washington hospital with the Puget Sound visible in the background"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Seattle consistently ranks as one of the highest-paying cities for registered nurses in the US,
        driven by a strong healthcare ecosystem, competitive tech-sector wages that push up regional pay
        standards, and Washington&apos;s zero state income tax. The University of Washington Medical Center and
        Seattle Children&apos;s Hospital anchor the high end of the market, with multiple regional systems
        competing aggressively for specialty nurses.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Seattle RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/seattle-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Seattle hospitals including UW Medical Center, Seattle Children's, and Swedish Health versus national average"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        UW Medical Center is Seattle&apos;s flagship academic medical center and Level 1 Trauma Center, offering
        the highest base salaries in the market plus PSLF eligibility for federal loan forgiveness.
        Seattle Children&apos;s is the top option for pediatric and NICU nurses, with one of the most competitive
        specialty differentials in the Pacific Northwest.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Seattle, WA"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/seattle-rn-salary-2026-hospital_compressed.png"
        alt="Two registered nurses in scrubs collaborating over a patient chart in a bright modern Seattle hospital unit"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Seattle RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Seattle Salary vs. Cost of Living: The Real Picture</h2>
      <p>
        Seattle&apos;s $110,000 average RN salary looks exceptional on paper — and it is high. But housing costs
        roughly 60% above the national average, and Seattle&apos;s rental market remains among the most expensive
        in the country outside of San Francisco and New York. The key advantage that keeps Seattle competitive
        is Washington&apos;s zero state income tax: at $110,000 gross, a Seattle nurse pays $0 in state taxes vs.
        $9,350 in California on the same salary.
      </p>
      <p>
        For nurses relocating from high-cost-of-living states like California or New York, Seattle often
        represents a genuine upgrade in purchasing power. For nurses relocating from lower-cost metros like
        Houston, Atlanta, or Phoenix, the math is tighter — worth running the full numbers including housing
        before making a move.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay nationwide' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to ask for more and get it' },
          { href: '/las-vegas-rn-salary-2026', label: 'Las Vegas RN Salary 2026', desc: 'Another no-tax state comparison' },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
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
