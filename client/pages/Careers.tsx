import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Car, 
  ArrowLeft, 
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Code,
  Megaphone,
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Award
} from "lucide-react";

export default function Careers() {
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
              <Briefcase className="w-4 h-4 mr-2" />
              الوظائف والتقديم
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              انضم إلى <span className="text-brand-orange">فريقنا</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              ابدأ مسيرتك المهنية مع الشركة الرائدة في مجال المواصلات الذكية
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">لماذا تعمل معنا؟</h2>
            <p className="text-xl text-gray-600">مميزات العمل في DELVI</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">نمو مهني</h3>
                <p className="text-gray-600 text-sm">فرص تطوير مستمرة وتدريب متقدم</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">بيئة مميزة</h3>
                <p className="text-gray-600 text-sm">فريق عمل متعاون وثقافة شركة إيجابية</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">راتب تنافسي</h3>
                <p className="text-gray-600 text-sm">رواتب ومكافآت تنافسية في السوق</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">مرونة في العمل</h3>
                <p className="text-gray-600 text-sm">ساعات عمل مرنة وإمكانية العمل عن بُعد</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">الوظائف المتاحة</h2>
            <p className="text-xl text-gray-600">انضم لفريقنا في هذه المناصب المثيرة</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "مطور تطبيقات موبايل - React Native",
                department: "التقنية",
                location: "الرياض",
                type: "دوام كامل",
                salary: "12,000 - 18,000 ريال",
                icon: Code,
                description: "نبحث عن مطور تطبيقات موبايل خبير لتطوير وصيانة تطبيقاتنا على iOS و Android.",
                requirements: ["خبرة 3+ سنوات في React Native", "معرفة قوية بـ JavaScript/TypeScript", "خبرة في تطوير التطبيقات التجارية"]
              },
              {
                title: "مختص تسويق رقمي",
                department: "التسويق", 
                location: "جدة",
                type: "دوام كامل",
                salary: "8,000 - 12,000 ريال",
                icon: Megaphone,
                description: "مطلوب مختص تسويق رقمي مبدع لإدارة حملاتنا الرقمية وزيادة قاعدة المستخدمين.",
                requirements: ["خبرة في إدارة الحملات الرقمية", "معرفة بأدوات التحليل", "مهارات إبداعية في المحتوى"]
              },
              {
                title: "مدير علاقات السائقين",
                department: "العمليات",
                location: "الدمام", 
                type: "دوام كامل",
                salary: "10,000 - 14,000 ريال",
                icon: Users,
                description: "مطلوب مدير لإدارة علاقات السائقين وضمان رضاهم وتطوير شبكة السائقين.",
                requirements: ["خبرة ��ي إدارة العلاقات", "مهارات تواصل ممتازة", "خلفية في قطاع النقل مفضلة"]
              },
              {
                title: "محلل بيانات",
                department: "التقنية",
                location: "الرياض",
                type: "دوام كامل", 
                salary: "11,000 - 15,000 ريال",
                icon: TrendingUp,
                description: "نبحث عن محلل بيانات لاستخراج رؤى قيمة من بيانات المنصة وتحسين الأداء.",
                requirements: ["خبرة في تحليل البيانات", "معرفة بـ Python/R", "خبرة في SQL والإحصاء"]
              },
              {
                title: "مصمم واجهات المستخدم (UI/UX)",
                department: "التصميم",
                location: "الرياض",
                type: "دوام كامل",
                salary: "9,000 - 13,000 ريال", 
                icon: Zap,
                description: "مطلوب مصمم واجهات مبدع لتحسين تجربة المستخدم في تطبيقاتنا.",
                requirements: ["خبرة في تصميم UI/UX", "إتقان أدوات التصميم", "فهم لتجربة المستخدم"]
              },
              {
                title: "مسؤول خدمة العملاء",
                department: "خدمة العملاء",
                location: "جدة",
                type: "دوام كامل",
                salary: "6,000 - 9,000 ريال",
                icon: Heart,
                description: "انضم لفريق خدمة العملاء لتقديم دعم متميز لمستخدمينا.",
                requirements: ["مهارات تواصل ممتازة", "صبر وقدرة على حل المشاكل", "خبرة في خدمة العملاء"]
              }
            ].map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                          <job.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-brand-navy mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 mb-3">
                            <Badge className="bg-blue-100 text-blue-600">{job.department}</Badge>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center text-green-600">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div className="mb-4">
                            <h4 className="font-semibold text-brand-navy mb-2">المتطلبات:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {job.requirements.map((req, i) => (
                                <li key={i}>• {req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
                        تقدم الآن
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">المزايا والمكافآت</h2>
            <p className="text-xl text-gray-600">ما نقدمه لموظفينا</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">تأمين صحي ��امل</h3>
              <p className="text-gray-600">تغطية طبية كاملة للموظف والعائلة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">مكافآت سنوية</h3>
              <p className="text-gray-600">نظام مكافآت يعتمد على الأداء والإنجازات</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">إجازات مرنة</h3>
              <p className="text-gray-600">إجازات سنوية مدفوعة وساعات عمل مرنة</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">برامج تطوير</h3>
              <p className="text-gray-600">دورات تدريبية ومؤتمرات لتطوير المهارات</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">أدوات متطورة</h3>
              <p className="text-gray-600">أحدث الأجهزة والبرامج للعمل</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">فعاليات الفريق</h3>
              <p className="text-gray-600">أنشطة ترفيهية ورحلات جماعية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-4">عملية التقديم</h2>
            <p className="text-xl text-gray-600">خطوات بسيطة للانضمام إلينا</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">تقديم الطلب</h3>
              <p className="text-gray-600">أرسل سيرتك الذاتية ورسالة التغطية</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">مراجعة أولية</h3>
              <p className="text-gray-600">مراجعة الطلب من قبل فريق الموارد البشرية</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">المقابلة</h3>
              <p className="text-gray-600">مقابلة مع مدير التوظيف والفريق التقني</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">بداية العمل</h3>
              <p className="text-gray-600">التحاق بالفريق وبرنامج التأهيل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">جاهز لبدء رحلتك المهنية؟</h2>
          <p className="text-xl mb-8 opacity-90">انضم لفريقنا وكن جزءاً من مستقبل المواصلات</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 text-lg px-8 py-6">
              تصفح الوظائف المتاحة
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange text-lg px-8 py-6">
              أرسل سيرتك الذاتية
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
