import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataSecurity from "./pages/DataSecurity";
import Support from "./pages/Support";
import Partners from "./pages/Partners";
import ShopifyIntegration from "./pages/ShopifyIntegration";
import ColorPreview from "./pages/ColorPreview";
import EcommerceLanding from "./pages/EcommerceLanding";
import EcommerceCharles from "./pages/EcommerceCharles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EcommerceCharles />} />
          <Route path="/old" element={<Index />} />
          <Route path="/ecommerce" element={<EcommerceLanding />} />
          <Route path="/charles" element={<EcommerceCharles />} />
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

export default App;
