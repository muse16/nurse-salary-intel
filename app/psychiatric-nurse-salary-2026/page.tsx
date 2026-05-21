import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Psychiatric Nurse Salary 2026: What Psych RNs Really Earn',
  description:
    'Psychiatric nurses earn $78,000–$95,000/yr on average in 2026. See psych RN pay by state, setting, and experience — plus how inpatient vs. outpatient affects your take-home.',
  alternates: { canonical: 'https://nursesalaryintel.com/psychiatric-nurse-salary-2026' },
  openGraph: {
    title: 'Psychiatric Nurse Salary 2026: What Psych RNs Really Earn',
    description: 'Psych RN salary by state, setting, and experience — inpatient vs. outpatient pay compared.',
    url: 'https://nursesalaryintel.com/psychiatric-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do psychiatric nurses make in 2026?',
    answer:
      'Psychiatric RNs earn an average of $81,000–$89,000/year ($38.94–$42.79/hr) nationally in 2026, based on latest available BLS OEWS data (May 2024). Inpatient psych nurses at large academic or state hospital systems often earn toward the top of that range, while outpatient and community mental health settings run lower. California, Washington, and New York psych RNs consistently earn $95,000–$115,000 due to union contracts and cost-of-living adjustments.',
  },
  {
    question: 'Is psychiatric nursing a good career for salary growth?',
    answer:
      'Yes — psych nursing often delivers faster salary growth than med-surg because the specialty is chronically understaffed and burnout rates are high. Many systems offer $5,000–$15,000 sign-on bonuses specifically for psych RNs. Nurses who move from med-surg to inpatient psych typically see an immediate $4–$9/hr base pay increase, and those who add certification (PMH-BC) can negotiate an additional 5–8% premium.',
  },
  {
    question: 'How does inpatient psych pay compare to outpatient?',
    answer:
      'Inpatient psychiatric units (hospitals, crisis stabilization units) pay $5,000–$12,000/year more than outpatient or community mental health settings on average. Inpatient involves higher acuity, unpredictable shift demands, and security-related risk premiums that outpatient settings typically do not offer. That said, outpatient psych roles often offer better schedules — Monday–Friday, no nights or weekends — which many psych nurses accept as a trade-off.',
  },
  {
    question: 'What states pay psychiatric nurses the most?',
    answer:
      'California leads with psych RN salaries averaging $105,000–$115,000, driven largely by union contracts (CNA/NNU) and mandatory nurse-to-patient ratios. Washington state ($95,000–$108,000), Oregon ($90,000–$102,000), and New York ($92,000–$105,000) also rank high. At the lower end, Southern and rural Midwestern states average $65,000–$75,000 for psych RNs.',
  },
  {
    question: 'Does PMH-BC certification increase psychiatric nurse salary?',
    answer:
      'Yes. The PMH-BC (Psychiatric-Mental Health Nursing, Board Certified) credential from ANCC is the primary certification for psych RNs and typically adds a 5–10% salary premium at systems that recognize it. Many VA hospitals and large health systems offer an explicit certification pay differential of $1.00–$3.00/hr for PMH-BC. The certification requires 2 years of RN experience and 2,000 hours in psychiatric-mental health nursing.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$62,000 – $74,000', hourlyRate: '$29.81 – $35.58/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$76,000 – $92,000', hourlyRate: '$36.54 – $44.23/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$88,000 – $106,000', hourlyRate: '$42.31 – $50.96/hr' },
  { label: 'PMH-BC Certified', avgSalary: '$90,000 – $112,000', hourlyRate: '+5–10% over non-certified' },
  { label: 'Top 10% earners', avgSalary: '$115,000+', hourlyRate: '$55.29+/hr' },
];

