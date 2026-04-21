import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return NextResponse.json({ error: 'Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN' }, { status: 500 });
  }

  try {
    const redis = new Redis({ url, token });
    const entries = await redis.lrange('subscribers', 0, -1);
    const subscribers = entries.map((e) => {
      if (typeof e === 'string') {
        try { return JSON.parse(e); } catch { return e; }
      }
      return e;
    });
    return NextResponse.json({ count: subscribers.length, subscribers });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
