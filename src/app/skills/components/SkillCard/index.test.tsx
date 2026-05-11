import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillCard } from './index';

describe('SkillCard', () => {
  const skills = [
    { name: 'React', level: 4, category: 'Front-End' },
    { name: 'TypeScript', level: 5, category: 'Front-End' },
    { name: 'CSS', level: 3, category: 'Front-End' },
  ];

  it('renders the category title', () => {
    render(<SkillCard category="Front-End" skills={skills} />);
    expect(screen.getByText('Front-End')).toBeInTheDocument();
  });

  it('renders all skill names', () => {
    render(<SkillCard category="Front-End" skills={skills} />);
    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });

  it('renders the section number when provided', () => {
    render(<SkillCard category="Front-End" skills={skills} num={2} />);
    expect(screen.getByText('02')).toBeInTheDocument();
  });

  it('renders default level labels per skill level', () => {
    render(<SkillCard category="Front-End" skills={skills} />);
    expect(screen.getByText('Avanzado')).toBeInTheDocument();
    expect(screen.getByText('Experto')).toBeInTheDocument();
    expect(screen.getByText('Intermedio')).toBeInTheDocument();
  });

  it('uses custom level labels when provided', () => {
    render(
      <SkillCard
        category="Front-End"
        skills={[{ name: 'React', level: 5, category: 'Front-End' }]}
        levels={{
          expert: 'Expert',
          advanced: 'Advanced',
          intermediate: 'Intermediate',
          basic: 'Basic',
        }}
      />
    );
    expect(screen.getByText('Expert')).toBeInTheDocument();
  });
});
