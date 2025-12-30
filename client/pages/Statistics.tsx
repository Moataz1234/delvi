import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { 
  ArrowLeft, 
  Users,
  MapPin,
  TrendingUp,
  Clock,
  Star,
  BarChart3,
  Car,
  Activity,
  Sun,
  Moon
} from "lucide-react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Statistics() {
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

  // Province data - could come from API in production
  const provinces = [
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
  ];

  const mainStats = [
    {
      value: "2,147,823",
      label: t.statistics.main.totalClients,
      change: "+12%",
      changeLabel: t.statistics.main.thisMonth,
      gradient: "from-brand-orange to-brand-orange-dark",
      icon: Users,
    },
    {
      value: "52,841",
      label: t.statistics.main.certifiedCaptains,
      change: "+8%",
      changeLabel: t.statistics.main.thisMonth,
      gradient: "from-brand-navy to-brand-navy-dark",
      icon: Car,
    },
    {
      value: "15",
      label: t.statistics.main.servedProvinces,
      change: "+5",
      changeLabel: t.statistics.main.newProvinces,
      gradient: "from-green-500 to-green-600",
      icon: MapPin,
    },
    {
      value: "12.4M",
      label: t.statistics.main.completedTrips,
      change: "",
      changeLabel: t.statistics.main.sinceLaunch,
      gradient: "from-purple-500 to-purple-600",
      icon: TrendingUp,
    },
  ];

  const clientStats = [
    {
      label: t.statistics.detailed.clients.dailyActive,
      value: "425,678",
      percentage: 85,
    },
    {
      label: t.statistics.detailed.clients.weeklyActive,
      value: "1,234,567",
      percentage: 75,
    },
    {
      label: t.statistics.detailed.clients.avgMonthly,
      value: "3.2",
      unit: locale === 'ar' ? 'رحلة' : 'trips',
      percentage: 65,
    },
  ];

  const captainStats = [
    {
      label: t.statistics.detailed.captains.dailyActive,
      value: "38,945",
      percentage: 90,
    },
    {
      label: t.statistics.detailed.captains.avgRating,
      value: "4.8",
      unit: "⭐",
      percentage: 96,
    },
    {
      label: t.statistics.detailed.captains.avgDaily,
      value: "15.6",
      unit: locale === 'ar' ? 'رحلة' : 'trips',
      percentage: 78,
    },
  ];

  const performanceMetrics = [
    {
      icon: Clock,
      title: t.statistics.performance.response.title,
      metrics: [
        { label: t.statistics.performance.response.avgWait, value: "4.2 دقيقة" },
        { label: t.statistics.performance.response.fastest, value: "45 ثانية" },
        { label: t.statistics.performance.response.quickResponse, value: "92%" },
      ],
    },
    {
      icon: Star,
      title: t.statistics.performance.satisfaction.title,
      metrics: [
        { label: t.statistics.performance.satisfaction.avgRating, value: "4.8/5" },
        { label: t.statistics.performance.satisfaction.satisfactionRate, value: "96%" },
        { label: t.statistics.performance.satisfaction.repeat, value: "89%" },
      ],
    },
    {
      icon: Activity,
      title: t.statistics.performance.efficiency.title,
      metrics: [
        { label: t.statistics.performance.efficiency.completion, value: "98.5%" },
        { label: t.statistics.performance.efficiency.timing, value: "94%" },
        { label: t.statistics.performance.efficiency.safety, value: "99.9%" },
      ],
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
                <BarChart3 className="me-2" style={{width: '16px', height: '16px'}} />
                {t.navigation.statistics}
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                {t.statistics.hero.title}
              </h1>
              <p className="lead text-light">
                {t.statistics.hero.subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Statistics */}
      <section className="py-5 py-md-4">
        <Container>
          <Row className="g-4 g-lg-5 mb-5">
            {mainStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Col sm={6} lg={3} key={index}>
                  <Card className={`border-0 shadow-lg text-white overflow-hidden ${stat.gradient.includes('orange') ? 'bg-brand-orange' : stat.gradient.includes('navy') ? 'bg-brand-navy' : stat.gradient.includes('green') ? 'bg-success' : 'bg-info'}`} style={{background: stat.gradient.includes('from-') ? `linear-gradient(to bottom right, ${stat.gradient.replace('from-', '').replace(' to-', ', ')})` : undefined}}>
                    <Card.Body className="p-4 p-md-5 text-center">
                      <IconComponent className="mx-auto mb-3" style={{width: '48px', height: '48px'}} />
                      <div className="fs-2 fw-bold mb-2">{stat.value}</div>
                      <div className="text-white text-opacity-90 small">{stat.label}</div>
                      {stat.change && (
                        <div className="small text-white text-opacity-70 mt-2">
                          {stat.change} {stat.changeLabel}
                        </div>
                      )}
                      {!stat.change && (
                        <div className="small text-white text-opacity-70 mt-2">
                          {stat.changeLabel}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {/* Detailed Statistics */}
          <Row className="g-4 g-lg-5 justify-content-center">
            <Col lg={5}>
              <Card className={`border-0 shadow ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="p-4 p-md-5">
                  <h3 className="h4 fw-bold mb-4 d-flex align-items-center text-primary">
                    <Users className={`me-3 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '24px', height: '24px'}} />
                    {t.statistics.detailed.clients.title}
                  </h3>
                  <div className="d-flex flex-column gap-4">
                    {clientStats.map((stat, index) => (
                      <div key={index}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-secondary">
                            {stat.label}
                          </span>
                          <span className="fw-bold text-primary">
                            {stat.value} {stat.unit || ''}
                          </span>
                        </div>
                        <div className={`w-100 rounded-pill ${isDarkMode ? 'bg-secondary' : 'bg-light'}`} style={{height: '8px'}}>
                          <div className={`${isDarkMode ? 'bg-brand-orange' : 'bg-brand-orange-dark'} rounded-pill`} style={{width: `${stat.percentage}%`, height: '8px'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5}>
              <Card className={`border-0 shadow ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                <Card.Body className="p-4 p-md-5">
                  <h3 className="h4 fw-bold mb-4 d-flex align-items-center text-primary">
                    <Car className={`me-3 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '24px', height: '24px'}} />
                    {t.statistics.detailed.captains.title}
                  </h3>
                  <div className="d-flex flex-column gap-4">
                    {captainStats.map((stat, index) => (
                      <div key={index}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-secondary">
                            {stat.label}
                          </span>
                          <span className="fw-bold text-primary">
                            {stat.value} {stat.unit || ''}
                          </span>
                        </div>
                        <div className={`w-100 rounded-pill ${isDarkMode ? 'bg-secondary' : 'bg-light'}`} style={{height: '8px'}}>
                          <div className={`${isDarkMode ? 'bg-brand-navy-light' : 'bg-brand-navy'} rounded-pill`} style={{width: `${stat.percentage}%`, height: '8px'}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Provinces Statistics */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.statistics.geographic.title}
            </h2>
            <p className="lead text-secondary">
              {t.statistics.geographic.subtitle}
            </p>
          </div>

          <Row className="g-3 g-lg-4">
            {provinces.map((province, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <Card className={`border-0 shadow transition-all h-100 ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-white'}`}>
                  <Card.Body className="p-3 p-md-4 text-center">
                    <MapPin className={`mx-auto mb-2 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '32px', height: '32px'}} />
                    <h3 className="fw-bold mb-2 small text-primary">
                      {province.name}
                    </h3>
                    <div className="small mb-1 text-secondary">
                      <span className="fw-semibold">{province.users}</span> {t.statistics.geographic.clients}
                    </div>
                    <div className="small mb-2 text-secondary">
                      <span className="fw-semibold">{province.drivers}</span> {t.statistics.geographic.captains}
                    </div>
                    <Badge className="bg-success small">
                      {province.growth}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Performance Metrics */}
      <section className={`py-5 py-md-4 transition-colors ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-primary">
              {t.statistics.performance.title}
            </h2>
            <p className="lead text-secondary">
              {t.statistics.performance.subtitle}
            </p>
          </div>

          <Row className="g-4 g-lg-5 justify-content-center">
            {performanceMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Col sm={6} lg={4} key={index}>
                  <Card className={`border-0 shadow ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
                    <Card.Body className="p-4 p-md-5 text-center">
                      <IconComponent className={`mx-auto mb-3 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`} style={{width: '48px', height: '48px'}} />
                      <h3 className="h5 fw-bold mb-4 text-primary">
                        {metric.title}
                      </h3>
                      <div className="d-flex flex-column gap-2">
                        {metric.metrics.map((item, i) => (
                          <div key={i} className="d-flex justify-content-between align-items-center">
                            <span className="text-secondary">
                              {item.label}
                            </span>
                            <span className="fw-bold text-primary">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
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
            <h2 className="display-4 fw-bold mb-3">{t.statistics.cta.title}</h2>
            <p className="lead mb-4 text-white text-opacity-90">{t.statistics.cta.subtitle}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/book-ride" className="text-decoration-none">
                <Button size="lg" className="bg-white text-brand-orange border-0 px-5 py-3">
                  {t.statistics.cta.startJourney}
                </Button>
              </Link>
              <Link to="/careers" className="text-decoration-none">
                <Button size="lg" variant="outline" className="border-white text-white px-5 py-3">
                  {t.statistics.cta.joinDriver}
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
