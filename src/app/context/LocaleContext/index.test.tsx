import { render, screen } from '@testing-library/react';
import { LocaleProvider, useLocale } from '.';

function Probe() {
  const { locale } = useLocale();
  return <span data-testid="locale">{locale}</span>;
}

const setBrowserLanguage = (language: string) => {
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    value: language,
  });
};

describe('LocaleProvider initial locale', () => {
  beforeEach(() => window.localStorage.clear());

  it('uses English when the browser is in English and nothing is saved', () => {
    setBrowserLanguage('en-GB');
    render(<LocaleProvider><Probe /></LocaleProvider>);
    expect(screen.getByTestId('locale')).toHaveTextContent('en');
  });

  it('stays in Spanish for any other browser language', () => {
    setBrowserLanguage('de-DE');
    render(<LocaleProvider><Probe /></LocaleProvider>);
    expect(screen.getByTestId('locale')).toHaveTextContent('es');
  });

  it('keeps the saved choice over the browser language', () => {
    setBrowserLanguage('en-US');
    window.localStorage.setItem('locale', 'es');
    render(<LocaleProvider><Probe /></LocaleProvider>);
    expect(screen.getByTestId('locale')).toHaveTextContent('es');
  });
});
