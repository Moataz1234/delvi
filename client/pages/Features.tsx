import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
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
  Wifi,
  Sun,
  Moon
} from "lucide-react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export default function Features() {
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

  const mainFeatures = [
    {
      icon: Clock,
      title: t.features.main.fastArrival.title,
      description: t.features.main.fastArrival.desc,
      points: [
        t.features.main.fastArrival.point1,
        t.features.main.fastArrival.point2,
        t.features.main.fastArrival.point3,
      ],
    },
    {
      icon: Shield,
      title: t.features.main.advancedSecurity.title,
      description: t.features.main.advancedSecurity.desc,
      points: [
        t.features.main.advancedSecurity.point1,
        t.features.main.advancedSecurity.point2,
        t.features.main.advancedSecurity.point3,
      ],
    },
    {
      icon: DollarSign,
      title: t.features.main.fairPricing.title,
      description: t.features.main.fairPricing.desc,
      points: [
        t.features.main.fairPricing.point1,
        t.features.main.fairPricing.point2,
        t.features.main.fairPricing.point3,
      ],
    },
    {
      icon: Navigation,
      title: t.features.main.liveTracking.title,
      description: t.features.main.liveTracking.desc,
      points: [
        t.features.main.liveTracking.point1,
        t.features.main.liveTracking.point2,
        t.features.main.liveTracking.point3,
      ],
    },
    {
      icon: CreditCard,
      title: t.features.main.flexiblePayment.title,
      description: t.features.main.flexiblePayment.desc,
      points: [
        t.features.main.flexiblePayment.point1,
        t.features.main.flexiblePayment.point2,
        t.features.main.flexiblePayment.point3,
      ],
    },
    {
      icon: HeadphonesIcon,
      title: t.features.main.support247.title,
      description: t.features.main.support247.desc,
      points: [
        t.features.main.support247.point1,
        t.features.main.support247.point2,
        t.features.main.support247.point3,
      ],
    },
  ];

  const advancedFeatures = [
    {
      icon: Smartphone,
      title: t.features.advanced.smartApp.title,
      description: t.features.advanced.smartApp.desc,
    },
    {
      icon: Star,
      title: t.features.advanced.ratingSystem.title,
      description: t.features.advanced.ratingSystem.desc,
    },
    {
      icon: MessageSquare,
      title: t.features.advanced.directCommunication.title,
      description: t.features.advanced.directCommunication.desc,
    },
    {
      icon: Camera,
      title: t.features.advanced.visualVerification.title,
      description: t.features.advanced.visualVerification.desc,
    },
  ];

  const driverFeatures = [
    {
      icon: DollarSign,
      title: t.features.drivers.fairIncome.title,
      description: t.features.drivers.fairIncome.desc,
    },
    {
      icon: Wifi,
      title: t.features.drivers.advancedApp.title,
      description: t.features.drivers.advancedApp.desc,
    },
    {
      icon: Users,
      title: t.features.drivers.supportiveCommunity.title,
      description: t.features.drivers.supportiveCommunity.desc,
    },
    {
      icon: CheckCircle,
      title: t.features.drivers.fullFlexibility.title,
      description: t.features.drivers.fullFlexibility.desc,
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
                <Zap className="me-2" style={{width: '16px', height: '16px'}} />
                {t.navigation.features}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.features.hero.title}
              </h1>
              <p className="lead text-light">
                {t.features.hero.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Features */}
      <section className="py-5 py-md-4">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.features.main.title}
            </h2>
            <p className="lead text-secondary">
              {t.features.main.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5">
            {mainFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Col sm={6} lg={4} key={index}>
                  <Card className={`h-100 border-0 shadow transition-all ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                    <Card.Body className="p-4 p-md-5">
                      <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center mb-4" style={{width: '56px', height: '56px'}}>
                        <IconComponent className="text-white" style={{width: '28px', height: '28px'}} />
                      </div>
                      <h3 className="h5 fw-bold mb-3 text-primary">
                        {feature.title}
                      </h3>
                      <p className="mb-3 text-secondary">
                        {feature.description}
                      </p>
                      <ul className="small list-unstyled d-flex flex-column gap-2 mb-0 text-muted">
                        {feature.points.map((point, i) => (
                          <li key={i} className="d-flex align-items-start">
                            <CheckCircle className={`flex-shrink-0 me-2 mt-1 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '16px', height: '16px'}} />
                            <span>{point.replace('• ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Advanced Features */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.features.advanced.title}
            </h2>
            <p className="lead text-secondary">
              {t.features.advanced.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 align-items-center justify-content-center">
            <Col md={6}>
              <div className="d-flex flex-column gap-4 gap-lg-5">
                {advancedFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="d-flex align-items-start gap-3">
                      <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center flex-shrink-0" style={{width: '48px', height: '48px'}}>
                        <IconComponent className="text-white" style={{width: '24px', height: '24px'}} />
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="h5 fw-semibold mb-2 text-primary">
                          {feature.title}
                        </h3>
                        <p className="text-secondary">
                          {feature.description}
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
                  <h3 className="h3 fw-bold mb-4">{t.features.advanced.stats.title}</h3>
                  <div className="d-flex flex-column gap-4">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>{t.features.advanced.stats.satisfaction}</span>
                        <span className="fw-bold">98%</span>
                      </div>
                      <div className="progress" style={{height: '8px'}}>
                        <div className="progress-bar bg-white" role="progressbar" style={{width: '98%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>{t.features.advanced.stats.accuracy}</span>
                        <span className="fw-bold">95%</span>
                      </div>
                      <div className="progress bg-white bg-opacity-20" style={{height: '8px'}}>
                        <div className="progress-bar bg-white" role="progressbar" style={{width: '95%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>{t.features.advanced.stats.safety}</span>
                        <span className="fw-bold">99%</span>
                      </div>
                      <div className="progress bg-white bg-opacity-20" style={{height: '8px'}}>
                        <div className="progress-bar bg-white" role="progressbar" style={{width: '99%'}}></div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>{t.features.advanced.stats.responsiveness}</span>
                        <span className="fw-bold">92%</span>
                      </div>
                      <div className="progress bg-white bg-opacity-20" style={{height: '8px'}}>
                        <div className="progress-bar bg-white" role="progressbar" style={{width: '92%'}}></div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* For Drivers Section */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.features.drivers.title}
            </h2>
            <p className="lead text-secondary">
              {t.features.drivers.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {driverFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Col sm={6} lg={3} key={index} className="text-center">
                  <div className="bg-brand-orange rounded d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '64px', height: '64px'}}>
                    <IconComponent className="text-white" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className="h5 fw-semibold mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="small text-muted">
                    {feature.description}
                  </p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 py-md-4 bg-brand-orange text-white" style={{background: 'linear-gradient(to right, #fb923d, #ea580c)'}}>
        <Container>
          <div className="text-center">
            <h2 className="display-4 fw-bold mb-3">{t.features.cta.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.features.cta.subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/book-ride" className="text-decoration-none">
                <Button size="lg" className="bg-white text-brand-orange border-0 px-5 py-3">
                  {t.features.cta.bookRide}
                </Button>
              </Link>
              <Link to="/careers" className="text-decoration-none">
                <Button size="lg" variant="outline" className="border-white text-white px-5 py-3">
                  {t.features.cta.joinDriver}
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
