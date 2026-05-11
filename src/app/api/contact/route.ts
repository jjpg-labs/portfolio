import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'pepeju95@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(req: Request) {
  const { name, email, message, subject } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
  }

  await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject ?? `Mensaje de ${name}`}`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  return NextResponse.json({ success: true, message: 'Mensaje enviado' });
}
