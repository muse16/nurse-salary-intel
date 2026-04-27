import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Registered Nurse Salary Guide 2026: $89,010/yr National Average',
  description:
    '2026 RN salary guide: $89,010/yr national average ($42.79/hr). See pay by all 50 states, 15+ specialties, 5 experience levels, and care settings — sourced from BLS OEWS.',
};

const faqs = [
  {
    question: 'What is the average registered nurse salary in 2026?',
    answer:
      'The average RN salary in the United States is $89,010/year ($42.80/hr) in 2026, according to BLS data. Salaries range from $65,000 for new grads in low-cost states to over $140,000 for experienced nurses in California.',
  },
  {
    question: 'Which state pays RNs the most?',
    answer:
      'California pays RNs the most at $124,000/year average, followed by Hawaii ($106,000), Washington ($102,000), Oregon ($98,000), and Alaska ($97,000). Strong unions and nurse-to-patient ratio laws drive California\'s premium.',
  },
  {
    question: 'How much do RNs make per hour?',
    answer:
      'The national average RN hourly rate is $42.80/hr in 2026. California nurses average $59.62/hr; Mississippi nurses average $29.80/hr. Travel nurses often earn $55–$75/hr including stipends.',
  },
  {
    question: 'Does a BSN pay more than an ADN?',
    answer:
      'Yes. BSN-prepared nurses typically earn $6,000–$10,000 more per year than ADN nurses. Many health systems now require BSN for promotion or pay differentials. The return on a BSN degree is usually realized within 18–24 months.',
  },
  {
    question: 'What nursing specialty pays the most?',
    answer:
      'CRNAs (Certified Registered Nurse Anesthetists) are the highest-paid nurses, averaging $214,000/year. Nurse Practitioners average $126,000, Nurse Midwives $118,000, and Clinical Nurse Specialists $112,000.',
  },
  {
    question: 'How much do travel nurses make?',
    answer:
      'Travel nurses average $2,200–$3,600/week all-in (base pay + tax-free housing and meal stipends), or roughly $95,000–$150,000/year working full assignments. California, New York, and Washington are the highest-paying travel markets.',
  },
];

const stateSalaryData = [
  { label: 'California', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: 'Hawaii', avgSalary: '$106,000', hourlyRate: '$50.96/hr' },
  { label: 'Washington', avgSalary: '$102,000', hourlyRate: '$49.04/hr' },
  { label: 'Oregon', avgSalary: '$98,000', hourlyRate: '$47.12/hr' },
  { label: 'Alaska', avgSalary: '$97,000', hourlyRate: '$46.63/hr' },
  { label: 'New York', avgSalary: '$96,000', hourlyRate: '$46.15/hr' },
  { label: 'Massachusetts', avgSalary: '$95,000', hourlyRate: '$45.67/hr' },
  { label: 'Connecticut', avgSalary: '$93,000', hourlyRate: '$44.71/hr' },
  { label: 'New Jersey', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: '$42.80/hr' },
  { label: 'Texas', avgSalary: '$84,000', hourlyRate: '$40.38/hr' },
  { label: 'Florida', avgSalary: '$76,000', hourlyRate: '$36.54/hr' },
  { label: 'Mississippi', avgSalary: '$62,000', hourlyRate: '$29.81/hr' },
];

const specialtySalaryData = [
  { label: 'CRNA (Certified Registered Nurse Anesthetist)', avgSalary: '$214,000', note: 'Master\'s/DNP required' },
  { label: 'Nurse Practitioner (NP)', avgSalary: '$126,000', note: 'MSN/DNP required' },
  { label: 'Nurse Midwife (CNM)', avgSalary: '$118,000', note: 'MSN required' },
  { label: 'Clinical Nurse Specialist (CNS)', avgSalary: '$112,000', note: 'MSN required' },
  { label: 'OR / Surgical RN', avgSalary: '$98,000', note: 'CNOR cert valued' },
  { label: 'ICU / Critical Care RN', avgSalary: '$96,000', note: 'CCRN cert valued' },
  { label: 'ER / Emergency RN', avgSalary: '$92,000', note: 'CEN cert valued' },
  { label: 'Labor & Delivery RN', avgSalary: '$90,000', note: 'RNC-OB cert valued' },
  { label: 'NICU RN', avgSalary: '$89,000', note: 'RNC-NIC cert valued' },
  { label: 'Med-Surg RN', avgSalary: '$78,000', note: 'Entry point for most RNs' },
];

const experienceData = [
  { label: 'New Grad (0–1 year)', avgSalary: '$65,000–$85,000', note: 'Varies widely by state' },
  { label: '2–4 years', avgSalary: '$75,000–$95,000', note: 'First raise window' },
  { label: '5–9 years', avgSalary: '$85,000–$105,000', note: 'Specialty premium kicks in' },
  { label: '10–19 years', avgSalary: '$95,000–$120,000', note: 'Charge/supervisor opportunities' },
  { label: '20+ years', avgSalary: '$100,000–$140,000', note: 'Top of step scale' },
];

