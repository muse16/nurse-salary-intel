import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NICU Nurse Salary 2026: Hourly Pay, State Breakdown & How to Earn More',
  description: 'NICU nurse salary 2026: $80,000–$115,000/year, $38–$55/hr. State-by-state pay breakdown, RNC-NIC certification impact, shift differentials, and top-paying hospitals.',
  alternates: { canonical: 'https://nursesalaryintel.com/nicu-nurse-salary-2026' },
};

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'National Certification Corporation (NCC) — RNC-NIC Exam', url: 'https://www.nccwebsite.org/certification/rnc-nic' },
  { title: 'AWHONN — Neonatal Nursing Resources', url: 'https://www.awhonn.org/' },
];
const methodology = 'Base salary figures derived from BLS OEWS May 2024 national and state-level RN data (29-1141), projected forward at 3–4% annual wage growth for 2026. NICU specialty premium of 10–15% applied based on NCC and AWHONN workforce survey data. Shift differential ranges from published hospital job postings and union contract disclosures. Figures are estimates; actual pay varies by employer, unit, experience, certification, shift, and contract terms.';

const experienceData = [
  { label: 'New Graduate / Entry (0–2 yrs)', avgSalary: '$68,000 – $82,000', hourlyRate: '$33 – $39/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: '$76,000 – $92,000', hourlyRate: '$37 – $44/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$85,000 – $105,000', hourlyRate: '$41 – $50/hr' },
  { label: 'Senior NICU RN (10+ yrs)', avgSalary: '$95,000 – $120,000', hourlyRate: '$46 – $58/hr' },
  { label: 'RNC-NIC Certified (any level)', avgSalary: '+$6,240 – $12,480/yr', hourlyRate: '+$3 – $6/hr premium' },
];

const stateData = [
  { label: 'California', avgSalary: '$115,000 – $135,000', hourlyRate: '$55 – $65/hr' },
  { label: 'Massachusetts', avgSalary: '$98,000 – $118,000', hourlyRate: '$47 – $57/hr' },
  { label: 'Washington', avgSalary: '$95,000 – $112,000', hourlyRate: '$46 – $54/hr' },
  { label: 'New York', avgSalary: '$92,000 – $110,000', hourlyRate: '$44 – $53/hr' },
  { label: 'Nevada', avgSalary: '$88,000 – $104,000', hourlyRate: '$42 – $50/hr' },
  { label: 'Arizona', avgSalary: '$80,000 – $96,000', hourlyRate: '$38 – $46/hr' },
  { label: 'Texas', avgSalary: '$78,000 – $94,000', hourlyRate: '$38 – $45/hr' },
  { label: 'Florida', avgSalary: '$75,000 – $92,000', hourlyRate: '$36 – $44/hr' },
];

const faqs = [
  {
    question: 'How much do NICU nurses make per hour?',
    answer: 'NICU nurses earn $38–$55/hr base in 2026. California NICU RNs average $55–$65/hr at major academic centers. Night shift differentials add $3–$6/hr on top of base.',
  },
  {
    question: 'Do NICU nurses make more than other nurses?',
    answer: 'NICU nurses typically earn 8–18% above general RN rates and comparable to ICU nurses. They earn significantly less than advanced practice nurses (NNPs, CRNAs) and more than med-surg or general floor nurses.',
  },
  {
    question: 'Is the RNC-NIC certification worth getting?',
    answer: 'Yes. The RNC-NIC pays +$3–$6/hr at most hospitals ($6,000–$12,000/year), exam fees are commonly covered by the employer, and it opens charge nurse and leadership roles that require certification.',
  },
  {
    question: 'What state pays NICU nurses the most?',
    answer: 'California — NICU RNs at major academic centers earn $115,000–$135,000/year. Massachusetts follows at $98,000–$118,000, driven by Boston Children\'s, Mass General, and Brigham and Women\'s NICU programs.',
  },
  {
    question: 'How do travel NICU nurse salaries compare to staff pay?',
    answer: 'Travel NICU assignments typically pay $2,000–$3,000/week total package (housing stipend + base), which can equal $100,000–$156,000 annualized. However, this is not steady income year-round and lacks benefits.',
  },
  {
    question: 'Can a new grad go straight into the NICU?',
    answer: 'At some hospitals with Graduate Nurse Residency programs, yes. Most NICU units prefer 1–2 years of general nursing experience first. New-grad NICU programs are more common at large children\'s hospitals like CHOP, Boston Children\'s, and Texas Children\'s.',
  },
  {
    question: 'What is the difference between a NICU nurse and a neonatal nurse?',
    answer: 'The terms are largely interchangeable for intensive care roles. "Neonatal nurse" is broader — it includes mother-baby units and well-baby nurseries. NICU nurses specifically work in intensive care for premature or critically ill newborns and earn more. See our neonatal nurse salary guide for the full comparison.',
  },
  {
    question: 'What is a Neonatal Nurse Practitioner (NNP) and how does it pay?',
    answer: 'NNPs are advanced practice RNs who manage critically ill neonates at the full scope of practice in Level III–IV NICUs. NNPs earn $115,000–$145,000/year — significantly above NICU RN base pay. The NNP requires an MSN or DNP with neonatal specialty focus.',
  },
  {
    question: 'What shift differentials do NICU nurses earn?',
    answer: 'Night shift: +$3–$6/hr; weekend: +$2.50–$5/hr; holiday: +$5–$10/hr. A full-time NICU RN working nights and every other weekend adds $8,000–$16,000/year in differentials to base salary.',
  },
  {
    question: 'Which hospitals are known for the best NICU nurse compensation?',
    answer: 'UCSF Medical Center, Boston Children\'s Hospital, Texas Children\'s Hospital, Seattle Children\'s, Lucile Packard Children\'s at Stanford, and Children\'s Hospital of Philadelphia (CHOP) consistently lead in NICU nurse compensation.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nursing Salary', item: 'https://nursesalaryintel.com/nursing-salary/' },
    { '@type': 'ListItem', position: 3, name: 'NICU Nurse Salary 2026', item: 'https://nursesalaryintel.com/nicu-nurse-salary-2026/' },
  ],
};

