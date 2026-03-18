import React from 'react';
import { render, screen } from '@testing-library/react';
import { LocaleProvider } from '@/app/context/LocaleContext';
import { ViewportProvider } from '@/app/context/ViewportContext';

jest.mock('./dashboard/page', () => () => <div data-testid="dashboard" />);

describe('HomePage', () => {
  it('renders the Dashboard component', () => {
    const { default: HomePage } = require('./page');
    render(
      <LocaleProvider>
        <ViewportProvider>
          <HomePage />
        </ViewportProvider>
      </LocaleProvider>
    );
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
