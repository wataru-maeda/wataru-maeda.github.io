import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "sonner";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useTranslation } from "react-i18next";
import React from "react";
import ErrorBoundary from "./components/layouts/ErrorBoundary";
import Home from "./pages/Home";
import { system } from "./theme";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - Chakra UI v3 handles theming through the system configuration in theme.ts
// - Color mode (light/dark) is managed by Chakra's built-in color mode system

function App() {
  const { i18n } = useTranslation();

  // Update html lang attribute when language changes
  React.useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <ChakraProvider value={system}>
        <Toaster />
        <Router />
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default App;
