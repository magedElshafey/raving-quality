import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// bootstap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// aos
import "aos/dist/aos.css";
// i18next
import "./i18n";
// react router dom
import { BrowserRouter as Router } from "react-router-dom";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
