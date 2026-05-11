/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
          tint: 'var(--accent-tint)',
          ring: 'var(--accent-ring)',
        },
        ink: 'var(--ink)',
        paper: 'var(--paper)',
      },

      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Times New Roman', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        'mono-label': ['10.5px', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        'display-xl': ['96px', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        display: ['64px', { lineHeight: '1.00', letterSpacing: '-0.015em' }],
        h1: ['40px', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        h2: ['30px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        h3: ['22px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'body-lg': ['17px', { lineHeight: '1.55' }],
        body: ['15px', { lineHeight: '1.60' }],
        small: ['13px', { lineHeight: '1.50' }],
      },

      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },

      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(--shadow-3)',
      },

      letterSpacing: {
        'mono-wide': '0.18em',
        mono: '0.14em',
      },

      animation: {
        'pulse-live': 'pulse-live 1.8s ease-in-out infinite',
      },

      keyframes: {
        'pulse-live': {
          '0%, 100%': { boxShadow: '0 0 0 3px var(--accent-ring)' },
          '50%': { boxShadow: '0 0 0 6px rgba(255, 92, 46, 0.06)' },
        },
      },
    },
  },
  plugins: [],
};
