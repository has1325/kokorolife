import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import JapanSupport from "@/pages/japan";
import KoreaSupport from "@/pages/korea";
import Consultation from "@/pages/consultation";
import Blog from "@/pages/blog";
import Reviews from "@/pages/reviews";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/japan" component={JapanSupport} />
            <Route path="/korea" component={KoreaSupport} />
            <Route path="/consultation" component={Consultation} />
            <Route path="/blog" component={Blog} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
