import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useState, useEffect } from "react";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    setLocale(newLocale);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={`d-flex align-items-center min-w-100 ${
        isDarkMode 
          ? 'bg-brand-navy-light text-invert border-secondary hover:bg-brand-navy-dark' 
          : 'bg-white text-secondary border-gray-300 hover:bg-gray-50'
      }`}
      title={locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
    >
      <Globe className="w-4 h-4 me-2" style={{width: '16px', height: '16px'}} />
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </Button>
  );
}

