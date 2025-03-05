import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Element 'root'not found in DOM.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
