import { defineConfig } from 'vite'
import reactSwc from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactSwc(), tailwindcss()],
  resolve: {
    alias: {
      // Import from library source directly — no npm publish needed for demo
      '@yems-ui/core': path.resolve(__dirname, './src'),
    },
  },
  // Entry point is demo/index.html (Vite picks up root index.html by default)
  root: '.',
  server: {
    port: 5175,
  },
  build: {
    // Demo site output — Vercel will serve this
    outDir: 'dist-demo',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})