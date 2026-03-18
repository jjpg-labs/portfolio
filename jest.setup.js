import '@testing-library/jest-dom';

// Si usas el App Router y necesitas mockear next/navigation, puedes añadir aquí el setup.

// Mock window.matchMedia for components that use media queries (e.g. ViewportContext, next-themes)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
