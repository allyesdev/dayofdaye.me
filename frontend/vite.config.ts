import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';

export default defineConfig({
  resolve: {
    alias: [{ find: '@/', replacement: `${path.resolve(__dirname, 'src')}/` }],
  },
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    svgr(),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: './index.html',
      },
    },
  },
  esbuild: {
    pure: ['console.log'],
  },
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://0.0.0.0:8000', // local
        changeOrigin: true,
      },
    },
  },
});
