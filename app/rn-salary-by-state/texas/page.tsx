import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Texas RN Salary 2026: $82,000/yr + Hourly Rates by City',
  description:
    'Texas RNs average $82,000/yr ($39.42/hr) in 2026. See pay by city, specialty, and experience level — plus sign-on bonuses and how to negotiate your next contract.',
};

const faqs = [
  { question: 'How much do nurses make in Texas?', answer: 'The average RN salary in Texas is $81,510/year ($39.19/hr) in 2026. Metro areas like Houston, Dallas, and Austin pay $85,000–$95,000 for experienced nurses.' },
  { question: 'What city in Texas pays nurses the most?', answer: 'Houston pays Texas RNs the most at $87,500/year, driven by the Texas Medical Center. Dallas-Fort Worth and Austin are close behind.' },
  { question: 'Is Texas good for nursing jobs?', answer: 'Yes. Texas has no state income tax, strong population growth, and one of the largest healthcare economies in the country. Texas consistently has 15,000+ open RN positions.' },
  { question: 'How does Texas nurse pay compare to California?', answer: 'California RNs earn $42,500 more per year on average. But after California state income tax (up to 13.3%) and higher cost of living, Texas nurses often have equivalent take-home pay with lower expenses.' },
  { question: 'Do travel nurses earn more in Texas?', answer: 'Yes. Travel RNs in Texas typically earn $2,200–$2,900/week on assignment. Rural Texas and Level I trauma centers in major metros offer the highest contracts. Texas is a Compact state, making it easy for out-of-state nurses to pick up assignments.' },
];

const cityData = [
  { label: 'Houston', avgSalary: '$87,500', hourlyRate: '$42.07/hr' },
  { label: 'Dallas-Fort Worth', avgSalary: '$85,200', hourlyRate: '$40.96/hr' },
  { label: 'Austin', avgSalary: '$84,800', hourlyRate: '$40.77/hr' },
  { label: 'Fort Worth', avgSalary: '$83,500', hourlyRate: '$40.14/hr' },
  { label: 'San Antonio', avgSalary: '$78,900', hourlyRate: '$37.93/hr' },
  { label: 'El Paso', avgSalary: '$74,500', hourlyRate: '$35.82/hr' },
  { label: 'State Average', avgSalary: '$81,510', hourlyRate: '$39.19/hr' },
];

const experienceData = [
  { label: 'Entry Level (0–2 yrs)', avgSalary: '$60,000–$70,000', hourlyRate: '$29–$34/hr' },
  { label: 'Mid-Career (3–5 yrs)', avgSalary: '$76,000–$88,000', hourlyRate: '$37–$42/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$92,000–$105,000', hourlyRate: '$44–$50/hr' },
];

