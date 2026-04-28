import type { Metadata } from 'next';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arizona RN Salary 2026: $39–$47/hr + Phoenix vs Tucson',
  description: 'Arizona RN salary 2026: Phoenix averages $85K–$98K, Tucson $79K–$89K. Banner Health, Mayo Clinic, and HonorHealth pay data plus 2.5% flat-tax advantage and sign-on bonuses.',
  alternates: { canonical: 'https://nursesalaryintel.com/arizona-rn-salary-2026' },
};

const cityData = [
  { label: 'Phoenix Metro', avgSalary: '$85,000 – $98,000', hourlyRate: '$41 – $47/hr' },
  { label: 'Scottsdale', avgSalary: '$87,000 – $100,000', hourlyRate: '$42 – $48/hr' },
  { label: 'Mesa / Chandler / Gilbert', avgSalary: '$83,000 – $96,000', hourlyRate: '$40 – $46/hr' },
  { label: 'Tucson', avgSalary: '$79,000 – $89,000', hourlyRate: '$38 – $43/hr' },
  { label: 'Flagstaff', avgSalary: '$77,000 – $87,000', hourlyRate: '$37 – $42/hr' },
  { label: 'Yuma / Rural Arizona', avgSalary: '$73,000 – $83,000', hourlyRate: '$35 – $40/hr' },
];

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$70,720 – $81,120', hourlyRate: '$34 – $39/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$79,040 – $89,440', hourlyRate: '$38 – $43/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$85,280 – $97,760', hourlyRate: '$41 – $47/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$93,600 – $108,160', hourlyRate: '$45 – $52/hr' },
];

const specialtyData = [
  { label: 'ICU / Critical Care', avgSalary: '$91,520 – $106,080', hourlyRate: '$44 – $51/hr' },
  { label: 'ER / Emergency', avgSalary: '$89,440 – $104,000', hourlyRate: '$43 – $50/hr' },
  { label: 'OR / Surgical', avgSalary: '$89,440 – $104,000', hourlyRate: '$43 – $50/hr' },
  { label: 'L&D / NICU', avgSalary: '$85,280 – $99,840', hourlyRate: '$41 – $48/hr' },
  { label: 'Med-Surg / Telemetry', avgSalary: '$79,040 – $91,520', hourlyRate: '$38 – $44/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Arizona in 2026?',
    answer: 'Approximately $86,000/year or $41/hr statewide in 2026. Phoenix metro (including Scottsdale) averages $85,000–$98,000; Tucson averages $79,000–$89,000. Based on BLS May 2024 OEWS data projected 3–4% annually.',
  },
  {
    question: 'What is the RN salary in Phoenix, AZ?',
    answer: 'Phoenix metro RNs earn an estimated $41–$47/hr base ($85,000–$98,000 annually) in 2026. Scottsdale and Mayo Clinic-adjacent areas command the highest rates. New grads start at $34–$39/hr; experienced specialty nurses with night differentials can exceed $50/hr.',
  },
  {
    question: 'What is Arizona\'s income tax rate for nurses?',
    answer: 'Arizona reduced to a flat 2.5% state income tax in 2023 — one of the lowest in the nation. For a nurse earning $86,000, state tax is approximately $2,150/year. Compare this to California ($12,000+) or Oregon ($8,000+) in state taxes on similar income.',
  },
  {
    question: 'Which Arizona hospital pays nurses the most?',
    answer: 'Mayo Clinic (Scottsdale) and HonorHealth typically lead on base hourly rates for experienced specialty nurses. Banner Health is the largest system and offers competitive sign-on packages ($8,000–$15,000 for specialty). Valleywise Health (public) offers structured step progression and strong union-negotiated benefits.',
  },
  {
    question: 'Is Arizona a good state for new grad nurses?',
    answer: 'Yes — Banner Health and HonorHealth both run active new grad residency programs with structured onboarding. Starting salaries ($70,720–$81,120/year) are competitive for the Southwest. Phoenix\'s rapidly growing job market makes placement easier than more saturated markets.',
  },
  {
    question: 'What sign-on bonuses do Arizona hospitals offer?',
    answer: 'ICU/ER/OR specialty roles: $10,000–$20,000. Med-surg floor positions: $5,000–$10,000. New grad residency: $2,000–$5,000. Sign-on packages in Phoenix have increased materially since 2022 due to population growth-driven demand.',
  },
  {
    question: 'Is Arizona a compact nursing license state?',
    answer: 'Yes. Arizona is a member of the Nurse Licensure Compact (NLC). RNs licensed in any of 40+ compact states can practice in Arizona without a separate license — making it easy for out-of-state nurses to try the Arizona market before committing to relocation.',
  },
  {
    question: 'How does Arizona RN salary compare to California?',
    answer: 'California pays more nominally ($132K vs $86K), but after taxes (AZ 2.5% vs CA 9.3–13.3%) and cost of living (AZ housing ~50–60% cheaper than coastal CA), the real purchasing-power gap narrows significantly. Many California RNs relocate to Phoenix specifically for this reason.',
  },
  {
    question: 'What shift differentials do Banner Health and HonorHealth pay?',
    answer: 'Night shift: +$3–$5/hr; weekend: +$2–$4/hr; holiday: +$4–$7/hr; charge nurse: +$2–$3/hr. A Phoenix ICU RN on nights and weekends can add $14,000–$20,000/year to base salary through differentials alone.',
  },
  {
    question: 'What is the job outlook for nurses in Arizona?',
    answer: 'Excellent — among the strongest in the nation. BLS projects 9–11% RN job growth in Arizona through 2026, driven by Phoenix\'s rapid population growth (consistently a top-5 metro for net migration), major healthcare system expansion, and strong retiree influx driving specialty care demand.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Arizona RN Salary 2026', item: 'https://nursesalaryintel.com/arizona-rn-salary-2026/' },
  ],
};

