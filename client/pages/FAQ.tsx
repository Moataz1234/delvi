import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  Sun,
  Moon
} from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "كيف يمكنني تنزيل تطبيق DELVI؟",
      answer: "يمكنك تنزيل تطبيق DELVI من متجر Google Play للأندرويد أو App Store للآيفون. ابحث عن 'DELVI' وقم بتنزيل التطبيق مجانا��."
    },
    {
      question: "كيف يعمل نظام التفاوض على الأسعار؟",
      answer: "في DELVI، يمكن للراكب والسائق التفاوض مباشرة على سعر الرحلة. الراكب يحدد وجهته والسعر المقترح، والسائقون يمكنهم قبول السعر أو اقتراح سعر آخر."
    },
    {
      question: "هل التطبيق آمن للاستخدام؟",
      answer: "نعم، DELVI يوفر بيئة آمنة للجميع. جميع السائقين موثقين ومعتمدين، ونوفر نظام تتبع مباشر للرحلات ونظام تقييمات شفاف."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع النقدي والدفع الإلكتروني عبر البطاقات الائتمانية والمحافظ الرقمية المختلفة مثل STC Pay وApple Pay."
    },
    {
      question: "كيف يمكنني الانضمام كسائق؟",
      answer: "للانضمام كسائق، قم بتنزيل التطبيق واختر 'وضع السائق'، ثم أكمل عملية التسجيل بتقديم الوثائق المطلوبة مثل رخصة القيادة ووثائق السيارة."
    },
    {
      question: "ما هي ساعات عمل الخدمة؟",
      answer: "DELVI متاح على مدار الساعة طوال أيام الأسبوع. يمكنك طلب رحلة في أي وقت والعثور على سائقين متاحين."
    },
    {
      question: "ماذا لو لم أجد سائق متاح؟",
      answer: "إذا لم تجد سائق متاح فوراً، يمكنك زيادة السعر المقترح أو الانتظار قليلاً. نعمل على توفير أكبر عدد من السائقين لضمان توفر الخدمة."
    },
    {
      question: "كيف يتم احتساب تقييمات السائقين؟",
      answer: "تقييمات السائقين تعتمد على تقييمات الركاب بعد كل رحلة. نأخذ في الاعتبار الأمان، الالتزام بالوقت، نظافة السيارة، وحسن التعامل."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`shadow-sm border-b transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-light border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                alt="DELVI Logo"
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className={`transition-all duration-200 ${isDarkMode ? 'text-white hover:text-brand-orange' : 'text-gray-700 hover:text-brand-orange'}`}
              title={isDarkMode ? 'التبديل للوضع الفاتح' : 'التبديل للوضع المظلم'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Link to="/">
              <Button variant="outline" className="{isDarkMode ? 'text-white' : 'text-brand-navy'} border-brand-navy hover:bg-brand-navy hover:text-white">
                <ArrowRight className="w-4 h-4 mr-2" />
                العودة للرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-navy-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            الأسئلة الشائعة
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            هنا ستجد إجابات على أكثر الأسئلة شيوعاً ح��ل خدمات DELVI
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-right hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-brand-orange">
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold {isDarkMode ? 'text-white' : 'text-brand-navy'}">
                      {item.question}
                    </h3>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-brand-orange rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-white/90 mb-6">
              فريق دعم العملاء لدينا جاهز لمساعدتك في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-brand-orange hover:bg-gray-100"
                size="lg"
              >
                تواصل معنا
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-orange"
                size="lg"
              >
                مركز المساعدة
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">
            &copy; 2024 DELVI. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
