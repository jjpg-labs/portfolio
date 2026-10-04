// Single source of truth for every skill fact shown on the site.
//
// Both the home preview (`dashboard/components/Skills`) and the full `/skills`
// page (`skills/SkillsClient`) derive from this module, so the two views can
// never drift again (issue #15). Skill names are locale-invariant proper nouns
// and live here; translatable copy (category labels, level names, preview group
// titles) stays in `i18n/dictionaries.ts`.

export type SkillCategory =
  | 'Back-End'
  | 'Front-End'
  | 'Bases de Datos'
  | 'Infraestructura'
  | 'IA / LLMs';

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

// "Experto" (level 5) is reserved for TypeScript and PostgreSQL. Levels were
// recalibrated on 2026-10-04 against the CV review (revision-hitos-2026-10):
// React/Next.js is Avanzado (at TKWW it was a new route in another team's app,
// K9); HapiJS, GraphQL, OpenSearch and RabbitMQ are Intermedio (part of a
// backend integration over queues that were already in place, K11/K12); NestJS
// is Avanzado but only on personal projects, so it is listed last.
//
// Level 2 ("Básico") is deliberate for the observability, cloud and Redis rows:
// those are read-only, borrowed or AI-assisted exposure, not tools I have set up
// and own. Redis joined them in the 2026-08 CV/site truthfulness audit — it was
// used at work, but not enough to defend as a skill, so it sits in the home's
// "Conocimientos básicos" group.
export const SKILLS: Skill[] = [
  { name: 'PHP', level: 4, category: 'Back-End' },
  { name: 'Symfony', level: 4, category: 'Back-End' },
  { name: 'API Platform', level: 4, category: 'Back-End' },
  { name: 'Node.js', level: 4, category: 'Back-End' },
  { name: 'Fastify', level: 4, category: 'Back-End' },
  { name: 'REST', level: 4, category: 'Back-End' },
  { name: 'NestJS', level: 4, category: 'Back-End' },
  { name: 'HapiJS', level: 3, category: 'Back-End' },
  { name: 'GraphQL', level: 3, category: 'Back-End' },
  { name: 'TypeScript', level: 5, category: 'Front-End' },
  { name: 'React / Next.js', level: 4, category: 'Front-End' },
  { name: 'React Admin', level: 4, category: 'Front-End' },
  { name: 'Tailwind CSS', level: 4, category: 'Front-End' },
  { name: 'Zustand', level: 4, category: 'Front-End' },
  { name: 'Zod', level: 4, category: 'Front-End' },
  { name: 'React Native / NativeWind', level: 3, category: 'Front-End' },
  { name: 'PostgreSQL', level: 5, category: 'Bases de Datos' },
  { name: 'MySQL', level: 4, category: 'Bases de Datos' },
  { name: 'Prisma', level: 4, category: 'Bases de Datos' },
  { name: 'OpenSearch', level: 3, category: 'Bases de Datos' },
  { name: 'Redis', level: 2, category: 'Bases de Datos' },
  { name: 'Docker', level: 4, category: 'Infraestructura' },
  { name: 'Playwright', level: 4, category: 'Infraestructura' },
  { name: 'JWT / Auth', level: 4, category: 'Infraestructura' },
  { name: 'RabbitMQ', level: 3, category: 'Infraestructura' },
  { name: 'New Relic', level: 2, category: 'Infraestructura' },
  { name: 'Datadog', level: 2, category: 'Infraestructura' },
  { name: 'Kibana / ELK', level: 2, category: 'Infraestructura' },
  { name: 'Kubernetes', level: 2, category: 'Infraestructura' },
  { name: 'AWS (S3, RDS)', level: 2, category: 'Infraestructura' },
  { name: 'Terraform', level: 2, category: 'Infraestructura' },
  { name: 'Claude Code', level: 4, category: 'IA / LLMs' },
  { name: 'Claude API', level: 4, category: 'IA / LLMs' },
  { name: 'Prompt engineering', level: 4, category: 'IA / LLMs' },
  { name: 'MCP (Model Context Protocol)', level: 3, category: 'IA / LLMs' },
];

// Order the full `/skills` page renders its categories in.
export const SKILL_CATEGORY_ORDER: SkillCategory[] = [
  'Back-End',
  'Front-End',
  'Bases de Datos',
  'Infraestructura',
  'IA / LLMs',
];

// --- Home preview projection ------------------------------------------------
// The home renders a condensed, curated preview: fewer skills, a couple of
// combined labels, and DB + Infra shown as one group. It is DERIVED from the
// canonical `SKILLS` above (validated at module load) so it cannot silently
// drift from the full page. Group titles are translated in
// `dictionaries.dashboardSkills.groupTitles`, keyed by `id`.

// Return a canonical skill's name, throwing if it no longer exists — this is
// what turns a rename in `SKILLS` into a loud failure instead of silent drift.
const canonical = (name: string): string => {
  const skill = SKILLS.find((s) => s.name === name);
  if (!skill) {
    throw new Error(`[skills/data] preview references unknown skill: "${name}"`);
  }
  return skill.name;
};

// Display a canonical skill under a shorter label in the condensed preview
// (e.g. "AWS (EKS, RDS, S3)" -> "AWS"). Validates the canonical skill exists.
const short = (name: string, as: string): string => {
  canonical(name);
  return as;
};

// Merge two canonical skills into one preview label (e.g. "PHP / Symfony").
const merge = (a: string, b: string): string =>
  `${canonical(a)} / ${canonical(b)}`;

export interface SkillPreviewGroup {
  id: string;
  skills: string[];
}

export const SKILL_PREVIEW_GROUPS: SkillPreviewGroup[] = [
  {
    id: 'back-end',
    skills: [
      merge('PHP', 'Symfony'),
      canonical('API Platform'),
      canonical('Node.js'),
      canonical('Fastify'),
      canonical('HapiJS'),
      canonical('NestJS'),
    ],
  },
  {
    id: 'front-end',
    skills: [
      canonical('React / Next.js'),
      canonical('TypeScript'),
      canonical('React Admin'),
      canonical('Tailwind CSS'),
      short('React Native / NativeWind', 'React Native'),
    ],
  },
  {
    id: 'db-infra',
    skills: [
      canonical('PostgreSQL'),
      canonical('MySQL'),
      canonical('OpenSearch'),
      canonical('Docker'),
    ],
  },
  {
    id: 'messaging-apis',
    skills: [
      canonical('GraphQL'),
      canonical('REST'),
      canonical('RabbitMQ'),
    ],
  },
  {
    id: 'ai-llms',
    skills: [
      canonical('Claude Code'),
      canonical('Claude API'),
      short('MCP (Model Context Protocol)', 'MCP'),
      canonical('Prompt engineering'),
    ],
  },
  {
    id: 'notions',
    skills: [
      canonical('Redis'),
      canonical('Kubernetes'),
      short('AWS (S3, RDS)', 'AWS'),
      canonical('Terraform'),
      canonical('New Relic'),
      canonical('Datadog'),
      canonical('Kibana / ELK'),
    ],
  },
];
