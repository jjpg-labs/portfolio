import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { dictionaries } from '@/app/i18n/dictionaries';

const TITLE = 'Contacto | Jose Juan';
const DESCRIPTION =
  'Contacta con Jose Juan, Full-Stack Engineer abierto a nuevas oportunidades en remoto desde ' +
  'Almedina (Ciudad Real). Formulario, correo directo o llamada de 30 minutos. Respuesta en menos de 24 h.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: 'https://jjpg.dev/contact' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://jjpg.dev/contact',
  },
};

// FAQPage structured data for the Q&A block rendered by ContactClient. Built
// from the `es` dictionary because that is what `<html lang="es">` serves on a
// cold request — the locale switch is client-side only, so `es` is what a
// crawler always sees.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: dictionaries.es.contactPage.faq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
