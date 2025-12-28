import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/custom.css";
import App from "./App.jsx";
import { init } from "@plausible-analytics/tracker";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

init({
  domain: "adarcher.app",
  endpoint: "https://plausible.adarcher.app/api/event",
  outboundLinks: true,
  fileDownloads: true,
  formSubmissions: true,
});
