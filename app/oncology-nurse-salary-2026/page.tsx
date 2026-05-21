import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Oncology Nurse Salary 2026: What Cancer RNs Really Earn',
  description:
    'Oncology nurses earn $78,000–$98,000/yr in 2026. See onc RN pay by setting, state, and certification — including NCI cancer centers vs. community hospitals.',
  alternates: { canonical: 'https://nursesalaryintel.com/oncology-nurse-salary-2026' },
  openGraph: {
    title: 'Oncology Nurse Salary 2026: NCI Centers vs. Community Hospitals',
    description: 'Oncology RN salary by setting, state, and certification — with chemotherapy and infusion pay breakdown.',
    url: 'https://nursesalaryintel.com/oncology-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do oncology nurses make in 2026?',
    answer:
      'Oncology RNs earn an average of $82,000–$92,000/year ($39.42–$44.23/hr) nationally in 2026, based on latest available BLS OEWS data (May 2024). NCI-designated comprehensive cancer centers and large academic systems pay at the top of this range — often $90,000–$110,000 for experienced oncology nurses. Community hospital oncology units and outpatient infusion centers typically run $72,000–$85,000.',
  },
  {
    question: 'Do oncology nurses earn more than general med-surg nurses?',
    answer:
      'Yes, in most markets. Oncology nurses earn $8,000–$18,000/year more than general med-surg nurses at comparable experience levels, primarily because of the chemotherapy administration certification requirement (OCN or BMTCN), the complexity of oncology patient care, and the staffing shortage in cancer care. The premium is highest at NCI-designated centers and cancer-specialty hospitals.',
  },
  {
    question: 'What certification increases oncology nurse pay the most?',
    answer:
      'The OCN (Oncology Certified Nurse) credential from ONCC is the most widely recognized and compensated oncology nursing certification. Most hospitals offer a $1.00–$3.00/hr certification differential for OCN. The BMTCN (Blood and Marrow Transplant Certified Nurse) is more specialized and commands the highest premium — $2.00–$4.00/hr at transplant-capable centers. CRNI (Certified Registered Nurse Infusion) is valued specifically in outpatient infusion settings.',
  },
  {
    question: 'How does inpatient oncology pay compare to outpatient infusion?',
    answer:
      'Inpatient oncology typically pays $8,000–$15,000/year more than outpatient infusion nursing, reflecting the higher acuity, shift work requirements, and complexity of inpatient cancer care. Outpatient infusion centers offer consistent daytime schedules and lower physical demands, which many experienced oncology nurses accept as a deliberate trade-off. Home infusion nursing typically falls between the two on pay but adds travel compensation.',
  },
  {
    question: 'Which states pay oncology nurses the most?',
    answer:
      'California leads oncology nurse compensation nationally, with major cancer centers like UCSF, City of Hope, and Stanford paying $100,000–$120,000 for experienced onc RNs. Washington ($92,000–$108,000), New York ($90,000–$105,000), and Massachusetts ($88,000–$102,000) follow. States with major NCI cancer centers — Texas (MD Anderson), Florida (Moffitt), Pennsylvania (Penn Medicine) — often pay above their state average specifically for oncology nurses.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$64,000 – $76,000', hourlyRate: '$30.77 – $36.54/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$78,000 – $94,000', hourlyRate: '$37.50 – $45.19/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$90,000 – $110,000', hourlyRate: '$43.27 – $52.88/hr' },
  { label: 'OCN Certified', avgSalary: '$84,000 – $106,000', hourlyRate: '+$2,000–$6,000 cert differential' },
  { label: 'BMTCN Certified', avgSalary: '$92,000 – $116,000', hourlyRate: 'Transplant centers only' },
];

const settingData = [
  { label: 'NCI-designated cancer center', avgSalary: '$90,000 – $118,000', hourlyRate: 'Highest pay; complex protocol care' },
  { label: 'Inpatient academic oncology unit', avgSalary: '$82,000 – $100,000', hourlyRate: 'Chemo + shift diffs; OCN required' },
  { label: 'Community hospital oncology unit', avgSalary: '$74,000 – $90,000', hourlyRate: 'Standard market rates' },
  { label: 'Outpatient infusion center', avgSalary: '$70,000 – $86,000', hourlyRate: 'M–F schedule; lower acuity' },
  { label: 'Bone marrow transplant (BMT) unit', avgSalary: '$88,000 – $112,000', hourlyRate: 'BMTCN preferred; high complexity' },
  { label: 'Home infusion / oncology home care', avgSalary: '$72,000 – $88,000', hourlyRate: 'Travel pay added; flexible schedule' },
  { label: 'Clinical research / oncology trials', avgSalary: '$80,000 – $98,000', hourlyRate: 'Protocol coordination; weekday schedule' },
];

const centerData = [
  { label: 'MD Anderson (Houston, TX)', avgSalary: '$88,000 – $108,000', hourlyRate: 'NCI; largest cancer center in US' },
  { label: 'Moffitt Cancer Center (Tampa, FL)', avgSalary: '$80,000 – $98,000', hourlyRate: 'NCI; Florida market premium' },
  { label: 'UCSF Medical Center (CA)', avgSalary: '$105,000 – $120,000', hourlyRate: 'NCI; CNA union; CA rates' },
  { label: 'Memorial Sloan Kettering (NY)', avgSalary: '$96,000 – $114,000', hourlyRate: 'NCI; NYC premium; NYSNA' },
  { label: 'Dana-Farber / Brigham (Boston, MA)', avgSalary: '$90,000 – $108,000', hourlyRate: 'NCI affiliate; MNA union' },
  { label: 'Penn Medicine (Philadelphia, PA)', avgSalary: '$86,000 – $104,000', hourlyRate: 'NCI; strong benefits package' },
];

