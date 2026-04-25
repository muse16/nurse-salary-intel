import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Night Shift Differential Pay for Nurses 2026 | Rates by Specialty & Hospital',
  description:
    'How much extra do nurses earn for night shifts? See 2026 night shift differential rates by specialty, hospital system, and state.',
};

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Night shift differential data sourced from published hospital wage surveys, union contract analyses, and employer compensation disclosures. Rates reflect national averages and state-specific variations as of 2026. Specialty and hospital system differentials sourced from public pay scale databases and direct employer reports. Percentages calculated as proportion of individual base pay. Figures are estimates and vary significantly by employer, union status, contract terms, and location.';

const faqs = [
  { question: 'How much is night shift differential for nurses?', answer: 'Night shift differentials average $4–$7/hour nationally in 2026. Rates range from $2/hr at smaller facilities to $10+/hr at major academic medical centers.' },
  { question: 'Is night shift differential taxed differently?', answer: 'No — night differential is regular taxable income, subject to the same federal and state taxes as your base pay. It does count toward overtime calculations.' },
  { question: 'Do all hospitals pay night differential?', answer: 'Most hospitals pay some form of night differential, but amounts vary widely. Some facilities build differentials into base pay for 24/7 positions rather than paying separately.' },
  { question: 'Can I negotiate night shift differential?', answer: 'Yes, especially at contract or offer stage. Differentials are often negotiable within 10–20% of the offered rate, particularly for high-demand specialties or hard-to-staff shifts.' },
  { question: 'How much more do night shift nurses make than day shift?', answer: 'Night shift nurses typically earn 10–25% more per hour than day shift nurses. On an average RN salary of $40/hr, that translates to an extra $4–$10 per hour, or $8,320–$20,800 more per year for full-time night shift nurses.' },
  { question: 'Is night shift differential worth it for nurses?', answer: 'For most nurses, yes. A 15% differential on a $40/hr base rate adds $6/hr, which equals approximately $12,480 in extra annual income for a full-time schedule. Night shift also often comes with fewer administrative interruptions and a closer team environment.' },
  { question: 'What is the average night shift differential for nurses?', answer: 'The national average night shift differential for registered nurses is 12–18% above base pay. Some hospital systems, particularly union facilities in California and New York, offer differentials as high as 25–30%.' },
  { question: 'Do travel nurses get night shift differential?', answer: 'Yes. Most travel nurse contracts include night shift differentials, though the structure varies. Some agencies build differential into the hourly rate; others pay it as a separate line item. Always confirm differential structure before signing a travel contract.' },
  { question: 'Which states pay the highest night shift differentials?', answer: 'California, New York, Massachusetts, and Washington consistently offer the highest night shift differentials, both in dollar amount and percentage, largely due to union contracts and higher base wages in those states.' },
];

const differentialRates = [
  { label: 'National Average', avgSalary: '$4.50–$5.50/hr', hourlyRate: '10–13% of base' },
  { label: 'Major Academic Medical Centers', avgSalary: '$7–$10/hr', hourlyRate: '15–20% of base' },
  { label: 'Community Hospitals', avgSalary: '$3–$5/hr', hourlyRate: '8–12% of base' },
  { label: 'Rural/Small Hospitals', avgSalary: '$1.50–$3/hr', hourlyRate: '5–8% of base' },
  { label: 'Unionized Hospitals (CA, NY, WA)', avgSalary: '$6–$12/hr', hourlyRate: '15–25% of base' },
];

const byState = [
  { label: 'California', avgSalary: '$7–$12/hr' },
  { label: 'New York', avgSalary: '$6–$10/hr' },
  { label: 'Washington', avgSalary: '$6–$9/hr' },
  { label: 'Massachusetts', avgSalary: '$5–$9/hr' },
  { label: 'Texas', avgSalary: '$3–$6/hr' },
  { label: 'Florida', avgSalary: '$2.50–$5/hr' },
  { label: 'Ohio', avgSalary: '$3–$5/hr' },
];

const differentialTypes = [
  { label: 'Night Shift (7p–7a)', avgSalary: '$4–$7/hr' },
  { label: 'Weekend (Fri PM–Sun)', avgSalary: '$3–$6/hr' },
  { label: 'Holiday', avgSalary: '$5–$15/hr (1.5x)' },
  { label: 'Charge Nurse', avgSalary: '$2–$5/hr' },
  { label: 'Preceptor', avgSalary: '$1–$3/hr' },
  { label: 'Float Pool / PRN', avgSalary: '$3–$8/hr' },
];

const bySpecialty = [
  { label: 'ICU/Critical Care RN', avgSalary: '15–25%', hourlyRate: '$8–$18/hr extra' },
  { label: 'Emergency Room RN', avgSalary: '15–20%', hourlyRate: '$7–$15/hr extra' },
  { label: 'Labor & Delivery RN', avgSalary: '12–18%', hourlyRate: '$6–$13/hr extra' },
  { label: 'NICU RN', avgSalary: '15–22%', hourlyRate: '$8–$16/hr extra' },
  { label: 'Med/Surg RN', avgSalary: '10–15%', hourlyRate: '$5–$10/hr extra' },
  { label: 'Telemetry RN', avgSalary: '12–18%', hourlyRate: '$6–$12/hr extra' },
  { label: 'OR/Surgical RN', avgSalary: '10–15%', hourlyRate: '$5–$10/hr extra' },
  { label: 'Psychiatric RN', avgSalary: '10–18%', hourlyRate: '$5–$12/hr extra' },
];

