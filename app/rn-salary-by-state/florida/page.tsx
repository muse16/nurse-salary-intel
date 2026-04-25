import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florida RN Salary 2026: $76K–$96K/Year + Hourly Breakdown by City & Experience',
  description:
    'Florida RN salary 2026: $76,450–$96,000/year depending on metro, experience, and specialty. See city-by-city pay, no-income-tax advantage, specialty premiums, and travel nurse rates — sourced from BLS OEWS.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-by-state/florida' },
  openGraph: {
    title: 'Florida RN Salary 2026: $76K–$96K/Year + City Breakdown',
    description: 'Florida RN average $76,450/yr. See pay by experience, city, specialty, plus no-tax benefit analysis.',
    url: 'https://nursesalaryintel.com/rn-salary-by-state/florida',
  },
};

const faqs = [
  { question: 'How much do nurses make in Florida?', answer: 'The average RN salary in Florida is $76,450/year ($36.75/hr) in 2026. Depending on metro, experience, and specialty, Florida RNs can earn $58,000–$105,000+/year.' },
  { question: 'Is Florida a good state for nursing jobs?', answer: 'Florida has strong demand due to an aging population and growing retiree base. Pay is below the national average, but no state income tax and strong job availability offset this. Best for nurses valuing lifestyle and stability over maximum pay.' },
  { question: 'What is the highest-paying nursing job in Florida?', answer: 'CRNAs earn $192,000+/year. NPs average $112,000. Specialty nurses (ICU, ER, OR) earn $81,000–$96,000/year, 15–20% above med-surg base.' },
  { question: 'Does Florida\'s no-income-tax benefit offset lower base pay?', answer: 'Partially. A Florida nurse earning $76,450 keeps more take-home than a similar earner in a high-tax state. But the nominal gap versus top-paying states (CA, MA, WA) is real. Model the full picture before deciding.' },
  { question: 'Which Florida city pays nurses the most?', answer: 'Naples–Marco Island and Miami–Fort Lauderdale lead at $79,500–$89,000/year. Tampa and Orlando follow. Rural panhandle regions pay 10–15% below state average.' },
  { question: 'How much do new grad RNs earn in Florida?', answer: 'Entry-level (0–1 year) RNs earn $58,000–$66,000/year ($28–$32/hr). Miami and Tampa offer the highest new-grad rates in the state.' },
  { question: 'What is night shift differential pay in Florida?', answer: 'Night shifts typically add $3–$6/hr on top of base. Weekend differentials add another $2–$5/hr. Combined, consistent night nurses add $8,000–$14,000/year in differential income.' },
  { question: 'How does Florida compare to Texas for RN pay?', answer: 'Both are no-income-tax states with similar base pay ranges ($76K–$80K state average). Texas metros (Houston, Dallas) may edge Florida metros by a small margin in base, but total compensation is comparable.' },
];

const cityData = [
  { label: 'Miami–Fort Lauderdale–Pompano Beach', avgSalary: '$79,500–$86,000', hourlyRate: '$38–$41/hr' },
  { label: 'Naples–Marco Island', avgSalary: '$82,000–$89,000', hourlyRate: '$39–$43/hr' },
  { label: 'Tampa–St. Petersburg–Clearwater', avgSalary: '$77,800–$84,000', hourlyRate: '$37–$40/hr' },
  { label: 'Orlando–Kissimmee–Sanford', avgSalary: '$75,200–$82,000', hourlyRate: '$36–$39/hr' },
  { label: 'Jacksonville', avgSalary: '$74,500–$81,000', hourlyRate: '$36–$39/hr' },
  { label: 'Cape Coral–Fort Myers', avgSalary: '$73,800–$80,000', hourlyRate: '$35–$38/hr' },
  { label: 'Sarasota–North Port', avgSalary: '$72,000–$78,000', hourlyRate: '$35–$37/hr' },
  { label: 'Lakeland–Winter Haven', avgSalary: '$71,000–$76,000', hourlyRate: '$34–$36/hr' },
  { label: 'Tallahassee–Pensacola (Panhandle)', avgSalary: '$70,000–$75,000', hourlyRate: '$33–$36/hr' },
  { label: 'State Average', avgSalary: '$76,450', hourlyRate: '$36.75/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$58,000–$66,000', hourlyRate: '$28–$32/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$70,000–$80,000', hourlyRate: '$34–$38/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$78,000–$89,000', hourlyRate: '$37–$43/hr' },
  { label: 'Senior (10–19 yrs)', avgSalary: '$84,000–$97,000', hourlyRate: '$40–$47/hr' },
  { label: 'Veteran (20+ yrs)', avgSalary: '$89,000–$105,000', hourlyRate: '$43–$50/hr' },
];

