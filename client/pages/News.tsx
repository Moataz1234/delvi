import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Car, 
  ArrowLeft, 
  Calendar,
  Clock,
  User,
  TrendingUp,
  MapPin,
  Award,
  Zap
} from "lucide-react";

export default function News() {
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
              <Calendar className="w-4 h-4 mr-2" />
              الأخبار
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              آخر <span className="text-brand-orange">الأخبار</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              تابع آخر التطورات والإعلانات الهامة من DELVI
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
              </div>
              <CardContent className="p-8">
                <Badge className="bg-red-100 text-red-600 mb-4">عاجل</Badge>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  DELVI تتوسع لتشمل 5 محافظات جديدة
                </h2>
                <p className="text-gray-600 mb-6">
                  نعلن بفخر عن توسع خدماتنا لتشمل 5 محافظات جديدة، مما يرفع إجمالي المناطق المخدومة إلى 15 محافظة عبر المملكة.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    فريق DELVI
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    منذ 3 أيام
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-blue-100 text-blue-600 mb-2">جوائز</Badge>
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">
                        DELVI تفوز بجائزة أفضل تطبيق نقل لعام 2024
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        حصل التطبيق على الجائزة من معهد التقنية العربي تقديراً للابتكار والجودة.
                      </p>
                      <div className="text-xs text-gray-500">منذ أسبوع</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-green-100 text-green-600 mb-2">تحديثات</Badge>
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">
                        إطلاق ميزة الدفع بالمحفظة الرقمية
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        يمكن الآن للمستخدمين الدفع باستخدام المحافظ الرقمي�� المختلفة.
                      </p>
                      <div className="text-xs text-gray-500">منذ أسبوعين</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-purple-100 text-purple-600 mb-2">شراكات</Badge>
                      <h3 className="text-lg font-semibold text-brand-navy mb-2">
                        شراكة جديدة مع محطات الوقود الكبرى
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        خصومات حصرية للسائقين المسجلين في شبكة محطات الوقود الشريكة.
                      </p>
                      <div className="text-xs text-gray-500">منذ 3 أسابيع</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center">جميع الأخبار</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "15 ديسمبر 2024",
                title: "تطبيق DELVI يصل إلى 2 مليون مستخدم",
                excerpt: "إنجاز جديد يؤكد ثقة المستخدمين في خدماتنا المتميزة",
                category: "إحصائيات"
              },
              {
                date: "10 ديسمبر 2024", 
                title: "إطلاق برنامج تدريب السائقين الجدد",
                excerpt: "برنامج شامل لضمان أعلى معايير الخدمة والأمان",
                category: "تدريب"
              },
              {
                date: "5 ديسمبر 2024",
                title: "تحديث تطبيق السائقين بمميزات جديدة",
                excerpt: "واجهة محسنة ونظام ملاحة أكثر دقة",
                category: "تحديثات"
              },
              {
                date: "1 ديسمبر 2024",
                title: "DELVI تطلق خدمة النقل الجماعي",
                excerpt: "خيار اقتصادي جديد للرحلات الطويلة",
                category: "خدمات جديدة"
              },
              {
                date: "25 نوفمبر 2024",
                title: "افتتاح مركز خدمة عملاء جديد في الدمام",
                excerpt: "تعزيز الدعم المحلي للمنطقة الشرقية",
                category: "توسع"
              },
              {
                date: "20 نوفمبر 2024",
                title: "برنامج المكافآت الجديد للمستخدمين الدائمين",
                excerpt: "نقاط وخصومات حصرية للعملاء المميزين",
                category: "مكافآت"
              }
            ].map((news, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-4 h-4 text-brand-orange mr-2" />
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <Badge className="bg-gray-100 text-gray-600 mb-3">{news.category}</Badge>
                  <h3 className="text-lg font-semibold text-brand-navy mb-3">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {news.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">ابق على اطلاع دائم</h2>
          <p className="text-xl mb-8 opacity-90">اشترك في نشرتنا الإخبارية لتصلك آخر الأخبار والتحديثات</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-white text-brand-orange hover:bg-gray-100 px-6">
              اشتراك
            </Button>
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
