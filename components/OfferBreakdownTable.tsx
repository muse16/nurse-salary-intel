interface OfferRow {
  element: string;
  range: string;
  notes?: string;
}

interface OfferBreakdownTableProps {
  employer: string;
  city: string;
  asOf: string;
  rows: OfferRow[];
}

export default function OfferBreakdownTable({
  employer,
  city,
  asOf,
  rows,
}: OfferBreakdownTableProps) {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h3 className="text-lg font-bold font-headline text-on-surface">
          {employer} — Full Compensation Breakdown
        </h3>
        <span className="text-xs text-on-surface-variant bg-surface-container-low border border-outline-variant rounded-full px-3 py-1">
          {city} · {asOf}
        </span>
      </div>

      <div className="overflow-x-auto rounded-lg border border-outline-variant">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container-high">
              <th className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap w-1/3">
                Pay element
              </th>
              <th className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap w-1/3">
                Range
              </th>
              <th className="px-4 py-3 text-left font-semibold text-on-surface w-1/3">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isHighlight =
                row.element.toLowerCase().includes('differential') ||
                row.element.toLowerCase().includes('sign-on') ||
                row.element.toLowerCase().includes('bonus');
              return (
                <tr
                  key={i}
                  className={`border-t border-outline-variant ${
                    isHighlight
                      ? 'bg-tertiary-container/30'
                      : i % 2 === 0
                      ? 'bg-surface-container-lowest'
                      : 'bg-surface-container-low'
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-on-surface">
                    {row.element}
                  </td>
                  <td className="px-4 py-3 text-on-surface tabular-nums font-medium">
                    {row.range}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant text-xs leading-relaxed">
                    {row.notes ?? '—'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-on-surface-variant mt-2">
        Data compiled from publicly available job postings and reported compensation trends. Individual offers will vary by unit, experience, and negotiation.
      </p>
    </div>
  );
}
