/**
 * i18n Translations Dictionary
 * Centralized translation data layer
 */

export type Locale = 'zh' | 'en';

export interface TranslationDict {
  nav: {
    portfolio: string;
  };
  hero: {
    title: string;
    date: string;
    subtitle: string;
    titleDesc: string;
    dateDesc: string;
    subtitleDesc: string;
  };
  tokens: {
    title: string;
    lightMode: string;
    darkMode: string;
    colors: string;
    background: string;
    foreground: string;
    accent: string;
  };
  language: {
    en: string;
    zh: string;
  };
}

export const translations: Record<Locale, TranslationDict> = {
  zh: {
    nav: {
      portfolio: '作品集',
    },
    hero: {
      title: '你好，世界',
      date: '2026.01.22',
      subtitle: '开始吧',
      titleDesc: '响应式流式字体：32px (手机 390px) → 48px (桌面 1440px)',
      dateDesc: '响应式流式字体：24px (手机 390px) → 32px (桌面 1440px)',
      subtitleDesc: '响应式流式字体：14px (手机 390px) → 16px (桌面 1440px)',
    },
    tokens: {
      title: '设计标记',
      lightMode: '亮色模式',
      darkMode: '暗黑模式',
      colors: '颜色',
      background: '背景色',
      foreground: '前景色',
      accent: '强调色',
    },
    language: {
      en: 'EN',
      zh: '中',
    },
  },
  en: {
    nav: {
      portfolio: 'Portfolio',
    },
    hero: {
      title: 'HELLO WORLD',
      date: '2026.01.22',
      subtitle: "let's go",
      titleDesc: 'Responsive fluid typography: 32px (mobile 390px) → 48px (desktop 1440px)',
      dateDesc: 'Responsive fluid typography: 24px (mobile 390px) → 32px (desktop 1440px)',
      subtitleDesc: 'Responsive fluid typography: 14px (mobile 390px) → 16px (desktop 1440px)',
    },
    tokens: {
      title: 'Design Tokens',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      colors: 'Colors',
      background: 'Background',
      foreground: 'Foreground',
      accent: 'Accent',
    },
    language: {
      en: 'EN',
      zh: '中',
    },
  },
};
