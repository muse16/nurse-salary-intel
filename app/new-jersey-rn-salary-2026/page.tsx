import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'New Jersey RN Salary 2026: $99,280/yr Explained',
  description:
    'New Jersey RNs earn $99,280/year on average in 2026. See NJ nurse salary by city, hospital, and specialty — Newark, Jersey City, Camden, and beyond.',
  alternates: { canonical: 'https://nursesalaryintel.com/new-jersey-rn-salary-2026' },
  openGraph: {
    title: 'New Jersey RN Salary 2026: $99,280/yr — What NJ Nurses Earn',
    description: 'NJ RN salary by metro area, hospital system, and specialty — third-highest paying state in the country.',
    url: 'https://nursesalaryintel.com/new-jersey-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in New Jersey in 2026?',
    answer:
      'New Jersey registered nurses earn a mean annual wage of $99,280 ($47.73/hour) per the latest available BLS OEWS data (May 2024, published 2025). This makes New Jersey the third-highest paying state for RNs in the country, behind California and Massachusetts. The Northern NJ / New York City metro area drives the state average — RNs in Jersey City, Hoboken, and Newark often earn $104,000–$115,000 at major health systems.',
  },
  {
    question: 'Why do New Jersey nurses earn so much?',
    answer:
      'Several factors push NJ RN salaries above the national average of $89,010: proximity to and competition with New York City wages, high cost of living especially in Northern NJ, strong union presence (Health Professionals and Allied Employees — HPAE — represents thousands of NJ RNs), and the density of major academic medical centers including RWJBarnabas Health, Hackensack Meridian, Atlantic Health, and Cooper Health. New Jersey has also maintained competitive nurse staffing standards that support wage floors.',
  },
  {
    question: 'How does NJ nurse pay compare to New York?',
    answer:
      'New York state RNs earn $101,360/year on average (BLS OEWS May 2024) — slightly above New Jersey\'s $99,280. Within the NYC metro area, Manhattan-based hospital nurses often earn more than their NJ counterparts, but Northern NJ systems such as Hackensack University Medical Center and RWJBarnabas have narrowed the gap with competitive salaries and union contracts. For nurses willing to commute, NJ often offers lower housing costs with comparable pay.',
  },
  {
    question: 'What is the highest-paying city in NJ for nurses?',
    answer:
      'The Newark / Jersey City / Newark NJ-NY-CT metropolitan division (Northern NJ metro) consistently shows the highest RN wages in the state — with experienced staff nurses at major health systems earning $104,000–$118,000. Camden-Philadelphia area RNs typically earn $91,000–$100,000, driven by Cooper University Hospital and Jefferson Health. South Jersey and shore area markets pay $82,000–$92,000 for comparable experience levels.',
  },
  {
    question: 'Do New Jersey nurses need a license in New York too?',
    answer:
      'New Jersey is a member of the Nurse Licensure Compact (NLC), meaning NJ-licensed RNs with a multistate license can practice in other compact states without a separate license. However, New York is NOT a compact state, so NJ nurses who regularly cross the border to work in NY facilities need a separate NY RN license. Many NJ nurses near the border maintain dual licensure. The application process takes 4–8 weeks and costs approximately $143 for the NY license fee.',
  },
  {
    question: 'What hospitals pay the most in New Jersey?',
    answer:
      'Hackensack University Medical Center, RWJBarnabas Health (including Cooperman Barnabas, Robert Wood Johnson University Hospital), and AtlantiCare Regional Medical Center are among the highest-paying NJ hospital systems based on public salary data and nurse-reported figures. Hackensack Meridian Health has been known for competitive RN contracts, particularly in the Bergen County market. Academic medical centers affiliated with Rutgers New Jersey Medical School also offer above-market compensation packages.',
  },
];

const metroData = [
  { label: 'Newark / Jersey City (Northern NJ metro)', avgSalary: 'around $107,000', hourlyRate: 'around $51.50/hr' },
  { label: 'Trenton / Princeton area', avgSalary: 'around $101,000', hourlyRate: 'around $48.50/hr' },
  { label: 'State Mean (New Jersey)', avgSalary: '$99,280', hourlyRate: '$47.73/hr (BLS OEWS May 2024)' },
  { label: 'Camden / South Jersey (Philly metro)', avgSalary: 'around $96,000', hourlyRate: 'around $46/hr' },
  { label: 'Shore / Cape May region', avgSalary: 'around $87,000', hourlyRate: 'around $42/hr' },
];

