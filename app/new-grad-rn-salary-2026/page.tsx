import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'New Grad RN Salary 2026: $62K–$88K First-Year Pay by State + Sign-On Bonuses',
  description: 'New graduate RN salary 2026: $62,000–$88,000 depending on state. See first-year pay by state, sign-on bonuses, residency stipends, and how to maximize your first offer.',
  alternates: { canonical: 'https://nursesalaryintel.com/new-grad-rn-salary-2026' },
};

const stateData = [
  { label: 'California', avgSalary: '$88,400 – $102,600', hourlyRate: '$42.50 – $49.30/hr' },
  { label: 'Washington', avgSalary: '$83,200 – $96,400', hourlyRate: '$40.00 – $46.40/hr' },
  { label: 'Massachusetts', avgSalary: '$78,600 – $90,200', hourlyRate: '$37.80 – $43.40/hr' },
  { label: 'New York', avgSalary: '$76,400 – $88,600', hourlyRate: '$36.70 – $42.60/hr' },
  { label: 'Texas', avgSalary: '$64,800 – $76,200', hourlyRate: '$31.20 – $36.60/hr' },
  { label: 'Florida', avgSalary: '$60,400 – $71,800', hourlyRate: '$29.00 – $34.50/hr' },
  { label: 'Georgia', avgSalary: '$57,600 – $68,400', hourlyRate: '$27.70 – $32.90/hr' },
  { label: 'National Range', avgSalary: '$62,000 – $88,000', hourlyRate: '$29.80 – $42.30/hr' },
];

const settingData = [
  { label: 'Academic Medical Center (ICU residency)', avgSalary: '$72,000 – $88,000', hourlyRate: 'Fastest career trajectory' },
  { label: 'Community Hospital (Med-Surg)', avgSalary: '$64,000 – $78,000', hourlyRate: 'Most common entry point' },
  { label: 'Magnet Hospital', avgSalary: '$68,000 – $84,000', hourlyRate: '+$4K–$8K premium avg' },
  { label: 'Children\'s Hospital (peds residency)', avgSalary: '$66,000 – $80,000', hourlyRate: 'Specialty premium' },
  { label: 'Long-Term Care / SNF', avgSalary: '$58,000 – $70,000', hourlyRate: 'Easier to land, lower ceiling' },
  { label: 'Home Health / Outpatient', avgSalary: '$54,000 – $66,000', hourlyRate: 'Lower acuity, M–F schedule' },
];

const timelineData = [
  { label: 'Year 1 (New Grad)', avgSalary: '$62,000 – $88,000', hourlyRate: 'Residency / orientation phase' },
  { label: 'Year 2–3', avgSalary: '$72,000 – $96,000', hourlyRate: 'First step increase + specialty' },
  { label: 'Year 4–5 (specialty cert)', avgSalary: '$82,000 – $108,000', hourlyRate: 'CCRN/CEN adds $4K–$7K' },
  { label: 'Year 6–10', avgSalary: '$94,000 – $124,000', hourlyRate: 'Charge, preceptor, lead' },
  { label: 'Year 10+ (APRN path)', avgSalary: '$120,000 – $214,000+', hourlyRate: 'NP, CRNA, CNS options' },
];

const faqs = [
  { question: 'What does a new grad RN make in 2026?', answer: 'New graduate RNs earn $62,000–$88,000/year ($29.80–$42.30/hr) in their first year, depending heavily on state and employer. California new grads average $88,400–$102,600 while Georgia new grads start at $57,600–$68,400. Sign-on bonuses of $3,000–$12,000 are common and add meaningfully to Year 1 total compensation.' },
  { question: 'Do new grad RNs get sign-on bonuses?', answer: 'Yes — more commonly than ever. After the post-pandemic nursing shortage, most hospitals offer new grad sign-ons ranging from $3,000–$10,000 for Med-Surg and Telemetry, up to $10,000–$15,000 for ICU residency programs. Bonuses typically require a 1–2 year commitment and pro-rate if you leave early.' },
  { question: 'What specialty should a new grad RN choose for the highest salary?', answer: 'ICU (especially CVICU or SICU) offers the highest starting premium and fastest path to $100K+. ER and OR are close behind. The trade-off is that ICU residency is more competitive and demanding — but CCRN certification by year 3–4 consistently adds $4,000–$7,000/year and accelerates promotion to charge roles.' },
  { question: 'Is a BSN required to be hired as a new grad RN?', answer: 'Most major hospital systems now require a BSN for RN positions, or mandate completion of a BSN within 2–5 years of hire (tuition assistance usually provided). ADN-prepared RNs can still find employment at community hospitals, long-term care, and home health settings, but BSN is increasingly standard.' },
  { question: 'How quickly can a new grad RN reach $100K?', answer: 'Typically 4–6 years with specialization. The fastest path: ICU residency → CCRN by year 3 → night shift differential → charge nurse stipend. A CCRN-certified night-shift ICU nurse with 4 years of experience in a high-paying state (CA, WA, MA) realistically earns $98,000–$114,000 total compensation.' },
  { question: 'What is a nurse residency program?', answer: 'A structured 12–18 month transition-to-practice program for new grads, offered by most major hospital systems. Residency programs provide mentored clinical experience on a specialty unit, reduced patient ratios during orientation, preceptor support, and often include a stipend or sign-on bonus. Completing an accredited residency significantly improves retention and clinical competency.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'New Grad RN Salary 2026', item: 'https://nursesalaryintel.com/new-grad-rn-salary-2026/' },
  ],
};

