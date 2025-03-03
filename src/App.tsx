
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssetRegister from "./pages/AssetRegister";
import AssetReceived from "./pages/AssetReceived";
import AssetAssessment from "./pages/AssetAssessment";
import AssetMove from "./pages/AssetMove";
import AssetCount from "./pages/AssetCount";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/asset-register" element={<AssetRegister />} />
          <Route path="/asset-received" element={<AssetReceived />} />
          <Route path="/asset-assessment" element={<AssetAssessment />} />
          <Route path="/asset-move" element={<AssetMove />} />
          <Route path="/asset-count" element={<AssetCount />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
