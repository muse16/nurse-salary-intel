import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Arizona RN Salary 2026: $39.42/hr + Phoenix vs Tucson Pay Gap',
  description:
    'Arizona RNs earn $82,000/yr ($39.42/hr) average in 2026. Compare Phoenix ($88K), Scottsdale ($92K), and Tucson ($78K) pay, see top hospitals, and what new grads earn.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-by-state/arizona' },
  openGraph: {
    title: 'Arizona RN Salary 2026: $39.42/hr + Phoenix vs Tucson',
    description: 'AZ RN pay $82,000/yr in 2026. City pay gaps + top employers (Mayo, Banner, HonorHealth).',
    url: 'https://nursesalaryintel.com/rn-salary-by-state/arizona',
  },
};

const faqs = [
  {
    question: 'How much do RNs make in Arizona?',
    answer:
      'The average RN salary in Arizona is $82,000/year ($39.42/hr) in 2026. Phoenix metro nurses earn the most, averaging $88,000–$96,000 at major systems like Banner Health and Mayo Clinic.',
  },
  {
    question: 'What is the starting RN salary in Arizona?',
    answer:
      'New grad RNs in Arizona typically start between $62,000 and $72,000/year. Phoenix and Scottsdale offer higher starting rates, while rural areas may start closer to $58,000.',
  },
  {
    question: 'Is Arizona a good state for nurses?',
    answer:
      'Arizona is a high-growth state for nursing with above-average demand due to rapid population growth and a large retiree population. Pay is below the national average, but cost of living is significantly lower than coastal states.',
  },
  {
    question: 'How does Arizona compare to California for nursing pay?',
    answer:
      'California RNs average $124,000 vs. $82,000 in Arizona — a $42,000 gap. However, Arizona housing costs are 40–50% lower, and there is no income tax bracket as aggressive as California\'s 13.3% top rate.',
  },
  {
    question: 'What are the highest-paying hospitals in Arizona?',
    answer:
      'Mayo Clinic Hospital (Phoenix), Banner University Medical Center, and HonorHealth Scottsdale are among the highest-paying facilities in Arizona, with RN salaries ranging from $90,000 to $105,000.',
  },
];

const cityData = [
  { label: 'Phoenix-Mesa Metro', avgSalary: '$88,000', hourlyRate: '$42.31/hr' },
  { label: 'Scottsdale', avgSalary: '$92,000', hourlyRate: '$44.23/hr' },
  { label: 'Tempe / Chandler', avgSalary: '$86,000', hourlyRate: '$41.35/hr' },
  { label: 'Tucson', avgSalary: '$78,000', hourlyRate: '$37.50/hr' },
  { label: 'Flagstaff', avgSalary: '$76,500', hourlyRate: '$36.78/hr' },
  { label: 'Yuma / Rural AZ', avgSalary: '$70,000', hourlyRate: '$33.65/hr' },
  { label: 'State Average', avgSalary: '$82,000', hourlyRate: '$39.42/hr' },
];

const hospitalData = [
  { label: 'Mayo Clinic Hospital (Phoenix)', avgSalary: '$98,000', note: 'Top payer, highly competitive' },
  { label: 'Banner University Medical Center', avgSalary: '$93,000', note: 'Magnet-designated' },
  { label: 'HonorHealth Scottsdale', avgSalary: '$91,000', note: 'Strong benefits, sign-on bonuses' },
  { label: 'CommonSpirit Health (Chandler)', avgSalary: '$95,000', note: 'Catholic system, solid base pay' },
  { label: 'Valleywise Health', avgSalary: '$84,000', note: 'County system, strong pension' },
  { label: 'Dignity Health (statewide)', avgSalary: '$86,000', note: 'Multiple AZ locations' },
];

const author = { name: 'NurseSalaryIntel Editorial Team', link: '/about' };
const sources = [
  { title: 'BLS Occupational Employment Statistics (OEWS)', url: 'https://www.bls.gov/oes/' },
  { title: 'AACN Nursing Statistics & Research', url: 'https://www.aacnnursing.org/research-data/statistics' },
  { title: 'SHRM Compensation & Benefits Research', url: 'https://www.shrm.org/research-reports' },
];
const methodology = 'Data sourced from US Bureau of Labor Statistics OEWS May 2024, adjusted for 3–4% annual wage growth projections into 2026. City-level data from metro-area OEWS summaries and regional cost-of-living adjustments. Hospital data sourced from published salary surveys and employer reports. Figures are estimates and vary by employer, experience, certifications, location, and contract terms.';

