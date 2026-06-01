import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Charge Nurse Salary vs RN: How Much More Do You Actually Make?',
  description: 'Charge nurses earn $4,500–$10,000 more per year than staff RNs — but the gap depends heavily on unit, hospital size, and whether you negotiate the…',
  alternates: { canonical: 'https://nursesalaryintel.com/charge-nurse-salary-2026' },
  openGraph: {
    title: 'Charge Nurse Salary vs RN: How Much More Do You Actually Make?',
    description: 'The charge nurse differential averages $3/hr nationally — but ranges from $1.50 to $6/hr depending on unit and facility. See the full breakdown.',
    url: 'https://nursesalaryintel.com/charge-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much more does a charge nurse make than a staff RN?',
    answer:
      'Charge nurses earn $4,500–$10,000 more per year than staff RNs on the same unit in 2026. The premium is the charge differential — typically $2–$5/hr added to base staff RN pay. ICU and ER charge nurses receive the highest differentials ($4–$5/hr); med-surg and LTC the lowest ($1.50–$2.50/hr).',
  },
  {
    question: 'What is the average charge nurse salary in 2026?',
    answer:
      'The national average charge nurse salary is around $83,000–$85,000/year ($39–$41/hr) in 2026, based on the BLS OEWS May 2024 RN baseline plus a typical $2.50–$3/hr charge differential. California charge nurses average around $108,000; Florida around $71,000.',
  },
  {
    question: 'What is the charge nurse pay differential?',
    answer:
      'The charge nurse pay differential averages $3/hr nationally, adding approximately $5,600/year on a 36-hour schedule. Large academic medical centers and Magnet hospitals pay $4–$5/hr; smaller community hospitals may pay $1.50–$2/hr. Unionized hospitals in California, New York, and Washington often pay $4–$6/hr.',
  },
  {
    question: 'Is being a charge nurse worth the extra pay?',
    answer:
      'It depends on the facility. At well-staffed hospitals, the $3–$5/hr differential plus leadership experience and a faster path to management make it worthwhile. At understaffed units, the added liability and stress may not justify the pay bump — especially at facilities paying only $1.50–$2/hr differential. The leadership experience has real long-term value even if the differential is modest.',
  },
  {
    question: 'Can a charge nurse negotiate a higher differential?',
    answer:
      'Yes — differentials are often negotiable when accepting the charge role, especially if the hospital is short on experienced charge nurses. Come prepared with data on what comparable facilities pay. A $1/hr increase on a 36-hour schedule is worth $1,872/year. Ask specifically about the range, not just the starting offer.',
  },
  {
    question: 'Do charge nurses get paid more for every shift they charge?',
    answer:
      'Most hospitals pay the differential only for shifts where you are the designated charge nurse, not on days you work as staff. Some facilities pay a flat per-shift bonus instead of an hourly differential. Clarify this before accepting the role — a per-shift structure can significantly reduce your annual earnings if charge assignments are inconsistent.',
  },
];

const vsStaffRN = [
  { label: 'Med-Surg — Staff RN', avgSalary: '$78,000/yr', hourlyRate: 'Baseline' },
  { label: 'Med-Surg — Charge RN', avgSalary: '$82,500/yr', hourlyRate: '+$4,500 (+$2.17/hr)' },
  { label: 'Telemetry — Staff RN', avgSalary: '$82,000/yr', hourlyRate: 'Baseline' },
  { label: 'Telemetry — Charge RN', avgSalary: '$87,500/yr', hourlyRate: '+$5,500 (+$2.64/hr)' },
  { label: 'ICU — Staff RN', avgSalary: '$96,000/yr', hourlyRate: 'Baseline' },
  { label: 'ICU — Charge RN', avgSalary: '$106,000/yr', hourlyRate: '+$10,000 (+$4.81/hr)' },
  { label: 'ER — Staff RN', avgSalary: '$92,000/yr', hourlyRate: 'Baseline' },
  { label: 'ER — Charge RN', avgSalary: '$101,500/yr', hourlyRate: '+$9,500 (+$4.57/hr)' },
  { label: 'L&D — Staff RN', avgSalary: '$90,000/yr', hourlyRate: 'Baseline' },
  { label: 'L&D — Charge RN', avgSalary: '$97,000/yr', hourlyRate: '+$7,000 (+$3.37/hr)' },
];

