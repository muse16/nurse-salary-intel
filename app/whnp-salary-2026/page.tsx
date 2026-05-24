import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: "Women's Health NP Salary 2026: WHNP Pay by State & Setting",
  description:
    "Women's health NPs earn $122,000/year based on the latest BLS data. See WHNP salary by state, setting, and how it compares to CNM, OB/GYN NP, and general FNP pay.",
  alternates: { canonical: 'https://nursesalaryintel.com/whnp-salary-2026' },
  openGraph: {
    title: "Women's Health NP (WHNP) Salary 2026",
    description: "WHNP salary by state, work setting, and specialty comparison in 2026.",
    url: 'https://nursesalaryintel.com/whnp-salary-2026',
  },
};

const faqs = [
  {
    question: "How much does a women's health nurse practitioner make in 2026?",
    answer: "Women's health nurse practitioners (WHNPs) earn approximately $122,000/year nationally in 2026. State-level pay ranges from $102,000 in lower-paying markets to $145,000+ in California. WHNPs in fertility clinics and private OB/GYN practices often earn at the upper end of this range due to high patient revenue and bonus structures.",
  },
  {
    question: "What does a women's health NP do?",
    answer: "WHNPs provide comprehensive women's health care across the lifespan — routine gynecological exams, contraceptive management, prenatal care (in some states), menopause management, STI screening and treatment, and reproductive health counseling. In fertility clinics, WHNPs may manage hormone protocols, follicle monitoring, and IUI procedures. Scope varies by state practice authority.",
  },
  {
    question: "Is a WHNP the same as a CNM?",
    answer: "No. A WHNP (Women's Health Nurse Practitioner) focuses on gynecological and reproductive health but is not trained to manage labor and delivery independently. A CNM (Certified Nurse Midwife) is specifically trained for antepartum, intrapartum, and postpartum care including attending births. WHNPs may assist in prenatal care but do not typically manage active labor — that's the CNM's scope.",
  },
  {
    question: "What certification do you need to be a WHNP?",
    answer: "The primary certification is the WHNP-BC credential awarded by the National Certification Corporation (NCC). Candidates must hold an MSN or higher from an accredited WHNP program and complete a minimum of 500 clinical hours in women's health. Recertification is required every 3 years via continuing education or re-examination.",
  },
  {
    question: "What state pays WHNPs the most?",
    answer: "California pays WHNPs the most at approximately $145,000/year, driven by high hospital wages, strong union contracts (particularly in LA and SF metros), and a concentration of private fertility and reproductive health practices. New York and Washington follow at $138,000 and $132,000 respectively.",
  },
  {
    question: "Is WHNP or FNP better for salary?",
    answer: "FNPs have broader practice scope and more job availability nationally, which gives them flexibility and consistent employment. WHNPs command a specialty premium in women's health-focused settings — particularly fertility clinics and private OB/GYN practices. Average salaries are comparable ($120K–$126K), but top-earning WHNPs in high-revenue fertility practices can earn $15,000–$30,000/year above average FNP pay.",
  },
];

const stateData = [
  { label: 'California', avgSalary: '$145,000', hourlyRate: '$69.71/hr' },
  { label: 'New York', avgSalary: '$138,000', hourlyRate: '$66.35/hr' },
  { label: 'Washington', avgSalary: '$132,000', hourlyRate: '$63.46/hr' },
  { label: 'Massachusetts', avgSalary: '$130,000', hourlyRate: '$62.50/hr' },
  { label: 'Oregon', avgSalary: '$126,000', hourlyRate: '$60.58/hr' },
  { label: 'National Average', avgSalary: '$122,000', hourlyRate: '$58.65/hr' },
  { label: 'Texas', avgSalary: '$115,000', hourlyRate: '$55.29/hr' },
  { label: 'Florida', avgSalary: '$112,000', hourlyRate: '$53.85/hr' },
  { label: 'Tennessee', avgSalary: '$102,000', hourlyRate: '$49.04/hr' },
];

const settingData = [
  { label: 'Fertility Clinic (IVF / Reproductive Endo)', avgSalary: '$135,000', hourlyRate: '$64.90/hr + bonus' },
  { label: 'Private OB/GYN Group Practice', avgSalary: '$128,000', hourlyRate: '$61.54/hr' },
  { label: 'Hospital-Based Women\'s Health', avgSalary: '$124,000', hourlyRate: '$59.62/hr' },
  { label: 'Planned Parenthood / Reproductive Health Org', avgSalary: '$115,000', hourlyRate: '$55.29/hr' },
  { label: 'FQHC / Community Health Center', avgSalary: '$112,000', hourlyRate: '$53.85/hr + loan repayment' },
  { label: 'Telehealth (OB/GYN or contraception focus)', avgSalary: '$108,000', hourlyRate: '$51.92/hr' },
];

const specialtyComparison = [
  { label: 'WHNP (fertility clinic)', avgSalary: '$135,000/yr', hourlyRate: 'Highest WHNP earning setting' },
  { label: 'CNM (hospital-employed)', avgSalary: '$120,880/yr', hourlyRate: 'BLS national mean' },
  { label: 'WHNP (national average)', avgSalary: '$122,000/yr', hourlyRate: 'Comparable to CNM' },
  { label: 'FNP (national average)', avgSalary: '$126,820/yr', hourlyRate: 'BLS NP mean (all specialties)' },
  { label: 'OB/GYN NP (hospital)', avgSalary: '$118,000/yr', hourlyRate: 'Narrower scope than WHNP' },
];

