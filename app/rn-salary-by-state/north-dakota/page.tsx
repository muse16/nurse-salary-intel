import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'North Dakota RN Salary 2026: $72,140/yr — Sanford Health & No Income Tax',
  description:
    'North Dakota RNs average $72,140/yr ($34.68/hr) in 2026 with no state income tax. See pay by city, Sanford Health rates, rural shortage area bonuses, and loan repayment options.',
};

const faqs = [
  {
    question: 'How much do nurses make in North Dakota?',
    answer: 'The average RN salary in North Dakota is $72,140/year ($34.68/hr) in 2026 — below the national average but with no state income tax and a low cost of living (index ~88). After adjusting for taxes and COL, North Dakota nurses take home competitively relative to the national picture.',
  },
  {
    question: 'Does North Dakota have state income tax for nurses?',
    answer: 'No — North Dakota has no state income tax as of 2026, after eliminating it for most residents. On a $72,140 salary, this saves $2,500–$4,500/year compared to states with 4–6% income tax, meaningfully closing the nominal pay gap.',
  },
  {
    question: 'What is the biggest hospital employer in North Dakota?',
    answer: 'Sanford Health is by far the dominant employer, operating hospitals across Fargo, Bismarck, and the surrounding region. Essentia Health covers the northern corridor. Both offer structured step increases, competitive sign-on bonuses, and strong benefits packages.',
  },
  {
    question: 'Are there nursing loan repayment programs in North Dakota?',
    answer: 'Yes. North Dakota has persistent nursing shortage designations across rural areas, making many positions eligible for NHSC Loan Repayment (up to $50,000 tax-free for 2 years) and the NURSE Corps program. Sanford and Essentia facilities in rural corridors frequently qualify.',
  },
];

const cityData = [
  { label: 'Fargo', avgSalary: '$76,000–$85,000', hourlyRate: '$36.54–$40.87/hr' },
  { label: 'Bismarck', avgSalary: '$72,500–$81,000', hourlyRate: '$34.86–$38.94/hr' },
  { label: 'Grand Forks', avgSalary: '$70,000–$78,000', hourlyRate: '$33.65–$37.50/hr' },
  { label: 'Minot', avgSalary: '$69,000–$77,000', hourlyRate: '$33.17–$37.02/hr' },
  { label: 'State Average', avgSalary: '$72,140', hourlyRate: '$34.68/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$57,000–$63,000', hourlyRate: '$27.40–$30.29/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$65,000–$73,000', hourlyRate: '$31.25–$35.10/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$73,000–$83,000', hourlyRate: '$35.10–$39.90/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$83,000–$96,000', hourlyRate: '$39.90–$46.15/hr' },
];

export default function NorthDakotaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'North Dakota' },
      ]}
      h1="North Dakota RN Salary 2026: Pay, No Income Tax & Loan Repayment"
      lastUpdated="May 2026"
      schemaTitle="North Dakota RN Salary 2026"
      schemaDescription="North Dakota RN salary by city and experience level for 2026, with no-income-tax analysis and loan repayment opportunities."
      schemaUrl="/rn-salary-by-state/north-dakota"
      stateName="North Dakota"
      stateSlug="north-dakota"
      faqs={faqs}
    >
      <p>
        North Dakota RNs earn an average of <strong>$72,140/year ($34.68/hr)</strong> in 2026 — below
        the national average, but no state income tax and a cost of living index of ~88 make the real
        take-home more competitive than the headline suggests. Sanford Health and Essentia Health are
        the dominant employers, anchored in Fargo and Bismarck respectively. For nurses with student
        loans, North Dakota&apos;s widespread rural shortage area designations create access to NHSC and
        NURSE Corps loan repayment programs that can add $25,000–$50,000 in tax-free value.
      </p>

      <SalaryTable
        title="North Dakota RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">North Dakota RN Salary by Experience Level</h2>
      <SalaryTable
        title="ND RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Loan Repayment & Rural Incentives</h2>
      <p>
        North Dakota has one of the highest concentrations of Health Professional Shortage Areas (HPSAs)
        in the Midwest. Nurses working in qualifying rural facilities can access NHSC Loan Repayment
        (up to $50,000 tax-free for a 2-year commitment) and the NURSE Corps program. These programs
        effectively add $25,000–$50,000 in real value on top of base salary — a compelling factor
        for new grads with federal loans.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in North Dakota</h2>
      <p>
        Travel RN assignments in North Dakota pay <strong>$1,900–$2,600/week</strong>. Rural facilities
        and critical access hospitals offer the strongest packages for specialty nurses. Demand is
        consistent due to the state&apos;s chronic staffing shortage in rural corridors.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+North+Dakota&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in North Dakota →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare North Dakota to Neighboring States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/minnesota" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Minnesota RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Higher pay, but 9.85% income tax</p>
        </Link>
        <Link href="/rn-salary-by-state/south-dakota" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">South Dakota RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Similar market, no income tax</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
