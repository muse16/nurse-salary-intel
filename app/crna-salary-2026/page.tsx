import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'CRNA Salary 2026: $214,000/yr National Average + Top States & Settings',
  description: 'CRNA salary 2026: $214,000/yr national average ($102.88/hr). See pay by state, practice setting, DNAP vs. MSN, and whether CRNA school is worth the investment.',
  alternates: { canonical: 'https://nursesalaryintel.com/crna-salary-2026' },
};

const stateData = [
  { label: 'Wyoming', avgSalary: '$278,400', hourlyRate: '$133.85/hr' },
  { label: 'Montana', avgSalary: '$271,600', hourlyRate: '$130.58/hr' },
  { label: 'Oregon', avgSalary: '$268,200', hourlyRate: '$128.94/hr' },
  { label: 'California', avgSalary: '$262,800', hourlyRate: '$126.35/hr' },
  { label: 'Alaska', avgSalary: '$258,400', hourlyRate: '$124.23/hr' },
  { label: 'National Average', avgSalary: '$214,000', hourlyRate: '$102.88/hr' },
  { label: 'Texas', avgSalary: '$204,600', hourlyRate: '$98.37/hr' },
  { label: 'Florida', avgSalary: '$196,800', hourlyRate: '$94.62/hr' },
];

const settingData = [
  { label: 'Independent Practice (rural/critical access)', avgSalary: '$248,000 – $295,000', hourlyRate: 'Highest earning tier' },
  { label: 'Anesthesiology Group (private)', avgSalary: '$228,000 – $268,000', hourlyRate: 'Partnership track' },
  { label: 'Hospital Employed', avgSalary: '$198,000 – $234,000', hourlyRate: 'Benefits + stability' },
  { label: 'Outpatient / ASC', avgSalary: '$186,000 – $218,000', hourlyRate: 'M–F schedule' },
  { label: 'Academic Medical Center', avgSalary: '$178,000 – $214,000', hourlyRate: 'Teaching premium offset' },
  { label: 'VA / Federal', avgSalary: '$172,000 – $206,000', hourlyRate: 'PSLF eligible' },
];

const roiData = [
  { label: 'CRNA school cost (avg)', avgSalary: '$60,000 – $120,000', hourlyRate: '2.5–3 years lost income' },
  { label: 'RN salary (forgone, 3 yrs)', avgSalary: '~$267,000', hourlyRate: 'Opportunity cost' },
  { label: 'CRNA premium over RN (annual)', avgSalary: '$125,000 – $145,000', hourlyRate: 'Salary gap' },
  { label: 'Break-even point', avgSalary: '~3.5–4.5 years', hourlyRate: 'Post-graduation' },
  { label: '10-year net gain over RN', avgSalary: '$900,000 – $1.1M', hourlyRate: 'Compounding advantage' },
];

const faqs = [
  { question: 'What is the average CRNA salary in 2026?', answer: 'The average CRNA (Certified Registered Nurse Anesthetist) salary is $214,000/year ($102.88/hour) nationally in 2026, per BLS OEWS data. CRNAs are consistently the highest-paid advanced practice nurses, outearning NPs and CNMs in virtually every state.' },
  { question: 'Which states pay CRNAs the most?', answer: 'Wyoming ($278,400), Montana ($271,600), and Oregon ($268,200) top the CRNA salary ranking. Rural and frontier states pay the most because CRNAs often practice independently (without physician supervision) in areas with no anesthesiologist coverage.' },
  { question: 'Is becoming a CRNA worth it financially?', answer: 'Yes — if you stay in the profession 10+ years. The average CRNA earns $125,000–$145,000 more per year than a staff RN. After accounting for 3 years of school and forgone income, the break-even is typically 3.5–4.5 years post-graduation. Over a 20-year career, the net gain over staying an RN exceeds $2M.' },
  { question: 'DNAP vs. MSN CRNA — does the degree affect salary?', answer: 'Minimally in most markets. The 2025 CRNA education mandate required entry-level doctoral degrees, but employed CRNAs with MSN credentials are not required to upgrade. The DNAP designation does not consistently yield higher pay in hospital employment. Independent practice settings may favor it for credentialing purposes.' },
  { question: 'How competitive is CRNA school admission?', answer: 'Very competitive. Most programs require: BSN, active RN license, 1–3 years of ICU experience (critical care preferred), GPA 3.0+, GRE scores, and shadowing/clinical hours. ICU specialty (CCRN certification) significantly strengthens applications.' },
  { question: 'Can a CRNA earn $300K+?', answer: 'Yes — in independent practice in rural/frontier states, or locum tenens work. Locum CRNA rates run $180–$240/hr in underserved markets. Annual earnings of $350,000+ are achievable for CRNAs doing locum work 40+ weeks/year in high-demand states.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'CRNA Salary 2026', item: 'https://nursesalaryintel.com/crna-salary-2026/' },
  ],
};

