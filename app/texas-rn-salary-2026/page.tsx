import type { Metadata } from 'next';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Texas RN Salary 2026: Hourly Pay + No-Tax Advantage',
  description: 'Texas RN salary 2026: $80K–$98K average, zero state income tax, Houston vs Dallas vs Austin pay breakdown. Experience tiers, specialty premiums, and sign-on bonus data.',
  alternates: { canonical: 'https://nursesalaryintel.com/texas-rn-salary-2026/' },
};

const cityData = [
  { label: 'Houston (Texas Medical Center)', avgSalary: '$89,000 – $104,000', hourlyRate: '$43 – $50/hr' },
  { label: 'Austin', avgSalary: '$85,000 – $100,000', hourlyRate: '$41 – $48/hr' },
  { label: 'Dallas – Fort Worth', avgSalary: '$87,000 – $100,000', hourlyRate: '$42 – $48/hr' },
  { label: 'San Antonio', avgSalary: '$81,000 – $95,000', hourlyRate: '$39 – $46/hr' },
  { label: 'El Paso', avgSalary: '$79,000 – $91,000', hourlyRate: '$38 – $44/hr' },
  { label: 'Rural / West Texas', avgSalary: '$75,000 – $87,000', hourlyRate: '$36 – $42/hr' },
];

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$70,720 – $83,200', hourlyRate: '$34 – $40/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$79,040 – $91,520', hourlyRate: '$38 – $44/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$87,360 – $99,840', hourlyRate: '$42 – $48/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$95,680 – $112,320', hourlyRate: '$46 – $54/hr' },
];

const specialtyData = [
  { label: 'ICU / Critical Care', avgSalary: '$93,600 – $110,240', hourlyRate: '$45 – $53/hr' },
  { label: 'ER / Emergency', avgSalary: '$91,520 – $108,160', hourlyRate: '$44 – $52/hr' },
  { label: 'OR / Surgical', avgSalary: '$91,520 – $108,160', hourlyRate: '$44 – $52/hr' },
  { label: 'L&D / NICU', avgSalary: '$87,360 – $103,040', hourlyRate: '$42 – $50/hr' },
  { label: 'Med-Surg / Telemetry', avgSalary: '$80,000 – $92,000', hourlyRate: '$38 – $44/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Texas in 2026?',
    answer: 'Approximately $88,000/year or $42/hr statewide. Houston leads at $89,000–$104,000; rural west Texas markets are 10–15% lower. Based on BLS May 2024 OEWS data projected 3–4% annually.',
  },
  {
    question: 'Does Texas have state income tax for nurses?',
    answer: 'No — Texas has zero state income tax. An RN earning $88,000 in Texas keeps roughly $8,000–$13,000 more per year than a comparable earner in California or New York after state taxes.',
  },
  {
    question: 'Which Texas city pays RNs the most?',
    answer: 'Houston leads at $89,000–$104,000 annually, anchored by the Texas Medical Center — the world\'s largest medical complex. Austin and Dallas-Fort Worth follow closely. Specialty nurses at Houston Methodist, MD Anderson, or Texas Children\'s command the highest packages.',
  },
  {
    question: 'What sign-on bonuses do Texas hospitals offer?',
    answer: 'ICU/ER/OR specialty roles: $10,000–$20,000. Med-surg positions: $2,000–$7,000. Houston Texas Medical Center and Baylor Scott & White in Dallas are particularly aggressive with sign-on packages.',
  },
  {
    question: 'Is Texas a good state for travel nursing?',
    answer: 'Yes — Texas is one of the most active travel nursing markets in the U.S. Thirteen-week contracts at Texas Medical Center and Dallas-Fort Worth systems average $2,500–$3,500/week all-in. Texas is also an NLC compact state, so most nurses can start working without a new license.',
  },
  {
    question: 'How much do ICU nurses make in Texas?',
    answer: 'An estimated $45–$53/hr base in Houston/Austin in 2026, or $92,000–$110,000 annually. With CCRN certification and night differentials, experienced ICU RNs regularly earn $55–$60/hr in major metro markets.',
  },
  {
    question: 'How does Texas RN salary compare to California?',
    answer: 'California pays more nominally ($132K vs $88K), but after state income taxes (CA: 9.3–13.3%; TX: 0%) and cost of living (Texas housing ~50% cheaper), a Texas RN\'s real purchasing power is often comparable or better. Many California nurses relocate to Texas specifically for this reason.',
  },
  {
    question: 'What is the new grad RN salary in Texas?',
    answer: 'An estimated $70,720–$83,200/year ($34–$40/hr). Major Texas systems (Baylor Scott & White, HCA, Houston Methodist) offer structured new grad residency programs with 90-day onboarding. Starting pay is lower than California but cost of living is substantially lower.',
  },
  {
    question: 'Is Texas an NLC compact nursing license state?',
    answer: 'Yes. Texas is a member of the Nurse Licensure Compact. A Texas RN license is valid to practice in 40+ other compact states — making Texas an ideal base for travel nurses who want to work across multiple states.',
  },
  {
    question: 'What shift differentials do Texas hospitals pay?',
    answer: 'Night shift: +$3–$5/hr; weekend: +$2–$4/hr; holiday: +$4–$7/hr; charge nurse: +$2–$3/hr. A full-time Texas ICU RN working nights and weekends can add $12,000–$20,000/year to base salary through differentials.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Texas RN Salary 2026', item: 'https://nursesalaryintel.com/texas-rn-salary-2026/' },
  ],
};