export default function NicuNurseSalary2026() {
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
          { label: 'NICU Nurse Salary 2026' },
        ]}
        h1="NICU Nurse Salary 2026: Hourly Pay, State Breakdown & How to Earn More"
        lastUpdated="May 4, 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="NICU Nurse Salary 2026: Hourly Pay, State Breakdown & How to Earn More"
        schemaDescription="NICU nurse salary 2026: $80,000–$115,000/year, $38–$55/hr. State-by-state breakdown, RNC-NIC certification impact, shift differentials, and top-paying hospitals."
        schemaUrl="/nicu-nurse-salary-2026/"
        faqs={faqs}
      >
        <p>
          NICU nurses earn <strong>$80,000–$115,000 per year</strong> in 2026, with hourly rates ranging from <strong>$38/hr to $55/hr</strong> depending on state, experience, and shift. California NICU RNs can clear $120,000+ at major academic centers. The <strong>RNC-NIC certification</strong> adds $3–$6/hr above base at most hospitals. This guide breaks down every major pay driver so you can benchmark your offer or negotiate with data.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">What Is a NICU Nurse?</h2>
        <p>
          A NICU (Neonatal Intensive Care Unit) nurse is a registered nurse who specializes in the care of critically ill or premature newborns. NICU RNs work in Level II, III, or IV NICUs — higher-level units care for the most complex patients. The role requires specialized training, critical assessment skills, and emotional resilience, and the pay reflects that complexity.
        </p>
        <p>
          The <strong>RNC-NIC</strong> (Registered Nurse Certified in Neonatal Intensive Care) from NCC is the primary specialty certification. See our <Link href="/neonatal-nurse-salary-2026/" className="text-primary hover:underline">neonatal nurse salary guide</Link> for a full comparison of all neonatal nursing roles and pay tiers.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">NICU Nurse Salary by Experience (2026)</h2>
        <SalaryTable
          title="NICU Nurse Salary by Experience Level (2026)"
          headers={['Experience Level', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS May 2024 (29-1141) projected 3–4% annually. RNC-NIC premium from NCC salary survey. Excludes shift differentials, OT, and bonuses."
        />

        <p>
          The national mean for all RNs in 2026 is approximately $89,010/year. NICU nurses typically earn <strong>8–18% above general RN pay</strong> — a premium driven by specialty skill complexity, high acuity, and the emotional demands of the role.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">NICU Nurse Salary by State (2026 Estimates)</h2>
        <SalaryTable
          title="NICU Nurse Salary by State (2026 Estimates)"
          headers={['State', 'Est. Annual Salary', 'Est. Hourly Rate']}
          rows={stateData}
          source="BLS OEWS state-level RN data projected forward with 10–15% NICU specialty premium overlay."
        />

        <h3 className="text-xl font-semibold text-on-surface mt-6">Why California NICU Nurses Earn So Much More</h3>
        <p>
          California&apos;s AB 394 mandates a 1:1 or 1:2 nurse-to-patient ratio in the NICU depending on acuity. This constraint tightens RN supply relative to demand, which structurally inflates wages. Add strong CNA/SEIU union contracts at UCSF, Cedars-Sinai, and Stanford, and NICU nurses at Bay Area academic centers routinely exceed $130,000 base salary with differentials.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">RNC-NIC Certification: The $6,000–$12,000 Pay Bump</h2>
        <p>The RNC-NIC pays +$3–$6/hr at most hospital systems. In addition:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>One-time $1,000–$3,000 passing bonus at many Magnet hospitals</li>
          <li>Most Magnet hospitals cover the ~$350 exam fee</li>
          <li>Required for Level IV NICU charge RN roles at most academic centers</li>
          <li>Eligibility: 2 years NICU experience, 2,000 specialty hours</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials: What NICU Night and Weekend Pay Adds</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Shift</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Typical Differential</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Annual Add (FT, 3×12)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { shift: 'Night (7p–7a)', diff: '+$3.00 – $6.00/hr', annual: '+$5,616 – $11,232/yr' },
                { shift: 'Weekend (Sat–Sun)', diff: '+$2.50 – $5.00/hr', annual: '+$2,600 – $5,200/yr' },
                { shift: 'Holiday', diff: '+$5.00 – $10.00/hr', annual: 'Varies' },
                { shift: 'Charge nurse premium', diff: '+$1.50 – $3.00/hr', annual: '+$2,808 – $5,616/yr' },
              ].map((row, i) => (
                <tr key={row.shift} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.shift}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.diff}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Top Hospitals for NICU Nurse Salaries</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>UCSF Medical Center</strong> (San Francisco, CA) — Strong CNA contract; Level IV NICU; Bay Area wages</li>
          <li><strong>Boston Children&apos;s Hospital</strong> (Boston, MA) — MNA-negotiated rates; Level IV NICU</li>
          <li><strong>Texas Children&apos;s Hospital</strong> (Houston, TX) — Largest children&apos;s hospital in the US; strong sign-on</li>
          <li><strong>Seattle Children&apos;s Hospital</strong> (Seattle, WA) — WSNA contract; Pacific Northwest wage floor</li>
          <li><strong>Lucile Packard Children&apos;s at Stanford</strong> (Palo Alto, CA) — Bay Area wages; CNA contract</li>
          <li><strong>Children&apos;s Hospital of Philadelphia (CHOP)</strong> — Academic center; NICU specialty premium</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses for NICU Nurses 2026</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Hospital Type</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Sign-On Range</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Typical Commitment</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Academic medical center (coastal)', bonus: '$10,000 – $25,000', commitment: '1–2 years' },
                { type: 'Academic medical center (inland/South)', bonus: '$5,000 – $15,000', commitment: '1–2 years' },
                { type: 'Community hospital with NICU', bonus: '$3,000 – $10,000', commitment: '1 year' },
                { type: 'Travel NICU assignment', bonus: '$2,000 – $5,000/contract', commitment: 'Contract-based' },
              ].map((row, i) => (
                <tr key={row.type} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.type}</td>
                  <td className="px-4 py-3 text-on-surface tabular-nums">{row.bonus}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{row.commitment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Always verify sign-on payback terms before signing. Run any offer through the <Link href="/audit" className="text-primary hover:underline">Contract Red Flag Audit</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">NICU Nurse Career Path & Salary Growth</h2>
        <div className="my-8 overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-container-high">
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Stage</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Title</th>
                <th className="px-4 py-3 text-left font-semibold text-on-surface">Salary Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stage: 'Year 1–2', title: 'Staff NICU RN', salary: '$68,000 – $82,000' },
                { stage: 'Year 3–5 + RNC-NIC', title: 'Certified NICU RN', salary: '$85,000 – $100,000' },
                { stage: 'Year 5+', title: 'Charge NICU RN', salary: '$90,000 – $108,000' },
                { stage: 'Year 5+ (NP track)', title: 'Neonatal NP (NNP)', salary: '$115,000 – $145,000' },
                { stage: 'Year 5+ (leadership)', title: 'NICU Manager', salary: '$95,000 – $120,000' },
              ].map((row, i) => (
                <tr key={row.stage} className={`border-t border-outline-variant ${i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}`}>
                  <td className="px-4 py-3 font-medium text-on-surface">{row.stage}</td>
                  <td className="px-4 py-3 text-on-surface">{row.title}</td>
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          For the full specialty nursing ladder, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">highest-paying nursing specialties 2026</Link>. For negotiation scripts, see <Link href="/nurse-salary-negotiation-scripts-2026/" className="text-primary hover:underline">nurse salary negotiation scripts</Link>.
        </p>
      </SEOPageLayout>
    </>
  );
}
