import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import SalaryCalculator from '@/components/SalaryCalculator';

export const metadata: Metadata = {
  title: 'Pediatric Nurse Salary 2026: $78K–$112K Pay by State, Hospital & Specialty',
  description: 'Pediatric nurse salary 2026: $78K–$112K depending on state, certification, and unit. See PICU vs floor, sign-on bonuses, top children\'s hospitals & growth path.',
  alternates: { canonical: 'https://nursesalaryintel.com/pediatric-nurse-salary-2026' },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$66,400 – $74,800', hourlyRate: '$31.92 – $35.96/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$86,000 – $98,500', hourlyRate: '$41.35 – $47.36/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$98,500 – $118,200', hourlyRate: '$47.36 – $56.83/hr' },
  { label: 'Top 10% earners', avgSalary: '$124,800+', hourlyRate: '$60.00+/hr' },
];

const subspecialtyData = [
  { label: 'Pediatric Ambulatory / Clinic', avgSalary: '$74,500', hourlyRate: '$35.82/hr' },
  { label: 'Pediatric Floor (Med-Surg)', avgSalary: '$80,200', hourlyRate: '$38.56/hr' },
  { label: 'NICU-Pediatric', avgSalary: '$91,500', hourlyRate: '$43.99/hr' },
  { label: 'Pediatric ER', avgSalary: '$93,200', hourlyRate: '$44.81/hr' },
  { label: 'Pediatric Cardiac', avgSalary: '$95,800', hourlyRate: '$46.06/hr' },
  { label: 'Pediatric Oncology', avgSalary: '$98,200', hourlyRate: '$47.21/hr' },
  { label: 'PICU (Pediatric ICU)', avgSalary: '$104,250', hourlyRate: '$50.12/hr' },
  { label: 'Pediatric Trauma (Level 1)', avgSalary: '$108,400', hourlyRate: '$52.12/hr' },
];

const hospitalData = [
  { label: 'Boston Children\'s Hospital', avgSalary: '$95,200 – $124,800', hourlyRate: '#1 ranked nationally' },
  { label: 'Children\'s Hospital LA (CHLA)', avgSalary: '$103,500 – $138,200', hourlyRate: 'CA pay floor + peds premium' },
  { label: 'Children\'s Hospital Philadelphia', avgSalary: '$92,800 – $121,400', hourlyRate: 'Strong clinical ladder' },
  { label: 'Texas Children\'s Hospital', avgSalary: '$80,200 – $108,500', hourlyRate: 'Largest by bed count' },
  { label: 'Cincinnati Children\'s', avgSalary: '$83,400 – $106,800', hourlyRate: 'Tuition reimbursement to $10.5K' },
  { label: 'Seattle Children\'s', avgSalary: '$93,500 – $118,400', hourlyRate: 'Strong NICU + neuro' },
  { label: 'Children\'s National (DC)', avgSalary: '$86,200 – $108,500', hourlyRate: 'Federal market premium' },
  { label: 'St. Jude Children\'s Research', avgSalary: '$82,500 – $104,200', hourlyRate: 'Oncology specialty premium' },
];

const stateData = [
  { label: 'California', avgSalary: '$129,400', hourlyRate: 'Statewide ratio law' },
  { label: 'Hawaii', avgSalary: '$108,200', hourlyRate: 'Limited supply' },
  { label: 'Massachusetts', avgSalary: '$103,500', hourlyRate: 'Boston Children\'s anchor' },
  { label: 'Oregon', avgSalary: '$101,400', hourlyRate: 'Strong union presence' },
  { label: 'Washington', avgSalary: '$100,200', hourlyRate: 'Seattle Children\'s anchor' },
  { label: 'Alaska', avgSalary: '$99,800', hourlyRate: 'Geographic premium' },
  { label: 'New York', avgSalary: '$95,200', hourlyRate: 'NY-Presbyterian peds anchor' },
];

const certData = [
  { label: 'CPN (Certified Pediatric Nurse)', avgSalary: '+$2,500 – $5,000/yr', hourlyRate: 'All pediatric RNs' },
  { label: 'CCRN-Pediatric', avgSalary: '+$4,000 – $8,000/yr', hourlyRate: 'PICU, peds cardiac' },
  { label: 'RNC-NIC (Neonatal ICU)', avgSalary: '+$3,500 – $6,500/yr', hourlyRate: 'NICU, NICU-peds' },
  { label: 'CPEN (Pediatric Emergency)', avgSalary: '+$3,000 – $5,500/yr', hourlyRate: 'Pediatric ER' },
  { label: 'CPHON (Hematology/Oncology)', avgSalary: '+$3,500 – $6,000/yr', hourlyRate: 'Peds onc' },
];

