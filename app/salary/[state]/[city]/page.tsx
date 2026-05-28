import { getCityData, slugify, unslugify, getAllStates, getCitiesByState } from '@/lib/data';
import MonetizationSlot from '@/components/MonetizationSlot';
import PremiumAuditCTA from '@/components/PremiumAuditCTA';
import RecommendedGear from '@/components/RecommendedGear';
import SiteNav from '@/components/SiteNav';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';

/**
 * When a rich editorial blog post exists for a city, the programmatic city page
 * defers its canonical to that post to avoid cannibalization.
 * Key format: `${stateSlug}/${citySlug}` — add new entries here whenever a
 * city-level blog post is published.
 */
const CITY_CANONICAL_OVERRIDES: Record<string, string> = {
  // Texas city editorial posts (live, rich Template A pages)
  'texas/dallas':             'https://nursesalaryintel.com/dallas-rn-salary-2026',
  'texas/houston':            'https://nursesalaryintel.com/houston-rn-salary-2026',
  'texas/austin':             'https://nursesalaryintel.com/austin-rn-salary-2026',
  // Week-05 / Week-07 editorial posts
  'washington/seattle':       'https://nursesalaryintel.com/seattle-rn-salary-2026',
  'georgia/atlanta':          'https://nursesalaryintel.com/atlanta-rn-salary-2026',
  'illinois/chicago':         'https://nursesalaryintel.com/chicago-rn-salary-2026',
  'new-york/new-york':        'https://nursesalaryintel.com/new-york-city-rn-salary-2026',
  'pennsylvania/philadelphia': 'https://nursesalaryintel.com/philadelphia-rn-salary-2026',
  'california/san-diego':     'https://nursesalaryintel.com/san-diego-rn-salary-2026',
  // NOTE: LA, Miami, Boston, Orlando, Phoenix blog posts were redirected back to
  // the programmatic pages -- those canonical overrides were circular and have been removed.
};

