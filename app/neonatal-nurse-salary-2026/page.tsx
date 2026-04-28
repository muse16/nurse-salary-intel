import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Neonatal Nurse Salary 2026: What Newborn Care Nurses Actually Earn',
  description: 'Neonatal nurse salary 2026: $68,000–$115,000/year depending on unit level, state, and certification. NICU vs. mother-baby pay comparison, RNC-NIC impact, and top-paying hospitals.',
  alternates: { canonical: 'https://nursesalaryintel.com/neonatal-nurse-salary-2026' },
};

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'National Certification Corporation (NCC) — Neonatal Certifications', url: 'https://www.nccwebsite.org/' },
  { title: 'AWHONN — Neonatal Nursing Resources', url: 'https://www.awhonn.org/' },
];
const methodology = 'Salary figures derived from BLS OEWS May 2024 state-level and national RN data (29-1141), projected forward at 3–4% annual wage growth for 2026. Unit-level pay tiers reflect reported specialty differentials from NCC neonatal workforce survey data and AWHONN published resources. All figures are estimates; actual pay varies by employer, unit level, state, experience, certification, shift schedule, and contract terms.';

const motherBabyData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: '$60,000 – $74,000', hourlyRate: '$29 – $36/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$68,000 – $82,000', hourlyRate: '$33 – $39/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$75,000 – $90,000', hourlyRate: '$36 – $43/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$82,000 – $98,000', hourlyRate: '$39 – $47/hr' },
];

const nicuData = [
  { label: 'Entry (1–3 yrs)', avgSalary: '$76,000 – $92,000', hourlyRate: '$37 – $44/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$88,000 – $108,000', hourlyRate: '$42 – $52/hr' },
  { label: 'Senior + RNC-NIC (10+ yrs)', avgSalary: '$100,000 – $125,000', hourlyRate: '$48 – $60/hr' },
];

const stateData = [
  { label: 'California — Mother-Baby RN', avgSalary: '$88,000 – $108,000', hourlyRate: '$42 – $52/hr' },
  { label: 'California — NICU RN (Level III–IV)', avgSalary: '$115,000 – $135,000', hourlyRate: '$55 – $65/hr' },
  { label: 'Massachusetts — Mother-Baby RN', avgSalary: '$80,000 – $96,000', hourlyRate: '$38 – $46/hr' },
  { label: 'Massachusetts — NICU RN', avgSalary: '$98,000 – $118,000', hourlyRate: '$47 – $57/hr' },
  { label: 'Texas — Mother-Baby RN', avgSalary: '$63,000 – $76,000', hourlyRate: '$30 – $37/hr' },
  { label: 'Texas — NICU RN', avgSalary: '$78,000 – $94,000', hourlyRate: '$38 – $45/hr' },
  { label: 'Florida — Mother-Baby RN', avgSalary: '$61,000 – $74,000', hourlyRate: '$29 – $36/hr' },
  { label: 'Florida — NICU RN', avgSalary: '$75,000 – $92,000', hourlyRate: '$36 – $44/hr' },
];

const faqs = [
  {
    question: 'How much do neonatal nurses make per hour?',
    answer: 'Neonatal nurses earn $29–$60/hr in 2026 — the range spans mother-baby nurses at the low end through Level IV NICU RNs at the high end. NICU RNs with experience and RNC-NIC certification earn $42–$60/hr in high-paying states.',
  },
  {
    question: 'Do neonatal nurses make more than regular nurses?',
    answer: 'NICU-level neonatal nurses earn 8–18% above general RN rates. Mother-baby nurses earn roughly comparable to med-surg — the specialty pay premium only kicks in at the NICU-intensive level.',
  },
  {
    question: "What's the difference between a neonatal nurse and a NICU nurse?",
    answer: 'NICU nursing is a subset of neonatal nursing. All NICU nurses are neonatal nurses, but not all neonatal nurses work in the NICU. Mother-baby and well-baby nursery nurses care for healthy newborns; NICU nurses care for the critically ill. Pay is significantly higher in the NICU.',
  },
  {
    question: 'What state pays neonatal nurses the most?',
    answer: 'California — NICU nurses at major California academic centers earn $115,000–$135,000/year. Massachusetts and Washington follow at $95,000–$118,000.',
  },
  {
    question: 'Is the RNC-NIC worth getting for neonatal nurses?',
    answer: 'Yes. The RNC-NIC pays +$3–$6/hr at most hospitals ($6,000–$12,000/year), exam fees are commonly covered, and it opens charge RN and leadership roles. Eligible after 2 years NICU experience with 2,000 specialty hours.',
  },
  {
    question: 'How do I become a neonatal nurse?',
    answer: 'Complete your BSN or ADN, pass the NCLEX, and apply for a neonatal unit position. New-grad programs at large children\'s hospitals accept direct-entry NICU applicants. Most hospitals prefer 1–2 years of general nursing experience before transferring to NICU. Pursue RNC-NIC after 2 years.',
  },
  {
    question: 'Can travel nurses work in neonatal units?',
    answer: 'Yes. Travel NICU is one of the most in-demand assignments. Most agencies require at least 1 year of NICU experience at the level assigned. Travel NICU pays $2,000–$3,200/week in total package.',
  },
  {
    question: 'What is a Neonatal Nurse Practitioner (NNP) and how does it pay?',
    answer: 'NNPs are advanced practice RNs who manage critically ill neonates at the full scope of practice in Level III–IV NICUs. NNPs earn $115,000–$145,000/year, significantly above NICU RN base pay.',
  },
  {
    question: 'Is neonatal nursing stressful?',
    answer: 'Yes. NICU nursing is consistently rated among the most emotionally intense nursing specialties. Caring for critically ill or dying neonates carries significant psychological weight. Most NICU RNs cite this as both the hardest and most meaningful aspect of the role.',
  },
  {
    question: 'What shift differentials do neonatal nurses earn?',
    answer: 'Night: +$3–$7/hr; weekend: +$2.50–$5/hr; holiday: +$5–$10/hr. A neonatal nurse working nights and every other weekend adds $8,000–$18,000/year to base salary.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nursing Salary', item: 'https://nursesalaryintel.com/nursing-salary/' },
    { '@type': 'ListItem', position: 3, name: 'Neonatal Nurse Salary 2026', item: 'https://nursesalaryintel.com/neonatal-nurse-salary-2026/' },
  ],
};

