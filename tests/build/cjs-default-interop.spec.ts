import { describe, expect, test } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import type { Locale } from '@/locale.ts';
import type { Numeral } from '@/numeral.ts';

const require = createRequire(import.meta.url);
const dist = (path: string) => new URL(`../../dist/${path}`, import.meta.url);

const built = ['locales/en.d.cts', 'numerals/latn.d.cts'].every((path) => existsSync(dist(path)));

describe.skipIf(!built)('CJS default export interop', () => {
  test('locale module: require() keeps returning the value directly and via .default', () => {
    const mod = require('../../dist/locales/ja.cjs') as Locale & { default: unknown };
    expect(typeof mod.getLocale).toBe('function');
    expect(mod.default).toBe(mod);
    expect(Object.keys(mod)).not.toContain('default');
  });

  test('numeral module: require() keeps returning the value directly and via .default', () => {
    const mod = require('../../dist/numerals/arab.cjs') as Numeral & { default: unknown };
    expect(typeof mod.encode).toBe('function');
    expect(mod.default).toBe(mod);
    expect(Object.keys(mod)).not.toContain('default');
  });

  test('plugin module (named export only): does not gain an unexpected default property', () => {
    const mod = require('../../dist/plugins/ordinal.cjs') as { default?: unknown };
    expect(mod.default).toBeUndefined();
  });

  test('locale/numeral modules each generate a matching .d.cts using export=', () => {
    expect(readFileSync(dist('locales/ja.d.cts'), 'utf8')).toMatch(/^export = \w+;$/m);
    expect(readFileSync(dist('numerals/arab.d.cts'), 'utf8')).toMatch(/^export = \w+;$/m);
  });
});
