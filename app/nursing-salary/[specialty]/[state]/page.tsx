import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import {
  specialtyConfig,
  getSpecialtyBySlug,
  stateToSlug,
  getStateDataBySlug,
  stateData,
  calculateSalary,
} from '@/lib/bls-data';
import { getCitiesByState, slugify } from '@/lib/data';

interface PageProps {
  params: Promise<{ specialty: string; state: string }>;
}

export async function generateStaticParams() {
  const params: { specialty: string; state: string }[] = [];
  for (const spec of specialtyConfig) {
    for (const s of stateData) {
      params.push({ specialty: spec.slug, state: stateToSlug(s.state) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { specialty, state } = await params;
  const spec = getSpecialtyBySlug(specialty);
  const sd = getStateDataBySlug(state);
  if (!spec || !sd) return { title: 'Not Found' };

  const stateSalary = Math.round(calculateSalary(spec.blsId, sd.state, '4-6'));
  const stateHourly = Math.round((stateSalary / 2080) * 100) / 100;

  return {
    title: `${spec.shortName} Salary in ${sd.state} (2026) | $${stateSalary.toLocaleString()}/yr`,
    description: `${spec.name} salary in ${sd.state}: average $${stateSalary.toLocaleString()}/year ($${stateHourly.toFixed(2)}/hr) in 2026. See how ${sd.state} compares to nearby states and the national average.`,
    alternates: {
      canonical: `/nursing-salary/${specialty}/${state}`,
    },
  };
}

function formatSalary(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

function formatHourly(annual: number) {
  return `$${(annual / 2080).toFixed(2)}/hr`;
}

export default async function SpecialtyStatePage({ params }: PageProps) {
  const { specialty, state } = await params;
  const spec = getSpecialtyBySlug(specialty);
  const sd = getStateDataBySlug(state);
  if (!spec || !sd) notFound();

  const stateSalary = Math.round(calculateSalary(spec.blsId, sd.state, '4-6'));
  const nationalAvg = spec.nationalAvgSalary;
  const diffPct = Math.round(((stateSalary - nationalAvg) / nationalAvg) * 100);
  const diffLabel = diffPct >= 0 ? `${diffPct}% above` : `${Math.abs(diffPct)}% below`;

  // Compute salaries for all states and build comparison table
  const allStateSalaries = stateData
    .map(s => ({
      state: s.state,
      salary: Math.round(calculateSalary(spec.blsId, s.state, '4-6')),
    }))
    .sort((a, b) => b.salary - a.salary);

  const rank = allStateSalaries.findIndex(s => s.state === sd.state) + 1;

  const comparisonRows = [
    ...allStateSalaries.slice(0, 5).map(s => ({
      label: s.state === sd.state ? `${s.state} ★` : s.state,
      avgSalary: formatSalary(s.salary),
      hourlyRate: formatHourly(s.salary),
    })),
    ...(rank > 5
      ? [
          {
            label: `${sd.state} (your state, #${rank})`,
            avgSalary: formatSalary(stateSalary),
            hourlyRate: formatHourly(stateSalary),
          },
        ]
      : []),
    {
      label: 'National Average',
      avgSalary: formatSalary(nationalAvg),
      hourlyRate: `$${spec.nationalHourlyRate.toFixed(2)}/hr`,
    },
  ];

  const experienceRows = [
    { label: 'New Grad (0–1 yr)', avgSalary: formatSalary(stateSalary * 0.80), hourlyRate: formatHourly(stateSalary * 0.80) },
    { label: '2–3 years', avgSalary: formatSalary(stateSalary * 0.90), hourlyRate: formatHourly(stateSalary * 0.90) },
    { label: '4–6 years', avgSalary: formatSalary(stateSalary * 1.00), hourlyRate: formatHourly(stateSalary * 1.00) },
    { label: '7–10 years', avgSalary: formatSalary(stateSalary * 1.12), hourlyRate: formatHourly(stateSalary * 1.12) },
    { label: '11–15 years', avgSalary: formatSalary(stateSalary * 1.22), hourlyRate: formatHourly(stateSalary * 1.22) },
    { label: '16+ years', avgSalary: formatSalary(stateSalary * 1.30), hourlyRate: formatHourly(stateSalary * 1.30) },
  ];

  const certNote = spec.certification
    ? `${spec.certification} certification typically adds $4,000–$7,000/year on top of base salary in ${sd.state}.`
    : `Additional leadership responsibilities and shift differentials can add $5,000–$12,000/year in ${sd.state}.`;

  const faqs = [
    {
      question: `How much does a ${spec.shortName} make in ${sd.state}?`,
      answer: `The average ${spec.shortName} salary in ${sd.state} is ${formatSalary(stateSalary)}/year (${formatHourly(stateSalary)}) in 2026. That is ${diffLabel} the national average of ${formatSalary(nationalAvg)}/year.`,
    },
    {
      question: `What is the hourly rate for a ${spec.shortName} in ${sd.state}?`,
      answer: `${spec.shortName}s in ${sd.state} earn an average of ${formatHourly(stateSalary)} in 2026. With night shift differentials ($3–$8/hr extra) the effective rate is often higher.`,
    },
    {
      question: `How does ${sd.state} rank for ${spec.shortName} pay?`,
      answer: `${sd.state} ranks #${rank} out of 50 states for ${spec.shortName} salary. The top-paying state is ${allStateSalaries[0].state} at ${formatSalary(allStateSalaries[0].salary)}/year.`,
    },
    ...(spec.certification
      ? [
          {
            question: `Does ${spec.certification} certification increase pay in ${sd.state}?`,
            answer: `Yes. ${spec.certification}-certified ${spec.shortName}s in ${sd.state} typically earn $4,000–$7,000 more per year than non-certified nurses in the same role. Many hospital systems also pay a certification differential of $1–$3/hr.`,
          },
        ]
      : []),
  ];

  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Nursing Salary', href: '/nursing-salary/by-specialty-2026' },
        ...(spec.parentPageSlug
          ? [{ label: `${spec.shortName} Salary`, href: `/nursing-salary/${spec.parentPageSlug}` }]
          : []),
        { label: sd.state },
      ]}
      h1={`${spec.shortName} Salary in ${sd.state} (2026)`}
      lastUpdated="April 2026"
      schemaTitle={`${spec.shortName} Salary in ${sd.state} 2026`}
      schemaDescription={`Average ${spec.name} salary in ${sd.state} is ${formatSalary(stateSalary)}/year in 2026 — ${diffLabel} the national average.`}
      schemaUrl={`/nursing-salary/${specialty}/${state}`}
      faqs={faqs}
    >
      <p>
        {spec.shortName}s in <strong>{sd.state}</strong> earn an average of{' '}
        <strong>
          {formatSalary(stateSalary)}/year ({formatHourly(stateSalary)})
        </strong>{' '}
        in 2026 — {diffLabel} the national average of {formatSalary(nationalAvg)}/year. {sd.state}{' '}
        ranks <strong>#{rank} out of 50 states</strong> for {spec.shortName} pay.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">
        {spec.shortName} Salary in {sd.state} vs. Other States
      </h2>
      <p>
        The table below shows the top 5 highest-paying states for {spec.shortName}s alongside{' '}
        {sd.state} and the national average.
      </p>

      <SalaryTable
        title={`${spec.shortName} Salary by State — Top 5 + ${sd.state}`}
        headers={['State', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={comparisonRows}
        source="BLS OEWS 2025 + NurseSalaryIntel 2026 projections"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">
        {spec.shortName} Salary in {sd.state} by Experience
      </h2>
      <p>
        Experience is a major driver of pay. In {sd.state}, a new grad {spec.shortName} starts around{' '}
        {formatSalary(stateSalary * 0.8)}/year, while a nurse with 16+ years earns up to{' '}
        {formatSalary(stateSalary * 1.3)}/year.
      </p>

      <SalaryTable
        title={`${spec.shortName} Pay by Experience — ${sd.state}`}
        headers={['Experience Level', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={experienceRows}
        source="NurseSalaryIntel survey data, 2026"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">
        Certifications & Pay Impact in {sd.state}
      </h2>
      <p>{certNote}</p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">
        Travel {spec.shortName} Pay in {sd.state}
      </h2>
      <p>
        Travel {spec.shortName}s in {sd.state} typically earn 35–70% more than staff nurses — roughly{' '}
        {formatSalary(stateSalary * 1.5)}–{formatSalary(stateSalary * 1.7)}/year when annualized.
        The premium reflects facility demand, housing stipends, and contract flexibility.
      </p>
      <Link
        href="/travel-nursing/salary-by-specialty"
        className="text-primary font-semibold hover:underline text-sm"
      >
        See travel nurse specialty salary data →
      </Link>

      {spec.parentPageSlug && (
        <>
          <h2 className="text-2xl font-bold font-headline text-on-surface">
            National {spec.shortName} Salary Overview
          </h2>
          <p>
            For the full national picture — all 50 states, experience breakdowns, and certification
            premiums — see the complete {spec.shortName} salary guide.
          </p>
          <Link
            href={`/nursing-salary/${spec.parentPageSlug}`}
            className="text-primary font-semibold hover:underline text-sm"
          >
          </Link>
        </>
      )}

      {/* Top Cities for this Specialty in this State */}
      {(() => {
        const cities = getCitiesByState(sd.state).slice(0, 6);
        if (cities.length === 0) return null;
        const stateSlugVal = stateToSlug(sd.state);
        return (
          <div className="not-prose mt-8 border-t border-outline-variant pt-6">
            <h2 className="text-xl font-bold font-headline text-on-surface mb-3">
              Top Cities for {spec.shortName}s in {sd.state}
            </h2>
            <p className="text-on-surface-variant text-sm mb-4">
              {spec.shortName} pay in {sd.state} varies by metro area. See city-level RN salary data, top hospitals, and local market context.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <Link
                  key={city}
                  href={`/salary/${stateSlugVal}/${slugify(city)}`}
                  className="flex items-center gap-2 p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors text-sm"
                >
                  <span className="text-primary font-medium">{city}</span>
                  <span className="text-on-surface-variant text-xs ml-auto">{'->'}</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-on-surface-variant mt-3">
              <Link href={`/rn-salary-by-state/${stateSlugVal}`} className="text-primary hover:underline">
                All {sd.state} RN salary data
              </Link>
              {' · '}
              <Link href="/rn-salary-by-city" className="text-primary hover:underline">
                Browse all cities
              </Link>
            </p>
          </div>
        );
      })()}

      {/* Related Specialties */}
      <div className="not-prose mt-8 border-t border-outline-variant pt-6">
        <h2 className="text-xl font-bold font-headline text-on-surface mb-3">
          Compare Other Nursing Specialties in {sd.state}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: `/nursing-salary/icu-nurse-salary/${stateToSlug(sd.state)}`, label: 'ICU Nurse Salary', desc: 'Critical care pay + CCRN premium' },
            { href: `/nursing-salary/er-nurse-salary/${stateToSlug(sd.state)}`, label: 'ER Nurse Salary', desc: 'Emergency nursing pay' },
            { href: `/nursing-salary/nicu-nurse-salary/${stateToSlug(sd.state)}`, label: 'NICU Nurse Salary', desc: 'Neonatal ICU pay' },
            { href: `/nursing-salary/nurse-practitioner-salary/${stateToSlug(sd.state)}`, label: 'NP Salary', desc: 'Nurse Practitioner pay' },
          ].filter(item => !item.href.includes(`/${specialty}/`)).slice(0, 4).map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between p-3 rounded-lg border border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors"
            >
              <div>
                <p className="text-sm font-semibold text-primary">{label}</p>
                <p className="text-xs text-on-surface-variant">{desc}</p>
              </div>
              <span className="text-on-surface-variant text-xs ml-3">{'->'}</span>
            </Link>
          ))}
        </div>
      </div>
    </SEOPageLayout>
  );
}
