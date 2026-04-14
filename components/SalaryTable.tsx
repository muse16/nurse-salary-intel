interface SalaryRow {
  label: string;
  avgSalary: string;
  hourlyRate?: string;
  note?: string;
}

interface SalaryTableProps {
  title: string;
  headers: string[];
  rows: SalaryRow[];
  source?: string;
}

export default function SalaryTable({ title, headers, rows, source }: SalaryTableProps) {
  return (
    <div className="my-8">
      <h3 className="text-lg font-bold font-headline text-on-surface mb-3">{title}</h3>
      <div className="overflow-x-auto rounded-lg border border-outline-variant">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-container-high">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold text-on-surface whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-t border-outline-variant ${
                  i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'
                }`}
              >
                <td className="px-4 py-3 font-medium text-on-surface">{row.label}</td>
                <td className="px-4 py-3 text-on-surface tabular-nums">{row.avgSalary}</td>
                {row.hourlyRate !== undefined && (
                  <td className="px-4 py-3 text-on-surface-variant tabular-nums">{row.hourlyRate}</td>
                )}
                {row.note !== undefined && (
                  <td className="px-4 py-3 text-on-surface-variant text-xs">{row.note}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {source && (
        <p className="text-xs text-on-surface-variant mt-2">Source: {source}</p>
      )}
    </div>
  );
}