const faqs = [
  {
    question: 'What is the average pediatric nurse salary in 2026?',
    answer: '$84,250/year ($40.50/hour) on average — slightly below the all-RN national average of $89,010. PICU nurses earn $96,500–$112,000+; pediatric ambulatory clinic nurses average $74,500. State and hospital are the biggest swing factors.',
  },
  {
    question: 'Do pediatric nurses make less than adult ICU nurses?',
    answer: 'On average, yes — pediatric average ($84,250) sits below adult ICU average ($94,800). But specialty-matched comparisons (PICU vs adult ICU, peds cardiac vs adult cardiac) are roughly equal at the senior level. Boston Children\'s and CHLA PICU senior RNs out-earn most adult ICU peers in the same metros.',
  },
  {
    question: 'Which children\'s hospital pays the most?',
    answer: 'Children\'s Hospital Los Angeles (CHLA) leads at $103,500–$138,200, driven by California\'s pay floor plus pediatric premium. Boston Children\'s ($95,200–$124,800) follows. CHOP ($92,800–$121,400) and Seattle Children\'s ($93,500–$118,400) round out the top tier.',
  },
  {
    question: 'What\'s the highest-paying pediatric subspecialty?',
    answer: 'PICU and pediatric trauma — both averaging $104,000–$108,000+. Pediatric cardiac and pediatric oncology follow at $95,000–$98,000. The lowest-paying pediatric subspecialty is ambulatory clinic at $74,500 average.',
  },
  {
    question: 'What certifications boost pediatric nursing pay?',
    answer: 'CCRN-Pediatric (+$4,000–$8,000/year for PICU); CPN — Certified Pediatric Nurse (+$2,500–$5,000); RNC-NIC for NICU-peds (+$3,500–$6,500); CPEN for pediatric ER (+$3,000–$5,500); CPHON for pediatric oncology (+$3,500–$6,000).',
  },
  {
    question: 'How much does a Pediatric Nurse Practitioner make?',
    answer: '$115,400–$158,400 in 2026 depending on subspecialty. Primary Care PNPs (PC-PNP) average $115K–$128K. Acute Care PNPs (AC-PNP) and pediatric specialty NPs (cardiac, oncology) average $128K–$158K. Pediatric Hospitalist NPs are the highest-paid at $142K–$162K.',
  },
  {
    question: 'Are pediatric nurses in demand?',
    answer: 'Yes. BLS projects pediatric RN demand growth of +6% through 2034, in line with all-RN growth. PICU, NICU-peds, and pediatric oncology have higher demand than general pediatric floor due to certification requirements and acuity. Travel pediatric demand is 30–40% above pre-pandemic baselines.',
  },
  {
    question: 'Can a pediatric nurse work travel assignments?',
    answer: 'Yes — pediatric travel nursing is one of the higher-rate specialties due to certification requirements. Travel rates: pediatric floor $1,950–$2,400/week, PICU $2,800–$3,500/week, pediatric cardiac $3,000–$3,800/week. Most agencies require 2 years\' acute pediatric experience.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Specialty Guides', item: 'https://nursesalaryintel.com/highest-paying-nursing-specialties/' },
    { '@type': 'ListItem', position: 3, name: 'Pediatric Nurse Salary 2026', item: 'https://nursesalaryintel.com/pediatric-nurse-salary-2026/' },
  ],
};