export default function WHNPSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: "Women's Health NP Salary 2026" },
      ]}
      h1="Women's Health NP Salary 2026: What WHNPs Earn by State and Setting"
      lastUpdated="May 2026"
      schemaTitle="Women's Health NP Salary 2026"
      schemaDescription="WHNP salary by state, work setting, and comparison to CNM and FNP in 2026."
      schemaUrl="/whnp-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/whnp-salary-2026-hero.webp"
        alt="Women's health nurse practitioner consulting with a patient in a modern gynecology clinic, warm natural lighting, professional clinical setting"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Women&apos;s health NPs earn $122,000/year</strong> based on the latest BLS data nationally.
          California WHNPs lead all states at <strong>$145,000/year</strong>. Fertility clinic
          WHNPs are the highest earners in the specialty — often reaching <strong>$135,000+</strong>
          with bonus structures tied to patient cycles. Comparable to CNM pay with a different clinical scope.
        </p>
      </div>

      <p>
        The women&apos;s health nurse practitioner is one of the most specialized — and most in-demand —
        NP credentials in the country. Fertility care alone is a $5 billion industry with a significant
        provider shortage. That supply-demand gap is showing up directly in WHNP compensation, particularly
        in reproductive endocrinology and IVF clinic settings.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">WHNP Salary by State (2026)</h2>
      <p>
        California dominates WHNP pay rankings — not just because of cost of living, but because the
        state has the highest concentration of fertility clinics, women&apos;s health practices, and
        unionized hospital NP positions in the country. New York follows closely for similar reasons.
      </p>
      <SalaryTable
        title="Women's Health NP Salary by State"
        headers={['State', 'Avg Annual Salary', 'Avg Hourly Rate']}
        rows={stateData}
        source="BLS OEWS May 2024 (NP SOC 29-1171) + NurseSalaryIntel specialty estimates 2026"
      />

      <Image
        src="/images/whnp-salary-2026-comparison.png"
        alt="Bar chart comparing women's health NP salaries across top-paying states in 2026, national average highlighted in amber"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">WHNP Salary by Work Setting</h2>
      <p>
        Fertility clinics are the highest-paying setting for WHNPs by a meaningful margin.
        Revenue per patient in reproductive endocrinology is exceptionally high ($15,000–$30,000
        per IVF cycle), and clinics structure NP compensation to reflect that revenue contribution.
        Community health centers and telehealth platforms pay the least in base salary, though FQHCs
        offer loan repayment that can add $25,000–$50,000 in value for nurses carrying student debt.
      </p>
      <SalaryTable
        title="WHNP Pay by Work Setting (2026)"
        headers={['Work Setting', 'Avg Annual Salary', 'Notes']}
        rows={settingData}
        source="NurseSalaryIntel job posting analysis + NCC workforce data 2024"
      />

      <Image
        src="/images/whnp-salary-2026-hospital.webp"
        alt="Women's health nurse practitioner reviewing patient records at a clinical workstation in a women's health center, focused professional expression"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">WHNP vs. CNM vs. FNP: How the Pay Compares</h2>
      <p>
        The WHNP, CNM, and FNP credentials overlap in women&apos;s health but serve different practice
        domains. CNMs attend deliveries; WHNPs generally do not. FNPs see patients across all ages
        and conditions; WHNPs specialize exclusively in women&apos;s health across the lifespan. Pay
        between these credentials is surprisingly close nationally, but the settings where each
        earns the most diverge sharply.
      </p>
      <SalaryTable
        title="Women's Health Credential Salary Comparison"
        headers={['Credential', 'Avg Annual Salary', 'Notes']}
        rows={specialtyComparison}
        source="BLS OEWS May 2024 + NurseSalaryIntel 2026 specialty estimates"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Fertility Clinic Opportunity</h2>
      <p>
        Reproductive endocrinology and infertility (REI) is one of the few healthcare settings where
        WHNPs consistently earn above the national NP average. Duties include hormone protocol management,
        follicular ultrasound monitoring, IUI procedures, ovulation induction, and patient education
        through IVF cycles. The work is intensive — patient contact is daily during stimulation cycles
        — but the compensation reflects it.
      </p>
      <p>
        Top-paying fertility clinic roles often include base salary plus a per-cycle or panel bonus.
        At busy urban IVF clinics running 500+ cycles annually, experienced WHNPs earning $135,000–$155,000
        total compensation are not uncommon in high-cost markets.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Getting WHNP Certified</h2>
      <p>
        The WHNP-BC exam through the National Certification Corporation (NCC) requires an MSN from
        an accredited WHNP program plus 500 supervised clinical hours in women&apos;s health.
        Recertification is every 3 years. Most MSN-WHNP programs can be completed online in 2–3 years
        while working, though clinical placement in women&apos;s health settings is required and
        can be a bottleneck in underserved areas.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/certified-nurse-midwife-salary-2026', label: 'CNM Salary 2026', desc: "Compare WHNP vs nurse midwife pay" },
          { href: '/fnp-salary-2026', label: 'FNP Salary 2026', desc: 'Family NP pay vs WHNP comparison' },
          { href: '/nurse-practitioner-salary-2026', label: 'NP Salary 2026', desc: 'Full NP compensation breakdown' },
          { href: '/pmhnp-salary-2026', label: 'PMHNP Salary 2026', desc: 'Psychiatric NP pay data' },
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