export default function CRNASalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'CRNA Salary 2026' }]}
        h1="CRNA Salary 2026: $214,000 National Average — Is Nurse Anesthesia School Worth It?"
        lastUpdated="April 2026"
        schemaTitle="CRNA Salary 2026: $214,000/yr National Average + Top States & Settings"
        schemaDescription="CRNA salary 2026: $214,000/yr average ($102.88/hr). Pay by state, practice setting, DNAP vs. MSN, and the full financial ROI of CRNA school."
        schemaUrl="/crna-salary-2026/"
        faqs={faqs}
      >
        <p>
          Certified Registered Nurse Anesthetists (CRNAs) are the <strong>highest-paid nursing professionals in the
          United States</strong>, earning a national average of <strong>$214,000/year ($102.88/hour)</strong> in 2026.
          In rural independent practice and locum tenens work, total annual earnings routinely exceed $300,000.
          Here&apos;s the complete picture — by state, by practice setting, and the honest financial math on
          whether 3 years of CRNA school is worth the investment.
        </p>

        <Image
          src="/images/crna-salary-2026-operating-room.png"
          alt="CRNA nurse anesthetist in surgical cap and mask preparing anesthesia equipment in modern operating room"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">CRNA Salary by State (2026) — Top and Bottom</h2>
        <p>
          State-level variation is dramatic. Wyoming CRNAs earn $278,400 average — $64,400 more than the national
          mean — because rural hospitals rely entirely on independent CRNA practice with no physician anesthesiologist
          supervision. States with the lowest pay tend to have high physician supervision requirements and urban
          concentration.
        </p>

        <SalaryTable
          title="CRNA Salary by State — Top 5 + Key States (2026)"
          headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
          rows={stateData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 projections"
        />

        <p>
          See the full 50-state breakdown on the{' '}
          <Link href="/nursing-salary/crna-salary-by-state" className="text-primary hover:underline font-semibold">
            CRNA salary by state guide →
          </Link>
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">CRNA Salary by Practice Setting</h2>
        <p>
          Where you work matters as much as where you live. Independent rural practice pays the most —
          but hospital employment offers stability, benefits, and no business overhead.
        </p>

        <SalaryTable
          title="CRNA Salary by Practice Setting (2026)"
          headers={['Practice Setting', 'Total Compensation Range', 'Notes']}
          rows={settingData}
          source="NurseSalaryIntel survey data + AANA compensation reports, 2026"
        />

        <Image
          src="/images/crna-salary-2026-comparison.png"
          alt="Bar chart comparing CRNA average salary across practice settings: independent practice, private group, hospital employed, outpatient, and academic"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Is CRNA School Worth It? The Full ROI Math</h2>
        <p>
          CRNA school takes 2.5–3 years, costs $60,000–$120,000 in tuition, and means forgoing 3 years of RN
          income (~$267,000). Here&apos;s what the numbers actually look like:
        </p>

        <SalaryTable
          title="CRNA vs. RN: Financial ROI Analysis"
          headers={['Factor', 'Amount', 'Notes']}
          rows={roiData}
          source="NurseSalaryIntel analysis, 2026"
        />

        <p>
          <strong>Bottom line:</strong> If you practice as a CRNA for 10+ years, the financial return is
          exceptional — typically $900,000 to $1.1M in net additional earnings over a staff RN career, after
          accounting for education costs and forgone income. The investment pays off faster in high-paying
          states like Wyoming, Montana, and Oregon.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">CRNA School Requirements (2026)</h2>
        <ul>
          <li><strong>Education:</strong> BSN required; most programs now require DNP or DNAP (doctoral degree)</li>
          <li><strong>Experience:</strong> 1–3 years acute care ICU (CVICU, SICU, MICU preferred)</li>
          <li><strong>Certification:</strong> CCRN certification strongly recommended</li>
          <li><strong>GPA:</strong> Minimum 3.0, competitive programs average 3.5+</li>
          <li><strong>Shadowing:</strong> Most programs require documented CRNA shadowing hours</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/nursing-salary/crna-salary-by-state', label: 'CRNA Salary — All 50 States', desc: 'Full state-by-state breakdown' },
            { href: '/nursing-salary/nurse-practitioner-salary', label: 'Nurse Practitioner Salary 2026', desc: 'NP vs. CRNA pay comparison' },
            { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary', desc: 'CRNA prerequisite path' },
            { href: '/highest-paying-nursing-specialties', label: 'Highest Paying Nursing Specialties', desc: 'Full specialty ranking' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
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
          <li><a href="https://www.bls.gov/oes/current/oes291151.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Nurse Anesthetists (SOC 29-1151)</a></li>
          <li><a href="https://www.aana.com/" target="_blank" rel="noopener noreferrer">American Association of Nurse Anesthesiology (AANA) — Compensation & Benefits Report</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
