import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Idaho RN Salary 2026: $72,160/yr — St. Luke\'s, Boise Boom & Fastest-Growing State',
  description:
    'Idaho RNs average $72,160/yr ($34.69/hr) in 2026. See pay by city, St. Luke\'s vs. Saint Alphonsus rates, rural shortage bonuses, and why Idaho\'s population boom is driving nursing demand.',
};

const faqs = [
  {
    question: 'How much do nurses make in Idaho?',
    answer: 'The average RN salary in Idaho is $72,160/year ($34.69/hr) in 2026. Boise nurses at St. Luke\'s Health System earn $76,000–$85,000, while rural areas pay less. Idaho\'s rapid population growth is tightening the nursing labor market and pushing salaries upward faster than most Midwest or Mountain West peers.',
  },
  {
    question: 'What is the biggest hospital in Idaho?',
    answer: 'St. Luke\'s Health System is Idaho\'s largest private employer, operating hospitals in Boise, Meridian, Nampa, Twin Falls, and across the Treasure Valley. Saint Alphonsus (Trinity Health) is the primary competitor in Boise and Nampa. The two systems compete for nurses across the region, which benefits salary negotiation.',
  },
  {
    question: 'Why is nursing in such high demand in Idaho?',
    answer: 'Idaho has been the fastest-growing state by percentage in recent years, driven by migration from California, Washington, and Oregon. The rapid population influx has outpaced healthcare infrastructure growth, creating persistent nursing shortages — particularly in the Treasure Valley (Boise/Nampa/Meridian corridor) and rural southern Idaho.',
  },
  {
    question: 'Are there rural nursing incentives in Idaho?',
    answer: 'Yes. Much of rural and northern Idaho carries Health Professional Shortage Area (HPSA) designations. Nurses in qualifying facilities can access NHSC Loan Repayment (up to $50,000 tax-free for 2 years) and the NURSE Corps program. The Idaho Area Health Education Centers (AHEC) also supports rural placement incentives.',
  },
];

const cityData = [
  { label: 'Boise', avgSalary: '$76,000–$85,000', hourlyRate: '$36.54–$40.87/hr' },
  { label: 'Meridian', avgSalary: '$72,000–$80,000', hourlyRate: '$34.62–$38.46/hr' },
  { label: 'Nampa', avgSalary: '$71,000–$79,000', hourlyRate: '$34.13–$37.98/hr' },
  { label: 'Twin Falls', avgSalary: '$68,500–$76,500', hourlyRate: '$32.93–$36.78/hr' },
  { label: 'State Average', avgSalary: '$72,160', hourlyRate: '$34.69/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$57,000–$63,000', hourlyRate: '$27.40–$30.29/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$65,000–$73,000', hourlyRate: '$31.25–$35.10/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$73,000–$83,000', hourlyRate: '$35.10–$39.90/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$83,000–$96,000', hourlyRate: '$39.90–$46.15/hr' },
];

export default function IdahoRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Idaho' },
      ]}
      h1="Idaho RN Salary 2026: Pay, Population Boom & Rural Incentives"
      lastUpdated="May 2026"
      schemaTitle="Idaho RN Salary 2026"
      schemaDescription="Idaho RN salary by city and experience level for 2026, with St. Luke's and Saint Alphonsus employer data and rural shortage incentives."
      schemaUrl="/rn-salary-by-state/idaho"
      stateName="Idaho"
      stateSlug="idaho"
      faqs={faqs}
    >
      <p>
        Idaho RNs earn an average of <strong>$72,160/year ($34.69/hr)</strong> in 2026. Idaho has
        been one of the fastest-growing states in the US by percentage for the past several years,
        and that population surge is outpacing healthcare capacity — creating some of the tightest
        nursing labor markets in the Mountain West. St. Luke&apos;s Health System (Idaho&apos;s largest
        private employer) and Saint Alphonsus (Trinity Health) compete head-to-head across the Treasure
        Valley, which gives experienced nurses real leverage in salary negotiations. Rural Idaho&apos;s
        widespread HPSA designations also create access to NHSC loan repayment worth up to $50,000
        tax-free.
      </p>

      <SalaryTable
        title="Idaho RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Idaho RN Salary by Experience Level</h2>
      <SalaryTable
        title="ID RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Treasure Valley Nursing Market</h2>
      <p>
        The Boise–Nampa–Meridian corridor (Treasure Valley) is the state&apos;s dominant healthcare
        market and where nurse salaries are highest. St. Luke&apos;s Boise Medical Center (Level II
        Trauma) and Saint Alphonsus Regional Medical Center compete directly for ICU, OR, and ER
        nurses — sign-on bonuses of $5,000–$12,000 are common for critical care specialties.
        Population growth from California and Pacific Northwest transplants is accelerating demand
        faster than Idaho nursing programs can supply it, a dynamic that continues to put upward
        pressure on wages.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Rural Shortage Incentives in Idaho</h2>
      <p>
        Much of rural and northern Idaho — including the Magic Valley, eastern Idaho, and the
        Panhandle — carries HPSA designations. Nurses at qualifying rural facilities can access
        NHSC Loan Repayment (up to $50,000 tax-free for a 2-year commitment) and the NURSE Corps
        program. For nurses with significant federal loans, a rural Idaho assignment combined with
        loan repayment can outperform a higher-paid Boise staff position in total financial value.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in Idaho</h2>
      <p>
        Idaho hospitals offer night shift differentials of 10–16% above base pay. On the $72,160
        state average, nights add $7,216–$11,546/year. St. Luke&apos;s and Saint Alphonsus both offer
        structured differential schedules for specialty night nurses.{' '}
        <Link href="/night-shift-differential-nurses" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Idaho</h2>
      <p>
        Travel RN assignments in Idaho pay <strong>$1,900–$2,600/week</strong>. St. Luke&apos;s Boise
        and Saint Alphonsus are the primary travel markets. Rural critical access hospitals in
        eastern Idaho and the Magic Valley post consistent travel openings, particularly for
        med-surg and critical care nurses.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+Idaho&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in Idaho →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare Idaho to Neighboring States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/washington" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Washington RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">No income tax, significantly higher pay</p>
        </Link>
        <Link href="/rn-salary-by-state/oregon" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Oregon RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Portland market vs. Boise comparison</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
