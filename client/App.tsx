// Bootstrap CSS is loaded via CDN in index.html
import "./bootstrap-custom.css";
import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/hooks/use-translation";
import Index from "./pages/Index";
import RideBooking from "./pages/RideBooking";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
import WhyUs from "./pages/WhyUs";
import News from "./pages/News";
import Statistics from "./pages/Statistics";
import Founders from "./pages/Founders";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <TranslationProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book-ride" element={<RideBooking />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/founders" element={<Founders />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/FAQ" element={<FAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </TranslationProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