export default function TexasRNSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'RN Salary by State', href: '/rn-salary-by-state/' },
          { label: 'Texas RN Salary 2026' },
        ]}
        h1="Texas RN Salary 2026: Hourly Pay, City Breakdown & the No-Tax Advantage"
        lastUpdated="April 29, 2026"
        schemaTitle="Texas RN Salary 2026: Hourly Pay + No-Tax Advantage"
        schemaDescription="Texas RN salary 2026: $80K–$98K average, zero state income tax, Houston vs Dallas vs Austin pay breakdown. Experience tiers, specialty premiums, and sign-on bonus data."
        schemaUrl="/texas-rn-salary-2026/"
        faqs={faqs}
      >
        <Image
          src="/images/texas-rn-salary-2026.png"
          alt="Texas RN salary 2026 map showing Houston, Dallas, and Austin as top-paying metro areas."
          width={1200}
          height={630}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p>
          Texas registered nurses earn an estimated <strong>$38–$47/hr in 2026</strong>, or roughly <strong>$80,000–$98,000 annually</strong> depending on city and experience, based on BLS May 2024 OEWS data projected 3–4% annually. While Texas&apos; nominal salaries trail California and New York, the state&apos;s <strong>zero income tax</strong> creates a real-dollar take-home advantage of $8,000–$14,000/year over high-tax states. Add a lower cost of living, the world&apos;s largest medical complex in Houston, and one of the nation&apos;s fastest-growing RN job markets — and Texas becomes one of the most compelling total-compensation destinations for nurses.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Texas RN Salary by City (2026 Estimates)</h2>
        <SalaryTable
          title="Texas RN Salary by Metro Area (2026)"
          headers={['City / Metro', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={cityData}
          source="BLS OEWS May 2024, state and metro-level data, projected 3–4% annually. Figures are estimates."
        />
        <p>
          Houston leads the state because of the Texas Medical Center — 60+ hospitals and research institutions employing 100,000+ healthcare workers. The competition for specialty nurses at Houston Methodist, MD Anderson Cancer Center, Texas Children&apos;s Hospital, Memorial Hermann, and Baylor St. Luke&apos;s drives sign-on bonuses and base wages above the statewide average. For a full state comparison, see <Link href="/rn-salary-by-state/" className="text-primary hover:underline">RN Salary by State 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Texas RN Pay by Experience Tier</h2>
        <SalaryTable
          title="Texas RN Pay by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS May 2024 Texas statewide data, projected 3–4% annually. Excludes differentials and bonuses."
        />
        <p>
          The jump from new grad to early career is especially large in Texas because most major systems (HCA Healthcare, Baylor Scott &amp; White, Houston Methodist) run formal new grad residency programs — and completion of the residency typically triggers a raise to the next pay step. Specialty certification (CCRN for ICU, CEN for ER) adds another $1–$2/hr at most Houston and Dallas systems.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Texas RN Specialty Pay (2026 Estimates)</h2>
        <SalaryTable
          title="Texas RN Salary by Specialty (2026)"
          headers={['Specialty', 'Est. Annual Base', 'Est. Hourly']}
          rows={specialtyData}
          source="BLS OEWS May 2024 specialty classifications, Texas statewide, projected 3–4% annually."
        />
        <p>
          For the full specialty pay ranking across all states, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">Highest Paying Nursing Specialties 2026</Link>. ICU and ER nurses in Houston and Austin routinely clear $50+/hr once night differentials and certification premiums are added. Use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model your specific stack.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">The No-State-Income-Tax Advantage</h2>
        <p>
          Texas is one of nine states with zero state income tax. For nurses evaluating job offers across state lines, this is the single most underestimated factor in total compensation:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>A Texas RN earning <strong>$88,000</strong> saves approximately $8,184–$11,440/year vs. an Oregon RN earning the same amount (Oregon 9.3% rate)</li>
          <li>A Texas RN at $88,000 takes home roughly the same as a California RN at $100,000–$103,000 after state taxes</li>
          <li>Combined with Texas&apos;s lower housing costs (median home price ~$320,000 vs. California&apos;s $750,000), the real purchasing-power gap narrows dramatically</li>
        </ul>
        <p>
          For the full no-tax vs. high-tax state comparison, see <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">Highest Paying States for RNs 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials in Texas</h2>
        <p>Most Texas hospital systems pay these shift premiums on top of base:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Night shift (7 PM–7 AM or 11 PM–7 AM):</strong> +$3–$5/hr or 10–15% of base</li>
          <li><strong>Weekend:</strong> +$2–$4/hr or 8–10% premium</li>
          <li><strong>Holiday:</strong> +$4–$7/hr or flat $50–$125/shift</li>
          <li><strong>Charge nurse:</strong> +$2–$3/hr</li>
          <li><strong>Float pool:</strong> +$3–$5/hr (generalist premium)</li>
        </ul>
        <p>
          A mid-career Texas ICU RN working nights and weekends can add <strong>$12,000–$20,000/year</strong> to base through differentials. For negotiating differential rates at hire, see the <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Texas Job Outlook: Why the Market Keeps Growing</h2>
        <p>
          Texas is the fastest-growing state in the U.S. by total population — adding 500,000+ residents per year. Healthcare demand is tracking this growth:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>BLS projects <strong>8–10% RN job growth</strong> in Texas through 2026 (vs. 6% national average)</li>
          <li>20+ new or expanded hospital facilities opened in Texas in 2024–2025</li>
          <li>Texas is an <strong>NLC compact state</strong> — nurses from 40+ other compact states can start working immediately without a new license</li>
          <li>Medicaid non-expansion creates higher uncompensated care loads but also drives hospitals to compete harder for nursing talent through wages</li>
        </ul>
        <p>
          For the broader picture of where Texas ranks among the most in-demand nursing states, see <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">Highest Paying States for RNs 2026</Link>. For how Texas compares to the other major West Coast and East Coast markets, see <Link href="/california-rn-salary-2026/" className="text-primary hover:underline">California RN Salary 2026</Link> and <Link href="/new-york-rn-salary-2026/" className="text-primary hover:underline">New York RN Salary 2026</Link>.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics OEWS, Texas statewide and metro areas, May 2024; Texas Department of State Health Services healthcare workforce publications; American Association of Colleges of Nursing workforce data. Internal methodology: BLS mean wages projected with 3–4% annual wage-growth assumption through 2026. All figures are estimates; actual pay varies by employer, experience, location, shift, and contract terms. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
