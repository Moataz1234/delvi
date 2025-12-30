import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
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
  Sun,
  Moon
} from "lucide-react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

export default function WhyUs() {
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

  const reasons = [
    {
      icon: CheckCircle,
      bgColor: "bg-success",
      iconColor: "text-success",
      title: t.whyUs.reasons.fastest.title,
      desc: t.whyUs.reasons.fastest.desc,
    },
    {
      icon: Shield,
      bgColor: "bg-info",
      iconColor: "text-info",
      title: t.whyUs.reasons.security.title,
      desc: t.whyUs.reasons.security.desc,
    },
    {
      icon: Star,
      bgColor: "bg-warning",
      iconColor: "text-warning",
      title: t.whyUs.reasons.quality.title,
      desc: t.whyUs.reasons.quality.desc,
    },
    {
      icon: Heart,
      bgColor: "bg-danger",
      iconColor: "text-danger",
      title: t.whyUs.reasons.service.title,
      desc: t.whyUs.reasons.service.desc,
    },
  ];

  const testimonials = [
    {
      text: t.whyUs.testimonials.testimonial1,
      name: t.whyUs.testimonials.name1,
      location: t.whyUs.testimonials.location1,
    },
    {
      text: t.whyUs.testimonials.testimonial2,
      name: t.whyUs.testimonials.name2,
      location: t.whyUs.testimonials.location2,
    },
    {
      text: t.whyUs.testimonials.testimonial3,
      name: t.whyUs.testimonials.name3,
      location: t.whyUs.testimonials.location3,
    },
  ];

  const awards = [
    {
      icon: Award,
      bgColor: "bg-warning",
      iconColor: "text-warning",
      title: t.whyUs.awards.bestApp,
      desc: t.whyUs.awards.bestAppDesc,
    },
    {
      icon: Shield,
      bgColor: "bg-info",
      iconColor: "text-info",
      title: t.whyUs.awards.safetyCert,
      desc: t.whyUs.awards.safetyCertDesc,
    },
    {
      icon: TrendingUp,
      bgColor: "bg-success",
      iconColor: "text-success",
      title: t.whyUs.awards.fastestGrowth,
      desc: t.whyUs.awards.fastestGrowthDesc,
    },
    {
      icon: Users,
      bgColor: "bg-danger",
      iconColor: "text-danger",
      title: t.whyUs.awards.userChoice,
      desc: t.whyUs.awards.userChoiceDesc,
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
                <Target className="me-2" style={{width: '16px', height: '16px'}} />
                {t.whyUs.hero.titleHighlight}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.whyUs.hero.title}
              </h1>
              <p className="lead text-light">
                {t.whyUs.hero.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Reasons */}
      <section className="py-5 py-md-4">
        <Container>
          <Row className="g-4 g-lg-5 align-items-center justify-content-center">
            <Col lg={6}>
              <h2 className="display-5 fw-bold mb-4 text-primary">
                {t.whyUs.reasons.title}
              </h2>
              <Row className="g-4">
                <Col xs={6} className="text-center">
                  <div className={`fs-2 fw-bold mb-2 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`}>2M+</div>
                  <div className="text-secondary">{t.whyUs.reasons.satisfiedUsers}</div>
                </Col>
                <Col xs={6} className="text-center">
                  <div className={`fs-2 fw-bold mb-2 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`}>50K+</div>
                  <div className="text-secondary">{t.whyUs.reasons.certifiedDrivers}</div>
                </Col>
                <Col xs={6} className="text-center">
                  <div className={`fs-2 fw-bold mb-2 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`}>15</div>
                  <div className="text-secondary">{t.whyUs.reasons.provinces}</div>
                </Col>
                <Col xs={6} className="text-center">
                  <div className={`fs-2 fw-bold mb-2 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`}>4.8★</div>
                  <div className="text-secondary">{t.whyUs.reasons.appRating}</div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Card className={`border-0 shadow-lg ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="p-4 p-md-5">
                  <div className="d-flex flex-column gap-4">
                    {reasons.map((reason, index) => {
                      const IconComponent = reason.icon;
                      return (
                        <div key={index} className="d-flex align-items-start gap-3">
                          <div className={`${reason.bgColor} rounded-circle d-flex align-items-center justify-content-center flex-shrink-0`} style={{width: '48px', height: '48px'}}>
                            <IconComponent className={`text-white`} style={{width: '24px', height: '24px'}} />
                          </div>
                          <div className="flex-grow-1">
                            <h3 className="fw-semibold mb-1 text-primary">
                              {reason.title}
                            </h3>
                            <p className="small mb-0 text-secondary">
                              {reason.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.whyUs.comparison.title}
            </h2>
            <p className="lead text-secondary">
              {t.whyUs.comparison.subtitle}
            </p>
          </div>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className={`border ${isDarkMode ? 'bg-brand-navy-light border-secondary' : 'bg-white border-secondary'}`}>
                <Table className="mb-0">
                  <thead>
                    <tr>
                      <th className={`border-bottom-2 ${isDarkMode ? 'text-white border-brand-orange' : 'text-brand-navy border-brand-orange'}`}></th>
                      <th className={`text-center border-bottom-2 bg-brand-orange text-white border-brand-orange`}>DELVI</th>
                      <th className={`text-center border-bottom-2 ${isDarkMode ? 'bg-secondary text-white border-secondary' : 'bg-light text-dark border-secondary'}`}>
                        {t.whyUs.comparison.competitorA}
                      </th>
                      <th className={`text-center border-bottom-2 ${isDarkMode ? 'bg-secondary text-white border-secondary' : 'bg-light text-dark border-secondary'}`}>
                        {t.whyUs.comparison.competitorB}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-primary">{t.whyUs.comparison.waitTime}</td>
                      <td className={`text-center ${isDarkMode ? 'bg-success bg-opacity-25 text-success' : 'bg-success bg-opacity-10 text-success'}`}>
                        <span className="fw-bold">{t.whyUs.comparison.waitTimeValue}</span>
                      </td>
                      <td className="text-secondary">{t.whyUs.comparison.waitTimeCompA}</td>
                      <td className="text-secondary">{t.whyUs.comparison.waitTimeCompB}</td>
                    </tr>
                    <tr>
                      <td className="text-primary">{t.whyUs.comparison.prices}</td>
                      <td className={`text-center ${isDarkMode ? 'bg-success bg-opacity-25 text-success' : 'bg-success bg-opacity-10 text-success'}`}>
                        <span className="fw-bold">{t.whyUs.comparison.lowest}</span>
                      </td>
                      <td className="text-secondary">{t.whyUs.comparison.priceHigher20}</td>
                      <td className="text-secondary">{t.whyUs.comparison.priceHigher35}</td>
                    </tr>
                    <tr>
                      <td className="text-primary">{t.whyUs.comparison.customerService}</td>
                      <td className={`text-center ${isDarkMode ? 'bg-success bg-opacity-25 text-success' : 'bg-success bg-opacity-10 text-success'}`}>
                        <span className="fw-bold">24/7</span>
                      </td>
                      <td className="text-secondary">{t.whyUs.comparison.limitedHours}</td>
                      <td className="text-secondary">{t.whyUs.comparison.limitedHours}</td>
                    </tr>
                    <tr>
                      <td className="text-primary">{t.whyUs.comparison.rating}</td>
                      <td className={`text-center ${isDarkMode ? 'bg-success bg-opacity-25 text-success' : 'bg-success bg-opacity-10 text-success'}`}>
                        <span className="fw-bold">4.8★</span>
                      </td>
                      <td className="text-secondary">4.2★</td>
                      <td className="text-secondary">3.9★</td>
                    </tr>
                    <tr>
                      <td className="text-primary">{t.whyUs.comparison.coverage}</td>
                      <td className={`text-center ${isDarkMode ? 'bg-success bg-opacity-25 text-success' : 'bg-success bg-opacity-10 text-success'}`}>
                        <span className="fw-bold">{t.whyUs.comparison.provinces15}</span>
                      </td>
                      <td className="text-secondary">{t.whyUs.comparison.provinces8}</td>
                      <td className="text-secondary">{t.whyUs.comparison.provinces5}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.whyUs.testimonials.title}
            </h2>
            <p className="lead text-secondary">
              {t.whyUs.testimonials.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col sm={6} lg={4} key={index}>
                <Card className={`border-0 shadow transition-all h-100 ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                  <Card.Body className="p-4 p-md-5">
                    <div className="d-flex align-items-center mb-3">
                      <div className="d-flex text-warning">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="me-1" style={{width: '20px', height: '20px', fill: 'currentColor'}} />
                        ))}
                      </div>
                      <span className="ms-2 text-muted">5.0</span>
                    </div>
                    <p className="mb-3 text-secondary">
                      "{testimonial.text}"
                    </p>
                    <div className="fw-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="small text-muted">
                      {testimonial.location}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Awards Section */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.whyUs.awards.title}
            </h2>
            <p className="lead text-secondary">
              {t.whyUs.awards.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Col sm={6} lg={3} key={index} className="text-center">
                  <div className={`${award.bgColor} rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3`} style={{width: '64px', height: '64px'}}>
                    <IconComponent className="text-white" style={{width: '32px', height: '32px'}} />
                  </div>
                  <h3 className={`fw-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-brand-navy'}`}>
                    {award.title}
                  </h3>
                  <p className="small text-muted">
                    {award.desc}
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
            <h2 className="display-4 fw-bold mb-3">{t.whyUs.cta.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.whyUs.cta.subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/book-ride" className="text-decoration-none">
                <Button size="lg" className="bg-white text-brand-orange border-0 px-5 py-3">
                  {t.whyUs.cta.bookFirst}
                </Button>
              </Link>
              <Link to="/features" className="text-decoration-none">
                <Button size="lg" variant="outline" className="border-white text-white px-5 py-3">
                  {t.whyUs.cta.learnMore}
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
