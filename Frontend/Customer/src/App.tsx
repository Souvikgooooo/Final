 import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Orders from "./pages/Orders";
//import FeedbackAndReviews from "./pages/FeedbackAndReviews";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BookServicePage from "./pages/BookServicePage";
import FeedbackAndReviews from "./pages/FeedbackAndReviews";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Home />} /> {/* Added route for /customer */}
          <Route path="/services" element={<Services />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/book-service" element={<BookServicePage />} />
          <Route path="/feedback" element={<FeedbackAndReviews />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