export default function OncologyNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Specialties', href: '/highest-paying-nursing-specialties' },
        { label: 'Oncology Nurse Salary 2026' },
      ]}
      h1="Oncology Nurse Salary 2026: What Cancer RNs Really Earn"
      lastUpdated="May 2026"
      schemaTitle="Oncology Nurse Salary 2026"
      schemaDescription="Oncology RN salary by setting, state, certification, and cancer center in 2026."
      schemaUrl="/oncology-nurse-salary-2026"
      datePublished="2026-05-19"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Oncology RNs earn <strong>$82,000–$92,000/year ($39.42–$44.23/hr)</strong> on average nationally in 2026.
          NCI-designated cancer centers pay <strong>$90,000–$118,000</strong> for experienced oncology nurses.
          OCN certification adds a <strong>$2,000–$6,000/year differential</strong> at most systems; BMTCN commands
          the highest premium at transplant-capable centers. Oncology nurses earn{' '}
          <strong>$8,000–$18,000/year more</strong> than comparable med-surg RNs.
        </p>
      </div>

      <Image
        src="/images/oncology-nurse-salary-2026-hero.webp"
        alt="Oncology nurse in scrubs reviewing a patient's chart in a modern cancer center infusion unit — professional clinical setting with natural light"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Oncology nursing sits at the intersection of high clinical complexity, strong patient relationships, and
        meaningful pay premiums over general nursing. The specialty requires chemotherapy administration certification,
        comfort with complex protocols, and the emotional stamina to care for patients through long-term cancer
        treatment. In return, most health systems — and virtually all major cancer centers — pay oncology nurses
        a documented premium over general med-surg rates. For nurses considering a specialty move, oncology offers
        both a compensation step-up and a career path with deep clinical subspecialties.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Oncology Nurse Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Oncology RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Oncology Nurse Salary by Practice Setting (2026)</h2>

      <Image
        src="/images/oncology-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 oncology nurse salaries by setting — NCI cancer center, inpatient academic, community hospital, outpatient infusion, and BMT unit versus national RN average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Oncology Nurse Salary by Practice Setting"
        headers={['Setting', 'Annual Salary Range', 'Notes']}
        rows={settingData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NCI Cancer Centers: What Major Institutions Pay (2026)</h2>

      <Image
        src="/images/oncology-nurse-salary-2026-hospital.webp"
        alt="Two oncology nurses in scrubs preparing chemotherapy medication in a modern cancer center pharmacy prep room"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Oncology RN Salary at Major Cancer Centers"
        headers={['Cancer Center', 'RN Salary Range', 'Notes']}
        rows={centerData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">OCN vs. BMTCN: Which Certification Pays More?</h2>
      <p>
        The OCN (Oncology Certified Nurse) is the entry credential for most oncology nursing roles and is recognized
        at virtually every system that employs oncology nurses. It requires 1 year of RN experience, 1,000 hours
        of oncology nursing practice, and passing the ONCC exam ($275 for ONCC members). The pay differential is
        consistent: most systems offer $1.00–$3.00/hr, translating to $1,872–$5,616/year at 36 hours/week.
      </p>
      <p>
        The BMTCN (Blood and Marrow Transplant Certified Nurse) is more specialized and available only to nurses
        working in BMT settings. The certification premium is higher — $2.00–$4.00/hr at most transplant-capable
        centers — because the candidate pool is smaller and the clinical demands are greater. If you work in a
        BMT unit and are not yet BMTCN-certified, this is the single highest-ROI certification investment in
        oncology nursing.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Inpatient vs. Outpatient Oncology: The Pay and Schedule Trade-Off</h2>
      <p>
        Inpatient oncology nurses typically earn $8,000–$15,000/year more than their outpatient infusion counterparts.
        The gap reflects shift work requirements (nights, weekends, holidays), higher acuity, and the complexity of
        managing patients through active treatment in a hospital setting. Inpatient nurses also qualify for night
        and weekend shift differentials that outpatient nurses don&apos;t typically access.
      </p>
      <p>
        Outpatient infusion nursing offers a schedule that many experienced oncology nurses deliberately choose:
        Monday–Friday hours, no nights or weekends, and patient relationships that extend over months or years of
        treatment. Some outpatient nurses supplement base pay through per-diem shifts at inpatient centers.
        The financial and lifestyle math is worth modeling explicitly before choosing a setting.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/highest-paying-nursing-specialties', label: 'Highest-Paying Nursing Specialties 2026', desc: 'Full specialty salary ranking' },
          { href: '/psychiatric-nurse-salary-2026', label: 'Psychiatric Nurse Salary 2026', desc: 'Psych vs. oncology pay compared' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay breakdown' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to negotiate your oncology offer' },
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
      <MethodologyBox />
    </SEOPageLayout>
  );
}
