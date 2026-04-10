'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // 监听主题变化，同步到 Cookie
  useEffect(() => {
    if (!theme) return;

    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    
    document.cookie = `portfolio-theme=${theme}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-background-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary transition-colors duration-fast"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Sun 
          className="w-5 h-5 text-text-primary transition-transform duration-base"
          style={{ transform: 'rotate(180deg)' }}
        />
      ) : (
        <Moon 
          className="w-5 h-5 text-text-primary transition-transform duration-base"
        />
      )}
    </button>
  );
}
