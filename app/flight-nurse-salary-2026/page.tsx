import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Flight Nurse Salary 2026: What Air Medical RNs Really Earn',
  description:
    'Flight nurses earn $82,000–$110,000/year total in 2026. See base pay, flight differentials, hazard pay, and what it takes to get hired as an air medical nurse.',
  alternates: { canonical: 'https://nursesalaryintel.com/flight-nurse-salary-2026' },
  openGraph: {
    title: 'Flight Nurse Salary 2026',
    description: 'Flight nurse pay breakdown — base, flight differential, hazard pay, and total comp in 2026.',
    url: 'https://nursesalaryintel.com/flight-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do flight nurses make in 2026?',
    answer: 'Flight nurses earn $82,000–$110,000/year in total compensation in 2026, depending on program, region, and experience. Base salaries typically run $75,000–$90,000 for experienced RNs, with flight pay differentials, hazard pay, night differentials, and overtime adding $10,000–$25,000 to annual earnings. Hospital-based programs generally pay more than independent air medical operators.',
  },
  {
    question: 'How much does a flight nurse make per hour?',
    answer: 'Flight nurses earn $36–$50/hour base in 2026 depending on program and region. With flight differentials (typically $2–$6/hr additional) and night or hazard premiums, effective hourly compensation often runs $42–$58/hour. Many programs also pay overtime at 1.5x for hours beyond 36 per week.',
  },
  {
    question: 'What do you need to become a flight nurse?',
    answer: 'Most flight nurse programs require: at least 3–5 years of ICU or ED clinical experience, current RN licensure, CCRN or CEN certification (or equivalent), ACLS, PALS, and NRP certifications, and completion of an air medical transport training course. The Certified Flight Registered Nurse (CFRN) credential from the BCEN is the gold standard — though some programs hire without it, completion within the first year is typically expected.',
  },
  {
    question: 'Is flight nursing worth the pay cut from ICU?',
    answer: 'Pay-wise, flight nursing often pays comparably to or slightly above experienced ICU nurse positions at many hospitals. The real tradeoffs are schedule (irregular shifts, on-call requirements, weather delays), physical demands (weight limits, confined spaces), and emotional intensity. Most flight nurses say they took the role for the clinical scope and autonomy — not strictly for pay. Compensation is competitive but not dramatically higher than a senior ICU RN.',
  },
  {
    question: 'What is the CFRN certification?',
    answer: 'The Certified Flight Registered Nurse (CFRN) is a specialty certification offered by the Board of Certification for Emergency Nursing (BCEN). It validates competency in air medical transport including critical care, trauma, and prehospital assessment. Most programs require CFRN or its progress toward within 12–18 months of hire. Certification is often required within 12–18 months of hire and may add $2,000–$5,000/year in pay.',
  },
  {
    question: 'Do flight nurses work in helicopters and planes?',
    answer: 'Both. Rotor-wing (helicopter) programs are the most common and handle short-range scene calls and interfacility transfers. Fixed-wing (airplane) programs cover long-distance interfacility transport, often for patients in remote areas or requiring specialist care unavailable locally. Some flight nurses work in hybrid programs covering both aircraft types. Rotor-wing positions are more physically demanding and weather-sensitive.',
  },
];

const compBreakdown = [
  { label: 'Base RN Salary', avgSalary: '$82,000', hourlyRate: '$39.42/hr' },
  { label: '+ Flight Differential Pay', avgSalary: '$10,000', hourlyRate: '$2–$6/hr additional' },
  { label: '+ Night / Hazard Differentials', avgSalary: '$8,000', hourlyRate: 'Varies by schedule' },
  { label: '+ Overtime (common in air medical)', avgSalary: '$6,000', hourlyRate: '1.5x base for OT hrs' },
  { label: 'Estimated Total Compensation', avgSalary: '$106,000', hourlyRate: '$50.96/hr effective' },
];

const programType = [
  { label: 'Hospital-Based (major trauma center)', avgSalary: '$95,000–$115,000', hourlyRate: 'Strongest benefits + pay' },
  { label: 'Hospital-Based (community hospital)', avgSalary: '$85,000–$100,000', hourlyRate: 'Good benefits, moderate pay' },
  { label: 'Air Medical Operator (national company)', avgSalary: '$80,000–$98,000', hourlyRate: 'Wide geographic variation' },
  { label: 'Military / Government (USAF, Army)', avgSalary: '$72,000–$95,000', hourlyRate: '+ full military benefits' },
  { label: 'Critical Care Transport (CCT, ground)', avgSalary: '$75,000–$90,000', hourlyRate: 'Entry point into flight' },
];

const requirements = [
  { label: 'Clinical Experience Required', avgSalary: '3–5 years minimum', hourlyRate: 'ICU or ED preferred' },
  { label: 'Primary Certification', avgSalary: 'CCRN or CEN', hourlyRate: 'Required at most programs' },
  { label: 'Flight Certification (gold standard)', avgSalary: 'CFRN (BCEN)', hourlyRate: 'Earn within 12–18 mo of hire' },
  { label: 'Required Certs', avgSalary: 'ACLS, PALS, NRP', hourlyRate: 'All current at time of hire' },
  { label: 'Physical Requirements', avgSalary: 'Weight limit: 250 lbs', hourlyRate: 'Most rotor-wing programs' },
];

