import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, subject } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'pepeju95@gmail.com',
    subject: `[Portfolio] ${subject ?? `Mensaje de ${name}`}`,
    text: `De: ${name} <${email}>\n\n${message}`,
  });

  return NextResponse.json({ success: true, message: 'Mensaje enviado' });
}
