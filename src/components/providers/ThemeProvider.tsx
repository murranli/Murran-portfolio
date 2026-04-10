'use client';

import { ThemeProvider as NextThemesProvider, type Attribute } from 'next-themes';
import { ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: Attribute;
  defaultTheme?: string;
  enableSystem?: boolean;
  enableColorScheme?: boolean;
}

export function ThemeProvider({
  children,
  attribute = 'data-theme',
  defaultTheme = 'light',
  enableSystem = false,
  enableColorScheme = false,
}: ThemeProviderProps) {
  // 监听主题变化，同步到 Cookie
  useEffect(() => {
    const handleThemeChange = (theme: string | undefined) => {
      if (!theme) return;
      
      // 设置 Cookie：7 天过期，支持跨域
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      
      document.cookie = `portfolio-theme=${theme}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    };

    // 获取当前主题并同步到 Cookie
    const currentTheme = document.documentElement.getAttribute('data-theme') || defaultTheme;
    handleThemeChange(currentTheme);

    // 监听主题变化事件（next-themes 发出的事件）
    const handleStorageChange = () => {
      const newTheme = document.documentElement.getAttribute('data-theme') || defaultTheme;
      handleThemeChange(newTheme);
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [defaultTheme]);

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      enableColorScheme={enableColorScheme}
      themes={['light', 'dark']}
      storageKey="portfolio-theme"
      forcedTheme={undefined}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
