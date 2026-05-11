import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Labor & Delivery Nurse Salary 2026: $96,800/yr Avg + L&D Pay by State',
  description: 'Labor and delivery nurse salary 2026: $96,800/yr national avg. L&D RN pay by state, hospital, inpatient obstetrics vs. high-risk, RNC-OB cert differential, and travel rates.',
};

const faqs = [
  {
    question: 'What is the average labor and delivery nurse salary in 2026?',
    answer: 'Labor and delivery (L&D) nurses earn an average of $96,800/year ($46.54/hour) nationally in 2026 — about 8.8% above the overall RN average of $89,010. California L&D nurses lead the country at $112,000–$136,000, driven by CNA union contracts. High-risk obstetrics (MFM/antepartum) nurses typically earn 8–12% more than standard L&D nurses due to the added complexity of maternal-fetal medicine cases.',
  },
  {
    question: 'What is RNC-OB certification and how much does it increase pay?',
    answer: 'RNC-OB (Registered Nurse Certified in Inpatient Obstetric Nursing) is the primary specialty certification for L&D nurses, offered through NCC (National Certification Corporation). It adds $3,000–$6,000/year at Magnet hospitals that pay a certification differential. The exam requires 2 years of inpatient obstetric experience and at least 2,000 hours of current inpatient OB practice. NCC also offers the DRCC (Diversity Certified RN in Certified Care) and C-EFM (Electronic Fetal Monitoring) certifications, the latter being particularly valuable for L&D nurses focused on fetal surveillance.',
  },
  {
    question: 'How does L&D nurse pay compare to NICU nurse pay?',
    answer: 'L&D nurses ($96,800/yr avg) earn slightly less than NICU nurses ($98,400–$102,000/yr avg) nationally, reflecting NICU\'s higher acuity and the additional skill required for neonatal intensive care. However, high-risk L&D nurses at Level III/IV birth centers managing maternal-fetal complications can earn comparable salaries to NICU nurses at the same institution. Travel nurse rates for L&D and NICU are nearly identical in most markets.',
  },
  {
    question: 'What do L&D travel nurses earn?',
    answer: 'Labor and delivery travel nurses earn $3,000–$4,400/week all-in (taxable base + tax-free housing + meals) in 2026. California L&D travel contracts consistently top the range at $3,600–$4,400/week. The L&D travel market is active year-round — birth volume is relatively stable, and nurse-to-patient ratios during active labor (1:1 in most facilities) create a structurally large demand for agency staff during high-census periods.',
  },
];

const stateRows = [
  { label: 'California', avgSalary: '$112,000–$136,000', note: 'CNA union, Sharp Mary Birch #1 CA birth center' },
  { label: 'New York', avgSalary: '$104,000–$128,000', note: 'NYSNA, NYC metro academic birth centers' },
  { label: 'Massachusetts', avgSalary: '$100,000–$122,000', note: 'MNA union, BWH/MGH high-risk OB' },
  { label: 'Washington', avgSalary: '$96,000–$116,000', note: 'WSNA, UW Medicine Maternal-Fetal program' },
  { label: 'Oregon', avgSalary: '$94,000–$114,000', note: 'ONA union, OHSU level IV birth center' },
  { label: 'Texas', avgSalary: '$84,000–$104,000', note: 'No income tax, large market' },
  { label: 'Florida', avgSalary: '$80,000–$100,000', note: 'No income tax, growing demand' },
  { label: 'Pennsylvania', avgSalary: '$84,000–$104,000', note: 'PASNAP at Penn/HUP, large academic L&D' },
  { label: 'Arizona', avgSalary: '$80,000–$98,000', note: 'No state income tax after AZ cuts' },
  { label: 'National Average', avgSalary: '$96,800/yr', note: 'BLS OEWS 2024, published 2025' },
];

