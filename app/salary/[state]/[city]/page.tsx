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
    title: `Nurse Salaries in ${cityData.city}, ${cityData.state} | Salary Intelligence`,
    description: `Explore nurse salaries in ${cityData.city}, ${cityData.state}. Average salary: $${cityData.avgSalary.toLocaleString()}. Compare ${cityData.totalPositions} positions from top hospitals.`,
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

      </main>
    </div>
  );
}
