import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Car, 
  ArrowLeft, 
  Users, 
  Target, 
  Heart,
  Shield,
  Globe,
  Award,
  Building,
  Clock,
  Sun,
  Moon
} from "lucide-react";

export default function AboutUs() {
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-light border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className={isDarkMode ? 'text-white hover:text-brand-orange' : ''}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
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
              className={`transition-all duration-200 ${isDarkMode ? 'text-white hover:text-brand-orange' : 'text-gray-700 hover:text-brand-orange'}`}
              title={isDarkMode ? 'التبديل للوضع الفاتح' : 'التبديل للوضع المظلم'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-orange text-white border-0 mb-6">
              <Users className="w-4 h-4 mr-2" />
              من نحن
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              نحن <span className="text-brand-orange">DELVI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              منصة مواصلات عربية تهدف لربط الركاب بالسائقين بشكل آمن وعادل، نؤمن بأن كل رحلة يجب أن تكون تجربة مميزة
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>رسالتنا</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  تسهيل حياة الناس من خلال توفير خدمة مواصلات موثوقة وآمنة تجمع بين التكنولوجيا المتطورة والخدمة الإنسانية المتميزة
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>رؤيتنا</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  أن نكون الخيار الأول للمواصلات في المنطقة العربية وأن نساهم في تطوير قطاع النقل بحلول مبتكرة ومستدامة
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>قيمنا</h3>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  الأمانة، الجودة، الابتكار، واحترام العملاء. نؤمن بأهمية بناء الثقة والشراكة الحقيقية مع جميع مستخدمينا
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={`py-responsive transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-responsive-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>قصتنا</h2>
              <p className={`text-responsive-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>كيف بدأت رحلة DELVI</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>2019 - البداية</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      انطلقت فكرة DELVI من رؤية بسيطة: جعل المواصلات أكثر عدالة وأماناً للجميع. بدأنا بفريق صغير من المطورين والمختصين
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>2020 - التطوير</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      قضينا عاماً كاملاً في تطوير المنصة وإجراء اختبارات مكثفة لضمان أعلى معايير الأمان والجودة
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>2021 - الإطلاق</h3>
                    <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'}">
                      أطلقنا التطبيق رسمياً وحققنا نمواً مستمراً، مع التركيز على رضا العملاء وتحسين الخدمة باس��مرار
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">2024 - التوسع</h3>
                    <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'}">
                      اليوم نخدم أكثر من 2 مليون مستخدم ونعمل مع أكثر من 50 ألف سائق في عدة محافظات
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">إنجازاتنا</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>عدد ا��رحلات المكتملة</span>
                    <span className="font-bold">+10M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>متوسط تقييم التطبيق</span>
                    <span className="font-bold">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>المحافظات التي نخدمها</span>
                    <span className="font-bold">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>معدل رضا العملاء</span>
                    <span className="font-bold">96%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className={`py-responsive transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-responsive-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>ما يميزنا</h2>
            <p className={`text-responsive-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>القيم التي نعمل بها يومياً</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">الأمان أولاً</h3>
              <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'}">نطبق أعلى معايير الأمان في جميع عملياتنا</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">خدمة العملاء</h3>
              <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'}">فريق دعم متاح 24/7 لخدمة عملائنا</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">الدقة والجودة</h3>
              <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'}">نسعى للتميز في كل خدمة نقدمها</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">الابتكار</h3>
              <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'}">نطور حلولاً مبتكرة لتحسين تجربة النقل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">انضم إلى عائلة DELVI</h2>
          <p className="text-xl mb-8 opacity-90">كن جزءاً من مستقبل المواصلات في المنطقة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 text-lg px-8 py-6">
                انضم لفريق العمل
              </Button>
            </Link>
            <Link to="/book-ride">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange text-lg px-8 py-6">
                ابدأ رحلتك الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                alt="DELVI Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400">&copy; 2024 DELVI. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
