import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Certified Nurse Midwife Salary 2026: CNM Pay by State',
  description:
    'CNMs earn $120,880/year based on the latest BLS data. See certified nurse midwife salary by state, setting, and how CNM pay compares to OB/GYN NPs and labor nurses.',
  alternates: { canonical: 'https://nursesalaryintel.com/certified-nurse-midwife-salary-2026' },
  openGraph: {
    title: 'Certified Nurse Midwife Salary 2026',
    description: 'CNM salary by state, work setting, and career path comparison — 2026 data.',
    url: 'https://nursesalaryintel.com/certified-nurse-midwife-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much does a certified nurse midwife make in 2026?',
    answer: 'Certified nurse midwives (CNMs) earn an average of $120,880/year ($58.11/hour) nationally according to the latest available BLS OEWS data (May 2024, published 2025). California CNMs top the state rankings at approximately $148,000/year. Pay varies by $30,000–$40,000 depending on state, practice setting, and delivery volume.',
  },
  {
    question: 'How much does a nurse midwife make per hour?',
    answer: 'The national average hourly rate for CNMs is $58.11/hour in 2026. Hospital-employed CNMs typically earn $55–$68/hour, while CNMs in private practice or group OB/GYN settings can exceed $70/hour with performance bonuses tied to patient panel size and delivery volume.',
  },
  {
    question: 'Is a nurse midwife salary higher than a labor and delivery RN?',
    answer: 'Yes — by about $31,000–$39,000/year. L&D RNs average $82,000–$90,000/year while CNMs average $120,880/year, a premium of roughly $31,000–$39,000/year. The CNM credential requires a master\'s or doctoral degree (MSN or DNP) plus national certification, which accounts for the salary gap.',
  },
  {
    question: 'What degree do you need to become a certified nurse midwife?',
    answer: 'CNMs must hold a graduate degree (MSN or DNP) from an accredited nurse-midwifery program and pass the AMCB (American Midwifery Certification Board) national exam. Most programs take 2–3 years post-RN. Some employers require a DNP by 2030 per ACNM recommendations.',
  },
  {
    question: 'What state pays nurse midwives the most?',
    answer: 'California pays CNMs the most at approximately $148,000/year, followed by Massachusetts ($138,000), Washington ($132,000), and New York ($128,000). These states combine high cost-of-living adjustments, strong union contracts, and concentrated hospital systems that drive wages upward.',
  },
  {
    question: 'Can a nurse midwife have their own practice?',
    answer: 'Yes — in 37 states plus DC, CNMs have full practice authority and can open independent birth centers or private practices without physician oversight. Independent CNMs often earn $130,000–$160,000+ once their practice is established, though startup costs and malpractice insurance are significant considerations.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$148,000', hourlyRate: '$71.15/hr' },
  { label: 'Massachusetts', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'Washington', avgSalary: '$132,000', hourlyRate: '$63.46/hr' },
  { label: 'New York', avgSalary: '$128,000', hourlyRate: '$61.54/hr' },
  { label: 'Oregon', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: 'National Average', avgSalary: '$120,880', hourlyRate: '$58.11/hr' },
  { label: 'Texas', avgSalary: '$112,000', hourlyRate: '$53.85/hr' },
  { label: 'Florida', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
  { label: 'Mississippi', avgSalary: '$95,000', hourlyRate: '$45.67/hr' },
];

const settingData = [
  { label: 'Independent Birth Center (owner)', avgSalary: '$145,000+', hourlyRate: 'Variable' },
  { label: 'Hospital — Level III/IV NICU', avgSalary: '$132,000', hourlyRate: '$63.46/hr' },
  { label: 'Private OB/GYN Group Practice', avgSalary: '$128,000', hourlyRate: '$61.54/hr' },
  { label: 'Hospital — Community (Level I/II)', avgSalary: '$122,000', hourlyRate: '$58.65/hr' },
  { label: 'Federally Qualified Health Center (FQHC)', avgSalary: '$118,000', hourlyRate: '$56.73/hr' },
  { label: 'Telehealth / Remote Prenatal', avgSalary: '$105,000', hourlyRate: '$50.48/hr' },
];

const careerComparison = [
  { label: 'L&D RN (BSN)', avgSalary: '$86,000/yr', hourlyRate: '$41.35/hr' },
  { label: 'CNM (MSN)', avgSalary: '$120,880/yr', hourlyRate: '$58.11/hr — +$35K vs L&D RN' },
  { label: 'WHNP (Women\'s Health NP)', avgSalary: '$122,000/yr', hourlyRate: '$58.65/hr' },
  { label: 'OB/GYN NP (hospital)', avgSalary: '$118,000/yr', hourlyRate: '$56.73/hr' },
  { label: 'Neonatal NP (ACNP)', avgSalary: '$126,000/yr', hourlyRate: '$60.58/hr' },
];

export default function CertifiedNurseMidwifeSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Certified Nurse Midwife Salary 2026' },
      ]}
      h1="Certified Nurse Midwife Salary 2026: What CNMs Really Earn"
      lastUpdated="May 2026"
      schemaTitle="Certified Nurse Midwife Salary 2026"
      schemaDescription="Average CNM salary by state, work setting, and career comparison in 2026."
      schemaUrl="/certified-nurse-midwife-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/certified-nurse-midwife-salary-2026-hero.webp"
        alt="Certified nurse midwife in scrubs consulting with a pregnant patient in a warm clinical setting, professional and compassionate demeanor"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Certified nurse midwives earn $120,880/year ($58.11/hr)</strong> based on the latest BLS data nationally —
          roughly <strong>$35,000/year more than L&D RNs</strong> with the same clinical setting.
          California CNMs lead all states at <strong>$148,000/year</strong>. CNMs with full practice authority
          and independent birth centers can earn <strong>$145,000+</strong>.
        </p>
      </div>

      <p>
        The certified nurse midwife credential sits at the intersection of advanced practice nursing and obstetric
        care. CNMs manage prenatal visits, labor, delivery, and postpartum care — and in 37 states plus DC, they
        do it independently without physician oversight. That scope of practice is reflected directly in their pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNM Salary by State (2026)</h2>
      <p>
        California and Massachusetts dominate the top of the CNM salary rankings, driven by union contracts,
        high hospital density, and cost-of-living adjustments. The gap between the highest-paying state
        (California, $148,000) and lowest (Mississippi, $95,000) is $53,000/year — among the widest spreads
        of any advanced practice nursing specialty.
      </p>
      <SalaryTable
        title="Certified Nurse Midwife Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS May 2024 (published 2025) + 2026 estimates"
      />

      <Image
        src="/images/certified-nurse-midwife-salary-2026-comparison.png"
        alt="Bar chart comparing certified nurse midwife salaries across top-paying states in 2026, with national average highlighted"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNM Salary by Work Setting</h2>
      <p>
        Where a CNM practices matters almost as much as which state they work in. Independent birth center
        owners and hospital CNMs at Level III/IV trauma centers consistently out-earn their peers in
        community hospitals and federally qualified health centers — though FQHCs often offer loan
        repayment programs worth $50,000+ that close the gap considerably.
      </p>
      <SalaryTable
        title="CNM Pay by Work Setting (2026)"
        headers={['Work Setting', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={settingData}
        source="BLS OEWS May 2024 + AMCB workforce data"
      />

      <Image
        src="/images/certified-nurse-midwife-salary-2026-hospital.webp"
        alt="Nurse midwife in clinical scrubs supporting a patient during labor in a modern hospital birthing suite, warm overhead lighting"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNM vs. L&D RN vs. OB/GYN NP: The Full Comparison</h2>
      <p>
        For L&D nurses considering the CNM path, the salary math is compelling: the $35,000/year premium
        over a BSN-prepared L&D RN typically recoups MSN program costs (average $30,000–$50,000) within
        two years of graduation. CNMs who go on to complete a DNP unlock additional administrative,
        faculty, and independent practice opportunities.
      </p>
      <SalaryTable
        title="Maternal & Women's Health Career Salary Comparison"
        headers={['Credential', 'Avg Annual Salary', 'Premium & Notes']}
        rows={careerComparison}
        source="BLS OEWS May 2024 + NurseSalaryIntel 2026 estimates"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Full Practice Authority and CNM Pay</h2>
      <p>
        State practice authority laws directly shape what CNMs can earn. In full-authority states —
        California, Oregon, Washington, Colorado, Minnesota, and 33 others — CNMs can open independent
        practices, bill insurers directly, and negotiate their own compensation. In restricted states,
        CNMs require a collaborative agreement with an OB/GYN physician, which often means working
        as an employee rather than an independent provider.
      </p>
      <p>
        The pay gap between full-authority and restricted states is measurable: CNMs in full-authority
        states earn an estimated 8–12% more on average, primarily because they can capture revenue
        streams (telehealth, group prenatal, birth center fees) unavailable to employed CNMs.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Nurse Midwife vs. Midwife: What's the Difference?</h2>
      <p>
        A certified nurse midwife (CNM) holds an RN license plus a master&apos;s or doctoral degree in
        nurse-midwifery. A certified midwife (CM) has graduate-level midwifery education but does not
        hold an RN license. CMs are only recognized in a handful of states. A certified professional
        midwife (CPM) is a credential focused on out-of-hospital birth and is not recognized by
        Medicare or most hospital credentialing bodies. For career earnings and portability, the CNM
        credential is by far the strongest.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiating Your CNM Offer</h2>
      <p>
        CNMs have more leverage than most nurses when negotiating because midwifery-trained providers
        are in genuine short supply — the ACNM projects a significant workforce gap through 2030.
        Key items to negotiate beyond base salary: call pay (typically $5–$15/hr extra), delivery
        bonuses ($50–$200 per attended birth), malpractice tail coverage (worth $10,000–$30,000
        when changing jobs), and loan repayment if joining an FQHC or rural health clinic.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/labor-delivery-nurse-salary-2026', label: 'L&D Nurse Salary 2026', desc: 'The RN path in maternal care' },
          { href: '/whnp-salary-2026', label: "Women's Health NP Salary 2026", desc: 'WHNP vs CNM pay comparison' },
          { href: '/nurse-practitioner-salary-2026', label: 'Nurse Practitioner Salary 2026', desc: 'Full NP salary breakdown' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Nurse Salary Negotiation Guide', desc: 'Negotiate your next CNM offer' },
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
