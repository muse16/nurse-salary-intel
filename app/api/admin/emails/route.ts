import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  const entries = await redis.lrange('subscribers', 0, -1);
  const subscribers = entries.map((e) => (typeof e === 'string' ? JSON.parse(e) : e));
  return NextResponse.json({ count: subscribers.length, subscribers });
}
