import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...rest} />
  ),
}));

interface IconProps extends React.SVGProps<SVGSVGElement> {}

jest.mock('react-icons/io5', () => ({
  IoMenu: (props: IconProps) => <svg data-testid="menu-icon" {...props} />,
  IoClose: (props: IconProps) => <svg data-testid="close-icon" {...props} />,
}));

jest.mock('../ThemeSwitch', () => ({
  ThemeSwitcher: () => <button data-testid="theme-switcher" />,
}));

jest.mock('../LanguageSwitcher', () => ({
  LanguageSwitcher: () => <button data-testid="language-switcher" />,
}));

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <LocaleProvider>
      <ViewportProvider>{ui}</ViewportProvider>
    </LocaleProvider>
  );

describe('Navigation', () => {
  it('renders logo/name', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByText('JJPG')).toBeInTheDocument();
  });

  it('renders navigation links in desktop menu', () => {
    renderWithProviders(<Navigation />);

    const links = ['Inicio', 'Proyectos', 'Habilidades', 'Contacto'];
    links.forEach((linkText) => {
      expect(screen.getAllByText(linkText).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders ThemeSwitcher in both mobile and desktop', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getAllByTestId('theme-switcher').length).toBeGreaterThan(0);
  });

  it('shows hamburger menu icon by default', () => {
    renderWithProviders(<Navigation />);
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    renderWithProviders(<Navigation />);
    const button = screen.getByLabelText('Toggle Navigation');

    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByTestId('close-icon')).toBeInTheDocument();

    const mobileMenu = screen
      .getAllByText('Inicio')
      .find((el) => el.className && el.className.includes('text-3xl'));
    expect(mobileMenu).toBeDefined();
    expect(mobileMenu && mobileMenu.parentElement).not.toBeNull();
    expect(
      mobileMenu &&
        mobileMenu.parentElement &&
        mobileMenu.parentElement.className
    ).toMatch(/translate-x-0/);
    expect(
      mobileMenu &&
        mobileMenu.parentElement &&
        mobileMenu.parentElement.className
    ).toMatch(/opacity-100/);
  });

  it('closes mobile menu when a link is clicked', () => {
    renderWithProviders(<Navigation />);
    const button = screen.getByLabelText('Toggle Navigation');
    fireEvent.click(button);
    const mobileLink = screen
      .getAllByText('Proyectos')
      .find((el) => el.className && el.className.includes('text-3xl'));
    if (mobileLink) {
      fireEvent.click(mobileLink);
    } else {
      throw new Error('Mobile link not found');
    }

    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });
});
