'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

type ThemeButtonProps = {
  state?: 'hover' | 'selected';
  className?: string;
};

export function ThemeButton({ state = 'selected', className = '' }: ThemeButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        w-10 h-10 flex items-center justify-center rounded-md
        transition-all duration-fast
        hover:bg-background-secondary
        active:scale-95
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary
        ${className}
      `}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-text-primary" />
      )}
    </button>
  );
}
