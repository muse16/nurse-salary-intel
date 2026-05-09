import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Image from 'next/image';
import Link from 'next/link';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'OR Nurse Salary 2026: $102,800/yr Avg + Perioperative Pay by State & Role',
  description: 'OR nurse (perioperative RN) salary 2026: $102,800/yr national avg. Pay by state, hospital, scrub vs. circulator role, CNOR certification differential, and travel rates.',
};

const faqs = [
  {
    question: 'What is the average OR nurse salary in 2026?',
    answer: 'Operating room (perioperative) nurses earn an average of $102,800/year ($49.42/hour) nationally in 2026 — about 15.5% above the overall RN average of $89,010. OR nurses in California lead the country at $120,000–$145,000, driven by CNA union contracts and the state\'s mandatory staffing rules. The OR specialty premium reflects the high technical skill required, strict sterile technique protocols, and the limited pool of nurses trained in perioperative care.',
  },
  {
    question: 'What is the difference in pay between a scrub nurse and a circulating nurse?',
    answer: 'Circulating nurses (RNs who coordinate and document during surgery) and scrub nurses (who handle instruments and maintain the sterile field — often surgical technologists, not always RNs) typically earn the same base pay when both are RNs. The pay distinction in most OR settings is by certification level and years of experience rather than scrub vs. circulator. CNOR-certified nurses earn $4,000–$8,000/year more regardless of their intraoperative role.',
  },
  {
    question: 'Does CNOR certification increase OR nurse pay?',
    answer: 'Yes — CNOR (Certified Nurse Operating Room) certification through AORN adds $4,000–$8,000/year at Magnet-designated hospitals that pay a certification differential, and improves hiring placement and salary band positioning everywhere else. The exam requires 2 years of perioperative nursing experience and 2,400 hours of OR work within 3 years. At a $6,000/year average differential over a 15-year career, CNOR generates roughly $90,000 in additional cumulative earnings.',
  },
  {
    question: 'What do OR travel nurses earn in 2026?',
    answer: 'OR travel nurses earn $3,200–$4,600/week all-in (taxable base + tax-free housing + meals), with California contracts consistently at the top of the range ($3,800–$4,600/week). Robot-assisted surgery proficiency (da Vinci system) commands a $200–$400/week premium above standard OR travel rates due to the small pool of trained travelers. Most OR travel contracts are 13 weeks and require demonstrable experience in open, laparoscopic, and at least one specialty service (cardiac, ortho, neuro, or robotics).',
  },
];

const stateRows = [
  { label: 'California', avgSalary: '$120,000–$145,000', note: 'CNA union, leading OR pay nationally' },
  { label: 'New York', avgSalary: '$108,000–$130,000', note: 'NYSNA, high-volume academic ORs' },
  { label: 'Massachusetts', avgSalary: '$104,000–$126,000', note: 'MNA union, BWH / MGH surgical volume' },
  { label: 'Washington', avgSalary: '$98,000–$120,000', note: 'WSNA, UW Medicine and Swedish ORs' },
  { label: 'New Jersey', avgSalary: '$96,000–$118,000', note: 'NYC metro spillover, no city wage tax' },
  { label: 'Texas', avgSalary: '$86,000–$108,000', note: 'No state income tax, large market' },
  { label: 'Florida', avgSalary: '$80,000–$100,000', note: 'No state income tax, high demand' },
  { label: 'North Carolina', avgSalary: '$78,000–$98,000', note: 'Duke / UNC top, otherwise mid-range' },
  { label: 'Tennessee', avgSalary: '$76,000–$94,000', note: 'No state income tax, lower COL' },
  { label: 'National Average', avgSalary: '$102,800/yr', note: 'BLS OEWS 2024, published 2025' },
];