const settingData = [
  { label: 'Inpatient acute psych (hospital)', avgSalary: '$82,000 – $98,000', hourlyRate: 'Highest base; shift diffs apply' },
  { label: 'State psychiatric hospital', avgSalary: '$78,000 – $94,000', hourlyRate: 'PSLF eligible; step pay increases' },
  { label: 'Crisis stabilization unit', avgSalary: '$80,000 – $96,000', hourlyRate: 'Growing rapidly; sign-on bonuses common' },
  { label: 'VA medical center (federal)', avgSalary: '$84,000 – $105,000', hourlyRate: 'Federal benefits + PSLF; PMH-BC premium' },
  { label: 'Outpatient / community MH', avgSalary: '$68,000 – $82,000', hourlyRate: 'M–F schedule; lower acuity' },
  { label: 'Correctional / forensic psych', avgSalary: '$76,000 – $96,000', hourlyRate: 'Hazard pay varies; state employment benefits' },
  { label: 'Telepsych / remote', avgSalary: '$72,000 – $88,000', hourlyRate: 'Flexible; growing since 2020' },
];

const stateData = [
  { label: 'California', avgSalary: '$105,000 – $115,000', hourlyRate: 'CNA/NNU union; mandatory ratios' },
  { label: 'Washington', avgSalary: '$95,000 – $108,000', hourlyRate: 'WSNA union contracts; no income tax' },
  { label: 'Oregon', avgSalary: '$90,000 – $102,000', hourlyRate: 'Strong union presence; OHSU + PeaceHealth' },
  { label: 'New York', avgSalary: '$92,000 – $105,000', hourlyRate: 'NYC premium; NYSNA contracts' },
  { label: 'Massachusetts', avgSalary: '$88,000 – $100,000', hourlyRate: 'Academic centers; MNA union' },
  { label: 'Michigan', avgSalary: '$76,000 – $92,000', hourlyRate: 'Mid-range; Detroit & Ann Arbor premium' },
  { label: 'Texas', avgSalary: '$72,000 – $86,000', hourlyRate: 'No income tax; lower base vs. union states' },
  { label: 'Florida', avgSalary: '$70,000 – $84,000', hourlyRate: 'No income tax; below national avg base' },
];

