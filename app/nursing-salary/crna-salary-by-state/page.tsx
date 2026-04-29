import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CRNA Salary by State 2026: $214,200/yr National Avg — California Pays $258K',
  description:
    'CRNAs earn $214,200/yr nationally in 2026. California tops out at $258K. See all 50 states ranked, how CRNA pay compares to anesthesiologists, and strategies to maximize earnings.',
};

const faqs = [
  { question: 'How much do CRNAs make a year?', answer: 'The national average CRNA salary is $214,200 in 2026. Top earners in high-cost states like California and New York exceed $250,000. Even the lowest-paying states offer $175,000+.' },
  { question: 'What state pays CRNAs the most?', answer: 'California ($258,000), New York ($247,000), and Oregon ($242,000) pay CRNAs the most. However, after cost of living adjustment, Wyoming, Montana, and North Dakota offer excellent purchasing power.' },
  { question: 'Is CRNA the highest-paid nursing role?', answer: 'Yes. CRNA is consistently the highest-paid nursing specialty, earning nearly double what most nurse practitioners make and 2.5x the average RN salary.' },
  { question: 'How long does it take to become a CRNA?', answer: 'It takes 7–8 years minimum: BSN (4 years), 1–2 years ICU experience, then a 3-year DNP/DNAP program. Total education investment is significant but the salary return is the highest in nursing.' },
  { question: 'Do CRNAs make more than doctors?', answer: 'CRNAs earn more than many primary care physicians ($214K vs. $200K for family medicine). However, anesthesiologists earn significantly more ($400K+). CRNAs have better debt-to-income ratios due to lower education costs.' },
];

const stateData = [
  { label: 'California', avgSalary: '$258,000', hourlyRate: '$124/hr' },
  { label: 'New York', avgSalary: '$247,000', hourlyRate: '$119/hr' },
  { label: 'Oregon', avgSalary: '$242,000', hourlyRate: '$116/hr' },
  { label: 'Washington', avgSalary: '$238,000', hourlyRate: '$114/hr' },
  { label: 'Massachusetts', avgSalary: '$235,000', hourlyRate: '$113/hr' },
  { label: 'Connecticut', avgSalary: '$232,000', hourlyRate: '$112/hr' },
  { label: 'New Jersey', avgSalary: '$230,000', hourlyRate: '$111/hr' },
  { label: 'Texas', avgSalary: '$198,000', hourlyRate: '$95/hr' },
  { label: 'Florida', avgSalary: '$192,000', hourlyRate: '$92/hr' },
  { label: 'National Average', avgSalary: '$214,200', hourlyRate: '$103/hr' },
];

export default function CRNASalaryByState() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'CRNA Salary by State' },
      ]}
      h1="CRNA Salary by State — 2026 Nurse Anesthetist Pay Data"
      lastUpdated="April 2026"
      schemaTitle="CRNA Salary by State 2026"
      schemaDescription="CRNA salaries for all 50 states in 2026 with pay data and job outlook."
      schemaUrl="/nursing-salary/crna-salary-by-state"
      faqs={faqs}
      specialtySlug="crna-salary"
      specialtyName="CRNA"
    >
      <p>
        Certified Registered Nurse Anesthetists are the highest-paid professionals in nursing, earning an average
        of $214,200/year nationally in 2026. But CRNA pay varies by over $80,000 depending on your state.
        Here&apos;s the full breakdown.
      </p>

      <SalaryTable
        title="CRNA Salary by State — 2026"
        headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={stateData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying States for CRNAs</h2>
      <p>
        California leads at $258,000/year, followed by New York ($247K) and Oregon ($242K). These states also have
        the highest cost of living. For the best purchasing power, consider states like Wyoming, North Dakota, and
        Montana — where CRNA salaries of $195K–$210K go much further.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CRNA Salary vs. Other Advanced Practice Nurses</h2>
      <p>
        CRNAs earn nearly double what most NPs make ($214K vs. $126K) and significantly more than CNMs ($121K) and
        CNSs ($108K). The investment in CRNA education is higher, but the salary premium justifies it financially.
      </p>
      <Link href="/nursing-salary/nurse-practitioner-salary" className="text-primary font-semibold hover:underline text-sm">
        Compare NP salaries →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Experience Affects CRNA Pay</h2>
      <p>
        New CRNAs start at $175,000–$195,000. After 5 years, salaries climb to $210,000–$240,000. CRNAs with 10+
        years of experience and subspecialty skills (cardiac, pediatric, regional) can earn $250,000–$300,000+.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CRNA Job Outlook and Demand in 2026</h2>
      <p>
        The BLS projects 40% growth in CRNA employment through 2032 — far faster than average. Demand is driven
        by the physician anesthesiologist shortage, expanding scope of practice in many states, and the cost
        advantage of CRNA-led anesthesia care.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Become a CRNA</h2>
      <p>
        The path: BSN → 1–2 years ICU experience (most programs require CCRN) → 3-year DNP/DNAP program →
        national certification exam (NCE). Total cost of a CRNA program is $80,000–$180,000, with starting
        salaries that make the investment worthwhile within 2–3 years.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/nursing-salary/icu-nurse-salary" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">ICU Nurse Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">The first step on the CRNA path.</p>
        </Link>
        <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">How to Negotiate CRNA Salary →</span>
          <p className="text-xs text-on-surface-variant mt-1">Scripts and tactics for advanced practice roles.</p>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
