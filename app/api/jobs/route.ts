import { NextRequest, NextResponse } from 'next/server';

export interface LiveJob {
  id: string;
  title: string;
  company: string;
  location: string;
  salary_min: number | null;
  salary_max: number | null;
  apply_url: string;
  posted: string;
}

export async function GET(request: NextRequest) {
  const appId = process.env.ADZUNA_APP_ID;
  const appKey = process.env.ADZUNA_APP_KEY;

  if (!appId || !appKey) {
    return NextResponse.json({ error: 'Adzuna API keys not configured' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const what = searchParams.get('what') || 'registered nurse';
  const where = searchParams.get('where') || '';
  const page = searchParams.get('page') || '1';

  // Only fetch jobs posted in the last 2 weeks
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
  const maxDaysOld = 14;

  const params = new URLSearchParams({
    app_id: appId,
    app_key: appKey,
    results_per_page: '20',
    what,
    ...(where && { where }),
    max_days_old: String(maxDaysOld),
    'content-type': 'application/json',
  });

  try {
    const res = await fetch(
      `https://api.adzuna.com/v1/api/jobs/us/search/${page}?${params}`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Adzuna API error' }, { status: res.status });
    }

    const data = await res.json();

    // Post-filter: only keep nursing-related jobs
    const NURSE_RE = /\b(nurse|nursing|rn|lpn|cna|crna|cnm|np|nicu|icu nurse|picu|pacu|l&d|labor|midwi|practitioner|anestheti)\b/i;

    // Normalize a raw salary value from Adzuna:
    // - Values < 200 are almost certainly hourly rates → annualize (× 2,080)
    // - Values outside a realistic nurse range ($30k–$400k) → null
    const normalizeSalary = (val: number | null | undefined): number | null => {
      if (!val) return null;
      const annual = val < 200 ? val * 2080 : val;
      if (annual < 30000 || annual > 400000) return null;
      return annual;
    };

    const jobs: LiveJob[] = (data.results || [])
      .filter((job: any) => NURSE_RE.test(job.title || ''))
      .map((job: any) => ({
        id: job.id,
        title: job.title,
        company: job.company?.display_name || 'Unknown',
        location: job.location?.display_name || '',
        salary_min: normalizeSalary(job.salary_min),
        salary_max: normalizeSalary(job.salary_max),
        apply_url: job.redirect_url,
        posted: job.created,
      }));

    return NextResponse.json({ jobs, total: data.count });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}
