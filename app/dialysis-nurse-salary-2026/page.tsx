import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Dialysis Nurse Salary 2026 | NurseSalaryIntel',
  description: 'Dialysis nurses earn around $72,000–$88,000/year in 2026. Outpatient clinic vs. hospital-based pay differs by $8,000–$15,000. See rates by state, employer…',
  alternates: { canonical: 'https://nursesalaryintel.com/dialysis-nurse-salary-2026' },
  openGraph: {
    title: 'Dialysis Nurse Salary 2026: Outpatient vs. Hospital Pay + State Data',
    description: 'Dialysis nurses average $72,000–$88,000/year. DaVita, Fresenius, and hospital-based units pay very differently. See the full breakdown.',
    url: 'https://nursesalaryintel.com/dialysis-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do dialysis nurses make in 2026?',
    answer:
      'Dialysis nurses earn around $72,000–$88,000/year nationally in 2026, depending on setting and state. Hospital-based dialysis nurses average $80,000–$88,000; outpatient clinic nurses (DaVita, Fresenius) average $72,000–$80,000. California dialysis nurses at hospital-based units can reach $100,000–$115,000.',
  },
  {
    question: 'Do dialysis nurses make more than regular floor nurses?',
    answer:
      'In outpatient settings, dialysis nurses typically earn less than hospital med-surg nurses. In hospital-based acute dialysis units, pay is roughly comparable to a step-down or telemetry RN. The tradeoff is schedule predictability — outpatient dialysis is often Monday–Saturday with no nights, a significant lifestyle benefit for many nurses.',
  },
  {
    question: 'What certification do dialysis nurses need?',
    answer:
      'The Certified Nephrology Nurse (CNN) credential from ANNA (American Nephrology Nurses Association) is the standard certification for dialysis nurses. It typically adds $3,000–$8,000/year to base pay and is required for senior or charge roles at most large dialysis companies. Eligibility requires 2 years of nephrology nursing experience.',
  },
  {
    question: 'Do DaVita and Fresenius nurses make less than hospital dialysis nurses?',
    answer:
      'Yes, typically. DaVita and Fresenius outpatient centers pay an average of $33–$38/hr nationally, while hospital-based acute dialysis units pay $38–$46/hr. The gap reflects acuity, call requirements, and the acute care premium. That said, outpatient clinic schedules are highly predictable with no nights, which some nurses value more than the pay difference.',
  },
  {
    question: 'Is dialysis nursing a good career?',
    answer:
      'Dialysis nursing offers a very predictable schedule, strong patient relationships (you see the same patients 3x/week), and a clear certification pathway. The tradeoff is lower pay than acute care specialties and emotionally demanding patient relationships since most dialysis patients are long-term. Nurses who want schedule control and deep patient connections often thrive in this specialty.',
  },
];

const settingComparison = [
  { label: 'Hospital-Based Acute Dialysis (ICU/CRRT)', avgSalary: 'Around $84,000–$95,000/yr', hourlyRate: '~$40–$46/hr' },
  { label: 'Hospital-Based Outpatient Unit', avgSalary: 'Around $80,000–$88,000/yr', hourlyRate: '~$38–$42/hr' },
  { label: 'DaVita Outpatient Center', avgSalary: 'Around $72,000–$80,000/yr', hourlyRate: '~$34–$38/hr' },
  { label: 'Fresenius Medical Care', avgSalary: 'Around $70,000–$78,000/yr', hourlyRate: '~$33–$38/hr' },
  { label: 'Independent Outpatient Clinic', avgSalary: 'Around $68,000–$76,000/yr', hourlyRate: '~$33–$37/hr' },
  { label: 'Home Dialysis (Peritoneal/Home HD Program)', avgSalary: 'Around $72,000–$82,000/yr', hourlyRate: '~$35–$39/hr' },
];

