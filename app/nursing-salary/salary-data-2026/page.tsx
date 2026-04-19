import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Salary Data 2026 | Key Stats, Benchmarks & Sourced Numbers',
  description:
    'Sourced nurse salary statistics for 2026. Key benchmarks, state rankings, specialty pay, and wage gap data — free to cite with attribution.',
};

const headlineStats = [
  { stat: 'Average RN salary (national)', value: '$89,010 / year', source: 'BLS OEWS 2025' },
  { stat: 'Average RN hourly rate', value: '$42.80 / hr', source: 'BLS OEWS 2025' },
  { stat: 'Highest-paid state (California)', value: '$124,000 / year', source: 'BLS OEWS 2025' },
  { stat: 'Lowest-paid state (Mississippi)', value: '$62,000 / year', source: 'BLS OEWS 2025' },
  { stat: 'Pay gap: highest vs. lowest state', value: '$62,000 (2×)', source: 'NurseSalaryIntel calc' },
  { stat: 'Average CRNA salary', value: '$214,000 / year', source: 'BLS OEWS 2025' },
  { stat: 'Average NP salary', value: '$126,000 / year', source: 'BLS OEWS 2025' },
  { stat: 'Average travel nurse earnings', value: '$95,000–$150,000 / year', source: 'NurseSalaryIntel data' },
  { stat: 'BSN premium over ADN', value: '+$6,000–$10,000 / year', source: 'NurseSalaryIntel analysis' },
  { stat: 'NP premium over staff RN', value: '+$37,000 / year', source: 'BLS OEWS 2025' },
  { stat: 'Projected RN job openings (2023–2033)', value: '177,400 / year', source: 'BLS Occupational Outlook' },
  { stat: 'Nursing shortage (current shortfall)', value: '~100,000 RNs', source: 'AAMC / HRSA estimates' },
];

const stateRankings = [
  { label: '1. California', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: '2. Hawaii', avgSalary: '$106,000', hourlyRate: '$50.96/hr' },
  { label: '3. Washington', avgSalary: '$102,000', hourlyRate: '$49.04/hr' },
  { label: '4. Oregon', avgSalary: '$98,000', hourlyRate: '$47.12/hr' },
  { label: '5. Alaska', avgSalary: '$97,000', hourlyRate: '$46.63/hr' },
  { label: '6. New York', avgSalary: '$96,000', hourlyRate: '$46.15/hr' },
  { label: '7. Massachusetts', avgSalary: '$95,000', hourlyRate: '$45.67/hr' },
  { label: '8. Connecticut', avgSalary: '$93,000', hourlyRate: '$44.71/hr' },
  { label: '9. New Jersey', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: '10. Maryland', avgSalary: '$90,000', hourlyRate: '$43.27/hr' },
  { label: '...National Average', avgSalary: '$89,010', hourlyRate: '$42.80/hr' },
  { label: '48. Alabama', avgSalary: '$64,000', hourlyRate: '$30.77/hr' },
  { label: '49. South Dakota', avgSalary: '$63,000', hourlyRate: '$30.29/hr' },
  { label: '50. Mississippi', avgSalary: '$62,000', hourlyRate: '$29.81/hr' },
];

const specialtyRankings = [
  { label: '1. CRNA', avgSalary: '$214,000', note: 'Master\'s/DNP required' },
  { label: '2. Nurse Practitioner', avgSalary: '$126,000', note: 'MSN required' },
  { label: '3. Nurse Midwife', avgSalary: '$118,000', note: 'MSN required' },
  { label: '4. Clinical Nurse Specialist', avgSalary: '$112,000', note: 'MSN required' },
  { label: '5. OR / Surgical RN', avgSalary: '$98,000', note: 'Bedside RN' },
  { label: '6. ICU / Critical Care RN', avgSalary: '$96,000', note: 'Bedside RN' },
  { label: '7. ER RN', avgSalary: '$92,000', note: 'Bedside RN' },
  { label: '8. L&D RN', avgSalary: '$90,000', note: 'Bedside RN' },
  { label: '9. NICU RN', avgSalary: '$89,000', note: 'Bedside RN' },
  { label: '10. Med-Surg RN', avgSalary: '$78,000', note: 'Most common entry unit' },
];

