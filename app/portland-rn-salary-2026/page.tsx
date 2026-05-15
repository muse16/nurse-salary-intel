import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Portland RN Salary 2026: How Much Do Nurses Make in Portland, OR?',
  description:
    'Portland RNs earn $109,000/yr ($52.40/hr) on average in 2026. OHSU pays $102K–$125K. See salary by hospital, specialty, and experience — with Oregon tax and cost-of-living analysis.',
  alternates: { canonical: 'https://nursesalaryintel.com/portland-rn-salary-2026' },
  openGraph: {
    title: 'Portland RN Salary 2026: $109,000/yr at OHSU & Legacy Health',
    description: 'Portland nurse salary by hospital, specialty, and experience — with Oregon income tax and Vancouver WA comparison.',
    url: 'https://nursesalaryintel.com/portland-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Portland, OR in 2026?',
    answer:
      'Portland RNs earn an average of $109,000/year ($52.40/hr) in 2026 — among the highest in the Pacific Northwest and well above the national average. OHSU (Oregon Health & Science University) pays the top of the market at $102,000–$125,000 for experienced nurses. Oregon\'s high income tax rate (up to 9.9%) significantly affects take-home pay.',
  },
  {
    question: 'What hospitals pay nurses the most in Portland?',
    answer:
      'OHSU pays Portland\'s highest RN salaries ($102,000–$125,000) and is a Level 1 Trauma Center and academic medical center with PSLF eligibility. Legacy Emanuel Medical Center ($98,000–$116,000) houses the region\'s only burn center and is a strong second option. PeaceHealth Southwest in Vancouver, WA offers competitive pay with no Oregon income tax for nurses who establish Washington residency.',
  },
  {
    question: 'How much is Oregon income tax for nurses?',
    answer:
      "Oregon has one of the highest state income tax rates in the country — up to 9.9% for incomes over $125,000, and 8.75% for the $9,900–$125,000 bracket. On a $109,000 Portland RN salary, that's approximately $9,150 in Oregon state income tax. Nurses living in Vancouver, WA (across the river) and working in Oregon still pay Oregon income tax on Oregon-earned wages.",
  },
  {
    question: 'Should Portland nurses consider living in Vancouver, WA?',
    answer:
      'Washington state has no income tax, but Oregon taxes wages earned in Oregon regardless of where you live. If you work in Oregon, you pay Oregon income tax. However, nurses who work at PeaceHealth Southwest or other Vancouver, WA hospitals pay zero state income tax on those wages. The WA side also tends to have lower housing costs than Portland proper, making it a viable option for nurses working in Vancouver.',
  },
  {
    question: 'What is the cost of living like for Portland nurses?',
    answer:
      "Portland's cost of living has risen significantly over the past decade — housing costs roughly 25–30% above the national average, though it remains below Seattle and San Francisco. Median rent for a one-bedroom in Portland proper runs $1,600–$2,000/month. Combined with Oregon's high income tax, nurses net less purchasing power than the $109,000 headline suggests.",
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$85,000 – $96,000', hourlyRate: '$40.87 – $46.15/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$100,000 – $116,000', hourlyRate: '$48.08 – $55.77/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$112,000 – $128,000', hourlyRate: '$53.85 – $61.54/hr' },
  { label: 'Top 10% earners', avgSalary: '$135,000+', hourlyRate: '$64.90+/hr' },
];

