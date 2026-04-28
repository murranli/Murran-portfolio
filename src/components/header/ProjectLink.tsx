'use client';

import { useTranslation } from '@/components/providers/LanguageProvider';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

type ProjectLinkProps = {
  state?: 'hover' | 'selected';
  className?: string;
};

export function ProjectLink({ state = 'selected', className = '' }: ProjectLinkProps) {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const showChevron = state === 'selected';

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <a
      href="#projects"
      className={`
        h-10 flex items-center gap-xs
        text-body font-normal text-text-primary
        transition-all duration-fast
        hover:text-text-secondary
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary
        group
        ${className}
      `}
    >
      <span>{t('nav.projects')}</span>
      {showChevron && (
        <ChevronDown 
          className="w-6 h-6 transition-transform duration-fast group-hover:rotate-180" 
          strokeWidth={2}
        />
      )}
    </a>
  );
}
