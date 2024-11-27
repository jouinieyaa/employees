import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Automatically opens the app in the browser
    host: true, // Ensures it's accessible from the local network
    hmr: true, // Enables Hot Module Replacement
    watch: {
      usePolling: true, // Resolves issues with file watching in some environments
    },
    historyApiFallback: true, // Redirects 404s to index.html for SPA routing
  },
})
