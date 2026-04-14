import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nursing Salary Database 2026 | NurseSalaryIntel',
  description:
    'Browse the most complete nursing salary database. Filter by state, city, specialty, and experience level. Updated monthly with BLS and real-world data.',
  openGraph: {
    title: 'Nursing Salary Database 2026 | NurseSalaryIntel',
    description:
      'Browse the most complete nursing salary database. Filter by state, city, specialty, and experience level. Updated monthly with BLS and real-world data.',
    url: 'https://nursesalaryintel.com/salary-data',
  },
};

const faqs = [
  {
    question: 'Where does the salary data come from?',
    answer:
      'Our data combines Bureau of Labor Statistics (BLS) Occupational Employment and Wage Statistics, real-world contract data from travel nursing agencies, and self-reported salary surveys from nurses.',
  },
  {
    question: 'How often is the database updated?',
    answer:
      'We update salary data monthly with new BLS releases and continuously integrate real-world contract data from travel nursing assignments.',
  },
  {
    question: 'Does this include travel nursing pay?',
    answer:
      'Yes. Our database includes both staff nurse salaries and travel nursing pay packages, broken down by base hourly rate, stipends, and total compensation.',
  },
  {
    question: 'Can I filter by experience level?',
    answer:
      'Yes. Use the salary calculator on the homepage to filter by years of experience, state, specialty, and setting (hospital, outpatient, travel).',
  },
];

const topSpecialties = [
  { label: 'CRNA (Nurse Anesthetist)', avgSalary: '$214,200', hourlyRate: '$103/hr' },
  { label: 'Nurse Practitioner', avgSalary: '$126,260', hourlyRate: '$60.70/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: '$95,270', hourlyRate: '$45.80/hr' },
  { label: 'Emergency Room RN', avgSalary: '$89,010', hourlyRate: '$42.79/hr' },
  { label: 'Labor & Delivery RN', avgSalary: '$86,340', hourlyRate: '$41.51/hr' },
  { label: 'NICU RN', avgSalary: '$84,490', hourlyRate: '$40.62/hr' },
  { label: 'Med-Surg RN', avgSalary: '$77,600', hourlyRate: '$37.31/hr' },
  { label: 'Charge Nurse', avgSalary: '$82,750', hourlyRate: '$39.78/hr' },
];

const topStates = [
  { label: 'California', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: 'Hawaii', avgSalary: '$106,530', hourlyRate: '$51.22/hr' },
  { label: 'Oregon', avgSalary: '$102,700', hourlyRate: '$49.38/hr' },
  { label: 'Washington', avgSalary: '$100,890', hourlyRate: '$48.51/hr' },
  { label: 'New York', avgSalary: '$98,560', hourlyRate: '$47.38/hr' },
  { label: 'Massachusetts', avgSalary: '$96,630', hourlyRate: '$46.46/hr' },
  { label: 'New Jersey', avgSalary: '$94,690', hourlyRate: '$45.52/hr' },
  { label: 'Connecticut', avgSalary: '$93,370', hourlyRate: '$44.89/hr' },
];

export default function SalaryDataPage() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Database' },
      ]}
      h1="Nursing Salary Database — 2026"
      lastUpdated="April 2026"
      schemaTitle="Nursing Salary Database 2026"
      schemaDescription="Browse the most complete nursing salary database. Filter by state, city, specialty, and experience level."
      schemaUrl="/salary-data"
      faqs={faqs}
    >
      <p>
        Browse the most comprehensive nursing salary database available. Our data covers registered nurses,
        advanced practice nurses, and travel nurses across all 50 states — updated monthly with BLS data
        and real-world contract information.
      </p>

      {/* Quick Links */}
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        <Link href="/rn-salary-by-state" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest">
          <h2 className="font-bold text-primary mb-1">Search Salaries by State →</h2>
          <p className="text-sm text-on-surface-variant">Compare RN pay across all 50 states with cost-of-living data.</p>
        </Link>
        <Link href="/nursing-salary/by-specialty-2026" className="block p-5 rounded-lg border border-outline-variant hover:border-primary transition-colors bg-surface-container-lowest">
          <h2 className="font-bold text-primary mb-1">Search Salaries by Specialty →</h2>
          <p className="text-sm text-on-surface-variant">CRNA, NP, ICU, ER, NICU, L&D, and 15+ more specialties.</p>
        </Link>
      </div>

      {/* How We Collect Data */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">How We Collect Our Data</h2>
      <p>
        We combine three data sources for accuracy: Bureau of Labor Statistics (BLS) Occupational Employment
        and Wage Statistics, real-world pay packages from travel nursing agencies, and self-reported salary
        surveys from our nurse community. Data is cross-referenced and updated monthly.
      </p>

      {/* Top Specialties Table */}
      <SalaryTable
        title="Highest-Paying Nursing Specialties — 2026"
        headers={['Specialty', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={topSpecialties}
        source="BLS OEWS 2025 + NurseSalaryIntel survey data"
      />

      {/* Top States Table */}
      <SalaryTable
        title="Highest-Paying States for Nurses — 2026"
        headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={topStates}
        source="BLS OEWS 2025"
      />

      {/* Trends */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Average RN Salary Trends (2020–2026)</h2>
      <p>
        Nursing salaries have grown 18% nationally since 2020, driven by post-pandemic staffing shortages
        and increased demand for specialized care. Travel nursing pay peaked in 2022 and has normalized
        but remains significantly above pre-pandemic levels. The national average RN salary in 2026 is $89,010.
      </p>

      {/* Cross-links */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Explore More Salary Data</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors text-center">
          <span className="text-sm font-semibold text-primary">Top Paying States</span>
        </Link>
        <Link href="/travel-nursing/salary-guide-2026" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors text-center">
          <span className="text-sm font-semibold text-primary">Travel Nurse Salary Guide</span>
        </Link>
        <Link href="/salary-negotiation/nurse-playbook" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors text-center">
          <span className="text-sm font-semibold text-primary">Negotiation Playbook</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
