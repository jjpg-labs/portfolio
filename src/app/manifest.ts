import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jose Juan — Full-Stack Engineer',
    short_name: 'jjpg.dev',
    description:
      'SaaS, dashboards e integración de IA con Next.js, NestJS y PostgreSQL. Disponible para nuevos proyectos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0E1014',
    theme_color: '#F4F1EA',
    icons: [
      { src: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
      { src: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  };
}
