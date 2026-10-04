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
      screen.getByText(/¿buscas un full stack developer/i)
    ).toBeInTheDocument();
    expect(screen.getByText(EMAIL_ADDRESS)).toBeInTheDocument();
    expect(screen.getByText(/almedina, ciudad real/i)).toBeInTheDocument();
  });

  it('renders the page subtitle', () => {
    renderWithLocale(<ContactPage />);
    expect(
      screen.getByText(/abierto a nuevas oportunidades como full stack developer/i)
    ).toBeInTheDocument();
  });

  it('renders every FAQ entry', () => {
    renderWithLocale(<ContactPage />);
    expect(
      screen.getByRole('heading', { name: /antes de que escribas/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¿qué tipo de puesto estás buscando\?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¿trabajas en remoto o presencial\?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¿cuánto tardas en responder\?/i)
    ).toBeInTheDocument();
  });

  it('orders the page FAQ → form → call, with the form as the main action', () => {
    renderWithLocale(<ContactPage />);
    const faq = screen.getByRole('heading', { name: /antes de que escribas/i });
    const form = screen.getByRole('heading', { name: /envíame un mensaje/i });
    const call = screen.getByRole('heading', {
      name: /prefieres hablar directamente/i,
    });
    const follows = (a: Node, b: Node) =>
      Boolean(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
    expect(follows(faq, form)).toBe(true);
    expect(follows(form, call)).toBe(true);
  });

  it('renders social links with correct aria-labels', () => {
    renderWithLocale(<ContactPage />);
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
  });
});
