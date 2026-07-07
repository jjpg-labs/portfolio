import { render, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '.';
import { useTheme } from 'next-themes';
import '@testing-library/jest-dom';
import { SVGProps, FC, ReactElement } from 'react';
import { LocaleProvider } from '@/app/context/LocaleContext';

const renderTS = (ui: ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

interface IconProps extends SVGProps<SVGSVGElement> {}

interface MockedIcons {
  IoSunnyOutline: FC<IconProps>;
  IoMoonOutline: FC<IconProps>;
}

jest.mock(
  'react-icons/io5',
  (): MockedIcons => ({
    IoSunnyOutline: (props: IconProps) => (
      <svg data-testid="sun-icon" {...props} />
    ),
    IoMoonOutline: (props: IconProps) => (
      <svg data-testid="moon-icon" {...props} />
    ),
  })
);

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeSwitcher', () => {
  const setTheme = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders moon icon when theme is light', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme });
    const { getByTestId } = renderTS(<ThemeSwitcher />);
    expect(getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('renders sun icon when theme is dark', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'dark', setTheme });
    const { getByTestId } = renderTS(<ThemeSwitcher />);
    expect(getByTestId('sun-icon')).toBeInTheDocument();
  });

  it('toggles to dark theme when current theme is light', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme });
    const { getByRole } = renderTS(<ThemeSwitcher />);
    fireEvent.click(getByRole('button'));
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('toggles to light theme when current theme is dark', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'dark', setTheme });
    const { getByRole } = renderTS(<ThemeSwitcher />);
    fireEvent.click(getByRole('button'));
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('uses light as default when theme is system', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'system', setTheme });
    const { getByTestId } = renderTS(<ThemeSwitcher />);
    expect(getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('button has correct title for switching to dark', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme });
    const { getByRole } = renderTS(<ThemeSwitcher />);
    expect(getByRole('button').title).toMatch(/Oscuro/);
  });

  it('button has correct title for switching to light', () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: 'dark', setTheme });
    const { getByRole } = renderTS(<ThemeSwitcher />);
    expect(getByRole('button').title).toMatch(/Claro/);
  });
});
