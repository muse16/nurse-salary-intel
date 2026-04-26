import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Los Angeles RN Salary 2026: Hourly Pay & Benefits Breakdown',
  description: 'Los Angeles RN salary 2026: $125K–$140K average, $60–$67/hr base. Hospital-by-hospital breakdown with Cedars-Sinai, UCLA, and USC Keck pay data plus sign-on bonuses.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-los-angeles-2026/' },
};

const employerData = [
  { label: 'Cedars-Sinai (West Hollywood)', avgSalary: '$133,000 – $145,000', hourlyRate: '$64 – $70/hr' },
  { label: 'UCLA Health (Westwood/Santa Monica)', avgSalary: '$129,000 – $141,000', hourlyRate: '$62 – $68/hr' },
  { label: 'USC Keck Medicine (Downtown LA)', avgSalary: '$127,000 – $139,000', hourlyRate: '$61 – $67/hr' },
  { label: 'Kaiser Permanente LA', avgSalary: '$125,000 – $138,000', hourlyRate: '$60 – $66/hr' },
  { label: 'LAC+USC Medical Center (public)', avgSalary: '$120,000 – $133,000', hourlyRate: '$58 – $64/hr' },
  { label: 'Providence Health (multiple LA)', avgSalary: '$122,000 – $135,000', hourlyRate: '$59 – $65/hr' },
];

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$104,000 – $116,000', hourlyRate: '$50 – $56/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$115,000 – $128,000', hourlyRate: '$55 – $62/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$125,000 – $140,000', hourlyRate: '$60 – $67/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$137,000 – $155,000', hourlyRate: '$66 – $75/hr' },
];

const specialtyData = [
  { label: 'Med-Surg / Telemetry', avgSalary: '$120,000 – $135,000', hourlyRate: '$58 – $65/hr' },
  { label: 'ICU / Critical Care', avgSalary: '$130,000 – $148,000', hourlyRate: '$63 – $71/hr' },
  { label: 'ER / Emergency', avgSalary: '$128,000 – $146,000', hourlyRate: '$62 – $70/hr' },
  { label: 'OR / Surgical', avgSalary: '$128,000 – $147,000', hourlyRate: '$62 – $71/hr' },
  { label: 'L&D / Neonatal', avgSalary: '$126,000 – $143,000', hourlyRate: '$61 – $69/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Los Angeles in 2026?',
    answer: 'An estimated $125,000–$140,000/year (mean ~$132,000) in 2026, or roughly $60–$67/hr base. Source: BLS May 2024 LA metro OEWS data projected 3–4% annually. Figures are estimates.',
  },
  {
    question: 'Which LA hospital pays nurses the most?',
    answer: 'Cedars-Sinai leads in estimated base pay at $64–$70/hr ($133,000–$145,000/year). UCLA Health and USC Keck follow closely. All three major academic systems use SEIU union contracts with structured annual step increases.',
  },
  {
    question: 'What is the starting salary for a new grad RN in LA?',
    answer: 'An estimated $50–$56/hr or $104,000–$116,000 annually at major LA health systems in 2026. New grad residency programs are standard at Cedars-Sinai, UCLA, and Kaiser. LA new grad rates are among the highest in the nation.',
  },
  {
    question: 'Do LA nurses have union protection?',
    answer: 'Approximately 60% of LA hospital RNs are union-represented (CNA or SEIU). Union nurses benefit from structured step pay schedules, 3–4% annual raises, strict staffing ratios, and defined-benefit pensions at major systems.',
  },
  {
    question: 'What sign-on bonuses do LA hospitals offer?',
    answer: 'ICU/ER/OR specialty roles: $10,000–$18,000. Med-surg floor positions: $5,000–$10,000. West LA and Santa Monica commands highest packages. Most tie to a 1–2 year commitment.',
  },
  {
    question: 'How do LA ICU nurses compare to med-surg nurses in pay?',
    answer: 'ICU RNs in LA earn +$4–$6/hr above base med-surg rates, plus night differentials. A mid-career LA ICU nurse on nights can earn $70–$80/hr loaded — roughly $145,000–$166,000 annually at full-time hours.',
  },
  {
    question: 'What shift differentials do LA hospitals pay?',
    answer: 'Night shift: +$2–$5/hr; weekend: +$2–$4/hr; holiday: +$4–$8/hr. A full-time LA RN working nights and weekends can add $15,000–$25,000/year to base salary.',
  },
  {
    question: 'Is West LA / Santa Monica worth the commute for higher pay?',
    answer: 'West LA and Santa Monica hospitals (Cedars-Sinai, UCLA Santa Monica, Providence Saint John\'s) typically pay $5,000–$10,000 above downtown LA. Whether the commute premium makes sense depends on your housing location. Many nurses reverse-commute from more affordable suburbs.',
  },
  {
    question: 'How does LA RN pay compare to the rest of California?',
    answer: 'LA ($125K–$140K) sits below the SF Bay Area ($140K–$155K) but above San Diego ($120K–$135K) and significantly above inland markets ($100K–$115K). LA\'s large hospital network offers more job volume than any other California metro.',
  },
  {
    question: 'Is travel nursing in LA worth it?',
    answer: 'Yes — LA travel contracts at major medical centers typically pay $2,800–$3,800/week all-in, with housing stipends. LA is one of the most active travel nurse markets in California, particularly in ICU, ER, and OR.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'California RN Salary 2026', item: 'https://nursesalaryintel.com/california-rn-salary-2026/' },
    { '@type': 'ListItem', position: 3, name: 'Los Angeles RN Salary 2026', item: 'https://nursesalaryintel.com/rn-salary-los-angeles-2026/' },
  ],
};

