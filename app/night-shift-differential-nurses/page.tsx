import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much More Do Night Shift Nurses Make? 2026 Pay Guide',
  description:
    'Night shift nurses earn $4\u2013$10/hr more in 2026 \u2014 that\u2019s up to $25K extra per year. See differential rates by state, real take-home math, and whether nights are worth it.',
  alternates: { canonical: 'https://nursesalaryintel.com/night-shift-differential-nurses' },
  openGraph: {
    title: 'How Much More Do Night Shift Nurses Make? 2026 Pay Guide',
    description: 'Night shift nurses earn $4\u2013$10/hr more in 2026 \u2014 up to $25K extra/year. Pay by state, take-home math, and the full trade-off breakdown.',
    url: 'https://nursesalaryintel.com/night-shift-differential-nurses',
  },
};

const faqs = [
  {
    question: 'What is the night shift nurse salary in 2026?',
    answer: 'Night shift RNs earn $88,000\u2013$110,000/year on average in 2026 when differential pay is included, compared to $77,600 for day-shift RNs. The premium comes from night shift differentials of 10\u201325% stacked on top of base pay.',
  },
  {
    question: 'How much more do night shift nurses make than day shift?',
    answer: 'On a $85,000 base salary, a 15% night differential adds $12,750/year. Combined with weekend differentials and overtime, consistent night nurses can earn $20,000\u2013$40,000 more annually than day-shift counterparts.',
  },
  {
    question: 'What is the average night shift differential for nurses?',
    answer: 'Most hospitals pay a night shift differential of 10\u201325% above base pay. Union hospitals in states like California and New York often pay 15\u201325%, while non-union facilities in the South typically pay 10\u201315%.',
  },
  {
    question: 'Is night shift differential taxed differently?',
    answer: 'No \u2014 differential pay is taxed as ordinary income at your marginal rate, the same as base pay. The additional income may push you into a higher tax bracket, so calculating net take-home is important before committing to nights.',
  },
  {
    question: 'Which states pay the highest night shift nurse salary?',
    answer: 'California night shift RNs earn the most \u2014 $118,000\u2013$132,000/year with differential included. Washington ($108,000\u2013$122,000) and Massachusetts ($104,000\u2013$118,000) follow. Texas and Florida night nurses earn $82,000\u2013$98,000 with differential, but keep more due to no state income tax.',
  },
];

const stateData = [
  { label: 'California', avgSalary: '$102,600', hourlyRate: '$118,000\u2013$132,000 w/ differential' },
  { label: 'Washington', avgSalary: '$94,200', hourlyRate: '$108,000\u2013$122,000 w/ differential' },
  { label: 'Massachusetts', avgSalary: '$91,800', hourlyRate: '$104,000\u2013$118,000 w/ differential' },
  { label: 'New York', avgSalary: '$89,400', hourlyRate: '$100,000\u2013$114,000 w/ differential' },
  { label: 'Texas', avgSalary: '$77,200', hourlyRate: '$86,000\u2013$98,000 w/ differential' },
  { label: 'Florida', avgSalary: '$71,800', hourlyRate: '$80,000\u2013$92,000 w/ differential' },
  { label: 'National Average', avgSalary: '$77,600', hourlyRate: '$88,000\u2013$110,000 w/ differential' },
];

