import { ar } from './ar';
import { en } from './en';

export type TranslationKey = typeof ar;
export type Locale = 'ar' | 'en';

export const translations = {
  ar,
  en,
};

export const defaultLocale: Locale = 'ar';

export function getTranslation(locale: Locale = defaultLocale): TranslationKey {
  return translations[locale];
}

