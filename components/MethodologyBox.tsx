export function MethodologyBox() {
  return (
    <div className="bg-surface-container-low rounded-xl p-5 mt-8 border border-outline-variant">
      <p className="font-semibold text-on-surface mb-2 text-sm uppercase tracking-wide">
        📊 Data Methodology
      </p>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        Salary figures on this page are <strong>2026 estimates</strong> based on the most recent
        available BLS Occupational Employment and Wage Statistics (OEWS) data — May 2024 survey,
        published March 2025. Figures are adjusted using 2025 job posting data, hospital contract
        schedules, and regional market trends to reflect current conditions. Official 2026 BLS OEWS
        data has not yet been published. All figures should be treated as informed estimates, not
        official government statistics. Individual pay will vary based on employer, experience,
        shift differentials, and negotiated rate.
      </p>
    </div>
  );
}
