import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Car, 
  ArrowLeft, 
  Clock, 
  Shield, 
  DollarSign,
  MapPin,
  Smartphone,
  Star,
  Users,
  Zap,
  CreditCard,
  Navigation,
  HeadphonesIcon,
  CheckCircle,
  Camera,
  MessageSquare,
  Wifi
} from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-orange text-white border-0 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              المميزات
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              مميزات <span className="text-brand-orange">استثنائية</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              اكتشف كل ما يجعل DELVI الخيار الأمثل للمواصلات الآمنة والمريحة
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">المميزات الرئيسية</h2>
            <p className="text-xl text-gray-600">كل ما تحتاجه في تطبيق واحد</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">وصول سريع</h3>
                <p className="text-gray-600 mb-4">
                  احصل على سائق خلال 3-5 دقائق في المتوسط. خوارزميات ذكية لأسرع توصيل ممكن
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• متوسط انتظار أقل من 5 دقائق</li>
                  <li>• تحديد أقرب سائق متاح</li>
                  <li>• خرائط ذكية لأفضل طريق</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">أمان متقدم</h3>
                <p className="text-gray-600 mb-4">
                  نظام أمان شامل يضمن سلامتك في كل رحلة مع مراقبة مستمرة ودعم طوارئ
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• فحص شامل لجميع السائقين</li>
                  <li>• تتبع مباشر للرحلة</li>
                  <li>• زر طوارئ سريع</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">أسعار عادلة</h3>
                <p className="text-gray-600 mb-4">
                  تسعيرة شفافة ومعقولة بدون رسوم خفية. ادفع فقط مقابل ما تستخدمه
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• تسعيرة واضحة مسبقاً</li>
                  <li>• بدون رسوم خفية</li>
                  <li>• خصومات وعروض منتظمة</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <Navigation className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">تتبع مباشر</h3>
                <p className="text-gray-600 mb-4">
                  راقب موقع السائق ومسار الرحلة لحظياً. شارك رحلتك مع الأصدقاء والعائلة
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• خرائط تفاعلية عالية الدقة</li>
                  <li>• مشاركة الموقع المباشر</li>
                  <li>• تقدير دقيق لوقت الوصول</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">دفع متنوع</h3>
                <p className="text-gray-600 mb-4">
                  طرق دفع متعددة وآمنة. نقداً، بطاقة ائتمان، أو محفظة إلكترونية
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• دفع نقدي أو إلكتروني</li>
                  <li>• بطاقات ائتمان آمنة</li>
                  <li>• محافظ إلكترونية متنوعة</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <HeadphonesIcon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">دعم 24/7</h3>
                <p className="text-gray-600 mb-4">
                  فريق دعم متخصص متاح على مدار الساعة لمساعدتك في أي وقت
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• دعم فوري عبر الدردشة</li>
                  <li>• خط ساخن مجاني</li>
                  <li>• مساعدة بعدة لغات</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">مميزات متقدمة</h2>
            <p className="text-xl text-gray-600">تقنيات حديثة لتجربة أفضل</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">تطبيق ذكي</h3>
                  <p className="text-gray-600">
                    تطبيق حديث وسهل الاستخدام مع واجهة عربية مصممة خصيصاً للمستخدم العربي
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">نظام تقييم</h3>
                  <p className="text-gray-600">
                    نظام تقييم شامل للسائقين والركاب يضمن جودة الخدمة المستمرة
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">تواصل مباشر</h3>
                  <p className="text-gray-600">
                    تواصل مع السائق عبر المكالمات أو الرسائل النصية داخل التطبيق
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">تحقق بصري</h3>
                  <p className="text-gray-600">
                    تحقق من هوية السائق والمركبة عبر الصور قبل بدء الرحلة
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">إحصائيات التطبيق</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>معدل رضا المستخدمين</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>دقة التو��يت</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>معدل الأمان</span>
                    <span className="font-bold">99%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span>سرعة الاستجابة</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">مميزات للسائقين</h2>
            <p className="text-xl text-gray-600">نوفر أفضل تجربة للسائقين أيضاً</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">دخل عادل</h3>
              <p className="text-gray-600">نظام عمولة منصف مع إمكانية زيادة الدخل</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">تطبيق متطور</h3>
              <p className="text-gray-600">تطبيق سائق بواجهة سهلة ومميزات متقدمة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">مجتمع داعم</h3>
              <p className="text-gray-600">شبكة دعم قوية ومجتمع سائقين متعاون</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">مرونة كاملة</h3>
              <p className="text-gray-600">اعمل في الأوقات التي تناسبك</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">جرب المميزات بنفسك</h2>
          <p className="text-xl mb-8 opacity-90">حمل التطبيق واكتشف لماذا نحن ا��خيار الأول</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-ride">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 text-lg px-8 py-6">
                احجز رحلتك الآن
              </Button>
            </Link>
            <Link to="/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange text-lg px-8 py-6">
                انضم كسائق
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
