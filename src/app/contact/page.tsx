import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contacto | Jose Juan',
  description:
    'Contacta con Jose Juan — Full Stack Developer, abierto a nuevas oportunidades en remoto.',
  alternates: { canonical: 'https://jjpg.dev/contact' },
  openGraph: {
    title: 'Contacto | Jose Juan',
    description:
      'Contacta con Jose Juan — Full Stack Developer, abierto a nuevas oportunidades en remoto.',
    url: 'https://jjpg.dev/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
