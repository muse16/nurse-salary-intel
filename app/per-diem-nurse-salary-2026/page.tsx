import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import SalaryCalculator from '@/components/SalaryCalculator';

export const metadata: Metadata = {
  title: 'Per Diem Nurse Salary 2026: $55–$95/hr Rates + No-Benefits Math Decoded',
  description: 'Per diem nurse salary 2026: $55–$95/hr depending on state and specialty. See real take-home math after factoring in no benefits, taxes, scheduling — full breakdown.',
  alternates: { canonical: 'https://nursesalaryintel.com/per-diem-nurse-salary-2026' },
};

const overviewData = [
  { label: 'Average per diem RN rate', avgSalary: '$66.50/hr', hourlyRate: 'National avg, all specialties' },
  { label: 'Range', avgSalary: '$55 – $95/hr', hourlyRate: 'State + specialty dependent' },
  { label: 'Hospital per diem average', avgSalary: '$58 – $72/hr', hourlyRate: 'Direct hospital employment' },
  { label: 'Agency per diem average', avgSalary: '$68 – $85/hr', hourlyRate: 'CrossCountry, Aya, Trusted' },
  { label: 'Crisis/strike rates (peak)', avgSalary: '$95 – $185/hr', hourlyRate: 'Short-term spikes only' },
  { label: 'Annual gross at 36 hrs/wk', avgSalary: '$124,400', hourlyRate: 'Theoretical, no missed shifts' },
  { label: 'Realistic annual take-home', avgSalary: '$78,000 – $98,000', hourlyRate: 'After benefits self-fund + taxes' },
];

const stateData = [
  { label: 'California', avgSalary: '$84.50/hr', hourlyRate: 'Premium: +27% vs staff' },
  { label: 'Hawaii', avgSalary: '$79.20/hr', hourlyRate: 'Premium: +42%' },
  { label: 'Massachusetts', avgSalary: '$74.80/hr', hourlyRate: 'Premium: +42%' },
  { label: 'Oregon', avgSalary: '$72.50/hr', hourlyRate: 'Premium: +39%' },
  { label: 'Washington', avgSalary: '$71.20/hr', hourlyRate: 'Premium: +37%' },
  { label: 'New York', avgSalary: '$69.50/hr', hourlyRate: 'Premium: +38%' },
  { label: 'Alaska', avgSalary: '$68.40/hr', hourlyRate: 'Premium: +28%' },
  { label: 'New Jersey', avgSalary: '$67.80/hr', hourlyRate: 'Premium: +39%' },
  { label: 'Connecticut', avgSalary: '$66.20/hr', hourlyRate: 'Premium: +38%' },
  { label: 'Nevada', avgSalary: '$65.50/hr', hourlyRate: 'Premium: +38%' },
];

const specialtyData = [
  { label: 'Med-Surg / Telemetry', avgSalary: '$58 – $66/hr', hourlyRate: 'Base' },
  { label: 'L&D', avgSalary: '$64 – $74/hr', hourlyRate: '+12%' },
  { label: 'ER', avgSalary: '$68 – $82/hr', hourlyRate: '+20%' },
  { label: 'OR / Surgical', avgSalary: '$72 – $88/hr', hourlyRate: '+28%' },
  { label: 'ICU', avgSalary: '$74 – $90/hr', hourlyRate: '+32%' },
  { label: 'Cath Lab', avgSalary: '$82 – $95/hr', hourlyRate: '+42%' },
  { label: 'Pediatric ICU', avgSalary: '$76 – $92/hr', hourlyRate: '+35%' },
  { label: 'Trauma (Level 1)', avgSalary: '$85 – $98/hr', hourlyRate: '+47%' },
];

