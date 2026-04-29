import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';
import { getAllStates, getCitiesByState, getCityData, slugify } from '@/lib/data';

export const metadata: Metadata = {
  title: 'RN Salary by City 2026: Nurse Pay in Every Major U.S. City',
  description:
    'Compare registered nurse salaries across every major U.S. city in 2026. See average pay, salary range, and top hospitals for cities in all 50 states.',
  alternates: { canonical: 'https://nursesalaryintel.com/rn-salary-by-city' },
  openGraph: {
    title: 'RN Salary by City 2026 — All Major U.S. Cities',
    description: 'City-level nurse salary data for every major U.S. metro. Compare pay across states and cities.',
    url: 'https://nursesalaryintel.com/rn-salary-by-city',
  },
};

const faqs = [
  {
    question: 'Which city pays nurses the most in 2026?',
    answer:
      'San Francisco leads nationally at $145,000–$165,000/year for experienced RNs. New York City, San Jose, and Los Angeles round out the top metros. These cities combine union contracts, academic medical centers, and high cost-of-living adjustments.',
  },
  {
    question: 'How much does city location affect nurse pay?',
    answer:
      'Significantly. Within the same state, urban metros typically pay 10–25% more than rural markets. In California, a San Francisco nurse earns $40,000–$50,000 more per year than a Central Valley nurse at the same experience level.',
  },
  {
    question: 'Do nurses earn more in big cities after cost of living?',
    answer:
      'Not always. High-cost metros like San Francisco and NYC have higher nominal salaries but the purchasing power advantage narrows once housing, taxes, and living costs are factored in. Mid-size cities in Texas, Nevada, and Washington often offer better real-dollar value.',
  },
];

export default function RNSalaryByCity() {
  const allStates = getAllStates();

  // Build city data grouped by state
  const stateGroups: {
    state: string;
    stateSlug: string;
    cities: { city: string; citySlug: string; avgSalary: number | null }[];
  }[] = [];

  allStates.forEach((state) => {
    const cities = getCitiesByState(state);
    if (cities.length === 0) return;

    const cityRows = cities.map((city) => {
      const data = getCityData(state, city);
      return {
        city,
        citySlug: slugify(city),
        avgSalary: data?.avgSalary ?? null,
      };
    });

    stateGroups.push({
      state,
      stateSlug: slugify(state),
      cities: cityRows,
    });
  });

  const totalCities = stateGroups.reduce((sum, g) => sum + g.cities.length, 0);

  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by City' },
      ]}
      h1="RN Salary by City — 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary by City 2026"
      schemaDescription="Compare registered nurse salaries across every major U.S. city in 2026."
      schemaUrl="/rn-salary-by-city"
      faqs={faqs}
    >
      <p>
        Nurse pay varies dramatically by city — not just by state. Two nurses with identical experience and
        specialty can earn $40,000–$60,000 more per year simply by working in a higher-paying metro. This
        guide covers RN salary data for <strong>{totalCities} cities across {stateGroups.length} states</strong>,
        including average pay, salary ranges, and top hospitals in each market.
      </p>

      <p>
        For statewide context, see the{' '}
        <Link href="/rn-salary-by-state" className="text-primary hover:underline">
          RN salary by state guide
        </Link>. To find the highest-paying specialties in any city, see{' '}
        <Link href="/highest-paying-nursing-specialties" className="text-primary hover:underline">
          highest-paying nursing specialties
        </Link>.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest-Paying Cities for Nurses in 2026</h2>
      <p>
        The top-paying cities for RNs share common factors: large academic medical centers, strong union
        contracts (CNA, NYSNA, ONA), and high cost-of-living adjustments built into wage schedules. Here are
        the cities with the highest average RN salaries:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li>
          <strong><Link href="/salary/california/san-francisco" className="text-primary hover:underline">San Francisco, CA</Link>:</strong>{' '}
          $145,000–$165,000/year. UCSF, Kaiser, and Sutter Health drive wages to national highs.
        </li>
        <li>
          <strong><Link href="/salary/new-york/new-york" className="text-primary hover:underline">New York City, NY</Link>:</strong>{' '}
          $108,000–$128,000/year. NYSNA and 1199SEIU union contracts anchor pay at major academic systems.
        </li>
        <li>
          <strong><Link href="/salary/california/los-angeles" className="text-primary hover:underline">Los Angeles, CA</Link>:</strong>{' '}
          $118,000–$135,000/year. Cedars-Sinai, UCLA Health, and USC Keck compete aggressively for RN talent.
        </li>
        <li>
          <strong><Link href="/salary/washington/seattle" className="text-primary hover:underline">Seattle, WA</Link>:</strong>{' '}
          $98,000–$112,000/year. No state income tax boosts effective take-home significantly.
        </li>
        <li>
          <strong><Link href="/salary/texas/houston" className="text-primary hover:underline">Houston, TX</Link>:</strong>{' '}
          $84,000–$102,000/year. Texas Medical Center — the largest in the world — drives competitive wages with zero state income tax.
        </li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Browse All Cities by State</h2>
      <p>
        Select any city below to see 2026 salary data, salary range, top employers, and how the city compares
        to its state average.
      </p>

      <div className="space-y-10 mt-4">
        {stateGroups.map(({ state, stateSlug, cities }) => (
          <div key={state}>
            <h3 className="text-lg font-semibold text-on-surface mb-3">
              <Link
                href={`/rn-salary-by-state/${stateSlug}`}
                className="text-primary hover:underline"
              >
                {state}
              </Link>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cities.map(({ city, citySlug, avgSalary }) => (
                <Link
                  key={citySlug}
                  href={`/salary/${stateSlug}/${citySlug}`}
                  className="flex items-center justify-between px-4 py-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
                >
                  <span className="text-on-surface font-medium text-sm">{city}</span>
                  {avgSalary && (
                    <span className="text-primary font-semibold text-sm">
                      ${Math.round(avgSalary / 1000)}K/yr
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Related Salary Guides</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { href: '/rn-salary-by-state', title: 'RN Salary by State', desc: 'Compare all 50 states side-by-side with cost-of-living context.' },
          { href: '/nurse-salary-by-hospital', title: 'Nurse Salary by Hospital', desc: 'How major health systems compare — Kaiser, HCA, Mayo, and more.' },
          { href: '/highest-paying-nursing-specialties', title: 'Highest-Paying Specialties', desc: 'CRNA, NP, ICU, ER pay rankings for 2026.' },
          { href: '/entry-level-nurse-salary', title: 'New Grad RN Salary', desc: 'Starting pay by city, sign-on bonuses, and first-year trajectory.' },
        ].map(({ href, title, desc }) => (
          <Link
            key={href}
            href={href}
            className="p-4 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
          >
            <p className="font-bold text-primary text-sm mb-1">{title}</p>
            <p className="text-on-surface-variant text-xs">{desc}</p>
          </Link>
        ))}
      </div>
    </SEOPageLayout>
  );
}
