import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    target: 'es2021',
    sourcemap: true
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
