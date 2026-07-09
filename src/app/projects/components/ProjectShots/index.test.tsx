import { render, screen, fireEvent, within } from '@testing-library/react';
import ProjectShots from './index';
import type { ProjectScreenshot } from '../../data';
import { LocaleProvider } from '@/app/context/LocaleContext';

const screenshots: ProjectScreenshot[] = [
  { src: '/img/shots/a-1.webp', alt: 'Pantalla uno' },
  { src: '/img/shots/a-2.webp', alt: 'Pantalla dos' },
];

const renderShots = (shots: ProjectScreenshot[] = screenshots) =>
  render(
    <LocaleProvider>
      <ProjectShots screenshots={shots} title="Proyecto" label="Capturas" />
    </LocaleProvider>
  );

// Open the lightbox from the first thumbnail (index 0).
const openLightbox = () =>
  fireEvent.click(screen.getByRole('button', { name: screenshots[0].alt }));

afterEach(() => {
  // The component locks body scroll while open; make sure a leaked style from a
  // failed assertion never bleeds into the next test.
  document.body.style.overflow = '';
});

describe('ProjectShots', () => {
  it('renders the label and one thumbnail per screenshot, closed by default', () => {
    renderShots();
    expect(screen.getByText('Capturas')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(screenshots.length);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens the lightbox on the clicked screenshot', () => {
    renderShots();
    openLightbox();
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-label', 'Proyecto — Pantalla uno');
    expect(screen.getByText(/1\/2/)).toBeInTheDocument();
  });

  it('moves initial focus to the dialog when it opens (focus-trap entry)', () => {
    renderShots();
    openLightbox();
    expect(screen.getByRole('dialog')).toHaveFocus();
  });

  it('locks body scroll while open and restores it on close', () => {
    renderShots();
    openLightbox();
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.body.style.overflow).toBe('');
  });

  it('closes on the Escape key', () => {
    renderShots();
    openLightbox();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes via the close button', () => {
    renderShots();
    openLightbox();
    fireEvent.click(screen.getByRole('button', { name: 'Cerrar' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes when clicking the backdrop but not the dialog itself', () => {
    renderShots();
    openLightbox();
    const dialog = screen.getByRole('dialog');
    // Clicking the dialog stops propagation and keeps it open.
    fireEvent.click(dialog);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    // Clicking the backdrop (its parent) closes it.
    fireEvent.click(dialog.parentElement as HTMLElement);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('navigates with the arrow keys and wraps around', () => {
    renderShots();
    openLightbox();
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-label',
      'Proyecto — Pantalla uno'
    );

    fireEvent.keyDown(document, { key: 'ArrowRight' });
    expect(screen.getByText(/2\/2/)).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-label',
      'Proyecto — Pantalla dos'
    );

    // Forward past the last wraps to the first.
    fireEvent.keyDown(document, { key: 'ArrowRight' });
    expect(screen.getByText(/1\/2/)).toBeInTheDocument();

    // Backward from the first wraps to the last.
    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    expect(screen.getByText(/2\/2/)).toBeInTheDocument();
  });

  it('traps Tab focus within the dialog', () => {
    renderShots();
    openLightbox();
    const dialog = screen.getByRole('dialog');
    const first = within(dialog).getByRole('button', { name: 'Cerrar' });
    const last = within(dialog).getByRole('button', { name: 'Siguiente' });

    // Tab off the last focusable wraps to the first.
    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(first).toHaveFocus();

    // Shift+Tab off the first focusable wraps to the last.
    first.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(last).toHaveFocus();
  });

  it('hides the prev/next controls for a single screenshot', () => {
    renderShots([screenshots[0]]);
    openLightbox();
    expect(
      screen.queryByRole('button', { name: 'Siguiente' })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'Anterior' })
    ).not.toBeInTheDocument();
  });
});