const hospitalData = [
  { label: 'Texas Medical Center (Houston)', avgSalary: '$88,000–$102,000', hourlyRate: 'Largest med complex in world, top payer' },
  { label: 'UT Southwestern Medical Center (Dallas)', avgSalary: '$85,000–$98,000', hourlyRate: 'Academic medical center, strong benefits' },
  { label: 'Baylor Scott & White Health (statewide)', avgSalary: '$82,000–$96,000', hourlyRate: 'Largest not-for-profit system in TX' },
  { label: 'HCA Texas (statewide)', avgSalary: '$80,000–$94,000', hourlyRate: 'Large employer, sign-on bonuses common' },
  { label: 'University Health (San Antonio)', avgSalary: '$78,000–$90,000', hourlyRate: 'County system, strong pension' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Data sourced from US Bureau of Labor Statistics OEWS May 2024, adjusted for 3–4% annual wage growth projections into 2026. City-level and hospital data derived from metro-area OEWS summaries and NurseSalaryIntel market research. Travel nursing rates based on current market surveys. Figures are estimates and vary by employer, experience, certifications, location, and contract terms.';

export default function TexasRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Texas' },
      ]}
      h1="RN Salary in Texas — 2026 Nurse Pay Guide"
      lastUpdated="May 2026"
      author={author}
      sources={sources}
      methodology={methodology}
      schemaTitle="RN Salary in Texas 2026"
      schemaDescription="Texas RN salary by city, no-tax advantage, and comparisons for 2026."
      schemaUrl="/rn-salary-by-state/texas"
      stateName="Texas"
      stateSlug="texas"
      faqs={faqs}
    >
      <p>
        Texas is one of the best states for registered nurses on a cost-adjusted basis. With{' '}
        <strong>no state income tax</strong>, strong demand, and lower cost of living than coastal states,
        Texas RNs often take home as much as California nurses earning $40,000+ more per year. The average
        Texas RN earns <strong>$81,510/year ($39.19/hr)</strong> in 2026, with Houston metro nurses reaching
        $87,500+.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Experience Level in Texas (2026)</h2>
      <p>
        Texas has one of the largest nursing labor markets in the country. Competition for experienced nurses —
        particularly in ICU, OR, and ER — is intense, with major hospital systems offering significant pay bumps
        and sign-on bonuses to attract nurses with 3+ years of experience.
      </p>
      <SalaryTable
        title="Texas RN Salary by Experience (2026)"
        headers={['Experience Tier', 'Estimated Annual Base', 'Estimated Hourly']}
        rows={experienceData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary by Texas City (2026)</h2>
      <p>
        Texas nurse pay is highest in its major metro areas. Houston leads due to the concentration of large
        hospital systems in the Texas Medical Center — the largest medical complex in the world. Dallas-Fort Worth,
        Austin, and Fort Worth are close behind, all benefiting from strong population growth driving demand.
      </p>
      <SalaryTable
        title="RN Salary by Texas City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Hospitals in Texas</h2>
      <p>
        Houston&apos;s Texas Medical Center is the largest concentration of healthcare employers in the world,
        driving the highest RN salaries in the state. UT Southwestern in Dallas and Baylor Scott &amp; White are
        strong competitors statewide for experienced nurses.
      </p>
      <SalaryTable
        title="Top Hospitals — Texas Nurse Pay (2026)"
        headers={['Hospital System', 'Avg. RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Texas Nurse Pay vs. Cost of Living</h2>
      <p>
        Texas has housing costs 25–40% below the national average (outside of Austin). Combined with no state income
        tax, Texas nurses keep more of what they earn. A $80,000 Texas salary equals roughly $105,000 in California
        after taxes and cost-of-living adjustment.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">No State Income Tax Advantage for Texas Nurses</h2>
      <p>
        Texas is one of seven states with no state income tax. On an $85,000 salary, that saves a Texas nurse
        $4,500–$8,500/year compared to nurses in California or New York.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in Texas</h2>
      <p>
        In Texas, CRNAs earn $198,000, Nurse Practitioners $118,000, and ICU nurses $82,000. The Texas Medical
        Center in Houston is a major driver of specialty nursing pay, particularly for CRNA and critical care roles.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Texas</h2>
      <p>
        Texas is a top-5 destination for travel nursing, with weekly rates of $2,200–$2,900. Rural Texas and
        Level I trauma centers in major metros offer the highest contracts. Texas is a Compact state, making it
        easy for nurses from other states to pick up Texas assignments without a separate license application.
      </p>
      <Link
        href="/travel-nurse-salary-guide"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Travel Nurse Salary Guide →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in Texas</h2>
      <p>
        Texas hospitals offer night shift differentials of 12–20% above base pay. On an $81,510 average salary,
        consistent night nurses earn $9,800–$16,300 more per year. Weekend differentials typically add 8–15% for
        Saturday and Sunday shifts. See our complete{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>
      <p>
        Overtime in Texas is paid at 1.5x the base hourly rate for hours beyond 40 per week. Because Texas has no
        state income tax, overtime take-home pay is better here than in comparable-salary states like California or
        New York. Nurses working one extra shift per week can add $12,000–$20,000 annually on top of base pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — Texas</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in Texas?</p>
          <p className="text-on-surface-variant">The average RN salary in Texas is $81,510/year ($39.19/hr) in 2026. Houston metro nurses average $84,000–$94,000, and experienced specialty nurses often exceed $95,000. Compare with <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link> or <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">RN salary in Florida</Link>. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model Texas pay.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in Texas?</p>
          <p className="text-on-surface-variant">Texas RNs average $39.19/hr statewide. Houston, Dallas, and Austin nurses earn $40–$45/hr, while rural Texas markets average $34–$38/hr.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in Texas?</p>
          <p className="text-on-surface-variant">See <Link href="/salary/texas/houston" className="text-primary hover:underline">nurse salary in Houston</Link>, averaging $84,000–$94,000/year, and compare with <Link href="/salary/texas/dallas" className="text-primary hover:underline">nurse salary in Dallas</Link> at $82,000–$92,000/year. The Texas Medical Center drives Houston to the top.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link href="/rn-salary-by-state/florida" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Compare with Florida →</span>
        </Link>
        <Link href="/salary-negotiation/how-to-negotiate-nursing-salary" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">How to Negotiate Nursing Salary →</span>
        </Link>
        <Link href="/rn-salary-by-state" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">RN Salary by State →</span>
        </Link>
        <Link href="/travel-nurse-salary-guide" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Travel Nurse Salary Guide →</span>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
