import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true
  },
  base: '/',
  server: {
    hmr: {
      host: '0.0.0.0',
      port: 3010,
    },
    chokidarWatchOptions: {
      usePolling: true
    }
  }
})