import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'San Francisco RN Salary 2026: $133,340/yr + UCSF vs Sutter Pay',
  description:
    'San Francisco RNs earn $133,340/yr — highest in the US. Pay at UCSF, Sutter, Kaiser, and ZSFG by specialty and experience, plus purchasing power analysis.',
  alternates: { canonical: 'https://nursesalaryintel.com/san-francisco-rn-salary-2026' },
  openGraph: {
    title: 'San Francisco RN Salary 2026: $133,340/yr + UCSF vs Sutter Pay',
    description: 'San Francisco RN pay by hospital, specialty, and experience — with real purchasing power analysis.',
    url: 'https://nursesalaryintel.com/san-francisco-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in San Francisco in 2026?',
    answer:
      'San Francisco RNs earn an average of $133,340/year ($64.11/hr), based on BLS OEWS data for the San Francisco-Oakland-Hayward MSA. This is the highest metropolitan area RN salary in the United States. UCSF Medical Center and Kaiser Permanente Northern California pay at the top of the local market, with senior specialty nurses exceeding $160,000 at union-contract rates.',
  },
  {
    question: 'What hospitals pay nurses the most in San Francisco?',
    answer:
      'UCSF Medical Center tops the San Francisco market at $135,000–$170,000+ for experienced specialty nurses, backed by CNA union contracts. Kaiser Permanente Northern California follows closely at $130,000–$165,000. Sutter Health (California Pacific Medical Center) and Dignity Health (Saint Francis Memorial) round out the top tier at $120,000–$150,000 for senior roles.',
  },
  {
    question: 'Is San Francisco a good city for nurses despite the high cost of living?',
    answer:
      'For nurses at 5+ years of experience in high-acuity specialties, yes — the real purchasing power is competitive. A UCSF ICU nurse earning $155,000 with CNA union night differential, even after 11%+ effective state income tax and SF\'s high COL, retains meaningful purchasing power. For new grads or nurses in lower-acuity specialties, the math is tighter and other high-paying markets like Seattle may offer better adjusted returns.',
  },
  {
    question: 'Does California have strong union protections for nurses?',
    answer:
      'California is one of the strongest union states for nurses in the country. The California Nurses Association (CNA) represents nurses at UCSF, Kaiser, Sutter, and many other major Bay Area systems. CNA contracts include mandatory nurse-to-patient ratios (the strictest in the US at 1:1 or 1:2 for ICU/PICU), negotiated step scales, and shift differentials significantly above non-union market rates.',
  },
  {
    question: 'What do new grad RNs make in San Francisco?',
    answer:
      'New grad RNs in San Francisco typically earn $88,000–$100,000/year — more than experienced nurses in many other states. CNA-covered facilities like UCSF and Kaiser have union minimums that protect new grad pay. Most Bay Area hospitals run 12–18 month residency programs, and nurses are typically paid full hourly rates from day one of employment.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$88,000 – $100,000', hourlyRate: '$42.31 – $48.08/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$115,000 – $138,000', hourlyRate: '$55.29 – $66.35/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$138,000 – $165,000', hourlyRate: '$66.35 – $79.33/hr' },
  { label: 'Top 10% (specialty + union)', avgSalary: '$170,000+', hourlyRate: '$81.73+/hr' },
];

