import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProjectsPage from './page';
import { LocaleProvider } from '@/app/context/LocaleContext';

jest.mock('./components/ProjectCard', () => (props: any) => (
  <div data-testid="project-card">{props.project.title}</div>
));

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

describe('ProjectsPage', () => {
  it('renders the section and heading', async () => {
    renderWithLocale(<ProjectsPage />);
    await waitFor(() =>
      expect(
        screen.getByRole('heading', { name: /Portafolio de Proyectos/i })
      ).toBeInTheDocument()
    );
    expect(
      screen.getByText(/Proyectos propios, de punta a punta/i)
    ).toBeInTheDocument();
  });

  it('renders all project cards', async () => {
    renderWithLocale(<ProjectsPage />);
    await waitFor(() => {
      const cards = screen.getAllByTestId('project-card');
      expect(cards).toHaveLength(5);
      // The home's featured projects first, in the same order, so the
      // numbering matches between / and /projects.
      expect(cards[0]).toHaveTextContent('Accounting Suite');
      expect(cards[1]).toHaveTextContent('Curio');
      expect(cards[2]).toHaveTextContent('Vereda');
      expect(cards[3]).toHaveTextContent('Nexfit');
      expect(cards[4]).toHaveTextContent('Medina Roja BTT');
    });
  });
});
