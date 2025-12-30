import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
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
  Award,
  Sun,
  Moon
} from "lucide-react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Careers() {
  const { t, locale } = useTranslation();
  // Load dark mode from localStorage or default to false
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('delvi-theme');
      const isDark = savedTheme === 'dark';
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return isDark;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('delvi-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('delvi-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Job listings - These could come from API/CMS in production
  const jobs = [
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
      requirements: ["خبرة في إدارة العلاقات", "مهارات تواصل ممتازة", "خلفية في قطاع النقل مفضلة"]
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
  ];

  const whyWorkWithUs = [
    {
      icon: TrendingUp,
      title: t.careers.why.growth.title,
      desc: t.careers.why.growth.desc,
      bgColor: "bg-brand-orange",
    },
    {
      icon: Heart,
      title: t.careers.why.environment.title,
      desc: t.careers.why.environment.desc,
      bgColor: "bg-brand-navy",
    },
    {
      icon: DollarSign,
      title: t.careers.why.salary.title,
      desc: t.careers.why.salary.desc,
      bgColor: "bg-success",
    },
    {
      icon: Coffee,
      title: t.careers.why.flexibility.title,
      desc: t.careers.why.flexibility.desc,
      bgColor: "bg-info",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: t.careers.benefits.healthInsurance.title,
      desc: t.careers.benefits.healthInsurance.desc,
      bgColor: "bg-brand-orange",
    },
    {
      icon: Award,
      title: t.careers.benefits.annualBonus.title,
      desc: t.careers.benefits.annualBonus.desc,
      bgColor: "bg-brand-navy",
    },
    {
      icon: Coffee,
      title: t.careers.benefits.flexibleLeave.title,
      desc: t.careers.benefits.flexibleLeave.desc,
      bgColor: "bg-success",
    },
    {
      icon: TrendingUp,
      title: t.careers.benefits.development.title,
      desc: t.careers.benefits.development.desc,
      bgColor: "bg-info",
    },
    {
      icon: Zap,
      title: t.careers.benefits.tools.title,
      desc: t.careers.benefits.tools.desc,
      bgColor: "bg-warning",
    },
    {
      icon: Users,
      title: t.careers.benefits.teamEvents.title,
      desc: t.careers.benefits.teamEvents.desc,
      bgColor: "bg-danger",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: t.careers.process.step1.title,
      desc: t.careers.process.step1.desc,
    },
    {
      step: 2,
      title: t.careers.process.step2.title,
      desc: t.careers.process.step2.desc,
    },
    {
      step: 3,
      title: t.careers.process.step3.title,
      desc: t.careers.process.step3.desc,
    },
    {
      step: 4,
      title: t.careers.process.step4.title,
      desc: t.careers.process.step4.desc,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-brand-navy' : 'bg-light'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className={`sticky-top border-bottom transition-colors ${isDarkMode ? 'bg-brand-navy-light border-secondary' : 'bg-white border-light'}`} style={{zIndex: 1050}}>
        <Container fluid className="px-3 px-md-4">
          <Row className="align-items-center">
            <Col className="d-flex align-items-center gap-3">
              <Link to="/" className="text-decoration-none">
                <Button variant="ghost" size="sm" className={`transition-colors ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                  <ArrowLeft className="me-2" style={{width: '16px', height: '16px'}} />
                  {t.common.backToHome}
                </Button>
              </Link>
              <div className="d-flex align-items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                  alt="DELVI Logo"
                  style={{height: '40px', width: 'auto'}}
                />
              </div>
            </Col>
            
            <Col xs="auto" className="d-flex align-items-center gap-2">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className={`transition-colors ${isDarkMode ? 'text-white' : 'text-dark'}`}
                title={isDarkMode ? t.common.switchToLight : t.common.switchToDark}
                aria-label={isDarkMode ? t.common.switchToLight : t.common.switchToDark}
              >
                {isDarkMode ? <Sun style={{width: '16px', height: '16px'}} /> : <Moon style={{width: '16px', height: '16px'}} />}
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-5 py-md-4" style={{background: 'linear-gradient(to bottom right, #1e3a8a, #1e293b)'}}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <Badge className="bg-brand-orange text-white border-0 mb-4 px-3 py-2 d-inline-flex align-items-center">
                <Briefcase className="me-2" style={{width: '16px', height: '16px'}} />
                {t.careers.hero.badge}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.careers.hero.title} <span className="text-brand-orange">{t.careers.hero.titleHighlight}</span>
              </h1>
              <p className="lead text-light">
                {t.careers.hero.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="py-5 py-md-4">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.careers.why.title}
            </h2>
            <p className="lead text-secondary">
              {t.careers.why.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5">
            {whyWorkWithUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Col sm={6} lg={3} key={index}>
                  <Card className={`h-100 border-0 shadow text-center transition-all ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                    <Card.Body className="p-4">
                      <div className={`${item.bgColor} rounded d-flex align-items-center justify-content-center mx-auto mb-3`} style={{width: '64px', height: '64px'}}>
                        <IconComponent className="text-white" style={{width: '32px', height: '32px'}} />
                      </div>
                      <h3 className="h5 fw-semibold mb-2 text-primary">
                        {item.title}
                      </h3>
                      <p className="small text-muted">
                        {item.desc}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Open Positions */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.careers.positions.title}
            </h2>
            <p className="lead text-secondary">
              {t.careers.positions.subtitle}
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {jobs.map((job, index) => {
              const IconComponent = job.icon;
              return (
                <Col lg={10} key={index}>
                  <Card className={`border-0 shadow mb-3 transition-all ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-white'}`}>
                    <Card.Body className="p-4 p-md-5">
                      <Row className="align-items-center">
                        <Col lg={9}>
                          <div className="d-flex align-items-start gap-3 mb-3">
                            <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '48px', height: '48px'}}>
                              <IconComponent className="text-white" style={{width: '24px', height: '24px'}} />
                            </div>
                            <div className="flex-grow-1">
                              <h3 className="h4 fw-bold mb-2 text-primary">
                                {job.title}
                              </h3>
                              <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 mb-3">
                                <Badge className={isDarkMode ? 'bg-primary' : 'bg-info'}>
                                  {job.department}
                                </Badge>
                                <div className="d-flex align-items-center text-secondary">
                                  <MapPin className="me-1" style={{width: '16px', height: '16px'}} />
                                  {job.location}
                                </div>
                                <div className="d-flex align-items-center text-secondary">
                                  <Clock className="me-1" style={{width: '16px', height: '16px'}} />
                                  {job.type}
                                </div>
                                <div className={`d-flex align-items-center ${isDarkMode ? 'text-success' : 'text-success'}`}>
                                  <DollarSign className="me-1" style={{width: '16px', height: '16px'}} />
                                  {job.salary}
                                </div>
                              </div>
                              <p className="mb-3 text-secondary">
                                {job.description}
                              </p>
                              <div>
                                <h4 className="h6 fw-semibold mb-2 text-primary">
                                  {t.careers.positions.requirements}
                                </h4>
                                <ul className="small list-unstyled mb-0 text-secondary">
                                  {job.requirements.map((req, i) => (
                                    <li key={i} className="d-flex align-items-start mb-1">
                                      <span className="me-2">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} className="text-center text-lg-start mt-3 mt-lg-0">
                          <Button className="bg-brand-orange border-0 text-white w-100">
                            {t.careers.positions.applyNow}
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Benefits */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.careers.benefits.title}
            </h2>
            <p className="lead text-secondary">
              {t.careers.benefits.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col sm={6} lg={4} key={index} className="text-center">
                  <div className={`${benefit.bgColor} rounded d-flex align-items-center justify-content-center mx-auto mb-3`} style={{width: '64px', height: '64px'}}>
                    <IconComponent className="text-white" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className="h5 fw-semibold mb-2 text-primary">
                    {benefit.title}
                  </h3>
                  <p className="small text-muted">
                    {benefit.desc}
                  </p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Application Process */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.careers.process.title}
            </h2>
            <p className="lead text-secondary">
              {t.careers.process.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {processSteps.map((step) => (
              <Col sm={6} lg={3} key={step.step} className="text-center">
                <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '64px', height: '64px'}}>
                  <span className="text-white fs-3 fw-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className="h5 fw-semibold mb-2 text-primary">
                  {step.title}
                </h3>
                <p className="small text-muted">
                  {step.desc}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-md-4 bg-brand-orange text-white" style={{background: 'linear-gradient(to right, #fb923d, #ea580c)'}}>
        <Container>
          <div className="text-center">
            <h2 className="display-4 fw-bold mb-3">{t.careers.cta.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.careers.cta.subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Button size="lg" className="bg-white text-brand-orange border-0 px-5 py-3">
                {t.careers.cta.browseJobs}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white px-5 py-3">
                {t.careers.cta.submitCV}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className={`py-4 py-md-5 border-top transition-colors ${isDarkMode ? 'bg-brand-navy-dark border-secondary' : 'bg-white border-light'}`}>
        <Container>
          <div className="text-center">
            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                alt="DELVI Logo"
                style={{height: '32px', width: 'auto'}}
              />
            </div>
            <p className="text-muted">
              &copy; 2024 DELVI. {t.footer.copyright}
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