const hospitalRows = [
  { label: 'Kaiser Permanente (California)', avgSalary: '$112,000–$136,000', note: 'CNA union, largest CA birth program' },
  { label: 'Sharp Mary Birch (San Diego)', avgSalary: '$108,000–$132,000', note: '#1 birth center in CA by volume' },
  { label: 'UCSF / Stanford (Bay Area)', avgSalary: '$110,000–$134,000', note: 'Level IV MFM, complex maternal-fetal' },
  { label: 'NYU Langone / Bellevue (NYC)', avgSalary: '$104,000–$128,000', note: 'NYSNA, high-volume NYC L&D' },
  { label: 'Penn Medicine / HUP', avgSalary: '$86,000–$106,000', note: 'PASNAP, level IV birth center' },
  { label: 'Texas Children\'s Pavilion (Houston)', avgSalary: '$88,000–$108,000', note: 'High-volume, fetal center' },
  { label: 'Mayo Clinic (Rochester)', avgSalary: '$82,000–$100,000', note: 'Non-union, MFM referral center' },
  { label: 'HCA Healthcare (national)', avgSalary: '$74,000–$94,000', note: 'For-profit, largest L&D volume nationally' },
];

const specialtyRows = [
  { label: 'Maternal-Fetal Medicine (MFM) / High-Risk L&D', avgSalary: '$104,000–$130,000', note: 'Antepartum complications, fetal monitoring' },
  { label: 'Intrapartum (Active Labor / Delivery)', avgSalary: '$96,000–$118,000', note: 'Core L&D role, 1:1 during active labor' },
  { label: 'Antepartum (High-Risk OB)', avgSalary: '$98,000–$120,000', note: 'Pre-delivery complications management' },
  { label: 'Postpartum / Mother-Baby', avgSalary: '$88,000–$108,000', note: 'Lower acuity than active L&D' },
  { label: 'LDRP (Labor, Delivery, Recovery, Postpartum)', avgSalary: '$92,000–$112,000', note: 'Full-spectrum OB care in one unit' },
  { label: 'Neonatal Transport (L&D adjacent)', avgSalary: '$96,000–$118,000', note: 'Transport team, specialty premium' },
  { label: 'Lactation Consultant (IBCLC) + RN', avgSalary: '$88,000–$108,000', note: 'Dual credential = expanded scope' },
];

const certRows = [
  { label: 'RNC-OB (Inpatient Obstetric Nursing)', avgSalary: '+$3,000–$6,000/yr', note: 'NCC — primary L&D certification' },
  { label: 'C-EFM (Electronic Fetal Monitoring)', avgSalary: '+$2,000–$4,000/yr', note: 'NCC — fetal surveillance specialty' },
  { label: 'RNC-MNN (Maternal Newborn Nursing)', avgSalary: '+$2,000–$4,000/yr', note: 'NCC — postpartum specialty' },
  { label: 'RNC-OB + C-EFM (dual)', avgSalary: '+$5,000–$9,000/yr', note: 'Dual cert stack at Magnet hospitals' },
  { label: 'NRP (Neonatal Resuscitation)', avgSalary: 'Required', note: 'No differential — prerequisite for L&D hire' },
  { label: 'ACLS / BLS', avgSalary: 'Required', note: 'Baseline — no differential paid' },
];

