import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';
export type Contrast = 'normal' | 'high';

interface AccessibilityContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  contrast: Contrast;
  setContrast: (contrast: Contrast) => void;
  toggleContrast: () => void;
  fontScale: number;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);

const STORAGE_KEYS = {
  theme: 'tecnonecromancia:theme',
  contrast: 'tecnonecromancia:contrast',
  fontScale: 'tecnonecromancia:fontScale',
} as const;

const FONT_SCALES = [90, 100, 110, 120, 130];
const DEFAULT_FONT_SCALE = 100;

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.theme);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {
    // Ignore storage issues
  }
  return 'dark';
}

function getInitialContrast(): Contrast {
  if (typeof window === 'undefined') return 'normal';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.contrast);
    if (stored === 'normal' || stored === 'high') return stored;
  } catch {
    // Ignore storage issues
  }
  return 'normal';
}

function getInitialFontScale(): number {
  if (typeof window === 'undefined') return DEFAULT_FONT_SCALE;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEYS.fontScale);
    if (stored) {
      const num = parseInt(stored, 10);
      if (FONT_SCALES.includes(num)) return num;
    }
  } catch {
    // Ignore storage issues
  }
  return DEFAULT_FONT_SCALE;
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [contrast, setContrastState] = useState<Contrast>(getInitialContrast);
  const [fontScale, setFontScaleState] = useState<number>(getInitialFontScale);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-contrast', contrast);
    root.style.fontSize = `${fontScale}%`;
  }, [theme, contrast, fontScale]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEYS.theme, next);
    } catch {
      // Ignore
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(STORAGE_KEYS.theme, next);
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const setContrast = useCallback((next: Contrast) => {
    setContrastState(next);
    try {
      window.localStorage.setItem(STORAGE_KEYS.contrast, next);
    } catch {
      // Ignore
    }
  }, []);

  const toggleContrast = useCallback(() => {
    setContrastState((prev) => {
      const next = prev === 'normal' ? 'high' : 'normal';
      try {
        window.localStorage.setItem(STORAGE_KEYS.contrast, next);
      } catch {
        // Ignore
      }
      return next;
    });
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontScaleState((prev) => {
      const currentIndex = FONT_SCALES.indexOf(prev);
      if (currentIndex < FONT_SCALES.length - 1) {
        const next = FONT_SCALES[currentIndex + 1];
        try {
          window.localStorage.setItem(STORAGE_KEYS.fontScale, next.toString());
        } catch {
          // Ignore
        }
        return next;
      }
      return prev;
    });
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontScaleState((prev) => {
      const currentIndex = FONT_SCALES.indexOf(prev);
      if (currentIndex > 0) {
        const next = FONT_SCALES[currentIndex - 1];
        try {
          window.localStorage.setItem(STORAGE_KEYS.fontScale, next.toString());
        } catch {
          // Ignore
        }
        return next;
      }
      return prev;
    });
  }, []);

  const resetFontSize = useCallback(() => {
    setFontScaleState(DEFAULT_FONT_SCALE);
    try {
      window.localStorage.setItem(STORAGE_KEYS.fontScale, DEFAULT_FONT_SCALE.toString());
    } catch {
      // Ignore
    }
  }, []);

  const value = useMemo<AccessibilityContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      contrast,
      setContrast,
      toggleContrast,
      fontScale,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
    }),
    [
      theme,
      setTheme,
      toggleTheme,
      contrast,
      setContrast,
      toggleContrast,
      fontScale,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
    ],
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return ctx;
}
