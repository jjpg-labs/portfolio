import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contacto | Jose Juan',
  description:
    'Contacta con Jose Juan — disponible para proyectos freelance y oportunidades laborales.',
  alternates: { canonical: 'https://jjpg.dev/contact' },
  openGraph: {
    title: 'Contacto | Jose Juan',
    description:
      'Contacta con Jose Juan — disponible para proyectos freelance y oportunidades laborales.',
    url: 'https://jjpg.dev/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
