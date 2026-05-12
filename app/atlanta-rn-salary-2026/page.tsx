import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import Image from 'next/image';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Atlanta RN Salary 2026: How Much Do Nurses Make in Atlanta, GA?',
  description:
    'Atlanta RNs earn $79,000/yr ($37.98/hr) on average in 2026. See pay at Emory Healthcare, Grady Memorial, Northside Hospital, Piedmont, and Wellstar — with Georgia tax analysis.',
  alternates: { canonical: 'https://nursesalaryintel.com/atlanta-rn-salary-2026' },
  openGraph: {
    title: 'Atlanta RN Salary 2026: $79,000/yr Avg',
    description: 'Atlanta nurse salary by hospital, specialty, and experience — with Georgia cost-of-living and tax context.',
    url: 'https://nursesalaryintel.com/atlanta-rn-salary-2026',
  },
};

const faqs = [
  {
    question: 'What is the average RN salary in Atlanta, GA in 2026?',
    answer: "Atlanta RNs earn an average of $79,000/year ($37.98/hr) in 2026, below the national average of $89,010. Georgia has a flat 5.49% state income tax for 2026. However, Atlanta's lower cost of living — particularly housing — partially offsets the nominal pay gap. Emory Healthcare pays the highest base salaries in the market.",
  },
  {
    question: 'What hospitals pay nurses the most in Atlanta?',
    answer: "Emory Healthcare pays Atlanta's highest RN salaries ($80,000–$100,000), followed by Children's Healthcare of Atlanta ($78,000–$98,000) and Northside Hospital ($77,000–$96,000). Grady Memorial Hospital offers PSLF eligibility as a public safety-net hospital, which can be worth $50,000+ in loan forgiveness for nurses with federal student loans.",
  },
  {
    question: 'Is Atlanta a good city for nurses?',
    answer: "Atlanta has a growing and diversified healthcare market anchored by Emory, Wellstar, and Piedmont health systems. Cost of living is considerably lower than West Coast or Northeast markets. For nurses prioritizing loan forgiveness, Grady Memorial is one of the best PSLF opportunities in the Southeast.",
  },
  {
    question: 'What is Georgia state income tax for nurses in 2026?',
    answer: "Georgia has a flat 5.49% state income tax for 2026. On a $79,000 Atlanta RN salary, that's approximately $4,337/year in state taxes. This is a notable factor when comparing Atlanta offers to Texas or Florida jobs at similar or slightly lower nominal salaries.",
  },
];

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$60,000 – $67,000', hourlyRate: '$28.85 – $32.21/hr' },
  { label: 'Mid-Career (3–7 yrs)', avgSalary: '$74,000 – $88,000', hourlyRate: '$35.58 – $42.31/hr' },
  { label: 'Senior (8+ yrs)', avgSalary: '$86,000 – $104,000', hourlyRate: '$41.35 – $50.00/hr' },
  { label: 'Top 10% earners', avgSalary: '$108,000+', hourlyRate: '$51.92+/hr' },
];

const hospitalData = [
  { label: 'Emory Healthcare', avgSalary: '$80,000 – $100,000', hourlyRate: 'Magnet; top base pay in market' },
  { label: "Children's Healthcare of Atlanta", avgSalary: '$78,000 – $98,000', hourlyRate: 'Top pediatric system in SE' },
  { label: 'Northside Hospital', avgSalary: '$77,000 – $96,000', hourlyRate: 'Strong L&D and oncology pay' },
  { label: 'Piedmont Healthcare', avgSalary: '$76,000 – $94,000', hourlyRate: 'Multiple metro Atlanta locations' },
  { label: 'Wellstar Health System', avgSalary: '$74,000 – $92,000', hourlyRate: 'Largest health system in GA' },
  { label: 'Grady Memorial Hospital', avgSalary: '$72,000 – $88,000', hourlyRate: 'Public; Level 1 Trauma; PSLF eligible' },
];

