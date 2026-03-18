import type { Metadata } from 'next';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { LocaleProvider } from './context/LocaleContext';
import './globals.css';
import { ChildrenProps } from './types';
import { ViewportProvider } from './context/ViewportContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://jjpg.dev'),
  title: 'Jose Juan | Desarrollador Full-Stack',
  description:
    'Portafolio de Jose Juan — Experto en Back-End y desarrollo Full-Stack con Next.js, NestJS y TypeScript.',
  keywords: [
    'desarrollador full-stack',
    'backend',
    'Next.js',
    'NestJS',
    'TypeScript',
    'portfolio',
    'Jose Juan',
  ],
  authors: [{ name: 'Jose Juan', url: 'https://jjpg.dev' }],
  icons: { icon: '/breaksIcon.png' },
  openGraph: {
    type: 'website',
    url: 'https://jjpg.dev',
    title: 'Jose Juan | Desarrollador Full-Stack',
    description:
      'Portafolio de Jose Juan — Experto en Back-End y desarrollo Full-Stack.',
    siteName: 'Jose Juan Portfolio',
    locale: 'es_ES',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jose Juan — Desarrollador Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Juan | Desarrollador Full-Stack',
    description:
      'Portafolio de Jose Juan — Experto en Back-End y desarrollo Full-Stack.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://jjpg.dev' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jose Juan',
  url: 'https://jjpg.dev',
  jobTitle: 'Full-Stack Developer',
  sameAs: ['https://github.com/jjpg95', 'https://github.com/jjpg-labs'],
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
