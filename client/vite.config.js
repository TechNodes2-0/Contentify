import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/profile": {
        target: "https://authentication-rb8w.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    }
  }
});