const regionComparison = [
  { label: 'New York (state mean)', avgSalary: '$101,360', hourlyRate: '$48.73/hr' },
  { label: 'New Jersey (state mean)', avgSalary: '$99,280', hourlyRate: '$47.73/hr' },
  { label: 'Connecticut (state mean)', avgSalary: '$96,990', hourlyRate: '$46.63/hr' },
  { label: 'Massachusetts (state mean)', avgSalary: '$97,760', hourlyRate: '$47.00/hr' },
  { label: 'Maryland (state mean)', avgSalary: '$88,680', hourlyRate: '$42.63/hr' },
  { label: 'Pennsylvania (state mean)', avgSalary: '$79,620', hourlyRate: '$38.28/hr' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: '$42.80/hr' },
];

const specialtyData = [
  { label: 'CRNA (Certified RN Anesthetist)', avgSalary: '$214,000+', hourlyRate: 'Highest-paid nursing role' },
  { label: 'ICU / Critical Care RN', avgSalary: '$104,000 – $120,000', hourlyRate: 'Strong NJ market demand' },
  { label: 'Operating Room RN', avgSalary: '$102,000 – $118,000', hourlyRate: 'Shortage-driven premiums' },
  { label: 'Labor & Delivery RN', avgSalary: '$99,000 – $112,000', hourlyRate: 'High volume at NJ systems' },
  { label: 'Emergency Department RN', avgSalary: '$100,000 – $115,000', hourlyRate: 'Urban trauma centers lead' },
  { label: 'Med-Surg / Telemetry RN', avgSalary: '$91,000 – $103,000', hourlyRate: 'State mean baseline' },
  { label: 'Pediatric RN', avgSalary: '$95,000 – $109,000', hourlyRate: 'Children\'s Hospital of Philadelphia spillover' },
];

