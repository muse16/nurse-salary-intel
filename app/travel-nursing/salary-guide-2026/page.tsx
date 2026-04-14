import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import ContractAuditCTA from '@/components/ContractAuditCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Travel Nurse Salary Guide 2026 | NurseSalaryIntel',
  description:
    'Complete 2026 travel nursing salary guide. Average pay by state, specialty, and agency. Learn how pay packages work and how to maximize your earnings.',
  openGraph: {
    title: 'Travel Nurse Salary Guide 2026 | NurseSalaryIntel',
    description: 'Complete 2026 travel nursing salary guide. Average pay by state, specialty, and agency.',
    url: 'https://nursesalaryintel.com/travel-nursing/salary-guide-2026',
  },
};

const faqs = [
  { question: 'How much do travel nurses make per hour in 2026?', answer: 'The average travel nurse earns $50–$65/hour in 2026, depending on specialty and location. High-demand specialties like ICU and OR can earn $70–$85/hour. These rates include the taxable hourly base plus the blended value of tax-free stipends.' },
  { question: 'What is the highest-paying travel nurse specialty?', answer: 'CVOR (cardiovascular operating room) and ECMO specialist travel nurses earn the highest rates, often $3,500–$4,500/week. ICU, OR, and ER travel nurses are also consistently high earners.' },
  { question: 'Do travel nurses get benefits?', answer: 'Most travel nursing agencies offer health insurance, dental, vision, and 401(k) plans. Coverage typically starts on day one of your assignment. However, benefits vary by agency — compare plans before choosing.' },
  { question: 'How are travel nurse stipends taxed?', answer: 'Housing and M&IE stipends are tax-free if you maintain a tax home (a permanent residence you pay for). If you don\'t have a tax home, stipends become taxable income, significantly reducing your take-home pay.' },
  { question: 'Is travel nursing still worth it in 2026?', answer: 'Yes, but the landscape has changed. While crisis-rate contracts ($5,000+/week) are rare, travel nurses still earn 20–50% more than staff nurses. The key is choosing the right specialty, location, and agency.' },
  { question: 'How do I compare travel nursing agencies?', answer: 'Compare agencies on: base hourly rate, stipend amounts, health insurance quality, cancellation policies, recruiter responsiveness, and contract transparency. Use our salary data to verify that offered rates match market rates.' },
];

const stateData = [
  { label: 'California', avgSalary: '$2,800–$3,600/wk', hourlyRate: '$62–$78/hr' },
  { label: 'New York', avgSalary: '$2,600–$3,400/wk', hourlyRate: '$58–$74/hr' },
  { label: 'Texas', avgSalary: '$2,200–$2,900/wk', hourlyRate: '$50–$65/hr' },
  { label: 'Massachusetts', avgSalary: '$2,500–$3,200/wk', hourlyRate: '$56–$70/hr' },
  { label: 'Florida', avgSalary: '$2,000–$2,700/wk', hourlyRate: '$46–$60/hr' },
  { label: 'Washington', avgSalary: '$2,400–$3,100/wk', hourlyRate: '$54–$68/hr' },
  { label: 'Oregon', avgSalary: '$2,300–$3,000/wk', hourlyRate: '$52–$66/hr' },
  { label: 'Arizona', avgSalary: '$2,100–$2,800/wk', hourlyRate: '$48–$62/hr' },
];

const specialtyData = [
  { label: 'ICU / Critical Care', avgSalary: '$2,600–$3,500/wk', hourlyRate: '$58–$76/hr' },
  { label: 'Operating Room (OR)', avgSalary: '$2,500–$3,400/wk', hourlyRate: '$56–$74/hr' },
  { label: 'Emergency Room (ER)', avgSalary: '$2,400–$3,200/wk', hourlyRate: '$54–$70/hr' },
  { label: 'Labor & Delivery', avgSalary: '$2,300–$3,100/wk', hourlyRate: '$52–$68/hr' },
  { label: 'NICU', avgSalary: '$2,300–$3,000/wk', hourlyRate: '$52–$66/hr' },
  { label: 'Med-Surg / Tele', avgSalary: '$2,000–$2,700/wk', hourlyRate: '$46–$60/hr' },
  { label: 'CVOR', avgSalary: '$2,800–$3,800/wk', hourlyRate: '$62–$82/hr' },
  { label: 'Psych / Behavioral', avgSalary: '$2,100–$2,800/wk', hourlyRate: '$48–$62/hr' },
];

