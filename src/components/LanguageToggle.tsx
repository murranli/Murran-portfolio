'use client';

import { useTranslation } from '@/components/providers/LanguageProvider';

export function LanguageToggle() {
  const { locale, setLocale, t } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="flex items-center gap-sm">
      <button
        onClick={() => setLocale('zh')}
        className={`h-10 px-md py-xs text-sm font-medium transition-colors duration-fast ${
          locale === 'zh'
            ? 'font-medium text-text-primary'
            : 'font-regular text-text-secondary hover:text-text-primary'
        } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary`}
        aria-label="Switch to Chinese"
        title="切换到中文"
      >
        中文
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`h-10 px-md py-xs text-sm font-medium transition-colors duration-fast ${
          locale === 'en'
            ? 'font-medium text-text-primary'
            : 'font-regular text-text-secondary hover:text-text-primary'
        } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary`}
        aria-label="Switch to English"
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
