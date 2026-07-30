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

// "Experto" (level 5) is reserved for the core stack (NestJS, React/Next,
// TypeScript, PostgreSQL); everything else is Avanzado/Intermedio so each level
// reads as earned. Low-signal libs were trimmed to keep the list focused.
export const SKILLS: Skill[] = [
  { name: 'NestJS', level: 5, category: 'Back-End' },
  { name: 'Node.js', level: 4, category: 'Back-End' },
  { name: 'PHP', level: 4, category: 'Back-End' },
  { name: 'Symfony', level: 4, category: 'Back-End' },
  { name: 'API Platform', level: 4, category: 'Back-End' },
  { name: 'React / Next.js', level: 5, category: 'Front-End' },
  { name: 'TypeScript', level: 5, category: 'Front-End' },
  { name: 'React Admin', level: 4, category: 'Front-End' },
  { name: 'Tailwind CSS', level: 4, category: 'Front-End' },
  { name: 'React Native / NativeWind', level: 3, category: 'Front-End' },
  { name: 'Zustand', level: 4, category: 'Front-End' },
  { name: 'TanStack Query', level: 3, category: 'Front-End' },
  { name: 'Zod', level: 4, category: 'Front-End' },
  { name: 'PostgreSQL', level: 5, category: 'Bases de Datos' },
  { name: 'Prisma', level: 4, category: 'Bases de Datos' },
  { name: 'Redis', level: 3, category: 'Bases de Datos' },
  { name: 'Docker', level: 4, category: 'Infraestructura' },
  { name: 'Coolify (self-host)', level: 4, category: 'Infraestructura' },
  { name: 'Cloudflare (DNS · R2)', level: 4, category: 'Infraestructura' },
  { name: 'GitHub Actions (CI/CD)', level: 4, category: 'Infraestructura' },
  { name: 'Linux / VPS', level: 3, category: 'Infraestructura' },
  { name: 'Playwright', level: 4, category: 'Infraestructura' },
  { name: 'JWT / Auth', level: 4, category: 'Infraestructura' },
  { name: 'Claude Code', level: 4, category: 'IA / LLMs' },
  { name: 'Claude API', level: 4, category: 'IA / LLMs' },
  { name: 'MCP (Model Context Protocol)', level: 3, category: 'IA / LLMs' },
  { name: 'Prompt engineering', level: 4, category: 'IA / LLMs' },
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
      canonical('NestJS'),
      canonical('Node.js'),
      merge('PHP', 'Symfony'),
      canonical('API Platform'),
    ],
  },
  {
    id: 'front-end',
    skills: [
      canonical('React / Next.js'),
      canonical('TypeScript'),
      canonical('React Admin'),
      'MUI', // preview-only: intentionally absent from the levelled full page
      canonical('Tailwind CSS'),
      short('React Native / NativeWind', 'React Native'),
    ],
  },
  {
    id: 'db-infra',
    skills: [
      canonical('PostgreSQL'),
      canonical('Redis'),
      canonical('Docker'),
      short('Coolify (self-host)', 'Coolify'),
      short('Cloudflare (DNS · R2)', 'Cloudflare'),
      short('GitHub Actions (CI/CD)', 'GitHub Actions'),
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
];
