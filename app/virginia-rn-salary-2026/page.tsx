import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Virginia RN Salary 2026 | NurseSalaryIntel',
  description:
    'Virginia RNs earn $77,720/year on average per BLS OEWS May 2024. Northern VA nurses average $90,000–$100,000+. See pay by city, hospital, and specialty.',
  alternates: { canonical: 'https://nursesalaryintel.com/virginia-rn-salary-2026' },
  openGraph: {
    title: 'Virginia RN Salary 2026: What Nurses Earn Across VA',
    description: 'VA RNs average $77,720/yr per BLS. Northern Virginia nurses earn $90K–$100K+. Inova, HCA, and VCU Health lead the market.',
    url: 'https://nursesalaryintel.com/virginia-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Virginia in 2026?',
    answer:
      'The mean annual wage for registered nurses in Virginia is $77,720/year per BLS OEWS May 2024 data. This is below the national average of $89,010, but Northern Virginia nurses — particularly those working in the Washington DC metro market — earn significantly more, averaging $90,000–$103,000/year depending on facility and specialty.',
  },
  {
    question: 'How much do nurses make per hour in Virginia?',
    answer:
      'Virginia RNs earn approximately $37.36/hr on average per BLS OEWS May 2024. Northern Virginia nurses at academic medical centers and Inova facilities average $43–$50/hr base. Night and weekend differentials typically add $4–$7/hr across Virginia markets.',
  },
  {
    question: 'Which Virginia hospitals pay nurses the most?',
    answer:
      'Inova Fairfax Hospital (Northern VA) consistently leads Virginia nurse pay — it is part of the DC metro market and competes with DC and Maryland facilities. VCU Health and Bon Secours in Richmond are the next tier. HCA facilities across Virginia pay competitively, especially with sign-on bonuses for experienced nurses.',
  },
  {
    question: 'Is Virginia a good state for travel nurses?',
    answer:
      'Yes. Virginia is a compact state, meaning Virginia-licensed nurses can work in 40+ states without additional licensure. Northern Virginia in particular has strong travel demand given proximity to federal facilities, NIH, and the dense healthcare corridor between DC and Richmond. Travel RN rates in Northern VA regularly run $2,000–$2,500/week all-in.',
  },
  {
    question: 'How does Virginia RN pay compare to neighboring states?',
    answer:
      'Virginia sits above North Carolina ($72,970) and below Maryland ($84,820) and the DC average ($99,000+) per BLS OEWS May 2024. The Northern Virginia market effectively competes with DC and Maryland wages. Richmond and Hampton Roads nurses earn 15–20% below Northern VA peers for comparable roles.',
  },
];

const cityData = [
  { label: 'Northern Virginia (DC Metro — Inova, HCA)', avgSalary: 'Around $90,000–$103,000/yr', hourlyRate: '~$43–$50/hr' },
  { label: 'Richmond (VCU Health, Bon Secours)', avgSalary: 'Around $76,000–$86,000/yr', hourlyRate: '~$37–$41/hr' },
  { label: 'Virginia Beach / Hampton Roads', avgSalary: 'Around $72,000–$80,000/yr', hourlyRate: '~$35–$38/hr' },
  { label: 'Charlottesville (UVA Health)', avgSalary: 'Around $75,000–$84,000/yr', hourlyRate: '~$36–$40/hr' },
  { label: 'Roanoke / Salem (Carilion)', avgSalary: 'Around $68,000–$76,000/yr', hourlyRate: '~$33–$37/hr' },
  { label: 'Lynchburg', avgSalary: 'Around $66,000–$74,000/yr', hourlyRate: '~$32–$36/hr' },
  { label: 'State Average', avgSalary: '$77,720/yr (BLS OEWS May 2024)', hourlyRate: '~$37.36/hr' },
];

