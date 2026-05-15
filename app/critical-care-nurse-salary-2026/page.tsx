import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Critical Care Nurse Salary 2026: $98,400/yr Avg + ICU Pay by State & Cert',
  description: 'Critical care nurse salary 2026: $98,400/yr avg nationally. ICU RN pay by state, hospital system, and CCRN certification — plus how to earn $130K+ in the ICU.',
};

const faqs = [
  {
    question: 'What is the average critical care nurse salary in 2026?',
    answer: 'Critical care (ICU) nurses earn an average of $98,400/year ($47.31/hour) nationally in 2026, roughly 10.5% above the overall RN average of $89,010. The premium reflects higher acuity, mandatory 1:2 nurse-to-patient ratios, and the clinical complexity of managing ventilated, hemodynamically unstable patients. California ICU nurses lead the country at $125,000–$148,000 for experienced staff, while ICU nurses in lower-cost states like Mississippi and Arkansas average $64,000–$72,000.',
  },
  {
    question: 'Does CCRN certification increase ICU nurse pay?',
    answer: 'Yes — CCRN (Critical Care Registered Nurse) certification through AACN adds $4,000–$8,000/year in most markets, either through a direct certification differential (common at Magnet hospitals) or through preferential hiring and faster advancement into higher pay bands. Some hospitals pay $2–$4/hr more for certified nurses, compounding to $4,160–$8,320/year on a full-time schedule. Maintaining CCRN also qualifies nurses for charge nurse and preceptor roles that carry additional pay.',
  },
  {
    question: 'How does ICU nurse pay compare to ER nurse pay?',
    answer: 'ICU and ER nurses earn very similar base salaries nationally — both average $96,000–$100,000/year. The difference is in structure: ICU nurses often earn more through base pay and step increases (due to union step scales that reward tenure), while ER nurses may earn more through overtime and shift differentials (due to higher-volume, less predictable staffing needs). In travel nursing, ICU and ER rates are nearly identical, typically $3,400–$4,800/week in high-demand markets.',
  },
  {
    question: 'What ICU nursing specialties pay the most?',
    answer: 'Cardiac ICU (CICU), surgical ICU (SICU), and neuro ICU (NICU — the neuro type, not neonatal) nurses typically earn 5–12% above general medical ICU nurses. CRNA is the ceiling for critical-care-adjacent roles at $210,000–$250,000, but requires a graduate degree. For staff RNs without advanced degrees, CICU nurses at academic medical centers in California, New York, or Massachusetts can exceed $140,000 at the top of union step scales.',
  },
];

const stateRows = [
  { label: 'California', avgSalary: '$125,000–$148,000', note: 'CNA union, ratio law — highest nationally' },
  { label: 'New York', avgSalary: '$108,000–$132,000', note: 'NYSNA union at NYC academic centers' },
  { label: 'Massachusetts', avgSalary: '$104,000–$128,000', note: 'MNA union, BWH/MGH/BIDMC benchmark' },
  { label: 'Washington', avgSalary: '$100,000–$122,000', note: 'WSNA contracts, Seattle premium' },
  { label: 'Oregon', avgSalary: '$96,000–$118,000', note: 'ONA union, Portland market' },
  { label: 'Hawaii', avgSalary: '$98,000–$118,000', note: 'HGEA, high COL — net pay lower than peers' },
  { label: 'Texas', avgSalary: '$84,000–$104,000', note: 'No state income tax, non-union, large market' },
  { label: 'Florida', avgSalary: '$78,000–$98,000', note: 'No state income tax, growing market' },
  { label: 'Pennsylvania', avgSalary: '$86,000–$108,000', note: 'PASNAP at Penn/Temple, UPMC market' },
  { label: 'Illinois', avgSalary: '$84,000–$104,000', note: 'NNU contracts at Northwestern/Rush' },
  { label: 'North Carolina', avgSalary: '$76,000–$96,000', note: 'Duke/UNC premium, generally non-union' },
  { label: 'National Average', avgSalary: '$98,400/yr', note: 'BLS OEWS 2024, published 2025' },
];

