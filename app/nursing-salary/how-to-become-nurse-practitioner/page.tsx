import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Become a Nurse Practitioner 2026 | NP Programs, Cost & Salary',
  description:
    'Step-by-step guide to becoming a Nurse Practitioner. NP program requirements, cost, timeline, salary expectations, and top online MSN programs for 2026.',
};

const faqs = [
  {
    question: 'How long does it take to become a Nurse Practitioner?',
    answer:
      'Total timeline is 6–10 years: 2–4 years for your RN (ADN or BSN), at least 1–2 years of RN experience, then 2–3 years for an MSN/NP program. Accelerated BSN-to-NP pathways can compress this to 5–6 years total.',
  },
  {
    question: 'Do you need a BSN to become an NP?',
    answer:
      'Most NP programs require a BSN for admission. Some programs accept ADN-prepared nurses but require a bridge course. A few direct-entry MSN programs admit non-nurses, but those are less common.',
  },
  {
    question: 'How much does an NP program cost?',
    answer:
      'MSN programs for NP range from $20,000–$80,000 total. Online programs at WGU ($22,000) and state universities ($25,000–$40,000) are significantly cheaper than private schools ($60,000–$80,000). Many employers offer tuition reimbursement of $5,000–$12,000/year.',
  },
  {
    question: 'What NP specialty pays the most?',
    answer:
      'Psychiatric Mental Health NPs (PMHNP) and Acute Care NPs (ACNP) are currently the highest-paying NP specialties, averaging $136,000 and $132,000 respectively. Family Nurse Practitioners (FNP) average $118,000 and have the most job openings.',
  },
  {
    question: 'Can you become an NP online?',
    answer:
      'Yes. Most NP programs offer online coursework with local clinical placement. WGU, Walden University, Chamberlain, and Grand Canyon University all offer fully online MSN-NP programs. You complete 500–750 clinical hours locally.',
  },
  {
    question: 'Is becoming an NP worth it financially?',
    answer:
      'Yes, for most nurses. NPs average $126,000/year vs. $89,000 for staff RNs — a $37,000/year premium. A $40,000 MSN program pays for itself in under 14 months of NP practice.',
  },
];

const npSalaryBySpecialty = [
  { label: 'Psychiatric Mental Health NP (PMHNP)', avgSalary: '$136,000', note: 'Fastest-growing demand' },
  { label: 'Acute Care NP (ACNP)', avgSalary: '$132,000', note: 'ICU/hospitalist settings' },
  { label: 'Emergency NP (ENP)', avgSalary: '$128,000', note: 'ER/urgent care' },
  { label: 'Adult-Gerontology NP (AGNP)', avgSalary: '$124,000', note: 'Primary + acute care tracks' },
  { label: 'Family Nurse Practitioner (FNP)', avgSalary: '$118,000', note: 'Most job openings' },
  { label: 'Pediatric NP (PNP)', avgSalary: '$112,000', note: 'Primary + acute care tracks' },
  { label: 'Women\'s Health NP (WHNP)', avgSalary: '$108,000', note: 'OB/GYN settings' },
  { label: 'Neonatal NP (NNP)', avgSalary: '$130,000', note: 'NICU, high specialization' },
];

const npPrograms = [
  { label: 'WGU (Western Governors University)', avgSalary: '$~22,000 total', note: 'Fully online, competency-based, CCNE accredited' },
  { label: 'Walden University', avgSalary: '$~45,000 total', note: 'Online, multiple NP tracks, CCNE accredited' },
  { label: 'Chamberlain University', avgSalary: '$~52,000 total', note: 'Online MSN-FNP, CCNE accredited' },
  { label: 'Grand Canyon University (GCU)', avgSalary: '$~38,000 total', note: 'Online MSN-FNP, CCNE accredited' },
  { label: 'University of Arizona (online)', avgSalary: '$~30,000 total', note: 'State university, strong clinical network' },
  { label: 'Purdue Global', avgSalary: '$~35,000 total', note: 'Flexible pacing, CCNE accredited' },
];

const timeline = [
  { label: 'Step 1: Earn your RN (ADN or BSN)', avgSalary: '2–4 years', note: 'BSN preferred for NP admission' },
  { label: 'Step 2: Get RN experience', avgSalary: '1–2 years', note: 'Most programs require 1+ year' },
  { label: 'Step 3: Choose NP specialty & program', avgSalary: '1–3 months', note: 'FNP is most versatile' },
  { label: 'Step 4: Complete MSN or DNP program', avgSalary: '2–3 years', note: '500–750 clinical hours required' },
  { label: 'Step 5: Pass NP boards (ANCC or AANP)', avgSalary: '2–4 months', note: '~75–82% first-time pass rate' },
  { label: 'Step 6: Apply for NP state license', avgSalary: '1–3 months', note: 'Varies by state' },
];

