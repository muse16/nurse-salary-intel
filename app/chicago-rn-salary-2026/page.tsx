import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';

export const metadata: Metadata = {
  title: 'Chicago RN Salary 2026: $83,580/yr Avg + Northwestern, Rush & U of C Pay',
  description: 'Chicago RN salary 2026: $83,580/yr average, $40.18/hr. Pay by hospital, sign-on bonuses, specialty premiums, and how Chicago compares to other Midwest metros.',
  alternates: { canonical: 'https://nursesalaryintel.com/chicago-rn-salary-2026' },
};

const experienceData = [
  { label: 'Entry-Level (0–2 yrs)', avgSalary: '$67,800 – $76,200', hourlyRate: '$32.60 – $36.60/hr' },
  { label: 'Mid-Career (5–10 yrs)', avgSalary: '$85,400 – $99,200', hourlyRate: '$41.10 – $47.70/hr' },
  { label: 'Senior (10+ yrs)', avgSalary: '$99,600 – $121,000', hourlyRate: '$47.90 – $58.20/hr' },
  { label: 'Top 10% earners', avgSalary: '$126,800+', hourlyRate: '$61.00+/hr' },
];

const hospitalData = [
  { label: 'Northwestern Memorial Hospital', avgSalary: '$81,400 – $108,600', hourlyRate: 'Sign-on: $10K–$18K' },
  { label: 'Rush University Medical Center', avgSalary: '$79,800 – $104,500', hourlyRate: 'Sign-on: $8K–$15K' },
  { label: 'University of Chicago Medicine', avgSalary: '$80,200 – $106,300', hourlyRate: 'Academic premium' },
  { label: 'Advocate Christ Medical Center', avgSalary: '$77,500 – $99,800', hourlyRate: 'Sign-on: $7K–$12K' },
  { label: 'Lurie Children\'s Hospital', avgSalary: '$78,900 – $102,400', hourlyRate: 'Pediatric premium' },
  { label: 'Cook County Health (Stroger)', avgSalary: '$75,600 – $96,200', hourlyRate: 'PSLF eligible' },
  { label: 'NorthShore University HealthSystem', avgSalary: '$76,400 – $98,700', hourlyRate: 'Suburban premium' },
];

const specialtyData = [
  { label: 'Med-Surg / Floor', avgSalary: '$78,900', hourlyRate: 'Base' },
  { label: 'Telemetry', avgSalary: '$82,100', hourlyRate: '+$3,200' },
  { label: 'L&D', avgSalary: '$86,400', hourlyRate: '+$7,500' },
  { label: 'OR / Surgical', avgSalary: '$87,800', hourlyRate: '+$8,900' },
  { label: 'ER', avgSalary: '$89,200', hourlyRate: '+$10,300' },
  { label: 'ICU / CCU', avgSalary: '$91,600', hourlyRate: '+$12,700' },
  { label: 'NICU', avgSalary: '$88,700', hourlyRate: '+$9,800' },
  { label: 'Trauma (Level 1)', avgSalary: '$95,400', hourlyRate: '+$16,500' },
];

const cityComparison = [
  { label: 'Chicago, IL', avgSalary: '$83,580', hourlyRate: 'COL Index 107' },
  { label: 'Minneapolis, MN', avgSalary: '$82,140', hourlyRate: 'COL Index 103' },
  { label: 'Detroit, MI', avgSalary: '$74,800', hourlyRate: 'COL Index 88' },
  { label: 'Indianapolis, IN', avgSalary: '$69,400', hourlyRate: 'COL Index 90' },
  { label: 'National Average', avgSalary: '$89,010', hourlyRate: 'COL Index 100' },
];