const byHospitalSystem = [
  { label: 'HCA Healthcare', avgSalary: '12–15%', hourlyRate: '7pm–7am' },
  { label: 'CommonSpirit Health', avgSalary: '10–15%', hourlyRate: '11pm–7am' },
  { label: 'Kaiser Permanente', avgSalary: '15–20%', hourlyRate: '7pm–7am' },
  { label: 'Mayo Clinic', avgSalary: '12–18%', hourlyRate: '11pm–7am' },
  { label: 'Ascension Health', avgSalary: '10–14%', hourlyRate: '11pm–7am' },
  { label: 'Tenet Healthcare', avgSalary: '10–15%', hourlyRate: '7pm–7am' },
  { label: 'Providence Health', avgSalary: '12–18%', hourlyRate: '7pm–7am' },
  { label: 'Bayhealth', avgSalary: '30%', hourlyRate: '7pm–7am' },
];

export default function NightShiftDifferential() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Negotiation', href: '/salary-negotiation/nurse-playbook' },
        { label: 'Night Shift Differential' },
      ]}
      h1="Night Shift Differential Pay for Nurses — 2026 Rates"
      lastUpdated="April 2026"
      author={author}
      sources={sources}
      methodology={methodology}
      schemaTitle="Night Shift Differential Pay for Nurses 2026"
      schemaDescription="Night shift differential rates by state, hospital system, and specialty for nurses in 2026."
      schemaUrl="/salary-negotiation/night-shift-differential-pay"
      faqs={faqs}
    >
      <p>
        Night shift differential is one of the most overlooked components of nurse compensation. A $5/hr
        differential on 36 hours/week adds up to nearly $10,000/year in additional income. Here&apos;s what
        to expect — and how to negotiate for more.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What Is Night Shift Differential Pay?</h2>
      <p>
        Night shift differential is extra hourly pay for working overnight shifts (typically 7p–7a or 11p–7a).
        The differential compensates for the physical toll and inconvenience of working against your circadian rhythm.
      </p>

      <SalaryTable title="Average Night Shift Differential Rates" headers={['Setting', 'Rate Range', 'Typical % of Base']} rows={differentialRates} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Differential by State</h2>
      <SalaryTable title="Night Differential Rates by State" headers={['State', 'Night Differential Range']} rows={byState} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Differential by Hospital System</h2>
      <p>
        Major academic medical centers (Kaiser, Cleveland Clinic, Mayo, NYU Langone) pay the highest differentials
        at $7–$10/hr. Unionized hospitals also pay above-average rates. Rural and smaller community hospitals
        pay the least, often $1.50–$3/hr.
      </p>
      <SalaryTable title="Night Differential by Hospital System" headers={['Hospital System', 'Differential %', 'Night Shift Hours']} rows={byHospitalSystem} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Differential by Specialty</h2>
      <p>
        Differential rates vary significantly by specialty. ICU and ER nurses — who staff the most demanding
        overnight units — command the highest differentials. Med/Surg and OR nurses typically sit at the lower
        end of the range.
      </p>
      <SalaryTable title="Night Differential Rates by Specialty" headers={['Specialty', 'Differential %', 'Extra Per Hour']} rows={bySpecialty} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Weekend vs. Night vs. Holiday Differentials</h2>
      <SalaryTable title="Differential Rates by Shift Type" headers={['Shift Type', 'Typical Differential']} rows={differentialTypes} source="NurseSalaryIntel survey data, 2026" />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate a Higher Differential</h2>
      <p>
        Differentials are negotiable, especially for high-demand shifts. At offer stage, ask for the differential
        in writing and push for 10–20% above the initial number. For existing positions, propose a differential
        increase at your annual review, backed by data showing what comparable hospitals pay.
      </p>
      <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="text-primary font-semibold hover:underline text-sm">
        Full negotiation guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <p className="font-semibold text-on-surface">How much more do night shift nurses make than day shift?</p>
          <p className="text-on-surface-variant">Night shift nurses typically earn 10–25% more per hour than day shift nurses. On an average RN salary of $40/hr, that translates to an extra $4–$10 per hour, or $8,320–$20,800 more per year for full-time night shift nurses.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Is night shift differential worth it for nurses?</p>
          <p className="text-on-surface-variant">For most nurses, yes. A 15% differential on a $40/hr base rate adds $6/hr, which equals approximately $12,480 in extra annual income for a full-time schedule. Night shift also often comes with fewer administrative interruptions and a closer team environment.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the average night shift differential for nurses?</p>
          <p className="text-on-surface-variant">The national average night shift differential for registered nurses is 12–18% above base pay. Some hospital systems, particularly union facilities in California and New York, offer differentials as high as 25–30%.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Do travel nurses get night shift differential?</p>
          <p className="text-on-surface-variant">Yes. Most travel nurse contracts include night shift differentials, though the structure varies. Some agencies build differential into the hourly rate; others pay it as a separate line item. Always confirm differential structure before signing a travel contract.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">Which states pay the highest night shift differentials?</p>
          <p className="text-on-surface-variant">California, New York, Massachusetts, and Washington consistently offer the highest night shift differentials, both in dollar amount and percentage, largely due to union contracts and higher base wages in those states.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">See Also</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/rn-salary-by-state/florida" className="text-primary font-semibold hover:underline">
            Florida RN salary data
          </Link>
          {' '}— night shift differential in Florida averages 10–18% above base pay.
        </li>
        <li>
          <Link href="/rn-salary-by-state" className="text-primary font-semibold hover:underline">
            RN salary by state comparison
          </Link>
          {' '}— compare average RN pay across all 50 states.
        </li>
        <li>
          <Link href="/audit" className="text-primary font-semibold hover:underline">
            Free contract audit tool
          </Link>
          {' '}— verify your differential is correctly documented in your contract.
        </li>
      </ul>
    </SEOPageLayout>
  );
}
