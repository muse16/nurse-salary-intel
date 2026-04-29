import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Nurse Sign-On Bonus Guide 2026: How Much, Who Pays, and How to Negotiate',
  description: 'Nurse sign-on bonuses average $5,000–$20,000 in 2026. See what ICU, ER, L&D, and travel nurses get, which hospitals pay the most, and how to negotiate before you sign.',
  alternates: { canonical: 'https://nursesalaryintel.com/nurse-sign-on-bonus-guide-2026' },
};

const bonusBySpecialty = [
  { label: 'ICU / Critical Care (experienced)', avgSalary: '$15,000–$30,000', hourlyRate: '2-year commitment' },
  { label: 'ICU Residency (new grad)', avgSalary: '$8,000–$15,000', hourlyRate: '18–24 month commitment' },
  { label: 'ER / Emergency (experienced)', avgSalary: '$12,000–$22,000', hourlyRate: '2-year commitment' },
  { label: 'L&D / NICU (experienced)', avgSalary: '$10,000–$18,000', hourlyRate: '2-year commitment' },
  { label: 'OR / Perioperative', avgSalary: '$12,000–$20,000', hourlyRate: '2-year commitment' },
  { label: 'Med-Surg / Telemetry', avgSalary: '$4,000–$10,000', hourlyRate: '12–18 month commitment' },
  { label: 'Home Health / Outpatient', avgSalary: '$2,000–$6,000', hourlyRate: '12-month commitment' },
  { label: 'Rural / Critical Access Hospital', avgSalary: '$10,000–$25,000 + loan repayment', hourlyRate: '2–3 year commitment' },
];

const bonusByState = [
  { label: 'California', avgSalary: '$15,000–$30,000', hourlyRate: 'Highest in country (union + shortage)' },
  { label: 'Washington', avgSalary: '$12,000–$22,000', hourlyRate: 'Strong for ICU, ER, NICU' },
  { label: 'New York', avgSalary: '$10,000–$20,000', hourlyRate: 'NYC systems most competitive' },
  { label: 'Texas', avgSalary: '$8,000–$18,000', hourlyRate: 'Growing fast; HCA, Tenet lead' },
  { label: 'Florida', avgSalary: '$6,000–$15,000', hourlyRate: 'Tourist area ERs pay highest' },
  { label: 'Midwest / Southeast', avgSalary: '$4,000–$12,000', hourlyRate: 'Rural hospitals highest in region' },
];

const faqs = [
  { question: 'What is the average nurse sign-on bonus in 2026?', answer: 'Nurse sign-on bonuses average $5,000–$20,000 in 2026 depending on specialty, experience, and location. ICU and ER nurses at major academic medical centers command $15,000–$30,000. New grad bonuses for residency programs typically range $6,000–$15,000. Rural and critical access hospitals often pay the highest bonuses ($15,000–$25,000+) to attract nurses to underserved areas.' },
  { question: 'Do you have to pay back a sign-on bonus if you leave early?', answer: 'Yes — almost always. Sign-on bonuses include a clawback provision: if you leave before the commitment period (typically 1–2 years), you must repay a prorated portion. Leaving at 6 months of a 2-year commitment = repay 75%. Read the repayment schedule carefully; some are linear, others step down at 6- or 12-month intervals.' },
  { question: 'Can you negotiate a nurse sign-on bonus?', answer: 'Yes, and most nurses don\'t ask. Effective negotiating points: competing offers, specialty certifications (CCRN, CEN add leverage), relocation costs, willingness to take a longer commitment, or starting sooner. HR has more flexibility on sign-ons than base pay — it\'s a one-time cost vs. a permanent pay increase.' },
  { question: 'Are nurse sign-on bonuses taxed?', answer: 'Yes — sign-on bonuses are taxed as ordinary income, often withheld at a flat 22% supplemental rate. You may receive a partial refund at tax time depending on your effective rate. Note: if you repay a clawback, the IRS allows you to deduct it in the repayment year, which can reduce the net tax impact.' },
  { question: 'Which hospitals pay the highest nursing sign-on bonuses?', answer: 'Large academic medical centers and Magnet hospitals in high-cost states (California, New York, Washington) consistently pay the highest bonuses — $18,000–$30,000 for experienced ICU and ER nurses. Rural critical access hospitals often exceed urban rates on a percentage basis due to recruitment challenges, sometimes offering $20,000–$30,000 plus student loan repayment.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Nurse Sign-On Bonus Guide 2026', item: 'https://nursesalaryintel.com/nurse-sign-on-bonus-guide-2026/' },
  ],
};

