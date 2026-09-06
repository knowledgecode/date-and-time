import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src')
    }
  },
  test: {
    coverage: {
      exclude: ['src/**/*.d.ts'],
      include: ['src/**/*.ts'],
      provider: 'v8',
      reporter: ['html', 'lcov']
    },
    include: ['tests/**/*.spec.ts']
  }
});
