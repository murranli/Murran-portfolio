'use client';

import { useTranslation } from '@/components/providers/LanguageProvider';

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useTranslation();

  return (
    <div className={`flex items-center gap-sm ${className}`}>
      <button
        onClick={() => setLocale('zh')}
        className={`
          h-10 w-9 flex items-center justify-end
          text-body text-center tracking-wider
          transition-all duration-fast
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary
          ${
            locale === 'zh'
              ? 'font-semibold text-text-primary'
              : 'font-normal text-text-secondary hover:text-text-primary'
          }
        `}
      >
        中文
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`
          h-10 w-9 flex items-center justify-end
          text-body text-center tracking-wider
          transition-all duration-fast
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary
          ${
            locale === 'en'
              ? 'font-semibold text-text-primary'
              : 'font-normal text-text-secondary hover:text-text-primary'
          }
        `}
      >
        EN
      </button>
    </div>
  );
}
