import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  HelpCircle,
  Sun,
  Moon,
  MessageCircle,
  Headphones,
} from "lucide-react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";

export default function FAQ() {
  const { t, locale } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: t.faq.questions.q1,
      answer: t.faq.questions.a1,
    },
    {
      question: t.faq.questions.q2,
      answer: t.faq.questions.a2,
    },
    {
      question: t.faq.questions.q3,
      answer: t.faq.questions.a3,
    },
    {
      question: t.faq.questions.q4,
      answer: t.faq.questions.a4,
    },
    {
      question: t.faq.questions.q5,
      answer: t.faq.questions.a5,
    },
    {
      question: t.faq.questions.q6,
      answer: t.faq.questions.a6,
    },
    {
      question: t.faq.questions.q7,
      answer: t.faq.questions.a7,
    },
    {
      question: t.faq.questions.q8,
      answer: t.faq.questions.a8,
    },
  ];

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-brand-navy' : 'bg-light'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className={`sticky-top border-bottom shadow-sm transition-colors ${isDarkMode ? 'bg-brand-navy-light border-secondary' : 'bg-white border-light'}`} style={{zIndex: 1050}}>
        <Container fluid className="px-3 px-md-4">
          <Row className="align-items-center">
            <Col className="d-flex align-items-center">
              <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                  alt="DELVI Logo"
                  style={{height: '40px', width: 'auto'}}
                />
              </Link>
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
              <Link to="/" className="text-decoration-none">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`transition-colors ${isDarkMode ? 'border-secondary text-white' : 'border-brand-navy text-brand-navy'}`}
                >
                  <ArrowLeft className="me-2" style={{width: '16px', height: '16px'}} />
                  {t.common.backToHome}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-5 py-md-4" style={{background: 'linear-gradient(to right, #1e3a8a, #1e293b)'}}>
        <Container>
          <div className="text-center">
            <div className="d-flex justify-content-center mb-4">
              <div className="bg-brand-orange rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{width: '64px', height: '64px'}}>
                <HelpCircle className="text-white" style={{width: '32px', height: '32px'}} />
              </div>
            </div>
            <h1 className="display-4 fw-bold text-white mb-3">
              {t.faq.hero.title}
            </h1>
            <p className="lead text-white text-opacity-80 mx-auto" style={{maxWidth: '600px'}}>
              {t.faq.hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-5 py-md-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="d-flex flex-column gap-3 mb-5">
                {faqData.map((item, index) => (
                  <Card 
                    key={index}
                    className={`border transition-all overflow-hidden ${
                      isDarkMode 
                        ? 'bg-brand-navy-light border-secondary' 
                        : 'bg-white border-secondary'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className={`w-100 p-4 text-start border-0 bg-transparent transition-colors ${
                        isDarkMode 
                          ? 'hover:bg-brand-navy-dark text-white' 
                          : 'hover:bg-light'
                      }`}
                      aria-expanded={openItems.includes(index)}
                    >
                      <div className="d-flex align-items-center justify-content-between gap-3">
                        <h3 className="h5 fw-semibold flex-grow-1 mb-0 text-primary">
                          {item.question}
                        </h3>
                        <div className={`transition-transform flex-shrink-0 ${isDarkMode ? 'text-brand-orange' : 'text-brand-orange-dark'}`}>
                          {openItems.includes(index) ? (
                            <ChevronUp style={{width: '20px', height: '20px'}} />
                          ) : (
                            <ChevronDown style={{width: '20px', height: '20px'}} />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {openItems.includes(index) && (
                      <div className={`px-4 pb-4 border-top ${isDarkMode ? 'border-secondary' : 'border-light'}`}>
                        <p className="pt-3 mb-0 text-secondary">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>

              {/* Contact Section */}
              <Card className={`mt-5 border-0 ${isDarkMode ? 'bg-brand-orange' : 'bg-brand-orange'} overflow-hidden`}>
                <Card.Body className="p-5 text-center text-white">
                  <h2 className="h2 fw-bold mb-3">
                    {t.faq.contact.title}
                  </h2>
                  <p className="text-white text-opacity-90 mb-4 mx-auto" style={{maxWidth: '600px'}}>
                    {t.faq.contact.description}
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button 
                      className="bg-white text-brand-orange border-0"
                      size="lg"
                    >
                      <MessageCircle className="me-2" style={{width: '16px', height: '16px'}} />
                      {t.faq.contact.contactUs}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white text-white"
                      size="lg"
                    >
                      <Headphones className="me-2" style={{width: '16px', height: '16px'}} />
                      {t.faq.contact.helpCenter}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className={`py-4 border-top transition-colors ${isDarkMode ? 'bg-brand-navy-dark border-secondary' : 'bg-white border-light'}`}>
        <Container>
          <div className="text-center">
            <p className="text-muted">
              &copy; 2024 DELVI. {t.footer.copyright}
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
