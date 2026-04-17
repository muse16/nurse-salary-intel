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

    const jobs: LiveJob[] = (data.results || []).map((job: any) => ({
      id: job.id,
      title: job.title,
      company: job.company?.display_name || 'Unknown',
      location: job.location?.display_name || '',
      salary_min: job.salary_min || null,
      salary_max: job.salary_max || null,
      apply_url: job.redirect_url,
      posted: job.created,
    }));

    return NextResponse.json({ jobs, total: data.count });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}
