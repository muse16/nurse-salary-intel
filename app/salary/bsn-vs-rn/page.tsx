import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SiteNav from '@/components/SiteNav';
import RoiCalculator from '@/components/RoiCalculator';

export const metadata: Metadata = {
  title: 'ADN vs BSN Salary 2026: Is the $10K/yr Pay Gap Worth It?',
  description:
    'BSN nurses earn $10,400 more per year than ADN RNs on average in 2026. See state-by-state pay gap, lifetime ROI, and which hospitals require a BSN for promotion.',
  alternates: { canonical: 'https://nursesalaryintel.com/salary/bsn-vs-rn' },
  openGraph: {
    title: 'ADN vs BSN Salary 2026: Is the $10K/yr Pay Gap Worth It?',
    description: 'BSN nurses earn $10,400/yr more than ADN RNs. Full state-by-state breakdown + ROI calculator.',
    url: 'https://nursesalaryintel.com/salary/bsn-vs-rn',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much more does a BSN nurse make than an ADN nurse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BSN nurses earn an average of $10,400 more per year than ADN-prepared RNs nationally in 2026. The gap is widest in California ($14,000/yr) and narrowest in lower-cost states like Mississippi ($9,000/yr).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is getting a BSN worth it financially?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most nurses. An online RN-to-BSN costs $7,000-$20,000 and pays back within 1-2 years via the salary premium. Over a 30-year career, the BSN advantage compounds to $300,000+ in additional earnings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do hospitals require a BSN for RN jobs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magnet-designated hospitals increasingly require or strongly prefer BSN nurses. Many large systems including Kaiser, Mayo Clinic, and Cleveland Clinic have BSN within 5 years policies for newly hired ADN nurses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an online RN-to-BSN take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most online RN-to-BSN programs take 12-18 months for a working nurse. Competency-based programs like WGU allow completion in as few as 6 months.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'ADN vs BSN Salary 2026: Is the $10K/yr Pay Gap Worth It?',
  description: 'BSN nurses earn $10,400 more per year than ADN RNs on average in 2026.',
  url: 'https://nursesalaryintel.com/salary/bsn-vs-rn',
  datePublished: '2026-01-01',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'NurseSalaryIntel Editorial Team', url: 'https://nursesalaryintel.com/about' },
  publisher: { '@type': 'Organization', name: 'NurseSalaryIntel', url: 'https://nursesalaryintel.com' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nursesalaryintel.com' },
    { '@type': 'ListItem', position: 2, name: 'Salary Data', item: 'https://nursesalaryintel.com/salary-data' },
    { '@type': 'ListItem', position: 3, name: 'ADN vs BSN Salary 2026', item: 'https://nursesalaryintel.com/salary/bsn-vs-rn' },
  ],
};

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
    length: '12-24 months',
    cost: '~$7,570/6-mo term',
    format: '100% Online',
    description: 'Competency-based learning at your own pace. No set class times, CCNE-accredited.',
    href: '#',
  },
  {
    name: 'Chamberlain University',
    abbr: 'Chamberlain',
    badge: 'Fastest Track',
    badgeColor: 'bg-blue-100 text-blue-800',
    length: '15-18 months',
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
    length: '16-24 months',
    cost: '~$480/credit hour',
    format: '100% Online',
    description: 'Strong alumni network and ACEN-accredited curriculum for working nurses.',
    href: '#',
  },
  {
    name: 'Walden University',
    abbr: 'Walden',
    badge: 'MSN Pathway',
    badgeColor: 'bg-orange-100 text-orange-800',
    length: '18-30 months',
    cost: '~$705/credit hour',
    format: '100% Online',
    description: 'RN-to-MSN bridge option. CCNE-accredited, strong for career advancers.',
    href: '#',
  },
];

function fmt(n: number) {
  return '$' + (n / 1000).toFixed(0) + 'K';
}