const stateData = [
  { label: 'California', avgSalary: 'Around $100,000–$115,000/yr', hourlyRate: '~$48–$55/hr (hospital-based)' },
  { label: 'Washington', avgSalary: 'Around $90,000–$100,000/yr', hourlyRate: '~$43–$48/hr' },
  { label: 'New York', avgSalary: 'Around $88,000–$98,000/yr', hourlyRate: '~$42–$47/hr' },
  { label: 'Massachusetts', avgSalary: 'Around $86,000–$96,000/yr', hourlyRate: '~$41–$46/hr' },
  { label: 'Texas', avgSalary: 'Around $72,000–$82,000/yr', hourlyRate: '~$35–$39/hr' },
  { label: 'National Average (outpatient)', avgSalary: 'Around $72,000–$80,000/yr', hourlyRate: '~$34–$38/hr' },
  { label: 'National Average (hospital-based)', avgSalary: 'Around $82,000–$90,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Florida', avgSalary: 'Around $65,000–$74,000/yr', hourlyRate: '~$31–$36/hr' },
  { label: 'North Carolina', avgSalary: 'Around $64,000–$72,000/yr', hourlyRate: '~$31–$35/hr' },
];

const careerPath = [
  { label: 'New Grad / Dialysis Tech-to-RN', avgSalary: 'Around $58,000–$66,000/yr', hourlyRate: 'Outpatient entry level' },
  { label: 'Staff Dialysis RN (1–3 yrs)', avgSalary: 'Around $68,000–$78,000/yr', hourlyRate: 'Outpatient clinic' },
  { label: 'Staff Dialysis RN (3–5 yrs)', avgSalary: 'Around $74,000–$85,000/yr', hourlyRate: 'Hospital or outpatient' },
  { label: 'CNN-Certified Dialysis RN', avgSalary: 'Around $78,000–$92,000/yr', hourlyRate: '+$3K–$8K above uncertified' },
  { label: 'Charge / Senior Dialysis RN', avgSalary: 'Around $84,000–$96,000/yr', hourlyRate: '$2–$4/hr differential' },
  { label: 'Dialysis Nurse Manager / Clinic Manager', avgSalary: 'Around $95,000–$115,000/yr', hourlyRate: 'Leadership track' },
];

