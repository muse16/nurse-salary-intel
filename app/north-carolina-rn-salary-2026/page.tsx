import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'North Carolina RN Salary 2026 | NurseSalaryIntel',
  description:
    'North Carolina RNs earn $72,970/year on average per BLS OEWS May 2024. Charlotte and Raleigh push above $80K. See pay by city, hospital, and specialty.',
  alternates: { canonical: 'https://nursesalaryintel.com/north-carolina-rn-salary-2026' },
  openGraph: {
    title: 'North Carolina RN Salary 2026: What Nurses Earn in NC',
    description: 'NC RNs average $72,970/yr per BLS. Charlotte, Raleigh, and Chapel Hill pay above state average. Atrium Health and UNC Health lead the market.',
    url: 'https://nursesalaryintel.com/north-carolina-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in North Carolina in 2026?',
    answer:
      'The mean annual wage for registered nurses in North Carolina is $72,970/year per BLS OEWS May 2024 data — below the national average of $89,010 but with a cost of living index of 94.2, meaning purchasing power is more competitive than the raw number suggests. Charlotte and Raleigh metro areas pay 10–15% above the state mean.',
  },
  {
    question: 'How much do nurses make per hour in North Carolina?',
    answer:
      'The average hourly rate for RNs in North Carolina is approximately $35.08/hr based on BLS OEWS May 2024 data. Night shift and weekend differentials typically add $3–$6/hr, with major academic centers like UNC Chapel Hill and Duke reporting higher differentials.',
  },
  {
    question: 'Which North Carolina hospitals pay nurses the most?',
    answer:
      'Duke University Hospital and UNC Medical Center in Chapel Hill consistently lead NC nurse pay, with experienced specialty nurses reporting base rates of $42–$50/hr. Atrium Health (Charlotte) is the largest health system in NC and pays competitively for ICU, OR, and trauma nurses. Novant Health is slightly below Atrium in reported base rates but offers strong benefits.',
  },
  {
    question: 'Is North Carolina a good state for nurses?',
    answer:
      'NC is a solid mid-range nursing market. Pay is below the national average, but cost of living — especially outside Charlotte and Raleigh — is lower than most comparable states. NC is a compact state, allowing nurses to work across borders without additional licensure. The healthcare sector is growing rapidly, particularly in the Research Triangle (Raleigh-Durham-Chapel Hill) and Charlotte metro.',
  },
  {
    question: 'Does North Carolina have a nursing shortage?',
    answer:
      'Yes. NC Health News and the NC Board of Nursing have reported persistent nursing shortages, particularly in rural counties. Rural critical access hospitals often offer higher sign-on bonuses ($10,000–$20,000) to attract nurses, which can make total first-year compensation competitive despite lower base rates.',
  },
];

const cityData = [
  { label: 'Charlotte Metro (Atrium, Novant)', avgSalary: 'Around $80,000–$86,000/yr', hourlyRate: '~$38–$41/hr' },
  { label: 'Raleigh-Durham Metro', avgSalary: 'Around $78,000–$84,000/yr', hourlyRate: '~$37–$40/hr' },
  { label: 'Chapel Hill (UNC Health)', avgSalary: 'Around $79,000–$87,000/yr', hourlyRate: '~$38–$42/hr' },
  { label: 'Durham (Duke Health)', avgSalary: 'Around $82,000–$90,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Greensboro / Winston-Salem', avgSalary: 'Around $72,000–$78,000/yr', hourlyRate: '~$35–$37/hr' },
  { label: 'Wilmington', avgSalary: 'Around $69,000–$75,000/yr', hourlyRate: '~$33–$36/hr' },
  { label: 'Asheville', avgSalary: 'Around $68,000–$74,000/yr', hourlyRate: '~$33–$36/hr' },
  { label: 'State Average', avgSalary: '$72,970/yr (BLS OEWS May 2024)', hourlyRate: '~$35.08/hr' },
];

