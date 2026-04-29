import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import Link from 'next/link';
import { getAllHospitals, getHospitalData, slugify } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Nurse Salary by Hospital (2026): How Much Top Systems Pay RNs',
  description: 'How much do top hospital systems pay nurses in 2026? See RN salary ranges at Kaiser, HCA, Ascension, Mayo Clinic, NYU Langone, and other major health systems.',
};

const faqs = [
  {
    question: 'Which hospital pays nurses the most?',
    answer: 'Among major national systems, Kaiser Permanente consistently offers the highest RN salaries — particularly in California, where experienced Kaiser nurses can earn $140,000–$165,000/year with union step increases and generous differentials. UCSF Medical Center, Stanford Health Care, and Cedars-Sinai are close behind in the California market. NYU Langone and Mount Sinai lead in New York.',
  },
  {
    question: 'Do Magnet hospitals pay nurses more?',
    answer: 'Yes, typically 8–15% more than non-Magnet facilities at comparable institutions. Magnet designation requires excellence in nursing practice and outcomes, which attracts and retains experienced nurses — creating upward wage pressure. However, Magnet status alone doesn\'t guarantee the highest pay; location, union status, and system size matter more.',
  },
  {
    question: 'How do I find out what a specific hospital pays nurses?',
    answer: 'The most reliable sources are: NurseSalaryIntel position-level data (what you\'re using now), Glassdoor and Indeed salary reports filtered by job title and location, and direct questions to nurse recruiters during interviews. Some states publish wage data through hospital price transparency rules. Union contract salary schedules are public documents at facilities covered by CNA, NYSNA, or other unions.',
  },
];

