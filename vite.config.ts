import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/coisa-importante2/", // Substitua pelo nome do seu repositório
  plugins: [react()],
});