export default function PediatricNurseSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Specialty Guides', href: '/highest-paying-nursing-specialties/' },
          { label: 'Pediatric Nurse Salary 2026' },
        ]}
        h1="Pediatric Nurse Salary 2026: What Peds RNs Actually Earn — From Floor to PICU"
        lastUpdated="April 27, 2026"
        schemaTitle="Pediatric Nurse Salary 2026: $78K–$112K Pay by State, Hospital & Specialty"
        schemaDescription="Pediatric nurse salary 2026: $78K–$112K depending on state, certification, and unit. See PICU vs floor, sign-on bonuses, top children's hospitals & growth path."
        schemaUrl="/pediatric-nurse-salary-2026/"
        faqs={faqs}
      >
        <Image
          src="/images/pediatric-nurse-salary-2026-hero.png"
          alt="Pediatric nurse in colorful scrubs interacting with young patient illustrating 2026 children's hospital RN compensation"
          width={1200}
          height={630}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p>
          The average <strong>pediatric registered nurse earns $84,250 per year ($40.50/hour)</strong> in 2026 — slightly below the all-RN national average of $89,010. But that floor figure hides one of the widest specialty pay spreads in nursing: <strong>PICU and pediatric oncology nurses with CCRN-Pediatric certification earn $96,500–$112,000</strong>, while ambulatory pediatric clinics average closer to $74,500. Top-paying children&apos;s hospitals like Boston Children&apos;s, Children&apos;s Hospital LA, and CHOP add another 8–14% premium on top.
        </p>
        <p>
          Here&apos;s the complete pediatric nursing compensation picture — by subspecialty, by state, by hospital, and by certification.
        </p>

        <Image
          src="/images/pediatric-nurse-salary-2026-picu.png"
          alt="PICU nurse adjusting equipment in pediatric intensive care unit, illustrating high-acuity specialty pay"
          width={600}
          height={400}
          className="w-full rounded-lg my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pediatric Nurse Salary by Experience (2026)</h2>
        <SalaryTable
          title="Pediatric RN Pay by Experience Tier"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS RN data, May 2024 + SPN/PNCB workforce data, projected to 2026."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pediatric RN vs General RN Pay</h2>
        <p>Why does pediatrics pay less on average? Three structural reasons:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Higher proportion of ambulatory roles.</strong> About 18% of pediatric RNs work in clinics or schools versus 8% of general RNs — clinic pay is lower.</li>
          <li><strong>Lower specialty premium volume.</strong> Most adult RNs work in hospitals where ICU/ER/OR command large premiums. Pediatric specialty units exist but in lower numbers per facility.</li>
          <li><strong>Children&apos;s hospital concentration.</strong> The highest-paying pediatric jobs cluster in standalone children&apos;s hospitals (CHLA, CHOP, Boston Children&apos;s, Texas Children&apos;s), which exist in fewer cities than general hospitals.</li>
        </ol>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pediatric Subspecialty Pay</h2>
        <SalaryTable
          title="Pediatric Nursing Subspecialty Pay (2026)"
          headers={['Subspecialty', 'Avg Annual Salary', 'Hourly Rate']}
          rows={subspecialtyData}
          source="BLS OEWS + Society of Pediatric Nurses workforce reports + AACN compensation data, 2026."
        />
        <p>
          PICU is consistently the highest-paid pediatric subspecialty, driven by acuity, smaller patient ratios (typically 1:2), and the heavy certification requirement (CCRN-Pediatric is effectively mandatory at most academic children&apos;s hospitals).
        </p>

        <Image
          src="/images/pediatric-nurse-salary-2026-subspecialty-chart.png"
          alt="Horizontal bar chart ranking 2026 pediatric nursing subspecialties by salary: PICU, NICU-Peds, ER, Onc, Ambulatory"
          width={700}
          height={500}
          className="w-full rounded-lg my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Estimate Your Pediatric RN Salary</h2>
        <p>
          Use our calculator to model your projected salary by specialty, state, and experience level. Pediatric figures track the all-RN baseline; for specialty-specific premiums, layer the figures from the subspecialty table above.
        </p>
        <div className="bg-surface-container-lowest rounded-xl p-6 my-6 border border-outline-variant">
          <SalaryCalculator />
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Top 10 Highest-Paying Children&apos;s Hospitals (2026)</h2>
        <SalaryTable
          title="Top Children's Hospitals — RN Pay (2026)"
          headers={['Hospital', 'Base RN Range', 'Notable']}
          rows={hospitalData}
          source="Hospital career pages + Glassdoor/Levels.fyi verified reports (n>350), April 2026."
        />
        <p>
          <strong>Boston Children&apos;s Hospital</strong> is consistently ranked the #1 children&apos;s hospital in the U.S. by U.S. News, with PICU and cardiac ICU pay among the highest in pediatric nursing nationally. <strong>Children&apos;s Hospital Los Angeles (CHLA)</strong> leads on raw pay due to California&apos;s nation-leading RN wage floor plus pediatric specialty premium — sign-on bonuses for PICU, cardiac, and oncology run $15,000–$25,000 with 2-year commitment. The upper end of each hospital&apos;s base range typically requires CCRN-Pediatric or equivalent specialty certification, completed clinical ladder rungs, and 5+ years pediatric experience — entry-level offers commonly land in the lower 60% of each band.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pediatric Nurse Salary by State (Top 10)</h2>
        <SalaryTable
          title="Top States for Pediatric RN Salary (2026)"
          headers={['State', 'Avg Pediatric RN Salary', 'Notes']}
          rows={stateData}
          source="BLS OEWS state data + Society of Pediatric Nurses workforce surveys."
        />
        <p>
          Lowest pediatric RN salaries: Mississippi, Alabama, South Dakota, West Virginia (all &lt;$72,000 average).
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Certifications That Boost Pediatric Pay</h2>
        <SalaryTable
          title="Pediatric Nursing Certifications & Pay Premiums"
          headers={['Certification', 'Pay Premium', 'Valid For']}
          rows={certData}
          source="PNCB + AACN + NCC certification body workforce reports, 2026."
        />
        <p>
          Most major children&apos;s hospitals reimburse exam fees ($300–$465) and pay a one-time $500–$1,500 cert achievement bonus. The annual pay premium recurs as long as the cert remains valid (most renew every 3 years).
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pediatric Nurse Practitioner (PNP) Salary</h2>
        <p>For pediatric RNs targeting advanced practice, the PNP path offers significant earning growth.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Primary Care PNP (PC-PNP):</strong> $115,400 – $128,500</li>
          <li><strong>Acute Care PNP (AC-PNP):</strong> $128,500 – $145,200</li>
          <li><strong>Pediatric NP — Specialty (cardiac, onc):</strong> $135,800 – $158,400</li>
          <li><strong>Pediatric Hospitalist NP:</strong> $142,200 – $162,500</li>
        </ul>
        <p>
          Most PNP programs are MSN or DNP-level, 24–36 months full-time. See our <Link href="/nursing-salary/nurse-practitioner-salary/" className="text-primary hover:underline">Nurse Practitioner Salary Guide</Link> for the full advanced-practice landscape.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pediatric Travel Nursing Pay</h2>
        <p>Travel pediatric RNs commanded average gross weekly contracts of $2,650–$3,400 in 2024–2025. Projected 2026 contract ranges:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Pediatric Floor:</strong> $1,950 – $2,400/wk gross</li>
          <li><strong>Pediatric ER:</strong> $2,400 – $2,900/wk gross</li>
          <li><strong>NICU:</strong> $2,500 – $3,100/wk gross</li>
          <li><strong>PICU:</strong> $2,800 – $3,500/wk gross</li>
          <li><strong>Pediatric Cardiac:</strong> $3,000 – $3,800/wk gross</li>
        </ul>
        <p>
          Travel pay typically includes a non-taxable housing stipend ($1,200–$2,400/wk depending on metro), making the take-home value 30–45% higher than face-value gross. See our <Link href="/travel-nurse-salary-guide/" className="text-primary hover:underline">Travel Nurse Salary Guide</Link> for full breakdown.
        </p>

        <Image
          src="/images/pediatric-nurse-salary-2026-team.png"
          alt="Pediatric nursing team at children's hospital station representing career growth and specialty pathways"
          width={600}
          height={400}
          className="w-full rounded-lg my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Career Growth Path for Pediatric Nurses</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Year 1:</strong> New grad on pediatric med-surg, $66,400–$74,800. Most major children&apos;s hospitals require completion of a 12-month pediatric residency.</li>
          <li><strong>Year 2–3:</strong> Specialty unit transition (PICU, NICU-peds, peds ER, peds onc), $80,000–$93,500. Begin CPN or specialty certification.</li>
          <li><strong>Year 4–6:</strong> Charge nurse, preceptor, or specialty senior, $93,500–$108,500. CCRN-Peds completion. Many begin BSN-to-MSN/DNP for PNP track.</li>
          <li><strong>Year 7–10:</strong> Lead clinical, educator, or specialty director, $105,500–$124,800. PNP graduates earn $115,000–$158,000.</li>
          <li><strong>Year 10+:</strong> PNP director, peds CRNA ($215K+), pediatric NP-hospitalist, hospital nursing administration.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Maximize Your Pediatric Nursing Pay</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Target a freestanding children&apos;s hospital, not a general hospital with a peds unit.</strong> Children&apos;s hospitals pay 12–18% more for the same role.</li>
          <li><strong>Get CCRN-Pediatric within 3 years.</strong> It&apos;s the single highest-ROI pediatric cert, opening PICU bands and adding $4,000–$8,000/year.</li>
          <li><strong>Move to PICU or pediatric cardiac by year 4.</strong> These two units have the strongest pay growth and opens the path to peds NP-AC.</li>
          <li><strong>Negotiate sign-on + specialty differential together.</strong> Children&apos;s hospitals frequently bundle these — get a written breakdown of base / sign-on / specialty differential / shift differential before signing.</li>
          <li><strong>Consider pediatric travel after 2 years&apos; acute experience.</strong> Travel rates pay 25–60% above staff for the same specialty.</li>
        </ol>
        <p>
          For complementary specialty data, see <Link href="/nicu-nurse-salary-2026/" className="text-primary hover:underline">NICU Nurse Salary 2026</Link> and our <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">Highest-Paying Nursing Specialties</Link> guide.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics — OEWS, Registered Nurses (29-1141), May 2024; Society of Pediatric Nurses (SPN); Pediatric Nursing Certification Board (PNCB); American Association of Critical-Care Nurses (AACN) — CCRN-Pediatric; Boston Children&apos;s Hospital, Children&apos;s Hospital LA, CHOP, Texas Children&apos;s, Cincinnati Children&apos;s career and benefits pages (April 2026). <strong>Methodology:</strong> Salary figures projected to 2026 using BLS-published wage growth rates. Subspecialty figures aggregated from PNCB workforce data, AACN compensation reports, and verified Glassdoor/Levels.fyi reports (n &gt; 350). Hospital-specific ranges cross-reference each hospital&apos;s published career-page salary postings as of April 2026. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