export default function ArizonaRNSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Arizona' },
      ]}
      h1="RN Salary in Arizona — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      author={author}
      sources={sources}
      methodology={methodology}
      schemaTitle="RN Salary in Arizona 2026"
      schemaDescription="Arizona RN salary by city, cost of living context, and hospital comparisons for 2026."
      schemaUrl="/rn-salary-by-state/arizona"
      stateName="Arizona"
      stateSlug="arizona"
      faqs={faqs}
    >
      <p>
        The average registered nurse salary in Arizona is <strong>$82,000/year ($39.42/hr)</strong> in 2026 —
        about $7,000 below the national average of $89,000. But Arizona&apos;s lower cost of living, zero
        state income tax on most middle-income brackets, and rapidly growing healthcare sector make it an
        increasingly attractive destination for nurses.
      </p>

      <SalaryTable
        title="RN Salary by Arizona City (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2025 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona Nurse Pay vs. Cost of Living</h2>
      <p>
        Phoenix is one of the fastest-growing metros in the country, which has pushed housing costs up — but
        it remains far more affordable than California or New York. A Phoenix RN earning $88,000 has roughly
        the same purchasing power as a California RN earning $115,000 when housing and taxes are factored in.
        Scottsdale and north Phoenix suburbs offer the best combination of high hospital pay and reasonable
        commute costs.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Hospitals in Arizona</h2>
      <p>
        Mayo Clinic Hospital in Phoenix is the top-paying facility in the state, followed by Banner University
        Medical Center and HonorHealth. Magnet-designated hospitals generally pay 8–12% more than non-Magnet
        facilities.
      </p>

      <SalaryTable
        title="Top Hospitals — Arizona Nurse Pay (2026)"
        headers={['Hospital', 'Avg. RN Salary', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Arizona vs. Neighboring States</h2>
      <p>
        Arizona pays less than California ($124K) and Washington ($110K) but is competitive with Nevada ($85K)
        and New Mexico ($75K). Nevada&apos;s Las Vegas market has been closing the gap with Phoenix in recent
        years due to union activity. Texas markets like Dallas ($88K) and Austin ($90K) are close comparables.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Nursing Specialties in Arizona</h2>
      <p>
        In Arizona, CRNAs earn an average of $198,000, making them the top-earning nursing specialty in the
        state. Nurse Practitioners average $122,000, ICU nurses $98,000, and ER nurses $94,000. Travel
        nurses working Arizona contracts typically earn $2,200–$2,800/week all-in.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in Arizona</h2>
      <p>
        Arizona is a year-round travel nursing market. Phoenix and Tucson maintain demand in the fall and
        winter as the retiree population swells (the &quot;snowbird&quot; effect). Weekly travel packages
        range from $2,100 in rural markets to $2,800+ in Phoenix metro ICU and ER contracts.
      </p>
      <Link href="/travel-nursing/salary-by-state" className="text-primary font-semibold hover:underline text-sm">
        See travel nurse salaries by state →
      </Link>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Increase Your Nursing Salary in Arizona</h2>
      <p>
        The fastest paths to higher pay in Arizona are specialty certifications (CCRN, CEN), advancing from
        ADN to BSN (typically worth $6,000–$10,000/year), and pursuing an NP license. Arizona has multiple
        accelerated online BSN and NP programs.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li>
          <strong>RN to BSN pathway:</strong> BSN nurses in Arizona earn ~$8,000 more/year.{' '}
          <Link href="/salary/bsn-vs-rn" className="text-primary hover:underline">
            Compare ADN vs BSN salaries →
          </Link>
        </li>
        <li>
          <strong>Nurse Practitioner pathway:</strong> NPs in Arizona average $122,000 — a $40,000 jump over
          staff RN pay.{' '}
          <Link href="/nursing-salary/nurse-practitioner-salary" className="text-primary hover:underline">
            NP Salary Guide →
          </Link>
        </li>
        <li>
          <strong>Specialty certifications:</strong> CCRN, CEN, or CNOR can add $5,000–$12,000 to your base.
          [AFFILIATE_LINK_CERTIFICATION]
        </li>
      </ul>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        <Link
          href="/rn-salary-by-state/highest-paying-states"
          className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors"
        >
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States →</span>
        </Link>
        <Link
          href="/hospital/banner-health"
          className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors"
        >
          <span className="font-bold text-primary text-sm">Banner Health Salary Data →</span>
        </Link>
        <Link
          href="/hospital/mayo-clinic-phoenix"
          className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors"
        >
          <span className="font-bold text-primary text-sm">Mayo Clinic Phoenix Salaries →</span>
        </Link>
        <Link
          href="/nursing-salary/crna-salary-by-state"
          className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors"
        >
          <span className="font-bold text-primary text-sm">CRNA Salary by State →</span>
        </Link>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Cities in Arizona</h2>
      <p>
        Pay varies significantly across Arizona&apos;s metro areas. The Phoenix metro and its suburbs consistently offer the highest salaries in the state, driven by large hospital systems and strong competition for experienced nurses.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Scottsdale:</strong> $88,000–$98,000/year ($42–$47/hr)</li>
        <li><strong>Phoenix Metro:</strong> $84,000–$96,000/year ($40–$46/hr)</li>
        <li><strong>Mesa / Chandler:</strong> $82,000–$92,000/year ($39–$44/hr)</li>
        <li><strong>Tucson:</strong> $74,000–$84,000/year ($36–$40/hr)</li>
        <li><strong>Flagstaff:</strong> $72,000–$80,000/year ($35–$38/hr)</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Salary by Experience in Arizona</h2>
      <p>
        Experience significantly impacts RN pay in Arizona. The gap between new grad and senior nurse salaries has widened in recent years as hospitals compete harder to retain experienced staff.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Entry level (0–2 years):</strong> $62,000–$70,000/year. Phoenix metro new grads typically start $4,000–$6,000 above rural counterparts.</li>
        <li><strong>3–5 years experience:</strong> $78,000–$90,000/year. Specialty certifications like CCRN or CEN add $5,000–$10,000 at this stage.</li>
        <li><strong>10+ years experience:</strong> $92,000–$108,000/year. Senior nurses at Magnet-designated facilities in Phoenix often reach the top of this range.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift &amp; Overtime Pay in Arizona</h2>
      <p>
        Arizona hospitals typically offer a night shift differential of 12–20% above base pay. On an $82,000 base salary, that adds roughly $9,800–$16,400/year for nurses who primarily work nights. Weekend differentials generally add an additional 8–15%.
      </p>
      <p>
        Overtime in Arizona is paid at 1.5x base hourly rate for hours beyond 40 per week. Nurses working two extra shifts per month can add $8,000–$14,000 annually. During the winter snowbird season, overtime and bonus opportunities increase significantly at Phoenix-area facilities.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary FAQs — Arizona</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-on-surface">What is the average RN salary in Arizona?</p>
          <p className="text-on-surface-variant">The average RN salary in Arizona is $82,000/year ($39.42/hr) in 2026. Phoenix metro nurses earn $84,000–$96,000 depending on facility and specialty. Compare with <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link> or <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link> for context. Use our <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate Arizona pay by specialty.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">How much do nurses make per hour in Arizona?</p>
          <p className="text-on-surface-variant">Arizona RNs average $39.42/hr statewide. Scottsdale and north Phoenix hospitals pay $42–$47/hr, while rural Arizona markets average $33–$37/hr.</p>
        </div>
        <div>
          <p className="font-semibold text-on-surface">What is the highest paying city for nurses in Arizona?</p>
          <p className="text-on-surface-variant">Scottsdale leads Arizona nurse pay at $88,000–$98,000/year. See full data for <Link href="/salary/arizona/scottsdale" className="text-primary hover:underline">nurse salary in Scottsdale</Link> and <Link href="/salary/arizona/phoenix" className="text-primary hover:underline">nurse salary in Phoenix</Link>, including hospital-level breakdowns.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/rn-salary-by-state', title: 'RN Salary by State', desc: 'Compare all 50 states side-by-side.' },
          { href: '/entry-level-nurse-salary', title: 'New Grad RN Salary', desc: 'Starting pay, negotiation tactics, growth paths.' },
          { href: '/highest-paying-nursing-specialties', title: 'Highest-Paying Specialties', desc: 'CRNA, NP, ICU, ER pay rankings.' },
          { href: '/salary-negotiation/night-shift-differential-pay', title: 'Night Shift Differential', desc: 'How much more for nights + trade-offs.' },
        ].map(({ href, title, desc }) => (
          <Link key={href} href={href} className="p-4 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
            <p className="font-bold text-primary text-sm mb-1">{title}</p>
            <p className="text-on-surface-variant text-xs">{desc}</p>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