const specialtyData = [
  { label: 'Med-Surg', avgSalary: '$71,000', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$77,000', hourlyRate: '+$6,000' },
  { label: 'ER', avgSalary: '$81,000', hourlyRate: '+$10,000' },
  { label: 'OR / Surgical', avgSalary: '$80,000', hourlyRate: '+$9,000' },
  { label: 'ICU / Critical Care', avgSalary: '$84,000', hourlyRate: '+$13,000' },
  { label: 'NICU', avgSalary: '$80,500', hourlyRate: '+$9,500' },
  { label: 'CRNA (Certified)', avgSalary: '$198,000+', hourlyRate: 'Advanced practice' },
];

export default function AtlantaRNSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: 'Georgia RN Salary', href: '/rn-salary-by-state/georgia' },
        { label: 'Atlanta RN Salary 2026' },
      ]}
      h1="Atlanta RN Salary 2026: How Much Do Nurses Make in Atlanta, Georgia?"
      lastUpdated="May 2026"
      schemaTitle="Atlanta RN Salary 2026"
      schemaDescription="Average RN salary in Atlanta, GA by hospital, specialty, and experience level in 2026."
      schemaUrl="/atlanta-rn-salary-2026"
      datePublished="2026-05-09"
      faqs={faqs}
    >
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Atlanta RNs earn $79,000/year ($37.98/hr)</strong> on average in 2026 — below the national
          average but with a meaningfully <strong>lower cost of living</strong> than comparable metros.
          New grads start at <strong>$60,000–$67,000</strong>; senior ICU and trauma nurses reach
          <strong> $104,000–$108,000</strong>. Emory Healthcare pays the market top; Grady Memorial offers
          one of the Southeast&apos;s best PSLF opportunities.
        </p>
      </div>

      <Image
        src="/images/atlanta-rn-salary-2026-hero_compressed.png"
        alt="Registered nurse in scrubs standing outside a modern Atlanta Georgia hospital entrance with the city skyline softly visible in the background"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Atlanta&apos;s healthcare market is one of the fastest-growing in the Southeast, anchored by Emory
        Healthcare, Wellstar Health System, Piedmont Healthcare, and the nationally recognized Children&apos;s
        Healthcare of Atlanta. While nominal salaries sit below the national average, Atlanta&apos;s cost of
        living — particularly housing — runs considerably below West Coast and Northeast markets, making
        real purchasing power more competitive than it first appears.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta RN Salary by Experience Level (2026)</h2>
      <SalaryTable
        title="Atlanta RN Salary by Years of Experience"
        headers={['Experience Level', 'Annual Salary Range', 'Hourly Rate']}
        rows={experienceData}
        source="NurseSalaryIntel 2026 estimates based on BLS OEWS May 2024 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta RN Salary by Hospital (2026)</h2>

      <Image
        src="/images/atlanta-rn-salary-2026-comparison.png"
        alt="Bar chart comparing 2026 RN salaries at Atlanta hospitals including Emory Healthcare, Grady Memorial, and Northside Hospital versus national average"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <p>
        Emory Healthcare — Atlanta&apos;s flagship academic system and the only Magnet-designated hospital in
        the city — pays the highest base salaries and draws nurses interested in research, academics, and
        clinical advancement. Grady Memorial Hospital is Atlanta&apos;s public safety-net hospital and Level 1
        Trauma Center: base pay is on the lower end of the market, but it qualifies for Public Service
        Loan Forgiveness, which can mean $50,000+ in federal loan forgiveness for nurses with significant
        student debt.
      </p>

      <SalaryTable
        title="Nurse Salary by Hospital in Atlanta, GA"
        headers={['Hospital', 'RN Salary Range', 'Notes']}
        rows={hospitalData}
        source="NurseSalaryIntel 2026 hospital data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Atlanta RN Salary by Specialty (2026)</h2>

      <Image
        src="/images/atlanta-rn-salary-2026-hospital_compressed.png"
        alt="Registered nurse in scrubs reviewing patient charts in a modern Atlanta Georgia hospital corridor, professional clinical environment"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <SalaryTable
        title="Atlanta RN Salary by Specialty"
        headers={['Specialty', 'Avg Annual Salary', 'Premium Over Med-Surg']}
        rows={specialtyData}
        source="NurseSalaryIntel 2026 data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Georgia Income Tax and Take-Home Pay</h2>
      <p>
        Georgia has a flat 5.49% state income tax for 2026. On a $79,000 Atlanta RN salary, that&apos;s
        approximately $4,337/year — roughly $361/month in state taxes. When comparing an Atlanta offer to a
        job in Texas or Florida at the same gross salary, add that amount back to the no-tax state offer for
        a true comparison. At $83,000 gross in Houston (no income tax), a nurse nets about $4,000 more per
        year than in Atlanta at the same gross — enough to cover several months of rent differential.
      </p>
      <p>
        For nurses with significant federal student loans, Grady Memorial&apos;s PSLF eligibility can flip the
        math entirely. If you qualify for PSLF, $50,000+ in loan forgiveness over 10 years can outweigh
        several years of the Georgia tax burden.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/rn-salary-by-state', label: 'RN Salary by State', desc: 'All 50 states ranked' },
          { href: '/icu-nurse-salary-2026', label: 'ICU Nurse Salary 2026', desc: 'Critical care pay nationwide' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'How to ask for more and get it' },
          { href: '/houston-rn-salary-2026', label: 'Houston RN Salary 2026', desc: 'Compare Atlanta vs. Houston pay' },
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
