import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Car, 
  ArrowLeft, 
  Users,
  MapPin,
  TrendingUp,
  Clock,
  Star,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

export default function Statistics() {
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
              <BarChart3 className="w-4 h-4 mr-2" />
              الإحصائيات
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              أرقام <span className="text-brand-orange">مذهلة</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              إحصائيات شاملة عن عدد العملاء والكباتن والمحافظات التي نخدمها
            </p>
          </div>
        </div>
      </section>

      {/* Main Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">2,147,823</div>
                <div className="text-orange-100">إجمالي العملاء</div>
                <div className="text-sm text-orange-200 mt-2">+12% هذا الشهر</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white">
              <CardContent className="p-8 text-center">
                <Car className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">52,841</div>
                <div className="text-blue-100">الكباتن المعتمدين</div>
                <div className="text-sm text-blue-200 mt-2">+8% هذا الشهر</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-8 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">15</div>
                <div className="text-green-100">محافظة مخدومة</div>
                <div className="text-sm text-green-200 mt-2">+5 محافظات جديدة</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">12.4M</div>
                <div className="text-purple-100">رحلة مكتملة</div>
                <div className="text-sm text-purple-200 mt-2">منذ الإطلاق</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Statistics */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-brand-orange" />
                  إحصائيات العملاء
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">العملاء النشطين يومياً</span>
                    <span className="font-bold text-brand-navy">425,678</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">العملاء النشطين أسبوعياً</span>
                    <span className="font-bold text-brand-navy">1,234,567</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">متوسط الرحلات شهرياً</span>
                    <span className="font-bold text-brand-navy">3.2 رحلة</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-orange h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-6 flex items-center">
                  <Car className="w-6 h-6 mr-3 text-brand-orange" />
                  إحصائيات الكباتن
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">الكباتن النشطين يومياً</span>
                    <span className="font-bold text-brand-navy">38,945</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-navy h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">متوسط التقييم</span>
                    <span className="font-bold text-brand-navy">4.8 ⭐</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-navy h-2 rounded-full" style={{width: '96%'}}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">متوسط الرحلات يومياً</span>
                    <span className="font-bold text-brand-navy">15.6 رحلة</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-brand-navy h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Provinces Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">التوزيع الجغرافي</h2>
            <p className="text-xl text-gray-600">المحافظات التي نخدمها وأعداد المستخدمين</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "الرياض", users: "542,345", drivers: "12,856", growth: "+15%" },
              { name: "جدة", users: "398,721", drivers: "9,234", growth: "+12%" },
              { name: "الدمام", users: "267,543", drivers: "6,789", growth: "+18%" },
              { name: "مكة المكرمة", users: "234,876", drivers: "5,643", growth: "+10%" },
              { name: "المدينة المنورة", users: "198,654", drivers: "4,567", growth: "+14%" },
              { name: "تبوك", users: "145,321", drivers: "3,456", growth: "+22%" },
              { name: "أبها", users: "123,987", drivers: "2,987", growth: "+16%" },
              { name: "حائل", users: "98,765", drivers: "2,345", growth: "+20%" },
              { name: "الطائف", users: "87,654", drivers: "2,123", growth: "+11%" },
              { name: "جيزان", users: "76,543", drivers: "1,876", growth: "+25%" },
              { name: "القصيم", users: "65,432", drivers: "1,654", growth: "+13%" },
              { name: "نجران", users: "54,321", drivers: "1,432", growth: "+17%" },
              { name: "الباحة", users: "43,210", drivers: "1,234", growth: "+19%" },
              { name: "الجوف", users: "32,109", drivers: "987", growth: "+21%" },
              { name: "عرعر", users: "21,098", drivers: "654", growth: "+23%" }
            ].map((province, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                  <h3 className="font-bold text-brand-navy mb-2">{province.name}</h3>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">{province.users}</span> عميل
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{province.drivers}</span> كابتن
                  </div>
                  <Badge className="bg-green-100 text-green-600 text-xs">
                    {province.growth}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">مؤشرات الأداء</h2>
            <p className="text-xl text-gray-600">قياسات دقيقة لجودة خدماتنا</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">أوقات الاستجابة</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">متوسط وقت الانتظار</span>
                    <span className="font-bold">4.2 دقيقة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">أسرع استجابة</span>
                    <span className="font-bold">45 ثانية</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">نسبة الاستجابة السريعة</span>
                    <span className="font-bold">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">رضا العملاء</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">متوسط التقييم</span>
                    <span className="font-bold">4.8/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">نسبة الرضا</span>
                    <span className="font-bold">96%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">العملاء المتكررين</span>
                    <span className="font-bold">89%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Activity className="w-12 h-12 text-brand-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">الكفاءة التشغيلية</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">معدل إتمام الرحلات</span>
                    <span className="font-bold">98.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">دقة التوقيت</span>
                    <span className="font-bold">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">معدل الأمان</span>
                    <span className="font-bold">99.9%</span>
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
          <h2 className="text-4xl font-bold mb-4">كن جزءاً من هذه الأرقام المذهلة</h2>
          <p className="text-xl mb-8 opacity-90">انضم لملايين المستخدمين الراضين</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-ride">
              <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 text-lg px-8 py-6">
                ابدأ رحلتك الآن
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
