import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Servicios | Jose Juan',
  description:
    'Servicios de desarrollo full-stack: MVPs, mantenimiento continuo, integración de IA con Claude y consultoría técnica.',
  alternates: { canonical: 'https://jjpg.dev/services' },
  openGraph: {
    title: 'Servicios | Jose Juan',
    description:
      'Servicios de desarrollo full-stack: MVPs, mantenimiento continuo, integración de IA con Claude y consultoría técnica.',
    url: 'https://jjpg.dev/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
