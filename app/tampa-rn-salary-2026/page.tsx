import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Tampa RN Salary 2026: How Much Do Nurses Make in Tampa, FL?',
  description: 'Tampa RNs earn $73,000/yr ($35.10/hr) based on the latest BLS data. TGH pays $75K–$96K. See salary by hospital, specialty, and experience — with Florida…',
  alternates: { canonical: 'https://nursesalaryintel.com/tampa-rn-salary-2026' },
  openGraph: {
    title: 'Tampa RN Salary 2026: $73,000/yr Estimated + No State Income Tax',
    description: 'Tampa nurse salary by hospital, specialty, and experience — with Florida no-income-tax take-home breakdown.',
    url: 'https://nursesalaryintel.com/tampa-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Tampa, FL in 2026?',
    answer:
      "Tampa RNs earn an average of $73,000/year ($35.10/hr), based on latest available BLS OEWS data (May 2024). That is slightly below the national average of $89,000 on a gross basis, but Florida's lack of state income tax meaningfully improves take-home pay relative to states like California or New York.",
  },
  {
    question: 'Which hospital pays nurses the most in Tampa?',
    answer:
      'Tampa General Hospital (TGH), a Level 1 Trauma Center and academic medical center affiliated with USF Health, leads the Tampa market with RN salaries of $75,000–$96,000. AdventHealth Tampa and BayCare Health System are the other major systems, typically paying $70,000–$88,000 for experienced RNs.',
  },
  {
    question: 'How does Tampa nurse pay compare to Orlando and Miami?',
    answer:
      "Tampa RNs average $73,000/year, Orlando RNs average $72,000/year, and Miami RNs average $75,000/year — all within a tight band. Miami carries a higher cost of living (housing 25–30% more expensive than Tampa), making Tampa the strongest cost-of-living-adjusted market of Florida's three major nurse markets.",
  },
  {
    question: 'What is the take-home pay for a Tampa nurse with no state income tax?',
    answer:
      "Florida has no state income tax, which adds approximately $3,500–$5,000/year in take-home pay compared to a nurse earning the same gross salary in a state with a 5–6% income tax. On $73,000 gross, a Tampa RN's state and local tax liability is $0. Federal taxes still apply, and Florida does charge sales tax on goods, but housing and take-home math strongly favors Florida over comparably-salaried states.",
  },
  {
    question: 'Are there sign-on bonuses for Tampa nurses in 2026?',
    answer:
      'Yes. TGH, AdventHealth, and BayCare all offer sign-on bonuses for specialty RNs — ICU, OR, ED, and L&D positions typically see $7,500–$18,000 with 1–2 year commitments. Night shift differential at Tampa hospitals runs $3–$6/hr, and weekend differentials typically add $2–$4/hr on top.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$58,000 – $68,000', hourlyRate: '$27.88 – $32.69/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$69,000 – $82,000', hourlyRate: '$33.17 – $39.42/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$80,000 – $96,000', hourlyRate: '$38.46 – $46.15/hr' },
  { label: 'Top 10% earners', avgSalary: '$100,000+', hourlyRate: '$48.08+/hr' },
];