const specialtyData = [
  { label: 'CRNA', avgSalary: 'Around $205,000–$220,000/yr', hourlyRate: 'Highest-paid nursing role' },
  { label: 'Nurse Practitioner', avgSalary: 'Around $108,000–$118,000/yr', hourlyRate: '~$52–$57/hr' },
  { label: 'ICU / Critical Care RN', avgSalary: 'Around $84,000–$96,000/yr', hourlyRate: '~$40–$46/hr' },
  { label: 'OR / Surgical RN', avgSalary: 'Around $80,000–$92,000/yr', hourlyRate: '~$38–$44/hr' },
  { label: 'ER / Emergency RN', avgSalary: 'Around $78,000–$90,000/yr', hourlyRate: '~$37–$43/hr' },
  { label: 'L&D RN', avgSalary: 'Around $76,000–$86,000/yr', hourlyRate: '~$37–$41/hr' },
  { label: 'Med-Surg RN', avgSalary: 'Around $68,000–$76,000/yr', hourlyRate: '~$33–$37/hr' },
  { label: 'New Grad RN', avgSalary: 'Around $58,000–$66,000/yr', hourlyRate: '~$28–$32/hr' },
];

const stateComparison = [
  { label: 'National Average', avgSalary: '$89,010/yr (BLS May 2024)', hourlyRate: '$42.79/hr' },
  { label: 'Virginia', avgSalary: '$77,720/yr (BLS May 2024)', hourlyRate: '$37.36/hr' },
  { label: 'South Carolina', avgSalary: 'Around $64,000/yr', hourlyRate: 'Below NC avg' },
  { label: 'North Carolina', avgSalary: '$72,970/yr (BLS May 2024)', hourlyRate: '$35.08/hr' },
  { label: 'Tennessee', avgSalary: '$69,560/yr (BLS May 2024)', hourlyRate: '$33.44/hr' },
  { label: 'Georgia', avgSalary: '$75,080/yr (BLS May 2024)', hourlyRate: '$36.09/hr' },
];

