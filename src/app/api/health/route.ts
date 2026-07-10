import { NextResponse } from 'next/server';

// Simple liveness check for external monitoring. No DB in this app, so there's
// nothing to ping — a 200 response means the app is up and serving requests.
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
