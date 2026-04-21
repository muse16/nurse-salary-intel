import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email } = await req.json();
  if (!name || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.error('Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN');
    return NextResponse.json({ ok: true, warn: 'env vars missing' });
  }

  try {
    const redis = new Redis({ url, token });
    await redis.lpush('subscribers', JSON.stringify({ name, email, date: new Date().toISOString() }));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Redis error:', err);
    // Still return ok so the user gets the PDF — we log the failure server-side
    return NextResponse.json({ ok: true, warn: String(err) });
  }
}
