import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        line: {
          primary: 'var(--color-line-primary)',
          secondary: 'var(--color-line-secondary)',
        },
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      fontSize: {
        'title-1': 'var(--font-size-title-1)',
        'title-2': 'var(--font-size-title-2)',
        'heading-1': 'var(--font-size-heading-1)',
        'heading-2': 'var(--font-size-heading-2)',
        'body': 'var(--font-size-body)',
      },
      fontFamily: {
        sans: ['var(--font-family-base)', 'sans-serif'],
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
        'smooth': 'var(--transition-smooth)',
      },
    },
  },
  plugins: [],
};

export default config;