export default function NightShiftDifferential() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Night Shift Nurse Salary 2026' },
      ]}
      h1="Night Shift Nurse Salary 2026: How Much More Do Night Nurses Make?"
      lastUpdated="April 2026"
      schemaTitle="Night Shift Nurse Salary 2026"
      schemaDescription="Night shift RN salary by state, differential rates, and total annual pay impact for 2026."
      schemaUrl="/night-shift-differential-nurses"
      faqs={faqs}
    >
      {/* Featured snippet answer block */}
      <div className="not-prose bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
        <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wide mb-2">Quick Answer</p>
        <p className="text-on-surface text-base">
          <strong>Night shift nurses earn $88,000\u2013$110,000/year</strong> on average in 2026 \u2014 roughly
          <strong> $10,000\u2013$25,000 more</strong> than day-shift RNs at the same facility.
          The premium comes from shift differentials of <strong>10\u201325% above base pay</strong>, stacked on top of
          base salary. California night nurses average $118,000\u2013$132,000; Texas and Florida night nurses earn $82,000\u2013$98,000.
        </p>
      </div>

      <p>
        Night shift differential is one of the most significant \u2014 and most overlooked \u2014 salary boosters available to registered nurses. For nurses willing to work evening, overnight, and weekend shifts, differential pay can add $10,000\u2013$40,000 annually on top of base salary without requiring an advanced degree, specialty certification, or a new job offer.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Nurse Salary by State (2026)</h2>
      <p>
        Night shift nurse salary varies significantly by state. The table below shows base RN pay alongside estimated total compensation with a 15% overnight differential included:
      </p>
      <SalaryTable
        title="Night Shift RN Salary by State (2026)"
        headers={['State', 'Base RN Salary (Day)', 'Night Shift Total (w/ 15% Differential)']}
        rows={stateData}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 differential estimates"
      />
      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to model your specific base pay + differential combination.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Night Shift Differential Works</h2>
      <p>
        Shift differential is a percentage premium added to your base hourly rate for hours worked outside standard daytime hours. The definition of &quot;night shift&quot; varies by employer but typically covers hours between 7 PM and 7 AM. Some hospitals split differentials across three bands: evening (3 PM\u201311 PM), overnight (11 PM\u20137 AM), and a separate weekend premium for any shift worked Saturday or Sunday.
      </p>
      <p>
        Most facilities calculate differential as a percentage of base pay rather than a flat dollar add-on, meaning higher-paid nurses earn proportionally more in dollar terms. A nurse earning $45/hr base receives a larger dollar differential than a nurse earning $35/hr at the same percentage rate.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Typical Differential Rates by Region</h2>
      <p>
        Differential rates vary considerably by geography, union status, and facility type:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California (union):</strong> 15\u201325% evening differential; 20\u201330% overnight; 10\u201320% weekend add-on. The California Nurses Association negotiates among the highest differentials in the country.</li>
        <li><strong>New York (union):</strong> 15\u201322% overnight differential at NYSNA-covered hospitals; NYC academic centers often at the high end.</li>
        <li><strong>Texas (non-union):</strong> 12\u201318% overnight differential; weekend add-ons of 8\u201312%. No-income-tax status improves net take-home versus California at similar gross differentials.</li>
        <li><strong>Florida (non-union):</strong> 10\u201316% overnight; 8\u201312% weekend. No state income tax applies, same as Texas.</li>
        <li><strong>Midwest/Southeast:</strong> 10\u201314% overnight; 8\u201310% weekend at most non-union hospitals.</li>
      </ul>
      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate your total annual pay including differential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Annual Dollar Impact of Night Differential</h2>
      <p>
        To calculate your annual differential impact, multiply your base annual salary by the differential percentage. A nurse earning $85,000/year working consistent nights at a 15% differential earns an additional $12,750/year \u2014 bringing total compensation to $97,750 before overtime.
      </p>
      <p>
        Add a 10% weekend differential on Saturday/Sunday shifts and the annual premium jumps to approximately $15,000\u2013$18,000 depending on how many weekend nights you work. Nurses who also pick up overtime on night shifts compound earnings further \u2014 California&apos;s daily overtime law (1.5x after 8 hours; 2x after 12 hours) means ICU nurses working 12-hour overnight shifts regularly earn daily overtime on top of their differential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiating Differential Before You Accept an Offer</h2>
      <p>
        Differential rates are often listed in the employee handbook rather than the job offer letter \u2014 and many nurses don&apos;t ask about them until after they&apos;ve accepted. Before signing, request the specific differential schedule in writing: what percentage applies to which hours, whether weekend shifts receive an additional layer of differential, and whether differential is calculated on base pay only or total compensation.
      </p>
      <p>
        At facilities where differential rates are fixed by union contract, there&apos;s no negotiation room \u2014 but you can negotiate base pay higher, which increases your differential earnings automatically at the same percentage rate.
      </p>
      <p>
        For state-level salary context, see <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">RN salary in California</Link>, <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">RN salary in Texas</Link>, and <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">RN salary in Florida</Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary 2026', desc: 'Pay differential, hourly rates by state' },
          { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary 2026', desc: 'Highest-paying specialty for nights' },
          { href: '/nurse-salary-negotiation-scripts-2026', label: 'Nurse Salary Negotiation Scripts', desc: 'Word-for-word scripts to ask for more' },
          { href: '/rn-salary-by-state/california', label: 'California RN Salary 2026', desc: 'Highest night differentials in the country' },
        ].map(({ href, label, desc }) => (
          <Link key={href} href={href} className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors">
            <div>
              <p className="text-sm font-semibold text-primary">{label}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <span className="text-on-surface-variant text-xs ml-3">\u2192</span>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
