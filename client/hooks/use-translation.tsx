import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { getTranslation, Locale, type TranslationKey } from '@/translations';

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKey;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  // Load locale from localStorage or default to 'ar'
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = localStorage.getItem('delvi-locale') as Locale | null;
    return (savedLocale === 'ar' || savedLocale === 'en') ? savedLocale : 'ar';
  });
  
  // Save locale to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('delvi-locale', locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);
  
  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
  }, []);
  
  const t = useMemo(() => getTranslation(locale), [locale]);
  
  const value: TranslationContextType = useMemo(() => ({
    locale,
    setLocale: handleSetLocale,
    t,
  }), [locale, t, handleSetLocale]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

