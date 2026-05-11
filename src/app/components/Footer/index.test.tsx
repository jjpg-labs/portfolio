import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  CALENDLY_URL,
  EMAIL_ADDRESS,
  Footer,
  GITHUB_URL,
  LINKEDIN_URL,
  MALT_URL,
} from '.';
import { LocaleProvider } from '@/app/context/LocaleContext';
import { SVGProps } from 'react';

interface MockIconProps extends SVGProps<SVGSVGElement> {}

jest.mock('react-icons/fa', () => ({
  FaGithub: (props: MockIconProps) => (
    <svg data-testid="github-icon" {...props} />
  ),
  FaLinkedin: (props: MockIconProps) => (
    <svg data-testid="linkedin-icon" {...props} />
  ),
  FaEnvelope: (props: MockIconProps) => (
    <svg data-testid="envelope-icon" {...props} />
  ),
  FaCalendarAlt: (props: MockIconProps) => (
    <svg data-testid="calendar-icon" {...props} />
  ),
}));

jest.mock('react-icons/si', () => ({
  SiMalt: (props: MockIconProps) => (
    <svg data-testid="malt-icon" {...props} />
  ),
}));

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

describe('Footer', () => {
  it('renders social icons', () => {
    const { getByTestId } = renderWithLocale(<Footer />);
    expect(getByTestId('github-icon')).toBeInTheDocument();
    expect(getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(getByTestId('envelope-icon')).toBeInTheDocument();
    expect(getByTestId('calendar-icon')).toBeInTheDocument();
    expect(getByTestId('malt-icon')).toBeInTheDocument();
  });

  it('renders correct links and mailto', () => {
    const { getByLabelText } = renderWithLocale(<Footer />);
    expect(getByLabelText('GitHub').getAttribute('href')).toBe(GITHUB_URL);
    expect(getByLabelText('LinkedIn').getAttribute('href')).toBe(LINKEDIN_URL);
    expect(getByLabelText('Malt').getAttribute('href')).toBe(MALT_URL);
    expect(getByLabelText('Calendly').getAttribute('href')).toBe(CALENDLY_URL);
    expect(getByLabelText('Correo Electrónico').getAttribute('href')).toBe(
      `mailto:${EMAIL_ADDRESS}`
    );
  });

  it('renders copyright with current year', () => {
    const { getByText } = renderWithLocale(<Footer />);
    const year = new Date().getFullYear();
    expect(
      getByText(new RegExp(`© ${year} Jose Juan Pérez González.`))
    ).toBeInTheDocument();
  });

  it('has correct aria-labels for accessibility', () => {
    const { getByLabelText } = renderWithLocale(<Footer />);
    expect(getByLabelText('GitHub')).toBeInTheDocument();
    expect(getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(getByLabelText('Malt')).toBeInTheDocument();
    expect(getByLabelText('Calendly')).toBeInTheDocument();
    expect(getByLabelText('Correo Electrónico')).toBeInTheDocument();
  });
});
