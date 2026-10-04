// Single source of truth for work-experience structure (company + stack).
// Translatable copy (role, dates, bullets) lives in
// `i18n/dictionaries.ts` → `experience.entries`, keyed by `id`.

export interface ExperienceEntry {
  id: string;
  company: string;
  technologies: string[];
}

// Reverse-chronological order — most recent role first. Six technologies at
// most per role, the ones its bullets talk about: a longer row of chips reads
// as a keyword list and nobody scans it.
export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'grupie',
    company: 'Grupie Labs',
    technologies: [
      'Symfony',
      'Next.js',
      'React',
      'Fastify',
      'PostgreSQL',
      'Playwright',
    ],
  },
  {
    id: 'theknot',
    company: 'The Knot Worldwide (ex Zankyou Weddings)',
    technologies: [
      'PHP',
      'React',
      'HapiJS',
      'GraphQL',
      'OpenSearch',
      'RabbitMQ',
    ],
  },
  {
    id: 'tigloo',
    company: 'Tigloo',
    technologies: ['PHP', 'Symfony', 'AngularJS', 'GitLab CI/CD'],
  },
];
