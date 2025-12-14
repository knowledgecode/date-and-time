import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  esbuild: {
    target: 'es2021',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  test: {
    coverage: {
      exclude: ['src/**/*.d.ts'],
      include: ['src/**/*.ts'],
      provider: 'v8',
      reporter: ['json-summary', 'html']
    },
    include: ['tests/**/*.spec.ts']
  }
});
