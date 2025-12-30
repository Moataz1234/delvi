import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
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
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Founders() {
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

  // Founder data - could come from API/CMS in production
  const founders = [
    {
      name: "أحمد محمد العلي",
      role: "الرئيس التنفيذي والمؤسس",
      description: "رائد أعمال مخضرم بخبرة تزيد عن 15 عاماً في مجال التقنية والنقل. حاصل على ماجستير إدارة الأعمال من جامعة الملك فهد للبترول والمعادن، وله باع طويل في تطوير الحلول التقنية المبتكرة.",
      bgGradient: "from-brand-orange to-brand-orange-dark",
      iconBg: "bg-white",
      iconColor: "text-brand-orange",
      achievements: [
        "ماجستير إدارة الأعمال - جامعة الملك فهد",
        "مدير سابق في شركة أرامكو السعودية",
        "جائزة رائد الأعمال المتميز 2023"
      ],
    },
    {
      name: "سارة أحمد الزهراني",
      role: "المديرة التقنية والمؤسسة المشاركة",
      description: "خبيرة في هندسة البرمجيات والذكاء الاصطناعي بخبرة 12 عاماً. حاصلة على دكتوراه في علوم الحاسب من جامعة الملك سعود، ولها أبحاث منشورة في مجال الخوارزميات الذكية للنقل.",
      bgGradient: "from-brand-navy to-brand-navy-dark",
      iconBg: "bg-white",
      iconColor: "text-brand-navy",
      achievements: [
        "دكتوراه علوم الحاسب - جامعة الملك سعود",
        "مهندسة سابقة في Google",
        "جائزة أفضل مطورة في المنطقة 2022"
      ],
    },
  ];

  const coFounders = [
    {
      name: "محمد خالد النمر",
      role: "مدير العمليات",
      description: "خبير في إدارة العمليات وتطوير الأعمال، مع خبرة 10 سنوات في قطاع النقل واللوجستيات.",
      iconBg: "bg-brand-orange",
      badge: "MBA - جامعة الملك عبدالله",
      badgeColor: "bg-info",
    },
    {
      name: "نوره عبدالله القحطاني",
      role: "مديرة التسويق",
      description: "استراتيجية تسويق رقمي مبدعة، نجحت في بناء العلامة التجارية وتحقيق نمو سريع في قاعدة المستخدمين.",
      iconBg: "bg-brand-navy",
      badge: "ماجستير التسويق - جامعة الملك فيصل",
      badgeColor: "bg-success",
    },
    {
      name: "عبدالرحمن سعد الشمري",
      role: "مدير الموارد البشرية",
      description: "متخصص في إدارة المواهب وتطوير الفرق، بنى ثقافة شركة قوية تركز على الابتكار والتعاون.",
      iconBg: "bg-warning",
      badge: "ماجستير الموارد البشرية - جامعة الأمير سلطان",
      badgeColor: "bg-danger",
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
                <Users className="me-2" style={{width: '16px', height: '16px'}} />
                {t.navigation.founders}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.home.founders.title}
              </h1>
              <p className="lead text-light">
                {t.home.founders.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Founders */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <Row className="g-4 g-lg-5 justify-content-center">
            {founders.map((founder, index) => (
              <Col lg={6} key={index}>
                <Card className={`border-0 shadow-lg overflow-hidden ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-white'}`}>
                  <div className={`position-relative`} style={{height: '192px', background: founder.bgGradient.includes('orange') ? 'linear-gradient(to bottom right, #fb923d, #ea580c)' : 'linear-gradient(to bottom right, #1e3a8a, #1e293b)'}}>
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{width: '128px', height: '128px'}}>
                        {index === 0 ? (
                          <Users className="text-brand-orange" style={{width: '64px', height: '64px'}} />
                        ) : (
                          <Lightbulb className="text-brand-navy" style={{width: '64px', height: '64px'}} />
                        )}
                      </div>
                    </div>
                  </div>
                  <Card.Body className="p-4 p-md-5">
                    <div className="text-center mb-4">
                      <h2 className="h3 fw-bold mb-2 text-primary">
                        {founder.name}
                      </h2>
                      <p className="text-brand-orange fw-semibold">{founder.role}</p>
                    </div>
                    
                    <p className="mb-4 text-secondary">
                      {founder.description}
                    </p>

                    <div className="d-flex flex-column gap-3 mb-4">
                      {founder.achievements.map((achievement, i) => (
                        <div key={i} className="d-flex align-items-start gap-2">
                          <GraduationCap className={`flex-shrink-0 mt-1 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '20px', height: '20px'}} />
                          <span className="text-secondary">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="d-flex gap-2 justify-content-center">
                      <Button size="sm" variant="outline" className={`${isDarkMode ? 'border-secondary text-white' : 'border-secondary text-dark'}`}>
                        <Linkedin className="me-2" style={{width: '16px', height: '16px'}} />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className={`${isDarkMode ? 'border-secondary text-white' : 'border-secondary text-dark'}`}>
                        <Twitter className="me-2" style={{width: '16px', height: '16px'}} />
                        Twitter
                      </Button>
                      <Button size="sm" variant="outline" className={`${isDarkMode ? 'border-secondary text-white' : 'border-secondary text-dark'}`}>
                        <Mail className="me-2" style={{width: '16px', height: '16px'}} />
                        {locale === 'ar' ? 'البريد' : 'Email'}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Co-Founders */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.founders.coFounders.title}
            </h2>
            <p className="lead text-secondary">
              {t.founders.coFounders.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {coFounders.map((coFounder, index) => (
              <Col sm={6} lg={4} key={index}>
                <Card className={`border-0 shadow transition-all h-100 ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                  <Card.Body className="p-4 text-center">
                    <div className={`${coFounder.iconBg} rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`} style={{width: '80px', height: '80px'}}>
                      {index === 0 ? (
                        <Building className="text-white" style={{width: '40px', height: '40px'}} />
                      ) : index === 1 ? (
                        <Award className="text-white" style={{width: '40px', height: '40px'}} />
                      ) : (
                        <Users className="text-white" style={{width: '40px', height: '40px'}} />
                      )}
                    </div>
                    <h3 className="h4 fw-bold mb-2 text-primary">
                      {coFounder.name}
                    </h3>
                    <p className="text-brand-orange fw-semibold mb-3">{coFounder.role}</p>
                    <p className="small text-muted">
                      {coFounder.description}
                    </p>
                    <Badge className={coFounder.badgeColor}>
                      {coFounder.badge}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Vision & Journey */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy' : 'bg-light'}`}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3 text-primary">
                  {t.founders.vision.title}
                </h2>
                <p className="lead text-secondary">
                  {t.founders.vision.subtitle}
                </p>
              </div>

              <Card className={`border-0 shadow ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="p-4 p-md-5">
                  <Row className="align-items-center g-4">
                    <Col md={6}>
                      <h3 className="h3 fw-bold mb-3 text-primary">
                        {t.founders.vision.fromIdea}
                      </h3>
                      <p className="mb-3 text-secondary">
                        {t.founders.vision.p1}
                      </p>
                      <p className="mb-0 text-secondary">
                        {t.founders.vision.p2}
                      </p>
                    </Col>
                    <Col md={6}>
                      <Card className="bg-brand-orange border-0">
                        <Card.Body className="p-4 text-white">
                          <h4 className="h4 fw-bold mb-3">{t.founders.vision.milestones}</h4>
                          <div className="d-flex flex-column gap-2">
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded-circle me-2 flex-shrink-0" style={{width: '8px', height: '8px'}}></div>
                              <span>{t.founders.vision.milestone1}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded-circle me-2 flex-shrink-0" style={{width: '8px', height: '8px'}}></div>
                              <span>{t.founders.vision.milestone2}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded-circle me-2 flex-shrink-0" style={{width: '8px', height: '8px'}}></div>
                              <span>{t.founders.vision.milestone3}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded-circle me-2 flex-shrink-0" style={{width: '8px', height: '8px'}}></div>
                              <span>{t.founders.vision.milestone4}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded-circle me-2 flex-shrink-0" style={{width: '8px', height: '8px'}}></div>
                              <span>{t.founders.vision.milestone5}</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="bg-white rounded-circle me-2 flex-shrink-0" style={{width: '8px', height: '8px'}}></div>
                              <span>{t.founders.vision.milestone6}</span>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-md-4 bg-brand-orange text-white" style={{background: 'linear-gradient(to right, #fb923d, #ea580c)'}}>
        <Container>
          <div className="text-center">
            <h2 className="display-4 fw-bold mb-3">{t.founders.cta.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.founders.cta.subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/careers" className="text-decoration-none">
                <Button size="lg" className="bg-white text-brand-orange border-0 px-5 py-3">
                  {t.founders.cta.joinTeam}
                </Button>
              </Link>
              <Link to="/book-ride" className="text-decoration-none">
                <Button size="lg" variant="outline" className="border-white text-white px-5 py-3">
                  {t.founders.cta.bePartOfSuccess}
                </Button>
              </Link>
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
