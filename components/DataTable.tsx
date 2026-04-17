'use client';

import { useState, useMemo } from 'react';
import { NursePosition } from '@/lib/types';

interface DataTableProps {
  data: NursePosition[];
  title?: string;
}

type SortField = 'salary' | 'hospital' | 'city' | 'position';
type SortDirection = 'asc' | 'desc';

function buildJobUrl(position: NursePosition) {
  const search = encodeURIComponent(`${position.city}, ${position.state}`);
  return `https://www.vivian.com/jobs/?search=${search}&utm_source=nursesalaryintel&utm_medium=referral`;
}

function SortIcon({ field, sortField, sortDirection }: { field: SortField; sortField: SortField; sortDirection: SortDirection }) {
  if (sortField !== field) return <span className="text-outline">&#8645;</span>;
  return <span className="text-primary">{sortDirection === 'asc' ? '\u2191' : '\u2193'}</span>;
}

export default function DataTable({ data, title }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<SortField>('salary');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredAndSorted = useMemo(() => {
    const filtered = data.filter(position => {
      const search = searchTerm.toLowerCase();
      return (
        position.hospital.toLowerCase().includes(search) ||
        position.city.toLowerCase().includes(search) ||
        position.state.toLowerCase().includes(search) ||
        position.position.toLowerCase().includes(search)
      );
    });

    filtered.sort((a, b) => {
      let aVal: string | number = a[sortField];
      let bVal: string | number = b[sortField];

      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = (bVal as string).toLowerCase();
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [data, searchTerm, sortField, sortDirection]);

  return (
    <div className="overflow-hidden rounded-2xl ghost-border bg-surface-container-lowest shadow-sm">
      {title && (
        <div className="px-6 pt-6">
          <h2 className="font-headline font-bold text-2xl text-on-surface mb-4">{title}</h2>
        </div>
      )}

      {/* Search */}
      <div className="px-6 py-4">
        <input
          type="text"
          placeholder="Search by hospital, city, state, or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container">
              <th
                className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('hospital')}
              >
                <div className="flex items-center gap-2">
                  Position & Facility <SortIcon field="hospital" sortField={sortField} sortDirection={sortDirection} />
                </div>
              </th>
              <th
                className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('city')}
              >
                <div className="flex items-center gap-2">
                  Location <SortIcon field="city" sortField={sortField} sortDirection={sortDirection} />
                </div>
              </th>
              <th
                className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider cursor-pointer hover:bg-surface-container-high transition-colors"
                onClick={() => handleSort('salary')}
              >
                <div className="flex items-center gap-2">
                  Est. Salary <SortIcon field="salary" sortField={sortField} sortDirection={sortDirection} />
                </div>
              </th>
              <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">
                Contract Status
              </th>
              <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">
                Contract
              </th>
              <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((position, idx) => (
              <tr
                key={idx}
                className={`hover:bg-surface-container-low transition-colors ${
                  idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low/50'
                }`}
              >
                <td className="px-6 py-5">
                  <div className="font-bold text-on-surface">{position.position}</div>
                  <div className="text-xs text-on-surface-variant mt-0.5">{position.hospital}</div>
                </td>
                <td className="px-6 py-5 text-on-surface-variant">
                  {position.city}, {position.state}
                </td>
                <td className="px-6 py-5 font-semibold text-on-surface">
                  ${position.salary.toLocaleString()}
                </td>
                <td className="px-6 py-5">
                  {position.red_flags === 'None' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Contract Clean
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container text-xs font-bold">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                      Red Flag
                    </span>
                  )}
                </td>
                <td className="px-6 py-5 text-on-surface-variant text-sm">
                  {position.contract_length} weeks
                </td>
                <td className="px-6 py-5">
                  <a
                    href={buildJobUrl(position)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 gradient-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
                  >
                    Apply
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAndSorted.length === 0 && (
        <div className="text-center py-16 text-on-surface-variant">
          No positions found matching your search.
        </div>
      )}

      <div className="px-6 py-4 text-sm text-on-surface-variant bg-surface-container-low/50">
        Showing {filteredAndSorted.length} of {data.length} positions
      </div>
    </div>
  );
}
