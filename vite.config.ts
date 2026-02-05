import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    mode === "production" && prerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/installation",
        "/solar-fence",
        "/pricing",
        "/why-electric-fence",
        "/home-solutions",
        "/service-areas",
      ],
      renderer: {
        renderAfterDocumentEvent: "prerender-ready",
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
