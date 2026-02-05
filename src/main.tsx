import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Signal prerender that the app is ready
if (typeof document !== 'undefined') {
  document.dispatchEvent(new Event('prerender-ready'));
}
