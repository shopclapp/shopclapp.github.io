import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
            <Route path="/" element={<AIAgentPlatform />} />
            <Route path="/ecommerce" element={<EcommerceLanding />} />
            <Route path="/ai" element={<AIAgentPlatform />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
