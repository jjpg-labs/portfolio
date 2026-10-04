import '@testing-library/jest-dom';

// Si usas el App Router y necesitas mockear next/navigation, puedes añadir aquí el setup.

// Mock window.matchMedia for components that use media queries (e.g. ViewportContext, next-themes).
// Guarded so this shared setup also works in `@jest-environment node` test files
// (e.g. API route handlers), where there is no `window`.
if (typeof window !== 'undefined') {
  // jsdom reports an en-US browser, and LocaleProvider switches English
  // browsers to the English site. Most tests query Spanish copy, so pin the
  // browser to Spanish; tests that need English redefine it themselves.
  Object.defineProperty(window.navigator, 'language', {
    configurable: true,
    value: 'es-ES',
  });

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
}