export default function PsychiatricNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Specialties', href: '/highest-paying-nursing-specialties' },
        { label: 'Psychiatric Nurse Salary 2026' },
      ]}
      h1="Psychiatric Nurse Salary 2026: What Psych RNs Really Earn"
      lastUpdated="May 2026"
      schemaTitle="Psychiatric Nurse Salary 2026"
      schemaDescription="Psychiatric RN salary by state, setting, experience, and certification in 2026."
      schemaUrl="/psychiatric-nurse-salary-2026"
      datePublished="2026-05-19"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Psychiatric RNs earn <strong>$81,000–$89,000/year ($38.94–$42.79/hr)</strong> on average nationally in
          2026. Inpatient psych nurses at major systems earn toward the top of that range; outpatient and community
          mental health run lower. California and Washington psych RNs — covered by union contracts — regularly reach{' '}
          <strong>$95,000–$115,000</strong>. The move from med-surg to psych typically delivers an immediate{' '}
          <strong>$4–$9/hr base pay increase</strong>, and PMH-BC certification adds another 5–10%.
        </p>
      </div>

      <Image
        src="/images/psychiatric-nurse-salary-2026-hero.webp"
        alt="Psychiatric nurse in navy scrubs sitting with a patient in a calm, well-lit mental health unit — professional and attentive clinical setting"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Psychiatric nursing is one of the most in-demand specialties in healthcare — and one of the most
        underdiscussed when it comes to pay. The national mental health staffing shortage has pushed psych RN salaries
        above general med-surg rates at most hospital systems, and sign-on bonuses that were once reserved for ICU and
        OR nurses now appear routinely in psych unit job postings. For nurses who started in acute care and are
        considering a specialty move, psychiatric nursing often delivers both a meaningful pay bump and a schedule
        improvement.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Psychiatric Nurse Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Psych RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <p>
        The experience curve in psych nursing is steeper than in many other specialties — systems that are struggling
        to retain experienced psych RNs have been compressing the gap between entry-level and mid-career pay by
        raising new-hire offers, but nurses with 5+ years and PMH-BC certification retain a clear premium. The VA
        system, which is among the largest employers of psych nurses in the country, uses a step-pay structure that
        compounds annual increases in a way that private hospital systems rarely match.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Psych RN Salary by Practice Setting (2026)</h2>

      <Image
        src="/images/psychiatric-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 psychiatric nurse salaries by practice setting — inpatient hospital, VA, crisis unit, outpatient, and correctional versus national RN average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Psych Nurse Salary by Practice Setting"
        headers={['Setting', 'Annual Salary Range', 'Notes']}
        rows={settingData}
        source="NurseSalaryIntel 2026 data"
      />

      <p>
        Setting matters more in psychiatric nursing than in almost any other specialty. An inpatient acute psych RN
        at a Level 1 academic center and an outpatient community mental health RN doing the same clinical work can
        have a $15,000–$20,000 annual pay gap. The trade-off is real in both directions: inpatient psych involves
        higher acuity, de-escalation demands, and safety risk; outpatient typically means predictable weekday
        schedules, no nights, and lower physical demands. Neither is objectively better — it depends on what you
        need from a role.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Psychiatric Nurse Salary by State (2026)</h2>

      <Image
        src="/images/psychiatric-nurse-salary-2026-hospital.webp"
        alt="Psychiatric nurse in scrubs consulting with a colleague in a bright, modern mental health unit corridor — professional clinical environment"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Psych RN Salary by State"
        headers={['State', 'Salary Range', 'Key Factors']}
        rows={stateData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">PMH-BC Certification: What It Pays</h2>
      <p>
        The Psychiatric-Mental Health Nursing board certification (PMH-BC) from ANCC is the credential that moves
        the needle most reliably in psych nursing compensation. At the VA — the largest employer of psych RNs in the
        US — PMH-BC triggers an explicit pay differential. At most large private systems, it is used as a negotiation
        anchor: nurses who walk into a job offer with PMH-BC already have a documented clinical credential that
        justifies a higher step placement on the pay scale.
      </p>
      <p>
        To sit for PMH-BC, you need 2 years of RN experience and 2,000 hours of psychiatric-mental health nursing
        practice within the past 3 years. The exam costs $395 for ANA members, $495 for non-members, and
        recertification is required every 5 years. The return on investment is strong: at $2/hr additional
        differential, the certification pays for itself in the first 200 hours of work.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Med-Surg to Psych: What the Salary Jump Looks Like</h2>
      <p>
        Nurses making the move from medical-surgical units to psychiatric nursing typically see one of the cleaner
        pay transitions in the specialty landscape. Med-surg base pay nationally runs $68,000–$82,000; inpatient
        psych starts at similar or slightly higher rates, and most systems treat the transition as a lateral move
        with an additional $2–$5/hr psych differential layered on top.
      </p>
      <p>
        The more significant financial shift is often in shift differential eligibility. Psych units, particularly
        inpatient and crisis settings, run 24/7 and have the same night/weekend differential structures as any acute
        care unit. Nurses who previously worked day shift med-surg and transition to inpatient psych nights can see
        a total compensation jump of $10,000–$18,000/year when base increase and shift differential are combined.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses for Psych Nurses (2026)</h2>
      <p>
        The psychiatric nursing staffing shortage has made sign-on bonuses a near-standard feature of inpatient
        psych job postings. $5,000–$15,000 is the typical range for staff psych RN positions; experienced psych
        nurses with PMH-BC or 5+ years of inpatient experience are seeing $15,000–$25,000 at high-need systems.
        Most bonuses vest over 1–2 years, with a prorated clawback if you leave before the commitment period ends.
        Always ask for the vesting schedule in writing before signing.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/highest-paying-nursing-specialties', label: 'Highest-Paying Nursing Specialties 2026', desc: 'Full specialty salary ranking' },
          { href: '/oncology-nurse-salary-2026', label: 'Oncology Nurse Salary 2026', desc: 'How onc pay compares to psych' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay breakdown' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to negotiate your psych RN offer' },
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
