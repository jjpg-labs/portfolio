import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const TO_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'pepeju95@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const { name, email, message, subject } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'Faltan campos' },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, error: 'Email no válido' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Never crash at module load: only fail here, and only if the form is used
    // without the email service configured.
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
      subject: `[Portfolio] ${subject ?? `Mensaje de ${name}`}`,
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
