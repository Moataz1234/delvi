import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Sun, Moon, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RideBooking() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" dir="rtl">
      {/* Header */}
      <header className="border-b bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white dark:text-gray-200 dark:border-gray-200 dark:hover:bg-gray-200 dark:hover:text-brand-navy"
                >
                  <Home className="w-4 h-4 mr-2" />
                  العودة للرئيسية
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                  alt="DELVI Logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-brand-orange dark:text-gray-200 dark:hover:text-brand-orange"
              aria-label={isDarkMode ? "التبديل للوضع الفاتح" : "التبديل للوضع المظلم"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl font-bold text-brand-navy dark:text-gray-200 mb-4">
                صفحة حجز الرحلات
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                هذه الصفحة قيد التطوير. سيتم إضافة نظام حجز الرحلات والبحث عن السائقين قريباً.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span>ميزات قادمة:</span>
                </div>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• البحث عن السائقين المتاحين</li>
                  <li>• تقدير التكلفة والوقت</li>
                  <li>• اختيار نوع المركبة</li>
                  <li>• تتبع الرحلة في الوقت الفعلي</li>
                  <li>• دفع آمن ومتعدد الطرق</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-brand-orange hover:bg-brand-orange-dark">
                    العودة للرئيسية
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-brand-navy"
                >
                  اشترك في التحديثات
                </Button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                يمكنك متابعة تطوير هذه الميزة من خلال المحادثة مع المساعد
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}