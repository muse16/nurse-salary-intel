import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Minneapolis RN Salary 2026: How Much Do Nurses Make in Minneapolis?',
  description:
    'Minneapolis RNs earn $85,000/yr ($40.87/hr) on average in 2026. See pay at Mayo Clinic, M Health Fairview, and Allina — plus Minnesota\'s strong union contracts explained.',
  alternates: { canonical: 'https://nursesalaryintel.com/minneapolis-rn-salary-2026' },
  openGraph: {
    title: 'Minneapolis RN Salary 2026: $85,000/yr Avg',
    description: 'Minneapolis nurse salary by hospital, union contracts, and specialty for 2026.',
    url: 'https://nursesalaryintel.com/minneapolis-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Minneapolis in 2026?',
    answer: 'Minneapolis RNs earn an average of $85,000/year ($40.87/hr) in 2026, near the national average of $89,010. Minnesota Nurses Association (MNA) contracts at major hospital systems set strong wage floors, and experienced nurses at Mayo Clinic Rochester and M Health Fairview can reach $100,000–$120,000/year.',
  },
  {
    question: 'Are Minneapolis nurses unionized?',
    answer: 'Many are. The Minnesota Nurses Association (MNA) represents nurses at Allina Health, M Health Fairview, HealthPartners, and several other major Twin Cities systems. MNA contracts typically set higher base wages, defined step increases, and better staffing ratios than non-union facilities.',
  },
  {
    question: 'How does Minnesota income tax affect nurse pay in Minneapolis?',
    answer: 'Minnesota has one of the higher state income tax rates — up to 9.85% for higher earners. On an $85,000 salary, a Minneapolis RN pays approximately $5,500–$7,000/year in state income tax. This is a significant factor when comparing Minneapolis offers to no-tax states like Texas or Nevada.',
  },
  {
    question: 'Does Mayo Clinic hire RNs in Minneapolis?',
    answer: 'Mayo Clinic\'s main campus is in Rochester, MN (90 miles from Minneapolis), but it does have a presence in the Twin Cities. Mayo Rochester pays RNs $85,000–$120,000/year and is considered one of the premier nursing employers in the Midwest for specialty and magnet designation.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$67,000 – $74,000', hourlyRate: '$32.21 – $35.58/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$82,000 – $96,000', hourlyRate: '$39.42 – $46.15/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$96,000 – $118,000', hourlyRate: '$46.15 – $56.73/hr' },
  { label: 'Top 10% earners', avgSalary: '$122,000+', hourlyRate: '$58.65+/hr' },
];

const hospitalData = [
  { label: 'M Health Fairview (U of MN)', avgSalary: '$86,000 – $112,000', hourlyRate: 'MNA union; PSLF eligible' },
  { label: 'Allina Health (multiple sites)', avgSalary: '$83,000 – $108,000', hourlyRate: 'MNA union contract' },
  { label: 'HealthPartners (Regions Hospital)', avgSalary: '$82,000 – $106,000', hourlyRate: 'Level 1 Trauma; MNA' },
  { label: 'Children\'s Minnesota', avgSalary: '$80,000 – $104,000', hourlyRate: 'Pediatric specialty center' },
  { label: 'North Memorial Health', avgSalary: '$78,000 – $100,000', hourlyRate: 'Level 1 Trauma; non-union' },
  { label: 'Hennepin Healthcare', avgSalary: '$80,000 – $102,000', hourlyRate: 'Level 1 Trauma; public system' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$78,000', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$82,000', hourlyRate: '+$4,000' },
  { label: 'L&D', avgSalary: '$84,500', hourlyRate: '+$6,500' },
  { label: 'ER', avgSalary: '$87,500', hourlyRate: '+$9,500' },
  { label: 'OR / Surgical', avgSalary: '$86,000', hourlyRate: '+$8,000' },
  { label: 'ICU / Critical Care', avgSalary: '$90,500', hourlyRate: '+$12,500' },
  { label: 'NICU', avgSalary: '$87,000', hourlyRate: '+$9,000' },
];

export default function MinneapolisRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Minnesota RN Salary' },
        { label: 'Minneapolis RN Salary 2026' },
      ]}
      h1="Minneapolis RN Salary 2026: How Much Do Nurses Make in Minneapolis, MN?"
      lastUpdated="May 2026"
      schemaTitle="Minneapolis RN Salary 2026"
      schemaDescription="Average RN salary in Minneapolis, MN by hospital, union contracts, and specialty for 2026."
      schemaUrl="/minneapolis-rn-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Minneapolis RNs earn $85,000/year ($40.87/hr)</strong> on average in 2026.
          Strong <strong>Minnesota Nurses Association (MNA) union contracts</strong> at Allina,
          M Health Fairview, and HealthPartners set competitive wage floors.
          Senior nurses at major systems reach <strong>$100,000–$122,000/year</strong>.
          Minnesota&apos;s high state income tax (up to 9.85%) is the key financial drawback.
        </p>
      </div>

      <p>
        Minneapolis is home to some of the Midwest&apos;s strongest nursing labor contracts. The Minnesota
        Nurses Association has negotiated above-average wages, staffing ratios, and step increases at
        the major Twin Cities health systems. For nurses who prioritize job stability and transparent wage
        progression, Minneapolis is one of the best markets in the region.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Minneapolis RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Minneapolis RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Minneapolis RN Salary by Hospital (2026)</h2>
      <p>
        MNA-represented hospitals (M Health Fairview, Allina, HealthPartners) generally pay more and offer
        more predictable wage progression than non-union employers. The union&apos;s 2023 strike across the Twin
        Cities resulted in significant wage gains that are now reflected in current contracts.
      </p>
      <SalaryTable
        title="Nurse Salary by Hospital in Minneapolis, MN"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Minneapolis RN Salary by Specialty (2026)</h2>
      <SalaryTable
        title="Minneapolis RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Minnesota Income Tax: The Real Cost</h2>
      <p>
        Minnesota has a progressive income tax with a top rate of 9.85% — among the highest in the country.
        A Minneapolis RN earning $85,000/year pays approximately $5,500–$7,000 in state income tax.
        When comparing a Minneapolis job offer to one in a no-income-tax state (Texas, Florida, Nevada,
        Washington), subtract $5,000–$8,000 from the Minneapolis gross to get a realistic take-home comparison.
        The union contract benefits and step increases may offset this over time, but it&apos;s a key factor
        for nurses considering relocation.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/night-shift-differential-nurses', label: 'Night Shift Nurse Salary', desc: 'MNA contracts include strong differentials' },
          { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary 2026', desc: 'Leadership pay in union hospitals' },
          { href: '/travel-nursing/salary-guide-2026', label: 'Travel Nurse Salary Guide', desc: 'Minneapolis travel nurse rates' },
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
