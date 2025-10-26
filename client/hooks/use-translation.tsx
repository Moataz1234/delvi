import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { getTranslation, Locale, type TranslationKey } from '@/translations';

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKey;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ar');
  
  // تحديث language attribute فقط (الاتجاه يبقى RTL دائماً)
  useEffect(() => {
    document.documentElement.lang = locale;
    console.log('Language changed to:', locale); // للاختبار
  }, [locale]);
  
  const handleSetLocale = useCallback((newLocale: Locale) => {
    console.log('Setting locale to:', newLocale); // للاختبار
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

