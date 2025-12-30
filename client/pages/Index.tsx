import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/use-translation";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import {
  Car,
  Menu,
  Globe,
  ChevronDown,
  X,
  Shield,
  Clock,
  Users,
  Star,
  MapPin,
  Smartphone,
  CheckCircle,
  User,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Sun,
  Moon
} from "lucide-react";

export default function Index() {
  const { t, locale } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userType, setUserType] = useState<'passenger' | 'driver'>('passenger');
  const [isLoading, setIsLoading] = useState(true);
  // Load dark mode from localStorage or default to false (applied immediately to prevent flicker)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('delvi-theme');
      const isDark = savedTheme === 'dark';
      // Apply immediately to prevent flicker
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return isDark;
    }
    return false;
  });
  const [animatedCounts, setAnimatedCounts] = useState({
    users: 0,
    drivers: 0,
    rating: 0,
    income: 0,
    satisfaction: 0
  });

  // Background images for the hero carousel
  const heroImages = [
    'https://images.pexels.com/photos/33713198/pexels-photo-33713198.jpeg',
    'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg',
    'https://images.pexels.com/photos/3757226/pexels-photo-3757226.jpeg',
    'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode toggle effect and persistence
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

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Animated counters
  useEffect(() => {
    if (isLoading) return; // Don't start counters while loading

    const targets = {
      users: 2000000, // 2M
      drivers: 50000,  // 50K
      rating: 4.8,
      income: 2500,
      satisfaction: 95
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepTime = duration / steps;

    const intervals: NodeJS.Timeout[] = [];

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const increment = target / steps;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }

        setAnimatedCounts(prev => ({
          ...prev,
          [key]: key === 'rating' ? Math.round(current * 10) / 10 : Math.floor(current)
        }));
      }, stepTime);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [userType, isLoading]); // Re-run when user type changes or loading ends

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  // Loading Screen Component
  if (isLoading) {
    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroImages[0]}')`
        }}
      >
        {/* Full Screen Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 via-black/50 to-brand-navy-dark/80"></div>

        {/* Animated Wheel Loader Only */}
        <div className="relative z-10 loader flex flex-col items-center">
          <svg className="wheel" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle id="rim" cx="50" cy="50" r="45" fill="none" stroke="#fb923d" strokeWidth="8"/>
            <circle id="tire" cx="50" cy="50" r="35" fill="#fb923d" opacity="0.3"/>
            <circle cx="50" cy="50" r="20" fill="#ffffff"/>
            <circle cx="50" cy="50" r="8" fill="#fb923d"/>
            {/* Spokes */}
            <line x1="50" y1="15" x2="50" y2="30" stroke="#fb923d" strokeWidth="3"/>
            <line x1="50" y1="70" x2="50" y2="85" stroke="#fb923d" strokeWidth="3"/>
            <line x1="15" y1="50" x2="30" y2="50" stroke="#fb923d" strokeWidth="3"/>
            <line x1="70" y1="50" x2="85" y2="50" stroke="#fb923d" strokeWidth="3"/>
            <line x1="26.5" y1="26.5" x2="36.5" y2="36.5" stroke="#fb923d" strokeWidth="2"/>
            <line x1="63.5" y1="63.5" x2="73.5" y2="73.5" stroke="#fb923d" strokeWidth="2"/>
            <line x1="73.5" y1="26.5" x2="63.5" y2="36.5" stroke="#fb923d" strokeWidth="2"/>
            <line x1="36.5" y1="63.5" x2="26.5" y2="73.5" stroke="#fb923d" strokeWidth="2"/>
          </svg>
        </div>

        {/* Custom Loader Styles */}
        <style>{`
          .loader {
            overflow: hidden;
            position: relative;
          }

          .wheel {
            width: 120px;
            height: 120px;
            animation: rolling 1s linear infinite;
            filter: drop-shadow(0 10px 20px rgba(251, 146, 61, 0.3));
          }

          @keyframes rolling {
            to {
              transform: rotate(-360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy' : 'bg-white'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-gray-700' 
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}>
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="d-flex align-items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                alt="DELVI Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex align-items-center gap-3">
              <button
                onClick={() => scrollToSection('home')}
                className="font-medium transition-colors text-primary hover:text-brand-orange"
              >
                {t.navigation.home}
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="font-medium transition-colors text-primary hover:text-brand-orange"
              >
                {t.navigation.features}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-medium transition-colors text-primary hover:text-brand-orange"
              >
                {t.navigation.about}
              </button>
              <button
                onClick={() => scrollToSection('stats')}
                className="font-medium transition-colors text-primary hover:text-brand-orange"
              >
                {t.navigation.statistics}
              </button>

              {/* Desktop User Type Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className={`${
                  isScrolled 
                    ? isDarkMode 
                      ? 'bg-brand-navy-light text-white hover:bg-brand-navy-dark' 
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    : isDarkMode
                      ? 'bg-brand-navy-light/90 text-white hover:bg-brand-navy-light'
                      : 'bg-white/90 text-secondary hover:bg-white'
                } ${
                  userType === 'driver' ? 'ring-2 ring-brand-orange' : ''
                }`}
                onClick={() => setUserType(userType === 'passenger' ? 'driver' : 'passenger')}
                title={userType === 'passenger' ? t.home.hero.switchToDriver : t.home.hero.switchToPassenger}
              >
                {userType === 'passenger' ? (
                  <>
                    <User className="w-4 h-4 mr-2" />
                    {t.home.hero.passengerMode}
                  </>
                ) : (
                  <>
                    <Car className="w-4 h-4 mr-2" />
                    {t.home.hero.driverMode}
                  </>
                )}
              </Button>

              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className={`${
                  isScrolled 
                    ? isDarkMode 
                      ? 'bg-brand-navy-light text-white hover:bg-brand-navy-dark' 
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    : isDarkMode
                      ? 'bg-brand-navy-light/90 text-white hover:bg-brand-navy-light'
                      : 'bg-white/90 text-secondary hover:bg-white'
                } transition-all duration-200`}
                title={isDarkMode ? t.common.switchToLight : t.common.switchToDark}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              <Link to="/book-ride">
                <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
                  {userType === 'passenger' ? t.home.hero.switchToPassenger : t.home.hero.switchToDriver}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu, Language and User Type Toggle */}
            <div className="d-flex align-items-center gap-2 d-lg-none">
              {/* Mobile Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className={`${isScrolled ? 'bg-gray-100 text-secondary hover:bg-gray-200' : 'bg-white/90 text-secondary hover:bg-white'} transition-all duration-200`}
                title={isDarkMode ? t.common.switchToLight : t.common.switchToDark}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className={`${
                  isScrolled 
                    ? isDarkMode 
                      ? 'bg-brand-navy-light text-white hover:bg-brand-navy-dark' 
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    : isDarkMode
                      ? 'bg-brand-navy-light/90 text-white hover:bg-brand-navy-light'
                      : 'bg-white/90 text-secondary hover:bg-white'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4 mr-2" /> : <Menu className="w-4 h-4 mr-2" />}
                {t.common.menu}
              </Button>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* User Type Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className={`${
                  isScrolled 
                    ? isDarkMode 
                      ? 'bg-brand-navy-light text-white hover:bg-brand-navy-dark' 
                      : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    : isDarkMode
                      ? 'bg-brand-navy-light/90 text-white hover:bg-brand-navy-light'
                      : 'bg-white/90 text-secondary hover:bg-white'
                } ${
                  userType === 'driver' ? 'ring-2 ring-brand-orange' : ''
                }`}
                onClick={() => setUserType(userType === 'passenger' ? 'driver' : 'passenger')}
                title={userType === 'passenger' ? t.home.hero.switchToDriver : t.home.hero.switchToPassenger}
              >
                {userType === 'passenger' ? (
                  <>
                    <User className="w-4 h-4 mr-2" />
                    {t.home.hero.passengerMode}
                  </>
                ) : (
                  <>
                    <Car className="w-4 h-4 mr-2" />
                    {t.home.hero.driverMode}
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className={`lg:hidden mt-4 backdrop-blur rounded-lg p-6 shadow-xl border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-brand-navy-light/95 border-gray-700' 
                : 'bg-white/95 border-gray-100'
            }`}>
              <div className="space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left font-medium transition-colors text-primary hover:text-brand-orange"
                >
                  {t.navigation.home}
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left font-medium transition-colors text-primary hover:text-brand-orange"
                >
                  {t.navigation.features}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left font-medium transition-colors text-primary hover:text-brand-orange"
                >
                  من ��حن
                </button>
                <button 
                  onClick={() => scrollToSection('stats')}
                  className="block w-full text-left font-medium transition-colors text-primary hover:text-brand-orange"
                >
                  {t.navigation.statistics}
                </button>
                <Link to="/about" className="block font-medium transition-colors text-primary hover:text-brand-orange">
                  {t.general.company}
                </Link>
                <Link to="/careers" className="block font-medium transition-colors text-primary hover:text-brand-orange">
                  {t.navigation.careers}
                </Link>
                <Link to="/book-ride">
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white">
                    {userType === 'passenger' ? t.home.hero.switchToPassenger : t.home.hero.switchToDriver}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </nav>

      {/* Hero Section */}
      <section id="home" className="position-relative min-vh-100 d-flex align-items-center justify-content-center overflow-hidden">
        {/* Animated Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 via-black/50 to-brand-navy-dark/80"></div>
          </div>
        ))}

        {/* Background Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-brand-orange scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <Container className="position-relative z-1 text-center">
          <div className="mx-auto" style={{ maxWidth: '896px' }}>
            <Badge variant="secondary" className="mb-6 bg-brand-orange/20 text-brand-orange border-brand-orange">
              {userType === 'passenger'
                ? t.home.hero.fairTransport
                : t.home.hero.driverPlatform}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {userType === 'passenger' ? (
                <>
                  {t.home.hero.title}{" "}
                  <span className="relative inline-block">
                    <span className="bg-brand-orange px-4 py-2 rounded-lg text-white">
                      {t.home.hero.fairRide}
                    </span>
                  </span>
                </>
              ) : (
                <>
                  {t.home.hero.title}{" "}
                  <span className="relative inline-block">
                    <span className="bg-brand-orange px-4 py-2 rounded-lg text-white">
                      {t.home.hero.profitJourney}
                    </span>
                  </span>
                  {" "}{t.home.hero.title}
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
              {userType === 'passenger'
                ? t.home.hero.subtitle
                : t.home.hero.subtitleDriver}
            </p>

            {/* Custom CSS for animated buttons */}
            <style>{`
              .animated-button {
                position: relative;
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 16px 36px;
                border: 4px solid;
                border-color: transparent;
                font-size: 16px;
                background-color: inherit;
                border-radius: 100px;
                font-weight: 600;
                color: #fb923d;
                box-shadow: 0 0 0 2px #fb923d;
                cursor: pointer;
                overflow: hidden;
                transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .animated-button svg {
                position: absolute;
                width: 24px;
                fill: #fb923d;
                z-index: 9;
                transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .animated-button .arr-1 {
                right: 16px;
              }

              .animated-button .arr-2 {
                left: -25%;
              }

              .animated-button .circle {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 20px;
                height: 20px;
                background-color: #fb923d;
                border-radius: 50%;
                opacity: 0;
                transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .animated-button .text {
                position: relative;
                z-index: 1;
                transform: translateX(-12px);
                transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .animated-button:hover {
                box-shadow: 0 0 0 12px transparent;
                color: #ffffff;
                border-radius: 12px;
              }

              .animated-button:hover .arr-1 {
                right: -25%;
              }

              .animated-button:hover .arr-2 {
                left: 16px;
              }

              .animated-button:hover .text {
                transform: translateX(12px);
              }

              .animated-button:hover svg {
                fill: #ffffff;
              }

              .animated-button:active {
                scale: 0.95;
                box-shadow: 0 0 0 4px #fb923d;
              }

              .animated-button:hover .circle {
                width: 220px;
                height: 220px;
                opacity: 1;
              }

              .animated-button-white {
                color: white;
                box-shadow: 0 0 0 2px white;
              }

              .animated-button-white svg {
                fill: white;
              }

              .animated-button-white .circle {
                background-color: white;
              }

              .animated-button-white:hover {
                color: #1e3a8a;
              }

              .animated-button-white:hover svg {
                fill: #1e3a8a;
              }

              .animated-button-white:active {
                box-shadow: 0 0 0 4px white;
              }
            `}</style>

            <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center mb-5">
              <button className="animated-button">
                <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">
                  {userType === 'passenger' ? t.home.hero.downloadApp : t.home.hero.switchToDriver}
                </span>
                <span className="circle"></span>
                <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>

              <button
                className="animated-button animated-button-white"
                onClick={() => scrollToSection('features')}
              >
                <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">{t.home.hero.learnMore}</span>
                <span className="circle"></span>
                <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>

            {/* Animated Glass Morphism Stats */}
            <Row className="g-4 justify-content-center">
              {userType === 'passenger' ? (
                <>
                  <Col md={4} className="position-relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-white/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <div className="text-4xl font-bold text-brand-orange mb-2 font-mono">
                        {animatedCounts.users >= 1000000 ? `${(animatedCounts.users / 1000000).toFixed(1)}M` : `${Math.floor(animatedCounts.users / 1000)}K`}+
                      </div>
                      <div className="text-secondary font-medium">{t.home.statsSection.activeUser}</div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </Col>

                  <Col md={4} className="position-relative">
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 bg-gradient-to-r from-brand-orange/10 to-white/5 rounded-3 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="position-relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3 p-4 text-center hover:bg-white/8 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <div className="fs-1 fw-bold text-brand-orange mb-2 font-mono">
                        {Math.floor(animatedCounts.drivers / 1000)}K+
                      </div>
                      <div className="text-muted fw-medium">{t.home.stats.certifiedDrivers}</div>
                      <div className="position-absolute top-0 end-0 w-2 h-2 bg-info rounded-circle animate-pulse"></div>
                    </div>
                  </Col>

                  <Col md={4} className="position-relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-white/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <div className="text-4xl font-bold text-brand-orange mb-2 font-mono">
                        {animatedCounts.rating.toFixed(1)}★
                      </div>
                      <div className="text-secondary font-medium">{t.home.stats.appRating}</div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={4} className="position-relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-white/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <div className="text-4xl font-bold text-brand-orange mb-2 font-mono">
                        {Math.floor(animatedCounts.drivers / 1000)}K+
                      </div>
                      <div className="text-secondary font-medium">{t.home.statsSection.partnerDrivers}</div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </Col>

                  <Col md={4} className="position-relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-white/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <div className="text-4xl font-bold text-brand-orange mb-2 font-mono">
                        {animatedCounts.income.toLocaleString()} EGP
                      </div>
                      <div className="text-secondary font-medium">{t.home.stats.avgMonthlyIncome}</div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  </Col>

                  <Col md={4} className="position-relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-white/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-all duration-300 transform hover:scale-105 shadow-xl">
                      <div className="text-4xl font-bold text-brand-orange mb-2 font-mono">
                        {animatedCounts.satisfaction}%
                      </div>
                      <div className="text-secondary font-medium">{t.home.stats.driverSatisfaction}</div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-5 transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-dark' : 'bg-light'}`}>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold mb-4 text-primary">
              {t.home.mainFeatures.title}
            </h2>
            <p className="text-responsive-xl max-w-2xl mx-auto text-secondary">
              {t.home.mainFeatures.subtitle}
            </p>
          </div>

          {/* Animated Features Component */}
          <div className="flex items-center justify-center [&_svg]:size-full [&:nth-child(1)]:[&_figure]:order-3 [&:nth-child(2)]:[&_figure]:order-2 [&:nth-child(3)]:[&_figure]:order-4 [&:nth-child(4)]:[&_figure]:order-1 [&:nth-child(5)]:[&_figure]:order-5 [&_figure]:[box-shadow:#0000001f_0_1px_3px,#0000003d_0_0_1px] [&_figure]:[transition:all_.25s_ease] hover:[&_figure]:z-[50] hover:[&_figure]:size-16 [&:hover_figure:not(:hover)]:size-[38px]">

            <figure className="flex items-center justify-center text-2xl font-extrabold leading-none text-brand-orange p-4 bg-white relative rounded-full object-cover border border-solid border-brand-orange/30 [&:where(:nth-child(4),_:nth-child(5))]:size-8 [&:where(:nth-child(4),_:nth-child(5))]:z-[3] [&:where(:nth-child(2),_:nth-child(3))]:size-11 [&:where(:nth-child(2),_:nth-child(3))]:z-[4] [&:nth-child(1)]:size-16 [&:nth-child(1)]:z-[6] [&:where(:not(:nth-child(4)))]:-ml-2 cursor-pointer group">
              <Shield className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-brand-navy text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {t.home.mainFeatures.securityTooltip}
                </div>
              </div>
            </figure>

            <figure className="flex items-center justify-center text-2xl font-extrabold leading-none text-brand-orange p-4 bg-white relative rounded-full object-cover border border-solid border-brand-orange/30 [&:where(:nth-child(4),_:nth-child(5))]:size-8 [&:where(:nth-child(4),_:nth-child(5))]:z-[3] [&:where(:nth-child(2),_:nth-child(3))]:size-11 [&:where(:nth-child(2),_:nth-child(3))]:z-[4] [&:nth-child(1)]:size-16 [&:nth-child(1)]:z-[6] [&:where(:not(:nth-child(4)))]:-ml-2 cursor-pointer group">
              <Clock className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-brand-navy text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {t.home.mainFeatures.speedTooltip}
                </div>
              </div>
            </figure>

            <figure className="flex items-center justify-center text-2xl font-extrabold leading-none text-brand-orange p-4 bg-white relative rounded-full object-cover border border-solid border-brand-orange/30 [&:where(:nth-child(4),_:nth-child(5))]:size-8 [&:where(:nth-child(4),_:nth-child(5))]:z-[3] [&:where(:nth-child(2),_:nth-child(3))]:size-11 [&:where(:nth-child(2),_:nth-child(3))]:z-[4] [&:nth-child(1)]:size-16 [&:nth-child(1)]:z-[6] [&:where(:not(:nth-child(4)))]:-ml-2 cursor-pointer group">
              <Users className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-brand-navy text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {t.home.mainFeatures.negotiationTooltip}
                </div>
              </div>
            </figure>

            <figure className="flex items-center justify-center text-2xl font-extrabold leading-none text-brand-orange p-4 bg-white relative rounded-full object-cover border border-solid border-brand-orange/30 [&:where(:nth-child(4),_:nth-child(5))]:size-8 [&:where(:nth-child(4),_:nth-child(5))]:z-[3] [&:where(:nth-child(2),_:nth-child(3))]:size-11 [&:where(:nth-child(2),_:nth-child(3))]:z-[4] [&:nth-child(1)]:size-16 [&:nth-child(1)]:z-[6] [&:where(:not(:nth-child(4)))]:-ml-2 cursor-pointer group">
              <Star className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-brand-navy text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {t.home.mainFeatures.ratingsTooltip}
                </div>
              </div>
            </figure>

            <figure className="flex items-center justify-center text-2xl font-extrabold leading-none text-brand-orange p-4 bg-white relative rounded-full object-cover border border-solid border-brand-orange/30 [&:where(:nth-child(4),_:nth-child(5))]:size-8 [&:where(:nth-child(4),_:nth-child(5))]:z-[3] [&:where(:nth-child(2),_:nth-child(3))]:size-11 [&:where(:nth-child(2),_:nth-child(3))]:z-[4] [&:nth-child(1)]:size-16 [&:nth-child(1)]:z-[6] [&:where(:not(:nth-child(4)))]:-ml-2 cursor-pointer group">
              <MapPin className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform" />
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-brand-navy text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {t.home.mainFeatures.trackingTooltip}
                </div>
              </div>
            </figure>

          </div>

          {/* Additional Feature Details */}
          <Row className="mt-5 g-4 justify-content-center">
            <Col md={4} className="text-center">
              <h4 className="text-lg font-semibold mb-2 text-primary">{t.home.mainFeatures.securityDetail}</h4>
              <p className="text-sm text-secondary">{t.home.mainFeatures.securityDetailDesc}</p>
            </Col>
            <Col md={4} className="text-center">
              <h4 className="text-lg font-semibold mb-2 text-primary">{t.home.mainFeatures.speedDetail}</h4>
              <p className="text-sm text-secondary">{t.home.mainFeatures.speedDetailDesc}</p>
            </Col>
            <Col md={4} className="text-center">
              <h4 className="text-lg font-semibold mb-2 text-primary">{t.home.mainFeatures.experienceDetail}</h4>
              <p className="text-sm text-secondary">{t.home.mainFeatures.experienceDetailDesc}</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className={`py-5 transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <h2 className="text-responsive-3xl font-bold mb-6 text-primary">
                {t.home.about.title}
              </h2>
              <p className="text-responsive-xl mb-6 leading-relaxed text-secondary">
                {t.home.about.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="d-flex align-items-start">
                  <CheckCircle className="w-6 h-6 text-brand-orange mt-1 me-3 flex-shrink-0" />
                  <span className="text-secondary">{t.home.about.bullet1}</span>
                </div>
                <div className="d-flex align-items-start">
                  <CheckCircle className="w-6 h-6 text-brand-orange mt-1 me-3 flex-shrink-0" />
                  <span className="text-secondary">{t.home.about.bullet2}</span>
                </div>
                <div className="d-flex align-items-start">
                  <CheckCircle className="w-6 h-6 text-brand-orange mt-1 me-3 flex-shrink-0" />
                  <span className="text-secondary">{t.home.about.bullet3}</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange-dark text-white"
              >
                <Link to="/about">
                  {t.buttons.viewMore}
                </Link>
              </Button>
            </Col>

            <Col lg={6} className="position-relative">
              <img
                src="https://images.pexels.com/photos/3757226/pexels-photo-3757226.jpeg"
                alt="About DELVI"
                className="rounded-3 shadow-lg w-100"
              />
              <div className="position-absolute bottom-0 start-0 bg-brand-orange p-4 rounded-3 shadow-lg" style={{ transform: 'translate(-20px, 20px)' }}>
                <div className="text-white text-center">
                  <div className="fs-3 fw-bold">2024</div>
                  <div className="small">{t.aboutUs.story.foundingYear}</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="py-5 bg-brand-navy">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-invert mb-4">
            {t.home.statsSection.title}
          </h2>
          <p className="text-xl text-secondary mb-16 max-w-2xl mx-auto">
            {t.home.statsSection.subtitle}
          </p>

          <Row className="g-4">
            <Col md={6} lg={3} className="text-center">
              <div className="fs-1 fw-bold text-brand-orange mb-2">2M+</div>
              <div className="text-secondary fs-5">{t.home.statsSection.registeredUsers}</div>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="fs-1 fw-bold text-brand-orange mb-2">50K+</div>
              <div className="text-secondary fs-5">{t.home.statsSection.partnerDrivers}</div>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="fs-1 fw-bold text-brand-orange mb-2">1M+</div>
              <div className="text-secondary fs-5">{t.home.statsSection.completedTrips}</div>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="fs-1 fw-bold text-brand-orange mb-2">4.8★</div>
              <div className="text-secondary fs-5">{t.home.statsSection.userRating}</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Founders Section */}
      <section id="founders" className={`py-5 transition-colors duration-300 ${isDarkMode ? 'bg-brand-navy-light' : 'bg-white'}`}>
        <Container>
          <div className="text-center mb-16">
            <Badge className="bg-brand-orange text-white border-0 mb-4">
              <Users className="w-4 h-4 mr-2" />
              {t.home.foundersSection.badge}
            </Badge>
            <h2 className="text-responsive-3xl font-bold mb-4 text-primary">
              {t.home.foundersSection.title}
            </h2>
            <p className="text-responsive-xl max-w-2xl mx-auto text-secondary">
              {t.home.foundersSection.subtitle}
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {/* Founder 1 */}
            <Col sm={6} lg={4} className="group">
              <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border ${
                isDarkMode 
                  ? 'bg-brand-navy-light border-gray-700' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="relative h-48 bg-gradient-to-br from-brand-orange to-brand-orange-dark">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-12 h-12 text-brand-orange" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`border-0 ${isDarkMode ? 'bg-brand-navy-light text-brand-orange' : 'bg-white text-brand-orange'}`}>CEO</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">{t.home.foundersSection.founder1.name}</h3>
                  <p className="text-brand-orange font-semibold mb-4">{t.home.foundersSection.founder1.role}</p>
                  <p className="text-sm mb-6 leading-relaxed text-secondary">
                    {t.home.foundersSection.founder1.description}
                  </p>
                  
                  <div className="flex space-x-3 justify-center">
                    <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Founder 2 */}
            <Col sm={6} lg={4} className="group">
              <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border ${
                isDarkMode 
                  ? 'bg-brand-navy-light border-gray-700' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="relative h-48 bg-gradient-to-br from-brand-navy to-brand-navy-dark">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-12 h-12 text-brand-navy" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`border-0 ${isDarkMode ? 'bg-brand-navy-light text-white' : 'bg-white text-brand-navy'}`}>CTO</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">{t.home.foundersSection.founder2.name}</h3>
                  <p className="text-brand-orange font-semibold mb-4">{t.home.foundersSection.founder2.role}</p>
                  <p className="text-sm mb-6 leading-relaxed text-secondary">
                    {t.home.foundersSection.founder2.description}
                  </p>
                  
                  <div className="flex space-x-3 justify-center">
                    <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Founder 3 */}
            <Col sm={6} lg={4} className="group">
              <div className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border ${
                isDarkMode 
                  ? 'bg-brand-navy-light border-gray-700' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-12 h-12 text-purple-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`border-0 ${isDarkMode ? 'bg-brand-navy-light text-purple-400' : 'bg-white text-purple-600'}`}>COO</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-primary">{t.home.foundersSection.founder3.name}</h3>
                  <p className="text-brand-orange font-semibold mb-4">{t.home.foundersSection.founder3.role}</p>
                  <p className="text-sm mb-6 leading-relaxed text-secondary">
                    {t.home.foundersSection.founder3.description}
                  </p>
                  
                  <div className="flex space-x-3 justify-center">
                    <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200 group-hover:scale-110">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Link to="/founders">
              <Button 
                size="lg" 
                variant="outline" 
                className={`border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-lg px-4 py-3 transition-all duration-200 ${
                  isDarkMode ? 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white' : ''
                }`}
              >
                {t.home.foundersSection.learnMore}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Download Section */}
      <section className="py-5 bg-gradient-to-r from-brand-orange to-brand-orange-dark">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.home.download.title}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            حمل تطبيق DELVI واس��متع بتجربة نقل عادلة وآمنة
          </p>
          
          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center">
            <button className="animated-button-download">
              <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"></path>
              </svg>
              <span className="text">{t.buttons.downloadAndroid}</span>
              <span className="circle"></span>
              <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"></path>
              </svg>
            </button>

            <button className="animated-button-download">
              <svg className="arr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"></path>
              </svg>
              <span className="text">{t.buttons.downloadIOS}</span>
              <span className="circle"></span>
              <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z"></path>
              </svg>
            </button>
          </div>
        </Container>
        <style>{`
            .animated-button-download {
              position: relative;
              display: flex;
              align-items: center;
              gap: 4px;
              padding: 16px 36px;
              border: 4px solid;
              border-color: transparent;
              font-size: 16px;
              background-color: white;
              border-radius: 100px;
              font-weight: 600;
              color: #fb923d;
              box-shadow: 0 0 0 2px white;
              cursor: pointer;
              overflow: hidden;
              transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            }

            .animated-button-download svg {
              position: absolute;
              width: 24px;
              fill: #fb923d;
              z-index: 9;
              transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            }

            .animated-button-download .arr-1 {
              right: 16px;
            }

            .animated-button-download .arr-2 {
              left: -25%;
            }

            .animated-button-download .circle {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 20px;
              height: 20px;
              background-color: white;
              border-radius: 50%;
              opacity: 0;
              transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            }

            .animated-button-download .text {
              position: relative;
              z-index: 1;
              transform: translateX(-12px);
              transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
            }

            .animated-button-download:hover {
              box-shadow: 0 0 0 12px transparent;
              color: #fb923d;
              border-radius: 12px;
              background-color: #f3f4f6;
            }

            .animated-button-download:hover .arr-1 {
              right: -25%;
            }

            .animated-button-download:hover .arr-2 {
              left: 16px;
            }

            .animated-button-download:hover .text {
              transform: translateX(12px);
            }

            .animated-button-download:hover svg {
              fill: #fb923d;
            }

            .animated-button-download:active {
              scale: 0.95;
              box-shadow: 0 0 0 4px white;
            }

            .animated-button-download:hover .circle {
              width: 220px;
              height: 220px;
              opacity: 1;
            }
          `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy-dark py-4">
        <Container>
          <Row className="g-4 mb-4">
            {/* Logo and Description */}
            <Col md={6}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F065bbe9c7401418fa7bf6a66e5cffd7b%2F5d8ec53853f245179e011dc680ed3743?format=webp&width=800"
                alt="DELVI Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-secondary mb-4 max-w-md">
                {t.home.footer.description}
              </p>
            </Col>

            {/* Quick Links */}
            <Col md={3}>
              <h3 className="text-invert font-semibold mb-4">{t.home.footer.quickLinks}</h3>
              <div className="d-flex flex-column gap-2">
                <Link to="/about" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.navigation.about}</Link>
                <Link to="/features" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.navigation.features}</Link>
                <Link to="/careers" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.navigation.careers}</Link>
                <Link to="/news" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.navigation.news}</Link>
              </div>
            </Col>

            {/* Support */}
            <Col md={3}>
              <h3 className="text-invert font-semibold mb-4">{t.home.footer.support}</h3>
              <div className="d-flex flex-column gap-2">
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.footer.helpCenter}</a>
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.footer.contactUs}</a>
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.footer.termsOfService}</a>
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors">{t.footer.privacyPolicy}</a>
              </div>
            </Col>
          </Row>

          {/* Bottom */}
          <div className="border-top border-white-50 pt-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="text-muted text-sm mb-4 md:mb-0">
                &copy; 2024 DELVI. {t.footer.copyright}
              </p>
              <div className="d-flex gap-4">
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-secondary text-decoration-none hover:text-white transition-colors" aria-label="Pinterest">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      {/* Floating Action Buttons */}
      <div className="position-fixed bottom-0 end-0 p-4" style={{ zIndex: 40 }}>
        <div className="d-flex flex-column gap-3">
        {/* FAQ Button */}
        <Link to="/FAQ">
          <button className="faq-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
            <span className="tooltip">{t.home.tooltips.faq}</span>
          </button>
        </Link>

        {/* Main Action Button */}
        <Link to="/book-ride">
          <button className="faq-button">
            <svg className="arr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            <span className="tooltip">{t.home.tooltips.bookRide}</span>
          </button>
        </Link>
        </div>
      </div>

      <style>{`
        .animated-fab {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border: 3px solid;
          border-color: transparent;
          background-color: #fb923d;
          border-radius: 50%;
          color: white;
          box-shadow: 0 0 0 2px #fb923d, 0 8px 32px rgba(251, 146, 61, 0.3);
          cursor: pointer;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-fab svg {
          position: absolute;
          width: 24px;
          fill: white;
          z-index: 9;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-fab .arr-1 {
          opacity: 1;
        }

        .animated-fab .arr-2 {
          opacity: 0;
          transform: scale(0.8);
        }

        .animated-fab .circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .animated-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 8px transparent, 0 12px 40px rgba(251, 146, 61, 0.5);
          background-color: white;
        }

        .animated-fab:hover .arr-1 {
          opacity: 0;
          transform: scale(0.8);
        }

        .animated-fab:hover .arr-2 {
          opacity: 1;
          transform: scale(1);
        }

        .animated-fab:hover svg {
          fill: #fb923d;
        }

        .animated-fab:active {
          scale: 0.95;
          box-shadow: 0 0 0 4px #fb923d;
        }

        .animated-fab:hover .circle {
          width: 80px;
          height: 80px;
          opacity: 1;
        }

        /* FAQ Button Styles */
        .faq-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background-color: #fb923d;
          background-image: linear-gradient(147deg, #fb923d 0%, #ea580c 74%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
          position: relative;
          transition: all 0.3s ease;
        }

        .faq-button:hover {
          animation: jello-vertical 1s both;
        }

        .faq-button svg {
          height: 1.5em;
          fill: white;
        }

        @keyframes jello-vertical {
          0% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(0.75, 1.25, 1);
          }
          40% {
            transform: scale3d(1.25, 0.75, 1);
          }
          50% {
            transform: scale3d(0.85, 1.15, 1);
          }
          65% {
            transform: scale3d(1.05, 0.95, 1);
          }
          75% {
            transform: scale3d(0.95, 1.05, 1);
          }
          100% {
            transform: scale3d(1, 1, 1);
          }
        }

        .tooltip {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          background-color: #fb923d;
          background-image: linear-gradient(147deg, #fb923d 0%, #ea580c 74%);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition-duration: 0.2s;
          pointer-events: none;
          letter-spacing: 0.5px;
          font-size: 12px;
          white-space: nowrap;
          z-index: 1000;
        }

        .tooltip::before {
          position: absolute;
          content: "";
          width: 10px;
          height: 10px;
          background-color: #ea580c;
          background-image: linear-gradient(147deg, #fb923d 0%, #ea580c 74%);
          transform: rotate(45deg);
          bottom: -15%;
          left: 50%;
          margin-left: -5px;
          transition-duration: 0.3s;
        }

        .faq-button:hover .tooltip {
          top: -40px;
          opacity: 1;
          transition-duration: 0.3s;
        }
      `}</style>
    </div>
  );
}