const hospitalRows = [
  { label: 'Kaiser Permanente (California)', avgSalary: '$120,000–$145,000', note: 'CNA union, robotic surgery premium' },
  { label: 'Stanford Health Care / UCSF', avgSalary: '$118,000–$140,000', note: 'Academic, high-volume robotics' },
  { label: 'NYU Langone / Mount Sinai', avgSalary: '$108,000–$130,000', note: 'NYSNA, Level I trauma ORs' },
  { label: 'Cleveland Clinic', avgSalary: '$90,000–$112,000', note: 'Cardiac surgery volume leader' },
  { label: 'Mayo Clinic (Rochester)', avgSalary: '$86,000–$106,000', note: 'Non-union, structured merit system' },
  { label: 'Penn Medicine / HUP', avgSalary: '$86,000–$108,000', note: 'PASNAP, high robotics volume at HUP' },
  { label: 'Texas Medical Center', avgSalary: '$88,000–$110,000', note: 'Houston Methodist, MD Anderson surgical' },
  { label: 'HCA Healthcare (national)', avgSalary: '$76,000–$96,000', note: 'Varies by market, for-profit' },
];

const roleRows = [
  { label: 'CRNA (Anesthesia — advanced practice)', avgSalary: '$210,000–$252,000', note: 'Graduate degree — the OR ceiling' },
  { label: 'First Assistant (RNFA)', avgSalary: '$118,000–$148,000', note: 'Additional training/certification required' },
  { label: 'Robotic Surgery Specialist (da Vinci)', avgSalary: '$108,000–$138,000', note: '$8–$15K premium at high-volume robotic centers' },
  { label: 'Cardiac / Open-Heart OR Nurse', avgSalary: '$104,000–$132,000', note: 'High acuity, limited facilities' },
  { label: 'Neuro OR Nurse', avgSalary: '$102,000–$128,000', note: 'Specialized positioning, long cases' },
  { label: 'Ortho OR Nurse', avgSalary: '$100,000–$124,000', note: 'High volume, joint replacement premium' },
  { label: 'General OR / Circulator', avgSalary: '$96,000–$118,000', note: 'Entry point to perioperative specialty' },
  { label: 'PACU (Post-Anesthesia Care)', avgSalary: '$94,000–$116,000', note: 'Perioperative — slightly below OR base' },
];

const certRows = [
  { label: 'CNOR (Certified Nurse OR)', avgSalary: '+$4,000–$8,000/yr', note: 'AORN certification — most valued in OR' },
  { label: 'CRNFA (First Assistant)', avgSalary: '+$12,000–$22,000/yr', note: 'Additional scope — significantly higher pay' },
  { label: 'CPAN (Post-Anesthesia)', avgSalary: '+$3,000–$6,000/yr', note: 'ASPAN certification for PACU nurses' },
  { label: 'da Vinci Robotic Proficiency', avgSalary: '+$4,000–$10,000/yr', note: 'Not a formal cert, but training = premium' },
  { label: 'BLS / ACLS / PALS', avgSalary: 'Required', note: 'No differential — baseline requirement' },
];

