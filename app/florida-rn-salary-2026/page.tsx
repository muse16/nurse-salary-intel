import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Florida RN Salary 2026: Hourly & Annual Pay by City',
  description: 'Florida RN salary 2026: hourly pay, annual estimates, and a city-by-city breakdown for Miami, Tampa, Orlando, Jacksonville, and more.',
};

const experienceData = [
  { label: 'New Grad (0–1 yr)', avgSalary: '$66,500 – $79,000', hourlyRate: '$32 – $38/hr' },
  { label: 'Early Career (2–4 yrs)', avgSalary: '$75,000 – $87,000', hourlyRate: '$36 – $42/hr' },
  { label: 'Mid-Career (5–9 yrs)', avgSalary: '$83,000 – $96,000', hourlyRate: '$40 – $46/hr' },
  { label: 'Senior (10–19 yrs)', avgSalary: '$89,000 – $104,000', hourlyRate: '$43 – $50/hr' },
  { label: 'Veteran (20+ yrs)', avgSalary: '$94,000 – $114,000', hourlyRate: '$45 – $55/hr' },
];

const cityData = [
  { label: 'Miami–Fort Lauderdale–Pompano Beach', avgSalary: '$90,000 – $97,000', hourlyRate: '$43 – $47/hr' },
  { label: 'Naples–Marco Island', avgSalary: '$92,000 – $100,000', hourlyRate: '$44 – $48/hr' },
  { label: 'Tampa–St. Petersburg–Clearwater', avgSalary: '$86,000 – $93,000', hourlyRate: '$41 – $45/hr' },
  { label: 'Orlando–Kissimmee–Sanford', avgSalary: '$82,000 – $89,000', hourlyRate: '$39 – $43/hr' },
  { label: 'Jacksonville', avgSalary: '$82,000 – $89,000', hourlyRate: '$39 – $43/hr' },
  { label: 'Cape Coral–Fort Myers', avgSalary: '$84,000 – $91,000', hourlyRate: '$40 – $44/hr' },
  { label: 'Sarasota–North Port', avgSalary: '$82,000 – $88,000', hourlyRate: '$39 – $42/hr' },
  { label: 'Lakeland–Winter Haven', avgSalary: '$78,000 – $85,000', hourlyRate: '$37 – $41/hr' },
  { label: 'Pensacola (Panhandle)', avgSalary: '$76,000 – $83,000', hourlyRate: '$36 – $40/hr' },
  { label: 'Tallahassee', avgSalary: '$76,000 – $82,000', hourlyRate: '$36 – $39/hr' },
];

const specialtyData = [
  { label: 'Med-Surg / Tele', avgSalary: '$75,000 – $89,000', hourlyRate: '$36 – $43/hr' },
  { label: 'ICU / Critical Care', avgSalary: '$85,000 – $104,000', hourlyRate: '$41 – $50/hr' },
  { label: 'ER / Emergency', avgSalary: '$83,000 – $102,000', hourlyRate: '$40 – $49/hr' },
  { label: 'OR / Surgical', avgSalary: '$87,000 – $108,000', hourlyRate: '$42 – $52/hr' },
  { label: 'L&D / Labor and Delivery', avgSalary: '$83,000 – $100,000', hourlyRate: '$40 – $48/hr' },
  { label: 'NICU', avgSalary: '$85,000 – $104,000', hourlyRate: '$41 – $50/hr' },
  { label: 'Oncology', avgSalary: '$83,000 – $100,000', hourlyRate: '$40 – $48/hr' },
];

