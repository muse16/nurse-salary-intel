export function MethodologyBox() {
  return (
    <div className="bg-surface-container-low rounded-xl p-5 mt-8 border border-outline-variant">
      <p className="font-semibold text-on-surface mb-2 text-sm uppercase tracking-wide">
        📊 Data Methodology
      </p>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        Salary figures on this page are <strong>2026 estimates</strong> derived from the most recent
        available{' '}
        <a
          href="https://www.bls.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-on-surface"
        >
          U.S. Bureau of Labor Statistics
        </a>{' '}
        Occupational Employment and Wage Statistics (OEWS)
        data, based on the May 2024 survey and published in March 2025. Estimated ranges may also
        incorporate publicly available 2025 job postings, hospital pay schedules, regional market
        conditions, and reported compensation trends.
      </p>
      <p className="text-on-surface-variant text-sm leading-relaxed mt-2">
        Official 2026 OEWS wage data has not yet been released. All salary figures on this page
        should be treated as informational estimates rather than official government statistics or
        guaranteed compensation rates.
      </p>
    </div>
  );
}