const hospitalData = [
  { label: 'Inova Fairfax Hospital', avgSalary: 'Around $96,000–$108,000/yr', hourlyRate: '~$46–$52/hr base' },
  { label: 'Inova Alexandria Hospital', avgSalary: 'Around $92,000–$103,000/yr', hourlyRate: '~$44–$50/hr base' },
  { label: 'VCU Medical Center (Richmond)', avgSalary: 'Around $78,000–$90,000/yr', hourlyRate: '~$38–$43/hr base' },
  { label: 'UVA Medical Center (Charlottesville)', avgSalary: 'Around $76,000–$88,000/yr', hourlyRate: '~$37–$42/hr base' },
  { label: 'Bon Secours St. Mary\'s (Richmond)', avgSalary: 'Around $74,000–$84,000/yr', hourlyRate: '~$36–$40/hr base' },
  { label: 'Sentara Norfolk General', avgSalary: 'Around $72,000–$82,000/yr', hourlyRate: '~$35–$39/hr base' },
  { label: 'Carilion Roanoke Memorial', avgSalary: 'Around $70,000–$79,000/yr', hourlyRate: '~$34–$38/hr base' },
];

const stateComparison = [
  { label: 'National Average', avgSalary: '$89,010/yr (BLS May 2024)', hourlyRate: '$42.79/hr' },
  { label: 'Maryland', avgSalary: '$84,820/yr (BLS May 2024)', hourlyRate: '$40.78/hr' },
  { label: 'Virginia', avgSalary: '$77,720/yr (BLS May 2024)', hourlyRate: '$37.36/hr' },
  { label: 'North Carolina', avgSalary: '$72,970/yr (BLS May 2024)', hourlyRate: '$35.08/hr' },
  { label: 'West Virginia', avgSalary: '$68,950/yr (BLS May 2024)', hourlyRate: '$33.15/hr' },
  { label: 'Tennessee', avgSalary: '$69,560/yr (BLS May 2024)', hourlyRate: '$33.44/hr' },
];

