import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import { MethodologyBox } from '@/components/MethodologyBox';

export const metadata: Metadata = {
  title: 'Aesthetic Nurse Salary 2026: What Injectors & Med Spa RNs Earn',
  description:
    'Aesthetic nurses earn $65,000–$110,000+ in 2026. See pay by role, setting, and commission structure — plus what it actually takes to break into medical aesthetics.',
  alternates: { canonical: 'https://nursesalaryintel.com/aesthetic-nurse-salary-2026' },
  openGraph: {
    title: 'Aesthetic Nurse Salary 2026',
    description: 'Aesthetic RN and nurse injector pay by role, setting, and commission structure.',
    url: 'https://nursesalaryintel.com/aesthetic-nurse-salary-2026',
  },
};

const faqs = [
  {
    question: 'How much do aesthetic nurses make in 2026?',
    answer: 'Aesthetic nurses earn $65,000–$110,000+ annually in 2026 depending on role, setting, and commission structure. Base salaries at med spas typically run $65,000–$80,000 for RNs and $85,000–$100,000 for NP injectors. High-volume injectors with commission can exceed $110,000–$130,000 in total compensation.',
  },
  {
    question: 'What is an aesthetic nurse?',
    answer: 'An aesthetic nurse is a registered nurse (RN) or nurse practitioner (NP) who performs cosmetic procedures including Botox, dermal fillers, laser treatments, chemical peels, and other non-surgical interventions. Most work in medical spas, dermatology offices, or plastic surgery practices. NPs can typically practice with greater autonomy than RNs in aesthetics.',
  },
  {
    question: 'Do aesthetic nurses get commission?',
    answer: 'Yes — commission is common in aesthetics and is often the difference between a $70K and $110K+ income. Structures vary: some practices pay 10–20% of treatment revenue, others use bonuses for exceeding monthly targets. High-volume injectors who build their own client base can negotiate commission into every new role.',
  },
  {
    question: 'Do you need NP certification to inject Botox?',
    answer: 'It depends on the state. Most states allow RNs to inject Botox and fillers under physician oversight — an RN working in a physician-owned or physician-supervised med spa can typically perform injections legally. NPs with full practice authority can inject independently without oversight in full-authority states. Always verify your state\'s delegation laws before practicing.',
  },
  {
    question: 'What certifications do aesthetic nurses need?',
    answer: 'There is no federally mandated certification for aesthetic nursing. However, the American Association of Aesthetic Medicine and Surgery (AAAMS) and the Plastic Surgical Nursing Certification Board offer credentials that improve employability. Most employers require hands-on injection training (typically a 1–3 day course) plus RN or NP licensure.',
  },
  {
    question: 'Is aesthetic nursing a good career change for RNs?',
    answer: 'For RNs seeking better hours, less physical strain, and higher ceiling income, aesthetics is one of the most attractive pivots. The trade-offs: most positions are non-union, benefits vary widely, and income can fluctuate with client volume. Building a loyal client base takes 12–24 months but meaningfully increases income once established.',
  },
];

const roleData = [
  { label: 'Med Spa Owner / Equity Partner (NP)', avgSalary: '$150,000+', hourlyRate: 'Equity dependent' },
  { label: 'NP Injector — High Volume Practice', avgSalary: '$115,000', hourlyRate: '$55.29/hr + commission' },
  { label: 'RN Injector — Commission Model', avgSalary: '$95,000', hourlyRate: '$45.67/hr + % revenue' },
  { label: 'Aesthetic RN — Hospital / Plastics Group', avgSalary: '$78,000', hourlyRate: '$37.50/hr' },
  { label: 'New Aesthetic RN — Base Only (no commission)', avgSalary: '$65,000', hourlyRate: '$31.25/hr' },
];

const settingData = [
  { label: 'Independent / Boutique Med Spa', avgSalary: '$95,000–$130,000', hourlyRate: 'High commission potential' },
  { label: 'Dermatology Group Practice', avgSalary: '$85,000–$105,000', hourlyRate: '$40–$50/hr + bonus' },
  { label: 'Plastic Surgery Practice', avgSalary: '$80,000–$100,000', hourlyRate: '$38–$48/hr' },
  { label: 'Hospital-Based Aesthetics Dept', avgSalary: '$75,000–$88,000', hourlyRate: '$36–$42/hr + benefits' },
  { label: 'Franchise Med Spa Chain', avgSalary: '$65,000–$80,000', hourlyRate: '$31–$38/hr, structured bonus' },
];

const stateHighlights = [
  { label: 'California (LA, SF, Orange County)', avgSalary: '$95,000–$125,000', hourlyRate: 'Highest demand markets' },
  { label: 'New York (NYC metro)', avgSalary: '$90,000–$120,000', hourlyRate: 'Dense competition, high volume' },
  { label: 'Texas (Dallas, Houston, Austin)', avgSalary: '$80,000–$110,000', hourlyRate: 'Fast-growing market' },
  { label: 'Florida (Miami, Naples, Boca)', avgSalary: '$80,000–$108,000', hourlyRate: 'Strong luxury demand' },
  { label: 'National Median (all markets)', avgSalary: '$78,000–$95,000', hourlyRate: 'Before commission' },
];

