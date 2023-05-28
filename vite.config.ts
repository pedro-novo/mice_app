import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@common", replacement: path.resolve(__dirname, "./src/common") },
      { find: "@lib", replacement: path.resolve(__dirname, "./src/lib") },
      {
        find: "@webp",
        replacement: path.resolve(__dirname, "./src/assets/webp"),
      },
      {
        find: "@ui",
        replacement: path.resolve(__dirname, "./src/common/components/ui"),
      },
    ],
  },
});
