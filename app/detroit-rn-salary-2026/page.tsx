import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Detroit RN Salary 2026: How Much Do Nurses Make in Detroit, MI?',
  description:
    'Detroit RNs earn $82,000/yr ($39.42/hr) on average in 2026. Henry Ford Health pays $80K–$102K. See salary by hospital, specialty, and experience — with Michigan tax breakdown.',
  alternates: { canonical: 'https://nursesalaryintel.com/detroit-rn-salary-2026' },
  openGraph: {
    title: 'Detroit RN Salary 2026: $82,000/yr Average + Hospital Comparison',
    description: 'Detroit nurse salary by hospital, specialty, and experience — with Michigan income tax take-home analysis.',
    url: 'https://nursesalaryintel.com/detroit-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Detroit, MI in 2026?',
    answer:
      'Detroit RNs earn an average of $82,000/year ($39.42/hr) in 2026, based on latest available BLS OEWS data (May 2024). The Detroit-Warren-Dearborn MSA runs slightly above the Michigan state average of $76,000/year, reflecting the concentration of major academic and specialty hospital systems in the metro.',
  },
  {
    question: 'Which hospitals pay nurses the most in Detroit?',
    answer:
      'Henry Ford Health (Henry Ford Hospital in New Center) and Detroit Medical Center (DMC) are the two largest systems and anchor the high end of the Detroit nurse market. Henry Ford pays $80,000–$102,000 for experienced RNs; DMC (owned by Tenet Healthcare) pays $78,000–$98,000. Beaumont Health (now Corewell Health East) offers competitive rates in suburban Oakland and Macomb counties.',
  },
  {
    question: 'How does Detroit RN pay compare to other Midwest cities?',
    answer:
      'Detroit ($82,000) compares favorably to Cleveland ($80,000) and Indianapolis ($76,000), and is below Chicago ($89,000) and Minneapolis ($91,000). Detroit\'s cost of living is among the lowest of any major US metro, which significantly improves purchasing power relative to its gross salary. Housing in Detroit suburbs runs $1,100–$1,600/month for a one-bedroom — substantially below Midwest peers.',
  },
  {
    question: 'What is the take-home pay for a Detroit RN after Michigan taxes?',
    answer:
      "Michigan has a flat 4.25% state income tax, making it one of the simpler state tax structures to calculate. On $82,000 gross, a Detroit RN pays approximately $3,485 in Michigan state income tax. Detroit city income tax (1% for residents) applies to nurses who live within Detroit city limits — most Detroit-area nurses live in suburbs like Dearborn, Livonia, Royal Oak, or Troy, which have no city income tax.",
  },
  {
    question: 'Are there good nursing opportunities in Detroit for new grads?',
    answer:
      'Yes. Henry Ford Health, Corewell Health (Beaumont), and Ascension Michigan all actively recruit new grad RNs and offer structured residency programs. New grad starting salaries in Detroit run $62,000–$72,000, which stretches considerably further than the same salary in coastal markets. The Detroit metro also has multiple large hospital systems competing for nurses, which creates better negotiating conditions than single-system markets.',
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$62,000 – $72,000', hourlyRate: '$29.81 – $34.62/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$76,000 – $90,000', hourlyRate: '$36.54 – $43.27/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$88,000 – $104,000', hourlyRate: '$42.31 – $50.00/hr' },
  { label: 'Top 10% earners', avgSalary: '$110,000+', hourlyRate: '$52.88+/hr' },
];

