import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsPage from './page';
import { LocaleProvider } from '@/app/context/LocaleContext';

jest.mock('./components/SkillCard', () => ({
  SkillCard: ({
    category,
    skills,
    intro,
  }: {
    category: string;
    skills: any[];
    intro?: string;
  }) => (
    <div data-testid="skill-category">
      <span>{category}</span>
      {intro && <p data-testid="skill-intro">{intro}</p>}
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  ),
}));

const renderWithLocale = (ui: React.ReactElement) =>
  render(<LocaleProvider>{ui}</LocaleProvider>);

describe('SkillsPage', () => {
  it('renders the main title', () => {
    renderWithLocale(<SkillsPage />);
    expect(
      screen.getByRole('heading', { name: /mi stack tecnológico/i })
    ).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    renderWithLocale(<SkillsPage />);
    expect(screen.getAllByTestId('skill-category')).toHaveLength(5);
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText('Bases de Datos')).toBeInTheDocument();
    expect(screen.getByText('Infraestructura')).toBeInTheDocument();
    expect(screen.getByText('IA / LLMs')).toBeInTheDocument();
  });

  // The prose below is what makes /skills worth indexing on its own instead of
  // reading as a longer copy of the home preview — guard it.
  it('renders the page subtitle', () => {
    renderWithLocale(<SkillsPage />);
    expect(
      screen.getByText(/no es una lista de todo lo que he tocado/i)
    ).toBeInTheDocument();
  });

  it('passes a context intro to every category', () => {
    renderWithLocale(<SkillsPage />);
    expect(screen.getAllByTestId('skill-intro')).toHaveLength(5);
  });

  it('renders the level-scale note', () => {
    renderWithLocale(<SkillsPage />);
    expect(
      screen.getByRole('heading', { name: /cómo leer estos niveles/i })
    ).toBeInTheDocument();
  });

  it('renders all skills under their categories', () => {
    renderWithLocale(<SkillsPage />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('NestJS')).toBeInTheDocument();
    expect(screen.getByText('React / Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Prisma')).toBeInTheDocument();
    expect(screen.getByText('Claude Code')).toBeInTheDocument();
    expect(screen.getByText('Claude API')).toBeInTheDocument();
  });
});
