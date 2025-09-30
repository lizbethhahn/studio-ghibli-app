import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // proxy: { '/api': 'http://localhost:7043' } // <- uncomment & adjust if you call a backend
  },
  build: {
    outDir: 'build' // keep CRA's output folder name
  }
})