export default function NurseSalaryByHospital() {
  // Build hospital directory grouped by state
  const allHospitals = getAllHospitals();
  const byState: Record<string, { name: string; slug: string; city: string; avgSalary: number }[]> = {};

  allHospitals.forEach((hospitalName) => {
    const data = getHospitalData(hospitalName);
    if (!data) return;
    const state = data.state;
    if (!byState[state]) byState[state] = [];
    byState[state].push({
      name: hospitalName,
      slug: slugify(hospitalName),
      city: data.city,
      avgSalary: data.avgSalary,
    });
  });

  const sortedStates = Object.keys(byState).sort();

  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nurse Salary by Hospital' },
      ]}
      h1="Nurse Salary by Hospital — What Major Health Systems Pay RNs in 2026"
      lastUpdated="April 2026"
      schemaTitle="Nurse Salary by Hospital 2026"
      schemaDescription="RN salary ranges at major U.S. hospital systems including Kaiser, HCA, Mayo Clinic, and academic medical centers."
      schemaUrl="/nurse-salary-by-hospital"
      faqs={faqs}
    >
      <p>
        Not all hospitals pay nurses equally — and the difference between the highest and lowest paying systems in the same city can be $20,000–$40,000/year. Knowing how hospitals compare before you apply gives you real negotiating leverage and can be worth more than years of incremental raises at a lower-paying system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Highest Paying Hospital Systems in 2026</h2>
      <p>
        The top-paying systems share common characteristics: large scale, academic affiliation, Magnet designation, union contracts (in states where unions are strong), and operation in high-cost metros. Here&apos;s how major systems compare:
      </p>
      <ul className="list-disc pl-6 space-y-4 text-on-surface-variant">
        <li>
          <strong>Kaiser Permanente (California):</strong> The benchmark for RN compensation in the country. New grad RNs start at $87,000–$98,000. Experienced RNs on union step increases reach $140,000–$165,000. Kaiser&apos;s California Nurses Association contract provides structured annual increases, mandatory overtime protections, and some of the most generous differentials in the industry. See <Link href="/rn-salary-by-state/california" className="text-primary hover:underline">California RN salary data</Link>.
        </li>
        <li>
          <strong>UCSF Medical Center / Stanford Health Care:</strong> Academic medical centers in the Bay Area. RN salaries run $130,000–$160,000 for experienced nurses. Residency programs for new grads start at $90,000–$100,000. Heavy ICU and subspecialty nursing demand keeps salaries high.
        </li>
        <li>
          <strong>NYU Langone / Mount Sinai (New York City):</strong> NYC&apos;s top academic systems. Experienced RNs earn $108,000–$128,000. NYSNA union contracts at both systems provide step increases and strong differential structures. See <Link href="/rn-salary-by-state/new-york" className="text-primary hover:underline">New York RN salary data</Link>.
        </li>
        <li>
          <strong>Texas Medical Center (Houston):</strong> The largest medical complex in the world. Memorial Hermann, Houston Methodist, and MD Anderson pay experienced nurses $84,000–$102,000. Houston Methodist is consistently among the highest-paying Texas employers. Texas&apos;s no-income-tax status enhances effective take-home. See <Link href="/rn-salary-by-state/texas" className="text-primary hover:underline">Texas RN salary data</Link>.
        </li>
        <li>
          <strong>Mayo Clinic (Rochester, MN / Phoenix, AZ / Jacksonville, FL):</strong> Pay varies significantly by campus. Rochester nurses average $82,000–$96,000. Mayo Phoenix nurses average $82,000–$92,000 with no state income tax in Arizona. Mayo Jacksonville runs similar to Florida averages at $76,000–$86,000.
        </li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Large For-Profit Systems: HCA, Ascension, Tenet</h2>
      <p>
        For-profit hospital systems generally pay less than academic medical centers or Kaiser — but they operate more facilities across more markets and are often the primary employer in smaller cities. Pay varies widely by region:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>HCA Healthcare:</strong> The largest for-profit system in the U.S. Starting RN pay ranges from $28–$38/hr depending on market. Strong sign-on bonuses ($5,000–$15,000) are common at high-demand facilities. Nurses often cite below-average staffing ratios and limited union protections as downsides.</li>
        <li><strong>Ascension Health:</strong> Catholic not-for-profit system with significant presence in Texas, Michigan, and Tennessee. Pay scales are competitive within markets but typically below Kaiser or major academic centers. Mission-oriented workplace culture is frequently cited as a retention factor.</li>
        <li><strong>Tenet Healthcare:</strong> Significant Florida presence (multiple facilities in Miami, Tampa, and Palm Beach). Pay scales in Florida markets run $34–$40/hr for experienced nurses. See <Link href="/rn-salary-by-state/florida" className="text-primary hover:underline">Florida RN salary data</Link>.</li>
      </ul>

      <h2 className="text-2xl font-bold font-headline text-on-surface">What Drives Pay Differences Between Hospitals</h2>
      <p>
        The key variables that explain why hospital A pays $20,000 more than hospital B in the same city:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
        <li><strong>Union contracts:</strong> Unionized hospitals (CNA, NYSNA, ONA) pay more through negotiated schedules and mandatory step increases. Non-union facilities use merit-based raises that are slower and less predictable.</li>
        <li><strong>Magnet status:</strong> Magnet-designated facilities pay 8–15% more on average. Maintaining Magnet requires nurse satisfaction and low turnover — both supported by higher wages.</li>
        <li><strong>Academic affiliation:</strong> Teaching hospitals pay more to attract nurses capable of working alongside residents and students in complex clinical environments.</li>
        <li><strong>Trauma designation:</strong> Level I and Level II trauma centers pay 5–12% more than community hospitals for ICU, ER, and OR nurses, reflecting higher acuity and skill demands.</li>
      </ul>
      <p>
        Before accepting any hospital offer, use the <Link href="/" className="text-primary hover:underline">nurse salary calculator</Link> to benchmark the offer against your market. Then use our <Link href="/audit" className="text-primary hover:underline">contract audit tool</Link> to check for mandatory overtime clauses, float pool requirements, and cancellation penalties before you sign.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Browse All Hospitals by State</h2>
      <p>
        Select any hospital below to see position-level salary data, contract red flag analysis, and how pay compares to the local city and state average.
      </p>

      <div className="space-y-8 mt-4">
        {sortedStates.map((state) => (
          <div key={state}>
            <h3 className="text-lg font-semibold text-on-surface mb-3">
              <Link href={`/rn-salary-by-state/${slugify(state)}`} className="text-primary hover:underline">
                {state}
              </Link>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-surface-variant text-on-surface-variant text-left">
                    <th className="px-4 py-2 font-semibold border border-outline-variant">Hospital</th>
                    <th className="px-4 py-2 font-semibold border border-outline-variant">City</th>
                    <th className="px-4 py-2 font-semibold border border-outline-variant">Avg RN Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {byState[state].map((h, i) => (
                    <tr key={h.slug} className={i % 2 === 0 ? 'bg-surface' : 'bg-surface-variant/30'}>
                      <td className="px-4 py-2 border border-outline-variant">
                        <Link href={`/hospital/${h.slug}`} className="text-primary hover:underline font-medium">
                          {h.name}
                        </Link>
                      </td>
                      <td className="px-4 py-2 border border-outline-variant text-on-surface-variant">
                        <Link href={`/salary/${slugify(state)}/${slugify(h.city)}`} className="hover:underline text-on-surface-variant">
                          {h.city}
                        </Link>
                      </td>
                      <td className="px-4 py-2 border border-outline-variant font-semibold text-primary">
                        ${h.avgSalary.toLocaleString()}/yr
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6">
        See all nurse salary data by location: <Link href="/rn-salary-by-state" className="text-primary hover:underline">RN salary by state</Link> · <Link href="/rn-salary-by-city" className="text-primary hover:underline">RN salary by city</Link> · <Link href="/highest-paying-nursing-specialties" className="text-primary hover:underline">Highest paying specialties</Link>
      </p>
    </SEOPageLayout>
  );
}