interface PageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  const states = getAllStates();
  const paths: { state: string; city: string }[] = [];

  states.forEach(state => {
    const cities = getCitiesByState(state);
    cities.forEach(city => {
      paths.push({
        state: slugify(state),
        city: slugify(city),
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params;
  const stateFormatted = unslugify(state);
  const cityFormatted = unslugify(city);
  const cityData = getCityData(stateFormatted, cityFormatted);

  if (!cityData) return { title: 'City Not Found' };

  // Format dollar figures from cityData for higher-CTR titles + metas
  const annualK = cityData.avgSalary
    ? `$${Math.round(cityData.avgSalary / 1000)}K/yr`
    : '';
  const annualFull = cityData.avgSalary
    ? `$${cityData.avgSalary.toLocaleString()}/yr`
    : 'competitive pay';
  const titleSuffix = annualK
    ? `${annualK} Avg + Top Hospitals`
    : 'Hourly Pay + Top Hospitals';

  return {
    title: `${cityData.city} RN Salary 2026: ${titleSuffix}`,
    description: `${cityData.city}, ${cityData.state} RNs earn ${annualFull} on average in 2026. Top hospitals, salary range ($${cityData.minSalary?.toLocaleString() || ''}–$${cityData.maxSalary?.toLocaleString() || ''}), and how this metro compares to the state average.`,
    alternates: {
      canonical: CITY_CANONICAL_OVERRIDES[`${state}/${city}`]
        ?? `https://nursesalaryintel.com/salary/${state}/${city}`,
    },
    robots: { index: false, follow: true },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateFormatted = unslugify(state);
  const cityFormatted = unslugify(city);
  const cityData = getCityData(stateFormatted, cityFormatted);

  if (!cityData) {
    const validStates = getAllStates().map(s => slugify(s));
    if (validStates.includes(state)) {
      redirect(`/rn-salary-by-state/${state}`);
    }
    notFound();
  }

  const hourlyRate = (cityData.avgSalary / 2080).toFixed(2);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the average RN salary in ${cityData.city}, ${cityData.state}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Nurses in ${cityData.city} average $${cityData.avgSalary.toLocaleString()}/year across ${cityData.totalPositions} tracked positions, with a range of $${cityData.minSalary.toLocaleString()}–$${cityData.maxSalary.toLocaleString()}.`
        }
      },
      {
        "@type": "Question",
        "name": `How much do nurses make per hour in ${cityData.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The average hourly rate for nurses in ${cityData.city} is approximately $${hourlyRate}/hr based on an annual salary of $${cityData.avgSalary.toLocaleString()}. Rates vary by shift differential, specialty, and experience.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the highest paying nursing hospital in ${cityData.city}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Nursing salaries in ${cityData.city} vary by hospital system and specialty. Tracked positions show a range of $${cityData.minSalary.toLocaleString()}–$${cityData.maxSalary.toLocaleString()}/year. Use the NurseSalaryIntel salary calculator to compare by specialty and experience level.`
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `RN Salary in ${cityData.city}, ${cityData.state} — 2026 Nurse Pay Guide`,
    "description": `Nurse salary data for ${cityData.city}, ${cityData.state}. Average RN pay $${cityData.avgSalary.toLocaleString()}/year across ${cityData.totalPositions} tracked positions.`,
    "dateModified": "2026-04-27",
    "author": { "@type": "Organization", "name": "NurseSalaryIntel", "url": "https://nursesalaryintel.com" },
    "publisher": { "@type": "Organization", "name": "NurseSalaryIntel", "url": "https://nursesalaryintel.com" },
    "url": `https://nursesalaryintel.com/salary/${state}/${city}`
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteNav />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            RN Salary in {cityData.city}, {cityData.state} (2026)
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Last updated: April 2026 &nbsp;·&nbsp; Source: BLS OEWS + NurseSalaryIntel data
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'RN Salary by State', href: '/rn-salary-by-state' },
          { label: `${cityData.state} RN Salary`, href: `/rn-salary-by-state/${state}` },
          { label: `${cityData.city} Nurse Salary` },
        ]} />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8 max-w-lg">
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Avg Salary</div>
            <div className="text-2xl font-black text-blue-600">${cityData.avgSalary.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Salary Range</div>
            <div className="text-base font-bold text-gray-900">
              ${cityData.minSalary.toLocaleString()} – ${cityData.maxSalary.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Nurse-Approved Gear — full width, high visibility */}
        <div className="mb-8">
          <RecommendedGear layout="grid" />
        </div>

        {/* Main content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Experience-based earnings */}
            <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                RN Salary by Experience in {cityData.city}
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                Experience is the single biggest lever on RN pay in {cityData.city}. Here is how earnings typically progress from new grad through senior nurse, based on the local average of <strong>${cityData.avgSalary.toLocaleString()}/year</strong>.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'New Grad (0–1 yr)', range: `$${Math.round(cityData.avgSalary * 0.75 / 1000) * 1000}–$${Math.round(cityData.avgSalary * 0.85 / 1000) * 1000}`, note: '15–25% below local avg · most start on step pay scales' },
                  { label: 'Early Career (2–4 yrs)', range: `$${Math.round(cityData.avgSalary * 0.90 / 1000) * 1000}–$${Math.round(cityData.avgSalary * 1.02 / 1000) * 1000}`, note: 'Near local avg · specialty certifications begin to add $5K–$10K' },
                  { label: 'Mid-Career (5–9 yrs)', range: `$${Math.round(cityData.avgSalary * 1.05 / 1000) * 1000}–$${Math.round(cityData.avgSalary * 1.18 / 1000) * 1000}`, note: 'Above avg · CCRN, CEN, OCN can add $8K–$15K on top' },
                  { label: 'Senior (10+ yrs)', range: `$${Math.round(cityData.avgSalary * 1.20 / 1000) * 1000}–$${Math.round(cityData.avgSalary * 1.35 / 1000) * 1000}`, note: 'Charge nurse and specialty roles push to the top of this range' },
                ].map(({ label, range, note }) => (
                  <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="text-sm font-bold text-gray-900 w-44 shrink-0">{label}</div>
                    <div className="text-sm font-black text-blue-600 w-48 shrink-0">{range}</div>
                    <div className="text-xs text-gray-500">{note}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Ranges are estimates derived from BLS OEWS state data and regional job posting analysis. Individual pay depends on facility, union status, specialty, and shift type.
              </p>
            </div>

            {/* Before You Accept an Offer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-amber-900 mb-3">
                📋 Before You Accept an Offer in {cityData.city}
              </h2>
              <p className="text-amber-800 text-sm mb-4">
                Most nurses leave money on the table by not negotiating. Here is what to review before signing anything.
              </p>
              <ul className="space-y-2 text-sm text-amber-900">
                {[
                  'Confirm the base hourly rate matches what was discussed — get it in writing before your start date.',
                  'Ask specifically about night shift and weekend differentials. In most {city} hospitals these add $4–$8/hr.',
                  'Check sign-on bonus vesting cliffs. A $10,000 bonus with a 2-year cliff is only valuable if you stay.',
                  'Negotiate PTO and tuition reimbursement — these are often more flexible than base pay at large systems.',
                  'Compare the total package, not just base. Benefits, ratios, and schedule matter as much as the hourly rate.',
                ].map((tip, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-amber-600 font-bold shrink-0">{i + 1}.</span>
                    <span>{tip.replace('{city}', cityData.city)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/nurse-salary-negotiation-guide-2026"
                className="inline-block mt-5 bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm"
              >
                Read the Full Negotiation Guide →
              </Link>
            </div>

          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">
            <PremiumAuditCTA placement="sidebar" />
            <MonetizationSlot type="jobs" city={cityData.city} state={cityData.state} />
          </div>
        </div>

        {/* Education — full width below the grid */}
        <div className="mt-8">
          <MonetizationSlot type="education" city={cityData.city} state={cityData.state} />
        </div>

        {/* BSN career advancement CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">Advance Your Career</div>
            <h2 className="text-xl font-bold text-white">
              BSN nurses in {cityData.state} earn an average of $10,000 more per year
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Online RN-to-BSN programs from WGU, Chamberlain, and GCU can be completed in 12–18 months while you work.
            </p>
          </div>
          <Link
            href="/salary/bsn-vs-rn"
            className="shrink-0 bg-white text-blue-700 font-bold py-3 px-6 rounded-xl text-sm shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
          >
            Compare BSN Programs →
          </Link>
        </div>

        {/* Supplemental SEO content */}
        <div className="mt-8 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Highest Paying Cities in {cityData.state}</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {cityData.city} is one of several key nursing markets in {cityData.state}. Pay varies across metro areas based on hospital concentration, cost of living, and demand. Larger urban markets typically pay 10–20% more than the statewide average, while rural areas may pay 10–15% below.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
              <li><strong>{cityData.city}:</strong> ${cityData.minSalary.toLocaleString()}–${cityData.maxSalary.toLocaleString()}/year based on {cityData.totalPositions} tracked positions</li>
              <li>Major metro areas in {cityData.state} average 10–20% above the statewide baseline</li>
              <li>Suburban hospital markets typically align near the statewide average</li>
              <li>Rural and critical access facilities generally pay 8–15% below the nearest metro average</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nurse Salary by Experience in {cityData.state}</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Experience is one of the strongest drivers of RN pay in {cityData.city} and across {cityData.state}. The gap between entry-level and senior nurses typically ranges from $20,000 to $40,000+ depending on facility type and specialty.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
              <li><strong>Entry level (0–2 years):</strong> Typically 15–25% below the {cityData.city} average of ${cityData.avgSalary.toLocaleString()}</li>
              <li><strong>3–5 years experience:</strong> Near or slightly above the local average; specialty certifications (CCRN, CEN) add $5,000–$12,000</li>
              <li><strong>10+ years experience:</strong> Generally 20–35% above the average; charge nurse and specialty roles push further</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Night Shift &amp; Overtime Pay in {cityData.city}</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Most hospitals in {cityData.city} offer a night shift differential of 10–20% above base pay for evening and overnight shifts. On the average {cityData.city} salary of ${cityData.avgSalary.toLocaleString()}, that adds roughly ${Math.round(cityData.avgSalary * 0.10).toLocaleString()}–${Math.round(cityData.avgSalary * 0.20).toLocaleString()}/year for consistent night nurses. Weekend differentials typically add another 8–15%.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Overtime is required at 1.5x base hourly rate for hours beyond 40 per week. Nurses working one extra 12-hour shift per week can add $10,000–$20,000 annually to their income. During staffing shortages, some facilities offer double-time rates for voluntary extra shifts.
            </p>
          </div>

          {/* Other Cities in State */}
          {(() => {
            const siblingCities = getCitiesByState(cityData.state)
              .filter(c => slugify(c) !== city)
              .slice(0, 6);
            return siblingCities.length > 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Other Cities in {cityData.state}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Compare {cityData.city} nurse pay to other {cityData.state} metro areas:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {siblingCities.map((siblingCity) => (
                    <Link
                      key={siblingCity}
                      href={`/salary/${state}/${slugify(siblingCity)}`}
                      className="flex items-center justify-between px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm"
                    >
                      <span className="text-gray-800 font-medium">{siblingCity}</span>
                      <span className="text-blue-600 text-xs">→</span>
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  <Link href={`/rn-salary-by-state/${state}`} className="hover:underline text-blue-500">{cityData.state} state average →</Link>
                  {' · '}
                  <Link href="/rn-salary-by-city" className="hover:underline text-blue-500">All cities →</Link>
                </p>
              </div>
            ) : null;
          })()}

          {/* Top Nursing Specialties */}
          <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Top Nursing Specialties in {cityData.city}
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Specialty and certification significantly impact RN pay in {cityData.city}. See how each role compares to the local average.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/nursing-salary/icu-nurse-salary', label: 'ICU Nurse Salary', desc: 'Critical care pay + CCRN premium' },
                { href: '/nursing-salary/er-nurse-salary', label: 'ER Nurse Salary', desc: 'Emergency nursing pay by state' },
                { href: '/nursing-salary/nicu-nurse-salary', label: 'NICU Nurse Salary', desc: 'Neonatal ICU pay + certification' },
                { href: '/nursing-salary/nurse-practitioner-salary', label: 'Nurse Practitioner Salary', desc: 'NP pay by specialty and state' },
                { href: '/nursing-salary/crna-salary-by-state', label: 'CRNA Salary', desc: 'Highest-paid nursing role — $214K avg' },
                { href: '/nursing-salary/charge-nurse-salary', label: 'Charge Nurse Salary', desc: 'Leadership premium over staff RN' },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold text-blue-600">{label}</p>
                    <p className="text-xs text-gray-500">{desc}</p>
                  </div>
                  <span className="text-gray-400 text-xs ml-3">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">RN Salary FAQs — {cityData.city}, {cityData.state}</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">What is the average RN salary in {cityData.city}, {cityData.state}?</p>
                <p className="text-gray-600 mt-1">Based on NurseSalaryIntel data, {cityData.city} nurses average ${cityData.avgSalary.toLocaleString()}/year across {cityData.totalPositions} tracked positions, ranging from ${cityData.minSalary.toLocaleString()} to ${cityData.maxSalary.toLocaleString()}. See the full <Link href={`/rn-salary-by-state/${state}`} className="text-blue-600 hover:underline">RN salary in {cityData.state}</Link> guide for statewide context.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">How much do nurses make per hour in {cityData.city}?</p>
                <p className="text-gray-600 mt-1">In {cityData.city}, the average hourly rate is approximately ${hourlyRate}/hr based on an annual salary of ${cityData.avgSalary.toLocaleString()}. Hourly rates vary by shift differential, specialty, and years of experience.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">What is the highest paying city for nurses in {cityData.state}?</p>
                <p className="text-gray-600 mt-1">Pay varies across {cityData.state}&apos;s metro areas. Larger urban markets typically pay 10–20% above the statewide average. See our full <Link href="/rn-salary-by-state" className="text-blue-600 hover:underline">RN salary by state guide</Link> or use the <Link href="/" className="text-blue-600 hover:underline">nurse salary calculator</Link> to compare any location.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