const hospitalRows = [
  { label: 'Kaiser Permanente (California)', avgSalary: '$125,000–$148,000', note: 'CNA union, statewide step scale — highest ceiling' },
  { label: 'UCSF Medical Center', avgSalary: '$128,000–$145,000', note: 'Academic, Magnet, Bay Area premium' },
  { label: 'Stanford Health Care', avgSalary: '$122,000–$142,000', note: 'Level I trauma, strong union presence' },
  { label: 'NYU Langone / Mount Sinai', avgSalary: '$108,000–$132,000', note: 'NYSNA, NYC metro premium' },
  { label: 'Massachusetts General Hospital', avgSalary: '$104,000–$128,000', note: 'MNA union, leading academic center' },
  { label: 'Penn Medicine / HUP', avgSalary: '$88,000–$112,000', note: 'PASNAP, Level I trauma, academic' },
  { label: 'Mayo Clinic (Rochester)', avgSalary: '$84,000–$102,000', note: 'Non-union, structured merit system' },
  { label: 'Houston Methodist', avgSalary: '$86,000–$106,000', note: 'No state income tax, top Texas payer' },
  { label: 'Duke University Medical Center', avgSalary: '$82,000–$102,000', note: 'Academic, top NC payer' },
  { label: 'HCA Healthcare (national)', avgSalary: '$74,000–$92,000', note: 'Varies widely by market, for-profit' },
];

const unitRows = [
  { label: 'CRNA (advanced practice)', avgSalary: '$210,000–$252,000', note: 'Graduate degree required — the ceiling' },
  { label: 'Cardiac ICU (CICU)', avgSalary: '$100,000–$130,000', note: 'LVAD, IABP, post-cardiac surgery complex' },
  { label: 'Surgical ICU (SICU)', avgSalary: '$98,000–$126,000', note: 'Post-op major surgery, trauma' },
  { label: 'Neuro ICU (Neuro-ICU)', avgSalary: '$98,000–$124,000', note: 'Stroke, TBI, post-neurosurgery' },
  { label: 'Medical ICU (MICU)', avgSalary: '$96,000–$122,000', note: 'Sepsis, ARDS, multi-organ failure' },
  { label: 'Burn ICU', avgSalary: '$100,000–$128,000', note: 'High acuity, limited units nationally' },
  { label: 'Trauma ICU', avgSalary: '$98,000–$126,000', note: 'Level I/II trauma centers only' },
  { label: 'Progressive Care / Step-Down (PCU)', avgSalary: '$86,000–$108,000', note: 'Bridge to ICU, slightly lower acuity' },
];

const certRows = [
  { label: 'No certification (base)', avgSalary: '$98,400/yr', note: 'National ICU average' },
  { label: 'CCRN (Adult ICU)', avgSalary: '+$4,000–$8,000/yr', note: 'Most widely held, AACN — highest differential' },
  { label: 'CCRN-K (Knowledge-based)', avgSalary: '+$2,000–$4,000/yr', note: 'For non-bedside critical care roles' },
  { label: 'TCRN (Trauma)', avgSalary: '+$3,000–$6,000/yr', note: 'Level I/II trauma centers, adds hiring preference' },
  { label: 'CEN (Emergency)', avgSalary: '+$3,000–$5,000/yr', note: 'Cross-valued in ED-adjacent ICU roles' },
  { label: 'PCCN (Progressive Care)', avgSalary: '+$2,000–$4,000/yr', note: 'PCU/step-down units' },
  { label: 'ACLS / PALS (required, not differential)', avgSalary: 'Required', note: 'No pay differential — prerequisite for hire' },
];

