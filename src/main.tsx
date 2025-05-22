import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <div
    style={{
      backgroundColor: "rgb(253, 216, 229)",
      minHeight: "100vh",
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </div>
);
