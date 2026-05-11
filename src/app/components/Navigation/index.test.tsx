import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { Navigation } from './index';
import { LocaleProvider } from '@/app/context/LocaleContext';
import { ViewportProvider } from '@/app/context/ViewportContext';

jest.mock('next/link', () => {
  return ({
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
  );
});

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

interface IconProps extends React.SVGProps<SVGSVGElement> {}

jest.mock('react-icons/io5', () => ({
  IoMenu: (props: IconProps) => <svg data-testid="menu-icon" {...props} />,
  IoClose: (props: IconProps) => <svg data-testid="close-icon" {...props} />,
}));

jest.mock('../Logo', () => ({
  Logo: () => <svg data-testid="logo" />,
}));

jest.mock('../LanguageSwitcher', () => ({
  LanguageSwitcher: () => <button data-testid="language-switcher" />,
}));

jest.mock('../ThemeSwitch', () => ({
  ThemeSwitcher: () => <button data-testid="theme-switcher" />,
}));

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <LocaleProvider>
      <ViewportProvider>{ui}</ViewportProvider>
    </LocaleProvider>
  );

describe('Navigation', () => {
  it('renders logo and name', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByText('Jose Juan Pérez')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithProviders(<Navigation />);
    const links = ['Inicio', 'Proyectos', 'Servicios', 'Habilidades', 'Contacto'];
    links.forEach((linkText) => {
      expect(screen.getAllByText(linkText).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders the LanguageSwitcher', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getAllByTestId('language-switcher').length).toBeGreaterThan(0);
  });

  it('renders the ThemeSwitcher', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getAllByTestId('theme-switcher').length).toBeGreaterThan(0);
  });

  it('shows hamburger button', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByLabelText('Abrir menú')).toBeInTheDocument();
  });

  it('opens drawer when hamburger is clicked', () => {
    renderWithProviders(<Navigation />);
    fireEvent.click(screen.getByLabelText('Abrir menú'));
    const drawer = screen.getByRole('dialog');
    expect(drawer.className).toMatch(/translate-x-0/);
  });

  it('closes drawer when X button is clicked', () => {
    renderWithProviders(<Navigation />);
    fireEvent.click(screen.getByLabelText('Abrir menú'));
    fireEvent.click(screen.getByLabelText('Cerrar menú'));
    const drawer = screen.getByRole('dialog');
    expect(drawer.className).toMatch(/translate-x-full/);
  });

  it('closes drawer when a nav link is clicked', () => {
    renderWithProviders(<Navigation />);
    fireEvent.click(screen.getByLabelText('Abrir menú'));
    const drawer = screen.getByRole('dialog');
    fireEvent.click(within(drawer).getByText('Proyectos'));
    expect(drawer.className).toMatch(/translate-x-full/);
  });
});
