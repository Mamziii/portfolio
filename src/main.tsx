import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>,
);
