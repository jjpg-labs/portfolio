import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'José Juan — Full Stack Developer',
    short_name: 'jjpg.dev',
    description:
      'Full Stack Developer: PHP/Symfony, Node.js y React/Next.js. Disponible de inmediato, en remoto desde España.',
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