export default function RNSalaryLosAngeles2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'California RN Salary 2026', href: '/california-rn-salary-2026/' },
          { label: 'Los Angeles RN Salary 2026' },
        ]}
        h1="Los Angeles RN Salary 2026: Hourly Pay, Hospital Breakdown & What You Keep"
        lastUpdated="April 28, 2026"
        schemaTitle="Los Angeles RN Salary 2026: Hourly Pay & Benefits Breakdown"
        schemaDescription="Los Angeles RN salary 2026: $125K–$140K average, $60–$67/hr base. Hospital-by-hospital breakdown with Cedars-Sinai, UCLA, and USC Keck pay data plus sign-on bonuses."
        schemaUrl="/rn-salary-los-angeles-2026/"
        faqs={faqs}
      >
        <p>
          Los Angeles registered nurses earn an estimated <strong>$60–$67/hr base in 2026</strong>, or roughly <strong>$125,000–$140,000 annually</strong> (mean ~$132,000), based on BLS May 2024 metro data projected with 3–4% annual wage growth. LA is the second-largest RN market in California (behind the Bay Area) and home to some of the nation&apos;s most prestigious academic medical centers. New grads start at $104,000–$116,000; senior specialty nurses with a decade of experience and union step progression regularly earn $155,000+.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">LA RN Pay by Hospital System (2026 Estimates)</h2>
        <SalaryTable
          title="Los Angeles RN Salary by Major Employer (2026)"
          headers={['Employer / System', 'Est. Annual Salary', 'Est. Hourly']}
          rows={employerData}
          source="BLS OEWS May 2024 LA metro data, projected 3–4% annually. Cross-referenced with union contract disclosures. Figures are estimates."
        />
        <p>
          West LA institutions — Cedars-Sinai, UCLA Health, and Providence Saint John&apos;s — consistently top the pay scale, driven by high cost of living in their zip codes and fierce competition for experienced specialty nurses. Downtown and mid-city hospitals (LAC+USC, USC Keck) run roughly $5,000–$10,000 below the West LA premium but offer exceptional clinical complexity and academic prestige.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">LA RN Pay by Experience Tier</h2>
        <SalaryTable
          title="Los Angeles RN Pay by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly']}
          rows={experienceData}
          source="BLS OEWS May 2024 LA metro percentile data, projected 3–4% annually. Excludes differentials and bonuses."
        />
        <p>
          LA&apos;s union step schedules create predictable progression. At Cedars-Sinai, UCLA, or Kaiser, a nurse moving from new grad to 5 years of experience typically advances through 6–8 pay steps — each adding $1–$2/hr, creating compounding base growth on top of any negotiated annual increases. Use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model your step progression.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">LA Specialty Pay by Unit (2026 Estimates)</h2>
        <SalaryTable
          title="Los Angeles RN Specialty Pay (2026)"
          headers={['Specialty', 'Est. Annual Base', 'Est. Hourly']}
          rows={specialtyData}
          source="BLS OEWS May 2024 specialty classification data, LA metro, projected 3–4% annually."
        />
        <p>
          ICU and OR nurses command the highest specialty premiums. An LA ICU nurse with CCRN certification working night shifts at Cedars-Sinai or UCLA can realistically earn <strong>$75–$82/hr loaded</strong> — pushing annual compensation past $155,000. For the broader specialty ranking, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">Highest Paying Nursing Specialties</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials and Overtime in LA</h2>
        <p>Los Angeles hospitals typically publish these differentials on top of base:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Night shift (10 PM–6 AM):</strong> +$2–$5/hr or 10–15% of base</li>
          <li><strong>Weekend:</strong> +$2–$4/hr or 8–12% premium</li>
          <li><strong>Holiday:</strong> +$4–$8/hr or flat $75–$150/shift</li>
          <li><strong>Charge nurse:</strong> +$2–$4/hr supplemental</li>
          <li><strong>On-call:</strong> $4–$8/hr while available; 1.5× if called in</li>
        </ul>
        <p>California&apos;s daily overtime law (1.25× after 8 hrs/day; 1.5× after 12 hrs) means LA nurses picking up extra shifts earn overtime faster than in most states.</p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses: What LA Hospitals Are Offering</h2>
        <p>LA hospitals aggressively compete for specialty nurses, particularly post-pandemic:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>ICU / ER / OR specialty roles:</strong> $10,000–$18,000 sign-on</li>
          <li><strong>Med-surg floor:</strong> $5,000–$10,000</li>
          <li><strong>New grad residency spots:</strong> $2,000–$5,000 at select systems</li>
          <li><strong>Relocation (out-of-state):</strong> $3,000–$7,000</li>
          <li><strong>Travel nursing (13-week LA contracts):</strong> $2,800–$3,800/week all-in</li>
        </ul>
        <p>
          For negotiating sign-on bonuses, step placement, and PTO terms, see the <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">Nurse Salary Negotiation Scripts 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">LA vs. the Rest of California</h2>
        <p>
          LA metro sits below the SF Bay Area in mean pay but significantly above the rest of California. For the full statewide comparison, see <Link href="/california-rn-salary-2026/" className="text-primary hover:underline">California RN Salary 2026</Link>. For how California compares to other high-paying states, see <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">Highest Paying States for RNs 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Evaluate and Negotiate an LA Offer</h2>
        <p>LA hospital offers have more negotiable components than most nurses realize:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Step placement:</strong> At union hospitals, incoming experienced nurses can often negotiate one or two steps above the default placement — each step worth $1–$2/hr</li>
          <li><strong>Sign-on bonus and vesting term:</strong> Amount is often negotiable, and vesting period (12 vs 24 months) is nearly always open for discussion</li>
          <li><strong>Certification pay:</strong> Confirm CCRN, CEN, or CNOR differential is applied from day one</li>
          <li><strong>Relocation assistance:</strong> Out-of-state nurses should always request</li>
          <li><strong>PTO accrual rate:</strong> Some systems bump accrual for experienced new hires</li>
        </ul>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics OEWS, Los Angeles–Long Beach–Anaheim CA metro, May 2024; California Nurses Association wage publications; SEIU Local 121 and 1021 contract disclosures. Internal methodology: Metro mean wages projected with 3–4% annual wage-growth assumption through 2026. All figures are estimates; actual pay varies by employer, experience, shift, and contract terms. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
