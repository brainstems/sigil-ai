import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Redeem from "./pages/Redeem";
import MemoryAI from "./pages/MemoryAI";
import NFTSecurity from "./pages/NFTSecurity";
import RevenueGeneration from "./pages/RevenueGeneration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/learn/memory-ai" element={<MemoryAI />} />
          <Route path="/learn/nft-security" element={<NFTSecurity />} />
          <Route path="/learn/revenue-generation" element={<RevenueGeneration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
