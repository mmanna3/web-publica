/* eslint-disable spaced-comment */
/// <reference types="vitest" />
/// <reference types="Vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
  plugins: [react()],
});
