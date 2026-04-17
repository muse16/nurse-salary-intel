'use client';

import { useState, useEffect, useCallback } from 'react';
import { LiveJob } from '@/app/api/jobs/route';

export default function LiveJobsTable() {
  const [jobs, setJobs] = useState<LiveJob[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({ what: 'registered nurse', where: '' });

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({ what: query.what, ...(query.where && { where: query.where }) });
      const res = await fetch(`/api/jobs?${params}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setJobs(data.jobs);
      setTotal(data.total);
    } catch (err: any) {
      setError(err.message || 'Failed to load jobs');
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => { fetchJobs(); }, [fetchJobs]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery({ what: search || 'registered nurse', where: '' });
  };

  const formatSalary = (min: number | null, max: number | null) => {
    if (!min && !max) return 'Not listed';
    if (min && max) return `$${Math.round(min / 1000)}k – $${Math.round(max / 1000)}k`;
    if (min) return `From $${Math.round(min / 1000)}k`;
    return `Up to $${Math.round(max! / 1000)}k`;
  };

  const timeAgo = (dateStr: string) => {
    const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days}d ago`;
  };

  return (
    <div className="overflow-hidden rounded-2xl ghost-border bg-surface-container-lowest shadow-sm">
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-headline font-bold text-2xl text-on-surface">Live Nurse Job Listings</h2>
          <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
            Updated hourly
          </span>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">Real openings with direct apply links</p>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder='e.g. "ICU nurse", "travel RN", "CRNA"'
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none text-sm"
          />
          <button
            type="submit"
            className="gradient-primary text-on-primary px-5 py-3 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all"
          >
            Search
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center py-16 gap-3 text-on-surface-variant">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Loading live listings…
          </div>
        ) : error ? (
          <div className="text-center py-16 text-on-surface-variant">
            <p className="text-red-500 font-medium mb-1">Could not load live jobs</p>
            <p className="text-sm">{error}</p>
            <button onClick={fetchJobs} className="mt-4 text-primary underline text-sm">Try again</button>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container">
                <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Position & Company</th>
                <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Location</th>
                <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Salary</th>
                <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Posted</th>
                <th className="px-6 py-5 font-bold text-on-surface-variant text-sm uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr
                  key={job.id}
                  className={`hover:bg-surface-container-low transition-colors ${
                    idx % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low/50'
                  }`}
                >
                  <td className="px-6 py-5">
                    <div className="font-bold text-on-surface">{job.title}</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">{job.company}</div>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant text-sm">{job.location}</td>
                  <td className="px-6 py-5 font-semibold text-on-surface text-sm">
                    {formatSalary(job.salary_min, job.salary_max)}
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant text-sm">{timeAgo(job.posted)}</td>
                  <td className="px-6 py-5">
                    <a
                      href={job.apply_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 gradient-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
                    >
                      Apply
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {!loading && !error && (
        <div className="px-6 py-4 text-sm text-on-surface-variant bg-surface-container-low/50">
          Showing {jobs.length} of {total.toLocaleString()} live listings
        </div>
      )}
    </div>
  );
}
