import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: IS_PRODUCTION ? "" : ".",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
