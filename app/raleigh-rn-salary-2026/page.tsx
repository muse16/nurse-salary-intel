import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Raleigh RN Salary 2026: Research Triangle Pay & Top Hospital Rates',
  description:
    'Raleigh RNs earn around $78,000–$84,000/yr in 2026. WakeMed, Duke Raleigh, and UNC Rex pay data, specialty rates, and Research Triangle negotiation tips.',
  alternates: { canonical: 'https://nursesalaryintel.com/raleigh-rn-salary-2026' },
  openGraph: {
    title: 'Raleigh RN Salary 2026: Research Triangle Pay & Top Hospital Rates',
    description:
      'Raleigh RNs earn around $78,000–$84,000/yr. WakeMed, Duke Raleigh, and UNC Rex pay data plus Research Triangle negotiation insights.',
    url: 'https://nursesalaryintel.com/raleigh-rn-salary-2026',
  },
};

const sources = [
  { title: 'BLS Occupational Employment and Wage Statistics (OEWS), May 2024', url: 'https://www.bls.gov/oes/current/oes291141.htm' },
  { title: 'BLS OEWS North Carolina State Data, May 2024', url: 'https://www.bls.gov/oes/current/oes_nc.htm' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };

const methodology =
  'Raleigh-area salary figures are derived from BLS OEWS May 2024 North Carolina state-level RN mean wage ($72,970/yr, $35.08/hr). A Raleigh-Cary metro premium of approximately 8–12% above the state mean has been applied based on historical metro-to-state wage differentials and active job posting analysis. Hospital-specific ranges reflect publicly posted salary bands and nurse-reported figures from 2025–2026. All figures are estimates — verify current rates directly with each employer.';

const hospitalData = [
  { label: 'Duke Raleigh Hospital', avgSalary: 'Around $80,000–$94,000/yr', hourlyRate: '~$38–$45/hr' },
  { label: 'UNC Rex Healthcare', avgSalary: 'Around $78,000–$91,000/yr', hourlyRate: '~$37–$44/hr' },
  { label: 'WakeMed Raleigh Campus', avgSalary: 'Around $76,000–$90,000/yr', hourlyRate: '~$37–$43/hr' },
  { label: 'WakeMed Cary Hospital', avgSalary: 'Around $74,000–$88,000/yr', hourlyRate: '~$36–$42/hr' },
  { label: 'Novant Health (Greater Raleigh)', avgSalary: 'Around $73,000–$86,000/yr', hourlyRate: '~$35–$41/hr' },
  { label: 'NC State Average (BLS May 2024)', avgSalary: '$72,970/yr', hourlyRate: '$35.08/hr' },
];

const specialtyData = [
  { label: 'ICU / Critical Care RN', avgSalary: 'Around $86,000–$98,000/yr', hourlyRate: '~$41–$47/hr' },
  { label: 'OR / Surgical RN', avgSalary: 'Around $82,000–$94,000/yr', hourlyRate: '~$39–$45/hr' },
  { label: 'ER / Emergency RN', avgSalary: 'Around $80,000–$92,000/yr', hourlyRate: '~$38–$44/hr' },
  { label: 'L&D / OB RN', avgSalary: 'Around $78,000–$88,000/yr', hourlyRate: '~$37–$42/hr' },
  { label: 'Telemetry / PCU RN', avgSalary: 'Around $74,000–$84,000/yr', hourlyRate: '~$36–$40/hr' },
  { label: 'Med-Surg RN', avgSalary: 'Around $68,000–$78,000/yr', hourlyRate: '~$33–$37/hr' },
  { label: 'New Grad RN', avgSalary: 'Around $60,000–$68,000/yr', hourlyRate: '~$29–$33/hr' },
];

const experienceData = [
  { label: 'New Graduate (0–2 yrs)', avgSalary: 'Around $60,000–$68,000/yr', hourlyRate: '~$29–$33/hr' },
  { label: 'Early Career (2–5 yrs)', avgSalary: 'Around $70,000–$80,000/yr', hourlyRate: '~$34–$38/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: 'Around $78,000–$88,000/yr', hourlyRate: '~$37–$42/hr' },
  { label: 'Senior RN (10+ yrs)', avgSalary: 'Around $86,000–$96,000/yr', hourlyRate: '~$41–$46/hr' },
  { label: 'Charge RN Stipend', avgSalary: '+$3,000–$6,000/yr', hourlyRate: '+$1.50–$3/hr typical' },
];

const cityComparisonData = [
  { label: 'Durham (Duke Health)', avgSalary: 'Around $82,000–$90,000/yr', hourlyRate: '~$39–$43/hr' },
  { label: 'Chapel Hill (UNC Medical Ctr)', avgSalary: 'Around $79,000–$87,000/yr', hourlyRate: '~$38–$42/hr' },
  { label: 'Raleigh Metro', avgSalary: 'Around $78,000–$84,000/yr', hourlyRate: '~$37–$40/hr' },
  { label: 'Charlotte (Atrium, Novant)', avgSalary: 'Around $80,000–$86,000/yr', hourlyRate: '~$38–$41/hr' },
  { label: 'Greensboro / Winston-Salem', avgSalary: 'Around $72,000–$78,000/yr', hourlyRate: '~$35–$37/hr' },
  { label: 'NC State Average (BLS May 2024)', avgSalary: '$72,970/yr', hourlyRate: '$35.08/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Raleigh, NC in 2026?',
    answer:
      'Raleigh-area RNs earn around $78,000–$84,000/year in 2026 — approximately 8–12% above the North Carolina state average of $72,970/yr per BLS OEWS May 2024. Duke Raleigh Hospital and UNC Rex Healthcare pay above the metro average for specialty roles. New grads typically start at $60,000–$68,000.',
  },
  {
    question: 'Which Raleigh hospital pays nurses the most?',
    answer:
      'Duke Raleigh Hospital generally leads the Raleigh market at around $80,000–$94,000/yr for experienced RNs, followed closely by UNC Rex Healthcare ($78,000–$91,000) and WakeMed Raleigh Campus ($76,000–$90,000). Duke\'s affiliation with the larger Duke Health academic system provides access to stronger step scales and specialty differentials.',
  },
  {
    question: 'How does Raleigh RN pay compare to Charlotte?',
    answer:
      'Charlotte edges Raleigh slightly at around $80,000–$86,000/yr compared to Raleigh\'s $78,000–$84,000 — a gap of roughly $2,000–$4,000/yr. Charlotte\'s higher pay reflects the Atrium Health and Novant Health market competition. However, Raleigh\'s Research Triangle offers more academic and specialty nursing opportunities through Duke Health and UNC Health.',
  },
  {
    question: 'What is the highest-paying nursing specialty in Raleigh?',
    answer:
      'ICU and critical care nurses in Raleigh earn the most among RN specialties at around $86,000–$98,000/yr. OR and ER nurses follow at $80,000–$94,000. CRNAs in the Raleigh-Durham area earn $200,000–$220,000+ — the highest-paid nursing role in the region. Duke Raleigh and UNC Rex both offer strong CRNA and NP programs for career advancement.',
  },
  {
    question: 'Do Raleigh hospitals offer sign-on bonuses for nurses?',
    answer:
      'Yes. WakeMed, UNC Rex, and Duke Raleigh have all offered sign-on bonuses ranging from $5,000 for Med-Surg to $10,000–$18,000 for ICU, OR, and ER specialties during periods of high demand. Bonus availability changes with staffing conditions — always ask about current offers during the interview process and review the vesting schedule and payback terms before signing.',
  },
  {
    question: 'Is Raleigh a good city for nurses?',
    answer:
      'Raleigh ranks consistently among the top mid-tier nursing markets in the Southeast. The Research Triangle\'s concentration of academic medical centers (Duke, UNC) provides strong specialty development and career growth opportunities. North Carolina is a Nurse Licensure Compact (NLC) state, enabling nurses to work across participating states without additional licensure. Cost of living in Raleigh is moderate — lower than Northern Virginia and Charlotte — which improves real purchasing power relative to base salary.',
  },
  {
    question: 'How much do travel nurses make in Raleigh?',
    answer:
      'Travel nurses in Raleigh typically earn $2,200–$3,200/week gross ($114,000–$166,000 annualized) depending on specialty and agency. ICU and OR travel contracts command the highest rates. Note that travel packages include housing stipends and per diems that are tax-advantaged — the taxable base rate is lower than the gross figure. Use our travel nurse pay calculator to estimate true take-home.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Raleigh RN Salary 2026', item: 'https://nursesalaryintel.com/raleigh-rn-salary-2026/' },
  ],
};

export default function RaleighRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Salary Guides', href: '/blog' },
          { label: 'Raleigh RN Salary 2026' },
        ]}
        h1="Raleigh RN Salary 2026: What Research Triangle Nurses Actually Earn"
        lastUpdated="June 2026"
        author={author}
        sources={sources}
        methodology={methodology}
        schemaTitle="Raleigh RN Salary 2026"
        schemaDescription="Raleigh RNs earn around $78,000–$84,000/year in 2026. WakeMed, Duke Raleigh, and UNC Rex pay data with specialty rates and experience breakdown."
        schemaUrl="/raleigh-rn-salary-2026"
        datePublished="2026-06-01"
        faqs={faqs}
      >
        {/* Quick Answer */}
        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            Raleigh-area RNs earn <strong>around $78,000–$84,000/year</strong> in 2026 — about 8–12% above the North Carolina
            state average of <strong>$72,970/yr ($35.08/hr)</strong> per BLS OEWS May 2024. Duke Raleigh Hospital leads
            at <strong>around $80,000–$94,000</strong>, followed by UNC Rex Healthcare and WakeMed. New grads start at
            $60,000–$68,000; ICU and OR nurses with 5+ years reach $86,000–$98,000.
          </p>
        </div>

        {/* Hero Image */}
        <Image
          src="/images/raleigh-rn-salary-2026-hero.webp"
          alt="Registered nurse in navy scrubs standing outside a modern Research Triangle hospital in Raleigh, North Carolina, warm natural light, professional editorial healthcare photography"
          width={1200}
          height={630}
          sizes="(max-width: 1024px) 100vw, 896px"
          className="rounded-xl w-full"
          priority
        />

        <h2>Raleigh RN Salary by Hospital (2026)</h2>
        <p>
          The Raleigh market is anchored by three competing health systems — Duke Health, UNC Health, and WakeMed —
          plus a growing Novant Health presence. That competition keeps wages above the statewide average and creates
          meaningful leverage when negotiating sign-on bonuses and specialty differentials.
        </p>

        <SalaryTable
          title="Raleigh-Area RN Salary by Hospital (2026 Estimates)"
          headers={['Hospital', 'Est. Annual Salary', 'Hourly Rate']}
          rows={hospitalData}
          source="Derived from BLS OEWS May 2024 NC state data + metro premium analysis and job posting review"
        />

        {/* Data Chart */}
        <Image
          src="/images/raleigh-rn-salary-2026-comparison.png"
          alt="Bar chart comparing RN salaries across Raleigh, Durham, Chapel Hill, Charlotte, Greensboro, and the NC state average in 2026"
          width={800}
          height={450}
          sizes="(max-width: 1024px) 100vw, 800px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>How Raleigh Compares to Other NC Cities</h2>
        <p>
          Within North Carolina, Durham leads salary rankings due to the Duke University Hospital anchor — one of
          the highest-paying academic medical centers in the Southeast. Raleigh sits just below Durham and Charlotte,
          benefiting from the Research Triangle's density of academic and specialty programs without Charlotte's
          higher cost of living.
        </p>

        <SalaryTable
          title="RN Salary: Raleigh vs. Other NC Cities (2026 Estimates)"
          headers={['City / Market', 'Est. Annual Salary', 'Hourly Rate']}
          rows={cityComparisonData}
          source="BLS OEWS May 2024 NC state mean; city estimates apply metro premiums from historical wage differential data"
        />

        {/* Photorealistic Inline Image */}
        <Image
          src="/images/raleigh-rn-salary-2026-hospital.webp"
          alt="Two nurses in scrubs reviewing patient monitors in a softly lit ICU room at a Raleigh Research Triangle hospital, professional clinical setting"
          width={600}
          height={800}
          sizes="(max-width: 1024px) 100vw, 448px"
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2>Raleigh RN Salary by Specialty (2026)</h2>
        <p>
          Specialty choice is the biggest lever on Raleigh nurse pay. ICU nurses at Duke Raleigh and UNC Rex can
          earn <strong>$86,000–$98,000/yr</strong> — nearly $30,000 more than a new grad on a Med-Surg floor.
          CCRN certification adds an average of $4,000–$7,000/yr in the Raleigh market and accelerates promotion
          to charge and preceptor roles.
        </p>

        <SalaryTable
          title="Raleigh RN Salary by Specialty (2026 Estimates)"
          headers={['Specialty', 'Est. Annual Salary', 'Hourly Rate']}
          rows={specialtyData}
          source="BLS OEWS May 2024 NC data; specialty premiums from job posting analysis and nurse-reported compensation"
        />

        <h2>Raleigh RN Salary by Experience Level</h2>
        <p>
          Experience progression in the Raleigh market follows a predictable curve. The biggest jumps typically
          occur at the 2-year and 5-year marks, when step increases and specialty certification eligibility align.
          Charge nurse stipends of $1.50–$3/hr are stackable with shift differentials at most Raleigh systems.
        </p>

        <SalaryTable
          title="Raleigh RN Salary by Experience (2026 Estimates)"
          headers={['Experience Level', 'Est. Annual Salary', 'Hourly Rate']}
          rows={experienceData}
          source="Derived from BLS OEWS May 2024 NC state data with metro adjustment; experience bands from job posting review"
        />

        <h2>Shift Differentials and Overtime in Raleigh</h2>
        <p>
          Night shift differentials at Raleigh-area hospitals typically run <strong>$3–$6/hr above base rate</strong>.
          Weekend differentials add another $2–$4/hr, and the two are usually stackable — a night weekend shift
          can add $5–$10/hr on top of your base. At a $37/hr base, a nurse working consistent nights and weekends
          can push effective hourly earnings to $44–$47/hr, adding $15,000–$20,000+ annually without changing
          employers. See our{' '}
          <Link href="/night-shift-differential-nurses" className="text-primary underline">
            complete night shift differential guide
          </Link>{' '}
          for the full math.
        </p>

        <h2>Sign-On Bonuses and Total Compensation</h2>
        <p>
          All three major Raleigh systems have offered sign-on bonuses in recent hiring cycles. ICU, OR, and ER
          positions at Duke Raleigh and UNC Rex have posted bonuses of <strong>$10,000–$18,000</strong> with
          standard 2-year commitments. WakeMed typically ranges $8,000–$15,000 for critical care. Med-Surg and
          Telemetry positions have carried $5,000–$8,000 bonuses. Before signing, always verify:
        </p>
        <ul>
          <li>The vesting schedule — is it prorated monthly, or all-or-nothing at the end of the term?</li>
          <li>Whether relocation assistance is separate from or included in the bonus amount</li>
          <li>The repayment method if you leave early — gross vs. net repayment matters significantly</li>
        </ul>
        <p>
          For a full breakdown of what to scrutinize, see our{' '}
          <Link href="/nurse-salary-negotiation-guide-2026" className="text-primary underline">
            nurse salary negotiation guide
          </Link>.
        </p>

        <h2>North Carolina Compact License Advantage</h2>
        <p>
          North Carolina is a Nurse Licensure Compact (NLC) state. If you hold an NC compact license as your
          primary state of residence, you can work in any of the 40+ compact states without obtaining additional
          licenses. For Raleigh nurses, this creates meaningful flexibility — particularly for travel nursing
          contracts or PRN work across the Virginia and South Carolina borders. It also strengthens your
          negotiating position when evaluating offers from out-of-state systems competing for your skills.
        </p>

        <MethodologyBox />

        {/* Related Guides */}
        <h2>Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            { href: '/north-carolina-rn-salary-2026', label: 'North Carolina RN Salary 2026' },
            { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide' },
            { href: '/night-shift-differential-nurses', label: 'Night Shift Differential Pay Guide' },
            { href: '/travel-nurse-salary-guide', label: 'Travel Nurse Salary Guide 2026' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 rounded-xl border border-outline-variant bg-surface-container-low hover:bg-surface-container transition-colors text-on-surface font-medium text-sm"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </SEOPageLayout>
    </>
  );
}