const differentialByFacility = [
  { label: 'Major Academic / Magnet Hospital', avgSalary: '$4–$5/hr differential', hourlyRate: '~$8,000–$10,000/yr extra' },
  { label: 'Community Hospital (300+ beds)', avgSalary: '$2.50–$4/hr differential', hourlyRate: '~$5,000–$7,500/yr extra' },
  { label: 'Small Community Hospital (<200 beds)', avgSalary: '$1.50–$2.50/hr differential', hourlyRate: '~$3,000–$5,000/yr extra' },
  { label: 'Long-Term Care / SNF', avgSalary: '$1–$2/hr or flat per-shift', hourlyRate: '~$2,000–$4,000/yr extra' },
  { label: 'Unionized Hospitals (CA, NY, WA)', avgSalary: '$3–$6/hr differential', hourlyRate: '~$6,000–$12,000/yr extra' },
];

const stateData = [
  { label: 'California', avgSalary: 'Around $108,000/yr', hourlyRate: '~$51.92/hr' },
  { label: 'New York', avgSalary: 'Around $93,000/yr', hourlyRate: '~$44.71/hr' },
  { label: 'Washington', avgSalary: 'Around $91,000/yr', hourlyRate: '~$43.75/hr' },
  { label: 'Massachusetts', avgSalary: 'Around $90,000/yr', hourlyRate: '~$43.27/hr' },
  { label: 'Oregon', avgSalary: 'Around $88,000/yr', hourlyRate: '~$42.31/hr' },
  { label: 'Colorado', avgSalary: 'Around $84,000/yr', hourlyRate: '~$40.38/hr' },
  { label: 'National Average', avgSalary: 'Around $83,000–$85,000/yr', hourlyRate: '~$40–$41/hr' },
  { label: 'Texas', avgSalary: 'Around $74,000/yr', hourlyRate: '~$35.58/hr' },
  { label: 'Virginia', avgSalary: 'Around $78,000/yr', hourlyRate: '~$37.50/hr' },
  { label: 'Florida', avgSalary: 'Around $71,000/yr', hourlyRate: '~$34.13/hr' },
];

