import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "3d-portfolio-website", // <-- 👈 add this line
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
});