const hospitalData = [
  { label: 'UCSF Medical Center', avgSalary: '$135,000 – $170,000+', hourlyRate: 'CNA union; Magnet; academic top end' },
  { label: 'Kaiser Permanente (Bay Area)', avgSalary: '$130,000 – $165,000', hourlyRate: 'CNA/SEIU union; highest differentials' },
  { label: 'Sutter Health (CPMC, others)', avgSalary: '$120,000 – $148,000', hourlyRate: 'CNA union at most facilities' },
  { label: 'Dignity Health (Saint Francis)', avgSalary: '$115,000 – $143,000', hourlyRate: 'CNA union; downtown SF campus' },
  { label: 'ZSFG (Zuckerberg SF General)', avgSalary: '$110,000 – $138,000', hourlyRate: 'Level I Trauma; PSLF eligible; city employer' },
  { label: 'Stanford Health Care (South Bay)', avgSalary: '$125,000 – $155,000', hourlyRate: 'CNA union; academic premium' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$115,000', hourlyRate: 'Base SF rate' },
  { label: 'L&D', avgSalary: '$128,000', hourlyRate: '+$13,000' },
  { label: 'ER', avgSalary: '$135,000', hourlyRate: '+$20,000' },
  { label: 'OR / Surgical', avgSalary: '$138,000', hourlyRate: '+$23,000' },
  { label: 'ICU / Critical Care', avgSalary: '$148,000', hourlyRate: '+$33,000' },
  { label: 'NICU', avgSalary: '$140,000', hourlyRate: '+$25,000' },
  { label: 'CRNA (Certified)', avgSalary: '$280,000+', hourlyRate: 'Advanced practice; highest in US' },
];

const cityComparison = [
  { label: 'San Francisco, CA', avgSalary: '$133,340', hourlyRate: 'COL ~180; 11%+ effective state tax' },
  { label: 'Seattle, WA', avgSalary: '$110,000', hourlyRate: 'COL ~138; no state income tax' },
  { label: 'Los Angeles, CA', avgSalary: '$118,000', hourlyRate: 'COL ~175; same CA tax structure' },
  { label: 'New York, NY', avgSalary: '$96,000', hourlyRate: 'COL ~187; state + city tax' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: 'COL 100 baseline' },
];

export default function SanFranciscoRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'California RN Salary', href: '/rn-salary-by-state/california' },
        { label: 'San Francisco RN Salary 2026' },
      ]}
      h1="San Francisco RN Salary 2026: Highest in the US — and What It Actually Buys"
      lastUpdated="May 2026"
      schemaTitle="San Francisco RN Salary 2026"
      schemaDescription="Average RN salary in San Francisco by hospital, specialty, and experience level in 2026 — with purchasing power analysis."
      schemaUrl="/san-francisco-rn-salary-2026"
      datePublished="2026-05-22"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>San Francisco RNs earn $133,340/year ($64.11/hr)</strong> based on the latest BLS data — the highest
          metropolitan area RN salary in the United States (BLS OEWS May 2024). UCSF and Kaiser Permanente
          pay senior specialty nurses <strong>$148,000–$170,000+</strong> at CNA union rates. New grads start
          at <strong>$88,000–$100,000</strong>. California's 11%+ effective income tax and extreme housing
          costs significantly reduce real purchasing power versus the nominal figure.
        </p>
      </div>

      <Image
        src="/images/san-francisco-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy scrubs standing outside a modern San Francisco hospital entrance with the Bay Area cityscape softly visible in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        The San Francisco-Oakland-Hayward MSA leads every metro in the country for registered nurse pay —
        $133,340 per year on average, according to BLS OEWS May 2024 data. Behind that number is a combination
        of California's mandatory nurse-to-patient ratios (which require more nurses per shift than any other
        state), the California Nurses Association's negotiating power at the Bay Area's major health systems,
        and the sheer concentration of world-class academic medical centers competing for experienced nurses.
        What it actually means for take-home pay is a more complicated question.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Francisco RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="San Francisco RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="BLS OEWS May 2024, SF-Oakland-Hayward MSA + NurseSalaryIntel 2026 estimates"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Francisco RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/san-francisco-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salary ranges at San Francisco hospitals including UCSF, Kaiser, Sutter, and Zuckerberg SF General versus national average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        UCSF Medical Center is the flagship academic medical center and the top-paying employer for nurses
        in the Bay Area. Its CNA union contract includes step-based pay scales, mandatory ratio protections,
        and shift differentials that consistently rank among the highest in the country. Kaiser Permanente
        Northern California is the other dominant employer — large, unionized, with strong retirement benefits
        and internal transfer options across the region.
      </p>

      <SalaryTable
        title="San Francisco RN Salary by Hospital (2026)"
        headers={['Hospital / System', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data; CNA contract data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Francisco RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/san-francisco-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs collaborating at a workstation in a bright modern San Francisco hospital ICU, reviewing patient charts together"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="San Francisco RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data; CNA union scale estimates"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">San Francisco vs. Other High-Paying Cities</h2>

      <SalaryTable
        title="RN Salary — San Francisco vs. Top-Paying Metro Areas (2026)"
        headers={['City', 'Avg Annual Salary', 'Key Notes']}
        rows={cityComparison}
        source="BLS OEWS May 2024 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Real Purchasing Power Picture</h2>
      <p>
        San Francisco's $133,340 average salary is extraordinary on paper — but California's progressive
        income tax and extreme housing costs transform the math. After approximately 11% effective state
        income tax on a $133,340 salary, state taxes alone run roughly $14,700/year. Combined with federal
        taxes (24% bracket for this income range), take-home pay is approximately $87,000–$92,000 annually.
        Divide that by San Francisco's cost-of-living index of approximately 180 and the adjusted purchasing
        power lands near $50,000 on a national-baseline comparison.
      </p>
      <p>
        The calculation looks better for senior nurses at $155,000–$170,000 — the absolute dollar surplus
        after taxes is still substantial even at high COL. It also improves significantly for nurses who own
        homes (purchased before the current market) or share housing costs. For nurses relocating into the
        market on today's rental prices, the math is hardest in the first 3–5 years.
      </p>
      <p>
        The non-financial case for San Francisco nursing is real: UCSF and Kaiser offer career development,
        specialty access, research involvement, and clinical exposure that are difficult to replicate elsewhere.
        For nurses who prioritize professional growth and are willing to accept a real-purchasing-power tradeoff,
        San Francisco consistently produces some of the most clinically advanced nurses in the country.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">California Mandatory Nurse Ratios</h2>
      <p>
        California is the only US state with legally mandated nurse-to-patient ratios — established in 1999
        and fully implemented by 2004. In the ICU, the ratio is 1:1 or 1:2 depending on patient acuity.
        Med-surg is 1:5. L&D and NICU have their own specific requirements. These ratios mean California
        hospitals must employ more nurses per patient day than any other state — which directly supports
        the tight labor market that drives up wages. The ratio law is one of the structural reasons
        California nursing salaries have persistently led the nation.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state/california', label: 'California RN Salary (Full State Guide)', desc: 'All cities, experience tiers, top employers' },
          { href: '/nurse-salary-cost-of-living-2026', label: 'Nurse Salary & Cost of Living 2026', desc: 'Where $89K actually goes furthest' },
          { href: '/seattle-rn-salary-2026', label: 'Seattle RN Salary 2026', desc: 'High pay + no state income tax' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay nationwide' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">→</span>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sources</h2>
      <ul>
        <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, San Francisco-Oakland-Hayward MSA (May 2024)</a></li>
        <li><a href="https://www.nationalnursesunited.org/sites/default/files/nnu/documents/cna_contracts.pdf" target="_blank" rel="noopener noreferrer">California Nurses Association — CNA Contract Wage Data</a></li>
        <li><a href="https://www.cdph.ca.gov/programs/chcq/lcp/pages/nursestaffingratios.aspx" target="_blank" rel="noopener noreferrer">California CDPH — Nurse-to-Patient Ratio Standards</a></li>
      </ul>
      <MethodologyBox />
    </SEOPageLayout>
  );
}