export default function NeonatalNurseSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Nursing Salary', href: '/nursing-salary/' },
          { label: 'Neonatal Nurse Salary 2026' },
        ]}
        h1="Neonatal Nurse Salary 2026: What Newborn Care Nurses Actually Earn"
        lastUpdated="May 6, 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Neonatal Nurse Salary 2026: What Newborn Care Nurses Actually Earn"
        schemaDescription="Neonatal nurse salary 2026: $68,000–$115,000/year depending on unit level, state, and certification. NICU vs. mother-baby pay comparison, RNC-NIC impact, and top hospitals."
        schemaUrl="/neonatal-nurse-salary-2026/"
        faqs={faqs}
      >
        <p>
          &quot;Neonatal nurse salary&quot; searches span a wide range of roles — from mother-baby floor nurses to Level IV NICU critical care specialists. A mother-baby nurse earns <strong>$68,000–$82,000</strong>. A Level IV NICU RN with RNC-NIC certification in California earns <strong>$115,000–$135,000</strong>. This guide maps every neonatal nursing role to its actual 2026 pay, by state and unit type.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">What Is a Neonatal Nurse?</h2>
        <p>&quot;Neonatal nurse&quot; covers nurses who care for newborns at any unit level. Pay varies dramatically by unit type:</p>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Unit Type</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Patients</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Ratio</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Pay Tier</th>
              </tr>
            </thead>
            <tbody>
              {[
                { unit: 'Mother-Baby / Postpartum', patients: 'Healthy term newborns + mothers', ratio: '1:4–6', tier: 'Lower' },
                { unit: 'Level II NICU (Special Care)', patients: 'Moderately premature, stable', ratio: '1:3–4', tier: 'Mid' },
                { unit: 'Level III NICU', patients: 'Premature or complex medical', ratio: '1:2–3', tier: 'High' },
                { unit: 'Level IV NICU', patients: 'Most critical — surgical, extreme prematurity', ratio: '1:1–2', tier: 'Highest' },
              ].map((row, i) => (
                <tr key={row.unit} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.unit}</td>
                  <td className="px-4 py-3 text-on-surface text-xs">{row.patients}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.ratio}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{row.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Mother-Baby / Postpartum RN Salary (2026)</h2>
        <SalaryTable
          title="Mother-Baby / Postpartum RN Salary by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={motherBabyData}
          source="BLS OEWS May 2024 national data projected 3–4% annually. Mother-baby premium is minimal vs. general RN."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Level III–IV NICU RN Salary (2026)</h2>
        <SalaryTable
          title="Level III–IV NICU RN Salary by Experience (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={nicuData}
          source="BLS OEWS state-level RN data with 10–15% NICU specialty premium overlay from NCC workforce data."
        />
        <p>
          For the full NICU-specific breakdown with hospital-by-hospital data and shift differential math, see <Link href="/nicu-nurse-salary-2026/" className="text-primary hover:underline">NICU nurse salary 2026</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Neonatal Nurse Salary by State (2026)</h2>
        <SalaryTable
          title="Neonatal Nurse Salary by State and Unit Type (2026)"
          headers={['State / Unit', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={stateData}
          source="State is the single biggest variable — California pays $20,000–$50,000 more annually than lower-tier states. BLS OEWS May 2024 projected forward."
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">RNC-NIC Certification: The Neonatal Pay Multiplier</h2>
        <p>The <strong>RNC-NIC</strong> from NCC is the primary specialty certification for neonatal intensive care nursing:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>+$3 – $6/hr premium</strong> at most hospitals ($6,000–$12,480/year)</li>
          <li>One-time $1,000–$3,000 passing bonus at many Magnet facilities</li>
          <li>Most employers reimburse the ~$350 exam fee</li>
          <li>Eligibility: 2 years NICU experience, 2,000 specialty hours</li>
          <li>Required for Level IV NICU charge RN roles at most academic centers</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Neonatal Nursing Career Path</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Stage</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Role</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Salary Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stage: 'Year 1–2', role: 'Mother-baby or Level II RN', salary: '$60,000 – $82,000' },
                { stage: 'Year 2–5', role: 'NICU Level III RN', salary: '$76,000 – $95,000' },
                { stage: 'Year 3–5 + RNC-NIC', role: 'Certified NICU RN', salary: '$85,000 – $105,000' },
                { stage: 'Year 5+', role: 'Charge NICU RN', salary: '$90,000 – $110,000' },
                { stage: 'Year 5+ (NP track)', role: 'Neonatal NP (NNP)', salary: '$115,000 – $145,000' },
              ].map((row, i) => (
                <tr key={row.stage} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.stage}</td>
                  <td className="px-4 py-3 text-on-surface">{row.role}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          For the full specialty salary ladder, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">highest-paying nursing specialties 2026</Link>. For NP path details, see <Link href="/nursing-salary/how-to-become-nurse-practitioner" className="text-primary hover:underline">how to become a nurse practitioner</Link>.
        </p>
      </SEOPageLayout>
    </>
  );
}
