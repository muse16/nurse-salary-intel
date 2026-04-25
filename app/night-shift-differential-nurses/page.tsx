import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is Night Shift Nursing Worth It? 2026 Pay vs. Trade-Offs',
  description:
    'Night shift differentials add 10–25% to nurse pay in 2026 — but is it worth it? See real take-home math, health impact, schedule trade-offs, and the decision framework nurses use.',
  alternates: { canonical: 'https://nursesalaryintel.com/night-shift-differential-nurses' },
  openGraph: {
    title: 'Is Night Shift Nursing Worth It? 2026 Pay vs. Trade-Offs',
    description: 'Differentials add 10–25% pay in 2026. Real take-home math + lifestyle trade-offs.',
    url: 'https://nursesalaryintel.com/night-shift-differential-nurses',
  },
};

const faqs = [
  {
    question: 'What is the average night shift differential for nurses?',
    answer: 'Most hospitals pay a night shift differential of 10–25% above base pay. Union hospitals in states like California and New York often pay 15–25%, while non-union facilities in the South typically pay 10–15%.',
  },
  {
    question: 'Do night shift nurses make significantly more money?',
    answer: 'Yes. On a $85,000 base salary, a 15% night differential adds $12,750/year. Combined with weekend differentials and overtime, consistent night nurses can earn $20,000–$40,000 more annually than day-shift counterparts.',
  },
  {
    question: 'Is night shift differential taxed differently?',
    answer: 'No — differential pay is taxed as ordinary income at your marginal rate, the same as base pay. The additional income may push you into a higher tax bracket, so calculating net take-home is important before committing to nights.',
  },
];

export default function NightShiftDifferential() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Night Shift Differential for Nurses' },
      ]}
      h1="Night Shift Differential for Nurses — 2026 Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="Night Shift Differential for Nurses 2026"
      schemaDescription="How night shift differentials work for RNs, typical rates by state, and total annual pay impact."
      schemaUrl="/night-shift-differential-nurses"
      faqs={faqs}
    >
      <p>
        Night shift differential is one of the most significant — and most overlooked — salary boosters available to registered nurses. For nurses willing to work evening, overnight, and weekend shifts, differential pay can add $10,000–$40,000 annually on top of base salary without requiring an advanced degree, specialty certification, or a new job offer.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">How Night Shift Differential Works</h2>
      <p>
        Shift differential is a percentage premium added to your base hourly rate for hours worked outside standard daytime hours. The definition of "night shift" varies by employer but typically covers hours between 7 PM and 7 AM. Some hospitals split differentials across three bands: evening (3 PM–11 PM), overnight (11 PM–7 AM), and a separate weekend premium for any shift worked Saturday or Sunday.
      </p>
      <p>
        Most facilities calculate differential as a percentage of base pay rather than a flat dollar add-on, meaning higher-paid nurses earn proportionally more in dollar terms. A nurse earning $45/hr base receives a larger dollar differential than a nurse earning $35/hr at the same percentage rate.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Typical Differential Rates by Region</h2>
      <p>
        Differential rates vary considerably by geography, union status, and facility type:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>California (union):</strong> 15–25% evening differential; 20–30% overnight; 10–20% weekend add-on. The California Nurses Association negotiates among the highest differentials in the country.</li>
        <li><strong>New York (union):</strong> 15–22% overnight differential at NYSNA-covered hospitals; NYC academic centers often at the high end.</li>
        <li><strong>Texas (non-union):</strong> 12–18% overnight differential; weekend add-ons of 8–12%. No-income-tax status improves net take-home versus California at similar gross differentials.</li>
        <li><strong>Florida (non-union):</strong> 10–16% overnight; 8–12% weekend. No state income tax applies, same as Texas.</li>
        <li><strong>Midwest/Southeast:</strong> 10–14% overnight; 8–10% weekend at most non-union hospitals.</li>
      </ul>
      <p>
        Use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to estimate your total annual pay including differential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Annual Dollar Impact of Night Differential</h2>
      <p>
        To calculate your annual differential impact, multiply your base annual salary by the differential percentage. A nurse earning $85,000/year working consistent nights at a 15% differential earns an additional $12,750/year — bringing total compensation to $97,750 before overtime.
      </p>
      <p>
        Add a 10% weekend differential on Saturday/Sunday shifts and the annual premium jumps to approximately $15,000–$18,000 depending on how many weekend nights you work. Nurses who also pick up overtime on night shifts compound earnings further — California&apos;s daily overtime law (1.5x after 8 hours; 2x after 12 hours) means ICU nurses working 12-hour overnight shifts regularly earn daily overtime on top of their differential.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Negotiating Differential Before You Accept an Offer</h2>
      <p>
        Differential rates are often listed in the employee handbook rather than the job offer letter — and many nurses don&apos;t ask about them until after they&apos;ve accepted. Before signing, request the specific differential schedule in writing: what percentage applies to which hours, whether weekend shifts receive an additional layer of differential, and whether differential is calculated on base pay only or total compensation.
      </p>
      <p>
        At facilities where differential rates are fixed by union contract, there&apos;s no negotiation room — but you can negotiate base pay higher, which increases your differential earnings automatically at the same percentage rate.
      </p>
      <p>
        For state-level salary co