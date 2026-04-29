import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'ICU vs ER Nurse Salary 2026: Which Pays More?',
  description: 'ICU nurses average $95,200/yr vs ER nurses at $92,800/yr in 2026. Full salary comparison: hourly rates, shift differentials, sign-on bonuses, and which specialty wins long-term.',
  alternates: { canonical: 'https://nursesalaryintel.com/icu-vs-er-nurse-salary-2026' },
};

const comparisonData = [
  { label: 'National Avg Salary', avgSalary: 'ICU: $95,200/yr', hourlyRate: 'ER: $92,800/yr' },
  { label: 'Avg Hourly Rate', avgSalary: 'ICU: $45.77/hr', hourlyRate: 'ER: $44.61/hr' },
  { label: 'Entry (0–2 yrs)', avgSalary: 'ICU: $78,400–$88,600', hourlyRate: 'ER: $74,800–$85,200' },
  { label: 'Mid (3–7 yrs)', avgSalary: 'ICU: $92,000–$108,000', hourlyRate: 'ER: $88,000–$104,000' },
  { label: 'Senior (8+ yrs)', avgSalary: 'ICU: $108,000–$128,000', hourlyRate: 'ER: $104,000–$122,000' },
  { label: 'Top State (CA)', avgSalary: 'ICU: $124,400', hourlyRate: 'ER: $120,800' },
  { label: 'Night Differential', avgSalary: 'ICU: +$12K–$20K/yr', hourlyRate: 'ER: +$12K–$18K/yr' },
  { label: 'Cert Premium (avg)', avgSalary: 'CCRN: +$5,200/yr', hourlyRate: 'CEN: +$4,400/yr' },
];

const signOnData = [
  { label: 'Entry-Level ICU', avgSalary: '$8,000–$15,000', hourlyRate: '18–24 month commitment' },
  { label: 'Experienced ICU (3+ yrs)', avgSalary: '$15,000–$25,000', hourlyRate: '2-year commitment typical' },
  { label: 'CVICU / SICU / Trauma ICU', avgSalary: '$18,000–$30,000', hourlyRate: 'Highest demand specialty' },
  { label: 'Entry-Level ER', avgSalary: '$6,000–$12,000', hourlyRate: '12–18 month commitment' },
  { label: 'Experienced ER (3+ yrs)', avgSalary: '$12,000–$20,000', hourlyRate: '2-year commitment typical' },
  { label: 'Level 1 Trauma ER', avgSalary: '$15,000–$22,000', hourlyRate: 'Trauma cert adds premium' },
];

const faqs = [
  { question: 'Do ICU nurses make more than ER nurses?', answer: 'Yes, by a small margin. ICU nurses average $95,200/year nationally vs. ER nurses at $92,800 — a $2,400 gap. The difference widens in senior roles: experienced ICU nurses (8+ years) with CCRN certification average $108,000–$128,000 vs. experienced ER nurses at $104,000–$122,000.' },
  { question: 'What certifications increase pay most for ICU vs ER nurses?', answer: 'CCRN (Critical Care RN) adds $4,000–$7,000/year for ICU nurses and is the most widely recognized critical care credential. CEN (Certified Emergency Nurse) adds $3,500–$5,500/year for ER nurses. CCRN typically adds slightly more because it is required for charge and lead roles at more ICUs.' },
  { question: 'Is ICU or ER nursing better for career advancement?', answer: 'ICU nursing offers more defined advancement paths: charge nurse → clinical educator → CRNA (the single highest-paid nursing credential). ER nursing provides faster pace and broader clinical exposure, often leading to flight nursing, trauma coordination, or nurse practitioner (ENP) roles. Both are strong foundations for APRN programs.' },
  { question: 'Which specialty is harder to get hired into — ICU or ER?', answer: 'ICU residency programs are generally more competitive for new grads and often require strong science GPA and clinical experience. ER new grad programs are available but selective. Most ER nurses start in med-surg or telemetry and laterally transfer after 1–2 years. ICU-to-CRNA is a common path that creates high demand for new grads to fill ICU residency spots.' },
  { question: 'How do night shift differentials compare for ICU vs ER nurses?', answer: 'Night differentials are similar for both: typically 10–25% of base pay. ICU night nurses earn slightly more in absolute dollars due to higher base rates. Both specialties have high overnight staffing needs, so differentials are rarely reduced as a cost-cutting measure.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'ICU vs ER Nurse Salary 2026', item: 'https://nursesalaryintel.com/icu-vs-er-nurse-salary-2026/' },
  ],
};

