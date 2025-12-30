import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
  ArrowLeft, 
  Calendar,
  Clock,
  User,
  TrendingUp,
  MapPin,
  Award,
  Zap,
  Sun,
  Moon
} from "lucide-react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

export default function News() {
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

  // News data - could come from API/CMS in production
  const featuredNews = [
    {
      type: "urgent",
      title: "DELVI تتوسع لتشمل 5 محافظات جديدة",
      description: "نعلن بفخر عن توسع خدماتنا لتشمل 5 محافظات جديدة، مما يرفع إجمالي المناطق المخدومة إلى 15 محافظة عبر المملكة.",
      time: t.news.featured.daysAgo,
      icon: TrendingUp,
      gradient: "from-brand-orange to-brand-orange-dark",
    },
    {
      type: "awards",
      title: "DELVI تفوز بجائزة أفضل تطبيق نقل لعام 2024",
      description: "حصل التطبيق على الجائزة من معهد التقنية العربي تقديراً للابتكار والجودة.",
      time: t.news.timeAgo.week,
      icon: Award,
      color: "bg-info",
    },
    {
      type: "updates",
      title: "إطلاق ميزة الدفع بالمحفظة الرقمية",
      description: "يمكن الآن للمستخدمين الدفع باستخدام المحافظ الرقمية المختلفة.",
      time: t.news.timeAgo.weeks2,
      icon: Zap,
      color: "bg-success",
    },
    {
      type: "partnerships",
      title: "شراكة جديدة مع محطات الوقود الكبرى",
      description: "خصومات حصرية للسائقين المسجلين في شبكة محطات الوقود الشريكة.",
      time: t.news.timeAgo.weeks3,
      icon: MapPin,
      color: "bg-warning",
    },
  ];

  const allNews = [
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
  ];

  const getCategoryBadge = (type: string) => {
    switch(type) {
      case "urgent":
        return <Badge className="bg-danger">{t.news.featured.urgent}</Badge>;
      case "awards":
        return <Badge className="bg-info">{t.news.categories.awards}</Badge>;
      case "updates":
        return <Badge className="bg-success">{t.news.categories.updates}</Badge>;
      case "partnerships":
        return <Badge className="bg-warning text-dark">{t.news.categories.partnerships}</Badge>;
      default:
        return null;
    }
  };

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
                <Calendar className="me-2" style={{width: '16px', height: '16px'}} />
                {t.navigation.news}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.news.hero.title}
              </h1>
              <p className="lead text-light">
                {t.news.hero.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured News */}
      <section className="py-5 py-md-4">
        <Container>
          <Row className="g-4 g-lg-5 justify-content-center">
            <Col lg={6}>
              <Card className={`border-0 shadow-lg overflow-hidden ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <div className="bg-brand-orange position-relative" style={{height: '192px', background: 'linear-gradient(to bottom right, #fb923d, #ea580c)'}}>
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <TrendingUp className="text-white" style={{width: '64px', height: '64px'}} />
                  </div>
                </div>
                <Card.Body className="p-4 p-md-5">
                  {getCategoryBadge(featuredNews[0].type)}
                  <h2 className="h3 fw-bold mt-3 mb-3 text-primary">
                    {featuredNews[0].title}
                  </h2>
                  <p className="mb-4 text-secondary">
                    {featuredNews[0].description}
                  </p>
                  <div className="d-flex align-items-center justify-content-between small">
                    <div className="d-flex align-items-center text-muted">
                      <User className="me-1" style={{width: '16px', height: '16px'}} />
                      {t.news.featured.team}
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <Clock className="me-1" style={{width: '16px', height: '16px'}} />
                      {featuredNews[0].time}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <div className="d-flex flex-column gap-4">
                {featuredNews.slice(1).map((news, index) => {
                  const IconComponent = news.icon;
                  return (
                    <Card key={index} className={`border-0 shadow transition-all ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                      <Card.Body className="p-4">
                        <div className="d-flex align-items-start gap-3">
                          <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '64px', height: '64px'}}>
                            <IconComponent className="text-white" style={{width: '32px', height: '32px'}} />
                          </div>
                          <div className="flex-grow-1">
                            {getCategoryBadge(news.type)}
                            <h3 className="h5 fw-semibold mt-2 mb-2 text-primary">
                              {news.title}
                            </h3>
                            <p className="small mb-2 text-secondary">
                              {news.description}
                            </p>
                            <div className="small text-muted">
                              {news.time}
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* All News */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <h2 className="h2 fw-bold mb-5 text-center text-primary">
            {t.news.allNews.title}
          </h2>
          
          <Row className="g-4 g-lg-5 justify-content-center">
            {allNews.map((news, index) => (
              <Col sm={6} lg={4} key={index}>
                <Card className={`border-0 shadow transition-all h-100 ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-white'}`}>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-2">
                      <Calendar className={`me-2 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '16px', height: '16px'}} />
                      <span className="small text-muted">
                        {news.date}
                      </span>
                    </div>
                    <Badge className={`mb-3 ${isDarkMode ? 'bg-secondary' : 'bg-light text-dark'}`}>
                      {news.category}
                    </Badge>
                    <h3 className="h5 fw-semibold mb-2 text-primary">
                      {news.title}
                    </h3>
                    <p className="small text-muted">
                      {news.excerpt}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="py-5 py-md-4 bg-brand-orange text-white" style={{background: 'linear-gradient(to right, #fb923d, #ea580c)'}}>
        <Container>
          <div className="text-center">
            <h2 className="display-4 fw-bold mb-3">{t.news.newsletter.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.news.newsletter.subtitle}</p>
            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Form.Control 
                    type="email" 
                    placeholder={t.news.newsletter.emailPlaceholder}
                    className="flex-grow-1"
                  />
                  <Button className="bg-white text-brand-orange border-0 px-4">
                    {t.buttons.subscribe}
                  </Button>
                </div>
              </Col>
            </Row>
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