export default function ORNurseSalary() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/salary-guides' },
        { label: 'OR Nurse Salary 2026' },
      ]}
      h1="OR Nurse Salary 2026: What Perioperative Nurses Earn by State, Role, and Certification"
      lastUpdated="May 2026"
      schemaTitle="OR Nurse Salary 2026"
      schemaDescription="Operating room (perioperative) nurse salary 2026: $102,800/year national average. Pay by state, hospital, role, and CNOR certification."
      schemaUrl="/or-nurse-salary-2026"
      faqs={faqs}
    >
      {/* Quick Answer */}
      <div className="bg-surface-container-low rounded-xl p-5 mb-6 border border-outline-variant">
        <p className="text-on-surface font-medium">
          <strong>Quick Answer:</strong> OR nurses earn a national average of <strong>$102,800/year ($49.42/hr)</strong> in 2026 — 15.5% above the overall RN average. California OR nurses under CNA union contracts reach <strong>$120,000–$145,000</strong>. CNOR certification adds <strong>$4,000–$8,000/year</strong> at most Magnet hospitals. Robotic surgery proficiency (da Vinci) commands an additional premium as hospitals rapidly expand minimally invasive surgical programs.
        </p>
      </div>

      {/* Hero image */}
      <Image
        src="/images/or-nurse-salary-2026-hero.png"
        alt="Operating room nurse in surgical scrubs and cap preparing a sterile instrument tray in a modern hospital operating room with bright surgical lighting"
        width={1200}
        height={630}
        className="rounded-xl w-full"
        priority
      />

      <p>
        OR nursing is one of the most technically demanding specialties in the profession — and one of the best compensated. Perioperative nurses manage the entire surgical experience: pre-op assessment, sterile field setup, intraoperative circulating and scrubbing, and PACU recovery. The specialty's complexity, combined with a national shortage of trained OR nurses (perioperative training takes 6–12 months and can't be shortcut), creates a compensation premium that compounds over a career.
      </p>
      <p>
        The specialty is also experiencing a structural shift: robotic-assisted surgery now accounts for over 15% of all U.S. surgical procedures and growing. OR nurses with demonstrated da Vinci or Medtronic Hugo proficiency command a meaningful premium — hospitals can't easily find or develop this skill, so they pay to retain it.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">OR Nurse Salary by State (2026)</h2>
      <p>
        The state-level spread for OR nurses mirrors the overall RN market: California and New York dominate due to union contracts and high cost of living, while Southern states pay materially less despite no state income tax. The after-tax picture narrows the gap somewhat, but the raw salary differential is significant.
      </p>
      <SalaryTable
        headers={['State', 'OR RN Salary Range', 'Notes']}
        rows={stateRows}
        title="OR nurse salary by state, 2026. BLS OEWS perioperative nursing data."
      />

      {/* Data chart */}
      <Image
        src="/images/or-nurse-salary-2026-comparison.png"
        alt="Bar chart comparing OR nurse salaries at major hospital systems in 2026, with Kaiser California leading at $120,000–$145,000 and national average at $102,800"
        width={800}
        height={450}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">OR Nurse Salary by Hospital System (2026)</h2>
      <p>
        Surgical volume and specialty mix drive OR pay as much as location. Academic medical centers with high-complexity cardiac, neuro, and robotic programs pay OR nurses more because the skill demand is higher. Cleveland Clinic and Mayo Clinic are outliers among non-union systems — their OR pay is competitive with union hospitals because surgical excellence is a core brand differentiator.
      </p>
      <SalaryTable
        headers={['Hospital / System', 'OR RN Salary Range', 'Notes']}
        rows={hospitalRows}
        title="OR nurse salary by hospital system, 2026."
      />

      {/* Photorealistic inline image */}
      <Image
        src="/images/or-nurse-salary-2026-hospital.png"
        alt="Surgical team including nurses and surgeon in a modern operating room preparing for a robotic-assisted procedure with da Vinci equipment visible"
        width={600}
        height={800}
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">OR Nurse Pay by Role and Specialty Service (2026)</h2>
      <p>
        Within perioperative nursing, sub-specialization pays. The gap between a general OR circulator and a robotic surgery specialist or First Assistant can be <strong>$15,000–$45,000/year</strong>. Here's how OR nursing roles compare on compensation:
      </p>
      <SalaryTable
        headers={['Role / Specialty', 'Salary Range', 'Notes']}
        rows={roleRows}
        title="OR nurse salary by perioperative role, 2026."
      />
      <p>
        The RNFA (Registered Nurse First Assistant) path deserves particular attention. It requires additional education (typically a post-basic certificate program through AORN-approved schools), but adds <strong>$15,000–$45,000/year</strong> to a staff OR nurse's compensation. In high-volume cardiac and orthopedic programs, RNFAs are essential members of the surgical team — and hospitals pay accordingly to retain trained staff.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">CNOR and Perioperative Certifications: Pay Impact</h2>
      <SalaryTable
        headers={['Certification', 'Pay Impact', 'Notes']}
        rows={certRows}
        title="OR nurse certification pay differentials, 2026. Hospital policies vary."
      />
      <p>
        CNOR certification, offered by AORN's Competency and Credentialing Institute (CCI), is the gold standard for OR nursing. Achieving it requires 2 years of perioperative experience and passing a 200-question exam. For nurses planning a long OR career, the investment pays back many times over — not just through direct differentials but through access to charge nurse, educator, and leadership roles that are often reserved for certified nurses.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">OR Travel Nurse Pay (2026)</h2>
      <p>
        OR travel nurses are among the highest-compensated travelers in any specialty. The perioperative training gap — new OR nurses take 6–12 months to orient, and experienced OR nurses rarely move between systems without some re-orientation — creates persistent agency demand that keeps bill rates elevated.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California OR travel (general):</strong> $3,800–$4,600/week all-in</li>
        <li><strong>California robotic surgery OR travel:</strong> $4,200–$5,000/week</li>
        <li><strong>New York / Boston OR travel:</strong> $3,400–$4,400/week</li>
        <li><strong>Texas / Florida OR travel:</strong> $3,000–$3,800/week</li>
        <li><strong>National average OR travel:</strong> $3,200–$4,200/week</li>
      </ul>
      <p className="mt-3">
        Most OR travel contracts require demonstrated competency across multiple service lines — cardiac, ortho, and general at minimum. Travelers who can work robotics, open-heart, and neuro are in the highest demand and receive premium placement. The agencies with the deepest OR inventory: <Link href="/travel-nurse-agency-comparison-2026" className="text-primary hover:underline">see our travel nurse agency comparison</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How to Earn $130,000+ as an OR Staff Nurse</h2>
      <ul className="list-disc pl-6 space-y-3 text-on-surface-variant">
        <li>
          <strong>Get trained on robotic surgery:</strong> Request or pursue da Vinci training at your current hospital. If your facility doesn't have a robotic program, the skill makes you significantly more attractive to systems that do — and the pay premium at those systems is real.
        </li>
        <li>
          <strong>Pursue CNOR and CRNFA:</strong> CNOR is a must. CRNFA is the high-leverage move — the path from staff OR nurse to first assistant is the clearest route to $140,000+ without leaving the bedside or pursuing a graduate degree.
        </li>
        <li>
          <strong>Target union hospitals in California, New York, or Massachusetts:</strong> The step scales at Kaiser, UCSF, and major NYSNA hospitals put $130,000+ within reach after 10–12 years for any OR nurse who stays the course.
        </li>
        <li>
          <strong>Use <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline">shift differential math</Link>:</strong> OR nurses who take overnight/weekend on-call shifts — common in trauma centers and high-volume programs — can add $12,000–$20,000/year in differential pay on top of base. Call pay is often separate from base salary and taxed differently, so model it carefully.
        </li>
      </ul>

      {/* Sources */}
      <p className="mt-8 text-sm text-on-surface-variant">
        <strong>Sources & Methodology:</strong> Salary ranges based on BLS Occupational Employment and Wage Statistics (OEWS) for Registered Nurses (SOC 29-1141) with perioperative specialization data from AORN Nursing Insights 2025 Salary Survey. Hospital-level ranges from Glassdoor, Indeed, and public union contract schedules (CNA, NYSNA, MNA). Certification differential data from AORN 2024 member survey. Robotic surgery premium data from Intuitive Surgical market analysis. Individual results vary.
      </p>

      {/* Related guides */}
      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link href="/critical-care-nurse-salary-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Critical Care Nurse Salary 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">ICU pay by state, system, and CCRN cert</div>
        </Link>
        <Link href="/travel-nurse-agency-comparison-2026" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Best Travel Nurse Agencies 2026</div>
          <div className="text-sm text-on-surface-variant mt-1">Top agencies for OR travel contracts</div>
        </Link>
        <Link href="/nurse-salary-by-hospital" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Nurse Salary by Hospital</div>
          <div className="text-sm text-on-surface-variant mt-1">Kaiser $140K+ vs HCA, Mayo, Ascension</div>
        </Link>
        <Link href="/highest-paying-nursing-specialties" className="block p-4 rounded-xl border border-outline-variant hover:bg-surface-container-low transition-colors">
          <div className="font-semibold text-on-surface">Highest-Paying Nursing Specialties</div>
          <div className="text-sm text-on-surface-variant mt-1">Top 10 specialties — CRNA at $214K</div>
        </Link>
      </div>
        <MethodologyBox />
</SEOPageLayout>
  );
}