export default function NewGradRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'New Grad RN Salary 2026' }]}
        h1="New Grad RN Salary 2026: First-Year Pay, Sign-On Bonuses & the Fastest Path to $100K"
        lastUpdated="April 2026"
        schemaTitle="New Grad RN Salary 2026: $62K–$88K First-Year Pay by State + Sign-On Bonuses"
        schemaDescription="New graduate RN salary 2026: $62K–$88K depending on state. First-year pay by state, sign-ons, residency stipends, and how to maximize your first offer."
        schemaUrl="/new-grad-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          New graduate registered nurses earn <strong>$62,000–$88,000/year ($29.80–$42.30/hr)</strong> in their
          first year — a range that varies enormously by state, employer type, and whether you land an ICU
          residency versus a general med-surg floor position. Sign-on bonuses of $3,000–$12,000 are now standard
          at most major systems, making Year 1 total compensation higher than the base salary alone suggests.
        </p>

        <Image
          src="/images/new-grad-rn-salary-2026-graduation.png"
          alt="New graduate registered nurse in white coat holding diploma outside nursing school building"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">New Grad RN Salary by State (2026)</h2>
        <p>
          State matters more than any other single factor for new grad pay. California new grads can start
          $25,000–$30,000 above Georgia counterparts — before accounting for cost of living.
        </p>

        <SalaryTable
          title="New Grad RN Salary Range by State (2026)"
          headers={['State', 'First-Year Salary Range', 'Hourly Rate Range']}
          rows={stateData}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 new grad survey data"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">New Grad RN Pay by Employer Type</h2>

        <SalaryTable
          title="First-Year RN Salary by Practice Setting"
          headers={['Setting', 'First-Year Salary Range', 'Notes']}
          rows={settingData}
          source="NurseSalaryIntel survey data, 2026"
        />

        <Image
          src="/images/new-grad-rn-salary-2026-comparison.png"
          alt="Chart showing new grad RN salary ranges by state including California, Washington, Texas, Florida, Georgia and national average"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">RN Salary Growth Timeline: Year 1 to Year 10+</h2>

        <SalaryTable
          title="RN Salary Trajectory — New Grad to APRN"
          headers={['Career Stage', 'Typical Salary Range', 'Key Driver']}
          rows={timelineData}
          source="NurseSalaryIntel career data, 2026"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses for New Grad RNs (2026)</h2>
        <p>
          The nursing shortage has made sign-on bonuses nearly universal at major hospital systems. Typical
          new grad sign-ons:
        </p>
        <ul>
          <li><strong>Med-Surg / Telemetry residency:</strong> $3,000 – $7,000 (1-year commitment)</li>
          <li><strong>L&D / OR / NICU residency:</strong> $5,000 – $10,000 (2-year commitment)</li>
          <li><strong>ICU residency:</strong> $6,000 – $12,000 (2-year commitment)</li>
          <li><strong>Rural / critical access hospital:</strong> $8,000 – $20,000 + student loan repayment</li>
        </ul>

        <h2 className="text-2xl font-bold font-headline text-on-surface">How to Maximize Your First RN Offer</h2>
        <ul>
          <li><strong>Target Magnet hospitals:</strong> Average $4,000–$8,000 higher base pay than non-Magnet</li>
          <li><strong>Negotiate sign-on timing:</strong> Ask for 50% upfront, 50% at 1 year — reduces risk</li>
          <li><strong>Request night shift differential info upfront:</strong> $4–$7/hr extra significantly changes take-home</li>
          <li><strong>Ask about step increase schedules:</strong> Some systems have 6-month steps, others are annual</li>
          <li><strong>Consider BSN tuition assistance clauses:</strong> Some employers offer $5,000–$12,000/year if you don&apos;t already have a BSN</li>
        </ul>

        <Image
          src="/images/new-grad-rn-salary-2026-team.png"
          alt="New graduate nurse being welcomed by experienced nursing team at hospital orientation"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/entry-level-nurse-salary', label: 'Entry-Level Nurse Salary Guide', desc: 'ADN vs BSN starting pay' },
            { href: '/rn-salary-by-years-of-experience-2026', label: 'RN Salary by Years of Experience', desc: 'Full career earnings trajectory' },
            { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary', desc: 'Fastest path to $100K' },
            { href: '/nurse-salary-negotiation-scripts-2026', label: 'Salary Negotiation Scripts', desc: 'Word-for-word negotiation scripts' },
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
          <li><a href="https://www.aacnnursing.org/news-information/fact-sheets/nursing-workforce" target="_blank" rel="noopener noreferrer">AACN — Nursing Workforce Fact Sheet</a></li>
          <li><a href="https://www.ncsbn.org/" target="_blank" rel="noopener noreferrer">National Council of State Boards of Nursing (NCSBN)</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
