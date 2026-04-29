import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Travel Nurse vs Staff Nurse Salary 2026: Which Pays More?',
  description: 'Travel nurses earn $95,000–$130,000/yr vs staff nurses at $77,600/yr in 2026. See the real after-tax math, hidden costs of travel, and when staff nursing wins.',
  alternates: { canonical: 'https://nursesalaryintel.com/travel-nurse-vs-staff-nurse-salary-2026' },
};

const salaryComparisonData = [
  { label: 'National Avg Total Pay', avgSalary: 'Travel: $95,000–$130,000', hourlyRate: 'Staff: $77,600' },
  { label: 'Avg Taxable Hourly', avgSalary: 'Travel: $22–$32/hr taxable', hourlyRate: 'Staff: $37.30/hr taxable' },
  { label: 'Tax-Free Stipends', avgSalary: 'Travel: $1,500–$3,000/wk', hourlyRate: 'Staff: None' },
  { label: 'Sign-On Bonus', avgSalary: 'Travel: $500–$3,000/contract', hourlyRate: 'Staff: $5,000–$30,000/hire' },
  { label: 'Benefits', avgSalary: 'Travel: Agency-provided (variable)', hourlyRate: 'Staff: Employer-provided (stable)' },
  { label: 'Retirement Match', avgSalary: 'Travel: Rarely; some agencies offer 401k', hourlyRate: 'Staff: 3–6% match standard' },
  { label: 'PTO / Sick Leave', avgSalary: 'Travel: None (unpaid between contracts)', hourlyRate: 'Staff: 15–25 days/yr' },
  { label: 'Job Security', avgSalary: 'Travel: Contract-to-contract', hourlyRate: 'Staff: Permanent employment' },
];

const realEarningsData = [
  { label: 'Gross Weekly Pay', avgSalary: 'Travel: ~$2,900 ($26/hr + $1,500 stipend)', hourlyRate: 'Staff: ~$1,495 ($37.30/hr × 40)' },
  { label: 'Federal Tax (est.)', avgSalary: 'Travel: ~$374 (on taxable only)', hourlyRate: 'Staff: ~$269 (22% bracket)' },
  { label: 'State Tax (TX example)', avgSalary: 'Travel: $0', hourlyRate: 'Staff: $0' },
  { label: 'Net Weekly Take-Home', avgSalary: 'Travel: ~$2,526/wk', hourlyRate: 'Staff: ~$1,226/wk' },
  { label: 'Housing Cost (travel)', avgSalary: '–$400–$800/wk (if not provided)', hourlyRate: 'Included (live at home)' },
  { label: 'Net After Housing', avgSalary: 'Travel: ~$1,726–$2,126/wk', hourlyRate: 'Staff: ~$1,226/wk' },
  { label: 'Annualized (48 wks worked)', avgSalary: 'Travel: ~$83,000–$102,000', hourlyRate: 'Staff: ~$63,750' },
];

const faqs = [
  { question: 'Do travel nurses make more money than staff nurses?', answer: 'Travel nurses gross more — $95,000–$130,000/year vs. $77,600 for staff nurses nationally. But the real comparison is net after taxes, housing, and unpaid gaps between contracts. After housing costs ($20,000–$40,000/year for most travelers) and benefit gaps, experienced staff nurses in high-paying states often close the gap significantly.' },
  { question: 'How much do travel nurses make per week in 2026?', answer: 'Travel nurses earn $2,400–$3,800/week all-in (taxable wages + tax-free housing and meal stipends) in 2026. ICU and OR travel nurses in California earn $3,200–$4,200/week. The taxable hourly rate is typically low ($22–$32/hr) with the premium coming via tax-free stipends — which are only legal if you maintain a valid tax home.' },
  { question: 'What is a tax home for travel nurses?', answer: 'A tax home is the city/region where you have a permanent residence and pay rent/mortgage — the IRS standard for receiving tax-free travel stipends. Without a legitimate tax home, travel nursing stipends are fully taxable, dramatically reducing take-home pay. Most travel nurses maintain a permanent residence (sometimes a room rented from family) to preserve stipend eligibility.' },
  { question: 'When is staff nursing better than travel nursing financially?', answer: 'Staff nursing wins when: (1) you work in a high-paying state (California, Washington) where staff pay is already $95,000–$115,000, (2) employer benefits (health, 401k match, pension) add $15,000–$25,000 in value, (3) you prioritize pension vesting or leadership advancement over raw pay, or (4) housing costs in your travel assignments erode the stipend advantage.' },
  { question: 'Can you do travel nursing with a family?', answer: 'Yes, but it requires planning. Nurses with families typically negotiate contracts close to home, do regional travel (drive distance), or accept some contracts per year while keeping a permanent base. Some travel to high-paying markets for 1–2 contracts/year while maintaining staff employment the rest of the year ("PRN travel").' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Travel vs Staff Nurse Salary 2026', item: 'https://nursesalaryintel.com/travel-nurse-vs-staff-nurse-salary-2026/' },
  ],
};

