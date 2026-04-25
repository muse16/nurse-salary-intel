import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import RoiCalculator from '@/components/RoiCalculator';

export const metadata: Metadata = {
  title: 'BSN vs RN Salary 2026: BSN Earns $10K+/yr More (Full Math)',
  description:
    'BSN nurses earn $10,000+ more per year than ADN RNs in 2026. See state-by-state pay gap, lifetime ROI calculator, MSN/NP comparison, and top online BSN bridge programs.',
  alternates: { canonical: 'https://nursesalaryintel.com/salary/bsn-vs-rn' },
  openGraph: {
    title: 'BSN vs RN Salary 2026: BSN Earns $10K+/yr More',
    description: 'State-by-state gap, lifetime ROI calculator, top online BSN bridge programs.',
    url: 'https://nursesalaryintel.com/salary/bsn-vs-rn',
  },
};

// State salary data — BLS-adjusted national averages (2026)
const stateData = [
  { state: 'California',      adn: 84000, bsn: 98000, msn: 118000, np: 150000 },
  { state: 'Massachusetts',   adn: 81000, bsn: 94000, msn: 113000, np: 144000 },
  { state: 'Hawaii',          adn: 80000, bsn: 93000, msn: 112000, np: 142000 },
  { state: 'Oregon',          adn: 78000, bsn: 90000, msn: 108000, np: 138000 },
  { state: 'Washington',      adn: 78000, bsn: 90000, msn: 108000, np: 138000 },
  { state: 'Alaska',          adn: 78000, bsn: 90000, msn: 108000, np: 137000 },
  { state: 'New York',        adn: 77000, bsn: 89000, msn: 107000, np: 136000 },
  { state: 'New Jersey',      adn: 75000, bsn: 87000, msn: 104000, np: 133000 },
  { state: 'Connecticut',     adn: 73000, bsn: 84000, msn: 101000, np: 129000 },
  { state: 'Maryland',        adn: 72000, bsn: 83000, msn:  99000, np: 127000 },
  { state: 'Illinois',        adn: 70000, bsn: 81000, msn:  97000, np: 124000 },
  { state: 'Colorado',        adn: 68000, bsn: 78000, msn:  94000, np: 120000 },
  { state: 'Arizona',         adn: 67000, bsn: 77000, msn:  92000, np: 118000 },
  { state: 'Minnesota',       adn: 67000, bsn: 77000, msn:  92000, np: 117000 },
  { state: 'Texas',           adn: 65000, bsn: 75000, msn:  90000, np: 115000 },
  { state: 'Georgia',         adn: 65000, bsn: 75000, msn:  90000, np: 115000 },
  { state: 'Florida',         adn: 64000, bsn: 73000, msn:  88000, np: 113000 },
  { state: 'Pennsylvania',    adn: 64000, bsn: 74000, msn:  88000, np: 112000 },
  { state: 'Michigan',        adn: 63000, bsn: 73000, msn:  87000, np: 111000 },
  { state: 'Virginia',        adn: 63000, bsn: 73000, msn:  87000, np: 111000 },
  { state: 'Ohio',            adn: 62000, bsn: 71000, msn:  85000, np: 109000 },
  { state: 'North Carolina',  adn: 62000, bsn: 71000, msn:  85000, np: 109000 },
  { state: 'Missouri',        adn: 60000, bsn: 69000, msn:  83000, np: 106000 },
  { state: 'Tennessee',       adn: 60000, bsn: 69000, msn:  83000, np: 106000 },
  { state: 'Alabama',         adn: 57000, bsn: 66000, msn:  79000, np: 101000 },
  { state: 'Mississippi',     adn: 55000, bsn: 64000, msn:  77000, np:  98000 },
];

const programs = [
  {
    name: 'Western Governors University',
    abbr: 'WGU',
    badge: 'Most Affordable',
    badgeColor: 'bg-green-100 text-green-800',
    length: '12–24 months',
    cost: '~$7,570/6-mo term',
    format: '100% Online',
    description: 'Competency-based learning — move as fast as your knowledge allows. No set class times, CCNE-accredited.',
    href: '#',
  },
  {
    name: 'Chamberlain University',
    abbr: 'Chamberlain',
    badge: 'Fastest Track',
    badgeColor: 'bg-blue-100 text-blue-800',
    length: '15–18 months',
    cost: '~$615/credit hour',
    format: '100% Online',
    description: 'Dedicated academic support and career services. ACEN-accredited with strong clinical outcomes.',
    href: '#',
  },
  {
    name: 'Grand Canyon University',
    abbr: 'GCU',
    badge: 'Widely Recognized',
    badgeColor: 'bg-purple-100 text-purple-800',
    length: '16–24 months',
    cost: '~$480/credit hour',
    format: '100% Online',
    description: 'Faith-based mission, strong alumni network, and ACEN-accredited curriculum for working nurses.',
    href: '#',
  },
  {
    name: 'Walden University',
    abbr: 'Walden',
    badge: 'MSN Pathway',
    badgeColor: 'bg-orange-100 text-orange-800',
    length: '18–30 months',
    cost: '~$705/credit hour',
    format: '100% Online',
    description: 'Broad specialization options including RN-to-MSN bridge. CCNE-accredited, strong for career advancers.',
    href: '#',
  },
];

function fmt(n: number) {
  return '$' + (n / 1000).toFixed(0) + 'K';
}