export default function CriticalCareNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Critical Care Nurse Salary 2026' },
      ]}
      h1="Critical Care Nurse Salary 2026: ICU Pay by State, Hospital System, and Certification"
      lastUpdated="May 2026"
      schemaTitle="Critical Care Nurse Salary 2026"
      schemaDescription="Critical care (ICU) nurse salary 2026: $98,400/year national average. Pay data by state, hospital system, ICU unit type, and CCRN certification."
      schemaUrl="/critical-care-nurse-salary-2026"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-6 border border-outline-variant">
        <p className="text-on-surface font-medium">
          <strong>Quick Answer:</strong> Critical care nurses earn a national average of <strong>$98,400/year ($47.31/hr)</strong> in 2026 — about 10.5% above the overall RN average. California ICU nurses lead at <strong>$125,000–$148,000</strong> under CNA union contracts. CCRN certification adds <strong>$4,000–$8,000/year</strong> at most Magnet hospitals. The fastest path to $130K+ as a staff nurse: CICU or SICU role at a CNA or NYSNA union hospital with 10+ years on the step scale.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/critical-care-nurse-salary-2026-hero.png"
        alt="Critical care nurse in scrubs monitoring patient vital signs on multiple screens in a modern hospital ICU with blue-toned clinical lighting"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <p>
        The ICU is where nursing compensation peaks for staff RNs without advanced degrees. The combination of mandatory 1:2 nurse-to-patient ratios, continuous hemodynamic monitoring, and the complexity of managing ventilated patients creates a labor market where demand consistently outpaces supply — and employers pay accordingly.
      </p>
      <p>
        At the national level, <strong>$98,400/year</strong> is the average — but the range is enormous. A Mississippi ICU nurse earns $64,000–$72,000. A California Kaiser ICU nurse at the top of the CNA step scale earns <strong>$148,000</strong>. Understanding which side of that range you're on — and what it takes to move — is the real value of this guide.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Critical Care Nurse Salary by State (2026)</h2>
      <p>
        State matters more for ICU nurses than almost any other specialty, because union contract coverage is geographically clustered: California, New York, Massachusetts, Washington, and Oregon cover the majority of unionized nurses in the country. The wage gap between a top-union-state ICU nurse and a non-union Southern state ICU nurse can exceed <strong>$50,000–$60,000/year</strong>.
      </p>
      <SalaryTable
        headers={['State', 'ICU RN Salary Range', 'Notes']}
        rows={stateRows}
        title="Critical care nurse salary by state, 2026. BLS OEWS data."
      />

      {/* Data chart */}
      <Image
        src="/images/critical-care-nurse-salary-2026-comparison.png"
        alt="Horizontal bar chart showing critical care nurse salary ranges by state in 2026, with California leading at $125,000–$148,000 and national average at $98,400"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">ICU Nurse Salary by Hospital System (2026)</h2>
      <p>
        Hospital system matters as much as location. A Kaiser ICU nurse in Sacramento earns substantially more than a community hospital ICU nurse in Sacramento — even though they're in the same city and county. The differentials below reflect the compounding effect of union step scales, Magnet designation, and academic affiliation.
      </p>
      <SalaryTable
        headers={['Hospital / System', 'ICU RN Salary Range', 'Notes']}
        rows={hospitalRows}
        title="ICU nurse salary by hospital system, 2026."
      />
      <p>
        The practical implication: if you're a new grad choosing your first ICU job, the hospital system you join may matter more than the city. A Kaiser new grad in a mid-cost California city will out-earn a 10-year veteran at an HCA facility in a major metro by the time they hit the 8-year mark on the union step scale.
      </p>

      {/* Photorealistic inline image */}
      <Image
        src="/images/critical-care-nurse-salary-2026-hospital.png"
        alt="Two ICU nurses in scrubs collaborating at a nursing station surrounded by patient monitoring equipment in a modern intensive care unit"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">ICU Pay by Unit Type (2026)</h2>
      <p>
        Not all ICUs pay the same rate. Cardiac, surgical, and burn ICUs typically carry a 5–10% premium over general medical ICUs due to higher acuity and more specialized skill requirements. Here's how the major ICU unit types compare:
      </p>
      <SalaryTable
        headers={['ICU Unit Type', 'Salary Range', 'Notes']}
        rows={unitRows}
        title="Critical care nurse salary by ICU unit type, 2026."
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">How CCRN Certification Affects Pay</h2>
      <p>
        CCRN certification — offered by the American Association of Critical-Care Nurses (AACN) — is the most financially valuable certification available to ICU nurses. Most Magnet-designated hospitals pay a direct certification differential, and virtually all academic medical centers weight CCRN positively in hiring and promotion decisions.
      </p>
      <SalaryTable
        headers={['Certification', 'Pay Impact', 'Notes']}
        rows={certRows}
        title="ICU nurse certification pay differentials, 2026. Hospital policies vary."
      />
      <p>
        The math on CCRN is straightforward: the exam costs roughly $270 (AACN member price), requires 1,750 hours of direct ICU care, and recertifies every 3 years. At a $6,000/year differential — the midpoint of the range — a nurse who holds CCRN for 10 years nets <strong>$60,000 more in cumulative earnings</strong> than a non-certified peer at the same step level. For nurses at non-Magnet hospitals where no direct differential is paid, CCRN still improves hiring odds and position on the salary band at the next employer.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Critical Care Travel Nurse Pay (2026)</h2>
      <p>
        ICU travel nursing consistently commands the highest bill rates of any non-CRNA nursing role. The combination of 1:2 ratios (which limit overtime alternatives), high acuity, and a relatively small pool of qualified travelers creates persistent premium pricing.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California ICU travel:</strong> $4,000–$5,200/week all-in — highest in the country</li>
        <li><strong>New York / Boston ICU travel:</strong> $3,800–$4,800/week</li>
        <li><strong>Texas / Florida ICU travel:</strong> $3,200–$4,200/week</li>
        <li><strong>National average ICU travel:</strong> $3,400–$4,400/week</li>
        <li><strong>CICU / Burn ICU specialty premium:</strong> add $200–$500/week over standard ICU rates</li>
      </ul>
      <p className="mt-3">
        ICU travelers who work consecutive 13-week contracts in California markets can earn <strong>$175,000–$220,000/year</strong> all-in — tax-free stipends included. The catch: back-to-back California contracts at the same facility violate the tax-home rules that qualify stipends as tax-free, so experienced travelers rotate between 2–3 facilities across different cities. See our <Link href="/travel-nurse-agency-comparison-2026" className="text-primary hover:underline">travel nurse agency comparison</Link> for the agencies that consistently place ICU nurses in high-bill-rate California contracts.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Reach $130,000+ as an ICU Staff Nurse</h2>
      <p>
        Six-figure-plus ICU nursing as a staff RN — without becoming a CRNA or going into management — is achievable in specific circumstances. The path:
      </p>
      <ul className="list-disc pl-6 space-y-3 text-on-surface-variant">
        <li>
          <strong>Target a CNA or NYSNA union hospital:</strong> The step scale does the work. A Kaiser ICU nurse who joins at Step 1 and stays 15 years will reach $140,000–$148,000 through contractually guaranteed annual increases — no promotions required.
        </li>
        <li>
          <strong>Specialize in CICU or SICU:</strong> These units carry the highest base rates and the most robust travel demand. The specialty training investment — typically 6–12 months of orientation — pays off over a career.
        </li>
        <li>
          <strong>Earn and maintain CCRN:</strong> At a Magnet hospital with a 3% certification differential, CCRN on a $104,000 salary adds $3,120/year. Stack night shift differential (15–20% at most hospitals) and charge nurse premium ($2–4/hr) and you're adding <strong>$18,000–$26,000/year</strong> in differentials and certifications on top of base.
        </li>
        <li>
          <strong>Use <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline">night shift differential math</Link> to your advantage:</strong> ICU night shift at a major academic center adds $15–$22/hr on top of base. A $98,000 base nurse working nights full-time clears $112,000–$118,000 before overtime.
        </li>
      </ul>

      {/* Sources */}
      <p className="mt-8 text-sm text-on-surface-variant">
        <strong>Sources & Methodology:</strong> Salary ranges based on BLS Occupational Employment and Wage Statistics (OEWS) for Registered Nurses (SOC 29-1141), 2024 data (published 2025), filtered to critical care/ICU roles using supplemental AACN workforce survey data. Hospital-level ranges from Glassdoor, Indeed, and publicly available union contract schedules (CNA, NYSNA, MNA, ONA). Certification differential data from AACN 2024 Nurse Compensation Survey. Individual results vary.
      </p>

      {/* Related guides */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link href="/nurse-salary-by-hospital" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Nurse Salary by Hospital</div>
          <div className="text-sm text-on-surface-variant mt-1">Kaiser $140K+ vs HCA, Mayo, Penn Medicine</div>
        </Link>
        <Link href="/travel-nurse-agency-comparison-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Best Travel Nurse Agencies 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Top agencies for ICU travel contracts</div>
        </Link>
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">California RN Salary</div>
          <div className="text-sm text-on-surface-variant mt-1">Why CA ICU nurses lead the country</div>
        </Link>
        <Link href="/nursing-salary/charge-nurse-salary" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Charge Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">ICU charge differential: $2–$6/hr more</div>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
