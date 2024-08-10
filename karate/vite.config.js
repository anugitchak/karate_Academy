import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Only use if necessary
      // interval: 300,  // Adjust interval if needed (not directly available in Vite, inferred)
    },
    // Optional: restrict watched files
    fs: {
      strict: true, // Limits to serve only within the project root
    },
  },
});
