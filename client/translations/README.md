# نظام الترجمة (Translation System)

## الملفات الموجودة:
- `ar.ts` - الترجمات بالعربية
- `en.ts` - الترجمات بالإنجليزية
- `index.ts` - ملف إدارة الترجمات

## كيفية الاستخدام:

### 1. استخدام الترجمة في أي component:

```tsx
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";

function MyComponent() {
  const { t, locale, setLocale } = useTranslation();
  
  return (
    <div>
      <h1>{t.home.hero.title}</h1>
      <p>{t.home.hero.subtitle}</p>
      
      <Button onClick={() => setLocale('en')}>
        English
      </Button>
      
      <Button onClick={() => setLocale('ar')}>
        العربية
      </Button>
    </div>
  );
}
```

### 2. استخدام مبدل اللغة الجاهز:

```tsx
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function Header() {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
}
```

### 3. إضافة ترجمات جديدة:

افتح ملف `ar.ts` أو `en.ts` وأضف الترجمات:

```typescript
// ar.ts
export const ar = {
  // ... existing translations
  mySection: {
    title: "عنوان جديد",
    description: "وصف جديد"
  }
};

// en.ts
export const en = {
  // ... existing translations
  mySection: {
    title: "New Title",
    description: "New Description"
  }
};
```

## الميزات:
- ✅ تبديل اللغة مع تحديث الاتجاه تلقائياً (RTL/LTR)
- ✅ تحديث `document.documentElement.dir` و`lang` تلقائياً
- ✅ Context API لإدارة الحالة
- ✅ Type-safe ترجمات