export default function NewJerseyRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'New Jersey RN Salary 2026' },
      ]}
      h1="New Jersey RN Salary 2026: $99,280/Year — What Garden State Nurses Earn"
      lastUpdated="May 2026"
      schemaTitle="New Jersey RN Salary 2026"
      schemaDescription="New Jersey RN salary by metro area, hospital, and specialty — third-highest paying state based on BLS OEWS May 2024 data."
      schemaUrl="/new-jersey-rn-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/new-jersey-rn-salary-2026-hero.webp"
        alt="Registered nurse in navy scrubs standing outside a New Jersey hospital entrance, professional posture, urban skyline visible in background, golden hour light, editorial healthcare photography"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          New Jersey registered nurses earn a mean of <strong>$99,280/year ($47.73/hour)</strong> per
          the latest available BLS OEWS data (May 2024, published 2025) — making NJ the{' '}
          <strong>third-highest paying state</strong> in the country for RNs. Northern NJ nurses near
          the NYC metro routinely see <strong>$104,000–$118,000</strong> at major health systems.
          The national RN average is $89,010 — NJ sits <strong>$10,270 above</strong> that benchmark.
        </p>
      </div>

      <p>
        New Jersey punches above its weight in nurse pay. Sandwiched between two of the most
        expensive metro areas in the country — New York City and Philadelphia — NJ health systems
        compete hard for RN talent, and the wages reflect that competition. Add a strong union
        presence (the Health Professionals and Allied Employees union represents tens of thousands
        of NJ nurses) and dense academic medical center infrastructure, and you get one of the most
        favorable RN salary environments in the United States.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">New Jersey RN Salary by Metro Area</h2>
      <p>
        Northern New Jersey — the Newark/Jersey City market — is where NJ nurse salaries peak.
        Bergen, Essex, and Hudson counties sit within commuting distance of Manhattan, and local
        health systems must pay accordingly to retain staff. Trenton and the Princeton corridor
        sit at the state mean; the Jersey Shore and South Jersey markets pay the least
        — though cost of living there is also meaningfully lower.
      </p>
      <SalaryTable
        title="New Jersey RN Salary by Metro Region (2026 Estimates)"
        headers={['Region', 'Estimated Annual Wage', 'Hourly Mean']}
        rows={metroData}
        source="BLS OEWS May 2024 metropolitan and nonmetropolitan area data for SOC 29-1141"
      />

      <Image
        src="/images/new-jersey-rn-salary-2026-comparison.png"
        alt="Bar chart comparing registered nurse annual salary across Northeastern states — New Jersey, New York, Connecticut, Massachusetts, Maryland, Pennsylvania — with national average line"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NJ vs. Northeast Neighbor States</h2>
      <p>
        New Jersey sits near the top of the Northeast salary stack — ahead of Connecticut, Maryland,
        and Pennsylvania, and within $2,080 of New York state&apos;s mean. For nurses considering
        relocation within the region, NJ offers near-NY pay with meaningfully lower housing costs
        than Manhattan or Brooklyn — though Bergen and Hudson counties still command a premium.
      </p>
      <SalaryTable
        title="RN Mean Annual Wage — Northeast Region (BLS OEWS May 2024)"
        headers={['State', 'Annual Mean Wage', 'Hourly Mean']}
        rows={regionComparison}
        source="BLS OEWS May 2024, published April 2025 (SOC 29-1141)"
      />

      <Image
        src="/images/new-jersey-rn-salary-2026-hospital.webp"
        alt="Two registered nurses in a brightly lit New Jersey hospital corridor reviewing patient information on a tablet, collegial and professional, no text, no logos"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">NJ Nurse Salary by Specialty</h2>
      <p>
        Specialty premiums in New Jersey are substantial. ICU, OR, and Labor &amp; Delivery nurses
        at major NJ health systems often earn $15,000–$25,000 above the state mean through
        specialty differentials, sign-on bonuses, and overtime eligibility. The CRNA market
        in NJ is particularly strong — given the density of surgical volume at NJ hospitals —
        with some CRNA packages reaching $250,000+ at high-volume facilities.
      </p>
      <SalaryTable
        title="New Jersey RN Salary by Specialty (2026 Estimates)"
        headers={['Specialty', 'Estimated Annual Range', 'Notes']}
        rows={specialtyData}
        source="NurseSalaryIntel job posting analysis + BLS OEWS May 2024 state-level specialty data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">HPAE Union Contracts and What They Mean for NJ Nurses</h2>
      <p>
        The Health Professionals and Allied Employees (HPAE) is New Jersey&apos;s largest healthcare
        union, representing nurses at major systems including Hackensack Meridian Health, Overlook
        Medical Center, and several RWJBarnabas facilities. HPAE contracts typically include
        structured wage scales (step increases based on years of service), guaranteed minimums
        for charge nurse differentials, overtime protections, and mandatory shift differential
        rates. For NJ nurses at unionized facilities, HPAE membership is often one of the strongest
        negotiating levers available — base pay floors under HPAE contracts have historically run
        5–12% above non-union market rates at comparable facilities.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiating Your NJ Nurse Salary</h2>
      <p>
        NJ&apos;s tight RN labor market gives nurses meaningful leverage. Health systems in
        Northern NJ and the Camden corridor regularly offer sign-on bonuses of $10,000–$20,000
        for ICU, OR, and ED nurses. If you are negotiating a non-union offer, the benchmark
        is the state mean — $99,280 — and specialty rates run $5,000–$25,000 above that.
        Shift differential ranges in NJ: evenings typically $3–$5/hour, nights $5–$8/hour,
        weekends $3–$5/hour (stackable at most systems). Total comp including differentials
        and overtime at a full-time NJ ICU nurse position often runs $115,000–$135,000.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/new-york-city-rn-salary-2026', label: 'NYC RN Salary 2026', desc: 'Cross-river comparison — Manhattan vs. NJ' },
          { href: '/philadelphia-rn-salary-2026', label: 'Philadelphia RN Salary 2026', desc: 'South Jersey\'s main competitor market' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to negotiate your NJ offer' },
          { href: '/shift-differential-nurse-pay-2026', label: 'Shift Differential Pay 2026', desc: 'NJ differential rates in context' },
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
          published April 2025. SOC 29-1141: Registered Nurses — New Jersey state estimates.{' '}
          <a href="https://www.bls.gov/oes/current/oes_nj.htm" className="underline" target="_blank" rel="noopener noreferrer">
            bls.gov/oes/current/oes_nj.htm
          </a>
        </p>
        <p>
          Health Professionals and Allied Employees (HPAE), collective bargaining information.{' '}
          <a href="https://www.hpae.org/" className="underline" target="_blank" rel="noopener noreferrer">
            hpae.org
          </a>
        </p>
        <p>
          New Jersey Board of Nursing, license and compact information.{' '}
          <a href="https://www.njconsumeraffairs.gov/nur/" className="underline" target="_blank" rel="noopener noreferrer">
            njconsumeraffairs.gov/nur
          </a>
        </p>
      </div>
    </SEOPageLayout>
  );
}