export default function RegisteredNurseSalaryGuide() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Registered Nurse Salary Guide' },
      ]}
      h1="Registered Nurse Salary Guide 2026 — Complete RN Pay Data"
      lastUpdated="April 2026"
      schemaTitle="Registered Nurse Salary Guide 2026"
      schemaDescription="Complete registered nurse salary data by state, specialty, and experience level for 2026."
      schemaUrl="/nursing-salary/registered-nurse-salary-guide"
      faqs={faqs}
    >
      <p>
        The average registered nurse salary in the United States is <strong>$89,010/year ($42.80/hr)</strong> in
        2026. But that average conceals a $62,000 range — from $62,000 in Mississippi to over $124,000 in
        California. This guide breaks down RN pay by state, specialty, experience, and care setting so you
        know exactly what you should be earning.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by State (2026)</h2>
      <p>
        Geography is the single biggest driver of RN pay. California nurses earn 2× what Mississippi nurses
        earn. Below are the top-paying states alongside national average benchmarks.
      </p>

      <SalaryTable
        title="RN Salary by State — Top Paying + National Benchmark"
        headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={stateSalaryData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <div className="grid sm:grid-cols-3 gap-3 my-6">
        {[
          { state: 'California', href: '/rn-salary-by-state/california' },
          { state: 'Texas', href: '/rn-salary-by-state/texas' },
          { state: 'Florida', href: '/rn-salary-by-state/florida' },
          { state: 'New York', href: '/rn-salary-by-state/new-york' },
          { state: 'Arizona', href: '/rn-salary-by-state/arizona' },
          { state: 'All 50 States →', href: '/rn-salary-by-state' },
        ].map(({ state, href }) => (
          <Link
            key={state}
            href={href}
            className="block p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors text-sm font-semibold text-primary"
          >
            {state}
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Specialty (2026)</h2>
      <p>
        Specialty is the second-biggest lever. An ICU nurse earns roughly $18,000 more than a med-surg nurse.
        Advanced practice nurses (NPs, CRNAs, CNMs) earn $30,000–$125,000 more than bedside RNs.
      </p>

      <SalaryTable
        title="Nursing Salary by Specialty (2026)"
        headers={['Specialty', 'Avg. Annual Salary', 'Notes']}
        rows={specialtySalaryData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        <Link href="/nursing-salary/crna-salary-by-state" className="block p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors text-sm font-semibold text-primary">
          CRNA Salary by State →
        </Link>
        <Link href="/nursing-salary/nurse-practitioner-salary" className="block p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors text-sm font-semibold text-primary">
          Nurse Practitioner Salary Guide →
        </Link>
        <Link href="/nursing-salary/icu-nurse-salary" className="block p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors text-sm font-semibold text-primary">
          ICU Nurse Salary →
        </Link>
        <Link href="/nursing-salary/by-specialty-2026" className="block p-3 rounded-lg border border-outline-variant hover:border-primary transition-colors text-sm font-semibold text-primary">
          All Specialties →
        </Link>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Experience Level</h2>
      <p>
        Experience adds roughly $1,500–$3,000/year in most health systems through step increases.
        The biggest jumps happen at the 5-year mark (specialty eligibility) and 10-year mark (charge/lead roles).
      </p>

      <SalaryTable
        title="RN Salary by Years of Experience"
        headers={['Experience', 'Typical Salary Range', 'Notes']}
        rows={experienceData}
        source="NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Care Setting</h2>
      <p>
        Hospital nurses typically earn the most. Outpatient, school nursing, and home health tend to pay less
        but offer better hours and lower physical demand.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Hospital (acute care):</strong> $85,000–$124,000</li>
        <li><strong>Ambulatory / outpatient clinic:</strong> $72,000–$90,000</li>
        <li><strong>Long-term care / SNF:</strong> $68,000–$82,000</li>
        <li><strong>Home health:</strong> $66,000–$80,000</li>
        <li><strong>School nursing:</strong> $58,000–$74,000</li>
        <li><strong>Telehealth / case management:</strong> $78,000–$95,000</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing vs. Staff RN Pay</h2>
      <p>
        Travel nurses typically earn 20–40% more than staff nurses in the same market. Weekly packages in
        high-demand states average $2,800–$3,600 including tax-free stipends. The trade-off is housing
        instability and no guaranteed benefits continuity.
      </p>
      <Link href="/travel-nursing/salary-guide-2026" className="text-primary font-semibold hover:underline text-sm">
        Full Travel Nurse Salary Guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Increase Your RN Salary</h2>
      <p>
        The most effective salary levers for registered nurses, ranked by ROI:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-on-surface-variant">
        <li>
          <strong>Relocate to a higher-paying state</strong> — Moving from Florida ($76K avg) to California ($124K avg)
          adds $48,000/year. Even moving from a low-pay state to Washington or Oregon adds $20,000+.
        </li>
        <li>
          <strong>Advance to BSN</strong> — Worth $6,000–$10,000/year at most health systems. Many employers
          offer tuition reimbursement.{' '}
          <Link href="/salary/bsn-vs-rn" className="text-primary hover:underline">Compare ADN vs BSN pay →</Link>
        </li>
        <li>
          <strong>Earn a specialty certification</strong> — CCRN, CEN, CNOR, or CMSRN adds $4,000–$12,000 at
          most facilities. [AFFILIATE_LINK_CERTIFICATION]
        </li>
        <li>
          <strong>Switch to a higher-acuity unit</strong> — Moving from med-surg to ICU or OR typically
          adds $15,000–$20,000/year.
        </li>
        <li>
          <strong>Become a Nurse Practitioner</strong> — NPs average $126,000, a $37,000 premium over
          the average RN.{' '}
          <Link href="/nursing-salary/how-to-become-nurse-practitioner" className="text-primary hover:underline">
            How to become an NP →
          </Link>
        </li>
      </ol>
      <div className="mt-4">
        <Link href="/nursing-salary/best-rn-to-bsn-programs" className="text-primary font-semibold hover:underline text-sm">
          Best Online RN to BSN Programs → [AFFILIATE_LINK_RN_BSN]
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Highest-Paying States (COL-Adjusted) →</span>
        </Link>
        <Link href="/salary-negotiation/nurse-playbook" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Salary Negotiation Playbook →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
