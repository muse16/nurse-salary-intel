import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: Request) {
  const { name, email } = await req.json();
  if (!name || !email) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  await redis.lpush('subscribers', JSON.stringify({ name, email, date: new Date().toISOString() }));
  return NextResponse.json({ ok: true });
}