const hospitalData = [
  { label: 'Henry Ford Hospital', avgSalary: '$80,000 – $102,000', hourlyRate: 'Level 1 Trauma; academic; PSLF eligible' },
  { label: 'Detroit Medical Center (DMC)', avgSalary: '$78,000 – $98,000', hourlyRate: 'Tenet; Level 1 Trauma (Detroit Receiving)' },
  { label: 'Corewell Health East (Beaumont)', avgSalary: '$76,000 – $96,000', hourlyRate: 'Suburban Oakland + Macomb; Magnet' },
  { label: 'Ascension St. John Hospital', avgSalary: '$74,000 – $92,000', hourlyRate: 'East suburban Detroit' },
  { label: 'Sinai-Grace Hospital (DMC)', avgSalary: '$72,000 – $88,000', hourlyRate: 'Northwest Detroit; community hospital' },
  { label: 'VA Ann Arbor (40 min)', avgSalary: '$82,000 – $106,000', hourlyRate: 'Federal pay scale; PSLF; strong benefits' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$78,000', hourlyRate: 'Base' },
  { label: 'Psych / Behavioral Health', avgSalary: '$84,000', hourlyRate: '+$6,000' },
  { label: 'L&D', avgSalary: '$84,000', hourlyRate: '+$6,000' },
  { label: 'ER', avgSalary: '$88,000', hourlyRate: '+$10,000' },
  { label: 'OR / Surgical', avgSalary: '$90,000', hourlyRate: '+$12,000' },
  { label: 'ICU / Critical Care', avgSalary: '$95,000', hourlyRate: '+$17,000' },
  { label: 'NICU', avgSalary: '$92,000', hourlyRate: '+$14,000' },
  { label: 'CRNA (Certified)', avgSalary: '$214,000+', hourlyRate: 'Advanced practice' },
];

export default function DetroitRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Michigan RN Salary', href: '/rn-salary-by-state/michigan' },
        { label: 'Detroit RN Salary 2026' },
      ]}
      h1="Detroit RN Salary 2026: How Much Do Nurses Make in Detroit, Michigan?"
      lastUpdated="May 2026"
      schemaTitle="Detroit RN Salary 2026"
      schemaDescription="Average RN salary in Detroit, MI by hospital, specialty, and experience level in 2026."
      schemaUrl="/detroit-rn-salary-2026"
      datePublished="2026-05-19"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          Detroit RNs earn <strong>$82,000/year ($39.42/hr)</strong> on average in 2026 — above the Michigan state
          average of $76,000/year. Henry Ford Health leads the market at <strong>$80,000–$102,000</strong>.
          Michigan&apos;s flat <strong>4.25% state income tax</strong> is among the more straightforward in the
          Midwest, and Detroit&apos;s low cost of living means the purchasing power of an $82,000 salary stretches
          significantly further than the same gross pay in Chicago, Minneapolis, or any coastal market.
        </p>
      </div>

      <Image
        src="/images/detroit-rn-salary-2026-hero.webp"
        alt="Registered nurse in scrubs standing outside a modern Detroit Michigan hospital — professional and confident, urban skyline in the soft background"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        Detroit&apos;s healthcare market is anchored by two competing large systems — Henry Ford Health and the
        Detroit Medical Center — plus the suburban sprawl of Corewell Health (formerly Beaumont) and Ascension
        Michigan. The result is a competitive multi-system market where nurses have genuine leverage: unlike
        single-system markets, Detroit-area nurses can play competing offers against each other at hire and
        at contract renewal. The metro also benefits from proximity to Ann Arbor and the University of Michigan
        Health System, which draws specialty nurses but also sets a ceiling on what competing systems must pay
        to retain talent.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Detroit RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Detroit RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Detroit RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/detroit-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Detroit area hospitals — Henry Ford, DMC, Corewell Beaumont, Ascension, and VA Ann Arbor versus national average"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Henry Ford Hospital in New Center is the highest-paying system in Detroit proper, operating as both a Level 1
        Trauma Center and an academic medical center with PSLF-eligible federal loan forgiveness for qualifying nurses.
        Detroit Medical Center — which includes Detroit Receiving Hospital (Level 1 Trauma) and Children&apos;s
        Hospital of Michigan — is the other major anchor. Corewell Health East (the Beaumont successor system)
        dominates Oakland County suburbs and competes aggressively for experienced nurses with sign-on bonuses
        and Magnet hospital status.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Detroit, MI"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Detroit RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/detroit-rn-salary-2026-hospital.webp"
        alt="Nurse and physician reviewing a patient monitor together in a modern Detroit Michigan hospital ICU — professional, focused clinical setting"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Detroit RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Michigan Taxes: Detroit Nurse Take-Home Pay</h2>
      <p>
        Michigan has a flat 4.25% state income tax — one of the simpler and more predictable state tax structures
        in the Midwest. On $82,000 gross, a Michigan RN pays approximately $3,485 in state income tax. Nurses who
        live within Detroit city limits also pay a 1% Detroit city income tax ($820 on $82,000); the vast majority
        of Detroit-area hospital nurses live in suburbs — Dearborn, Livonia, Royal Oak, Troy, Southfield — which
        have no city income tax.
      </p>
      <p>
        Michigan does not tax Social Security income and has relatively modest property taxes in suburban Detroit
        compared to Illinois (Chicago suburbs) or New York. For nurses modeling total cost of living, the Detroit
        metro consistently ranks among the most affordable for housing: median rent for a one-bedroom runs
        $1,100–$1,600/month in suburban communities, compared to $1,600–$2,200 in comparable Chicago suburbs
        and $1,800–$2,600 in Minneapolis.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Detroit vs. Chicago: Midwest Salary Comparison</h2>
      <p>
        Chicago RNs average $89,000/year — about $7,000 more than Detroit on a gross basis. However, Illinois
        has a flat 4.95% state income tax (vs. Michigan&apos;s 4.25%), and Chicago housing costs run 30–45%
        higher than suburban Detroit. Nurses running a true apples-to-apples comparison often find that the
        Detroit take-home advantage partially or fully offsets the Chicago gross pay premium, particularly for
        nurses with families who value square footage over downtown proximity.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses and Shift Differentials in Detroit (2026)</h2>
      <p>
        Sign-on bonuses are competitive across Detroit&apos;s major systems, particularly for specialty nurses.
        ICU, OR, and ED nurses at Henry Ford and Corewell typically see $8,000–$18,000 with 1–2 year commitments.
        Night shift differential runs $3.50–$6.50/hr at most Detroit systems; weekend differentials add $2–$4/hr.
        Nurses negotiating at DMC or Henry Ford should ask specifically about step-placement for lateral hires —
        both systems have wage scales where an experienced nurse from another system may be able to negotiate
        a higher step than the initial offer reflects.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/psychiatric-nurse-salary-2026', label: 'Psychiatric Nurse Salary 2026', desc: 'Psych RN pay — strong in Michigan' },
          { href: '/cleveland-rn-salary-2026', label: 'Cleveland RN Salary 2026', desc: 'Compare Detroit to Cleveland' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to negotiate in a multi-system market' },
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
