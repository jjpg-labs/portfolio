'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { Project } from '../../ProjectsClient';
import { STATUS_LABEL_KEY } from '../../data';
import { useLocale } from '@/app/context/LocaleContext';
import ProjectShots from '../ProjectShots';

interface ProjectCardProps {
  project: Project;
  num?: number;
}

export default function ProjectCard({ project, num }: ProjectCardProps) {
  const { t } = useLocale();
  const p = t.projectsPage;
  const numLabel = num ? String(num).padStart(2, '0') : '';
  const statusLabel = p.status[STATUS_LABEL_KEY[project.status]];

  return (
    <article className="flex flex-col border border-border rounded-md overflow-hidden bg-bg-surface hover:border-border-strong transition-colors">
      <div className="relative aspect-[4/3] bg-ink overflow-hidden">
        <Image
          src={project.imageCover}
          alt={`Portada del proyecto ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {numLabel && (
          <span className="absolute bottom-3 right-3 font-mono text-mono-label uppercase text-paper/70 bg-ink/40 backdrop-blur-sm px-2 py-0.5 rounded-xs">
            {numLabel}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-serif text-[26px] leading-tight text-text-primary">
            {project.title}
          </h2>
          <span className="shrink-0 mt-1 font-mono text-mono-label uppercase text-accent border border-accent/40 rounded-xs px-2 py-0.5">
            {statusLabel}
          </span>
        </div>

        <span className="font-mono text-mono-label uppercase text-text-muted">
          {project.role}
        </span>

        {project.outcome && (
          <div className="border-l-2 border-accent pl-3">
            <span className="block font-mono text-mono-label uppercase text-accent mb-1">
              {p.outcomeLabel}
            </span>
            <p className="font-sans text-small text-text-primary leading-relaxed">
              {project.outcome}
            </p>
          </div>
        )}

        <p className="font-sans text-small text-text-secondary leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-mono text-mono-label uppercase text-text-muted px-2 py-0.5 border border-border-subtle rounded-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <ProjectShots
            screenshots={project.screenshots}
            title={project.title}
            label={p.shotsLabel}
          />
        )}

        <div className="flex flex-wrap gap-4 pt-3 mt-auto border-t border-border-subtle">
          {project.linkLive !== '#' && (
            <Link
              href={project.linkLive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-serif italic text-[16px] text-text-primary hover:text-accent transition"
            >
              {FaExternalLinkAlt({ size: 12 })} {p.liveBtn}
            </Link>
          )}
          {!project.repoPrivate && (
            <Link
              href={project.linkRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-small text-text-secondary hover:text-text-primary transition"
            >
              {FaCode({ size: 12 })} {p.codeBtn}
            </Link>
          )}
          {!project.repoPrivate && project.linkRepo2 && (
            <Link
              href={project.linkRepo2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-small text-text-secondary hover:text-text-primary transition"
            >
              {FaCode({ size: 12 })} {p.codeBtn} UI
            </Link>
          )}
          {project.repoPrivate && (
            <span className="flex items-center gap-1.5 font-mono text-mono-label uppercase text-text-muted">
              {FaLock({ size: 10 })} {p.privateRepo}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
