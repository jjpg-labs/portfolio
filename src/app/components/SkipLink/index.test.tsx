import { render, screen } from '@testing-library/react';
import { LocaleProvider } from '@/app/context/LocaleContext';
import { SkipLink } from '.';

describe('SkipLink', () => {
  it('points to the main landmark with a translated label', () => {
    render(
      <LocaleProvider>
        <SkipLink />
      </LocaleProvider>
    );
    expect(
      screen.getByRole('link', { name: 'Saltar al contenido' })
    ).toHaveAttribute('href', '#main');
  });
});