export default function BsnVsRnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteNav />

      {/* Hero */}
      <header className="bg-white border-b border-gray-200 shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Updated 2026 · BLS Data
            </div>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">
              BSN vs RN Salary 2026:<br className="hidden sm:block" /> Is a BSN Worth It?
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              ADN nurses average <strong>$65,000/yr</strong> while BSN nurses earn <strong>$75,000/yr</strong> — a
              $10,000 annual gap that compounds into $200K+ over a career. Here&apos;s the full breakdown by credential
              and state, plus an ROI calculator to see your personal return.
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              {[
                { label: 'ADN National Avg', value: '$65K/yr' },
                { label: 'BSN National Avg', value: '$75K/yr' },
                { label: 'MSN National Avg', value: '$90K/yr' },
                { label: 'NP National Avg',  value: '$115K/yr' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-primary">{value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Salary Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            ADN vs BSN vs MSN vs NP Salary by State
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Annual salary estimates by credential level. Sources: BLS Occupational Employment Statistics 2025, adjusted for 2026.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">State</th>
                  <th className="text-right px-4 py-3.5 font-semibold text-gray-700">ADN / RN</th>
                  <th className="text-right px-4 py-3.5 font-semibold text-primary">BSN</th>
                  <th className="text-right px-4 py-3.5 font-semibold text-purple-700">MSN</th>
                  <th className="text-right px-4 py-3.5 font-semibold text-green-700">NP</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-500">BSN Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stateData.map((row, i) => {
                  const premium = row.bsn - row.adn;
                  return (
                    <tr key={row.state} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="px-5 py-3 font-medium text-gray-900">{row.state}</td>
                      <td className="px-4 py-3 text-right text-gray-700">{fmt(row.adn)}</td>
                      <td className="px-4 py-3 text-right font-semibold text-primary">{fmt(row.bsn)}</td>
                      <td className="px-4 py-3 text-right text-purple-700">{fmt(row.msn)}</td>
                      <td className="px-4 py-3 text-right font-semibold text-green-700">{fmt(row.np)}</td>
                      <td className="px-5 py-3 text-right">
                        <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          +${premium.toLocaleString()}/yr
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-primary-fixed border-t-2 border-primary/20">
                  <td className="px-5 py-3.5 font-bold text-on-primary-fixed">National Average</td>
                  <td className="px-4 py-3.5 text-right font-bold text-gray-800">$65K</td>
                  <td className="px-4 py-3.5 text-right font-black text-primary">$75K</td>
                  <td className="px-4 py-3.5 text-right font-bold text-purple-700">$90K</td>
                  <td className="px-4 py-3.5 text-right font-bold text-green-700">$115K</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
                      +$10K/yr avg
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            * Salary ranges represent median annual earnings. Actual pay varies by employer, experience, and shift differential.
          </p>
        </section>

        {/* ROI Calculator */}
        <section>
          <RoiCalculator />
        </section>

        {/* Top BSN Programs */}
        <section id="bsn-programs">
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-2xl font-bold text-gray-900">Top Online BSN Programs 2026</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            These CCNE- or ACEN-accredited programs are designed for working RNs and can be completed entirely online.
          </p>

          {/* Disclosure */}
          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-xs text-amber-800">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Disclosure:</strong> We may receive compensation when you request information from schools listed below.
              This does not affect our editorial evaluations or rankings. Always verify accreditation and program details directly with the institution.
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {programs.map((prog) => (
              <div
                key={prog.abbr}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="px-6 pt-6 pb-4 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{prog.abbr}</div>
                      <h3 className="text-base font-bold text-gray-900 mt-0.5">{prog.name}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${prog.badgeColor}`}>
                      {prog.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{prog.description}</p>
                  <div className="grid grid-cols-3 gap-3 text-xs text-center">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="font-bold text-gray-900">{prog.length}</div>
                      <div className="text-gray-500 mt-0.5">Duration</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="font-bold text-gray-900">{prog.format}</div>
                      <div className="text-gray-500 mt-0.5">Format</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="font-bold text-gray-900">{prog.cost}</div>
                      <div className="text-gray-500 mt-0.5">Tuition</div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={prog.href}
                    className="block w-full bg-primary hover:bg-primary-container text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition-all active:scale-95"
                  >
                    Get Program Info →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / supporting content */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Is a BSN Actually Worth It?</h2>

          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">The salary gap is real — and it grows with seniority</h3>
              <p>
                Entry-level ADN and BSN nurses at the bedside often earn similar wages. The gap widens substantially
                with charge nurse, case management, and leadership roles, which almost universally require a BSN.
                Magnet-designated hospitals — which pay 8–15% above market — typically require BSN nurses.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">The &quot;BSN in 10&quot; movement is real workforce pressure</h3>
              <p>
                The American Nurses Association and Joint Commission both recommend BSN as minimum preparation. Many
                states and hospital systems have adopted &quot;BSN preferred&quot; or &quot;BSN required within 5 years&quot; policies,
                meaning ADN nurses who don&apos;t advance face job-market risk over time.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Online RN-to-BSN is low disruption</h3>
              <p>
                Programs like WGU are designed so you can work full-time while earning your degree. The average
                completion time is 12–18 months, and the competency-based model means prior nursing experience
                can accelerate your path significantly.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Advance Your Career?</h2>
          <p className="text-primary-fixed-dim mb-6 max-w-xl mx-auto">
            BSN nurses earn $10,000+ more per year. Request free info from top online programs and take the next step today.
          </p>
          <a
            href="#bsn-programs"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-xl text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Compare BSN Programs
          </a>
          <p className="text-xs text-primary-fixed-dim/70 mt-4">
            We may receive compensation when you request information. No obligation to enroll.
          </p>
        </section>

        {/* Breadcrumb / internal links */}
        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          {' '}/{' '}
          <Link href="/salary-data" className="hover:text-primary">Salary Data</Link>
          {' '}/{' '}
          <span className="text-gray-700 font-medium">BSN vs RN Salary</span>
        </div>

      </main>
    </div>
  );
}
                   