export default function FlightNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Flight Nurse Salary 2026' },
      ]}
      h1="Flight Nurse Salary 2026: What Air Medical RNs Really Take Home"
      lastUpdated="May 2026"
      schemaTitle="Flight Nurse Salary 2026"
      schemaDescription="Flight nurse salary breakdown including base pay, flight differentials, and total compensation in 2026."
      schemaUrl="/flight-nurse-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/flight-nurse-salary-2026-hero.webp"
        alt="Flight nurse in full flight suit and helmet standing beside a medical helicopter on a hospital helipad, golden hour lighting, editorial healthcare photography style"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Flight nurses earn $82,000–$110,000/year</strong> in total compensation in 2026.
          Base salaries run <strong>$75,000–$90,000</strong>, with flight differentials, hazard pay,
          and overtime adding <strong>$10,000–$25,000</strong> more.
          Hospital-based programs at major trauma centers are the top payers — often reaching
          <strong> $115,000+</strong> in total comp.
        </p>
      </div>

      <p>
        Flight nursing sits at the top of the clinical intensity spectrum. Air medical RNs manage
        critical patients in confined spaces, often without physician backup, in environments where
        every decision is final. The compensation reflects that responsibility — and the 3–5 years
        of ICU or ED experience most programs require before they&apos;ll consider you.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Flight Nurse Pay Breakdown (2026)</h2>
      <p>
        Flight nurse compensation is almost never just a base salary. Flight differentials, night and
        hazard premiums, and overtime are standard components — and the combination often adds
        $15,000–$25,000 to what looks like a modest base. The table below models a typical air medical
        RN compensation package.
      </p>
      <SalaryTable
        title="Flight Nurse Total Compensation Breakdown"
        headers={['Compensation Component', 'Annual Value', 'Rate / Structure']}
        rows={compBreakdown}
        source="AAMS Air Medical Salary Survey 2024 + NurseSalaryIntel analysis"
      />

      <Image
        src="/images/flight-nurse-salary-2026-comparison.png"
        alt="Bar chart breaking down flight nurse total compensation in 2026 by component — base salary, flight differential, hazard pay, overtime, and total"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Flight Nurse Salary by Program Type</h2>
      <p>
        Hospital-based programs at major trauma centers consistently pay more than independent air
        medical operators — primarily because they offer full hospital benefits (pension, health
        insurance, PTO, education reimbursement) that independent operators often do not. The
        delta in total compensation between a hospital-based and contract air medical position can
        be $15,000–$25,000/year when benefits are included.
      </p>
      <SalaryTable
        title="Flight Nurse Pay by Program Type"
        headers={['Program Type', 'Total Annual Compensation', 'Notes']}
        rows={programType}
        source="AAMS Air Medical Salary Survey 2024 + NurseSalaryIntel job posting analysis"
      />

      <Image
        src="/images/flight-nurse-salary-2026-hospital.webp"
        alt="Air medical flight nurse in flight suit performing patient assessment inside a medical helicopter, clinical focus and professional competence"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">What You Need to Become a Flight Nurse</h2>
      <p>
        Flight nursing is not an entry-level specialty. The experience and certification bar is high —
        deliberately so. Patients transported by air are among the most critical in any healthcare
        system, and programs cannot afford to train clinicians who haven&apos;t already proven
        themselves under pressure.
      </p>
      <SalaryTable
        title="Flight Nurse Requirements"
        headers={['Requirement', 'Standard', 'Notes']}
        rows={requirements}
        source="AAMS, BCEN, and program-specific hiring standards"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Flight Nurse vs. ICU Nurse: Is the Pay Worth the Switch?</h2>
      <p>
        For an experienced ICU nurse in a major metro, the base salary difference between flight
        nursing and a senior hospital ICU position is often modest — sometimes $5,000–$15,000/year
        in total comp. The real value propositions of flight nursing are clinical autonomy
        (you are often the highest-level provider on scene), scope variety (trauma, stroke, STEMI,
        pediatrics — all on the same shift), and the lifestyle appeal of a non-traditional work
        environment.
      </p>
      <p>
        The tradeoffs are real: irregular schedules, on-call requirements, weather-related delays,
        physical weight and fitness requirements, and the emotional weight of high-acuity mortality.
        Most flight nurses report that they did not take the role for pay — but that the compensation
        is fair for what the job demands.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CFRN Certification and Its Impact on Pay</h2>
      <p>
        The Certified Flight Registered Nurse (CFRN) credential from the Board of Certification for
        Emergency Nursing (BCEN) is the standard for flight nurse practice. Most programs won&apos;t
        hire uncertified candidates, or require CFRN completion within 12–18 months of hire.
        Certification adds an estimated $2,000–$5,000/year in pay at most programs and is required
        for senior flight nurse and clinical lead positions.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/critical-care-nurse-salary-2026', label: 'Critical Care Nurse Salary 2026', desc: 'ICU pay — the path to flight nursing' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Detailed ICU RN compensation' },
          { href: '/travel-nurse-agency-comparison-2026', label: 'Travel Nurse Agencies 2026', desc: 'Alternative high-pay RN paths' },
          { href: '/highest-paying-nursing-specialties', label: 'Highest Paying Nursing Specialties', desc: 'Full specialty salary comparison' },
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

      <MethodologyBox />
    </SEOPageLayout>
  );
}
