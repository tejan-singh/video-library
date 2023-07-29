import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppProvider, { AppContext } from "./Context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </StrictMode>
);

export { AppContext };
