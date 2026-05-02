import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Las Vegas RN Salary 2026: How Much Do Nurses Make in Las Vegas?',
  description:
    'Las Vegas RNs earn $85,500/yr ($41.11/hr) on average in 2026. See pay at UMC, Sunrise, and Valley hospitals — plus Nevada\'s no-income-tax advantage explained.',
  alternates: { canonical: 'https://nursesalaryintel.com/las-vegas-rn-salary-2026' },
  openGraph: {
    title: 'Las Vegas RN Salary 2026: $85,500/yr Avg',
    description: 'Las Vegas nurse salary by hospital, specialty, and Nevada\'s no-income-tax advantage.',
    url: 'https://nursesalaryintel.com/las-vegas-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Las Vegas, NV in 2026?',
    answer: 'Las Vegas RNs earn an average of $85,500/year ($41.11/hr) in 2026, near the national average of $89,010. Nevada\'s zero state income tax means Las Vegas nurses take home $4,000–$7,000 more per year than nurses earning the same gross salary in a high-tax state. University Medical Center (UMC) and Sunrise Hospital pay the highest base salaries in the market.',
  },
  {
    question: 'Does Nevada have state income tax for nurses?',
    answer: 'No — Nevada has no state income tax. On a $85,500 Las Vegas RN salary, this saves approximately $4,000–$7,000/year compared to states like California (9.3%), Minnesota (9.85%), or Oregon (9.9%). This makes Las Vegas compensation significantly more competitive than the nominal salary suggests.',
  },
  {
    question: 'Is Las Vegas a good place for travel nurses?',
    answer: 'Yes — Las Vegas is one of the most popular travel nurse markets in the West. High patient census at casino-area hospitals (trauma from Strip injuries, 24/7 demand), no state income tax on stipends, and affordable housing relative to California make it a strong financial choice for travelers. Weekly packages run $2,400–$3,200/week.',
  },
  {
    question: 'What hospitals in Las Vegas pay nurses the most?',
    answer: 'University Medical Center (UMC) — Clark County\'s Level 1 Trauma Center — pays the highest base salaries in Las Vegas ($88,000–$114,000 for experienced nurses). Sunrise Hospital and Spring Valley Hospital (both HCA) offer competitive sign-on bonuses ($10K–$18K) for specialty nurses.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$67,500 – $74,500', hourlyRate: '$32.45 – $35.82/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$82,000 – $97,000', hourlyRate: '$39.42 – $46.63/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$97,000 – $118,000', hourlyRate: '$46.63 – $56.73/hr' },
  { label: 'Top 10% earners', avgSalary: '$122,000+', hourlyRate: '$58.65+/hr' },
];

const hospitalData = [
  { label: 'University Medical Center (UMC)', avgSalary: '$88,000 – $114,000', hourlyRate: 'Level 1 Trauma; public system' },
  { label: 'Sunrise Hospital & Medical Center', avgSalary: '$84,000 – $108,000', hourlyRate: 'HCA; sign-on: $10K–$18K' },
  { label: 'Spring Valley Hospital', avgSalary: '$82,000 – $104,000', hourlyRate: 'HCA system' },
  { label: 'Valley Hospital Medical Center', avgSalary: '$80,000 – $102,000', hourlyRate: 'Prime Healthcare' },
  { label: 'Dignity Health – St. Rose Dominican', avgSalary: '$82,000 – $105,000', hourlyRate: 'Faith-based; 3 campuses' },
  { label: 'Children\'s Hospital of Nevada at UMC', avgSalary: '$83,000 – $106,000', hourlyRate: 'Pediatric specialty' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$77,000', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$81,000', hourlyRate: '+$4,000' },
  { label: 'L&D', avgSalary: '$84,000', hourlyRate: '+$7,000' },
  { label: 'ER', avgSalary: '$88,000', hourlyRate: '+$11,000' },
  { label: 'OR / Surgical', avgSalary: '$86,500', hourlyRate: '+$9,500' },
  { label: 'ICU / Critical Care', avgSalary: '$91,000', hourlyRate: '+$14,000' },
  { label: 'Trauma (Level 1)', avgSalary: '$94,500', hourlyRate: '+$17,500' },
];

export default function LasVegasRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Nevada RN Salary' },
        { label: 'Las Vegas RN Salary 2026' },
      ]}
      h1="Las Vegas RN Salary 2026: How Much Do Nurses Make in Las Vegas, NV?"
      lastUpdated="May 2026"
      schemaTitle="Las Vegas RN Salary 2026"
      schemaDescription="Average RN salary in Las Vegas, NV by hospital, specialty, and experience level in 2026."
      schemaUrl="/las-vegas-rn-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Las Vegas RNs earn $85,500/year ($41.11/hr)</strong> on average in 2026.
          <strong> No state income tax</strong> adds $4,000–$7,000/year in real take-home.
          UMC (Level 1 Trauma) pays <strong>$88,000–$114,000/year</strong>.
          Travel nurses earn <strong>$2,400–$3,200/week</strong> all-in.
        </p>
      </div>

      <p>
        Las Vegas is a unique nursing market — the 24/7 economy means genuinely round-the-clock patient
        demand, trauma volumes are high year-round, and Nevada&apos;s zero income tax makes every paycheck
        worth meaningfully more than the same gross in California or Minnesota. For nurses relocating from
        high-tax states, Las Vegas delivers a real financial upgrade.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Las Vegas RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Las Vegas RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Las Vegas RN Salary by Hospital (2026)</h2>
      <p>
        UMC is Clark County&apos;s only Level 1 Adult Trauma Center and the public safety net hospital —
        it pays the highest base salaries in Las Vegas. HCA-owned Sunrise and Spring Valley are the two
        largest private hospital employers and lead the market on sign-on bonuses for specialty nurses.
      </p>
      <SalaryTable
        title="Nurse Salary by Hospital in Las Vegas, NV"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Las Vegas RN Salary by Specialty (2026)</h2>
      <p>
        Trauma nurses at UMC command the highest specialty premium — the volume and severity of Strip-related
        traumas and the 24/7 mass casualty preparedness create genuine demand for experienced trauma RNs.
        ICU and ER nurses are the next highest-paid tier.
      </p>
      <SalaryTable
        title="Las Vegas RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nevada Tax Advantage for Las Vegas Nurses</h2>
      <p>
        Nevada&apos;s zero income tax is a genuine financial differentiator. A Las Vegas nurse earning $85,500
        keeps every dollar of that after federal taxes — there&apos;s no state bite. Compare that to a California
        nurse earning $90,000 who pays $6,300–$8,400 in state income tax, or a Minnesota nurse earning $88,000
        who pays $5,500–$7,000. The tax savings can close a $4,000–$8,000 nominal salary gap entirely.
      </p>
      <p>
        For travel nurses, Nevada&apos;s lack of state income tax also means tax-free stipends go further —
        the effective value of a Las Vegas travel contract exceeds what the gross numbers suggest for nurses
        coming from high-tax home states.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/travel-nursing/salary-guide-2026', label: 'Travel Nurse Salary Guide', desc: 'Las Vegas travel contracts explained' },
          { href: '/night-shift-differential-nurses', label: 'Night Shift Nurse Salary', desc: '24/7 market means high differential pay' },
          { href: '/entry-level-nurse-salary', label: 'New Grad RN Salary 2026', desc: 'Starting pay in Nevada' },
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
