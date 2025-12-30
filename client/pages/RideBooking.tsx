import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Sun, Moon, Home, ArrowLeft, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function RideBooking() {
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

  const features = [
    t.rideBooking.feature1,
    t.rideBooking.feature2,
    t.rideBooking.feature3,
    t.rideBooking.feature4,
    t.rideBooking.feature5,
  ];

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-brand-navy' : 'bg-light'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className={`sticky-top border-bottom transition-colors ${isDarkMode ? 'bg-brand-navy-light border-secondary' : 'bg-white border-light'}`} style={{zIndex: 1050}}>
        <Container fluid className="px-3 px-md-4">
          <Row className="align-items-center">
            <Col className="d-flex align-items-center gap-3">
              <Link to="/" className="text-decoration-none">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-colors ${isDarkMode ? 'text-white' : 'text-dark'}`}
                >
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

      {/* Main Content */}
      <Container className="py-5 py-md-4">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className={`border-0 shadow-lg transition-all ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
              <Card.Header className="text-center border-0 pb-4">
                <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4" style={{width: '80px', height: '80px'}}>
                  <MapPin className="text-white" style={{width: '40px', height: '40px'}} />
                </div>
                <h1 className="h2 fw-bold mb-3 text-primary">
                  {t.rideBooking.title}
                </h1>
              </Card.Header>
              <Card.Body className="d-flex flex-column gap-4">
                <p className="lead text-center text-secondary">
                  {t.rideBooking.subtitle}
                </p>

                <div className={`rounded p-4 ${isDarkMode ? 'bg-brand-navy-dark border border-secondary' : 'bg-light border border-secondary'}`}>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                    <Clock className={`${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '20px', height: '20px'}} />
                    <span className="fw-semibold text-primary">
                      {t.rideBooking.comingFeatures}
                    </span>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    {features.map((feature, index) => (
                      <li key={index} className="d-flex align-items-start gap-2">
                        <CheckCircle className={`flex-shrink-0 mt-1 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '20px', height: '20px'}} />
                        <span className="text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center pt-3">
                  <Link to="/" className="text-decoration-none flex-fill flex-sm-grow-0">
                    <Button 
                      size="lg" 
                      className="w-100 bg-brand-orange border-0 text-white"
                    >
                      <Home className="me-2" style={{width: '16px', height: '16px'}} />
                      {t.common.backToHome}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`transition-colors ${isDarkMode ? 'border-secondary text-white' : 'border-brand-navy text-brand-navy'}`}
                  >
                    {t.rideBooking.subscribe}
                  </Button>
                </div>

                <p className="small text-center pt-3 mb-0 text-muted">
                  {t.rideBooking.followDev}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
