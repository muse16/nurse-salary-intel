import { getHospitalData, slugify, unslugify, getAllHospitals, getCitiesByState } from '@/lib/data';
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
    name: string;
  }>;
}

export async function generateStaticParams() {
  const hospitals = getAllHospitals();
  return hospitals.map(hospital => ({
    name: slugify(hospital),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = await params;
  const hospitalFormatted = unslugify(name);
  const hospitalData = getHospitalData(hospitalFormatted);

  if (!hospitalData) {
    return {
      title: 'Hospital Not Found',
    };
  }

  return {
    title: `${hospitalData.hospital} RN Salary 2026: Pay, Red Flags & Contracts`,
    description: `${hospitalData.hospital} in ${hospitalData.city}, ${hospitalData.state}: RNs earn $${hospitalData.avgSalary.toLocaleString()}/yr (2026 avg). See pay by unit, contract red flags, and comparison to competing systems.`,
  };
}

export default async function HospitalPage({ params }: PageProps) {
  const { name } = await params;
  const hospitalFormatted = unslugify(name);
  const hospitalData = getHospitalData(hospitalFormatted);

  if (!hospitalData) {
    notFound();
  }

  const hourlyRate = (hospitalData.avgSalary / 2080).toFixed(2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Nurse Salary at ${hospitalData.hospital} — 2026 Pay & Contract Data`,
    "description": `Nurse salary and contract data for ${hospitalData.hospital} in ${hospitalData.city}, ${hospitalData.state}. Average pay $${hospitalData.avgSalary.toLocaleString()}/year.`,
    "dateModified": "2026-04-27",
    "author": { "@type": "Organization", "name": "NurseSalaryIntel", "url": "https://nursesalaryintel.com" },
    "publisher": { "@type": "Organization", "name": "NurseSalaryIntel", "url": "https://nursesalaryintel.com" },
    "url": `https://nursesalaryintel.com/hospital/${name}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nursesalaryintel.com" },
      { "@type": "ListItem", "position": 2, "name": "Hospital Salary Data", "item": "https://nursesalaryintel.com/nurse-salary-by-hospital" },
      { "@type": "ListItem", "position": 3, "name": hospitalData.hospital, "item": `https://nursesalaryintel.com/hospital/${name}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much do nurses make at ${hospitalData.hospital}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Nurses at ${hospitalData.hospital} in ${hospitalData.city}, ${hospitalData.state} average $${hospitalData.avgSalary.toLocaleString()}/year ($${hourlyRate}/hr) based on ${hospitalData.totalPositions} tracked position${hospitalData.totalPositions !== 1 ? 's' : ''}.`
        }
      },
      {
        "@type": "Question",
        "name": `Does ${hospitalData.hospital} have contract red flags?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": hospitalData.redFlags.length === 0
            ? `Our analysis shows no contract red flags for ${hospitalData.hospital}. The facility demonstrates transparent contracting practices.`
            : `Our analysis identified ${hospitalData.redFlags.length} red flag${hospitalData.redFlags.length > 1 ? 's' : ''} in contracts at ${hospitalData.hospital}: ${hospitalData.redFlags.join(', ')}. Review all terms carefully before signing.`
        }
      },
      {
        "@type": "Question",
        "name": `Is ${hospitalData.hospital} a good place to work as a nurse?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${hospitalData.hospital} offers an average nurse salary of $${hospitalData.avgSalary.toLocaleString()}/year in ${hospitalData.city}, ${hospitalData.state}. ${hospitalData.redFlags.length === 0 ? 'Contract terms appear clean based on our analysis.' : `There are ${hospitalData.redFlags.length} contract concern${hospitalData.redFlags.length > 1 ? 's' : ''} to review before accepting.`} Use the NurseSalaryIntel contract audit tool to review your specific offer.`
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteNav />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900">
            {hospitalData.hospital} — Nurse Salary 2026
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            {hospitalData.city}, {hospitalData.state} &nbsp;·&nbsp; Last updated: April 2026 &nbsp;·&nbsp; Source: NurseSalaryIntel data
          </p>
        </div>
      </header>

      {/* AdSense Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdSenseSlot position="header" />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-600 mb-1">Average Salary</div>
            <div className="text-3xl font-bold text-blue-600">
              ${hospitalData.avgSalary.toLocaleString()}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-600 mb-1">Open Positions</div>
            <div className="text-3xl font-bold text-green-600">
              {hospitalData.totalPositions}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-600 mb-1">Contract Status</div>
            <div className="text-2xl font-bold">
              {hospitalData.redFlags.length === 0 ? (
                <span className="text-green-600">Clean ✓</span>
              ) : (
                <span className="text-red-600">{hospitalData.redFlags.length} Red Flag(s)</span>
              )}
            </div>
          </div>
        </div>

        {/* Red Flags Alert */}
        {hospitalData.redFlags.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              ⚠ Contract Red Flags at {hospitalData.hospital}
            </h2>
            <p className="text-red-800 mb-6">
              Our analysis has identified the following red flags in contracts at this facility.
              Review these carefully and use our audit tool before signing any agreement.
            </p>
            <div className="space-y-3">
              {hospitalData.redFlags.map((flag, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">⚠</span>
                    <div>
                      <div className="font-semibold text-red-900">{flag}</div>
                      <div className="text-sm text-gray-700 mt-1">
                        {flag.includes('Late payments') &&
                          'Reports of delayed payroll processing. Verify payment terms and history before accepting.'}
                        {flag.includes('Mandatory overtime') &&
                          'Contract may include forced overtime clauses. Ensure you understand work hour requirements.'}
                        {flag.includes('Unclear cancellation') &&
                          'Contract cancellation terms are ambiguous. Request clarification on termination conditions.'}
                        {flag.includes('Non-compete') &&
                          'Non-compete clause may restrict future employment. Consult legal counsel before signing.'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/audit"
              className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Download Full Contract Audit Kit
            </Link>
          </div>
        )}

        {/* SEO Content Block */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Working at {hospitalData.hospital}
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              {hospitalData.hospital} in {hospitalData.city}, {hospitalData.state} currently has{' '}
              {hospitalData.totalPositions} nursing position{hospitalData.totalPositions > 1 ? 's' : ''}{' '}
              available with an average salary of <strong>${hospitalData.avgSalary.toLocaleString()}</strong>.
              This facility offers opportunities for both travel nurses and permanent staff positions.
            </p>
            {hospitalData.redFlags.length === 0 ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <div className="flex items-start">
                  <span className="text-green-600 text-2xl mr-3">✓</span>
                  <div>
                    <p className="font-semibold text-green-900">Clean Contract Status</p>
                    <p className="text-green-800 text-sm mt-1">
                      Our analysis shows no red flags in contracts from {hospitalData.hospital}.
                      This facility demonstrates transparent contracting practices and fair terms.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                <div className="flex items-start">
                  <span className="text-red-600 text-2xl mr-3">⚠</span>
                  <div>
                    <p className="font-semibold text-red-900">Contract Concerns Identified</p>
                    <p className="text-red-800 text-sm mt-1">
                      We&apos;ve identified {hospitalData.redFlags.length} red flag
                      {hospitalData.redFlags.length > 1 ? 's' : ''} in contracts from {hospitalData.hospital}.
                      Exercise caution and thoroughly review all contract terms before accepting any position.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <p>
              <strong>What to Know Before Applying:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Average compensation: ${hospitalData.avgSalary.toLocaleString()} annually</li>
              <li>{hospitalData.totalPositions} position{hospitalData.totalPositions > 1 ? 's' : ''} currently available</li>
              <li>Location: {hospitalData.city}, {hospitalData.state}</li>
              <li>
                {hospitalData.redFlags.length === 0
                  ? 'No contract red flags identified'
                  : `${hospitalData.redFlags.length} contract concern${hospitalData.redFlags.length > 1 ? 's' : ''} to review`}
              </li>
            </ul>
            <p>
              Use our comprehensive{' '}
              <Link href="/audit" className="text-blue-600 hover:text-blue-700 underline">
                Contract Red Flag Audit Tool
              </Link>{' '}
              to review any contract offer from {hospitalData.hospital}. Our checklist covers common
              issues including payment terms, cancellation clauses, overtime requirements, and non-compete
              restrictions.
            </p>
          </div>
        </div>

        {/* Mid-content AdSense */}
        <div className="mb-8">
          <AdSenseSlot position="mid-content" />
        </div>

        {/* Data Table and Monetization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <DataTable
              data={hospitalData.positions}
              title="Available Positions"
            />
          </div>
          <div className="space-y-6">
            {/* AdSense Sidebar */}
            <AdSenseSlot position="sidebar" />

            <MonetizationSlot type="jobs" city={hospitalData.city} state={hospitalData.state} />
            <MonetizationSlot type="education" city={hospitalData.city} state={hospitalData.state} />

            {/* Premium Audit CTA */}
            <PremiumAuditCTA placement="sidebar" />

            {/* Recommended Gear */}
            <RecommendedGear />
          </div>
        </div>

        {/* Footer Premium Audit CTA */}
        <div className="mt-12">
          <PremiumAuditCTA placement="footer" />
        </div>

        {/* FAQ Section */}
        <div className="mt-10 bg-white rounded-xl shadow-sm p-7 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions — {hospitalData.hospital}</h2>
          <div className="space-y-5 text-sm">
            <div>
              <p className="font-semibold text-gray-900">How much do nurses make at {hospitalData.hospital}?</p>
              <p className="text-gray-600 mt-1">
                Nurses at {hospitalData.hospital} average <strong>${hospitalData.avgSalary.toLocaleString()}/year</strong> (${hourlyRate}/hr) across {hospitalData.totalPositions} tracked position{hospitalData.totalPositions !== 1 ? 's' : ''} in {hospitalData.city}, {hospitalData.state}.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Does {hospitalData.hospital} have contract red flags?</p>
              <p className="text-gray-600 mt-1">
                {hospitalData.redFlags.length === 0
                  ? `Our analysis shows no contract red flags at ${hospitalData.hospital}. Contract terms appear transparent and fair.`
                  : `We identified ${hospitalData.redFlags.length} red flag${hospitalData.redFlags.length > 1 ? 's' : ''}: ${hospitalData.redFlags.join(', ')}. Review carefully or `}
                {hospitalData.redFlags.length > 0 && (
                  <Link href="/audit" className="text-blue-600 hover:underline">run a free contract audit</Link>
                )}
                {hospitalData.redFlags.length > 0 && ' before signing.'}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">How does {hospitalData.hospital} pay compare to the state average?</p>
              <p className="text-gray-600 mt-1">
                The ${hospitalData.avgSalary.toLocaleString()}/year average at {hospitalData.hospital} can be compared against the statewide RN average using our{' '}
                <Link href="/" className="text-blue-600 hover:underline">nurse salary calculator</Link>. See the full{' '}
                <Link href={`/rn-salary-by-state/${slugify(hospitalData.state)}`} className="text-blue-600 hover:underline">{hospitalData.state} RN salary guide</Link>{' '}
                and <Link href={`/salary/${slugify(hospitalData.state)}/${slugify(hospitalData.city)}`} className="text-blue-600 hover:underline">{hospitalData.city} nurse salary data</Link> for local context.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