export default function ChargeNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Charge Nurse Salary vs RN 2026' },
      ]}
      h1="Charge Nurse Salary vs Staff RN: What the Differential Actually Pays in 2026"
      lastUpdated="May 2026"
      schemaType="Article"
      schemaTitle="Charge Nurse Salary vs Staff RN 2026: Full Differential Breakdown"
      schemaDescription="Charge nurses earn $4,500–$10,000 more per year than staff RNs in 2026. See the charge nurse differential by unit, hospital size, and state."
      schemaUrl="/charge-nurse-salary-2026"
      datePublished="2026-05-28"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          The national average charge nurse differential is <strong>$3/hr</strong> — adding around <strong>$5,600/year</strong> on a 36-hour schedule. ICU and ER charge nurses earn the most: <strong>$9,500–$10,000 more per year</strong> than their staff RN peers. Med-surg charge differentials average just <strong>$4,500/year</strong>. Whether taking the role is worth it depends entirely on the unit, the facility, and whether you negotiate.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/charge-nurse-salary-2026-hero.webp"
        alt="Experienced charge nurse in scrubs standing at a nurses station reviewing patient assignments on a clipboard in a busy hospital unit"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <h2>What We Found: The Charge Nurse Pay Gap Is Real — But Wildly Uneven</h2>
      <p>
        The charge nurse role carries genuine responsibility: staffing decisions, bed management, conflict resolution, and being the first call when something goes wrong. The pay premium for that responsibility ranges from <strong>$1.50/hr at an understaffed community hospital to $6/hr at a unionized academic medical center</strong> — a difference of nearly $9,000/year for the same job title.
      </p>
      <p>
        The data below comes from BLS OEWS May 2024 RN baseline wages plus reported charge differentials from job postings, union CBAs, and facility-specific salary surveys. Charge nurse is not a separate BLS occupational code — pay is calculated as staff RN base plus the charge differential your facility pays.
      </p>

      <h2>Charge Nurse vs. Staff RN: The Pay Gap by Unit</h2>
      <p>
        The size of the premium tracks directly with how much the charge role adds to workload and liability. ICU charge nurses manage the most complex assignments, highest acuity, and most frequent emergencies — and they are compensated accordingly.
      </p>

      <SalaryTable
        title="Charge Nurse vs. Staff RN Annual Pay by Unit (2026 Estimates)"
        headers={['Role', 'Estimated Annual Pay', 'Annual Premium Over Staff RN']}
        rows={vsStaffRN}
      />

      {/* Data chart */}
      <Image
        src="/images/charge-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing charge nurse vs staff RN annual salary by unit type including ICU, ER, L&D, telemetry, and med-surg in 2026"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>The Differential by Facility Type: Where You Work Matters More Than the Job Title</h2>
      <p>
        Two charge nurses working ICU — one at a Magnet academic center, one at a 150-bed community hospital — can earn $4,000–$6,000 more per year at the academic center, even in the same city. Facility type and union status are the biggest variables after specialty.
      </p>

      <SalaryTable
        title="Charge Nurse Pay Differential by Facility Type"
        headers={['Facility Type', 'Typical Differential', 'Estimated Annual Impact']}
        rows={differentialByFacility}
      />

      {/* Inline image */}
      <Image
        src="/images/charge-nurse-salary-2026-hospital.webp"
        alt="Charge nurse in scrubs leading a shift huddle with nursing staff in a hospital corridor, reviewing patient assignments before the start of a shift"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2>Charge Nurse Salary by State</h2>
      <p>
        State-level pay follows the same pattern as staff RN wages — California and the Pacific Northwest pay significantly more due to cost of living, union density, and nurse-to-patient ratio laws. The charge differential is layered on top of the state baseline.
      </p>

      <SalaryTable
        title="Estimated Charge Nurse Salary by State (2026)"
        headers={['State', 'Estimated Annual Salary', 'Estimated Hourly Rate']}
        rows={stateData}
      />

      <h2>What This Means for Your Negotiation</h2>
      <p>
        Most nurses accept the charge differential without question. That is a mistake. Here is what to know before saying yes to the role:
      </p>
      <ul>
        <li><strong>Ask for the range, not just the number.</strong> Facilities almost always have a differential range. If they offer $2/hr, ask if $2.50 or $3 is available. A $0.50/hr difference on a 36-hour schedule is $936/year.</li>
        <li><strong>Clarify whether the differential applies to every charge shift or only some.</strong> If your facility charges inconsistently (floating you between charge and staff), a per-shift structure may pay less than an hourly rate applied uniformly.</li>
        <li><strong>Factor in overtime.</strong> Charge nurses are typically non-exempt and earn 1.5x their rate (including the differential) for hours over 40. That makes the differential worth more in heavy weeks.</li>
        <li><strong>Evaluate the leadership credit.</strong> Even a $2/hr differential at a smaller hospital builds charge nurse experience that qualifies you for nurse manager and director roles — where pay jumps to $95,000–$130,000+ annually. The differential is not the only return.</li>
        <li><strong>Compare to travel nursing.</strong> Some experienced charge nurses find that a 13-week travel contract as a staff RN pays more all-in than a permanent charge role at their current facility. Run the numbers before committing.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-5 not-prose">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-outline-variant rounded-xl p-5">
            <p className="font-semibold text-on-surface mb-2">{faq.question}</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <h2>Related Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary by State', desc: 'Full state-by-state data table' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'Scripts and tactics for any offer conversation' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay + CCRN premium breakdown' },
          { href: '/er-nurse-salary-2026', label: 'ER Nurse Salary 2026', desc: 'Emergency nursing pay by state and hospital' },
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
        <p>Bureau of Labor Statistics, Occupational Employment and Wage Statistics, May 2024. SOC 29-1141 (Registered Nurses). <a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bls.gov/oes</a></p>
        <p>AACN Nurse Work Environment survey data; union CBA disclosures (California Nurses Association, NYSNA, WSNA); job posting analysis from Indeed and LinkedIn, April–May 2026.</p>
        <p>Charge differentials are estimates derived from reported ranges — individual pay depends on facility, union status, and negotiation. Not a direct BLS-published figure.</p>
      </div>
    </SEOPageLayout>
  );
}
