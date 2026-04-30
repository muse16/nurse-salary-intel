import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Charge Nurse Salary 2026: How Much More Than Staff RN?',
  description:
    'Charge nurses earn $82,750/yr ($39.78/hr) in 2026 — $4,000–$10,000 more than staff RNs. See differential by hospital system, specialty, and all 50 states.',
  alternates: { canonical: 'https://nursesalaryintel.com/nursing-salary/charge-nurse-salary' },
  openGraph: {
    title: 'Charge Nurse Salary 2026: How Much More Than Staff RN?',
    description: 'Charge nurse pay, differential rates, and charge vs. staff RN salary comparison by state and specialty.',
    url: 'https://nursesalaryintel.com/nursing-salary/charge-nurse-salary',
  },
};

const faqs = [
  {
    question: 'How much more does a charge nurse make than a staff RN?',
    answer: 'Charge nurses earn $4,000–$10,000 more per year than staff RNs on the same unit in 2026. The premium comes from the charge nurse differential — typically $2–$5/hr added to base staff RN pay. ICU and ER charge nurses receive the highest differentials ($4–$5/hr); med-surg and LTC the lowest ($1.50–$2.50/hr).',
  },
  {
    question: 'How much do charge nurses make an hour?',
    answer: 'Charge nurses earn an average of $39.78/hour ($82,750/year) nationally in 2026. Hourly rates range from $34/hr in Florida to $52/hr in California. The charge nurse differential adds $2–$5/hr on top of the base staff RN rate.',
  },
  {
    question: 'What is the charge nurse pay differential?',
    answer: 'The charge nurse pay differential averages $3/hr nationally, adding approximately $5,600/year on a 36-hour schedule. Large academic medical centers and Magnet hospitals pay $4–$5/hr; smaller community hospitals may pay $1.50–$2/hr.',
  },
  {
    question: 'Is being a charge nurse worth the extra pay?',
    answer: 'It depends on the facility. At well-staffed hospitals, the $3–$5/hr differential plus leadership experience and faster path to management make it worthwhile. At understaffed units, the added liability and stress may not justify the pay bump — especially at facilities paying only $1.50–$2/hr differential.',
  },
  {
    question: 'Do charge nurses get overtime?',
    answer: 'Yes, charge nurses are typically non-exempt and earn overtime (1.5x) for hours over 40/week. However, some facilities misclassify charge nurses as exempt — verify your FLSA status with HR if you have concerns.',
  },
  {
    question: 'Can a charge nurse negotiate a higher differential?',
    answer: 'Yes — differentials are often negotiable at the time of accepting the charge role, especially if the hospital is short on experienced charge nurses. Come prepared with data on what comparable facilities pay. A $1/hr increase on a 36-hour schedule is worth $1,872/year.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'New York', avgSalary: '$93,000', hourlyRate: '$44.71/hr' },
  { label: 'Washington', avgSalary: '$91,000', hourlyRate: '$43.75/hr' },
  { label: 'Massachusetts', avgSalary: '$90,000', hourlyRate: '$43.27/hr' },
  { label: 'Oregon', avgSalary: '$88,000', hourlyRate: '$42.31/hr' },
  { label: 'Colorado', avgSalary: '$84,000', hourlyRate: '$40.38/hr' },
  { label: 'National Average', avgSalary: '$82,750', hourlyRate: '$39.78/hr' },
  { label: 'Texas', avgSalary: '$74,000', hourlyRate: '$35.58/hr' },
  { label: 'Florida', avgSalary: '$71,000', hourlyRate: '$34.13/hr' },
  { label: 'Alabama', avgSalary: '$67,000', hourlyRate: '$32.21/hr' },
];

const vsStaffRN = [
  { label: 'Med-Surg (Staff RN)', avgSalary: '$78,000', hourlyRate: '$—' },
  { label: 'Med-Surg (Charge RN)', avgSalary: '$82,500', hourlyRate: '+$4,500/yr (+$2.17/hr)' },
  { label: 'Telemetry (Staff RN)', avgSalary: '$82,000', hourlyRate: '$—' },
  { label: 'Telemetry (Charge RN)', avgSalary: '$87,500', hourlyRate: '+$5,500/yr (+$2.64/hr)' },
  { label: 'ICU (Staff RN)', avgSalary: '$96,000', hourlyRate: '$—' },
  { label: 'ICU (Charge RN)', avgSalary: '$106,000', hourlyRate: '+$10,000/yr (+$4.81/hr)' },
  { label: 'ER (Staff RN)', avgSalary: '$92,000', hourlyRate: '$—' },
  { label: 'ER (Charge RN)', avgSalary: '$101,500', hourlyRate: '+$9,500/yr (+$4.57/hr)' },
  { label: 'L&D (Staff RN)', avgSalary: '$90,000', hourlyRate: '$—' },
  { label: 'L&D (Charge RN)', avgSalary: '$97,000', hourlyRate: '+$7,000/yr (+$3.37/hr)' },
];

const differentialByFacility = [
  { label: 'Major Academic / Magnet Hospital', avgSalary: '$4–$5/hr', hourlyRate: '~$8,000–$10,000/yr' },
  { label: 'Community Hospital (300+ beds)', avgSalary: '$2.50–$4/hr', hourlyRate: '~$5,000–$7,500/yr' },
  { label: 'Small Community Hospital (<200 beds)', avgSalary: '$1.50–$2.50/hr', hourlyRate: '~$3,000–$5,000/yr' },
  { label: 'Long-Term Care / SNF', avgSalary: '$1–$2/hr (or flat per-shift)', hourlyRate: '~$2,000–$4,000/yr' },
  { label: 'Unionized Hospitals (CA, NY, WA)', avgSalary: '$3–$6/hr', hourlyRate: '~$6,000–$12,000/yr' },
];

export default function ChargeNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        { label: 'Charge Nurse Salary' },
      ]}
      h1="Charge Nurse Salary 2026: How Much More Do Charge Nurses Make vs. Staff RN?"
      lastUpdated="April 2026"
      schemaTitle="Charge Nurse Salary 2026"
      schemaDescription="Charge nurse salary vs. staff RN comparison, differential rates by specialty and hospital type, and state rankings for 2026."
      schemaUrl="/nursing-salary/charge-nurse-salary"
      faqs={faqs}
      specialtySlug="charge-nurse-salary"
      specialtyName="Charge Nurse"
    >
      {/* Featured snippet answer block */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Charge nurses earn $82,750/year ($39.78/hr)</strong> nationally in 2026 —
          <strong> $4,000–$10,000 more per year</strong> than staff RNs on the same unit.
          The premium comes from a charge differential of <strong>$2–$5/hr</strong> added to base pay.
          ICU charge nurses see the biggest gap; med-surg the smallest.
        </p>
      </div>

      <p>
        Becoming a charge nurse is often the first step toward nursing leadership — but the pay bump
        varies enormously by facility. A $5/hr differential at a unionized California ICU adds $10,000/year;
        a $1.50/hr differential at a rural SNF adds just $3,000. Here&apos;s what to expect, and how to negotiate for more.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Charge Nurse Salary vs. Staff RN — Side by Side (2026)</h2>
      <p>
        The table below compares staff RN and charge RN pay on the same unit nationally, showing the exact
        dollar and hourly premium charge nurses receive for taking on leadership duties:
      </p>

      <SalaryTable
        title="Charge Nurse vs. Staff RN Salary by Specialty (2026)"
        headers={['Role & Specialty', 'Avg Annual Salary', 'Charge Nurse Premium']}
        rows={vsStaffRN}
        source="NurseSalaryIntel 2026 survey data"
      />

      <p>
        ICU and ER charge nurses earn the highest premiums ($4–$5/hr) because the clinical decision-making
        load on these units is substantially higher. Med-surg and telemetry charge nurses typically sit at
        $2–$2.50/hr above staff pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Charge Nurse Differential by Hospital Type</h2>
      <p>
        The charge nurse differential averages <strong>$3/hour nationally</strong>, but ranges from
        $1/hr at small LTC facilities to $6/hr at union hospitals in California and New York.
        On a 36-hour schedule, that difference is $5,600 vs. $11,200/year.
      </p>

      <SalaryTable
        title="Charge Nurse Pay Differential by Facility Type"
        headers={['Facility Type', 'Typical Differential', 'Approx. Annual Add-On']}
        rows={differentialByFacility}
        source="NurseSalaryIntel 2026 survey data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average Charge Nurse Salary by State (2026)</h2>
      <p>
        State-level averages reflect both base staff RN pay and the typical charge differential for that
        labor market. California&apos;s lead is driven by both the highest base RN wages and the strongest
        union-negotiated differentials.
      </p>

      <SalaryTable
        title="Charge Nurse Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="NurseSalaryIntel 2026 data + BLS OEWS 2025"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Is Being a Charge Nurse Worth the Extra Pay?</h2>
      <p>
        The honest answer depends on your facility and your career goals. At well-staffed Magnet hospitals,
        the $4–$5/hr premium plus the leadership experience genuinely accelerates your path to manager,
        director, or CNO roles. At chronically understaffed facilities where charge nurses also carry
        full patient loads, the $1.50–$2/hr bump rarely compensates for the added stress and legal liability.
      </p>
      <p>
        Key questions to ask before accepting a charge role: Do I still carry patients while in charge?
        What is the exact differential, in writing? Is the differential paid for all charge hours or only
        when I have zero patients? What happens when charge coverage falls through — am I expected to cover?
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Higher Charge Differential</h2>
      <p>
        Charge differentials are often negotiable, particularly when a unit is struggling to fill the role.
        Approach the conversation at offer stage — once you accept, it&apos;s harder to revisit. Bring data:
        what do comparable hospitals in your area pay? A $1/hr increase on a 36-hour schedule is worth
        $1,872/year, and most nurse managers have some budget flexibility.
      </p>
      <p>
        For unionized nurses, differential rates are set in contract and not individually negotiable — but
        base pay can still be moved, which increases your differential earnings automatically if differential
        is calculated as a percentage rather than a flat rate.
      </p>
      <Link href="/nurse-salary-negotiation-scripts-2026" className="text-primary font-semibold hover:underline text-sm">
        Full salary negotiation guide for nurses →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/night-shift-differential-nurses', label: 'Night Shift Nurse Salary 2026', desc: 'How much more nights pay vs. days' },
          { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary 2026', desc: 'Highest-paying unit for charge nurses' },
          { href: '/highest-paying-nursing-specialties', label: 'Highest-Paying Specialties', desc: 'CRNA, NP, ICU, ER rankings' },
          { href: '/nursing-salary/by-specialty-2026', label: 'Nursing Salary by Specialty', desc: 'Full 18-specialty breakdown' },
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
    </SEOPageLayout>
  );
}
