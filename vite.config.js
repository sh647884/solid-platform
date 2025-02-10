import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist', // où seront générés les fichiers de build
  },
  server: {
    port: 5173,
  },
});