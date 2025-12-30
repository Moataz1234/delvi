import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center" style={{background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)'}}>
      <Container className="text-center px-4">
        <div className="mb-5">
          <h1 className="display-1 fw-bold text-brand-orange mb-4">404</h1>
          <p className="h3 fw-semibold text-primary mb-3">
            {t.notFound.subtitle}
          </p>
          <p className="text-secondary mb-5">
            {t.general.notFound}
          </p>
        </div>
        
        <Link to="/" className="text-decoration-none">
          <Button 
            size="lg" 
            className="bg-brand-orange border-0 text-white px-5 py-3"
          >
            <Home className="me-2" style={{width: '20px', height: '20px'}} />
            {t.notFound.backHome}
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