export default function NurseSignOnBonusGuide2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'Nurse Sign-On Bonus Guide 2026' }]}
        h1="Nurse Sign-On Bonus Guide 2026: How Much, Who Pays, and How to Negotiate"
        lastUpdated="April 2026"
        schemaTitle="Nurse Sign-On Bonus Guide 2026"
        schemaDescription="Nurse sign-on bonuses by specialty and state in 2026. Average amounts, clawback rules, tax implications, and negotiation tactics."
        schemaUrl="/nurse-sign-on-bonus-guide-2026/"
        faqs={faqs}
      >
        {/* Featured snippet */}
        <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
          <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
          <p className="text-on-surface text-base">
            <strong>Nurse sign-on bonuses average $5,000–$20,000 in 2026.</strong> ICU and ER nurses at major academic
            medical centers earn <strong>$15,000–$30,000</strong>. New grad residency bonuses run <strong>$6,000–$15,000</strong>.
            All bonuses come with 1–2 year clawback commitments and are taxed as ordinary income.
          </p>
        </div>

        <p>
          Sign-on bonuses have become standard at virtually every major hospital system — a direct result of the sustained
          nursing shortage. For nurses who know how to play the market, they represent an immediate $5,000–$30,000 addition
          to Year 1 total compensation. But the clawback terms matter as much as the number at the top of the offer letter.
        </p>

        <Image
          src="/images/nurse-sign-on-bonus-guide-2026-hero.png"
          alt="Nurse reviewing a job offer letter and sign-on bonus details at a desk"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonus by Specialty (2026)</h2>
        <p>
          Specialty and experience level drive sign-on amounts more than any other factor. Critical care nurses with
          active CCRN certification routinely command the largest bonuses:
        </p>

        <SalaryTable
          title="Nurse Sign-On Bonuses by Specialty (2026)"
          headers={['Specialty / Role', 'Typical Sign-On Range', 'Commitment Period']}
          rows={bonusBySpecialty}
          source="NurseSalaryIntel hospital survey data, 2026"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses by State (2026)</h2>

        <SalaryTable
          title="Nurse Sign-On Bonus Ranges by State (2026)"
          headers={['State', 'Typical Range', 'Notes']}
          rows={bonusByState}
          source="NurseSalaryIntel hospital survey data, 2026"
        />

        <Image
          src="/images/nurse-sign-on-bonus-guide-2026-map.png"
          alt="Map of the United States showing nurse sign-on bonus ranges by state with highest amounts highlighted in California, Washington, and New York"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Clawback Rules: What You Must Know Before Signing</h2>
        <p>
          Every sign-on bonus comes with a repayment agreement. The standard structure: if you leave before the commitment
          period ends, you repay a prorated portion based on how much time remains. Read the fine print on three things:
        </p>
        <ul>
          <li><strong>Proration method:</strong> Linear (most common) vs. step-down at 6- or 12-month intervals. Step-down can be more favorable if you need to leave at 13 months of a 24-month term.</li>
          <li><strong>What triggers clawback:</strong> Voluntary resignation always triggers it. Involuntary termination for cause usually does. Layoffs and unit closures typically do not — get this in writing.</li>
          <li><strong>Net repayment after taxes:</strong> You received $15,000 gross, paid taxes on it ($3,300 withheld), got $11,700 net. If you clawback, you typically repay the gross amount ($15,000) — then claim a deduction the following tax year. Understand your actual out-of-pocket exposure before signing.</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Negotiate Your Sign-On Bonus</h2>
        <p>
          HR has more flexibility on sign-ons than base pay. Base pay increases are permanent line items; sign-ons are
          one-time costs that expire when you hit the commitment date. Use this to your advantage:
        </p>
        <ul>
          <li><strong>Lead with certification:</strong> "I hold an active CCRN and have 4 years of CVICU experience — I&apos;m targeting the upper range of your sign-on band." Certifications justify asking for $5,000–$8,000 more than the posted offer.</li>
          <li><strong>Reference competing offers:</strong> Even a lower competing offer creates leverage. "I have an offer from [System B] at $18,000 — can we match or exceed that?"</li>
          <li><strong>Negotiate the structure:</strong> Ask for 50% upfront, 50% at the 12-month mark (vs. full amount at start). Reduces your risk if the role isn&apos;t what was described.</li>
          <li><strong>Offer a longer commitment for a larger bonus:</strong> "Would a 3-year commitment unlock a higher sign-on?" Sometimes yes — and 3 years of senior pay at $95,000+ may far outweigh the bonus difference.</li>
        </ul>
        <p>
          For full negotiation scripts, see the <Link href="/nurse-salary-negotiation-scripts-2026" className="text-primary hover:underline">nurse salary negotiation guide</Link>.
        </p>

        <Image
          src="/images/nurse-sign-on-bonus-guide-2026-negotiation.png"
          alt="Nurse in professional attire across a desk from a hospital HR recruiter during a salary negotiation discussion"
          width={800}
          height={450}
          className="rounded-lazy w-full rounded-xl"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses vs. Other Compensation</h2>
        <p>
          A $15,000 sign-on bonus is impressive — but compare it to what you could earn from a different negotiation
          strategy. A $3/hr base pay increase on a 36-hour schedule = $5,616/year, compounding with every future step
          increase. Over a 5-year tenure, that $3/hr raise outperforms a $15,000 one-time bonus by $13,080. Prioritize
          base pay first; take the sign-on as the secondary win.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/nurse-salary-negotiation-scripts-2026', label: 'Nurse Salary Negotiation Scripts', desc: 'Word-for-word scripts for base pay + sign-ons' },
            { href: '/new-grad-rn-salary-2026', label: 'New Grad RN Salary 2026', desc: 'First-year pay + residency sign-on bonuses' },
            { href: '/icu-vs-er-nurse-salary-2026', label: 'ICU vs ER Nurse Salary 2026', desc: 'Which specialty commands the largest sign-ons' },
            { href: '/travel-nurse-vs-staff-nurse-salary-2026', label: 'Travel vs Staff Nurse Pay', desc: 'When travel contracts beat sign-on bonuses' },
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
          <li><a href="https://www.aacnnursing.org/news-information/fact-sheets/nursing-shortage" target="_blank" rel="noopener noreferrer">AACN — Nursing Shortage Fact Sheet</a></li>
          <li><a href="https://www.irs.gov/taxtopics/tc419" target="_blank" rel="noopener noreferrer">IRS Topic No. 419 — Gambling Income and Losses (Supplemental Wage Withholding context)</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