const faqs = [
  { question: 'What is the average RN salary in Chicago in 2026?', answer: 'The average registered nurse salary in Chicago is $83,580/year ($40.18/hour) in 2026, based on BLS OEWS data for the Chicago-Naperville-Elgin MSA. New grads start at $67,800–$76,200 while senior specialty RNs earn $99,600–$121,000.' },
  { question: 'Which Chicago hospital pays nurses the most?', answer: 'Northwestern Memorial Hospital tops the range at $81,400–$108,600 base for specialty roles. Rush University Medical Center and University of Chicago Medicine follow closely at $79,800–$104,500 and $80,200–$106,300 respectively. Trauma, ICU, and OR specialties command the highest premiums.' },
  { question: 'Is Chicago a good city for nurses?', answer: 'Yes, with caveats. Chicago offers strong hospital systems, Magnet hospitals, and academic medical centers with excellent career development. Illinois has a higher cost of living than most Midwest cities (COL index ~107), but also no city income tax specific to nurses, and competitive sign-on bonuses.' },
  { question: 'How much do new grad RNs make in Chicago?', answer: 'New grad RNs in Chicago earn $67,800–$76,200/year ($32.60–$36.60/hr). Most major systems run 12–18 month residency programs. Sign-on bonuses for new grads typically run $5,000–$10,000 at academic medical centers.' },
  { question: 'Does Illinois have a nurse shortage affecting salaries?', answer: 'Yes. Illinois has a persistent nursing shortage, particularly outside Chicago. Rural and downstate facilities are competing with urban hospitals by offering rural differentials of $4,000–$8,000/year on top of base pay. Chicago hospital systems have responded with sign-on bonuses and market adjustment increases of 5–9% since 2024.' },
  { question: 'How fast can a Chicago RN reach $100K?', answer: 'Realistically 4–6 years with specialization. ICU + CCRN certification by year 4 puts you at $96,000–$104,000. Adding nights/weekends differential adds $14,000–$20,000/year on top of base. Trauma Level 1 experience accelerates the timeline.' },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com/' },
    { '@type': 'ListItem', position: 2, name: 'Salary Guides', item: 'https://nursesalaryintel.com/blog/' },
    { '@type': 'ListItem', position: 3, name: 'Chicago RN Salary 2026', item: 'https://nursesalaryintel.com/chicago-rn-salary-2026/' },
  ],
};