export default function ArizonaRNSalary2026() {
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
          { label: 'Arizona RN Salary 2026' },
        ]}
        h1="Arizona RN Salary 2026: Phoenix Metro Pay, Statewide Rates & Career Outlook"
        lastUpdated="May 1, 2026"
        schemaTitle="Arizona RN Salary 2026: $39–$47/hr + Phoenix vs Tucson"
        schemaDescription="Arizona RN salary 2026: Phoenix averages $85K–$98K, Tucson $79K–$89K. Banner Health, Mayo Clinic, and HonorHealth pay data plus 2.5% flat-tax advantage and sign-on bonuses."
        schemaUrl="/arizona-rn-salary-2026/"
        faqs={faqs}
      >
        <Image
          src="/images/arizona-rn-salary-2026.png"
          alt="Arizona RN salary 2026 map with Phoenix showing $85K–$98K average annual pay."
          width={1200}
          height={630}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p>
          Arizona registered nurses earn an estimated <strong>$38–$47/hr in 2026</strong>, or roughly <strong>$79,000–$98,000 annually</strong> depending on city and experience, based on BLS May 2024 OEWS data projected 3–4% annually. Phoenix has emerged as one of the <strong>fastest-growing RN job markets</strong> in the Southwest, and Arizona&apos;s newly reduced <strong>flat 2.5% state income tax</strong> makes it far more competitive on a take-home basis than the headline numbers suggest.
        </p>
        <p>
          Whether you&apos;re evaluating a Banner Health offer, considering relocation from California, or a new grad exploring the Southwest market — this guide covers exactly what Arizona RNs earn and what drives the variation.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona RN Salary by City (2026 Estimates)</h2>
        <SalaryTable
          title="Arizona RN Pay by Metro Area (2026)"
          headers={['City / Metro', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={cityData}
          source="BLS OEWS May 2024, Arizona statewide and metro-level data, projected 3–4% annually. Figures are estimates."
        />
        <p>
          Phoenix and Scottsdale lead the state, driven by major academic and system competition among Banner Health, HonorHealth, Dignity Health, Mayo Clinic, and Valleywise Health. Tucson&apos;s market is smaller and more dominated by Banner – University Medical Center and Carondelet, with rates 8–12% below Phoenix. For how Arizona compares to the broader Southwest, see <Link href="/rn-salary-by-state/" className="text-primary hover:underline">RN Salary by State 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona RN Pay by Experience Tier</h2>
        <SalaryTable
          title="Arizona RN Pay by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS May 2024 Arizona statewide data, projected 3–4% annually. Excludes differentials and bonuses."
        />
        <p>
          Both Banner Health and HonorHealth run structured new grad residency programs with 90-day clinical onboarding. Completing residency typically triggers a pay step. Specialty certification (CCRN for ICU, CEN for ER) adds $1–$2/hr at most Phoenix systems. Use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model your full compensation stack.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona RN Specialty Pay (2026)</h2>
        <SalaryTable
          title="Arizona RN Salary by Specialty (2026)"
          headers={['Specialty', 'Est. Annual Base', 'Est. Hourly']}
          rows={specialtyData}
          source="BLS OEWS May 2024 specialty classifications, Arizona statewide, projected 3–4% annually."
        />
        <p>
          ICU and OR nurses command the highest premiums at Phoenix&apos;s major trauma centers (Banner University Medical Center Phoenix, Valleywise Health, Mayo Clinic). For the full specialty ranking, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">Highest Paying Nursing Specialties 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona&apos;s 2.5% Flat Tax Advantage</h2>
        <p>
          In 2023, Arizona reduced its state income tax to a <strong>flat 2.5% rate</strong> — the lowest flat rate in the nation for nurses. On a $86,000 salary, this means approximately <strong>$2,150 in state taxes</strong> vs.:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>California:</strong> ~$12,000–$13,200 (9.3–10%)</li>
          <li><strong>Oregon:</strong> ~$7,680–$8,640 (8–9%)</li>
          <li><strong>Colorado:</strong> ~$3,784 (4.4% flat)</li>
          <li><strong>Texas / Florida:</strong> $0 (no state income tax)</li>
        </ul>
        <p>
          Arizona sits between no-tax states and higher-bracket western states — its 2.5% rate is a meaningful advantage for nurses relocating from California, Oregon, or Washington. See <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">Highest Paying States for RNs 2026</Link> for the full after-tax comparison.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials at Arizona Hospitals</h2>
        <p>Most Arizona hospital systems pay these premiums on top of base hourly:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Night shift (7 PM–7 AM):</strong> +$3–$5/hr or 10–12% of base</li>
          <li><strong>Weekend:</strong> +$2–$4/hr or 8–10% premium</li>
          <li><strong>Holiday:</strong> +$4–$7/hr or flat $75–$125/shift</li>
          <li><strong>Charge nurse:</strong> +$2–$3/hr</li>
          <li><strong>Float pool:</strong> +$3–$5/hr (generalist premium)</li>
        </ul>
        <p>
          A mid-career Phoenix ICU RN working nights and weekends can add <strong>$14,000–$20,000/year</strong> to base. For negotiating differential rates, step placement, and sign-on bonuses at Arizona hospitals, see <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Why the Arizona Nursing Job Market Is One of the Best in the Nation</h2>
        <p>Phoenix has been the fastest-growing major metro in the U.S. for multiple consecutive years. The healthcare implications are significant:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>BLS projects <strong>9–11% RN job growth</strong> in Arizona through 2026 — among the highest state-level projections nationally</li>
          <li>Major system expansions: Banner Health, HonorHealth, and Dignity Health all have facilities under construction or recently opened across the East and West Valley</li>
          <li>Retiree influx (Scottsdale, Sun Cities, Mesa) drives particularly strong demand for cardiac, ortho, and oncology nursing</li>
          <li>Arizona is an <strong>NLC compact state</strong> — nurses from 40+ other compact states can start working immediately without a new license</li>
        </ul>
        <p>
          Compare Arizona to neighboring markets: <Link href="/texas-rn-salary-2026/" className="text-primary hover:underline">Texas RN Salary 2026</Link> for the Sun Belt no-tax market, or <Link href="/california-rn-salary-2026/" className="text-primary hover:underline">California RN Salary 2026</Link> for the highest nominal pay in the west.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics OEWS, Arizona statewide and metro areas, May 2024; Arizona Department of Health Services healthcare workforce publications; American Association of Colleges of Nursing workforce data. Internal methodology: BLS mean wages projected with 3–4% annual wage-growth assumption through 2026. All figures are estimates; actual pay varies by employer, experience, location, shift, and contract terms. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