export default function NorthCarolinaRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'North Carolina RN Salary 2026' },
      ]}
      h1="North Carolina RN Salary 2026: What Nurses Earn Across the State"
      lastUpdated="May 2026"
      schemaTitle="North Carolina RN Salary 2026"
      schemaDescription="North Carolina RNs earn $72,970/year on average per BLS OEWS May 2024. Charlotte and Raleigh push above $80K. See pay by city, hospital, and specialty."
      schemaUrl="/north-carolina-rn-salary-2026"
      datePublished="2026-05-28"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          North Carolina RNs earn <strong>$72,970/year ($35.08/hr)</strong> on average per BLS OEWS May 2024 data — below the national average, but with a cost of living index of 94.2 that narrows the real gap. Charlotte and Durham nurses average <strong>$80,000–$90,000+</strong>. Duke University Hospital and UNC Medical Center lead state pay.
        </p>
      </div>

      {/* Hero */}
      <Image
        src="/images/north-carolina-rn-salary-2026-hero.webp"
        alt="Registered nurse in scrubs standing confidently outside a large North Carolina hospital with trees and blue sky in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <h2>North Carolina Nurse Pay: The Full Picture</h2>
      <p>
        North Carolina employed <strong>106,380 registered nurses</strong> as of BLS OEWS May 2024, making it one of the larger nursing workforces in the Southeast. The state average of $72,970/year sits below the national mean — but purchasing power is more competitive than that gap implies. NC&apos;s cost of living index of 94.2 means a $73,000 salary in Greensboro or Wilmington goes further than the same number in a coastal or high-tax state.
      </p>
      <p>
        The pay story in NC is really two stories: the Research Triangle and Charlotte metro, where academic medical centers push wages well above the state mean, and the rest of the state, where rural and community hospital pay runs $5,000–$15,000 below Charlotte and Raleigh.
      </p>

      <h2>North Carolina RN Salary by City and Metro Area</h2>

      <SalaryTable
        title="North Carolina RN Salary by City (2026 Estimates)"
        headers={['City / Metro Area', 'Estimated Annual Salary', 'Estimated Hourly Rate']}
        rows={cityData}
      />

      {/* Chart */}
      <Image
        src="/images/north-carolina-rn-salary-2026-comparison.png"
        alt="Bar chart comparing North Carolina RN salaries by city including Charlotte, Durham, Raleigh, Chapel Hill, Greensboro, and Wilmington versus the national average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>North Carolina RN Salary by Specialty</h2>
      <p>
        Specialty drives significant pay differences across NC, just as it does nationally. CRNA demand is particularly strong in the Research Triangle due to the concentration of surgical centers and academic hospitals. ICU nurses at Duke and UNC report some of the highest staff RN rates in the state.
      </p>

      <SalaryTable
        title="North Carolina RN Salary by Specialty (2026 Estimates)"
        headers={['Specialty', 'Estimated Annual Salary', 'Notes']}
        rows={specialtyData}
      />

      {/* Inline image */}
      <Image
        src="/images/north-carolina-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing patient charts together in a bright hospital corridor at a North Carolina medical center"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>How North Carolina Compares to Neighboring States</h2>

      <SalaryTable
        title="NC RN Salary vs. Southeast States (BLS OEWS May 2024)"
        headers={['State', 'Mean Annual RN Salary', 'Hourly Rate']}
        rows={stateComparison}
      />

      <p>
        North Carolina sits in the middle of its peer group — above South Carolina and Tennessee, below Virginia and Georgia. The compact licensure agreement (NC is a compact state) means nurses can pick up work in Virginia or South Carolina without additional state licensure — a meaningful advantage for travel nurses and those considering cross-border employment.
      </p>

      <h2>What Moves Pay the Most in North Carolina</h2>
      <ul>
        <li><strong>System affiliation.</strong> Duke Health and UNC Health pay measurably more than community hospitals — the gap between a Duke ICU nurse and a rural NC hospital ICU nurse can reach $15,000–$20,000 annually at the same experience level.</li>
        <li><strong>Sign-on bonuses in rural markets.</strong> Rural NC hospitals, especially critical access facilities in the western mountains and eastern coastal plain, routinely offer $10,000–$20,000 sign-on bonuses to attract nurses. This can make first-year total compensation very competitive even at lower base rates.</li>
        <li><strong>Night shift differential.</strong> NC hospitals typically pay $3–$6/hr for overnight shifts. On the state average salary, consistent nights add roughly $6,000–$12,000 annually.</li>
        <li><strong>Compact license leverage.</strong> Being in a compact state means NC nurses can take travel assignments in 40+ states without additional licensing fees — an advantage that matters if you want to supplement income with travel shifts.</li>
      </ul>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/virginia-rn-salary-2026', label: 'Virginia RN Salary 2026', desc: 'Northern VA and Richmond pay breakdown' },
          { href: '/washington-dc-rn-salary-2026', label: 'Washington DC RN Salary 2026', desc: 'Top 5 metro market nationally' },
          { href: '/travel-nurse-salary-guide', label: 'Travel Nurse Pay Guide', desc: 'How to use your compact license for higher pay' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'Scripts and tactics for NC hospital offers' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <p className="font-semibold text-primary text-sm">{label}</p>
            <p className="text-on-surface-variant text-xs mt-1">{desc}</p>
          </Link>
        ))}
      </div>

      <MethodologyBox />

      <div className="not-prose text-sm text-on-surface-variant mt-6 space-y-1">
        <p><strong>Sources:</strong></p>
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses), North Carolina statewide. <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>NC Board of Nursing workforce reports; job posting analysis from Indeed and Atrium/Duke/UNC career portals, April–May 2026. City-level estimates are derived from BLS MSA data and adjusted for local market conditions.</p>
      </div>
    </SEOPageLayout>
  );
}