export default function HowToBecomeNursePractitioner() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'How to Become a Nurse Practitioner' },
      ]}
      h1="How to Become a Nurse Practitioner in 2026 — Complete Pathway Guide"
      lastUpdated="April 2026"
      schemaTitle="How to Become a Nurse Practitioner 2026"
      schemaDescription="Complete step-by-step guide to becoming an NP: education requirements, program costs, timeline, and salary expectations."
      schemaUrl="/nursing-salary/how-to-become-nurse-practitioner"
      faqs={faqs}
    >
      <p>
        Nurse Practitioners are among the highest-paid and fastest-growing roles in healthcare. NPs average
        <strong> $126,000/year</strong> — a $37,000 premium over the average staff RN — with full prescriptive
        authority in 27+ states. This guide covers every step of the pathway: education requirements, program
        selection, cost, timeline, and what to expect on the other side.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Salary by Specialty (2026)</h2>
      <p>
        Your NP specialty determines your earning potential more than any other factor. PMHNP and ACNP
        command the highest salaries; FNP has the broadest job market.
      </p>

      <SalaryTable
        title="NP Salary by Specialty (2026)"
        headers={['NP Specialty', 'Avg. Annual Salary', 'Notes']}
        rows={npSalaryBySpecialty}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <Link href="/nursing-salary/nurse-practitioner-salary" className="text-primary font-semibold hover:underline text-sm">
        Full NP Salary Guide by State →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Step-by-Step NP Pathway</h2>

      <SalaryTable
        title="How to Become an NP — Timeline"
        headers={['Step', 'Time Required', 'Details']}
        rows={timeline}
        source="NurseSalaryIntel"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Program Requirements</h2>
      <p>To be admitted to most MSN-NP programs, you will need:</p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li>Active RN license (unrestricted)</li>
        <li>BSN degree (or a bridge enrollment if ADN-prepared)</li>
        <li>Minimum GPA of 3.0 (most programs; some accept 2.75)</li>
        <li>1–2 years of clinical RN experience (some programs require 2+ in a relevant specialty)</li>
        <li>References from clinical supervisors</li>
        <li>Personal statement / goals essay</li>
        <li>Some programs: GRE scores (increasingly waived post-2022)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Best Online NP Programs 2026</h2>
      <p>
        Online NP programs let you complete coursework remotely while arranging local clinical rotations.
        All programs below are CCNE-accredited — the gold standard for nursing education.
      </p>

      <SalaryTable
        title="Top Online NP Programs (2026)"
        headers={['Program', 'Estimated Total Cost', 'Notes']}
        rows={npPrograms}
        source="NurseSalaryIntel research"
      />

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
        <h3 className="font-bold text-on-surface text-lg mb-2">Find Your NP Program</h3>
        <p className="text-on-surface-variant text-sm mb-4">
          Compare accredited online MSN programs that fit your specialty, schedule, and budget.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary/90 transition-colors"
        >
          Compare NP Programs [AFFILIATE_LINK_NP_PROGRAM]
        </a>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">MSN vs. DNP: Which Do You Need?</h2>
      <p>
        Most NP positions require an MSN. The DNP (Doctor of Nursing Practice) is increasingly preferred by
        employers and required by some academic medical centers and VA hospitals, but it adds 1–2 years of
        education. If your goal is clinical practice (not academic leadership), the MSN is sufficient for
        95% of NP positions today.
      </p>
      <p>
        The DNP push: the AACN has recommended the DNP as the entry-level degree for NP practice by 2025,
        but adoption has been uneven and states are not uniformly requiring it yet.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NP Boards: ANCC vs. AANP</h2>
      <p>
        Family NPs choose between two certifying bodies: the <strong>ANCC</strong> (American Nurses
        Credentialing Center) and the <strong>AANP</strong> (American Association of Nurse Practitioners).
        Both are nationally recognized. ANCC tends to have more clinical scenario questions; AANP is
        considered slightly easier by many test-takers. Pass rates are similar (~75–82% first attempt).
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Is the NP Career Path Worth It?</h2>
      <p>
        For most nurses, yes. The ROI is strong: a $40,000 MSN pays for itself in approximately 13 months
        of NP practice ($37,000 salary premium / 12 months = $3,083/month raise). Add in employer tuition
        reimbursement and the payback period drops to under a year.
      </p>
      <p>
        The more important question is whether you want an NP&apos;s scope of practice — diagnosing,
        prescribing, and managing patient panels independently. If you enjoy the bedside relationship and
        hands-on care delivery, a charge nurse or CNS role may be more satisfying.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/nursing-salary/nurse-practitioner-salary" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">NP Salary by State & Specialty →</span>
        </Link>
        <Link href="/nursing-salary/best-rn-to-bsn-programs" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Best RN to BSN Programs →</span>
        </Link>
        <Link href="/nursing-salary/registered-nurse-salary-guide" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">RN Salary Guide →</span>
        </Link>
        <Link href="/salary/bsn-vs-rn" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">BSN vs RN Salary Comparison →</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