export default function BsnVsRnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <SiteNav />

      <header className="bg-white border-b border-gray-200 shadow-sm pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Updated May 2026 &middot; BLS OEWS Data
            </div>
            <h1 className="text-4xl font-black text-gray-900 leading-tight">
              BSN vs RN Salary 2026:<br className="hidden sm:block" /> Is the $10K/yr Pay Gap Worth It?
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              ADN nurses average <strong>$65,000/yr</strong> while BSN nurses earn <strong>$75,400/yr</strong> &mdash; a
              <strong> $10,400 annual gap</strong> that compounds into $300K+ over a career. Full breakdown by state plus
              an ROI calculator to see your personal return.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              {[
                { label: 'ADN National Avg', value: '$65K/yr', color: 'text-gray-700' },
                { label: 'BSN National Avg', value: '$75.4K/yr', color: 'text-primary' },
                { label: 'MSN National Avg', value: '$90K/yr', color: 'text-purple-700' },
                { label: 'NP National Avg',  value: '$115K/yr', color: 'text-green-700' },
              ].map(({ label, value, color }) => (
                <div key={label} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-center shadow-sm">
                  <div className={`text-2xl font-black ${color}`}>{value}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Image
          src="/images/bsn-vs-rn-hero.png"
          alt="Nursing graduate in white coat holding diploma outside hospital, representing BSN degree attainment and career advancement for RNs in 2026"
          width={1200}
          height={630}
          className="rounded-xl w-full"
          priority
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        <section className="bg-primary-fixed rounded-2xl p-6 border border-primary/10">
          <h2 className="text-lg font-bold text-on-primary-fixed mb-2">Quick Answer: BSN vs RN Salary Difference</h2>
          <p className="text-on-primary-fixed/90 text-sm leading-relaxed">
            <strong>BSN nurses earn $10,400 more per year than ADN-prepared RNs</strong> on a national average basis in 2026
            ($75,400 vs. $65,000). The gap is widest in California ($14,000/yr). Over a 30-year career, the BSN premium
            totals <strong>$312,000+ in additional earnings</strong> before accounting for management and NP pathways, which
            are almost exclusively BSN-gated. An online RN-to-BSN program costs $8,000&ndash;$18,000 and pays back within 12&ndash;18 months.
          </p>
        </section>

        <section>
          <RoiCalculator />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">BSN vs ADN Salary Gap by State, 2026</h2>
          <Image
            src="/images/bsn-vs-rn-comparison.png"
            alt="Bar chart comparing ADN and BSN annual salaries across 10 states in 2026, showing BSN premium of $9,000 to $14,000 per year depending on state"
            width={800}
            height={450}
            className="rounded-xl w-full"
            loading="lazy"
          />
          <p className="text-xs text-gray-400 mt-2">
            Source: BLS Occupational Employment Statistics 2025, adjusted for 2026. BSN premium based on employer-reported salary differentials.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">ADN vs BSN vs MSN vs NP Salary by State</h2>
          <p className="text-gray-500 text-sm mb-5">
            Annual salary estimates by credential level. Last updated May 2026. Source: BLS OES 2025 adjusted for 2026.
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
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Is a BSN Actually Worth It? The Full Math</h2>
          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">The salary gap starts small and grows fast</h3>
              <p>
                Entry-level ADN and BSN nurses at the bedside often earn within $2,000&ndash;$3,000 of each other.
                The gap accelerates at the 3&ndash;5 year mark when charge nurse, case management, and nurse educator
                positions open &mdash; roles that <strong>almost universally require a BSN</strong> at Magnet hospitals.
                At senior levels the gap widens to $12,000&ndash;$18,000 because BSN nurses are eligible for clinical
                coordinator, quality improvement, and nurse manager positions that ADN nurses are excluded from.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">The 30-year career math</h3>
              <p>
                A $10,400/yr premium compounded at 2.5% annual wage growth over 30 years produces{' '}
                <strong>$430,000+ in additional lifetime earnings</strong>. Even the pessimistic case &mdash;
                $7,500/yr premium, no growth &mdash; totals $225,000. Against an online BSN cost of $8,000&ndash;$18,000,
                the payback period is 1&ndash;2 years.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">Magnet hospitals pay 8&ndash;15% above market</h3>
              <p>
                The ANCC reports Magnet-designated hospitals compensate nurses at an 8&ndash;15% premium versus
                non-Magnet competitors in the same market. Most Magnet hospitals require 80%+ of nursing staff to hold
                BSNs. In high-cost markets like{' '}
                <Link href="/san-diego-rn-salary-2026" className="text-primary hover:underline">San Diego</Link>,{' '}
                <Link href="/new-york-city-rn-salary-2026" className="text-primary hover:underline">New York City</Link>,
                and <Link href="/boston-rn-salary-2026" className="text-primary hover:underline">Boston</Link>,
                Magnet access is often the difference between a $75K and $95K salary.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-base mb-2">The BSN in 10 policy environment</h3>
              <p>
                The ANA, Joint Commission, and IOM Future of Nursing report all recommend BSN as minimum preparation.
                New York State has a formal BSN-in-10 law requiring RNs licensed after January 2018 to earn a BSN
                within 10 years. UPMC and Ascension have adopted similar internal policies. ADN nurses who do not
                advance their education face growing job-market headwinds over the next decade.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-sm mx-auto">
          <Image
            src="/images/bsn-vs-rn-hospital.png"
            alt="Nurse in scrubs reviewing educational materials at hospital nursing station, representing career advancement through RN-to-BSN bridge program"
            width={600}
            height={800}
            className="rounded-xl w-full"
            loading="lazy"
          />
        </div>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Hospitals Require a BSN?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Hospital / System</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">BSN Policy</th>
                  <th className="text-right px-4 py-3 font-semibold text-primary">BSN RN Avg Pay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { hosp: 'Kaiser Permanente (CA)', policy: 'BSN required for new hires', pay: '$98,000-$138,000' },
                  { hosp: 'Mayo Clinic', policy: 'BSN strongly preferred, required for advancement', pay: '$72,000-$105,000' },
                  { hosp: 'Cleveland Clinic', policy: 'BSN required within 5 years', pay: '$68,000-$98,000' },
                  { hosp: 'NYU Langone Health', policy: 'BSN required (Magnet)', pay: '$95,000-$135,000' },
                  { hosp: 'UPMC', policy: 'BSN required (BSN-in-10 law + policy)', pay: '$65,000-$92,000' },
                  { hosp: 'Ascension Health', policy: 'BSN preferred; required for charge/lead', pay: '$62,000-$90,000' },
                  { hosp: 'HCA Healthcare', policy: 'BSN preferred, ADN accepted with pathway plan', pay: '$58,000-$85,000' },
                  { hosp: 'Community / Critical Access', policy: 'ADN typically accepted', pay: '$52,000-$72,000' },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{r.hosp}</td>
                    <td className="px-4 py-3 text-gray-600">{r.policy}</td>
                    <td className="px-4 py-3 text-right font-semibold text-primary">{r.pay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="bsn-programs">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Top Online RN-to-BSN Programs 2026</h2>
          <p className="text-gray-500 text-sm mb-6">
            CCNE- or ACEN-accredited programs designed for working RNs, completable entirely online.
          </p>
          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 text-xs text-amber-800">
            <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>
              <strong>Disclosure:</strong> We may receive compensation when you request information from schools listed below.
              This does not affect our editorial evaluations or rankings.
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {programs.map((prog) => (
              <div key={prog.abbr} className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden hover:shadow-md hover:border-primary/30 transition-all">
                <div className="px-6 pt-6 pb-4 flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{prog.abbr}</div>
                      <h3 className="text-base font-bold text-gray-900 mt-0.5">{prog.name}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${prog.badgeColor}`}>{prog.badge}</span>
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
                  <a href={prog.href} className="block w-full bg-primary hover:bg-primary-container text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition-all active:scale-95">
                    Get Program Info &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-5 divide-y divide-gray-100">
            {[
              {
                q: 'How much more does a BSN nurse make than an ADN nurse?',
                a: 'BSN nurses earn an average of $10,400 more per year than ADN-prepared RNs nationally in 2026. The gap is widest in California ($14,000/yr) and narrowest in lower-cost states like Mississippi ($9,000/yr). The premium grows substantially at senior and leadership levels.',
              },
              {
                q: 'Is getting a BSN worth it financially?',
                a: 'Yes, for most nurses. An online RN-to-BSN costs $7,000-$20,000 and pays back within 1-2 years via the salary premium. Over a 30-year career, the BSN advantage compounds to $300,000+ in additional earnings, before factoring in management and NP pathways that are BSN-gated.',
              },
              {
                q: 'Do hospitals require a BSN for RN jobs?',
                a: 'Magnet-designated hospitals increasingly require or strongly prefer BSN nurses. Many large systems including Kaiser, Mayo Clinic, and Cleveland Clinic have BSN-within-5-years policies for ADN nurses. As of 2026, approximately 40% of U.S. hospital RN positions list BSN as required or preferred.',
              },
              {
                q: 'How long does an online RN-to-BSN take?',
                a: 'Most online RN-to-BSN programs take 12-18 months for a working nurse. Competency-based programs like WGU allow completion in as few as 6 months. Clinical hours are typically waived for licensed RNs in active practice.',
              },
              {
                q: 'Can I get a BSN while working full-time as a nurse?',
                a: 'Yes. Online RN-to-BSN programs are specifically designed for working nurses. WGU, Chamberlain, and GCU offer fully asynchronous coursework. Most nurses complete 6-12 credit hours per semester while working 32-40 hours per week. Hospital tuition reimbursement ($2,500-$5,250/yr) can significantly offset cost.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className={i > 0 ? 'pt-5' : ''}>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-primary-container rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Advance Your Career?</h2>
          <p className="text-primary-fixed-dim mb-6 max-w-xl mx-auto">
            BSN nurses earn $10,400+ more per year. Request free info from top online programs today.
          </p>
          <a href="#bsn-programs" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-xl text-sm shadow-md hover:shadow-lg transition-all active:scale-95">
            Compare BSN Programs
          </a>
          <p className="text-xs text-primary-fixed-dim/70 mt-4">
            We may receive compensation when you request information. No obligation to enroll.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Salary Topics</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/new-grad-rn-salary-2026', title: 'New Grad RN Salary 2026', desc: 'Starting pay, sign-on bonuses, and negotiation scripts.' },
              { href: '/rn-salary-by-state', title: 'RN Salary by State', desc: 'Compare salaries across all 50 states.' },
              { href: '/rn-salary-by-years-of-experience-2026', title: 'RN Salary by Experience', desc: 'How pay grows from year 1 to 30+.' },
              { href: '/nurse-practitioner-salary-2026', title: 'Nurse Practitioner Salary', desc: 'NP pay after completing your MSN/DNP.' },
            ].map(({ href, title, desc }) => (
              <Link key={href} href={href} className="p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors">
                <p className="font-bold text-primary text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-xs">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-sm text-gray-500 space-y-1 border-t border-gray-200 pt-6">
          <p className="font-semibold text-gray-700">Sources &amp; Methodology</p>
          <p>Salary data from BLS Occupational Employment and Wage Statistics (OEWS) 2025, adjusted for 2026. BSN premium cross-referenced against AACN employer survey data and hospital-reported wage differentials.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><a href="https://www.bls.gov/oes/current/oes291141.htm" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">BLS OES: Registered Nurses (2025)</a></li>
            <li><a href="https://www.aacnnursing.org/news-data/all-news/aacn-data-confirm-value-of-higher-education-in-nursing" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">AACN: Value of Higher Education in Nursing</a></li>
            <li><a href="https://www.nursingworld.org/practice-policy/workforce/what-is-nursing/rn-education-scope-of-practice/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ANA: RN Education and Scope of Practice</a></li>
          </ul>
          <p className="mt-2 text-xs">Last updated: May 2026. By <Link href="/about" className="text-primary hover:underline">NurseSalaryIntel Editorial Team</Link>.</p>
        </section>

        <div className="text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          {' '}/{' '}
          <Link href="/salary-data" className="hover:text-primary">Salary Data</Link>
          {' '}/{' '}
          <span className="text-gray-700 font-medium">BSN vs RN Salary 2026</span>
        </div>

      </main>
    </div>
  );
}
