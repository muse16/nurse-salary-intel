import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'LVN Salary 2026: Pay by State, Setting & Experience',
  description:
    'LVNs earn $61,790/year nationally in 2026. See LVN salary by state — California pays $70,940, Texas $56,020. Hourly rates, specialty pay, and career paths.',
  alternates: { canonical: 'https://nursesalaryintel.com/lvn-salary-2026' },
  openGraph: {
    title: 'LVN Salary 2026: What Licensed Vocational Nurses Earn',
    description: 'LVN salary by state, setting, and experience — with California and Texas deep-dives.',
    url: 'https://nursesalaryintel.com/lvn-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much does an LVN make in 2026?',
    answer:
      'Licensed vocational nurses earn a national mean of $61,790/year ($29.71/hour) based on the latest available BLS OEWS data (May 2024, published 2025). Salaries range from approximately $45,000 in lower-cost states to $70,940 in California. LVNs in home health, correctional facilities, and specialty clinics often earn above the statewide average for their location.',
  },
  {
    question: 'What is the difference between an LVN and an LPN?',
    answer:
      'LVN (Licensed Vocational Nurse) and LPN (Licensed Practical Nurse) refer to the same licensure level — the term "LVN" is used in California and Texas, while most other states use "LPN." Both complete a state-approved practical nursing program (typically 12–18 months), pass the NCLEX-PN exam, and practice under the supervision of RNs or physicians. Scope of practice is essentially identical across state lines.',
  },
  {
    question: 'How much do LVNs make in California?',
    answer:
      'California LVNs earn a mean annual wage of $70,940/year ($34.11/hour) per BLS OEWS May 2024 data — making California the highest-paying state for LVNs in the country. The Bay Area, Los Angeles, and San Diego metro areas push that average higher, with experienced LVNs in large health systems earning $75,000–$82,000. California\'s strong union presence and SEIU healthcare contracts are key drivers of above-average pay.',
  },
  {
    question: 'How much do LVNs make in Texas?',
    answer:
      'Texas LVNs earn a mean annual wage of $56,020/year ($26.93/hour) per BLS OEWS May 2024. Dallas, Houston, and Austin pay above the state average — typically $58,000–$64,000 — while rural Texas markets fall below $52,000. Texas has the second-largest LVN workforce in the country after California and consistently posts high LVN job volume on major platforms.',
  },
  {
    question: 'Can an LVN become an RN?',
    answer:
      'Yes. The most common pathway is an LVN-to-RN bridge program, also called LVN-to-ADN or LVN-to-BSN. These programs typically take 12–24 months and award credit for existing LVN coursework and clinical hours, shortening the path compared to starting fresh. After completing the bridge program, candidates sit for the NCLEX-RN. Many California community colleges and Texas state universities offer accredited LVN bridge programs. Transitioning to RN typically adds $25,000–$35,000/year in annual earnings.',
  },
  {
    question: 'Where do LVNs make the most money?',
    answer:
      'The top-paying states for LVNs per BLS OEWS May 2024 are California ($70,940), Massachusetts ($66,820), Washington ($64,210), and Oregon ($62,870). Within states, metropolitan areas — especially unionized hospital systems and large long-term care chains — pay the most. LVNs in correctional nursing, IV therapy specialization, and hospice care often earn above the state median within their market.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$70,940', hourlyRate: '$34.11/hr' },
  { label: 'Massachusetts', avgSalary: '$66,820', hourlyRate: '$32.13/hr' },
  { label: 'Washington', avgSalary: '$64,210', hourlyRate: '$30.87/hr' },
  { label: 'Oregon', avgSalary: '$62,870', hourlyRate: '$30.23/hr' },
  { label: 'National Average', avgSalary: '$61,790', hourlyRate: '$29.71/hr' },
  { label: 'Texas', avgSalary: '$56,020', hourlyRate: '$26.93/hr' },
  { label: 'Florida', avgSalary: '$52,480', hourlyRate: '$25.23/hr' },
  { label: 'Georgia', avgSalary: '$50,940', hourlyRate: '$24.49/hr' },
];

