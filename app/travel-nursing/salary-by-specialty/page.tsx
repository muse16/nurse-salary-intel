import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nurse Pay by Specialty 2026 | Top Earners',
  description:
    'See which nursing specialties earn the most in travel nursing. ICU, OR, ER, NICU, L&D, and more — salary data updated for 2026.',
};

const faqs = [
  { question: 'What is the highest-paying travel nurse specialty?', answer: 'CVOR (cardiovascular OR) and ECMO specialists earn the highest travel nurse rates in 2026, averaging $3,500–$4,500/week. ICU and OR are the most consistently high-paying mainstream specialties.' },
  { question: 'Do travel nurse specialties require extra certifications?', answer: 'Most facilities require specialty-specific certifications: CCRN for ICU, CEN for ER, RNC-NIC for NICU, etc. Having these certifications typically increases your pay by $2–$5/hour.' },
  { question: 'Can new grad nurses do travel nursing?', answer: 'Most agencies require 1–2 years of acute care experience. Some agencies accept new grads for med-surg or telemetry assignments, but specialty travel contracts require proven competency.' },
  { question: 'Does specialty choice affect contract length?', answer: 'Standard contracts are 13 weeks regardless of specialty. However, high-demand specialties may get offers for 8-week or extension contracts with retention bonuses.' },
];

const specialties = [
  { label: 'CVOR', avgSalary: '$2,800–$3,800/wk', hourlyRate: '$62–$82/hr' },
  { label: 'ICU / Critical Care', avgSalary: '$2,600–$3,500/wk', hourlyRate: '$58–$76/hr' },
  { label: 'Operating Room (OR)', avgSalary: '$2,500–$3,400/wk', hourlyRate: '$56–$74/hr' },
  { label: 'Emergency Room (ER)', avgSalary: '$2,400–$3,200/wk', hourlyRate: '$54–$70/hr' },
  { label: 'Labor & Delivery', avgSalary: '$2,300–$3,100/wk', hourlyRate: '$52–$68/hr' },
  { label: 'NICU', avgSalary: '$2,300–$3,000/wk', hourlyRate: '$52–$66/hr' },
  { label: 'Pediatric ICU', avgSalary: '$2,400–$3,100/wk', hourlyRate: '$54–$68/hr' },
  { label: 'Cath Lab', avgSalary: '$2,500–$3,300/wk', hourlyRate: '$56–$72/hr' },
  { label: 'Psych / Behavioral', avgSalary: '$2,100–$2,800/wk', hourlyRate: '$48–$62/hr' },
  { label: 'Med-Surg / Telemetry', avgSalary: '$2,000–$2,700/wk', hourlyRate: '$46–$60/hr' },
];

export default function TravelNurseSalaryBySpecialty() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'Salary by Specialty' },
      ]}
      h1="Travel Nurse Salary by Specialty — 2026"
      lastUpdated="April 2026"
      schemaTitle="Travel Nurse Pay by Specialty 2026"
      schemaDescription="See which nursing specialties earn the most in travel nursing with 2026 pay data."
      schemaUrl="/travel-nursing/salary-by-specialty"
      faqs={faqs}
    >
      <p>
        Your specialty is the single biggest factor in your travel nurse pay. The difference between a med-surg
        assignment and a CVOR contract can be $1,000+ per week. Here&apos;s what every specialty pays in 2026.
      </p>

      <SalaryTable
        title="Highest-Paying Travel Nursing Specialties (2026)"
        headers={['Specialty', 'Weekly Pay Range', 'Hourly Rate Range']}
        rows={specialties}
        source="NurseSalaryIntel contract data, Q1 2026"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">ICU Travel Nurse Salary</h2>
      <p>
        ICU travel nurses are in consistently high demand and earn $2,600–$3,500/week. CCRN certification adds
        $2–$5/hour. Level I trauma centers and teaching hospitals typically pay the highest rates.
      </p>
      <Link href="/nursing-salary/icu-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Full ICU nurse salary breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">OR Travel Nurse Salary</h2>
      <p>
        Operating room travel nurses command premium pay due to the specialized skill set. Expect $2,500–$3,400/week.
        CNOR certification and experience with robotic surgery can push rates higher.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">ER Travel Nurse Salary</h2>
      <p>
        Emergency department travel nurses earn $2,400–$3,200/week. Urban Level I trauma centers pay the most,
        while rural ERs offer lower rates but often include housing.
      </p>
      <Link href="/nursing-salary/er-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Full ER nurse salary breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">NICU Travel Nurse Salary</h2>
      <p>
        NICU travel nurses earn $2,300–$3,000/week. RNC-NIC certification and Level III/IV NICU experience
        command the highest rates.
      </p>
      <Link href="/nursing-salary/nicu-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Full NICU nurse salary breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Travel Nurse Salary</h2>
      <p>
        Labor and delivery travel nurses earn $2,300–$3,100/week. High-volume delivery units in urban
        areas offer the best rates.
      </p>
      <Link href="/nursing-salary/labor-delivery-nurse-salary" className="text-primary font-semibold hover:underline text-sm">
        Full L&D nurse salary breakdown →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Specialty Certifications Affect Pay</h2>
      <p>
        Specialty certifications typically add $2–$5/hour to your travel nurse rate. The most impactful certifications
        include CCRN (critical care), CEN (emergency), CNOR (operating room), and RNC-NIC (neonatal). Some facilities
        require these for hire; others pay a premium for certified nurses.
      </p>
    </SEOPageLayout>
  );
}