export default function ICUvsERNurseSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'ICU vs ER Nurse Salary 2026' }]}
        h1="ICU vs ER Nurse Salary 2026: Which Specialty Pays More?"
        lastUpdated="April 2026"
        schemaTitle="ICU vs ER Nurse Salary 2026: Which Pays More?"
        schemaDescription="ICU nurses average $95,200/yr vs ER nurses at $92,800/yr. Full salary comparison with hourly rates, sign-on bonuses, certifications, and long-term earnings."
        schemaUrl="/icu-vs-er-nurse-salary-2026/"
        faqs={faqs}
      >
        {/* Featured snippet */}
        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            <strong>ICU nurses earn slightly more</strong> — $95,200/year vs. ER nurses at $92,800/year nationally in 2026.
            The $2,400 gap grows with experience: CCRN-certified ICU nurses with 8+ years average <strong>$108,000–$128,000</strong>,
            while CEN-certified ER nurses hit <strong>$104,000–$122,000</strong>. Both beat the RN national average by 20–25%.
          </p>
        </div>

        <p>
          ICU and ER nursing are the two most popular high-acuity specialties — and the pay difference between them is
          smaller than most nurses expect. The bigger distinction is in career trajectory, lifestyle, and which specialty
          sets you up better for your next move.
        </p>

        <Image
          src="/images/icu-vs-er-nurse-salary-2026-hero.png"
          alt="Split image showing ICU nurse monitoring patient vitals versus ER nurse triaging in emergency department representing the 2026 salary comparison"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">ICU vs ER Nurse Salary: Full Comparison (2026)</h2>

        <SalaryTable
          title="ICU vs ER Nurse Salary — Head-to-Head (2026)"
          headers={['Category', 'ICU Nurse', 'ER Nurse']}
          rows={comparisonData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 specialty data"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Why ICU Nurses Earn Slightly More</h2>
        <p>
          The ICU pay premium comes from two factors. First, ICU nurses typically manage fewer patients (1:2 ratio vs.
          ER&apos;s variable 1:4–1:8), which commands higher hourly rates at facilities that staff by acuity. Second,
          the CCRN certification is more universally required for charge and lead ICU roles, creating a clearer pay step
          than ER certification pathways.
        </p>
        <p>
          That said, Level 1 trauma center ERs close the gap considerably. A trauma-certified ER nurse at a Level 1 center
          in California can earn $118,000–$130,000 — comparable to ICU counterparts in the same facility.
        </p>

        <Image
          src="/images/icu-vs-er-nurse-salary-2026-comparison.png"
          alt="Bar chart comparing ICU and ER nurse average salaries by experience level from entry to senior in 2026"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses: ICU vs ER (2026)</h2>

        <SalaryTable
          title="Sign-On Bonuses — ICU vs ER Nurses (2026)"
          headers={['Role', 'Typical Sign-On Range', 'Commitment']}
          rows={signOnData}
          source="NurseSalaryIntel hospital survey data, 2026"
        />

        <p>
          ICU sign-ons run higher overall, particularly for subspecialties. CVICU and SICU positions at major academic
          medical centers routinely offer $20,000–$30,000 for experienced nurses. ER sign-ons are competitive but
          slightly lower, reflecting the broader applicant pool and faster training curve.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Certifications That Increase Pay</h2>
        <ul>
          <li><strong>CCRN (ICU):</strong> Adds $4,000–$7,000/year. Required for charge roles at most ICUs. The gold standard for critical care nurses.</li>
          <li><strong>CEN (ER):</strong> Adds $3,500–$5,500/year. Widely respected but not universally mandated — gives an edge in competitive markets.</li>
          <li><strong>TNCC (Trauma Nursing Core Course):</strong> Required at most Level 1 trauma ERs. Usually employer-paid; adds $2,000–$4,000/year at trauma centers.</li>
          <li><strong>CFRN (Flight):</strong> For ER nurses pursuing flight nursing — adds $6,000–$12,000/year above base ER pay.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Career Trajectory: Which Specialty Opens More Doors?</h2>
        <p>
          ICU nursing has a clearer path to the highest-paying nursing credential: CRNA. Most CRNA programs require
          1–2 years of ICU experience, making ICU the deliberate on-ramp for nurses targeting $180,000–$250,000
          anesthesia salaries. See the <Link href="/crna-salary-2026" className="text-primary hover:underline">CRNA salary guide</Link> for the full ROI breakdown.
        </p>
        <p>
          ER nursing builds broader clinical competency — airway management, cardiovascular emergencies, pediatric
          emergencies, psychiatric crises — that translates well to flight nursing, emergency nurse practitioner (ENP)
          programs, and leadership roles in fast-paced environments.
        </p>

        <Image
          src="/images/icu-vs-er-nurse-salary-2026-team.png"
          alt="ICU and emergency nursing teams collaborating during a patient handoff in a hospital corridor"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Which Should You Choose?</h2>
        <ul>
          <li><strong>Choose ICU if:</strong> You want the highest long-term ceiling, are considering CRNA, prefer lower patient ratios and deeper clinical relationships, and can handle the emotional weight of critical illness.</li>
          <li><strong>Choose ER if:</strong> You thrive in fast, unpredictable environments, want broad clinical exposure, prefer the autonomy of triage decisions, and are drawn to flight nursing or emergency NP roles.</li>
          <li><strong>Either works for travel nursing:</strong> Both command $48–$78/hr on travel contracts. ICU slightly edges ER for per-diem and travel rates due to sustained critical care demand.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary (Full Guide)', desc: 'CCRN premium, state breakdown, CRNA path' },
            { href: '/nursing-salary/er-nurse-salary', label: 'ER Nurse Salary (Full Guide)', desc: 'CEN premium, Level 1 trauma pay' },
            { href: '/crna-salary-2026', label: 'CRNA Salary 2026', desc: '$214K avg — the ICU-to-CRNA path' },
            { href: '/travel-nurse-vs-staff-nurse-salary-2026', label: 'Travel vs Staff Nurse Salary', desc: 'Which earns more total in 2026?' },
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
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, National and State Data</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
          <li><a href="https://www.ena.org/" target="_blank" rel="noopener noreferrer">Emergency Nurses Association (ENA)</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