const settingData = [
  { label: 'Home Health Services', avgSalary: 'around $64,000', hourlyRate: 'Highest growth segment' },
  { label: 'Hospitals (general medical)', avgSalary: 'around $62,000', hourlyRate: 'Strong benefits + OT' },
  { label: 'Skilled Nursing Facilities', avgSalary: 'around $59,000', hourlyRate: 'Charge LVN roles add $2–4/hr' },
  { label: 'Physician / Clinic Offices', avgSalary: 'around $57,000', hourlyRate: 'Lower base; better hours' },
  { label: 'Correctional Facilities', avgSalary: 'around $66,000', hourlyRate: 'Hazard premium; state benefits' },
  { label: 'Long-Term / Residential Care', avgSalary: 'around $55,000', hourlyRate: 'Common entry setting' },
];

const careerData = [
  { label: '0–2 years (new LVN)', avgSalary: '$48,000 – $55,000', hourlyRate: '$23–$26/hr typical' },
  { label: '3–5 years', avgSalary: '$56,000 – $63,000', hourlyRate: 'Charge LVN eligible' },
  { label: '6–10 years', avgSalary: '$63,000 – $72,000', hourlyRate: 'Specialty cert adds $2–5/hr' },
  { label: 'LVN → RN bridge', avgSalary: '$83,000 – $95,000', hourlyRate: 'Post-NCLEX-RN pass' },
];

