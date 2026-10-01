import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// New Clapp pages
import ClappLanding from "./pages/ClappLanding";
import Blogs from "./pages/Blogs";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
// Legacy pages (kept for backwards compatibility)
import Index from "./pages/Index";
import DataSecurity from "./pages/DataSecurity";
import Support from "./pages/Support";
import Partners from "./pages/Partners";
import ShopifyIntegration from "./pages/ShopifyIntegration";
import ColorPreview from "./pages/ColorPreview";
import EcommerceLanding from "./pages/EcommerceLanding";
import AIAgentPlatform from "./pages/AIAgentPlatform";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Enable dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* New Clapp routes */}
            <Route path="/" element={<ClappLanding />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/features" element={<Features />} />
            <Route path="/use-cases" element={<UseCases />} />
            {/* /privacy-policy is the canonical privacy policy URL - it is the
                address registered with Meta for app review and data deletion.
                /privacy is kept as a redirect so existing links keep working. */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/security" element={<Security />} />
            {/* Legacy routes (kept for backwards compatibility) */}
            <Route path="/index" element={<Index />} />
            <Route path="/ecommerce" element={<EcommerceLanding />} />
            <Route path="/ai" element={<AIAgentPlatform />} />
            <Route path="/data-security" element={<DataSecurity />} />
            <Route path="/support" element={<Support />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/shopify-integration" element={<ShopifyIntegration />} />
            <Route path="/color-preview" element={<ColorPreview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
