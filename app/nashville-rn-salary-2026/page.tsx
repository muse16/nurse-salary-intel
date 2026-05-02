import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Nashville RN Salary 2026: How Much Do Nurses Make in Nashville, TN?',
  description:
    'Nashville RNs earn $72,800/yr ($35.00/hr) on average in 2026. See pay at Vanderbilt, HCA, and Saint Thomas — plus why Nashville is a top travel nurse market.',
  alternates: { canonical: 'https://nursesalaryintel.com/nashville-rn-salary-2026' },
  openGraph: {
    title: 'Nashville RN Salary 2026: $72,800/yr Avg',
    description: 'Nashville nurse salary by hospital, specialty, and why it\'s a top travel nurse destination.',
    url: 'https://nursesalaryintel.com/nashville-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Nashville, TN in 2026?',
    answer: 'Nashville RNs earn an average of $72,800/year ($35.00/hr) in 2026 — below the national average of $89,010 but with no state income tax and a cost of living near the national average. Vanderbilt University Medical Center pays the highest base salaries in the market ($80,000–$105,000 for experienced nurses).',
  },
  {
    question: 'Why is Nashville a top travel nurse market?',
    answer: 'Nashville hosts the national headquarters of HCA Healthcare and is a major hub for healthcare industry activity. Travel nurses in Nashville earn $2,000–$2,800/week all-in. The combination of reasonable cost of living, no state income tax, and strong healthcare infrastructure makes Nashville one of the most attractive travel markets in the Southeast.',
  },
  {
    question: 'Does Tennessee have state income tax for nurses?',
    answer: 'Tennessee has no state income tax on wages, which adds approximately $3,500–$5,000/year in take-home pay compared to states with 4–6% income tax rates. This meaningfully closes the gap between Nashville\'s below-average nominal salary and higher-paying coastal cities.',
  },
  {
    question: 'What Nashville hospitals pay nurses the most?',
    answer: 'Vanderbilt University Medical Center ($80,000–$105,000/yr) is the clear market leader in Nashville nurse pay, followed by Monroe Carell Jr. Children\'s Hospital at Vanderbilt and Saint Thomas Midtown. HCA\'s Nashville-area hospitals offer competitive sign-on bonuses but typically pay below Vanderbilt on base salary.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$58,000 – $65,000', hourlyRate: '$27.88 – $31.25/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$70,000 – $84,000', hourlyRate: '$33.65 – $40.38/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$84,000 – $102,000', hourlyRate: '$40.38 – $49.04/hr' },
  { label: 'Top 10% earners', avgSalary: '$108,000+', hourlyRate: '$51.92+/hr' },
];

const hospitalData = [
  { label: 'Vanderbilt University Medical Center', avgSalary: '$80,000 – $105,000', hourlyRate: 'Level 1 Trauma; PSLF eligible' },
  { label: 'Monroe Carell Jr. Children\'s at VUMC', avgSalary: '$78,000 – $102,000', hourlyRate: 'Pediatric Level 1 Trauma' },
  { label: 'Saint Thomas Midtown (Ascension)', avgSalary: '$72,000 – $92,000', hourlyRate: 'Sign-on: $6K–$12K' },
  { label: 'HCA TriStar Centennial Medical', avgSalary: '$70,000 – $90,000', hourlyRate: 'Sign-on: $8K–$15K' },
  { label: 'HCA TriStar Skyline Medical', avgSalary: '$69,000 – $88,000', hourlyRate: 'HCA system benefits' },
  { label: 'Nashville General Hospital', avgSalary: '$67,000 – $85,000', hourlyRate: 'Public hospital; PSLF eligible' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$68,000', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$71,500', hourlyRate: '+$3,500' },
  { label: 'L&D', avgSalary: '$74,000', hourlyRate: '+$6,000' },
  { label: 'ER', avgSalary: '$76,500', hourlyRate: '+$8,500' },
  { label: 'OR / Surgical', avgSalary: '$75,000', hourlyRate: '+$7,000' },
  { label: 'ICU / Critical Care', avgSalary: '$79,000', hourlyRate: '+$11,000' },
  { label: 'NICU', avgSalary: '$76,800', hourlyRate: '+$8,800' },
];

export default function NashvilleRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Tennessee RN Salary' },
        { label: 'Nashville RN Salary 2026' },
      ]}
      h1="Nashville RN Salary 2026: How Much Do Nurses Make in Nashville, TN?"
      lastUpdated="May 2026"
      schemaTitle="Nashville RN Salary 2026"
      schemaDescription="Average RN salary in Nashville, TN by hospital, specialty, and experience level in 2026."
      schemaUrl="/nashville-rn-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Nashville RNs earn $72,800/year ($35.00/hr)</strong> on average in 2026 — below
          the national average but with <strong>no state income tax</strong> and a moderate cost of living.
          Vanderbilt University Medical Center pays <strong>$80,000–$105,000/year</strong>.
          Travel nurses in Nashville earn <strong>$2,000–$2,800/week</strong> all-in.
        </p>
      </div>

      <p>
        Nashville is the healthcare industry capital of the South — home to HCA Healthcare&apos;s global
        headquarters and Vanderbilt University Medical Center, one of the Southeast&apos;s premier academic
        medical systems. Staff RN pay is below the national average, but zero state income tax and
        moderate housing costs make Nashville more competitive than the nominal salary suggests.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nashville RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Nashville RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nashville RN Salary by Hospital (2026)</h2>
      <p>
        Vanderbilt dominates the Nashville market for both salary and academic prestige. Its Level 1 Trauma
        Center status and academic medical center pay bands push experienced nurses to $100,000+ — well above
        the HCA system hospitals that make up the rest of the market.
      </p>
      <SalaryTable
        title="Nurse Salary by Hospital in Nashville, TN"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nashville RN Salary by Specialty (2026)</h2>
      <SalaryTable
        title="Nashville RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nashville as a Travel Nurse Market</h2>
      <p>
        Nashville is one of the Southeast&apos;s strongest travel nurse markets. HCA&apos;s dominant market presence
        means frequent contract postings, and Vanderbilt regularly uses travelers to cover specialty units.
        Weekly all-in packages (base + tax-free stipends) run $2,000–$2,800/week for most specialties,
        with ICU and ER traveling at the high end. No state income tax amplifies the net value of those
        stipends.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/travel-nursing/salary-guide-2026', label: 'Travel Nurse Salary Guide', desc: 'Nashville travel contracts explained' },
          { href: '/entry-level-nurse-salary', label: 'New Grad RN Salary 2026', desc: 'Starting pay for Tennessee nurses' },
          { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary 2026', desc: 'Leadership differential at Nashville hospitals' },
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
