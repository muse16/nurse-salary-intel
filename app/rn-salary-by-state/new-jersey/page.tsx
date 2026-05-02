import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Jersey RN Salary 2026: $93,230/yr — NYC Proximity Premium Explained',
  description:
    'New Jersey RNs average $93,230/yr ($44.82/hr) in 2026 — one of the top 5 states nationally. See pay by city, top employers RWJBarnabas & Hackensack Meridian, and the NJ income tax impact.',
};

const faqs = [
  {
    question: 'How much do nurses make in New Jersey?',
    answer: 'The average RN salary in New Jersey is $93,230/year ($44.82/hr) in 2026 — ranking among the top 5 states nationally. Newark and Jersey City nurses near NYC earn significantly more, with experienced specialty RNs reaching $110,000+.',
  },
  {
    question: 'Why does New Jersey pay nurses so much?',
    answer: 'New Jersey\'s proximity to New York City creates direct wage pressure — hospitals compete with NYC salaries to retain staff. The state also has a high cost of living (index ~127) and a large, dense hospital network with major academic medical centers.',
  },
  {
    question: 'What is New Jersey\'s income tax rate for nurses?',
    answer: 'New Jersey has a progressive income tax from 1.4% to 10.75%. On a $93,230 salary, most NJ nurses pay approximately $5,500–$7,500/year in state income tax — meaningfully reducing take-home compared to states like Texas, Florida, or Nevada.',
  },
  {
    question: 'Which New Jersey hospitals pay nurses the most?',
    answer: 'RWJBarnabas Health and Hackensack Meridian Health pay the highest base salaries in New Jersey, particularly at their Level 1 trauma centers. AtlantiCare and Cooper University Health also offer competitive packages with strong sign-on bonuses for critical care specialties.',
  },
];

const cityData = [
  { label: 'Newark', avgSalary: '$98,500–$110,000', hourlyRate: '$47.36–$52.88/hr' },
  { label: 'Jersey City', avgSalary: '$96,000–$107,000', hourlyRate: '$46.15–$51.44/hr' },
  { label: 'Trenton', avgSalary: '$89,000–$99,000', hourlyRate: '$42.79–$47.60/hr' },
  { label: 'Atlantic City', avgSalary: '$87,500–$97,000', hourlyRate: '$42.07–$46.63/hr' },
  { label: 'State Average', avgSalary: '$93,230', hourlyRate: '$44.82/hr' },
];

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$72,000–$79,000', hourlyRate: '$34.62–$37.98/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$82,000–$93,000', hourlyRate: '$39.42–$44.71/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$93,000–$107,000', hourlyRate: '$44.71–$51.44/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$107,000–$124,000', hourlyRate: '$51.44–$59.62/hr' },
];

export default function NewJerseyRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'New Jersey' },
      ]}
      h1="New Jersey RN Salary 2026: What Nurses Really Earn in NJ"
      lastUpdated="May 2026"
      schemaTitle="New Jersey RN Salary 2026"
      schemaDescription="New Jersey RN salary by city and experience level for 2026, with employer data and income tax analysis."
      schemaUrl="/rn-salary-by-state/new-jersey"
      stateName="New Jersey"
      stateSlug="new-jersey"
      faqs={faqs}
    >
      <p>
        New Jersey RNs earn an average of <strong>$93,230/year ($44.82/hr)</strong> in 2026 — ranking
        among the top 5 states nationally. The state&apos;s proximity to New York City is the primary wage
        driver: NJ hospitals must compete with Manhattan salaries to retain staff, pushing base pay
        significantly above the national average of $89,010. Newark and Jersey City nurses — particularly
        those at RWJBarnabas and Hackensack Meridian — routinely see offers in the $98,000–$110,000
        range for experienced specialty roles.
      </p>

      <SalaryTable
        title="New Jersey RN Salary by City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">New Jersey RN Salary by Experience Level</h2>
      <SalaryTable
        title="NJ RN Salary by Years of Experience (2026)"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The NJ Income Tax Reality</h2>
      <p>
        New Jersey&apos;s progressive income tax tops out at 10.75% — one of the highest in the country.
        On a $93,230 salary, most nurses pay approximately $5,500–$7,500/year in state income tax.
        When comparing a New Jersey offer to positions in Texas, Florida, or Nevada (all no-tax states),
        subtract $5,000–$8,000 from the NJ gross to get a true take-home comparison. The NYC wage
        proximity premium partially offsets this, but it&apos;s a key factor for nurses evaluating relocation.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in New Jersey</h2>
      <p>
        Travel RN assignments in New Jersey pay <strong>$2,200–$3,000/week</strong> — above the national
        average, driven by demand at Level 1 trauma centers and specialty units near NYC. RWJBarnabas,
        Hackensack, and Cooper University Health are consistent travel nurse employers. NJ&apos;s participation
        in the Nurse Licensure Compact simplifies multi-state licensing for travelers.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+New+Jersey&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in New Jersey →
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare New Jersey to Nearby States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/new-york" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">New York RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Compare NYC vs. NJ take-home</p>
        </Link>
        <Link href="/rn-salary-by-state/pennsylvania" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Pennsylvania RN Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Philly corridor comparison</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
