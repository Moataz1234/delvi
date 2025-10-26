import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    setLocale(newLocale);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center bg-white/90 text-gray-700 hover:bg-white border-gray-300 min-w-[100px]"
      title={locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
    >
      <Globe className="w-4 h-4 mr-2" />
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </Button>
  );
}

