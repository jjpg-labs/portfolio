'use client';

import Link from 'next/link';
import { useLocale } from '@/app/context/LocaleContext';

const TECH_CHIPS = ['NestJS', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker'];

export default function Header() {
  const { t, locale } = useLocale();

  const paragraphs =
    locale === 'es'
      ? [
          <>
            Soy un{' '}
            <strong>Full-stack Software Engineer con 4 años de experiencia</strong>
            , cuya trayectoria se define por la <strong>versatilidad</strong> y
            una capacidad de <strong>adaptación acelerada</strong>. Mi mayor
            distintivo es haber desarrollado con éxito{' '}
            <strong>soluciones funcionales completas</strong> a través de stacks
            desconocidos, bajo deadlines exigentes y sin sacrificar la calidad.
          </>,
          <>
            Mi base sólida en <strong>PHP</strong> me ha permitido una{' '}
            <strong>evolución profesional profunda</strong> hacia arquitecturas
            modernas: <strong>NestJS y Prisma</strong> en el back-end y{' '}
            <strong>Next.js y Redux</strong> en el front-end, además de la
            implementación de <strong>OpenSearch</strong> para la gestión de
            documentos.
          </>,
          <>
            Mi habilidad para dominar y aplicar{' '}
            <strong>nuevas tecnologías rápidamente</strong> me permite generar
            entregables de{' '}
            <strong>alto impacto y valor para el negocio</strong>.
          </>,
        ]
      : [
          <>
            I am a{' '}
            <strong>Full-stack Software Engineer with 4 years of experience</strong>
            , whose career is defined by <strong>versatility</strong> and an
            ability for <strong>accelerated adaptation</strong>. My greatest
            strength is having successfully delivered{' '}
            <strong>complete, functional solutions</strong> across unfamiliar
            stacks, under demanding deadlines and without compromising quality.
          </>,
          <>
            My solid foundation in <strong>PHP</strong> has enabled a{' '}
            <strong>deep professional evolution</strong> towards modern
            architectures: <strong>NestJS and Prisma</strong> on the back-end
            and <strong>Next.js and Redux</strong> on the front-end, plus the
            integration of <strong>OpenSearch</strong> for document management.
          </>,
          <>
            My ability to master and apply{' '}
            <strong>new technologies quickly</strong> allows me to deliver{' '}
            <strong>high-impact, business-valuable</strong> output.
          </>,
        ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 shadow-xl transition-colors overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-transparent dark:from-blue-950/20 dark:to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 text-gray-900 dark:text-gray-50">
          {t.hero.greeting}{' '}
          <span className="text-blue-700 dark:text-blue-400">Jose Juan</span>{' '}
          — {t.hero.role}
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
          {t.hero.specializationPrefix}{' '}
          <span className="font-bold border-b-2 border-blue-500 dark:border-blue-400">
            {t.hero.specialization}
          </span>
        </h2>

        <div className="max-w-3xl mx-auto text-left space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-gray-600 dark:text-gray-400">
              {p}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {TECH_CHIPS.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
          <Link
            href="/projects"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            {t.hero.btnProjects}
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-800 py-3 px-8 rounded-lg text-lg font-medium hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition border border-gray-300 dark:border-gray-600 w-full sm:w-auto"
          >
            {t.hero.btnContact}
          </Link>
        </div>
      </div>
    </section>
  );
}