const hospitalData = [
  { label: 'Tampa General Hospital (TGH)', avgSalary: '$75,000 – $96,000', hourlyRate: 'Level 1 Trauma; USF academic affiliate' },
  { label: 'AdventHealth Tampa', avgSalary: '$71,000 – $88,000', hourlyRate: 'Large system; strong benefits' },
  { label: 'BayCare St. Joseph\'s Hospital', avgSalary: '$70,000 – $87,000', hourlyRate: 'Level 2 Trauma; regional system' },
  { label: 'HCA — Brandon Regional', avgSalary: '$69,000 – $84,000', hourlyRate: 'Sign-on bonuses common' },
  { label: 'Moffitt Cancer Center', avgSalary: '$76,000 – $96,000', hourlyRate: 'NCI-designated; oncology premium' },
  { label: 'USF Health / Tampa VA', avgSalary: '$78,000 – $98,000', hourlyRate: 'Federal benefits; PSLF eligible' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$70,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$76,000', hourlyRate: '+$6,000' },
  { label: 'ER', avgSalary: '$80,000', hourlyRate: '+$10,000' },
  { label: 'OR / Surgical', avgSalary: '$82,000', hourlyRate: '+$12,000' },
  { label: 'ICU / Critical Care', avgSalary: '$86,000', hourlyRate: '+$16,000' },
  { label: 'Oncology (Moffitt)', avgSalary: '$82,000', hourlyRate: '+$12,000' },
  { label: 'NICU', avgSalary: '$84,000', hourlyRate: '+$14,000' },
  { label: 'CRNA (Certified)', avgSalary: '$210,000+', hourlyRate: 'Advanced practice' },
];

export default function TampaRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Florida RN Salary', href: '/rn-salary-by-state/florida' },
        { label: 'Tampa RN Salary 2026' },
      ]}
      h1="Tampa RN Salary 2026: How Much Do Nurses Make in Tampa, Florida?"
      lastUpdated="May 2026"
      schemaTitle="Tampa RN Salary 2026"
      schemaDescription="Average RN salary in Tampa, FL by hospital, specialty, and experience level in 2026."
      schemaUrl="/tampa-rn-salary-2026"
      datePublished="2026-05-19"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Tampa RNs earn <strong>$73,000/year ($35.10/hr)</strong> based on the latest BLS data. Tampa General Hospital leads
          the market at <strong>$75,000–$96,000</strong>, and Moffitt Cancer Center adds oncology premiums for
          specialty nurses. Florida&apos;s <strong>zero state income tax</strong> meaningfully improves take-home
          vs. comparably-salaried states — a nurse earning $73,000 in Tampa keeps roughly{' '}
          <strong>$3,500–$5,000 more per year</strong> than the same salary in a 5–6% income-tax state.
        </p>
      </div>

      <Image
        src="/images/tampa-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy scrubs standing outside a modern Tampa Florida hospital with palm trees and a clear sky in the background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Tampa sits at the center of one of Florida&apos;s fastest-growing healthcare markets. The metro has grown
        by more than 25% in population over the past decade, and major systems like Tampa General Hospital, AdventHealth,
        and BayCare have expanded to keep pace. Moffitt Cancer Center — one of only 56 NCI-designated comprehensive
        cancer centers in the US — adds a high-paying oncology tier that most Florida markets lack. For nurses
        weighing Florida options, Tampa offers the strongest combination of system diversity, specialty opportunity,
        and cost-of-living advantage among the state&apos;s three major nurse markets.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tampa RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Tampa RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tampa RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/tampa-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Tampa hospitals — Tampa General, AdventHealth, BayCare, Moffitt Cancer Center versus national average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Tampa General Hospital anchors the high end of the Tampa market. As a Level 1 Trauma Center and the primary
        teaching hospital for USF Health, TGH attracts and compensates specialty nurses — ICU, OR, transplant, and
        trauma teams — at rates that track closer to academic centers in larger markets. Moffitt, which operates
        outside the typical community hospital pay structure, pays oncology-trained nurses a meaningful premium
        above the Tampa market average.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Tampa, FL"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tampa RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/tampa-rn-salary-2026-hospital.webp"
        alt="Two nurses in scrubs reviewing patient data on a computer screen in a bright modern Tampa Florida hospital unit"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Tampa RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Florida No-Income-Tax: What Tampa Nurses Actually Take Home</h2>
      <p>
        Florida levies no state income tax — a financial advantage that compounds across a nursing career in ways
        that gross salary comparisons miss. On a $73,000 salary, a Tampa RN owes $0 in state income tax. A nurse
        earning the same $73,000 in California would pay approximately $4,400 in state income tax; in New York,
        roughly $4,100; in Maryland (with Baltimore City tax), over $6,000 in combined state and local taxes.
      </p>
      <p>
        The practical effect: Tampa RNs comparing offers from Florida vs. out-of-state systems should add
        $3,500–$5,500/year to their Florida offer before making an apples-to-apples comparison. Over a 10-year
        career, that difference compounds to $35,000–$55,000 in after-tax income — roughly equivalent to a $2/hr
        base pay difference.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Tampa vs. Orlando vs. Miami: Which Florida Market Pays Best?</h2>
      <p>
        The three major Florida nurse markets are tightly clustered in gross pay: Tampa averages $73,000, Orlando
        $72,000, Miami $75,000. Miami&apos;s slight gross edge is partially offset by its roughly 15–20% higher cost
        of living — Miami housing runs 25–30% more expensive than Tampa. Orlando benefits from Disney and Universal
        healthcare employment and unique per-diem structures, but its base RN pay is the lowest of the three.
      </p>
      <p>
        For nurses prioritizing cost-of-living-adjusted compensation, Tampa is the strongest choice among Florida&apos;s
        major markets. For nurses prioritizing career ladder access and specialty depth, Tampa General and Moffitt
        offer academic and cancer care paths that Orlando and Miami cannot fully replicate.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses and Shift Differentials in Tampa (2026)</h2>
      <p>
        Sign-on bonuses for specialty RNs are standard at Tampa&apos;s major systems. ICU, OR, and ED nurses at TGH
        and AdventHealth typically see $7,500–$18,000 with 1–2 year commitments. Moffitt offers competitive
        packages for oncology-trained nurses, particularly those with OCN certification. Night shift differential
        at Tampa hospitals runs $3–$6/hr; weekend differential adds $2–$4/hr on top. Nurses who work weekend nights
        at major systems can add $5–$10/hr in combined differentials to their base hourly rate.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state/florida', label: 'Florida RN Salary 2026', desc: 'Full state breakdown by region' },
          { href: '/rn-salary-miami-fl-2026', label: 'Miami RN Salary 2026', desc: 'Compare Tampa to Miami pay' },
          { href: '/orlando-rn-salary-2026', label: 'Orlando RN Salary 2026', desc: 'Tampa vs. Orlando comparison' },
          { href: '/oncology-nurse-salary-2026', label: 'Oncology Nurse Salary 2026', desc: 'Moffitt and oncology specialty pay' },
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
