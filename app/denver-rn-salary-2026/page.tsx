import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Denver RN Salary 2026: How Much Do Nurses Make in Denver, CO?',
  description:
    'Denver RNs earn $84,500/yr ($40.63/hr) on average in 2026. See pay at UCHealth, SCL Health, Children\'s Colorado, and Denver Health — plus cost-of-living analysis.',
  alternates: { canonical: 'https://nursesalaryintel.com/denver-rn-salary-2026' },
  openGraph: {
    title: 'Denver RN Salary 2026: $84,500/yr Avg',
    description: 'Denver nurse salary by hospital, specialty, and experience — with Colorado cost-of-living context.',
    url: 'https://nursesalaryintel.com/denver-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Denver, CO in 2026?',
    answer: 'Denver RNs earn an average of $84,500/year ($40.63/hr) in 2026, slightly below the national average of $89,010. Colorado\'s cost of living (index ~118 in Denver) partially offsets the nominal pay. UCHealth and Children\'s Colorado pay at the top of the market ($90,000–$115,000 for experienced nurses).',
  },
  {
    question: 'What hospitals pay nurses the most in Denver?',
    answer: 'UCHealth University of Colorado Hospital ($88,000–$112,000) and Children\'s Hospital Colorado ($86,000–$110,000) pay Denver\'s highest RN salaries. Both are Level 1 Trauma Centers and academic medical centers with strong sign-on incentives.',
  },
  {
    question: 'Is Denver a good city for nurses?',
    answer: 'Denver has a growing healthcare market driven by population growth and expansion of major health systems, but the cost of living (housing especially) has risen sharply. On a cost-adjusted basis, Denver nurses take home less than nurses in cities like Houston or San Antonio despite similar nominal salaries.',
  },
  {
    question: 'Do Colorado nurses have state income tax?',
    answer: 'Yes — Colorado has a flat 4.4% state income tax (2026). On an $84,500 salary, that\'s approximately $3,720/year, compared to $0 in Texas, Florida, or Nevada. This is a meaningful factor when comparing Denver offers to Texas or Las Vegas jobs.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$66,000 – $73,000', hourlyRate: '$31.73 – $35.10/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$80,000 – $95,000', hourlyRate: '$38.46 – $45.67/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$95,000 – $115,000', hourlyRate: '$45.67 – $55.29/hr' },
  { label: 'Top 10% earners', avgSalary: '$118,000+', hourlyRate: '$56.73+/hr' },
];

const hospitalData = [
  { label: 'UCHealth University of CO Hospital', avgSalary: '$88,000 – $112,000', hourlyRate: 'Level 1 Trauma; PSLF eligible' },
  { label: 'Children\'s Hospital Colorado', avgSalary: '$86,000 – $110,000', hourlyRate: 'Level 1 Pediatric Trauma' },
  { label: 'SCL Health (Intermountain)', avgSalary: '$82,000 – $104,000', hourlyRate: 'Sign-on: $8K–$14K' },
  { label: 'Denver Health Medical Center', avgSalary: '$80,000 – $100,000', hourlyRate: 'Level 1 Trauma; PSLF eligible' },
  { label: 'HCA HealthONE (multiple sites)', avgSalary: '$78,000 – $99,000', hourlyRate: 'Aggressive sign-ons' },
  { label: 'Porter Adventist Hospital', avgSalary: '$76,000 – $95,000', hourlyRate: 'Faith-based system' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$76,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$82,500', hourlyRate: '+$6,500' },
  { label: 'ER', avgSalary: '$86,000', hourlyRate: '+$10,000' },
  { label: 'OR / Surgical', avgSalary: '$85,000', hourlyRate: '+$9,000' },
  { label: 'ICU / Critical Care', avgSalary: '$89,000', hourlyRate: '+$13,000' },
  { label: 'NICU', avgSalary: '$86,500', hourlyRate: '+$10,500' },
  { label: 'Pediatric ICU (PICU)', avgSalary: '$88,000', hourlyRate: '+$12,000' },
];

export default function DenverRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Colorado RN Salary', href: '/rn-salary-by-state/colorado' },
        { label: 'Denver RN Salary 2026' },
      ]}
      h1="Denver RN Salary 2026: How Much Do Nurses Make in Denver, Colorado?"
      lastUpdated="May 2026"
      schemaTitle="Denver RN Salary 2026"
      schemaDescription="Average RN salary in Denver, CO by hospital, specialty, and experience level in 2026."
      schemaUrl="/denver-rn-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Denver RNs earn $84,500/year ($40.63/hr)</strong> on average in 2026.
          New grads start at <strong>$66,000–$73,000</strong>; senior ICU and trauma nurses reach <strong>$95,000–$118,000</strong>.
          UCHealth and Children&apos;s Colorado pay the market top.
          Colorado&apos;s 4.4% flat income tax reduces take-home vs. no-tax states at equivalent gross pay.
        </p>
      </div>

      <p>
        Denver&apos;s healthcare market is expanding rapidly, driven by population growth along the Front Range
        and major health system consolidation. UCHealth, SCL Health, and HCA HealthONE are all competing
        for nurses in a tight labor market — which has pushed sign-on bonuses and base pay higher over the
        past three years.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Denver RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Denver RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Denver RN Salary by Hospital (2026)</h2>
      <p>
        UCHealth University of Colorado Hospital — Denver&apos;s flagship academic medical center and Level 1
        Trauma Center — pays the highest base salaries and offers PSLF eligibility. Children&apos;s Hospital
        Colorado is the top option for pediatric nurses.
      </p>
      <SalaryTable
        title="Nurse Salary by Hospital in Denver, CO"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Denver RN Salary by Specialty (2026)</h2>
      <SalaryTable
        title="Denver RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Colorado Income Tax: What It Means for Take-Home Pay</h2>
      <p>
        Colorado has a flat 4.4% state income tax. On a Denver RN salary of $84,500, that&apos;s approximately
        $3,720/year in state taxes — compared to $0 in Texas, Florida, Nevada, or Washington.
        When evaluating competing job offers between Denver and a no-tax state city like Houston or Las Vegas,
        add $3,000–$5,000 to the no-tax offer for a true apples-to-apples comparison.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/entry-level-nurse-salary', label: 'New Grad RN Salary 2026', desc: 'Starting pay across the US' },
          { href: '/travel-nursing/salary-guide-2026', label: 'Travel Nurse Salary Guide', desc: 'Denver is a strong travel market' },
          { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary 2026', desc: 'Leadership differential pay' },
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
    </SEOPageLayout>
  );
}
