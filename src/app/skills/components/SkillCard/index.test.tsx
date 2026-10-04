import { render, screen, within } from '@testing-library/react';
import { SkillCard } from '.';

const skills = [
  { name: 'HapiJS', level: 3, category: 'Back-End' },
  { name: 'PHP', level: 4, category: 'Back-End' },
  { name: 'TypeScript', level: 5, category: 'Back-End' },
  { name: 'Symfony', level: 4, category: 'Back-End' },
];

describe('SkillCard', () => {
  it('groups skills by level, strongest first, keeping data order inside each group', () => {
    render(<SkillCard category="Back-End" skills={skills} />);

    const terms = screen.getAllByRole('term').map((dt) => dt.textContent);
    expect(terms).toEqual(['Experto', 'Avanzado', 'Intermedio']);

    const advanced = screen.getAllByRole('definition')[1];
    expect(
      within(advanced)
        .getAllByRole('listitem')
        .map((li) => li.textContent?.replace('·', '').trim())
    ).toEqual(['PHP', 'Symfony']);
  });
});
