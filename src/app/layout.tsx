import type { Metadata } from 'next';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { LocaleProvider } from './context/LocaleContext';
import './globals.css';
import { ChildrenProps } from './types';
import { ViewportProvider } from './context/ViewportContext';

const SITE_TITLE = 'Jose Juan — Full-Stack Engineer';
const SITE_DESCRIPTION =
  'Construyo SaaS y dashboards modernos con Next.js, NestJS y PostgreSQL. Disponible para MVPs, mantenimiento continuo, integración de IA con Claude y consultoría técnica. Madrid, trabajo en remoto.';

export const metadata: Metadata = {
  metadataBase: new URL('https://jjpg.dev'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'Full-Stack Engineer',
    'desarrollador freelance',
    'Next.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'SaaS',
    'MVP',
    'integración IA',
    'Claude API',
    'MCP',
    'Madrid',
    'España',
    'remote',
  ],
  authors: [{ name: 'Jose Juan Pérez González', url: 'https://jjpg.dev' }],
  icons: { icon: '/breaksIcon.png' },
  openGraph: {
    type: 'website',
    url: 'https://jjpg.dev',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Jose Juan — jjpg.dev',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jose Juan — Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jjpg.dev' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jose Juan Pérez González',
  alternateName: 'JJPG',
  url: 'https://jjpg.dev',
  jobTitle: 'Full-Stack Engineer',
  description:
    'Full-Stack Engineer disponible para MVPs, mantenimiento continuo, integración de IA y consultoría técnica.',
  email: 'mailto:hola@jjpg.dev',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  knowsAbout: [
    'Next.js',
    'NestJS',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
    'Claude API',
    'Model Context Protocol',
    'SaaS',
    'REST APIs',
  ],
  sameAs: [
    'https://github.com/jjpg95',
    'https://github.com/jjpg-labs',
    'https://www.linkedin.com/in/jose-juan-perez-gonzalez-440a0512b/',
    'https://www.malt.es/profile/josejuanperezgonzalez',
  ],
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LocaleProvider>
          <ViewportProvider>
            <div id="app-container" className="flex flex-col min-h-screen">
              <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm shadow-md transition-colors">
                <Navigation />
              </header>

              <main className="flex-grow">{children}</main>

              <footer>
                <Footer />
              </footer>
            </div>
          </ViewportProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
