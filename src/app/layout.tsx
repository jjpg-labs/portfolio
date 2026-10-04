import type { Metadata, Viewport } from 'next';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { BackToTop } from './components/BackToTop';
import { LocaleProvider } from './context/LocaleContext';
import { fontSans, fontMono, fontSerif } from './fonts';
import './globals.css';
import { ChildrenProps } from './types';
import { ViewportProvider } from './context/ViewportContext';

const SITE_TITLE = 'José Juan Pérez — Full Stack Developer · PHP, Node, React';
const SITE_DESCRIPTION =
  'Full Stack Developer con casi 5 años en PHP/Symfony, Node.js y React/Next.js. Facturación recurrente, cobros SEPA y testing de serie. Remoto desde España, abierto a híbrido.';

export const metadata: Metadata = {
  metadataBase: new URL('https://jjpg.dev'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'Full Stack Developer',
    'PHP',
    'Symfony',
    'Node.js',
    'React',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'GraphQL',
    'OpenSearch',
    'RabbitMQ',
    'Fastify',
    'Almedina',
    'Ciudad Real',
    'España',
    'remoto',
  ],
  authors: [{ name: 'José Juan Pérez González', url: 'https://jjpg.dev' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://jjpg.dev',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'José Juan Pérez — jjpg.dev',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    // og:image / twitter:image are emitted automatically from opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jjpg.dev' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F1EA' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1014' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'José Juan Pérez González',
  alternateName: 'JJPG',
  url: 'https://jjpg.dev',
  jobTitle: 'Full Stack Developer',
  // Reuses SITE_DESCRIPTION so the JSON-LD blurb can't drift from the meta
  // description/og/twitter copy above.
  description: SITE_DESCRIPTION,
  email: 'jose@jjpg.dev',
  knowsLanguage: ['es', 'en'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'CEAC',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Almedina',
    addressRegion: 'Ciudad Real',
    addressCountry: 'ES',
  },
  // Only what the CV's stack backs (~/Documentos/CV/content.mjs). NestJS is
  // used on personal projects only, so it goes last.
  knowsAbout: [
    'PHP',
    'Symfony',
    'API Platform',
    'Node.js',
    'Fastify',
    'HapiJS',
    'TypeScript',
    'React',
    'Next.js',
    'React Admin',
    'Tailwind CSS',
    'PostgreSQL',
    'MySQL',
    'OpenSearch',
    'GraphQL',
    'RabbitMQ',
    'REST APIs',
    'Docker',
    'Playwright',
    'Jest',
    'PHPUnit',
    'Prisma',
    'NestJS',
  ],
  sameAs: [
    'https://github.com/jjpg95',
    'https://github.com/jjpg-labs',
    'https://www.linkedin.com/in/jjpg95/',
  ],
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="es"
      className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LocaleProvider>
          <ViewportProvider>
            <div id="app-container" className="flex flex-col min-h-screen bg-bg-base text-text-primary">
              <header className="sticky top-0 z-50 bg-bg-surface border-b border-border-subtle">
                <Navigation />
              </header>

              <main className="grow">{children}</main>

              <footer>
                <Footer />
              </footer>
            </div>
            <BackToTop />
          </ViewportProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
