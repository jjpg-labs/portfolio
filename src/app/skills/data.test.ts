import {
  SKILLS,
  SKILL_CATEGORY_ORDER,
  SKILL_PREVIEW_GROUPS,
} from './data';

describe('skills data — single source of truth', () => {
  it('places every skill under a known category', () => {
    for (const skill of SKILLS) {
      expect(SKILL_CATEGORY_ORDER).toContain(skill.category);
    }
  });

  it('has no duplicate skill names', () => {
    const names = SKILLS.map((s) => s.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('derives the exact home preview labels from the canonical skills', () => {
    const byId = Object.fromEntries(
      SKILL_PREVIEW_GROUPS.map((g) => [g.id, g.skills])
    );

    expect(byId['back-end']).toEqual([
      'NestJS',
      'Node.js',
      'PHP / Symfony',
      'API Platform',
    ]);
    expect(byId['front-end']).toEqual([
      'React / Next.js',
      'TypeScript',
      'React Admin',
      'MUI',
      'Tailwind CSS',
      'React Native',
    ]);
    expect(byId['db-infra']).toEqual([
      'PostgreSQL',
      'Redis',
      'Docker',
      'Coolify',
      'Cloudflare',
      'GitHub Actions',
    ]);
    expect(byId['ai-llms']).toEqual([
      'Claude Code',
      'Claude API',
      'MCP',
      'Prompt engineering',
    ]);
  });
});