export default function TravelVsStaffNurseSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'Travel vs Staff Nurse Salary 2026' }]}
        h1="Travel Nurse vs Staff Nurse Salary 2026: Which Pays More After Taxes?"
        lastUpdated="April 2026"
        schemaTitle="Travel Nurse vs Staff Nurse Salary 2026"
        schemaDescription="Travel nurses earn $95K–$130K vs staff nurses at $77,600 in 2026. Real after-tax math, housing costs, benefit gaps, and when staff nursing wins financially."
        schemaUrl="/travel-nurse-vs-staff-nurse-salary-2026/"
        faqs={faqs}
      >
        {/* Featured snippet */}
        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            <strong>Travel nurses gross more</strong> — $95,000–$130,000/year vs. $77,600 for staff nurses nationally.
            But after housing costs ($20,000–$40,000/year), benefit gaps, and unpaid contract breaks, the real
            net advantage is <strong>$15,000–$35,000/year</strong> for active travelers — less than the headline suggests.
            Staff nurses in California and Washington earning $95,000–$115,000 often close the gap entirely.
          </p>
        </div>

        <p>
          The travel vs. staff salary question is one of the most searched — and most misunderstood — comparisons in
          nursing. The gross pay difference is real but the net difference depends heavily on housing costs, tax home
          status, benefit gaps, and contract continuity. Here&apos;s the math that actually matters.
        </p>

        <Image
          src="/images/travel-nurse-vs-staff-nurse-salary-2026-hero.png"
          alt="Split image showing a travel nurse with rolling luggage outside a hospital versus a staff nurse badge-in at a home facility"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Travel vs Staff Nurse Salary: The Headline Numbers</h2>

        <SalaryTable
          title="Travel Nurse vs Staff Nurse Compensation Comparison (2026)"
          headers={['Category', 'Travel Nurse', 'Staff Nurse']}
          rows={salaryComparisonData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 travel contract data"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">The Real After-Tax Math</h2>
        <p>
          Travel nursing pay is split between taxable hourly wages and tax-free stipends (housing + meals). The stipends
          are only tax-free if you maintain a valid tax home. Assuming a Texas assignment (no state income tax) with
          valid tax home:
        </p>

        <SalaryTable
          title="Weekly Take-Home Comparison — Travel vs Staff (Texas Example)"
          headers={['Metric', 'Travel Nurse', 'Staff Nurse']}
          rows={realEarningsData}
          source="NurseSalaryIntel tax + compensation analysis, 2026"
        />

        <p>
          The takeaway: travel nursing pays more, but the margin after housing costs is typically $20,000–$40,000/year
          — not the $50,000–$60,000 the gross figures imply. In a high-cost assignment (New York City, San Francisco),
          housing alone can eat $2,000–$3,500/month, dramatically compressing the advantage.
        </p>

        <Image
          src="/images/travel-nurse-vs-staff-nurse-salary-2026-comparison.png"
          alt="Side-by-side bar chart comparing annual travel nurse and staff nurse take-home pay after taxes and housing costs"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">When Staff Nursing Pays More Than Travel</h2>
        <p>
          Travel nursing doesn&apos;t always win. Staff nursing comes out ahead when:
        </p>
        <ul>
          <li><strong>You&apos;re in a high-paying state:</strong> California staff ICU nurses earning $115,000/year + full benefits package ($20,000+ value) + pension + SEIU union protections often exceed what travel contracts in the same state pay net.</li>
          <li><strong>Benefits value is high:</strong> Employer-sponsored health insurance, 3–6% 401k match, PTO, pension, and tuition assistance can add $18,000–$28,000 in total compensation value not captured in salary figures.</li>
          <li><strong>You have high housing costs:</strong> Owning a home or having a high rent payment at your tax home means travel stipends mostly cover your dual-housing burden rather than adding net income.</li>
          <li><strong>Career advancement matters:</strong> Charge nurse, educator, and management paths favor staff employment. Travel nurses are often excluded from leadership opportunities and internal promotion tracks.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Hybrid Strategy: The Best of Both</h2>
        <p>
          Many experienced nurses maximize earnings with a hybrid approach: permanent PRN (per diem) status at a home
          facility + 2–3 travel contracts per year. This preserves hospital privileges, maintains relationships,
          and captures travel premiums without fully committing to the nomadic lifestyle. Agencies that allow
          local contracts (same-state travel) make this even more accessible.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/nursing-salary/travel-nurse-salary', label: 'Travel Nurse Salary (Full Guide)', desc: 'Rates by specialty, state, and agency' },
            { href: '/nurse-sign-on-bonus-guide-2026', label: 'Nurse Sign-On Bonus Guide 2026', desc: 'How sign-ons stack against travel pay' },
            { href: '/night-shift-differential-nurses', label: 'Night Shift Nurse Salary 2026', desc: 'Adding differential to staff or travel pay' },
            { href: '/rn-salary-by-years-of-experience-2026', label: 'RN Salary by Experience 2026', desc: 'When experience tips the travel vs staff math' },
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

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sources</h2>
        <ul>
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, National and State Data</a></li>
          <li><a href="https://www.irs.gov/publications/p463" target="_blank" rel="noopener noreferrer">IRS Publication 463 — Travel, Gift, and Car Expenses (Tax Home guidance)</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
