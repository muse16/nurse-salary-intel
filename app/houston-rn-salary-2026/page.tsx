import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Houston RN Salary 2026: How Much Do Nurses Make in Houston, TX?',
  description:
    'Houston RNs earn $83,500/yr ($40.14/hr) on average in 2026. See pay at Houston Methodist, Memorial Hermann, Texas Medical Center, and HCA — plus no state income tax advantage.',
  alternates: { canonical: 'https://nursesalaryintel.com/houston-rn-salary-2026' },
  openGraph: {
    title: 'Houston RN Salary 2026: $83,500/yr Avg — No State Income Tax',
    description: 'Houston nurse salary by hospital, specialty, and experience — with Texas tax advantage analysis.',
    url: 'https://nursesalaryintel.com/houston-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Houston, TX in 2026?',
    answer: 'Houston RNs earn an average of $83,500/year ($40.14/hr) in 2026, below the national average of $89,010. However, Texas has no state income tax — adding $3,500–$5,500 to effective take-home pay compared to states like Colorado or Georgia. Houston Methodist and the Texas Medical Center complex pay at the top of the local market.',
  },
  {
    question: 'What hospitals pay nurses the most in Houston?',
    answer: "Houston Methodist pays Houston's highest RN base salaries ($85,000–$108,000), followed by Texas Medical Center system hospitals ($82,000–$100,000) and Memorial Hermann ($80,000–$98,000). HCA Houston Healthcare offers aggressive sign-on bonuses of $10,000–$20,000 for specialty nurses.",
  },
  {
    question: 'Does Texas have state income tax for nurses?',
    answer: "No — Texas has no state income tax. On an $83,500 Houston RN salary, that's $0 in state taxes vs. $3,700+ in Colorado (4.4% flat) or $4,200+ in Georgia. The no-tax advantage makes Houston's nominal salary more competitive than it first appears when comparing to higher-paying but higher-taxed states.",
  },
  {
    question: 'Is Houston a good city for nurses?',
    answer: "Yes — Houston is home to the Texas Medical Center, the world's largest medical complex, with 60+ institutions and 106,000+ employees. The nursing job market is large and stable, cost of living is moderate by major-metro standards, and the no-state-income-tax advantage boosts real take-home pay meaningfully.",
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$62,000 – $70,000', hourlyRate: '$29.81 – $33.65/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$78,000 – $92,000', hourlyRate: '$37.50 – $44.23/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$90,000 – $110,000', hourlyRate: '$43.27 – $52.88/hr' },
  { label: 'Top 10% earners', avgSalary: '$115,000+', hourlyRate: '$55.29+/hr' },
];

const hospitalData = [
  { label: 'Houston Methodist Hospital', avgSalary: '$85,000 – $108,000', hourlyRate: 'Magnet; top base pay in market' },
  { label: 'Texas Medical Center hospitals', avgSalary: '$82,000 – $100,000', hourlyRate: "World's largest medical complex" },
  { label: 'Memorial Hermann Health System', avgSalary: '$80,000 – $98,000', hourlyRate: 'Level 1 Trauma; strong sign-ons' },
  { label: 'HCA Houston Healthcare', avgSalary: '$76,000 – $95,000', hourlyRate: 'Sign-on: $10K–$20K for specialty' },
  { label: 'UTHealth Houston', avgSalary: '$78,000 – $96,000', hourlyRate: 'PSLF eligible; academic system' },
  { label: 'Harris Health System', avgSalary: '$72,000 – $88,000', hourlyRate: 'Public system; PSLF eligible' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$74,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$80,500', hourlyRate: '+$6,500' },
  { label: 'ER', avgSalary: '$84,000', hourlyRate: '+$10,000' },
  { label: 'OR / Surgical', avgSalary: '$83,500', hourlyRate: '+$9,500' },
  { label: 'ICU / Critical Care', avgSalary: '$87,000', hourlyRate: '+$13,000' },
  { label: 'NICU', avgSalary: '$84,500', hourlyRate: '+$10,500' },
  { label: 'CRNA (Certified)', avgSalary: '$205,000+', hourlyRate: 'Advanced practice' },
];

export default function HoustonRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Texas RN Salary', href: '/rn-salary-by-state/texas' },
        { label: 'Houston RN Salary 2026' },
      ]}
      h1="Houston RN Salary 2026: How Much Do Nurses Make in Houston, Texas?"
      lastUpdated="May 2026"
      schemaTitle="Houston RN Salary 2026"
      schemaDescription="Average RN salary in Houston, TX by hospital, specialty, and experience level in 2026."
      schemaUrl="/houston-rn-salary-2026"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Houston RNs earn $83,500/year ($40.14/hr)</strong> on average in 2026 — below the national average,
          but <strong>Texas has no state income tax</strong>, adding $3,500–$5,500 to effective take-home pay vs.
          comparable states. New grads start at <strong>$62,000–$70,000</strong>; senior specialty nurses reach
          <strong> $110,000–$115,000+</strong>. Houston Methodist and the Texas Medical Center pay the market top.
        </p>
      </div>

      <Image
        src="/images/houston-rn-salary-2026-hero_compressed.png"
        alt="Confident registered nurse in navy scrubs standing outside a modern Houston Texas hospital entrance with warm Texas sunlight"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Houston is home to the Texas Medical Center — the world&apos;s largest medical complex, with more than
        60 institutions and 106,000 employees. That concentration of healthcare creates one of the most
        competitive nursing job markets in the country. Combine that with Texas&apos;s zero state income tax, and
        Houston&apos;s salary picture looks considerably stronger than raw numbers suggest.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Houston RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Houston RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Houston RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/houston-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Houston hospitals including Houston Methodist, Memorial Hermann, and HCA versus national average"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Houston Methodist is consistently the highest-paying system in the Houston market, with a Magnet
        designation and some of the strongest nurse retention programs in Texas. The Texas Medical Center
        institutions — including UTHealth, Memorial Hermann, and Harris Health — offer a range from public-system
        pay with PSLF eligibility to academic medical center salaries with strong sign-on incentives.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Houston, TX"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Houston RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/houston-rn-salary-2026-hospital_compressed.png"
        alt="Two registered nurses in scrubs reviewing patient monitors in a modern Houston Texas hospital ICU, professional clinical setting"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Houston RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Texas Tax Advantage: What It Means for Your Take-Home Pay</h2>
      <p>
        Texas has no state income tax — one of only nine states in the US. On an $83,500 Houston salary, that
        means $0 in state taxes vs. $3,720 in Colorado, $4,585 in Georgia, or $7,090 in California. When
        comparing a Houston offer to a seemingly higher-paying job in a taxed state, add that difference back
        before deciding. A $90,000 salary in Denver after Colorado&apos;s 4.4% flat tax nets roughly $86,280 —
        barely more than Houston&apos;s average after accounting for taxes, and with a higher cost of living.
      </p>
      <p>
        Houston&apos;s cost of living is also moderate by major-metro standards — housing costs significantly
        less than Austin, Denver, Seattle, or any California market. That combination of no state income tax
        and lower housing costs makes Houston one of the stronger markets for real nurse purchasing power.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay nationwide' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to ask for more and get it' },
          { href: '/austin-rn-salary-2026', label: 'Austin RN Salary 2026', desc: 'Compare Houston vs. Austin pay' },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
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
