import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Car, 
  ArrowLeft, 
  Users,
  Linkedin,
  Twitter,
  Mail,
  Award,
  Building,
  GraduationCap,
  Lightbulb,
  Sun,
  Moon
} from "lucide-react";

export default function Founders() {
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
              المؤسسين
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              العقول <span className="text-brand-orange">المبدعة</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              تعرف على الفريق الذي أسس DELVI وقاده نحو النجاح
            </p>
          </div>
        </div>
      </section>

      {/* Main Founders */}
      <section className={`py-responsive transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Founder 1 */}
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-brand-orange" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">أحمد محمد العلي</h2>
                  <p className="text-brand-orange font-semibold">الرئيس التنفيذي والمؤسس</p>
                </div>
                
                <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed">
                  رائد أعمال مخضرم بخبرة تزيد عن 15 عاماً في مجال التقنية والنقل. حاصل على ماجستير إدارة الأعمال من جامعة الملك فهد للبترول والمعادن، وله باع طويل في تطوير الحلول التقنية المبتكرة.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-brand-orange mr-3" />
                    <span className="text-gray-700">ماجستير إدارة الأعمال - جامعة الملك فهد</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-brand-orange mr-3" />
                    <span className="text-gray-700">مدير سابق في شركة أرامكو السعودية</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-brand-orange mr-3" />
                    <span className="text-gray-700">جائزة رائد الأعمال المتميز 2023</span>
                  </div>
                </div>

                <div className="flex space-x-4 justify-center">
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    البريد
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Founder 2 */}
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-dark h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                    <Lightbulb className="w-16 h-16 {isDarkMode ? 'text-white' : 'text-brand-navy'}" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">سارة أحمد الزهراني</h2>
                  <p className="text-brand-orange font-semibold">المديرة التقنية والمؤسسة المشاركة</p>
                </div>
                
                <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed">
                  خبيرة في هندسة البرمجيات والذكاء الاصطناعي بخبرة 12 عاماً. حاصلة على دكتوراه في علوم الحاسب من جامعة الم��ك سعود، ولها أبحاث منشورة في مجال الخوارزميات الذكية للنقل.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-brand-orange mr-3" />
                    <span className="text-gray-700">دكتوراه علوم الحاسب - جامعة الملك سعود</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-brand-orange mr-3" />
                    <span className="text-gray-700">مهندسة سابقة في Google</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-brand-orange mr-3" />
                    <span className="text-gray-700">جائزة أفضل مطورة في المنطقة 2022</span>
                  </div>
                </div>

                <div className="flex space-x-4 justify-center">
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    البريد
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Co-Founders */}
      <section className={`py-responsive transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-4">المؤسسين المشاركين</h2>
            <p className="text-xl {isDarkMode ? 'text-gray-300' : 'text-gray-600'}">الفريق الذي ساهم في وضع الأسس</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">محمد خالد النمر</h3>
                <p className="text-brand-orange font-semibold mb-3">مدير العمليات</p>
                <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4">
                  خبير في إدارة العمليات وتطوير الأعمال، مع خبرة 10 سنوات في قطاع النقل واللوجستيات.
                </p>
                <Badge className="bg-blue-100 text-blue-600">MBA - جامعة الملك عبدالله</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">نوره عبدالله القحطاني</h3>
                <p className="text-brand-orange font-semibold mb-3">مديرة التسويق</p>
                <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4">
                  استراتيجية تسويق رقمي مبدعة، نجحت في بناء العلامة التجارية وتحقيق نمو سريع في قاعدة المستخدمين.
                </p>
                <Badge className="bg-green-100 text-green-600">ماجستير التسويق - جامعة الملك فيصل</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-2">عبدالرحمن سعد الشمري</h3>
                <p className="text-brand-orange font-semibold mb-3">مدير الموارد البشرية</p>
                <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4">
                  متخصص في إدارة المواهب وتطوير الفرق، بنى ثقافة شركة قوية تركز على الابتكار والتعاون.
                </p>
                <Badge className="bg-purple-100 text-purple-600">ماجستير الموارد البشرية - جامعة الأمير سلطان</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Journey */}
      <section className={`py-responsive transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-4">الرؤية والرحلة</h2>
              <p className="text-xl {isDarkMode ? 'text-gray-300' : 'text-gray-600'}">كيف تطورت فكرة DELVI</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold {isDarkMode ? 'text-white' : 'text-brand-navy'} mb-4">من الفكرة إلى الواقع</h3>
                    <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4">
                      بدأت فكرة DELVI عام 2019 عندما لاحظ المؤسسون الحاجة الماسة لخدمة مواصلات عادلة وآمنة في المنطقة العربية. 
                      كانت الرؤية واضحة: إنشاء منصة تجمع بين التقنية المتطورة والخدمة الإنسانية المتميزة.
                    </p>
                    <p className="{isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed">
                      اليوم، بعد سنوات من العمل الجاد والتطوير المستمر، نفخر بخدمة أكثر من 2 مليون مستخدم 
                      والعمل مع أ��ثر من 50 ألف سائق عبر 15 محافظة.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-lg p-6 text-white">
                    <h4 className="text-xl font-bold mb-4">معالم الرحلة</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>2019 - بداية الفكرة</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>2020 - تطوير المنصة</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>2021 - الإطلاق الرسمي</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>2022 - التوسع الإقليمي</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>2023 - الوصول لمليوني مستخدم</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        <span>2024 - قيادة السوق</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">أدرك المؤسسون حلمهم</h2>
          <p className="text-xl mb-8 opacity-90">انضم إليهم في هذه الرحلة المثيرة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 text-lg px-8 py-6">
                انضم لفريق العمل
              </Button>
            </Link>
            <Link to="/book-ride">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange text-lg px-8 py-6">
                كن جزءاً من النجاح
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