export default function AestheticNurseSalary2026() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Salary Guides', href: '/blog' },
        { label: 'Aesthetic Nurse Salary 2026' },
      ]}
      h1="Aesthetic Nurse Salary 2026: What Injectors and Med Spa RNs Actually Earn"
      lastUpdated="May 2026"
      schemaTitle="Aesthetic Nurse Salary 2026"
      schemaDescription="Aesthetic nurse and nurse injector salary by role, setting, and commission structure in 2026."
      schemaUrl="/aesthetic-nurse-salary-2026"
      faqs={faqs}
    >
      <Image
        src="/images/aesthetic-nurse-salary-2026-hero.webp"
        alt="Aesthetic nurse practitioner in a modern medical spa consultation room, professional clinical setting with clean white interior and natural light"
        width={1200}
        height={630}
        sizes="(max-width: 1024px) 100vw, 896px"
        className="rounded-xl w-full"
        priority
      />

      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Aesthetic nurses earn $65,000–$110,000+/year</strong> in 2026 depending on role and commission structure.
          Base-only RN positions at med spas start around <strong>$65,000</strong>. NP injectors with
          commission in high-volume practices reach <strong>$115,000–$130,000</strong>. Med spa owners
          with equity can surpass <strong>$150,000</strong>.
        </p>
      </div>

      <p>
        Medical aesthetics has become one of the fastest-growing niches in nursing — and one of the
        most income-variable. The difference between a $70K aesthetic RN and a $115K NP injector often
        comes down to three things: license type, commission structure, and client volume. Here is the
        full 2026 breakdown.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Aesthetic Nurse Salary by Role (2026)</h2>
      <p>
        Unlike most nursing specialties where BLS OEWS provides a clean salary figure, aesthetic nursing
        is not tracked as a separate BLS category — these roles fall under registered nurses and nurse
        practitioners depending on credential. Salary data below reflects industry surveys and
        job posting analysis from 2024–2026.
      </p>
      <SalaryTable
        title="Aesthetic Nurse Pay by Role"
        headers={['Role', 'Avg Annual Compensation', 'Compensation Structure']}
        rows={roleData}
        source="AAAMS workforce survey 2024 + NurseSalaryIntel job posting analysis 2025–2026"
      />

      <Image
        src="/images/aesthetic-nurse-salary-2026-comparison.png"
        alt="Horizontal bar chart showing aesthetic nurse salary ranges by role from new aesthetic RN to med spa owner in 2026"
        width={800}
        height={450}
        sizes="(max-width: 1024px) 100vw, 800px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Aesthetic Nurse Pay by Work Setting</h2>
      <p>
        Independent boutique med spas and dermatology groups consistently offer the highest total
        compensation for injectors — primarily because they build commission structures around revenue
        share. Hospital-based aesthetics departments offer lower total pay but stronger benefits,
        PTO, and retirement matching that can close the gap when modeled over 10 years.
      </p>
      <SalaryTable
        title="Aesthetic RN / NP Pay by Employer Type"
        headers={['Work Setting', 'Avg Annual Compensation', 'Structure Notes']}
        rows={settingData}
        source="NurseSalaryIntel job posting analysis 2025–2026"
      />

      <Image
        src="/images/aesthetic-nurse-salary-2026-hospital.webp"
        alt="Aesthetic nurse practitioner performing a consultation with a patient in a bright modern clinic, reviewing a treatment plan with professional focus"
        width={600}
        height={800}
        sizes="(max-width: 1024px) 100vw, 448px"
        className="rounded-xl w-full"
        loading="lazy"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Top Markets for Aesthetic Nurses</h2>
      <p>
        Aesthetic nursing income correlates closely with local disposable income, cosmetic surgery market
        density, and the concentration of high-end med spas. The top markets by both demand and pay
        are coastal metros and fast-growing Sun Belt cities.
      </p>
      <SalaryTable
        title="Aesthetic Nurse Pay by Geographic Market"
        headers={['Market', 'Salary Range (2026)', 'Notes']}
        rows={stateHighlights}
        source="NurseSalaryIntel job posting and salary survey analysis"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">The Commission Math: Why It Matters More Than Base Pay</h2>
      <p>
        At a practice charging $600 for Botox and $800 for filler, an RN injector doing 8 patients
        per day at a 12% revenue commission earns $499–$768 per day in commission alone — or roughly
        $120,000–$185,000 annualized, before base salary. The math only works at high volume with
        a loyal client base, which typically takes 12–24 months to build.
      </p>
      <p>
        When evaluating an offer, model the commission structure at three volume scenarios: 4, 8, and
        12 patients per day. Ask what the top injector at the practice actually earns. If the employer
        won't share that number, that tells you something.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Getting Into Aesthetics: The Realistic Path</h2>
      <p>
        Most aesthetic employers want 1–2 years of clinical RN experience before hiring. Beyond that,
        a hands-on injection training course (typically $2,000–$5,000 for a reputable 2–3 day program
        through AAAMS, IPSA, or similar) is the expected entry credential. Some employers will pay for
        this training as part of onboarding. NPs have significantly more latitude for independent
        practice in aesthetics and generally start at higher pay bands.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nurse-practitioner-salary-2026', label: 'NP Salary 2026', desc: 'Full NP compensation breakdown' },
          { href: '/dnp-salary-2026', label: 'DNP Salary 2026', desc: 'Doctoral-level nursing pay' },
          { href: '/highest-paying-nursing-specialties', label: 'Highest Paying Nursing Specialties', desc: 'Where nurses earn the most' },
          { href: '/nurse-salary-negotiation-guide-2026', label: 'Negotiation Guide 2026', desc: 'Negotiate commission + base together' },
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