const faqs = [
  {
    question: 'What is the average RN salary in Florida in 2026?',
    answer: 'An estimated $88,000–$90,000 per year (mean), or roughly $42–$44 per hour, based on BLS May 2024 data projected forward with 3–4% annual wage growth.',
  },
  {
    question: 'Which Florida city pays nurses the most?',
    answer: 'Naples–Marco Island and Miami–Fort Lauderdale lead the state in 2026 estimates, with mean pay in the $90,000–$100,000 range.',
  },
  {
    question: 'How much do new grad nurses make in Florida?',
    answer: 'Estimated $32–$38/hr, or roughly $66,500–$79,000 annually, depending on metro and hospital system.',
  },
  {
    question: 'Does Florida pay less than other states?',
    answer: 'Yes, on a nominal basis — Florida sits roughly 10% below the US RN mean. No state income tax partially offsets this on take-home, but cost of living in South Florida is high.',
  },
  {
    question: 'What is the hourly pay for an ICU nurse in Florida?',
    answer: 'An estimated $41–$50/hr in 2026, before shift differentials and certification pay.',
  },
  {
    question: 'Do Florida hospitals pay shift differentials?',
    answer: 'Yes. Typical ranges in 2026: night shift $3–$6/hr, weekends $2–$5/hr, charge nurse $2–$4/hr.',
  },
  {
    question: 'Is Florida a good state for travel nurses?',
    answer: 'Strong demand in Miami, Tampa, and Orlando. Contracts typically run $1,900–$2,900/week blended gross.',
  },
  {
    question: 'Do Florida nurses get paid more with a BSN?',
    answer: 'Some hospitals pay a BSN differential of $1–$2/hr or offer faster career-ladder progression. Magnet-designated hospitals often require BSN within 5 years of hire.',
  },
  {
    question: 'How does Miami RN pay compare to Tampa?',
    answer: 'Miami estimates run $3,000–$5,000 higher than Tampa in 2026, though Miami\'s cost of living erases most of that gap.',
  },
  {
    question: 'What certifications raise RN pay in Florida?',
    answer: 'CCRN, CEN, PCCN, OCN, RNC-OB, and CMSRN are the most commonly paid. Typical premium: $1–$4/hr or a career-ladder step increase.',
  },
  {
    question: 'How does Florida compare to Texas for RN pay?',
    answer: 'Very close in 2026 — both are no-income-tax states with similar base pay ranges. Texas metros (Houston, Dallas) may edge Florida metros by a few percent in base.',
  },
  {
    question: 'What\'s the highest-paying nursing job in Florida?',
    answer: 'Certified Registered Nurse Anesthetist (CRNA), with 2026 estimates of $198,000–$270,000+. Requires a doctoral degree and ICU experience.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'RN Salary by State', item: 'https://nursesalaryintel.com/rn-salary-by-state/' },
    { '@type': 'ListItem', position: 3, name: 'Florida RN Salary 2026', item: 'https://nursesalaryintel.com/florida-rn-salary-2026/' },
  ],
};

