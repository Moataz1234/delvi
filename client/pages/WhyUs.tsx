import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Car, 
  ArrowLeft, 
  Award, 
  TrendingUp, 
  Users,
  Shield,
  Clock,
  Heart,
  Star,
  CheckCircle,
  Target,
  Globe
} from "lucide-react";

export default function WhyUs() {
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
              <Target className="w-4 h-4 mr-2" />
              لماذا نحن
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              لماذا <span className="text-brand-orange">DELVI</span> الأفضل؟
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              اكتشف الأسباب التي تجعل ملايين المستخدمين يثقون بنا كخيارهم الأول للمواصلات
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-8">أرقام تتحدث عن نفسها</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">2M+</div>
                  <div className="text-gray-600">مستخدم راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">50K+</div>
                  <div className="text-gray-600">سائق معتمد</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">15</div>
                  <div className="text-gray-600">محافظة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">4.8★</div>
                  <div className="text-gray-600">تقييم التطبيق</div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">أسرع خدمة في المنطقة</h3>
                      <p className="text-gray-600 text-sm">متوسط انتظار أقل من 5 دقائق</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">أمان مضمون 100%</h3>
                      <p className="text-gray-600 text-sm">سائقين مفحوصين ومعتمدين</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">جودة عالية</h3>
                      <p className="text-gray-600 text-sm">98% معدل رضا العملاء</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">خدمة عملاء مميزة</h3>
                      <p className="text-gray-600 text-sm">دعم 24/7 بعدة لغات</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">مقارنة مع المنافسين</h2>
            <p className="text-xl text-gray-600">لماذا نحن الخيار الأمثل؟</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 font-semibold text-brand-navy border-b-2 border-brand-orange"></div>
              <div className="p-4 font-semibold text-center bg-brand-orange text-white rounded-t-lg">DELVI</div>
              <div className="p-4 font-semibold text-center bg-gray-200">المنافس أ</div>
              <div className="p-4 font-semibold text-center bg-gray-200">المنافس ب</div>

              <div className="p-4 font-medium text-brand-navy border-b">وقت الانتظار</div>
              <div className="p-4 text-center bg-green-50 border-b">
                <span className="text-green-600 font-bold">3-5 دقائق</span>
              </div>
              <div className="p-4 text-center border-b">8-12 دقيقة</div>
              <div className="p-4 text-center border-b">10-15 دقيقة</div>

              <div className="p-4 font-medium text-brand-navy border-b">الأسعار</div>
              <div className="p-4 text-center bg-green-50 border-b">
                <span className="text-green-600 font-bold">الأقل</span>
              </div>
              <div className="p-4 text-center border-b">أعلى بـ 20%</div>
              <div className="p-4 text-center border-b">أعلى بـ 35%</div>

              <div className="p-4 font-medium text-brand-navy border-b">خدمة العملاء</div>
              <div className="p-4 text-center bg-green-50 border-b">
                <span className="text-green-600 font-bold">24/7</span>
              </div>
              <div className="p-4 text-center border-b">ساعات محدودة</div>
              <div className="p-4 text-center border-b">ساعات محدودة</div>

              <div className="p-4 font-medium text-brand-navy border-b">التقييم</div>
              <div className="p-4 text-center bg-green-50 border-b">
                <span className="text-green-600 font-bold">4.8★</span>
              </div>
              <div className="p-4 text-center border-b">4.2★</div>
              <div className="p-4 text-center border-b">3.9★</div>

              <div className="p-4 font-medium text-brand-navy">التغطية</div>
              <div className="p-4 text-center bg-green-50">
                <span className="text-green-600 font-bold">15 محافظة</span>
              </div>
              <div className="p-4 text-center">8 محافظات</div>
              <div className="p-4 text-center">5 محافظات</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-600">آراء حقيقية من مستخدمينا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "خدمة ممتازة وسائقين محترمين. التطبيق سهل الاستخدام والأسعار معقولة جداً."
                </p>
                <div className="font-semibold text-brand-navy">أحمد محمد</div>
                <div className="text-sm text-gray-500">الرياض</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "أسرع تطبيق مواصلات جربته. السائق وصل خلال 3 دقائق فقط!"
                </p>
                <div className="font-semibold text-brand-navy">فاطمة أحمد</div>
                <div className="text-sm text-gray-500">جدة</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
                <p className="text-gray-600 mb-4">
                  "أشعر بالأمان التام مع تتبع الرحلة المباشر. خدمة عملاء رائعة."
                </p>
                <div className="font-semibold text-brand-navy">خالد العلي</div>
                <div className="text-sm text-gray-500">الدمام</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">الجوائز والتقديرات</h2>
            <p className="text-xl text-gray-600">اعتراف بالتميز والجودة</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">أفضل تطبيق نقل 2023</h3>
              <p className="text-gray-600 text-sm">جائزة التميز التقني</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">شهادة الأمان المعتمدة</h3>
              <p className="text-gray-600 text-sm">معهد الأمان العربي</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">الأسرع نمواً</h3>
              <p className="text-gray-600 text-sm">تقرير السوق 2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">اختيار المستخدمين</h3>
              <p className="text-gray-600 text-sm">جوائز التقنية العربية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">مقتنع؟ ابدأ رحلتك معنا</h2>
          <p className="text-xl mb-8 opacity-90">انضم لملا��ين المستخدمين الراضين</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-ride">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 text-lg px-8 py-6">
                احجز رحلتك الأولى
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange text-lg px-8 py-6">
                اعرف المزيد
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
            <p className="text-gray-400">&copy; 2024 DELVI. جميع الحقوق مح��وظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