export default function LaborDeliveryNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Labor & Delivery Nurse Salary 2026' },
      ]}
      h1="Labor & Delivery Nurse Salary 2026: What L&D RNs Earn by State, Hospital, and Certification"
      lastUpdated="May 2026"
      schemaTitle="Labor and Delivery Nurse Salary 2026"
      schemaDescription="Labor and delivery nurse salary 2026: $96,800/year national average. L&D RN pay by state, hospital, specialty level, and RNC-OB certification."
      schemaUrl="/labor-delivery-nurse-salary-2026"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-6 border border-outline-variant">
        <p className="text-on-surface font-medium">
          <strong>Quick Answer:</strong> Labor and delivery nurses earn a national average of <strong>$96,800/year ($46.54/hr)</strong> in 2026 — 8.8% above the overall RN average. California L&D nurses under CNA contracts reach <strong>$112,000–$136,000</strong>. RNC-OB certification adds <strong>$3,000–$6,000/year</strong> at Magnet hospitals. High-risk MFM nurses at Level IV birth centers earn a premium of <strong>8–12% above standard L&D pay</strong> at the same institution.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/labor-delivery-nurse-salary-2026-hero.png"
        alt="Labor and delivery nurse in light blue scrubs standing in a bright, modern hospital birth center with natural light coming through large windows"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        Labor and delivery nursing combines the intensity of acute care with the intimacy of one of the most significant moments in a family's life. The specialty requires fluency in electronic fetal monitoring, obstetric emergencies (shoulder dystocia, hemorrhage, cord prolapse), pharmacologic pain management, and — in high-risk settings — the complexities of managing pre-eclampsia, placenta previa, and other maternal-fetal complications.
      </p>
      <p>
        Compensation reflects this complexity. At <strong>$96,800/year</strong> nationally, L&D nurses earn meaningfully above the overall RN average — and the gap is wider at Level III and IV birth centers where high-risk volume justifies MFM-level skill premiums. In California under CNA contracts, top-step L&D nurses can clear <strong>$136,000/year</strong> without ever leaving the bedside.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Nurse Salary by State (2026)</h2>
      <p>
        The union coverage map drives L&D pay more than any other single factor. California, New York, Massachusetts, Washington, and Oregon — the five states with the strongest nursing union infrastructure — all pay L&D nurses substantially more than the Southern and Midwest non-union markets.
      </p>
      <SalaryTable
        headers={['State', 'L&D RN Salary Range', 'Notes']}
        rows={stateRows}
        title="Labor and delivery nurse salary by state, 2026. BLS OEWS data."
      />

      {/* Data chart */}
      <Image
        src="/images/labor-delivery-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing labor and delivery nurse salaries at major hospital systems in 2026, with Kaiser California and Sharp Mary Birch leading at $112,000–$136,000"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Nurse Salary by Hospital (2026)</h2>
      <p>
        Birth volume and acuity level determine hospital-level L&D pay as much as geography. Sharp Mary Birch Hospital in San Diego delivers more than 8,000 babies per year — the highest volume in California — which creates a staffing demand that keeps pay competitive even against Kaiser. Texas Children's Pavilion is the benchmark for high-risk obstetrics in the South.
      </p>
      <SalaryTable
        headers={['Hospital / System', 'L&D RN Salary Range', 'Notes']}
        rows={hospitalRows}
        title="L&D nurse salary by hospital system, 2026."
      />

      {/* Photorealistic inline image */}
      <Image
        src="/images/labor-delivery-nurse-salary-2026-hospital.png"
        alt="Labor and delivery nurse supporting a patient during labor in a warm, modern birth room with supportive lighting and medical monitoring equipment"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Pay by Sub-Specialty and Unit Type (2026)</h2>
      <p>
        Not all L&D positions are equal in complexity or compensation. High-risk obstetrics — managing patients with preeclampsia, gestational diabetes, fetal anomalies, or multiple gestation — carries a consistent premium over routine intrapartum care. Here's how the OB nursing spectrum compares:
      </p>
      <SalaryTable
        headers={['Sub-Specialty / Unit', 'Salary Range', 'Notes']}
        rows={specialtyRows}
        title="L&D nurse salary by obstetric sub-specialty, 2026."
      />
      <p>
        The career path in L&D follows acuity: most nurses start in routine intrapartum or postpartum, develop electronic fetal monitoring proficiency, then progress toward high-risk antepartum, MFM collaboration, and eventually charge nurse or clinical educator roles. Each transition carries a pay step up and typically requires additional certification.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Nursing Certifications: Pay Impact (2026)</h2>
      <SalaryTable
        headers={['Certification', 'Pay Impact', 'Notes']}
        rows={certRows}
        title="L&D nurse certification pay differentials, 2026. Hospital policies vary."
      />
      <p>
        The C-EFM (Electronic Fetal Monitoring) certification deserves particular attention. EFM interpretation is a core daily competency for every L&D nurse, and hospitals increasingly require it for hiring and promotion. Earning C-EFM signals to employers that your fetal surveillance skills have been objectively validated — reducing liability exposure and justifying a pay differential. At a Magnet hospital, stacking RNC-OB and C-EFM can add <strong>$5,000–$9,000/year</strong> to base.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">L&D Travel Nurse Pay (2026)</h2>
      <p>
        Labor and delivery travel nurses are in consistent national demand — the 1:1 nurse-to-patient ratio during active labor means every birth that starts before adequate staffing is in place creates immediate agency need. The L&D travel market is also notably active in the Southwest and Southeast, where birth rates are high and new grad pipelines are thin.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California L&D travel:</strong> $3,600–$4,400/week all-in</li>
        <li><strong>New York / Boston L&D travel:</strong> $3,200–$4,200/week</li>
        <li><strong>Texas L&D travel:</strong> $2,800–$3,600/week</li>
        <li><strong>Florida L&D travel:</strong> $2,800–$3,400/week</li>
        <li><strong>National average L&D travel:</strong> $3,000–$4,000/week</li>
        <li><strong>High-risk MFM travel premium:</strong> add $200–$500/week above standard L&D rates</li>
      </ul>
      <p className="mt-3">
        L&D travelers who hold RNC-OB and C-EFM certifications are significantly easier to place in high-bill-rate California contracts — many hospitals require or strongly prefer certified travelers. See our <Link href="/travel-nurse-agency-comparison-2026" className="text-primary hover:underline">travel nurse agency comparison</Link> for agencies with the deepest L&D inventory.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Maximize Your L&D Salary</h2>
      <ul className="list-disc pl-6 space-y-3 text-on-surface-variant">
        <li>
          <strong>Earn RNC-OB and C-EFM:</strong> The dual certification stack is the highest-leverage move for L&D pay. Both certifications together cost under $700 in exam fees and generate $5,000–$9,000/year in differential at Magnet hospitals — a 7–13× annual return on investment in the first year alone.
        </li>
        <li>
          <strong>Develop high-risk skills:</strong> Requesting cross-training in antepartum or MFM triage puts you in a higher pay band without changing employers. Nurses who can manage eclampsia, preterm labor protocols, and external cephalic versions are valued — and paid — differently than those limited to uncomplicated intrapartum care.
        </li>
        <li>
          <strong>Target CNA or NYSNA hospitals:</strong> The step scales at Kaiser, Sharp, and NYSNA facilities put $120,000–$136,000 within reach for an L&D nurse with 12–15 years of tenure. That's a ceiling most non-union hospitals in any state can't match.
        </li>
        <li>
          <strong>Model night shift differentials:</strong> L&D births don't follow a schedule — night staffing needs are high. A 15–20% night differential on a $96,800 base adds <strong>$14,500–$19,400/year</strong>. Use the <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline">night shift differential calculator</Link> to model your total comp including all shift premiums.
        </li>
      </ul>

      {/* Sources */}
      <p className="mt-8 text-sm text-on-surface-variant">
        <strong>Sources & Methodology:</strong> Salary ranges based on BLS Occupational Employment and Wage Statistics (OEWS) for Registered Nurses (SOC 29-1141) with L&D/OB specialization data from AWHONN (Association of Women's Health, Obstetric and Neonatal Nurses) 2024 Workforce Survey. Hospital-level ranges from Glassdoor, Indeed, and public union contract schedules (CNA, NYSNA, MNA). Certification differential data from NCC 2024 specialty certification survey. Individual results vary.
      </p>

      {/* Related guides */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link href="/nursing-salary/nicu-nurse-salary" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">NICU Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Neonatal pay by state and hospital</div>
        </Link>
        <Link href="/travel-nurse-agency-comparison-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Best Travel Nurse Agencies 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Top agencies for L&D travel contracts</div>
        </Link>
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">California RN Salary</div>
          <div className="text-sm text-on-surface-variant mt-1">Why CA L&D nurses lead the country</div>
        </Link>
        <Link href="/highest-paying-nursing-specialties" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Highest-Paying Nursing Specialties</div>
          <div className="text-sm text-on-surface-variant mt-1">Top 10 by salary — where L&D ranks</div>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
