'use client';

import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from './providers/LanguageProvider';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line-primary bg-background-primary/95 backdrop-blur-sm transition-colors duration-smooth">
      <div className="h-[86px] max-w-[1512px] mx-auto px-2xl flex items-center justify-between">
        {/* Left Section: Logo + Brand */}
        <div className="flex items-center gap-2xl">
          {/* Logo Brand Name */}
          <a
            href="/"
            className="flex items-center gap-xs h-10 font-medium text-text-primary transition-colors duration-fast hover:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
          >
            <div className="flex items-center justify-center w-6 h-6">
              {/* Logo Icon Placeholder */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <circle cx="12" cy="12" r="10" opacity="0.8" />
              </svg>
            </div>
            <span className="text-heading-2">{t('nav.portfolio')}</span>
          </a>

          {/* Navigation Items */}
          <nav className="hidden sm:flex items-center gap-2xl">
            <a
              href="#projects"
              className="flex items-center gap-xs h-10 text-body text-text-primary font-regular transition-colors duration-fast hover:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary"
            >
              {t('nav.projects')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Right Section: Language + Theme */}
        <div className="flex items-center gap-md">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
