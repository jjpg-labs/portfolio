import { act, fireEvent, render, screen } from '@testing-library/react';
import { BackToTop } from './BackToTop';
import '@testing-library/jest-dom';
import { SVGProps, FC } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {}

interface MockedIcons {
  FaArrowUp: FC<IconProps>;
}

jest.mock(
  'react-icons/fa',
  (): MockedIcons => ({
    FaArrowUp: (props: IconProps) => <svg data-testid="arrow-up-icon" {...props} />,
  })
);

type RafCallback = (time: number) => void;

const flushAnimationFrame = () => {
  act(() => {
    jest.runOnlyPendingTimers();
  });
};

const setScroll = (y: number) => {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    writable: true,
    value: y,
  });
};

const setReducedMotion = (matches: boolean) => {
  (window.matchMedia as jest.Mock).mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

describe('BackToTop', () => {
  const scrollToMock = jest.fn();
  const originalScrollTo = window.scrollTo;
  let rafSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.useFakeTimers();
    scrollToMock.mockReset();
    window.scrollTo = scrollToMock as unknown as typeof window.scrollTo;
    setScroll(0);
    setReducedMotion(false);

    // Simulate requestAnimationFrame via setTimeout so we can flush it with jest fake timers.
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: RafCallback) => {
        return setTimeout(() => cb(performance.now()), 0) as unknown as number;
      });
  });

  afterEach(() => {
    window.scrollTo = originalScrollTo;
    rafSpy.mockRestore();
    jest.useRealTimers();
  });

  const getButton = () => screen.getByLabelText('Volver al inicio');

  it('renders a button with the expected aria-label', () => {
    render(<BackToTop />);
    expect(getButton()).toBeInTheDocument();
    expect(getButton().tagName).toBe('BUTTON');
  });

  it('is hidden initially (opacity-0 + non-interactive)', () => {
    render(<BackToTop />);
    const button = getButton();
    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('pointer-events-none');
    expect(button).toHaveAttribute('aria-hidden', 'true');
  });

  it('becomes visible after scrolling past 400px', () => {
    render(<BackToTop />);
    const button = getButton();
    expect(button).toHaveClass('opacity-0');

    setScroll(500);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    flushAnimationFrame();

    expect(button).toHaveClass('opacity-100');
    expect(button).not.toHaveClass('pointer-events-none');
    expect(button).toHaveAttribute('aria-hidden', 'false');
  });

  it('stays hidden when scrollY is below the threshold', () => {
    render(<BackToTop />);
    const button = getButton();

    setScroll(200);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    flushAnimationFrame();

    expect(button).toHaveClass('opacity-0');
  });

  it('calls window.scrollTo with smooth behavior on click', () => {
    render(<BackToTop />);

    fireEvent.click(getButton());

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('uses behavior: auto when prefers-reduced-motion is set', () => {
    setReducedMotion(true);
    render(<BackToTop />);

    fireEvent.click(getButton());

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });

  it('removes the scroll listener on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = render(<BackToTop />);

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeSpy.mockRestore();
  });
});
