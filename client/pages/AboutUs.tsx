import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
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
import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutUs() {
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

  const storyTimeline = [
    {
      year: t.aboutUs.story.year2019,
      icon: Clock,
      description: t.aboutUs.story.year2019Desc,
    },
    {
      year: t.aboutUs.story.year2020,
      icon: Building,
      description: t.aboutUs.story.year2020Desc,
    },
    {
      year: t.aboutUs.story.year2021,
      icon: Award,
      description: t.aboutUs.story.year2021Desc,
    },
    {
      year: t.aboutUs.story.year2024,
      icon: Users,
      description: t.aboutUs.story.year2024Desc,
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
                {t.general.aboutUs}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.aboutUs.hero.title}
              </h1>
              <p className="lead text-light">
                {t.aboutUs.hero.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-5 py-md-4">
        <Container>
          <Row className="g-4 g-lg-5">
            <Col sm={6} lg={4}>
              <Card className={`h-100 border-0 shadow transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="text-center p-4 p-md-5">
                  <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <Target className="text-white" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-primary">
                    {t.aboutUs.mission.title}
                  </h3>
                  <p className="text-secondary">
                    {t.aboutUs.mission.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} lg={4}>
              <Card className={`h-100 border-0 shadow transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="text-center p-4 p-md-5">
                  <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <Globe className="text-white" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-primary">
                    {t.aboutUs.vision.title}
                  </h3>
                  <p className="text-secondary">
                    {t.aboutUs.vision.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} lg={4}>
              <Card className={`h-100 border-0 shadow transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="text-center p-4 p-md-5">
                  <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                    <Heart className="text-white" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className="h4 fw-bold mb-3 text-primary">
                    {t.aboutUs.values.title}
                  </h3>
                  <p className="text-secondary">
                    {t.aboutUs.values.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-3 text-primary">
                  {t.aboutUs.story.title}
                </h2>
                <p className="lead text-secondary">
                  {t.aboutUs.story.subtitle}
                </p>
              </div>

              <Row className="g-4 g-lg-5 align-items-start">
                <Col md={6}>
                  <div className="d-flex flex-column gap-4">
                    {storyTimeline.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="d-flex align-items-start gap-3">
                          <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1" style={{width: '40px', height: '40px'}}>
                            <IconComponent className="text-white" style={{width: '20px', height: '20px'}} />
                          </div>
                          <div className="flex-grow-1">
                            <h3 className="h5 fw-semibold mb-2 text-primary">
                              {item.year}
                            </h3>
                            <p className="text-secondary">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Col>

                <Col md={6}>
                  <Card className="bg-brand-orange border-0 shadow-lg">
                    <Card.Body className="p-4 p-md-5 text-white">
                      <h3 className="h3 fw-bold mb-4">{t.aboutUs.story.achievements}</h3>
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex justify-content-between align-items-center pb-3 border-bottom border-white border-opacity-25">
                          <span className="text-white text-opacity-90">{t.aboutUs.story.completedTrips}</span>
                          <span className="fw-bold fs-5">+10M</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pb-3 border-bottom border-white border-opacity-25">
                          <span className="text-white text-opacity-90">{t.aboutUs.story.appRating}</span>
                          <span className="fw-bold fs-5">4.8/5</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pb-3 border-bottom border-white border-opacity-25">
                          <span className="text-white text-opacity-90">{t.aboutUs.story.provinces}</span>
                          <span className="fw-bold fs-5">15</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-white text-opacity-90">{t.aboutUs.story.satisfaction}</span>
                          <span className="fw-bold fs-5">96%</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Values */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.aboutUs.teamValues.title}
            </h2>
            <p className="lead text-secondary">
              {t.aboutUs.teamValues.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            <Col sm={6} lg={3} className="text-center">
              <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '56px', height: '56px'}}>
                <Shield className="text-white" style={{width: '28px', height: '28px'}} />
              </div>
              <h3 className="h5 fw-semibold mb-2 text-primary">
                {t.aboutUs.teamValues.safety}
              </h3>
              <p className="small text-muted">
                {t.aboutUs.teamValues.safetyDesc}
              </p>
            </Col>

            <Col sm={6} lg={3} className="text-center">
              <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '56px', height: '56px'}}>
                <Users className="text-white" style={{width: '28px', height: '28px'}} />
              </div>
              <h3 className="h5 fw-semibold mb-2 text-primary">
                {t.aboutUs.teamValues.customerService}
              </h3>
              <p className="small text-muted">
                {t.aboutUs.teamValues.customerServiceDesc}
              </p>
            </Col>

            <Col sm={6} lg={3} className="text-center">
              <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '56px', height: '56px'}}>
                <Target className="text-white" style={{width: '28px', height: '28px'}} />
              </div>
              <h3 className="h5 fw-semibold mb-2 text-primary">
                {t.aboutUs.teamValues.quality}
              </h3>
              <p className="small text-muted">
                {t.aboutUs.teamValues.qualityDesc}
              </p>
            </Col>

            <Col sm={6} lg={3} className="text-center">
              <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '56px', height: '56px'}}>
                <Globe className="text-white" style={{width: '28px', height: '28px'}} />
              </div>
              <h3 className="h5 fw-semibold mb-2 text-primary">
                {t.aboutUs.teamValues.innovation}
              </h3>
              <p className="small text-muted">
                {t.aboutUs.teamValues.innovationDesc}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-md-4 bg-brand-orange text-white" style={{background: 'linear-gradient(to right, #fb923d, #ea580c)'}}>
        <Container>
          <div className="text-center">
            <h2 className="display-4 fw-bold mb-3">{t.aboutUs.cta.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.aboutUs.cta.subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/careers" className="text-decoration-none">
                <Button size="lg" className="bg-white text-brand-orange border-0 px-4 py-3">
                  {t.aboutUs.cta.joinTeam}
                </Button>
              </Link>
              <Link to="/book-ride" className="text-decoration-none">
                <Button size="lg" variant="outline" className="border-white text-white px-4 py-3">
                  {t.aboutUs.cta.startJourney}
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
