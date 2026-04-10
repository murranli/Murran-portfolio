'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, translations, TranslationDict } from '@/constants/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  translations: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';
const DEFAULT_LOCALE: Locale = 'zh';

/**
 * Get nested translation value by dot notation key
 * e.g., "hero.title" -> translations[locale].hero.title
 */
function getTranslation(dict: TranslationDict, key: string): string {
  const keys = key.split('.');
  let value: any = dict;

  for (const k of keys) {
    value = value?.[k];
  }

  return typeof value === 'string' ? value : key;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  // Initialize from localStorage and sync with html lang attribute
  useEffect(() => {
    const storedLocale = localStorage.getItem(STORAGE_KEY) as Locale | null;
    const initialLocale = storedLocale || DEFAULT_LOCALE;

    setLocaleState(initialLocale);
    updateHtmlLang(initialLocale);
    setMounted(true);
  }, []);

  /**
   * Update html[lang] attribute when locale changes
   */
  const updateHtmlLang = (newLocale: Locale) => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
      document.documentElement.setAttribute('lang', newLocale);
    }
  };

  /**
   * Handle locale change: persist to localStorage and update DOM
   */
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    updateHtmlLang(newLocale);
  };

  /**
   * Translation function with dot notation support
   */
  const t = (key: string): string => {
    return getTranslation(translations[locale], key);
  };

  const value: LanguageContextType = {
    locale,
    setLocale,
    t,
    translations: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to use language context
 * Must be used within LanguageProvider
 */
export function useTranslation(): LanguageContextType {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useTranslation must be used within a LanguageProvider'
    );
  }

  return context;
}