const travelStats = [
  { label: 'California (ICU/ER)', avgSalary: '$3,200–$3,800/wk', note: 'Highest market' },
  { label: 'New York metro', avgSalary: '$2,800–$3,400/wk', note: '' },
  { label: 'Washington state', avgSalary: '$2,600–$3,200/wk', note: '' },
  { label: 'Texas', avgSalary: '$2,200–$2,800/wk', note: '' },
  { label: 'Florida', avgSalary: '$2,000–$2,600/wk', note: '' },
  { label: 'National average (all states)', avgSalary: '$2,200–$2,800/wk', note: 'Base + stipends' },
  { label: 'Travel premium vs. staff RN', avgSalary: '+20–40%', note: 'Same market comparison' },
];

export default function NurseSalaryData2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Nurse Salary Data 2026' },
      ]}
      h1="Nurse Salary Data 2026 — Key Statistics & Benchmarks"
      lastUpdated="April 2026"
      schemaTitle="Nurse Salary Data 2026"
      schemaDescription="Sourced nurse salary statistics for 2026 including state rankings, specialty pay, travel nurse earnings, and wage gaps."
      schemaUrl="/nursing-salary/salary-data-2026"
      faqs={[
        {
          question: 'What is the average nurse salary in the US in 2026?',
          answer: 'The average RN salary in the United States is $89,010/year ($42.80/hr) in 2026, according to BLS OEWS data. This ranges from $62,000 in Mississippi to $124,000 in California.',
        },
        {
          question: 'How much more do California nurses make than the national average?',
          answer: 'California RNs earn $124,000/year — $35,000 (65%) more than the national average of $89,010. California has been the highest-paying state for nurses for over a decade, driven by mandatory staffing ratios and strong union contracts.',
        },
        {
          question: 'What is the pay gap between the highest and lowest paying states for nurses?',
          answer: 'The gap between California ($124,000) and Mississippi ($62,000) is $62,000/year — California nurses earn exactly twice what Mississippi nurses earn.',
        },
      ]}
    >
      <p>
        This page compiles the most-cited nurse salary statistics for 2026 in one place. All figures are
        sourced from the Bureau of Labor Statistics OEWS survey or NurseSalaryIntel proprietary data.
        Journalists, researchers, and educators are welcome to cite these figures with a link back to this page.
      </p>

      <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-5 my-6">
        <p className="text-sm font-semibold text-on-surface mb-1">Free to cite</p>
        <p className="text-sm text-on-surface-variant">
          These statistics are free to use in articles, reports, and research with attribution to
          NurseSalaryIntel.com. Primary source: U.S. Bureau of Labor Statistics Occupational Employment
          and Wage Statistics (OEWS), 2025 release.
        </p>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">12 Key Nurse Salary Statistics (2026)</h2>

      <div className="my-6 overflow-x-auto rounded-lg border border-outline-variant">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container-high">
              <th className="px-4 py-3 text-left font-semibold text-on-surface">Statistic</th>
              <th className="px-4 py-3 text-left font-semibold text-on-surface tabular-nums">Value</th>
              <th className="px-4 py-3 text-left font-semibold text-on-surface">Source</th>
            </tr>
          </thead>
          <tbody>
            {headlineStats.map((row, i) => (
              <tr key={i} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                <td className="px-4 py-3 font-medium text-on-surface">{row.stat}</td>
                <td className="px-4 py-3 font-bold text-primary tabular-nums">{row.value}</td>
                <td className="px-4 py-3 text-on-surface-variant text-xs">{row.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Top 10 Highest-Paying States for Nurses (2026)</h2>
      <p>
        California leads the nation at $124,000/year. The top 10 states all pay above the national average
        of $89,010 — most are coastal, unionized, or both.
      </p>

      <SalaryTable
        title="RN Salary State Rankings — Top 10 + Bottom 3 (2026)"
        headers={['Rank & State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={stateRankings}
        source="BLS OEWS 2025"
      />

      <Link href="/rn-salary-by-state/highest-paying-states" className="text-primary font-semibold hover:underline text-sm">
        Full 50-state ranking with cost-of-living adjustments →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nursing Salary by Specialty — Top 10 (2026)</h2>
      <p>
        CRNAs are the highest-paid nurses at $214,000/year — nearly 2.5× the average bedside RN. The gap
        between a med-surg RN ($78,000) and a CRNA ($214,000) is $136,000/year.
      </p>

      <SalaryTable
        title="Nursing Salary by Specialty — Ranked Highest to Lowest"
        headers={['Rank & Specialty', 'Avg. Annual Salary', 'Notes']}
        rows={specialtyRankings}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <Link href="/nursing-salary/by-specialty-2026" className="text-primary font-semibold hover:underline text-sm">
        Full specialty salary breakdown with 18 specialties →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse Pay by State (2026)</h2>
      <p>
        Travel nurses earn 20–40% more than staff nurses in the same market. Weekly all-in packages
        (base + tax-free stipends) range from $2,000 in low-demand markets to $3,800+ in California.
      </p>

      <SalaryTable
        title="Travel Nurse Weekly Pay by State (2026)"
        headers={['State / Market', 'Weekly All-In Package', 'Notes']}
        rows={travelStats}
        source="NurseSalaryIntel data"
      />

      <Link href="/travel-nursing/salary-guide-2026" className="text-primary font-semibold hover:underline text-sm">
        Full travel nurse salary guide with stipend breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Education Level</h2>
      <p>
        Every degree step adds meaningfully to lifetime earnings. The BSN pays for itself in under 2 years;
        the NP degree pays for itself in under 14 months of practice.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant my-4">
        <li><strong>CNA:</strong> $38,000/year avg ($18.27/hr)</li>
        <li><strong>LPN/LVN:</strong> $55,000/year avg ($26.44/hr)</li>
        <li><strong>ADN (RN):</strong> $78,000/year avg ($37.50/hr)</li>
        <li><strong>BSN (RN):</strong> $86,000/year avg ($41.35/hr) — +$8,000 over ADN</li>
        <li><strong>MSN / Nurse Practitioner:</strong> $126,000/year avg ($60.58/hr) — +$40,000 over BSN</li>
        <li><strong>CRNA (DNP/MSN):</strong> $214,000/year avg ($102.88/hr)</li>
      </ul>

      <Link href="/salary/bsn-vs-rn" className="text-primary font-semibold hover:underline text-sm">
        BSN vs ADN salary comparison by state →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Methodology & Sources</h2>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant text-sm">
        <li>
          <strong>Bureau of Labor Statistics (BLS) OEWS:</strong> Primary source for national and
          state-level RN, NP, CRNA, and CNM wage data. 2025 release (covering 2024 survey period).
        </li>
        <li>
          <strong>NurseSalaryIntel proprietary data:</strong> Compiled from travel nurse contract
          postings, staffing agency rate sheets, and nursing community salary surveys (2024–2026).
        </li>
        <li>
          <strong>AAMC / HRSA:</strong> Nursing shortage and workforce projection figures.
        </li>
        <li>
          All figures are U.S.-based. Salaries are pre-tax annual gross unless noted as hourly.
          Travel nurse figures include tax-free stipends in the weekly total.
        </li>
      </ul>

      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-6 mt-8">
        <p className="font-semibold text-on-surface mb-2">Citing this data</p>
        <p className="text-sm text-on-surface-variant">
          You may cite any statistic from this page. Please attribute as:{' '}
          <em>"NurseSalaryIntel, April 2026, nursesalaryintel.com/nursing-salary/salary-data-2026"</em>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/nursing-salary/registered-nurse-salary-guide" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Full RN Salary Guide →</span>
        </Link>
        <Link href="/rn-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">RN Salary by State →</span>
        </Link>
        <Link href="/travel-nursing/salary-guide-2026" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Travel Nurse Salary Guide →</span>
        </Link>
        <Link href="/nursing-salary/by-specialty-2026" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Salary by Specialty →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
