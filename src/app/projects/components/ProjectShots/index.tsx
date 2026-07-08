'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import type { ProjectScreenshot } from '../../data';
import { useLocale } from '@/app/context/LocaleContext';

interface ProjectShotsProps {
  screenshots: ProjectScreenshot[];
  title: string;
  label: string;
}

export default function ProjectShots({
  screenshots,
  title,
  label,
}: ProjectShotsProps) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + screenshots.length) % screenshots.length),
    [screenshots.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % screenshots.length),
    [screenshots.length],
  );

  // Lock scroll, trap focus and wire keyboard while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused?.focus?.();
    };
  }, [open, close, prev, next]);

  const current = screenshots[index];

  return (
    <div className="pt-1">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-mono-label uppercase text-text-muted">
          {label}
        </span>
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            ref={i === 0 ? triggerRef : undefined}
            type="button"
            onClick={() => show(i)}
            aria-label={shot.alt}
            className="relative w-16 h-12 rounded-xs overflow-hidden border border-border-subtle hover:border-accent transition-colors"
          >
            <Image
              src={shot.src}
              alt=""
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-ink/80 backdrop-blur-sm"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} — ${current.alt}`}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl outline-none"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-mono-label uppercase text-paper/80">
                {title} · {index + 1}/{screenshots.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label={t.a11y.shotClose}
                className="p-2 rounded-full text-paper hover:text-accent transition-colors"
              >
                {IoClose({ size: 22 })}
              </button>
            </div>

            <div className="relative w-full aspect-video bg-ink rounded-md overflow-hidden border border-border">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-contain"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>

            {screenshots.length > 1 && (
              <div className="flex items-center justify-center gap-6 mt-4">
                <button
                  type="button"
                  onClick={prev}
                  aria-label={t.a11y.shotPrev}
                  className="p-2 rounded-full text-paper hover:text-accent transition-colors"
                >
                  {IoChevronBack({ size: 22 })}
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={t.a11y.shotNext}
                  className="p-2 rounded-full text-paper hover:text-accent transition-colors"
                >
                  {IoChevronForward({ size: 22 })}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