const hospitalData = [
  { label: 'OHSU (Oregon Health & Science)', avgSalary: '$102,000 – $125,000', hourlyRate: 'Level 1 Trauma; academic; PSLF eligible' },
  { label: 'Legacy Emanuel Medical Center', avgSalary: '$98,000 – $116,000', hourlyRate: 'Burn Center; Level 1 Trauma' },
  { label: 'Providence Portland Medical', avgSalary: '$96,000 – $114,000', hourlyRate: 'Magnet; strong specialty differentials' },
  { label: 'Kaiser Permanente Sunnyside', avgSalary: '$95,000 – $112,000', hourlyRate: 'Staff model; excellent benefits' },
  { label: 'PeaceHealth SW (Vancouver, WA)', avgSalary: '$98,000 – $115,000', hourlyRate: 'No OR income tax for WA workers' },
  { label: 'Legacy Good Samaritan', avgSalary: '$94,000 – $110,000', hourlyRate: 'Portland metro; strong night diff' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$98,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$104,000', hourlyRate: '+$6,000' },
  { label: 'ER', avgSalary: '$110,000', hourlyRate: '+$12,000' },
  { label: 'OR / Surgical', avgSalary: '$108,000', hourlyRate: '+$10,000' },
  { label: 'ICU / Critical Care', avgSalary: '$116,000', hourlyRate: '+$18,000' },
  { label: 'Burn / Trauma', avgSalary: '$118,000', hourlyRate: '+$20,000' },
  { label: 'NICU', avgSalary: '$112,000', hourlyRate: '+$14,000' },
  { label: 'CRNA (Certified)', avgSalary: '$225,000+', hourlyRate: 'Advanced practice' },
];

export default function PortlandRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Oregon RN Salary', href: '/rn-salary-by-state/oregon' },
        { label: 'Portland RN Salary 2026' },
      ]}
      h1="Portland RN Salary 2026: How Much Do Nurses Make in Portland, Oregon?"
      lastUpdated="May 2026"
      schemaTitle="Portland RN Salary 2026"
      schemaDescription="Average RN salary in Portland, OR by hospital, specialty, and experience level in 2026."
      schemaUrl="/portland-rn-salary-2026"
      datePublished="2026-05-14"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Portland RNs earn $109,000/year ($52.40/hr)</strong> on average in 2026 — well above the national
          average and among the highest in the Pacific Northwest. OHSU and Legacy Emanuel top the market at{' '}
          <strong>$102,000–$125,000</strong>. New grads start at <strong>$85,000–$96,000</strong>; senior ICU and
          burn nurses reach <strong>$116,000–$135,000+</strong>. Oregon&apos;s 8.75–9.9% state income tax is the
          biggest factor in real take-home pay.
        </p>
      </div>

      <Image
        src="/images/portland-rn-salary-2026-hero_compressed.webp"
        alt="Registered nurse in navy scrubs standing outside a modern Portland Oregon hospital with the Willamette River visible in the background"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Portland sits at the heart of a competitive Pacific Northwest nursing market anchored by OHSU — the
        state&apos;s only academic health center and Level 1 Trauma Center. Legacy Health&apos;s Emanuel campus
        adds a rare burn center to the regional mix, creating strong demand for specialty-trained nurses. The
        Portland-Vancouver metro straddles the Oregon-Washington border, which creates a unique dynamic: nurses
        on the Washington side can access no-income-tax employment at PeaceHealth Southwest while living in a lower
        cost suburban environment.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Portland RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Portland RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Portland RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/portland-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Portland Oregon hospitals including OHSU, Legacy Emanuel, Providence Portland, and PeaceHealth Southwest versus national average"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        OHSU dominates the high end of the Portland market. As Oregon&apos;s only academic medical center, it
        attracts research-minded nurses and offers strong PSLF eligibility for those with federal student loans —
        a meaningful benefit given nursing education debt levels. Legacy Emanuel&apos;s burn center is a genuine
        specialty destination, and the trauma differential for burn nurses is among the highest in the region.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Portland, OR"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Portland RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/portland-rn-salary-2026-hospital_compressed.webp"
        alt="Two registered nurses in scrubs collaborating at a workstation in a bright modern Portland Oregon hospital"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Portland RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Oregon Income Tax: The Real Cost of Portland&apos;s High Salaries</h2>
      <p>
        Oregon&apos;s income tax structure is one of the most important variables for Portland nurses to model.
        The state applies a graduated rate that reaches 8.75% for income between $9,900 and $125,000 — the bracket
        where most RNs fall — and 9.9% above that. On a $109,000 salary, Oregon income tax is approximately
        $9,150. There is no sales tax in Oregon, which partially offsets this, but nurses coming from Texas,
        Florida, or Washington will feel the tax difference immediately.
      </p>
      <p>
        One frequently misunderstood rule: nurses who live in Vancouver, WA but work in Portland, Oregon still pay
        Oregon income tax on their Oregon-earned wages. Washington residence does not exempt you from Oregon
        source-state taxation. The only way to avoid Oregon income tax is to work in Washington — which is exactly
        why PeaceHealth Southwest (Vancouver) and other WA-side employers are increasingly attractive to nurses
        who establish Washington residency.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Portland Salary vs. Cost of Living (2026)</h2>
      <p>
        Portland&apos;s cost of living runs approximately 25–30% above the national average. Median one-bedroom
        rent in Portland proper sits at $1,600–$2,000/month; the southeast and northeast neighborhoods tend to
        be more affordable than the Pearl District and close-in northwest. Suburban options in Beaverton, Hillsboro,
        and Lake Oswego offer lower housing costs with easy commute access to the major Portland hospital campuses.
      </p>
      <p>
        After accounting for Oregon&apos;s income tax and higher housing costs, a $109,000 Portland salary produces
        roughly equivalent purchasing power to a $92,000 salary in a no-income-tax state with national-average
        housing costs. Still a strong market — but nurses should run the full math before assuming the headline
        salary tells the whole story.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses and Shift Differentials in Portland (2026)</h2>
      <p>
        OHSU and Legacy Emanuel offer sign-on bonuses for specialty nurses — ICU, burn, OR, and ER roles typically
        carry $8,000–$15,000 with a 2-year commitment. Night shift differentials across Portland systems run
        $4–$8/hr. Burn unit nurses at Legacy Emanuel frequently receive an additional specialty differential of
        $3–$5/hr on top of standard night differential — one of the highest specialty premiums in the Portland
        market. Nurses interviewing at OHSU should ask specifically about union contract provisions, as OHSU nurses
        are represented by AFSCME and pay scales are publicly available in the collective bargaining agreement.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state/oregon', label: 'Oregon RN Salary 2026', desc: 'Full state breakdown by region' },
          { href: '/seattle-rn-salary-2026', label: 'Seattle RN Salary 2026', desc: 'PNW neighbor — no income tax' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to ask for more and get it' },
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
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