export default function DialysisNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Specialties', href: '/highest-paying-nursing-specialties' },
        { label: 'Dialysis Nurse Salary 2026' },
      ]}
      h1="Dialysis Nurse Salary 2026: Outpatient vs. Hospital Pay, by State and Employer"
      lastUpdated="May 2026"
      schemaTitle="Dialysis Nurse Salary 2026"
      schemaDescription="Dialysis nurses earn $72,000–$88,000/year in 2026. Hospital-based units pay $8,000–$15,000 more than DaVita or Fresenius outpatient centers. See pay by state and setting."
      schemaUrl="/dialysis-nurse-salary-2026"
      datePublished="2026-05-28"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Dialysis nurses earn around <strong>$72,000–$88,000/year</strong> in 2026 depending on setting. Hospital-based acute dialysis and CRRT nurses average <strong>$84,000–$95,000</strong>; DaVita and Fresenius outpatient nurses average <strong>$70,000–$80,000</strong>. California hospital-based dialysis nurses can reach <strong>$100,000–$115,000</strong>. The CNN certification typically adds <strong>$3,000–$8,000/year</strong> over uncertified peers.
        </p>
      </div>

      {/* Hero */}
      <Image
        src="/images/dialysis-nurse-salary-2026-hero.webp"
        alt="Dialysis nurse in scrubs monitoring a patient during hemodialysis treatment in a bright outpatient dialysis center with modern equipment"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <h2>Dialysis Nurse Pay: Why Setting Matters More Than Location</h2>
      <p>
        Dialysis nursing pay is driven less by geography than by one key variable: <strong>where you work</strong>. A dialysis nurse at a DaVita outpatient center in Texas and a hospital-based acute dialysis nurse at the same Texas hospital can earn a $15,000–$20,000 annual difference — same specialty, different setting, dramatically different pay.
      </p>
      <p>
        The data below separates outpatient clinic pay (DaVita, Fresenius, independent centers) from hospital-based pay, which is the distinction most dialysis nurse salary searches miss. Dialysis is not a single labor market — it is two overlapping ones with very different pay structures.
      </p>

      <h2>Dialysis Nurse Salary by Setting and Employer</h2>

      <SalaryTable
        title="Dialysis Nurse Pay by Setting and Employer (2026 Estimates)"
        headers={['Setting / Employer', 'Estimated Annual Salary', 'Estimated Hourly Rate']}
        rows={settingComparison}
      />

      {/* Chart */}
      <Image
        src="/images/dialysis-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing dialysis nurse salary by employer type including hospital acute dialysis, DaVita, Fresenius, home dialysis, and independent clinics"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>Dialysis Nurse Salary by State</h2>
      <p>
        State variation follows the general RN pay gradient — California, Washington, and New York lead significantly. Florida and the Southeast pay well below the national average. These figures combine outpatient and hospital-based settings; hospital-based nurses in each state earn toward the top of the range.
      </p>

      <SalaryTable
        title="Dialysis Nurse Salary by State (2026 Estimates)"
        headers={['State', 'Estimated Annual Salary', 'Notes']}
        rows={stateData}
      />

      {/* Inline image */}
      <Image
        src="/images/dialysis-nurse-salary-2026-hospital.webp"
        alt="Nephrology nurse reviewing treatment records with a patient in a comfortable dialysis chair during a routine hemodialysis session"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>Dialysis Nurse Career Path and Pay Progression</h2>
      <p>
        Dialysis nursing has a clear certification-linked pay ladder. The CNN credential is the single biggest pay accelerator, and it opens the door to charge, senior, and clinic manager roles that pay significantly more.
      </p>

      <SalaryTable
        title="Dialysis Nurse Pay by Experience and Role (2026)"
        headers={['Career Stage', 'Estimated Annual Salary', 'Notes']}
        rows={careerPath}
      />

      <h2>Is Dialysis Nursing Worth the Pay Trade-off?</h2>
      <p>
        The honest answer depends on what you value. Dialysis nursing pays less than acute care specialties like ICU or ER — but the trade-off includes:
      </p>
      <ul>
        <li><strong>Predictable schedule.</strong> Most outpatient dialysis centers are Monday–Saturday with no overnight shifts. This is a substantial lifestyle benefit that many nurses find worth $5,000–$10,000 in effective pay.</li>
        <li><strong>Deep patient relationships.</strong> You see the same patients three times a week, often for years. For nurses who thrive on continuity, this is a significant professional reward.</li>
        <li><strong>Lower physical intensity.</strong> Outpatient dialysis is physically less demanding than ICU or ER nursing, which matters for long-term career sustainability.</li>
        <li><strong>Clear certification pathway.</strong> The CNN is achievable in 2 years and has direct, measurable pay impact — unlike some specialties where certification value is unclear.</li>
      </ul>
      <p>
        If your priority is maximum hourly rate, hospital-based acute dialysis (CRRT) and ICU positions pay more. If schedule control and patient continuity matter, outpatient dialysis competes well on total quality-of-life terms.
      </p>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay + CCRN premium' },
          { href: '/oncology-nurse-salary-2026', label: 'Oncology Nurse Salary 2026', desc: 'Another outpatient/inpatient hybrid specialty' },
          { href: '/highest-paying-nursing-specialties', label: 'Highest Paying Specialties', desc: 'Full ranking of nursing specialty pay' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide', desc: 'How to negotiate your next dialysis offer' },
        ].map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-4 rounded-xl border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <p className="font-semibold text-primary text-sm">{label}</p>
            <p className="text-on-surface-variant text-xs mt-1">{desc}</p>
          </Link>
        ))}
      </div>

      <MethodologyBox />

      <div className="not-prose text-sm text-on-surface-variant mt-6 space-y-1">
        <p><strong>Sources:</strong></p>
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses) — dialysis nursing falls under the general RN code. <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>American Nephrology Nurses Association (ANNA) salary survey data; job posting analysis from DaVita, Fresenius, and hospital career portals, April–May 2026. Salary estimates by setting are derived from job posting ranges and reported data — not a direct BLS-published specialty figure.</p>
        <p><a href="https://www.annanurse.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">annanurse.org</a> — ANNA certification and workforce data.</p>
      </div>
    </SEOPageLayout>
  );
}
