import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/coisa-importante2/", // <<< MUITO IMPORTANTE!
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
