import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const Home = lazy(() => import("@/pages/home"));
const ServicePage = lazy(() => import("@/pages/servicio"));

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicios/web-apps" component={() => <ServicePage slug="web-apps" />} />
        <Route path="/servicios/automatizacion" component={() => <ServicePage slug="automatizacion" />} />
        <Route path="/servicios/chatbots-ia" component={() => <ServicePage slug="chatbots-ia" />} />
        <Route path="/servicios/integraciones" component={() => <ServicePage slug="integraciones" />} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;