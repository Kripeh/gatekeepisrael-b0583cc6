import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Installation from "./pages/Installation";
import SolarFence from "./pages/SolarFence";
import Pricing from "./pages/Pricing";
import WhyElectricFence from "./pages/WhyElectricFence";
import HomeSolutions from "./pages/HomeSolutions";
import ServiceAreas from "./pages/ServiceAreas";
import Blog from "./pages/Blog";
import BlogWildBoar from "./pages/BlogWildBoar";
import BlogTechnicalFencing from "./pages/BlogTechnicalFencing";
import ProductSolarEnergizers from "./pages/ProductSolarEnergizers";
import ProductInsulators from "./pages/ProductInsulators";
import ProductTestingEquipment from "./pages/ProductTestingEquipment";
import RegionalHaifa from "./pages/RegionalHaifa";
import RegionalCarmel from "./pages/RegionalCarmel";
import RegionalJordan from "./pages/RegionalJordan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/solar-fence" element={<SolarFence />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/why-electric-fence" element={<WhyElectricFence />} />
          <Route path="/home-solutions" element={<HomeSolutions />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/boar_history_israel" element={<BlogWildBoar />} />
          <Route path="/blog/electrical_fence_technology" element={<BlogTechnicalFencing />} />
          {/* Product Pages */}
          <Route path="/products/solar-energizers" element={<ProductSolarEnergizers />} />
          <Route path="/products/insulators" element={<ProductInsulators />} />
          <Route path="/products/testing-equipment" element={<ProductTestingEquipment />} />
          {/* Regional Landing Pages */}
          <Route path="/regions/haifa" element={<RegionalHaifa />} />
          <Route path="/regions/carmel-coast" element={<RegionalCarmel />} />
          <Route path="/regions/jordan-valley" element={<RegionalJordan />} />
          {/* 301 Redirect from old URL to preserve SEO equity */}
          <Route path="/wild-boar-electric-fence-protection" element={<Navigate to="/blog/boar_history_israel" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
