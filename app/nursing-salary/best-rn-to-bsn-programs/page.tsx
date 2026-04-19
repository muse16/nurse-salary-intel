import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Online RN to BSN Programs 2026 | Accredited, Affordable, Fast',
  description:
    'Top accredited online RN to BSN programs for 2026. Compare cost, timeline, accreditation, and salary outcomes. Find the right program for working nurses.',
};

const faqs = [
  {
    question: 'How long does an RN to BSN program take?',
    answer:
      'Most online RN to BSN programs take 12–24 months for full-time students. Part-time completion while working is common and typically takes 18–30 months. Competency-based programs like WGU can be completed faster if you test out of material quickly.',
  },
  {
    question: 'How much does an RN to BSN program cost?',
    answer:
      'Online RN to BSN programs range from $8,000 to $30,000 total. WGU is the most affordable at about $8,000–$12,000 total. Many employers offer $5,000–$12,000/year in tuition reimbursement, making the net cost near zero.',
  },
  {
    question: 'Does a BSN really pay more than an ADN?',
    answer:
      'Yes — typically $6,000–$10,000/year more. Many health systems (especially Magnet-designated hospitals) pay a BSN differential of $2–$4/hr. The pay gap widens over time as BSN nurses qualify for more leadership and specialty roles.',
  },
  {
    question: 'Can I get my BSN online while working full-time as a nurse?',
    answer:
      'Yes. All programs listed here are designed for working nurses. Coursework is asynchronous (no set class times). Clinical hours are waived — your current RN work counts as clinical experience.',
  },
  {
    question: 'Is CCNE or ACEN accreditation better for an RN to BSN program?',
    answer:
      'Both are nationally recognized. CCNE (Commission on Collegiate Nursing Education) is affiliated with the AACN and is preferred by many academic medical centers. ACEN (Accreditation Commission for Education in Nursing) is also widely accepted. Either is sufficient for RN licensure and NP program admission.',
  },
  {
    question: 'What is the best RN to BSN program for working nurses?',
    answer:
      'WGU is widely considered the best value due to its flat-rate tuition and self-paced competency model. University of Florida and Arizona State online offer strong reputation at reasonable state-school prices. For nurses who need maximum schedule flexibility, Chamberlain or Walden work well.',
  },
];

const programs = [
  {
    label: 'WGU (Western Governors University)',
    avgSalary: '$8,000–$12,000',
    note: 'Flat-rate tuition, self-paced, CCNE, fastest completion possible',
  },
  {
    label: 'University of Florida (Online)',
    avgSalary: '$12,000–$16,000',
    note: 'State flagship, CCNE, strong academic reputation',
  },
  {
    label: 'Arizona State University (Online)',
    avgSalary: '$14,000–$18,000',
    note: 'Fully online, CCNE, strong career services',
  },
  {
    label: 'Grand Canyon University (GCU)',
    avgSalary: '$18,000–$24,000',
    note: 'Online, CCNE, Christian mission, good support system',
  },
  {
    label: 'Chamberlain University',
    avgSalary: '$20,000–$28,000',
    note: 'Online, CCNE, Adtalem subsidiary, extensive NP pathway',
  },
  {
    label: 'Walden University',
    avgSalary: '$18,000–$26,000',
    note: 'Online, CCNE, strong NP bridge options, Adtalem subsidiary',
  },
  {
    label: 'Maryville University (Online)',
    avgSalary: '$15,000–$20,000',
    note: 'Online, CCNE, strong student satisfaction scores',
  },
  {
    label: 'Penn State World Campus',
    avgSalary: '$20,000–$26,000',
    note: 'Online, CCNE, flagship reputation, robust alumni network',
  },
];

const salaryImpact = [
  { label: 'ADN (Associate Degree in Nursing)', avgSalary: '$78,000', note: 'National average, 2026' },
  { label: 'BSN (Bachelor of Science in Nursing)', avgSalary: '$86,000', note: '+$8,000 vs ADN average' },
  { label: 'BSN + Specialty Certification', avgSalary: '$93,000', note: 'CCRN, CEN, CNOR, etc.' },
  { label: 'MSN / Nurse Practitioner', avgSalary: '$126,000', note: '+$48,000 vs ADN average' },
];

