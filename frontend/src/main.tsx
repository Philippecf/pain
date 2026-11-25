import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import { StrictMode } from "react";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
