import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './page';
import { EMAIL_ADDRESS } from '../components/Footer';
import { LocaleProvider } from '@/app/context/LocaleContext';

jest.mock('./components/ContactForm', () => () => (
  <div data-testid="contact-form" />
));

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

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

describe('ContactPage', () => {
  it('renders the main heading', () => {
    renderWithLocale(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /ponte en contacto/i })
    ).toBeInTheDocument();
  });

  it('renders the contact form section', () => {
    renderWithLocale(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /envíame un mensaje/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('renders the contact info section', () => {
    renderWithLocale(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /información de contacto/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¿tienes un proyecto en mente/i)
    ).toBeInTheDocument();
    expect(screen.getByText(EMAIL_ADDRESS)).toBeInTheDocument();
    expect(screen.getByText(/almedina, ciudad real/i)).toBeInTheDocument();
  });

  it('renders social links with correct aria-labels', () => {
    renderWithLocale(<ContactPage />);
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
  });
});
