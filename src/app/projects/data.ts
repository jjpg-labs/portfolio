// Single source of truth for project metadata (structure only).
// Human copy (description / outcome) lives in the i18n dictionary, keyed by `id`.
// Home shows the subset listed in FEATURED_IDS (in that order); /projects shows all.

export type ProjectStatus = 'production' | 'beta' | 'live-demo' | 'in-dev';

// Maps a status to its i18n key under projectsPage.status.
export const STATUS_LABEL_KEY: Record<
  ProjectStatus,
  'beta' | 'inDev' | 'liveDemo' | 'production'
> = {
  production: 'production',
  beta: 'beta',
  'live-demo': 'liveDemo',
  'in-dev': 'inDev',
};

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface ProjectMeta {
  id: string;
  title: string;
  technologies: string[];
  role: 'Front-End' | 'Back-End' | 'Full-Stack';
  imageCover: string;
  linkLive: string; // '#' when there is no public demo
  linkRepo: string;
  linkRepo2?: string;
  repoPrivate?: boolean;
  status: ProjectStatus;
  screenshots?: ProjectScreenshot[];
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'nexfit',
    title: 'Nexfit',
    technologies: [
      'NestJS',
      'Next.js 16',
      'Expo / React Native',
      'PostgreSQL',
      'Prisma',
      'Cloudflare R2',
      'Redux Toolkit',
      'TypeScript',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p3.svg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/nexfit-web',
    repoPrivate: true,
    status: 'beta',
    screenshots: [
      {
        src: '/img/shots/nexfit-1.webp',
        alt: 'Panel del entrenador de Nexfit: clientes activos, sesiones del día y adherencia media',
      },
      {
        src: '/img/shots/nexfit-2.webp',
        alt: 'Ficha de cliente en Nexfit: métricas de sesiones, datos personales y plan asignado',
      },
      {
        src: '/img/shots/nexfit-3.webp',
        alt: 'Progreso del cliente en Nexfit: gráficas de recuperación, bienestar y adherencia',
      },
    ],
  },
  {
    id: 'vereda',
    title: 'Vereda',
    technologies: [
      'Next.js 16',
      'Neon PostgreSQL',
      'Vercel Blob',
      'JWT',
      'TypeScript',
      'Tailwind 4',
      'React 19',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p4.svg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/vereda',
    repoPrivate: true,
    status: 'in-dev',
    screenshots: [
      {
        src: '/img/shots/vereda-1.webp',
        alt: 'Web pública del evento generada con Vereda: portada, modalidades y CTA de inscripción',
      },
      {
        src: '/img/shots/vereda-2.webp',
        alt: 'Panel de administración no-code de Vereda: configuración del evento por secciones, multi-tenant',
      },
    ],
  },
  {
    id: 'medina',
    title: 'Medina Roja BTT',
    technologies: [
      'Next.js 16',
      'Leaflet',
      'GPX',
      'Tailwind 4',
      'TypeScript',
      'React 19',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p5.svg',
    linkLive: 'https://medina-roja-btt.vercel.app',
    linkRepo: 'https://github.com/jjpg-labs/medina-roja-btt',
    status: 'live-demo',
  },
  {
    id: 'accounting',
    title: 'Accounting Suite',
    technologies: [
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Next.js 15',
      'Redux Toolkit',
      'Chart.js',
      'Framer Motion',
      'Zod',
      'TypeScript',
      'JWT',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p1.svg',
    linkLive: 'https://accounting.jjpg.dev',
    linkRepo: 'https://github.com/jjpg-labs/accounting-server',
    linkRepo2: 'https://github.com/jjpg95/accounting-manager',
    status: 'live-demo',
  },
  {
    id: 'curio',
    title: 'Curio',
    technologies: [
      'Next.js 16',
      'Prisma',
      'Zustand',
      'TanStack Query',
      'Framer Motion',
      'next-intl',
      'TypeScript',
      'PostgreSQL',
    ],
    role: 'Full-Stack',
    imageCover: '/img/p2.svg',
    linkLive: '#',
    linkRepo: 'https://github.com/jjpg-labs/curio',
    repoPrivate: true,
    status: 'in-dev',
    screenshots: [
      {
        src: '/img/shots/curio-1.webp',
        alt: 'Panel del explorador en Curio: nivel, XP, racha diaria, reto del día y materias',
      },
      {
        src: '/img/shots/curio-2.webp',
        alt: 'Página de inicio de Curio: aprende a programar jugando, adaptado por edad',
      },
    ],
  },
];

// Which projects appear on the home page, and in what order.
export const FEATURED_IDS = ['nexfit', 'accounting', 'vereda', 'curio'] as const;

export const FEATURED_PROJECTS: ProjectMeta[] = FEATURED_IDS.map(
  (id) => PROJECTS.find((p) => p.id === id) as ProjectMeta,
);
