import React from 'react';
import { render, screen } from '@testing-library/react';
import ServicesPage from './page';
import { LocaleProvider } from '@/app/context/LocaleContext';

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

// Default locale is 'es' — assert against the Spanish copy in dictionaries.ts.
const PACKAGE_TITLES = [
  'Desarrollo de MVP',
  'Mantenimiento continuo',
  'Integración de IA',
  'Consultoría técnica',
];

describe('ServicesPage', () => {
  it('renders the page heading and subtitle', () => {
    renderWithLocale(<ServicesPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Servicios' })
    ).toBeInTheDocument();
    expect(screen.getByText(/Cómo trabajamos juntos/i)).toBeInTheDocument();
  });

  it('renders all four service packages', () => {
    renderWithLocale(<ServicesPage />);
    PACKAGE_TITLES.forEach((title) => {
      expect(
        screen.getByRole('heading', { level: 2, name: title })
      ).toBeInTheDocument();
    });
    // Each ServiceCard renders its own "Qué incluye" list and CTA.
    expect(screen.getAllByText('Qué incluye')).toHaveLength(
      PACKAGE_TITLES.length
    );
  });

  it('renders the "Especialidad" badge on exactly one package', () => {
    renderWithLocale(<ServicesPage />);
    expect(screen.getAllByText('Especialidad')).toHaveLength(1);
  });

  it('renders a quote CTA per package plus the footer CTA', () => {
    renderWithLocale(<ServicesPage />);
    // One "Solicitar presupuesto" per card + one in the closing CTA block.
    expect(screen.getAllByText(/Solicitar presupuesto/i)).toHaveLength(
      PACKAGE_TITLES.length + 1
    );
  });
});