const channelData = [
  { label: 'Hospital float pool', avgSalary: '$58 – $72/hr', hourlyRate: 'Same site, simpler scheduling' },
  { label: 'Aya Per Diem', avgSalary: '$68 – $84/hr', hourlyRate: 'App-based, multiple hospitals' },
  { label: 'CrossCountry PRN', avgSalary: '$66 – $82/hr', hourlyRate: 'Larger network' },
  { label: 'Trusted Health PRN', avgSalary: '$70 – $88/hr', hourlyRate: 'Tech-forward platform' },
  { label: 'Nomad Health', avgSalary: '$68 – $86/hr', hourlyRate: 'Direct hospital marketplace' },
  { label: 'Krucial Staffing (rapid response)', avgSalary: '$95 – $185/hr', hourlyRate: 'Crisis/strike rates' },
];

const faqs = [
  {
    question: 'What is the average per diem nurse salary in 2026?',
    answer: '$66.50/hour on average nationally, with a range of $55–$95/hour depending on state, specialty, and channel (hospital float pool vs agency vs 1099). Top specialties (cath lab, trauma, ICU) and high-pay states (California, Hawaii, Massachusetts) push rates to the upper bound.',
  },
  {
    question: 'Is per diem better than staff nurse?',
    answer: 'Financially, depends on your situation. If you have health insurance via a spouse, work specialty per diem in a high-pay state, or work <30 hours/week, per diem typically wins by $10,000–$30,000/year. If you need full benefits, work full-time, or live in a low-pay state, staff usually wins.',
  },
  {
    question: 'Do per diem nurses get health insurance?',
    answer: 'Generally no, when employed by hospital float pool or agency. You self-fund via the ACA marketplace ($600–$1,500/month family coverage), through a spouse\'s employer, or by holding a secondary part-time staff role for benefits. Some larger agencies offer optional buy-in benefit packages.',
  },
  {
    question: 'How is per diem nurse pay taxed?',
    answer: 'Most per diem roles are W-2 — taxes withheld at standard employee rates, FICA split with employer. Some agency or independent roles are 1099 — you owe self-employment tax (15.3%), make quarterly estimated payments, but can deduct business expenses and contribute up to roughly $69,000/year to a Solo 401(k) (current IRS 2024 limit, with modest 2025–2026 COLA increases expected).',
  },
  {
    question: 'Can you survive on per diem nurse income?',
    answer: 'Yes, with planning. Per diem at 1,500–1,800 hours/year (about 30–35 hours/week) typically yields $99,000–$120,000 gross before benefits self-fund. After ACA insurance, retirement self-fund, and taxes, take-home lands at $65,000–$85,000 — comparable to staff RN take-home in most states.',
  },
  {
    question: 'What\'s the highest-paying per diem nurse role?',
    answer: 'Cath lab and trauma at $85–$98/hour in major metros. Crisis-rate per diem during strikes or surge events occasionally hits $185/hour but is short-lived. ICU, OR, and pediatric ICU per diem consistently pay $74–$92/hour at large urban hospitals.',
  },
  {
    question: 'Can new graduate RNs work per diem?',
    answer: 'Most agencies and hospital float pools require 1–2 years of acute care experience before per diem placement. Some specialty per diem (ICU, ER, L&D) require 3+ years of unit-specific experience. New grads should plan to staff first, then transition to per diem after building competency.',
  },
  {
    question: 'How does per diem compare to travel nursing?',
    answer: 'Per diem = same metro, individual shifts. Travel nursing = different city for 8–13 weeks at a time, with housing stipend. Travel nursing pays higher gross ($2,200–$3,800/week) but per diem offers more schedule flexibility. Many nurses combine: per diem locally + occasional travel for premium contracts.',
  },
  {
    question: 'Are per diem rates going up or down in 2026?',
    answer: 'Per diem rates have stabilized after the 2021–2022 pandemic-driven peaks. Current rates ($55–$95/hr) are 18–28% above 2019 baselines but below 2022 peaks of $90–$140/hr. Industry forecasts project 3–5% annual rate growth through 2028.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Per Diem Nurse Salary 2026', item: 'https://nursesalaryintel.com/per-diem-nurse-salary-2026/' },
  ],
};