export default function LVNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'LVN Salary 2026' },
      ]}
      h1="LVN Salary 2026: What Licensed Vocational Nurses Really Earn"
      lastUpdated="May 2026"
      schemaTitle="LVN Salary 2026"
      schemaDescription="Licensed vocational nurse salary by state, setting, and experience — with California and Texas deep-dives based on BLS OEWS May 2024 data."
      schemaUrl="/lvn-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/lvn-salary-2026-hero.webp"
        alt="Licensed vocational nurse in navy scrubs reviewing a patient chart in a bright clinic hallway, professional and focused, editorial healthcare photography style"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          LVNs earn a national mean of <strong>$61,790/year ($29.71/hour)</strong> per the latest available BLS OEWS data (May 2024, published 2025).
          California pays the highest at <strong>$70,940/year</strong>, while Texas — the second-largest LVN market —
          averages <strong>$56,020</strong>. The term LVN (Licensed Vocational Nurse) is used in California and Texas;
          all other states call the same license an LPN.
        </p>
      </div>

      <p>
        LVN and LPN are the same credential with different names by state. If you are in California or Texas,
        your license reads &quot;LVN.&quot; If you are in any of the other 48 states, it reads &quot;LPN.&quot;
        The NCLEX-PN exam, scope of practice, and career trajectory are identical. What differs is the salary
        landscape — and California&apos;s LVN market is dramatically higher than the national average.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">LVN Salary by State (2026)</h2>
      <p>
        The gap between the highest- and lowest-paying states for LVNs is more than $20,000/year.
        California leads by a wide margin — driven by SEIU healthcare contracts, mandatory nurse-to-patient
        ratios, and the high cost of living. Massachusetts and Washington follow. Texas, despite its massive
        LVN workforce, pays roughly 19% below California.
      </p>
      <SalaryTable
        title="LVN / LPN Salary by State"
        headers={['State', 'Annual Mean Wage', 'Hourly Mean']}
        rows={stateData}
        source="BLS OEWS May 2024, published April 2025 (SOC 29-2061)"
      />

      <Image
        src="/images/lvn-salary-2026-comparison.png"
        alt="Bar chart comparing LVN annual mean salary across top-paying states — California, Massachusetts, Washington, Oregon, Texas — with national average line"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">LVN Salary by Work Setting</h2>
      <p>
        Where an LVN works matters almost as much as which state. Correctional nursing pays the highest
        effective wage for LVNs — with hazard premiums, state benefit packages, and lower burnout rates
        than skilled nursing facilities. Home health is growing fastest and often pays above SNF rates,
        with mileage reimbursement and flexible scheduling as additional perks.
      </p>
      <SalaryTable
        title="LVN Salary by Work Setting (2026 Estimates)"
        headers={['Work Setting', 'Estimated Annual Pay', 'Notes']}
        rows={settingData}
        source="BLS OEWS May 2024 industry-level data (NAICS-based) + NurseSalaryIntel analysis"
      />

      <Image
        src="/images/lvn-salary-2026-hospital.webp"
        alt="Licensed vocational nurse assisting a patient in a skilled nursing facility room, warm overhead lighting, professional clinical care setting, no text, no logos"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">LVN Salary by Experience Level</h2>
      <p>
        LVN salaries advance modestly with experience compared to RNs — because scope of practice caps
        out earlier. The highest-leverage career decision for an experienced LVN is the bridge to RN,
        which typically adds $25,000–$35,000/year in base pay and opens specialty pathways that are
        closed to LVNs in most states.
      </p>
      <SalaryTable
        title="LVN Salary Progression by Experience"
        headers={['Experience Level', 'Typical Annual Range', 'Key Notes']}
        rows={careerData}
        source="BLS OEWS May 2024 + NurseSalaryIntel job posting analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">California LVN Salary: The Full Picture</h2>
      <p>
        California LVNs earn <strong>$70,940/year</strong> on average — but the spread is wide.
        A new LVN at a Southern California long-term care facility may start at $26/hour, while an
        experienced charge LVN at a Kaiser Permanente facility covered by the SEIU-UHW contract
        can reach $40–$44/hour. California mandates a minimum nurse-to-patient ratio of 1:5 in
        medical-surgical units, which increases LVN demand and supports higher wage floors.
        The Bay Area (San Francisco, San Jose, Oakland) posts the highest in-state LVN wages,
        often $36–$42/hour base.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Texas LVN Salary: Market Dynamics</h2>
      <p>
        Texas is the second-largest LVN employer in the US, with Dallas, Houston, Austin, and
        San Antonio all showing strong job volume. The statewide mean of <strong>$56,020/year</strong>{' '}
        masks significant metro variation: Houston LVNs average $58,000–$62,000; rural East and West
        Texas markets often run $46,000–$52,000. Texas has no statewide minimum nurse staffing ratio,
        which limits upward wage pressure compared to California. The LVN-to-RN bridge market is
        active in Texas, with community colleges like Austin Community College and Houston Community
        College offering accredited programs with in-state tuition under $8,000.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">LVN to RN Bridge: The Salary Math</h2>
      <p>
        For an LVN earning $60,000/year, completing an LVN-to-ADN bridge program (typically 12–18 months,
        $6,000–$15,000 in tuition) and passing the NCLEX-RN opens a direct path to $83,000–$95,000/year
        as a new-grad RN in most markets. In California, a newly licensed RN at a major health system
        often starts at $47–$55/hour base — compared to $34/hour for an experienced LVN.
        The payback period on the bridge program is typically under 24 months.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/lpn-salary-2026', label: 'LPN Salary 2026', desc: 'LPN pay by state — same license, different name' },
          { href: '/cna-salary-2026', label: 'CNA Salary 2026', desc: 'Entry-level nursing pay breakdown' },
          { href: '/rn-vs-lpn-salary-2026', label: 'RN vs LPN Salary 2026', desc: 'Full salary comparison + bridge paths' },
          { href: '/california-rn-salary-2026', label: 'California RN Salary 2026', desc: 'After the bridge — what CA RNs earn' },
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

      <div className="text-sm text-on-surface-variant mt-8 space-y-1">
        <p className="font-semibold">Sources</p>
        <p>
          U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS), May 2024,
          published April 2025. SOC 29-2061: Licensed Practical and Licensed Vocational Nurses.{' '}
          <a href="https://www.bls.gov/oes/current/oes292061.htm" className="underline" target="_blank" rel="noopener noreferrer">
            bls.gov/oes/current/oes292061.htm
          </a>
        </p>
        <p>
          California Board of Vocational Nursing and Psychiatric Technicians (BVNPT).{' '}
          <a href="https://www.bvnpt.ca.gov/" className="underline" target="_blank" rel="noopener noreferrer">
            bvnpt.ca.gov
          </a>
        </p>
        <p>
          Texas Board of Nursing, LVN Licensure Information.{' '}
          <a href="https://www.bon.texas.gov/" className="underline" target="_blank" rel="noopener noreferrer">
            bon.texas.gov
          </a>
        </p>
      </div>
    </SEOPageLayout>
  );
}
