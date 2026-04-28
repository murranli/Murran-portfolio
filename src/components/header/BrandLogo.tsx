'use client';

import { useTranslation } from '@/components/providers/LanguageProvider';
import { useEffect, useState } from 'react';

type BrandLogoProps = {
  state?: 'selected' | 'unselected';
  className?: string;
};

export function BrandLogo({ state = 'selected', className = '' }: BrandLogoProps) {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const isSelected = state === 'selected';

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <a
      href="/"
      className={`
        h-10 flex items-center gap-xs
        font-medium text-text-primary
        transition-colors duration-fast
        hover:text-text-secondary
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary
        ${className}
      `}
    >
      {/* Logo Icon */}
      <div className="w-6 h-6 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full"
        >
          <circle cx="12" cy="12" r="10" opacity="0.8" />
        </svg>
      </div>
      {/* Brand Text */}
      <span className="text-body">
        {isSelected ? 'Murran.Li' : t('nav.about')}
      </span>
    </a>
  );
}
