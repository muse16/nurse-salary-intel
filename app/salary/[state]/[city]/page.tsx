import { getCityData, slugify, unslugify, getAllStates, getCitiesByState } from '@/lib/data';
import DataTable from '@/components/DataTable';
import MonetizationSlot from '@/components/MonetizationSlot';
import PremiumAuditCTA from '@/components/PremiumAuditCTA';
import RecommendedGear from '@/components/RecommendedGear';
import AdSenseSlot from '@/components/AdSenseSlot';
import SiteNav from '@/components/SiteNav';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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

  return {
    title: `RN Salary in ${cityData.city}, ${cityData.state} (2026): Hourly Pay + Top Hospitals`,
    description: `Discover RN salary in ${cityData.city}, ${cityData.state}. View hourly pay, top hospitals, and salary trends for nurses in 2026.`,
  };
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params;
  const stateFormatted = unslugify(state);
  const cityFormatted = unslugify(city);
  const cityData = getCityData(stateFormatted, cityFormatted);

  if (!cityData) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Nurse Salaries in {cityData.city}, {cityData.state}
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Salary data and contract intelligence for nursing positions
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Avg Salary</div>
            <div className="text-2xl font-black text-blue-600">${cityData.avgSalary.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Range</div>
            <div className="text-base font-bold text-gray-900">
              ${cityData.minSalary.toLocaleString()} – ${cityData.maxSalary.toLocaleString()}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Positions</div>
            <div className="text-2xl font-black text-green-600">{cityData.totalPositions}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Clean Contracts</div>
            <div className="text-2xl font-black text-emerald-600">
              {cityData.positions.filter(p => p.red_flags === 'None').length}
            </div>
          </div>
        </div>

        {/* Main content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* SEO Content */}
            <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nursing Jobs in {cityData.city}, {cityData.state}
              </h2>
              <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                <p>
                  {cityData.city}, {cityData.state} offers {cityData.totalPositions} tracked nursing positions
                  with an average salary of <strong>${cityData.avgSalary.toLocaleString()}</strong> and a range
                  of ${cityData.minSalary.toLocaleString()} to ${cityData.maxSalary.toLocaleString()}.
                </p>
                <p>
                  {cityData.positions.filter(p => p.red_flags === 'None').length} of {cityData.totalPositions} positions
                  have clean contracts. Before signing, use our free{' '}
                  <Link href="/audit" className="text-blue-600 hover:underline font-semibold">
                    Contract Red Flag Audit Tool
                  </Link>{' '}
                  to review your offer letter clause by clause.
                </p>
              </div>
            </div>

            {/* AdSense — one placement, mid-content only */}
            <AdSenseSlot position="mid-content" />

            {/* Data Table */}
            <DataTable data={cityData.positions} title="Nursing Positions" />

            {/* Red Flags Section */}
            {cityData.positions.some(p => p.red_flags !== 'None') && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h2 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                  ⚠ Red Flags Detected in {cityData.city}
                </h2>
                <p className="text-red-700 text-sm mb-4">
                  These positions have potentially problematic contract terms. Review carefully before accepting.
                </p>
                <div className="space-y-2">
                  {cityData.positions.filter(p => p.red_flags !== 'None').map((position, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="font-semibold text-gray-900 text-sm">{position.hospital}</div>
                      <div className="text-xs text-red-600 mt-1">{position.red_flags}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/audit"
                  className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm"
                >
                  Run Free Contract Audit
                </Link>
              </div>
            )}
          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">
            <PremiumAuditCTA placement="sidebar" />
            <MonetizationSlot type="jobs" city={cityData.city} state={cityData.state} />
            <RecommendedGear />
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

          <div className="bg-white rounded-xl shadow-sm p-7 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">RN Salary FAQs — {cityData.city}, {cityData.state}</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">What is the average RN salary in {cityData.state}?</p>
                <p className="text-gray-600 mt-1">Based on NurseSalaryIntel data, {cityData.city} nurses average ${cityData.avgSalary.toLocaleString()}/year across {cityData.totalPositions} tracked positions. Salaries vary by metro area across {cityData.state}. For state-level context, compare <Link href="/rn-salary-by-state/california" className="text-blue-600 hover:underline">RN salary in California</Link> and <Link href="/rn-salary-by-state/texas" className="text-blue-600 hover:underline">RN salary in Texas</Link>.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">How much do nurses make per hour in {cityData.state}?</p>
                <p className="text-gray-600 mt-1">In {cityData.city}, the average hourly rate is approximately ${(cityData.avgSalary / 2080).toFixed(2)}/hr based on an annual salary of ${cityData.avgSalary.toLocaleString()}. Hourly rates vary by shift differential, specialty, and years of experience.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">What is the highest paying city for nurses in {cityData.state}?</p>
                <p className="text-gray-600 mt-1">Pay varies across {cityData.state}&apos;s metro areas. Larger urban markets typically offer the highest base salaries. See our full <Link href="/rn-salary-by-state" className="text-blue-600 hover:underline">RN salary by state guide</Link>, or compare <Link href="/salary/california/san-francisco" className="text-blue-600 hover:underline">nurse salary in San Francisco</Link> and <Link href="/salary/texas/dallas" className="text-blue-600 hover:underline">nurse salary in Dallas</Link> as national benchmarks. Use the <Link href="/" className="text-blue-600 hover:underline">nurse salary calculator</Link> to estimate pay in any state.</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