export default function TravelNurseSalaryGuide() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Travel Nursing', href: '/travel-nursing/salary-guide-2026' },
        { label: 'Salary Guide 2026' },
      ]}
      h1="Travel Nurse Salary Guide 2026: Pay, Packages & How to Earn More"
      lastUpdated="April 2026"
      schemaTitle="Travel Nurse Salary Guide 2026"
      schemaDescription="Complete 2026 travel nursing salary guide with pay by state, specialty, and agency."
      schemaUrl="/travel-nursing/salary-guide-2026"
      faqs={faqs}
    >
      <p>
        Travel nursing remains one of the highest-paying career paths in healthcare. In 2026, the average travel
        nurse earns $2,400–$3,200 per week — 20–50% more than staff nurses in the same specialty. This guide
        covers everything you need to know about travel nurse pay: how packages work, what to expect by state
        and specialty, and how to maximize your earnings.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Average Travel Nurse Salary in 2026</h2>
      <p>
        The national average travel nurse salary in 2026 is <strong>$2,600/week</strong> ($135,200 annualized), including
        base pay and tax-free stipends. This varies significantly by specialty, location, and agency. High-demand
        specialties like ICU and OR command $3,000–$3,500/week in top-paying states.
      </p>

      <SalaryTable
        title="Travel Nurse Pay by State — 2026"
        headers={['State', 'Weekly Pay Range', 'Hourly Rate Range']}
        rows={stateData}
        source="NurseSalaryIntel contract data, Q1 2026"
      />

      <p className="text-sm">
        <Link href="/travel-nursing/salary-by-state" className="text-primary font-semibold hover:underline">
          See the full state-by-state breakdown →
        </Link>
      </p>

      <SalaryTable
        title="Travel Nurse Pay by Specialty — 2026"
        headers={['Specialty', 'Weekly Pay Range', 'Hourly Rate Range']}
        rows={specialtyData}
        source="NurseSalaryIntel contract data, Q1 2026"
      />

      <p className="text-sm">
        <Link href="/travel-nursing/salary-by-specialty" className="text-primary font-semibold hover:underline">
          See the full specialty breakdown →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Travel Nurse Pay Packages Work</h2>
      <p>
        A travel nurse pay package is more than just an hourly rate. It typically includes a taxable hourly base rate,
        a tax-free housing stipend, a meals and incidentals (M&IE) per diem, and sometimes a travel reimbursement
        or completion bonus. Understanding each component is critical to comparing offers accurately.
      </p>
      <p>
        <Link href="/travel-nursing/pay-package-breakdown" className="text-primary font-semibold hover:underline">
          Read our full pay package breakdown →
        </Link>
      </p>

      <ContractAuditCTA variant="inline" heading="Got a pay package? Make sure it's fair — $9 audit." />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Stipends, Per Diems & Tax-Free Income</h2>
      <p>
        Tax-free stipends are the biggest financial advantage of travel nursing. In 2026, the average housing stipend
        is $2,000–$2,800/month and M&IE runs $800–$1,200/month. To qualify for tax-free treatment, you must
        maintain a legitimate tax home — a permanent residence where you pay rent or a mortgage and return to
        between assignments.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nurse vs. Staff Nurse: Salary Comparison</h2>
      <p>
        On average, travel nurses earn 20–50% more than staff nurses in the same specialty and location. However,
        staff nurses receive benefits (401k match, PTO, tuition reimbursement) that narrow the total compensation gap.
      </p>
      <p>
        <Link href="/travel-nursing/vs-staff-nurse-salary" className="text-primary font-semibold hover:underline">
          See the full travel vs. staff nurse comparison →
        </Link>
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Contract Red Flags That Cost You Money</h2>
      <p>
        Not all travel nursing contracts are created equal. Watch for vague cancellation clauses, low stipends,
        mandatory floating, and missing overtime guarantees. A single bad clause can cost you thousands.
      </p>
      <p>
        <Link href="/travel-nursing/contract-red-flags" className="text-primary font-semibold hover:underline">
          See our 12 contract red flags checklist →
        </Link>
      </p>

      {/* Cluster Hub Links */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing Salary Resources</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/travel-nursing/salary-by-state', title: 'Salary by State', desc: 'Compare travel nurse pay across all 50 states.' },
          { href: '/travel-nursing/salary-by-specialty', title: 'Salary by Specialty', desc: 'ICU, ER, OR, NICU, L&D and more.' },
          { href: '/travel-nursing/pay-package-breakdown', title: 'Pay Package Breakdown', desc: 'Understand every line item in your offer.' },
          { href: '/travel-nursing/contract-red-flags', title: 'Contract Red Flags', desc: '12 warning signs to catch before signing.' },
          { href: '/travel-nursing/how-to-negotiate-contract', title: 'How to Negotiate', desc: 'Scripts and tactics that work.' },
          { href: '/travel-nursing/vs-staff-nurse-salary', title: 'Travel vs. Staff Salary', desc: 'Is travel nursing worth it financially?' },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
            <span className="font-bold text-primary text-sm">{link.title} →</span>
            <p className="text-xs text-on-surface-variant mt-1">{link.desc}</p>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
