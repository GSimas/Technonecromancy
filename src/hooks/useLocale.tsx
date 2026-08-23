import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale, LocalizedText } from '../types/story';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (text: LocalizedText) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectInitialLocale(): Locale {
  // Portuguese is the primary audience for this piece; only an explicit
  // earlier choice by this same reader overrides that default.
  if (typeof window === 'undefined') return 'pt';
  try {
    const stored = window.localStorage.getItem('tecnonecromancia:locale');
    if (stored === 'pt' || stored === 'en') return stored;
  } catch {
    // ignore storage access issues
  }
  return 'pt';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale);

  // Set <html lang> on mount too, not only on later toggles. This matters
  // when the page is embedded inside a host skeleton (e.g. a published
  // Artifact) whose own <html> tag we don't control and can't hardcode.
  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem('tecnonecromancia:locale', next);
    } catch {
      // ignore storage access issues
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en';
    }
  };

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === 'pt' ? 'en' : 'pt'),
      t: (text: LocalizedText) => text[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