export default function ChicagoRNSalary2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SEOPageLayout
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Salary Guides', href: '/blog' }, { label: 'Chicago RN Salary 2026' }]}
        h1="Chicago RN Salary 2026: What Registered Nurses Earn at Northwestern, Rush & Beyond"
        lastUpdated="April 2026"
        schemaTitle="Chicago RN Salary 2026: $83,580/yr Avg + Northwestern, Rush & U of C Pay"
        schemaDescription="Chicago RN salary 2026: $83,580/yr average, $40.18/hr. Pay by hospital, sign-on bonuses, specialty premiums, and Midwest city comparison."
        schemaUrl="/chicago-rn-salary-2026/"
        faqs={faqs}
      >
        <p>
          The average <strong>registered nurse salary in Chicago is $83,580/year ($40.18/hour)</strong> in 2026 —
          about 6% below the national mean of $89,010 but well above the Illinois state average of $80,190.
          Chicago&apos;s academic medical centers — Northwestern, Rush, and U of C — push senior specialty nurses
          past $108,000, while suburban systems compete hard with sign-on bonuses hitting $18,000 for critical care.
        </p>

        <Image
          src="/images/chicago-rn-salary-2026-hospital.png"
          alt="Registered nurse reviewing patient chart at workstation inside modern Chicago academic medical center"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Chicago RN Salary at a Glance (2026)</h2>

        <SalaryTable
          title="Chicago RN Salary by Experience Level"
          headers={['Experience Level', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
          rows={experienceData}
          source="BLS OEWS 2025, Chicago-Naperville-Elgin MSA + NurseSalaryIntel 2026 projections"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Chicago RN Pay by Hospital</h2>
        <p>
          Chicago&apos;s hospital landscape is anchored by nationally ranked academic medical centers on the
          North Side, mid-sized community systems in the suburbs, and Cook County Health serving the safety-net
          population. Pay varies by ~$30,000 across the spectrum.
        </p>

        <SalaryTable
          title="Top Chicago Hospitals — RN Base Pay 2026"
          headers={['Hospital / System', 'Base RN Range', 'Notable']}
          rows={hospitalData}
          source="NurseSalaryIntel hospital data, 2026"
        />

        <p>
          <strong>Northwestern Memorial</strong> leads the market not just on base pay but on total comp structure —
          structured step increases every 2 years, robust retirement matching, and aggressive sign-on bonuses for
          ICU, ER, and OR roles make it the most competitive offer in the Chicago market for experienced nurses.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Chicago RN Salary by Specialty</h2>

        <SalaryTable
          title="Chicago RN Pay by Specialty (2026)"
          headers={['Specialty', 'Avg. Chicago Salary', 'Premium vs. Base']}
          rows={specialtyData}
          source="NurseSalaryIntel survey data, 2026"
        />

        <Image
          src="/images/chicago-rn-salary-2026-comparison.png"
          alt="Bar chart comparing 2026 average RN salaries in Chicago, Minneapolis, Detroit, Indianapolis, and national average"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Chicago vs. Other Midwest Cities</h2>

        <SalaryTable
          title="RN Salary — Chicago vs. Midwest Metros (2026)"
          headers={['City', 'Avg. Annual Salary', 'Cost of Living']}
          rows={cityComparison}
          source="BLS OEWS 2025 + NurseSalaryIntel 2026 projections"
        />

        <p>
          Chicago pays the most of any Midwest metro — but also has the highest cost of living in the region.
          Nurses relocating from Indianapolis or Detroit see a nominal salary increase that largely offsets the
          higher housing costs. However, Chicago&apos;s academic medical center concentration means significantly
          better career development, specialty access, and promotion velocity than smaller Midwest markets.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Sign-On Bonuses in Chicago (2026)</h2>
        <p>
          Chicago hospital systems are among the most aggressive for sign-on bonuses in the Midwest. Typical
          ranges as of 2026:
        </p>
        <ul>
          <li><strong>Med-Surg / Telemetry:</strong> $4,000 – $9,000 (1-year commitment)</li>
          <li><strong>L&D / OR / PACU:</strong> $8,000 – $14,000 (2-year commitment)</li>
          <li><strong>ICU / ER / NICU:</strong> $10,000 – $18,000 (2-year commitment)</li>
          <li><strong>Trauma / Cath Lab:</strong> $14,000 – $22,000 (2-year commitment)</li>
        </ul>
        <p>
          Northwestern Memorial and Rush consistently offer the highest sign-on figures for experienced specialty
          nurses. Cook County and suburban Advocate systems are catching up aggressively due to staffing pressure.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Shift Differentials + Night Pay in Chicago</h2>
        <p>
          Illinois union influence (SEIU Healthcare) affects shift differential structures at many Chicago facilities.
          Typical differentials:
        </p>
        <ul>
          <li><strong>Evening (3p–11p):</strong> +$2.50 – $4.00/hr</li>
          <li><strong>Night (11p–7a):</strong> +$4.50 – $7.00/hr</li>
          <li><strong>Weekend:</strong> +$2.00 – $4.50/hr</li>
          <li><strong>Charge nurse stipend:</strong> +$3.00 – $5.00/hr or flat $225/shift</li>
        </ul>
        <p>
          A full-time night-shift ICU RN with CCRN certification at Northwestern or Rush can realistically earn
          <strong> $100,000 – $118,000 in total compensation</strong> before sign-on or overtime.
        </p>

        <Image
          src="/images/chicago-rn-salary-2026-team.png"
          alt="Diverse team of Chicago nurses collaborating at nursing station in busy academic hospital"
          width={800}
          height={450}
          className="rounded-xl w-full"
          loading="lazy"
        />

        <h2 className="text-2xl font-bold font-headline text-on-surface">Illinois Nursing Licenses + NCLEX</h2>
        <p>
          Illinois is a member of the Nurse Licensure Compact (NLC) as of 2023, allowing multi-state practice.
          This has meaningfully increased travel and per diem nursing in Chicago, with agencies paying $65–$95/hr
          for ICU and ER contract nurses at major Chicago systems.
        </p>

        <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {[
            { href: '/rn-salary-by-state/illinois', label: 'Illinois RN Salary (Full State Guide)', desc: 'All cities, experience tiers, top employers' },
            { href: '/nursing-salary/icu-nurse-salary/illinois', label: 'ICU Nurse Salary in Illinois', desc: 'Critical care pay + CCRN premium' },
            { href: '/nursing-salary/er-nurse-salary/illinois', label: 'ER Nurse Salary in Illinois', desc: 'Emergency nursing pay statewide' },
            { href: '/houston-rn-salary-2026', label: 'Houston RN Salary 2026', desc: 'Compare with Texas Medical Center' },
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
          <li><a href="https://www.bls.gov/oes/current/oes291141.htm" target="_blank" rel="noopener noreferrer">BLS OEWS — Registered Nurses, Chicago-Naperville-Elgin MSA</a></li>
          <li><a href="https://www.aacnnursing.org/" target="_blank" rel="noopener noreferrer">American Association of Colleges of Nursing (AACN)</a></li>
          <li><a href="https://www.idfpr.com/profs/nursing.asp" target="_blank" rel="noopener noreferrer">Illinois Department of Financial and Professional Regulation — Nursing</a></li>
        </ul>
      </SEOPageLayout>
    </>
  );
}