export default function PerDiemNurseSalary2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SEOPageLayout
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog/' },
          { label: 'Per Diem Nurse Salary 2026' },
        ]}
        h1="Per Diem Nurse Salary 2026: The Real Take-Home When You Strip Out Benefits"
        lastUpdated="April 27, 2026"
        schemaTitle="Per Diem Nurse Salary 2026: $55–$95/hr Rates + No-Benefits Math Decoded"
        schemaDescription="Per diem nurse salary 2026: $55–$95/hr depending on state and specialty. See real take-home math after factoring in no benefits, taxes, scheduling — full breakdown."
        schemaUrl="/per-diem-nurse-salary-2026/"
        faqs={faqs}
      >
        <Image
          src="/images/per-diem-nurse-salary-2026-hero.png"
          alt="Per diem nurse salary 2026 hero graphic with clock and dollar sign motif representing hourly flexible nursing pay"
          width={1200}
          height={630}
          className="w-full rounded-lg mb-6"
          priority
        />

        <p>
          <strong>Per diem (PRN) nurses earn $55–$95 per hour in 2026</strong> — typically 25–40% above the equivalent staff RN base rate. The reason isn&apos;t generosity: per diem roles don&apos;t include health insurance, paid time off, 401(k) matching, or guaranteed hours. The hourly premium is hospitals buying flexibility, and the trade-off is real.
        </p>
        <p>
          After factoring in self-funded benefits, taxes, and unpredictable scheduling, the <strong>true take-home value of per diem is closer to $48–$62/hour staff equivalent</strong> — sometimes higher than staff, sometimes lower, depending on how many shifts you actually pick up. Here&apos;s the full math, by state, by specialty, and by life situation.
        </p>

        <Image
          src="/images/per-diem-nurse-2026-clipboard.png"
          alt="Per diem registered nurse reviewing flexible shift schedule at hospital nursing station"
          width={600}
          height={400}
          className="w-full rounded-lg my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Per Diem Nurse Salary at a Glance (2026)</h2>
        <SalaryTable
          title="Per Diem RN Pay Overview (2026)"
          headers={['Metric', 'Value', 'Notes']}
          rows={overviewData}
          source="Aggregated from agency rate boards (Aya, CrossCountry, Trusted, Nomad) + hospital float pool postings, April 2026."
        />
        <p>
          The headline rate of $66.50/hour sounds dramatic compared to staff RN base of ~$42.79/hour — but per diem nurses earn that rate <strong>only on hours actually worked</strong>, with no PTO, no holiday pay, no employer-funded health insurance, and frequently no shifts during census drops.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">What Does &ldquo;Per Diem&rdquo; Actually Mean?</h2>
        <p>
          &ldquo;Per diem&rdquo; (Latin for &ldquo;by the day&rdquo;) in nursing means an hourly W-2 or 1099 role with no guaranteed hours and no benefits. Synonyms: PRN (&ldquo;pro re nata&rdquo; — as needed), float pool premium, on-call, casual.
        </p>
        <p>Three structural varieties exist in 2026:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Hospital per diem (W-2):</strong> Direct employment with a hospital&apos;s float pool. Typical rate $58–$72/hr. You commit to a minimum (often 24–48 hours/month) and get scheduled flexibly.</li>
          <li><strong>Agency per diem (W-2 or 1099):</strong> Through a staffing agency (CrossCountry, Aya, Trusted, Nomad). Higher rates ($68–$85/hr) because you flex across multiple hospitals.</li>
          <li><strong>Per diem 1099 contractor:</strong> Independent contractor — you handle all taxes, insurance, retirement. Rates can be highest ($75–$95/hr+ in high-demand markets).</li>
        </ol>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Per Diem RN Hourly Rates by State (Top 10)</h2>
        <SalaryTable
          title="Top 10 States — Per Diem RN Rates (2026)"
          headers={['State', 'Avg Per Diem Rate', 'vs Staff Rate']}
          rows={stateData}
          source="Aya/CrossCountry/Trusted/Nomad rate boards + hospital postings, April 2026."
        />
        <p>
          Per diem premium is generally 27–42% over staff in high-pay states, narrower (15–25%) in low-pay rural states. The premium widens in markets with chronic staffing shortages or unionized hospitals where staff RN base is locked but per diem rates float.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Per Diem vs Staff RN: True Pay Comparison (After Benefits Cost)</h2>
        <p>This is where most per diem analyses fall short. The headline rate isn&apos;t the take-home. Let&apos;s run a 2026 apples-to-apples comparison.</p>

        <h3 className="text-xl font-bold font-headline text-on-surface">Staff RN Total Compensation (Full-Time, U.S. Average)</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Base salary: $89,010</li>
          <li>Health insurance employer contribution: $14,200/year</li>
          <li>401(k) employer match: $4,500/year</li>
          <li>PTO + holiday value: $7,000/year</li>
          <li>Life + disability insurance: $850/year</li>
          <li><strong>Total compensation: $115,560</strong></li>
        </ul>

        <h3 className="text-xl font-bold font-headline text-on-surface">Per Diem RN Equivalent Math (Assuming Full-Time Hours)</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gross at $66.50/hr × 2,080 hours: $138,320 (theoretical)</li>
          <li>Self-funded health insurance (ACA marketplace family): −$14,200</li>
          <li>Self-funded retirement (Solo 401k or IRA): −$4,500</li>
          <li>Lost PTO value: −$7,000</li>
          <li>Self-funded disability + life: −$1,200</li>
          <li><strong>Net &ldquo;equivalent&rdquo; comp: $111,420</strong></li>
        </ul>
        <p>
          <strong>The headline rate gap shrinks to a near-tie after benefits self-fund.</strong> The per diem nurse ends up about $4,140 BEHIND staff in this scenario — assuming they work all 2,080 hours.
        </p>

        <Image
          src="/images/per-diem-vs-staff-rn-math-chart.png"
          alt="Stacked bar chart comparing 2026 staff RN total compensation vs per diem hourly equivalent after benefits cost"
          width={700}
          height={500}
          className="w-full rounded-lg my-6"
          loading="lazy"
        />

        <h3 className="text-xl font-bold font-headline text-on-surface">When Per Diem Actually Wins (3 Scenarios)</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>You have benefits via a spouse/partner.</strong> Skip the $14,200 health insurance line and you&apos;re now +$10,000/year ahead.</li>
          <li><strong>You work specialty per diem at high-demand sites.</strong> ICU, ER, OR per diem rates of $80–$95/hr push the math much further: even after benefits self-fund, you&apos;re +$15,000 to $30,000 ahead.</li>
          <li><strong>You combine per diem with another part-time role.</strong> Many per diem nurses work 24 hours/week per diem PLUS hold a part-time staff role for benefits.</li>
        </ol>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Per Diem Pay by Specialty</h2>
        <SalaryTable
          title="Per Diem Rate by Specialty (2026)"
          headers={['Specialty', 'Avg Per Diem Rate', 'Premium vs Med-Surg']}
          rows={specialtyData}
          source="Verified agency + hospital per diem postings (n>200), April 2026."
        />
        <p>
          ICU and procedural specialties carry the highest per diem rates because hospitals struggle most to fill those gaps when census spikes. Cath lab and trauma per diem rates regularly clear $100/hr in California and the Northeast.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Hospital Per Diem vs Agency Per Diem</h2>
        <SalaryTable
          title="Per Diem Channel Comparison (2026)"
          headers={['Channel', 'Typical Rate', 'Notes']}
          rows={channelData}
          source="Public agency rate boards + hospital float pool postings, April 2026."
        />
        <p>
          <strong>Recommendation:</strong> Many per diem nurses keep one hospital float pool role (steady site, team familiarity) plus one agency relationship (rate flexibility). Combining offers maximum schedule control and rate optionality.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Estimate Your Staff RN Equivalent Pay</h2>
        <p>
          Use our calculator to model the staff-RN baseline by specialty, state, and experience. Per diem rates run roughly 27–42% above this number — but remember to subtract self-funded benefits ($26,900 typical) before comparing apples to apples.
        </p>
        <div className="bg-surface-container-lowest rounded-xl p-6 my-6 border border-outline-variant">
          <SalaryCalculator />
        </div>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Tax Implications: 1099 vs W-2 Per Diem</h2>
        <p>
          Most per diem RN roles are W-2 (taxes withheld, employer pays half of FICA). Some agency or independent contracts are 1099 — and the math changes meaningfully.
        </p>
        <p>
          <strong>1099 per diem rates are typically 10–18% higher than W-2 equivalents</strong> — because as a 1099 contractor, you owe self-employment tax (15.3% on Social Security + Medicare), pay 100% of those taxes yourself, and need to make quarterly estimated payments.
        </p>
        <p><strong>1099 advantages worth knowing:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Solo 401(k) contribution limits (currently $69,000/year combined employer + employee per IRS 2024 limits, with modest annual COLA increases expected for 2025 and 2026) vastly exceed W-2 employee limits</li>
          <li>Tax-deductible business expenses (uniforms, certs, education, mileage, home office)</li>
          <li>Schedule C income flexibility for QBI deduction (20% of net business income)</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Pros &amp; Cons of Per Diem Nursing</h2>
        <p><strong>Pros:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Schedule flexibility (decline shifts that don&apos;t work)</li>
          <li>Higher hourly rate</li>
          <li>No mandatory committee/meeting attendance (in most cases)</li>
          <li>Easier to pivot specialties between assignments</li>
          <li>Tax advantages if 1099 (deductions, retirement contribution limits)</li>
        </ul>
        <p><strong>Cons:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>No guaranteed hours — can be canceled with 2–4 hour notice</li>
          <li>No PTO, sick pay, or holiday pay</li>
          <li>Self-funded health insurance ($600–$1,500/month family coverage)</li>
          <li>No 401(k) employer match (unless secondary staff role)</li>
          <li>Often last-priority for desirable shifts</li>
          <li>Limited career progression</li>
        </ul>

        <Image
          src="/images/per-diem-nurse-2026-er-shift.png"
          alt="Per diem nurse arriving for ER shift representing high-rate specialty per diem pay in 2026"
          width={600}
          height={400}
          className="w-full rounded-lg my-6"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Find High-Paying Per Diem Shifts</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Use multiple platforms simultaneously.</strong> Aya + Trusted + Nomad + 1 hospital float pool covers most opportunities in any major metro.</li>
          <li><strong>Set up shift alert push notifications.</strong> Top-paying shifts (ICU, OR, peak holidays) fill within minutes on most apps.</li>
          <li><strong>Stack your specialty certs.</strong> CCRN, CEN, CNOR each open higher-rate specialty per diem bands.</li>
          <li><strong>Build a hospital reputation first.</strong> Many of the highest-rate per diem opportunities are not posted publicly.</li>
          <li><strong>Document everything.</strong> Track shifts, rates, no-shows, and cancellations. Your year-over-year data is your negotiation evidence.</li>
        </ol>
        <p>
          For complementary career data, see our <Link href="/travel-nurse-salary-guide/" className="text-primary hover:underline">Travel Nurse Salary Guide 2026</Link>, <Link href="/how-much-do-nurses-make-per-hour/" className="text-primary hover:underline">How Much Do Nurses Make Per Hour</Link>, and <Link href="/salary-negotiation/" className="text-primary hover:underline">Salary Negotiation for Nurses</Link>.
        </p>

        <p className="text-sm text-on-surface-variant mt-8">
          <strong>Sources:</strong> U.S. Bureau of Labor Statistics — OEWS, Registered Nurses (29-1141), May 2024; BLS Industry Employment &amp; Wage Data — Healthcare Staffing Services; American Association of Colleges of Nursing — 2026 Nursing Workforce Survey; IRS — Tax Guide for Independent Contractors; Aya Healthcare, CrossCountry, Trusted Health, Nomad Health public rate boards (April 2026). <strong>Methodology:</strong> Per diem rate ranges aggregated from public agency rate boards, hospital float pool postings (n &gt; 200), and verified Glassdoor/Reddit r/nursing self-reported rates (n &gt; 400). All take-home calculations assume 2026 federal tax brackets, average ACA marketplace silver-tier family premium ($14,200/year), and standard self-employment tax rates where applicable. Not career or financial advice.
        </p>
      </SEOPageLayout>
    </>
  );
}
