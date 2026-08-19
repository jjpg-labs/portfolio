// Single source of truth for work-experience structure (company + stack).
// Translatable copy (role, dates, bullets) lives in
// `i18n/dictionaries.ts` → `experience.entries`, keyed by `id`.

export interface ExperienceEntry {
  id: string;
  company: string;
  technologies: string[];
}

// Reverse-chronological order — most recent role first.
export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'grupie',
    company: 'Grupie Labs',
    technologies: ['Symfony', 'Next.js', 'React', 'Fastify', 'PostgreSQL'],
  },
  {
    id: 'theknot',
    company: 'The Knot Worldwide (ex Zankyou Weddings)',
    technologies: [
      'HapiJS',
      'GraphQL',
      'OpenSearch',
      'RabbitMQ',
      'PayloadCMS',
      'React',
      'Next.js',
      'PHP',
      'Jest',
      'PHPUnit',
    ],
  },
  {
    id: 'tigloo',
    company: 'Tigloo',
    technologies: ['PHP', 'Symfony', 'AngularJS', 'GitLab CI/CD'],
  },
];
