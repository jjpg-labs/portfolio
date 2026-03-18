'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { Project } from '../../ProjectsClient';
import { useLocale } from '@/app/context/LocaleContext';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLocale();

  const accentClass =
    project.role === 'Back-End'
      ? 'border-blue-600 dark:border-blue-400'
      : 'border-green-600 dark:border-green-400';

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-xl
        hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300
        overflow-hidden border-t-4 ${accentClass}
      `}
    >
      <div className="relative h-40 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <Image
          src={project.imageCover}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {project.repoPrivate && (
          <span className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900 rounded-full">
            {t.projectsPage.inDevelopment}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50">
          {project.title}
        </h3>
        <p
          data-testid="role-decoration"
          className={`text-xs font-semibold uppercase mb-3 ${
            project.role === 'Back-End'
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-green-600 dark:text-green-400'
          }`}
        >
          {project.role}
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          {project.linkLive !== '#' && (
            <Link
              href={project.linkLive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition text-sm font-medium"
            >
              {FaExternalLinkAlt({ className: 'mr-1' })} {t.projectsPage.liveBtn}
            </Link>
          )}
          {!project.repoPrivate && (
            <Link
              href={project.linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition text-sm font-medium"
            >
              {FaCode({ className: 'mr-1' })} {t.projectsPage.codeBtn}
            </Link>
          )}
          {!project.repoPrivate && project.linkRepo2 && (
            <Link
              href={project.linkRepo2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition text-sm font-medium"
            >
              {FaCode({ className: 'mr-1' })} {t.projectsPage.codeBtn} UI
            </Link>
          )}
          {project.repoPrivate && (
            <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 italic">
              {FaLock({ size: 11, className: 'inline' })} {t.projectsPage.privateRepo}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