export default function VirginiaRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Virginia RN Salary 2026' },
      ]}
      h1="Virginia RN Salary 2026: What Nurses Earn From Northern VA to Hampton Roads"
      lastUpdated="May 2026"
      schemaTitle="Virginia RN Salary 2026"
      schemaDescription="Virginia RNs earn $77,720/year per BLS OEWS May 2024. Northern VA nurses average $90,000–$103,000. See pay by city, hospital, and specialty."
      schemaUrl="/virginia-rn-salary-2026"
      datePublished="2026-05-28"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Virginia RNs earn <strong>$77,720/year ($37.36/hr)</strong> on average per BLS OEWS May 2024. The state average understates Northern Virginia, where DC-market wages push Inova nurses to <strong>$96,000–$108,000+</strong>. Richmond and Hampton Roads nurses average <strong>$72,000–$86,000</strong>. Virginia is a compact license state, giving nurses access to 40+ states without relicensure.
        </p>
      </div>

      {/* Hero */}
      <Image
        src="/images/virginia-rn-salary-2026-hero.webp"
        alt="Registered nurse in scrubs standing outside a modern Virginia hospital with autumn trees and a clear blue sky in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <h2>Virginia Nurse Pay: Two Different Markets</h2>
      <p>
        Virginia nursing salary data tells two distinct stories depending on where you look. The <strong>Northern Virginia market</strong> — Fairfax, Arlington, Alexandria, and the broader DC metro corridor — operates at DC-level wages. Inova Health System, the largest health system in Northern VA, sets pay that competes directly with MedStar and Georgetown in DC.
      </p>
      <p>
        The <strong>rest of Virginia</strong> — Richmond, Hampton Roads, Charlottesville, Roanoke — operates at a significantly different pay level. The statewide BLS mean of $77,720 reflects a blend of these two markets. A nurse choosing between an Inova Fairfax offer and a Bon Secours Richmond offer for the same specialty could see a $15,000–$20,000 annual pay difference.
      </p>
      <p>
        Virginia&apos;s income tax tops out at 5.75% — meaningfully lower than DC (8.5–10.75%) and Maryland (5.75% + county tax). For nurses working in the DC metro, living in Virginia is a common financial optimization that can add $3,000–$8,000 in take-home pay annually on the same gross salary.
      </p>

      <h2>Virginia RN Salary by City and Region</h2>

      <SalaryTable
        title="Virginia RN Salary by City and Region (2026 Estimates)"
        headers={['City / Region', 'Estimated Annual Salary', 'Estimated Hourly Rate']}
        rows={cityData}
      />

      {/* Chart */}
      <Image
        src="/images/virginia-rn-salary-2026-comparison.png"
        alt="Bar chart comparing Virginia RN salaries by city including Northern Virginia, Richmond, Virginia Beach, Charlottesville, and Roanoke versus the national average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>Virginia Hospital RN Salaries by Facility</h2>

      <SalaryTable
        title="Virginia Hospital RN Salary Estimates (2026)"
        headers={['Hospital / System', 'Estimated Annual Salary', 'Estimated Hourly Base']}
        rows={hospitalData}
      />

      {/* Inline image */}
      <Image
        src="/images/virginia-rn-salary-2026-hospital.webp"
        alt="Nurse and physician reviewing patient charts together in a bright hospital hallway at a Virginia medical center"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>Virginia vs. Neighboring States: How the Pay Stacks Up</h2>

      <SalaryTable
        title="Virginia RN Salary vs. Mid-Atlantic States (BLS OEWS May 2024)"
        headers={['State', 'Mean Annual RN Salary', 'Hourly Rate']}
        rows={stateComparison}
      />

      <p>
        Virginia sits above North Carolina, West Virginia, and Tennessee — but below Maryland and well below DC-level wages. For nurses in the western or southern parts of the state, Tennessee and NC border markets are close enough that cross-border comparisons are worth running.
      </p>

      <h2>What Virginia Nurses Should Know Before Accepting an Offer</h2>
      <ul>
        <li><strong>Northern VA vs. the rest of the state.</strong> If you are evaluating offers in different VA cities, compare total compensation not just base — Inova in Fairfax pays $15,000–$20,000 more than most Richmond offers for the same specialty and experience level.</li>
        <li><strong>Tax advantage of living in VA vs. working in DC.</strong> If offered a DC hospital job, living in Virginia saves 3–5% in state income tax annually. On a $100,000 salary, that is $3,000–$5,000 more in take-home pay with no salary change.</li>
        <li><strong>Compact license value.</strong> Virginia is a compact state. Your VA license works in 40+ states — a real advantage for adding travel shifts or relocating without relicensure costs and delays.</li>
        <li><strong>Sign-on bonuses vary widely by region.</strong> Northern VA hospitals rarely need large sign-ons — they compete on pay rate. Rural SW Virginia and Appalachian region hospitals regularly offer $10,000–$20,000 sign-ons to recruit nurses from urban markets.</li>
      </ul>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/washington-dc-rn-salary-2026', label: 'Washington DC RN Salary 2026', desc: 'DC metro — top 5 nursing market nationally' },
          { href: '/north-carolina-rn-salary-2026', label: 'North Carolina RN Salary 2026', desc: 'Southern neighbor — compact state comparison' },
          { href: '/raleigh-rn-salary-2026', label: 'Raleigh RN Salary 2026', desc: 'Research Triangle — WakeMed, Duke & UNC Rex pay' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'Scripts and tactics for Virginia hospital offers' },
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
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses), Virginia statewide. <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>Virginia Department of Health Professions nursing workforce data; job posting analysis from Inova, VCU Health, Bon Secours, and HCA Virginia career portals, April–May 2026. City-level estimates are derived from BLS MSA data and job posting ranges.</p>
        <p>Virginia income tax rates: <a href="https://www.tax.virginia.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tax.virginia.gov</a>.</p>
      </div>
    </SEOPageLayout>
  );
}
