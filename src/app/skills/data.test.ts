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
      'PHP / Symfony',
      'API Platform',
      'Node.js',
      'Fastify',
      'HapiJS',
      'NestJS',
    ]);
    expect(byId['front-end']).toEqual([
      'React / Next.js',
      'TypeScript',
      'React Admin',
      'Tailwind CSS',
      'React Native',
    ]);
    expect(byId['db-infra']).toEqual([
      'PostgreSQL',
      'MySQL',
      'OpenSearch',
      'Docker',
    ]);
    expect(byId['messaging-apis']).toEqual(['GraphQL', 'REST', 'RabbitMQ']);
    expect(byId['ai-llms']).toEqual([
      'Claude Code',
      'Claude API',
      'MCP',
      'Prompt engineering',
    ]);
    expect(byId['notions']).toEqual([
      'Redis',
      'Kubernetes',
      'AWS',
      'Terraform',
      'New Relic',
      'Datadog',
      'Kibana / ELK',
    ]);
  });
});
