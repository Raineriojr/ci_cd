import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true
  },
  base: process.env.DEPLOY_PLATFORM === 'github' ? '/ci_cd/' : '/',
})