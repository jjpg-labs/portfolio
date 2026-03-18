import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsPage from './page';
import { LocaleProvider } from '@/app/context/LocaleContext';

jest.mock('./components/SkillCard', () => ({
  SkillCard: ({ category, skills }: { category: string; skills: any[] }) => (
    <div data-testid="skill-category">
      <span>{category}</span>
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
    expect(screen.getAllByTestId('skill-category')).toHaveLength(4);
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText('Bases de Datos')).toBeInTheDocument();
    expect(screen.getByText('Infraestructura')).toBeInTheDocument();
  });

  it('renders all skills under their categories', () => {
    renderWithLocale(<SkillsPage />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('React / Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });
});
