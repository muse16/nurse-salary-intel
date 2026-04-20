import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary Texas (2026): Hourly Pay + Highest Paying Cities',
  description:
    'See the average RN salary in Texas for 2026. Compare hourly pay, top cities, and earning potential for registered nurses.',
};

const faqs = [
  { question: 'How much do nurses make in Texas?', answer: 'The average RN salary in Texas is $81,510/year ($39.19/hr) in 2026. Metro areas like Houston, Dallas, and Austin pay $85,000–$95,000 for experienced nurses.' },
  { question: 'What city in Texas pays nurses the most?', answer: 'Houston pays Texas RNs the most at $87,500/year, driven by the Texas Medical Center. Dallas-Fort Worth and Austin are close behind.' },
  { question: 'Is Texas good for nursing jobs?', answer: 'Yes. Texas has no state income tax, strong population growth, and one of the largest healthcare economies in the country. Texas consistently has 15,000+ open RN positions.' },
  { question: 'How does Texas nurse pay compare to California?', answer: 'California RNs earn $42,500 more per year on average. But after California state income tax (up to 13.3%) and higher cost of living, Texas nurses often have equivalent take-home pay with lower expenses.' },
];

const cityData = [
  { label: 'Houston', avgSalary: '$87,500', hourlyRate: '$42.07/hr' },
  { label: 'Dallas-Fort Worth', avgSalary: '$85,200', hourlyRate: '$40.96/hr' },
  { label: 'Austin', avgSalary: '$84,800', hourlyRate: '$40.77/hr' },
  { label: 'San Antonio', avgSalary: '$78,900', hourlyRate: '$37.93/hr' },
  { label: 'El Paso', avgSalary: '$74,500', hourlyRate: '$35.82/hr' },
  { label: 'State Average', avgSalary: '$81,510', hourlyRate: '$39.19/hr' },
];

export default function TexasRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Texas' },
      ]}
      h1="RN Salary in Texas — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in Texas 2026"
      schemaDescription="Texas RN salary by city, no-tax advantage, and comparisons for 2026."
      schemaUrl="/rn-salary-by-state/texas"
      faqs={faqs}
    >
      <p>
        Texas is one of the best states for registered nurses on a cost-adjusted basis. With no state income tax,
        strong demand, and low cost of living, Texas RNs often take home as much as California nurses earning $40,000+ more.
      </p>

      <SalaryTable title="RN Salary by Texas City (2026)" headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']} rows={cityData} source="BLS OEWS 2025 + NurseSalaryIntel data" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Texas Nurse Pay vs. Cost of Living</h2>
      <p>
        Texas has housing costs 25–40% below the national average (outside of Austin). Combined with no state income
        tax, Texas nurses keep more of what they earn. A $80,000 Texas salary equals roughly $105,000 in California after taxes and COL.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">No State Income Tax Advantage for Texas Nurses</h2>
      <p>
        Texas is one of seven states with no state income tax. On an $85,000 salary, that saves a Texas nurse
        $4,500–$8,500/year compared to nurses in California or New York.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in Texas</h2>
      <p>
        In Texas, CRNAs earn $198,000, Nurse Practitioners $118,000, and ICU nurses $82,000. The Texas Medical
        Center in Houston is a major driver of specialty nursing pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Texas</h2>
      <p>
        Texas is a top-5 destination for travel nursing, with weekly rates of $2,200–$2,900. Rural Texas and
        Level I trauma centers in major metros offer the highest contracts.
      </p>
      <Link href="/travel-nursing/salary-by-state" className="text-primary font-semibold hover:underline text-sm">
        Travel nursing in Texas →
      </Link>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/florida" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Compare with Florida →</span>
        </Link>
        <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">How to Negotiate Nursing Salary →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