const specialtyData = [
  { label: 'Med-Surg / Tele', avgSalary: '$75,000–$86,000', hourlyRate: '$36–$41/hr' },
  { label: 'ICU / Critical Care', avgSalary: '$83,000–$96,000', hourlyRate: '$40–$46/hr' },
  { label: 'ER / Emergency', avgSalary: '$81,000–$94,000', hourlyRate: '$39–$45/hr' },
  { label: 'OR / Surgical', avgSalary: '$85,000–$99,000', hourlyRate: '$41–$48/hr' },
  { label: 'L&D / Labor and Delivery', avgSalary: '$80,000–$92,000', hourlyRate: '$38–$44/hr' },
  { label: 'NICU', avgSalary: '$82,000–$95,000', hourlyRate: '$39–$46/hr' },
  { label: 'Oncology', avgSalary: '$81,000–$93,000', hourlyRate: '$39–$45/hr' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Data sourced from US Bureau of Labor Statistics OEWS May 2024, adjusted for 3–4% annual wage growth projections into 2026. City-level and specialty data derived from metro-area OEWS summaries and cost-of-living adjustments. Travel nursing rates based on current market surveys. Figures are estimates and vary by employer, experience, certifications, location, and contract terms.';

export default function FloridaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Florida' },
      ]}
      h1="RN Salary in Florida — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      author={author}
      sources={sources}
      methodology={methodology}
      schemaTitle="RN Salary in Florida 2026"
      schemaDescription="Florida RN salary by city with no-tax advantage and cost-of-living context."
      schemaUrl="/rn-salary-by-state/florida"
      faqs={faqs}
    >
      <p>
        Florida has strong demand for nurses — but the pay is below the national average. The state&apos;s biggest
        advantages are no state income tax, year-round warm weather, and strong job availability. Whether that&apos;s
        worth the lower salary depends on your priorities. Depending on metro, experience, and specialty, Florida RNs can earn $58,000–$105,000+/year.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Florida RN Pay Compares Nationally</h2>
      <p>
        Florida consistently ranks in the middle-to-lower tier of state RN pay. The national mean annual wage for
        registered nurses was roughly $98,000 in May 2024 (BLS OEWS); Florida&apos;s mean sat near $83,000 in the
        same release. Applying 3–4% projected annual wage growth into 2026 puts Florida&apos;s mean in the{' '}
        <strong>$88,000–$90,000 range</strong>, with the 25th–75th percentile spanning roughly{' '}
        <strong>$74,000–$103,000</strong>.
      </p>
      <p>
        The gap between Florida and top-paying states (California, Hawaii, Oregon, Washington, Massachusetts) is
        primarily driven by union density, cost-of-living baselines, and staffing ratio legislation. See the{' '}
        <Link href="/highest-paying-states-for-rns-2026" className="text-primary hover:underline">
          full state-by-state RN pay rankings
        </Link>{' '}
        for comparison.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Experience Level (2026)</h2>
      <p>
        Experience is one of the largest drivers of Florida RN pay. New grads typically start $58,000–$66,000, while
        veteran nurses with 20+ years reach $89,000–$105,000. Specialty certifications add $1,000–$9,000 annually at each tier.
      </p>
      <SalaryTable title="Florida RN Salary by Experience (2026)" headers={['Experience Tier', 'Estimated Annual Base', 'Estimated Hourly']} rows={experienceData} source="BLS OEWS 2025 + career progression benchmarks" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Florida City (2026)</h2>
      <p>
        Pay varies significantly across Florida — high-paying South Florida metros (Miami, Naples) sit 8–12% above the state
        average, while panhandle and rural regions sit 10–15% below. Urban hospital systems with higher acuity and teaching affiliations consistently pay more.
      </p>
      <SalaryTable title="RN Salary by Florida City (2026)" headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={cityData} source="BLS OEWS 2025 + NurseSalaryIntel data" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/florida-rn-salary-2026-cities.png"
        alt="Bar chart comparing 2026 mean hourly RN pay across Florida metros"
        className="w-full rounded-lg border border-outline-variant my-6"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Florida Nurse Pay