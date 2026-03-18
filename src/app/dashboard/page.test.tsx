import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './page';
import { LocaleProvider } from '@/app/context/LocaleContext';
import { ViewportProvider } from '@/app/context/ViewportContext';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
    [key: string]: any;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...rest} />
  ),
}));

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <LocaleProvider>
      <ViewportProvider>{ui}</ViewportProvider>
    </LocaleProvider>
  );

describe('Dashboard', () => {
  it('renders the hero section with name and title', () => {
    renderWithProviders(<Dashboard />);
    expect(
      screen.getByRole('heading', { name: /hola, soy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /especializado en/i })
    ).toBeInTheDocument();
  });

  it('renders the introduction paragraph', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText(/4 años de experiencia/i)).toBeInTheDocument();
  });

  it('renders the "Ver mis Proyectos" and "Contáctame" links', () => {
    renderWithProviders(<Dashboard />);
    expect(
      screen.getByRole('link', { name: /ver mis proyectos/i })
    ).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /contáctame/i })).toHaveAttribute(
      'href',
      '/contact'
    );
  });

  it('renders the "Tecnologías Clave y Stack Principal" section', () => {
    renderWithProviders(<Dashboard />);
    expect(
      screen.getByRole('heading', {
        name: /tecnologías clave y stack principal/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText(/bases de datos/i)).toBeInTheDocument();
  });

  it('renders the "Mis Proyectos Más Recientes" section', () => {
    renderWithProviders(<Dashboard />);
    expect(
      screen.getByRole('heading', { name: /mis proyectos más recientes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/échale un vistazo a las soluciones/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Accounting Suite')).toBeInTheDocument();
  });

  it('renders the "Ver Todos los Proyectos" link', () => {
    renderWithProviders(<Dashboard />);
    expect(
      screen.getByRole('link', { name: /ver todos los proyectos/i })
    ).toHaveAttribute('href', '/projects');
  });
});