export default function BestRNtoBSNPrograms() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Best RN to BSN Programs' },
      ]}
      h1="Best Online RN to BSN Programs 2026 — Accredited & Affordable"
      lastUpdated="April 2026"
      schemaTitle="Best Online RN to BSN Programs 2026"
      schemaDescription="Compare top accredited online RN to BSN programs by cost, timeline, and salary outcomes for 2026."
      schemaUrl="/nursing-salary/best-rn-to-bsn-programs"
      faqs={faqs}
    >
      <p>
        A BSN degree earns nurses an average of <strong>$6,000–$10,000 more per year</strong> than an ADN.
        Most health systems now require BSN for promotion, and Magnet hospitals often pay a BSN hourly
        differential of $2–$4/hr. The good news: working nurses can earn their BSN entirely online in
        12–24 months, often with employer tuition reimbursement covering most of the cost.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Salary Impact of Earning Your BSN</h2>

      <SalaryTable
        title="Nursing Salary by Education Level (2026)"
        headers={['Degree', 'Avg. Annual Salary', 'Notes']}
        rows={salaryImpact}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <Link href="/salary/bsn-vs-rn" className="text-primary font-semibold hover:underline text-sm">
        Full BSN vs. ADN salary comparison by state →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Top Accredited Online RN to BSN Programs</h2>
      <p>
        All programs below are CCNE or ACEN accredited and designed for working RNs. No campus visits are
        required. Clinical hours are waived — your RN license satisfies the clinical requirement.
      </p>

      <SalaryTable
        title="Online RN to BSN Programs — Cost Comparison (2026)"
        headers={['Program', 'Estimated Total Cost', 'Key Details']}
        rows={programs}
        source="NurseSalaryIntel research + program websites"
      />

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
        <h3 className="font-bold text-on-surface text-lg mb-2">Compare Programs Side by Side</h3>
        <p className="text-on-surface-variant text-sm mb-4">
          Get matched with accredited RN to BSN programs that fit your schedule, state, and budget.
          Many include employer tuition reimbursement guidance.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors"
        >
          Find My RN to BSN Program [AFFILIATE_LINK_RN_BSN]
        </a>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Choose an RN to BSN Program</h2>
      <h3 className="text-xl font-bold font-headline text-on-surface mt-6 mb-2">1. Verify Accreditation</h3>
      <p>
        Only attend CCNE- or ACEN-accredited programs. Accreditation is required for NP program admission
        and employer tuition reimbursement eligibility. Avoid unaccredited online programs regardless of price.
      </p>

      <h3 className="text-xl font-bold font-headline text-on-surface mt-6 mb-2">2. Check Employer Reimbursement First</h3>
      <p>
        Most hospital systems offer $5,000–$12,000/year in tuition assistance. Check your HR portal before
        enrolling — many nurses pay nothing out of pocket. Some systems only reimburse specific approved
        programs, so verify eligibility before you enroll.
      </p>

      <h3 className="text-xl font-bold font-headline text-on-surface mt-6 mb-2">3. Consider Your NP Path</h3>
      <p>
        If you plan to pursue an NP afterward, enroll at a school that offers a direct BSN-to-MSN pathway.
        WGU, Chamberlain, and Walden all have seamless bridge programs that can save 6–12 months.
      </p>

      <h3 className="text-xl font-bold font-headline text-on-surface mt-6 mb-2">4. Match Schedule to Pacing</h3>
      <p>
        WGU is best for nurses who can dedicate significant time — you can finish in as little as 9–12 months.
        Traditional semester-based programs (Penn State, U of Florida) work better for nurses who want
        structured deadlines and less self-direction.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN to BSN Requirements</h2>
      <p>Most programs require:</p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li>Active, unrestricted RN license</li>
        <li>ADN or nursing diploma</li>
        <li>Minimum GPA of 2.5–3.0 (varies by program)</li>
        <li>Official transcripts from all prior schools</li>
        <li>Some programs: current employment as an RN</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">After Your BSN: Next Steps</h2>
      <p>
        A BSN opens the door to Magnet hospitals, charge nurse and supervisor roles, specialty unit
        transfers, and NP/CRNA programs. Most nurses see their first BSN salary bump within 6 months
        of graduation.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/salary/bsn-vs-rn" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">BSN vs ADN Salary — Full Comparison →</span>
        </Link>
        <Link href="/nursing-salary/how-to-become-nurse-practitioner" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">How to Become a Nurse Practitioner →</span>
        </Link>
        <Link href="/nursing-salary/registered-nurse-salary-guide" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">RN Salary Guide →</span>
        </Link>
        <Link href="/nursing-salary/nurse-practitioner-salary" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">NP Salary by State →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