export default function FloridaRNSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'RN Salary by State', href: '/rn-salary-by-state/' },
          { label: 'Florida RN Salary 2026' },
        ]}
        h1="Florida RN Salary (2026): Hourly Pay, Annual Salary, and City Breakdown"
        lastUpdated="April 20, 2026"
        schemaTitle="Florida RN Salary (2026): Hourly Pay, Annual Salary, and City Breakdown"
        schemaDescription="Florida RN salary 2026: hourly pay, annual estimates, and a city-by-city breakdown for Miami, Tampa, Orlando, Jacksonville, and more."
        schemaUrl="/florida-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          Florida registered nurses earn an estimated <strong>$38–$46 per hour in 2026</strong>, or roughly <strong>$80,000–$96,000 annually</strong>, based on BLS May 2024 data adjusted for projected 3–4% annual wage growth. Pay varies widely by metro: Miami, Tampa, and Naples tend to sit at the high end, while rural panhandle regions sit 10–15% below the state average. Specialty, shift differential, and years of experience can add $5–$15 per hour on top of base pay.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How Florida RN Pay Compares Nationally</h2>
        <p>
          Florida consistently ranks in the middle-to-lower tier of state RN pay. The national mean annual wage for registered nurses was roughly $98,000 in May 2024 (BLS OEWS). Florida&apos;s mean sat near $83,000 in the same release. Applying a 3–4% projected annual wage growth into 2026 puts Florida&apos;s mean in the <strong>$88,000–$90,000 range</strong>, with the 25th–75th percentile spanning roughly <strong>$74,000 to $103,000</strong>.
        </p>
        <p>
          The gap between Florida and top-paying states (California, Hawaii, Oregon, Washington, Massachusetts) is primarily driven by union density, cost-of-living baselines, and staffing ratio legislation. See the <Link href="/highest-paying-states-for-rns-2026/" className="text-primary hover:underline">full state-by-state RN pay rankings</Link> for the full comparison.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Florida RN Hourly Pay by Experience (2026 Estimates)</h2>
        <SalaryTable
          title="Florida RN Salary by Experience Tier (2026)"
          headers={['Experience Tier', 'Estimated Annual Base', 'Estimated Hourly']}
          rows={experienceData}
          source="BLS OEWS May 2024 (29-1141), projected 3–4% annual growth. Excludes differentials, OT, and bonuses."
        />
        <p>
          For your own scenario, use the <Link href="/rn-salary-calculator/" className="text-primary hover:underline">RN Salary Calculator</Link> to model differential, overtime, and city-of-work variables.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Florida RN Salary by City (2026 Estimates)</h2>
        <p>
          Metro-level pay spread inside Florida is significant — high-paying Miami, Tampa, and Naples metros can sit 8–12% above the state mean, while panhandle and rural counties can sit 10–15% below.
        </p>
        <SalaryTable
          title="Florida RN Pay by Metro (2026)"
          headers={['Metro Area', 'Estimated Mean Annual', 'Estimated Hourly']}
          rows={cityData}
          source="BLS OEWS May 2024 metro-level data, projected forward 3–4% annually."
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/florida-rn-salary-2026-cities.png"
          alt="Bar chart comparing 2026 mean hourly RN pay across Florida metros"
          className="w-full rounded-lg border border-outline-variant my-6"
          loading="lazy"
        />
        <p>
          For a deeper breakdown of the Miami market, see our <Link href="/rn-salary-miami-fl-2026/" className="text-primary hover:underline">Miami RN salary by experience</Link> post.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">What Drives Pay Variation in Florida</h2>
        <p>Five factors explain most of the pay spread you&apos;ll see between Florida offers:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Metro vs. rural</strong> — tourist-heavy, high-cost coastal metros pay more to offset housing pressure</li>
          <li><strong>Hospital system size</strong> — large systems (HCA, AdventHealth, Baptist Health, BayCare, Orlando Health) generally pay at or above market</li>
          <li><strong>Specialty and unit acuity</strong> — ICU, ED, OR, L&amp;D, and cath lab carry differentials above med-surg base rates</li>
          <li><strong>Shift type</strong> — night differentials in Florida are commonly $3–$6/hr; weekend differentials add another $2–$5/hr</li>
          <li><strong>Experience and certifications</strong> — CCRN, CEN, OCN, and RNC-OB credentials can raise offers by $1–$4/hr</li>
        </ul>
        <p>
          See our <Link href="/salary-negotiation/" className="text-primary hover:underline">salary negotiation guide</Link> for scripts on turning those drivers into a higher offer.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">No State Income Tax: What It Means for Take-Home</h2>
        <p>
          Florida is one of a handful of US states with <strong>no state income tax</strong>, which materially changes how a nominal Florida salary compares to offers in states like California or New York. A $90,000 Florida base can produce take-home pay similar to a $97,000–$100,000 base in a high-tax state once state-level withholding is considered. Model the full picture before assuming a higher headline number is better.
        </p>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/florida-rn-salary-2026-notax.png"
          alt="Florida no state income tax illustrated impact on RN take-home pay"
          className="w-full rounded-lg border border-outline-variant my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Florida RN Pay by Specialty (2026 Estimates)</h2>
        <SalaryTable
          title="Florida RN Specialty Pay (2026)"
          headers={['Specialty', 'Estimated Annual Base', 'Estimated Hourly']}
          rows={specialtyData}
          source="BLS OEWS May 2024 + specialty premium estimates. Excludes shift differentials and bonuses."
        />
        <p>
          For broader specialty ranking context, see <Link href="/highest-paying-nursing-specialties/" className="text-primary hover:underline">Highest Paying RN Specialties</Link>.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse Pay in Florida</h2>
        <p>Travel contracts in Florida have come down from 2021–2022 peaks but still pay above staff rates in high-demand metros and specialties. Estimated 2026 Florida travel ranges:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Med-surg, 13-week (Miami/Tampa):</strong> $1,900–$2,400/week gross blended</li>
          <li><strong>ICU/ED, 13-week:</strong> $2,200–$2,900/week gross blended</li>
          <li><strong>OR, 13-week:</strong> $2,400–$3,100/week gross blended</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">What&apos;s Changing in 2026</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Continued travel-rate normalization</strong> — staff-to-travel differentials have compressed and are expected to stay tighter</li>
          <li><strong>Sign-on bonus growth in non-coastal metros</strong> — Jacksonville, Tallahassee, and Gainesville systems are using larger sign-ons to compete with coastal wages</li>
          <li><strong>Certification premiums rising</strong> — CCRN, CEN, and PCCN are increasingly paid as ongoing differentials rather than one-time awards</li>
        </ul>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> US Bureau of Labor Statistics OEWS, May 2024 (occupation 29-1141); BLS Occupational Outlook Handbook, Registered Nurses. Internal methodology: BLS state mean projected with 3–4% annual wage-growth assumption for 2026 estimates. Figures are estimates; actual pay varies by employer, experience, location, and contract terms. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
