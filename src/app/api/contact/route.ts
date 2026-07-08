import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import {
  bestEffortRateLimit,
  checkOrigin,
  isHoneypotTripped,
  validateContactPayload,
} from './guard';

const TO_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'pepeju95@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

// Cap the raw body before parsing. The largest legit payload is ~2.5KB
// (message up to 2000 chars + the other fields); 10KB leaves generous room.
const MAX_BODY_BYTES = 10_000;

function allowedOrigins(): string[] {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://jjpg.dev';
  return [site, 'http://localhost:3000', 'http://127.0.0.1:3000'];
}

export async function POST(req: Request) {
  // Layer 1 — body size cap, checked before we parse anything.
  const contentLength = Number(req.headers.get('content-length') ?? '0');
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { success: false, error: 'Cuerpo demasiado grande' },
      { status: 413 },
    );
  }

  // Layer 2 — origin/referer allowlist.
  if (
    !checkOrigin(
      req.headers.get('origin'),
      req.headers.get('referer'),
      allowedOrigins(),
    )
  ) {
    return NextResponse.json(
      { success: false, error: 'Origen no permitido' },
      { status: 403 },
    );
  }

  // Layer 3 — best-effort per-IP rate limit (weak in serverless; see guard.ts).
  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';
  if (!bestEffortRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: 'Demasiadas solicitudes' },
      { status: 429 },
    );
  }

  // Parse the body (guard against malformed JSON).
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Cuerpo inválido' },
      { status: 400 },
    );
  }

  // Layer 4 — honeypot. If the hidden `company` field is filled, treat as a bot:
  // reply 200 as if it worked but send nothing, so we never reveal the trap.
  if (isHoneypotTripped(payload)) {
    return NextResponse.json({ success: true, message: 'Mensaje enviado' });
  }

  // Layer 5 — strict validation aligned with the client form.
  const result = validateContactPayload(payload);
  if (!result.ok) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 400 },
    );
  }
  const { name, email, subject, message } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Never crash at module load: only fail here, and only if the form is used
    // without the email service configured. Resend stays instantiated lazily.
    return NextResponse.json(
      { success: false, error: 'Servicio de email no configurado' },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });
  } catch (err) {
    console.error('[contact] Resend send failed:', err);
    return NextResponse.json(
      { success: false, error: 'No se pudo enviar el mensaje' },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, message: 'Mensaje enviado' });
}
