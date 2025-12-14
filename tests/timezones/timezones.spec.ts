import { expect, test, describe } from 'vitest';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { TimeZone } from '@/timezone.ts';

const importModules = async (path: string) => {
  const items = await readdir(path, { recursive: true, withFileTypes: true });
  const modules: TimeZone[] = [];

  for (const item of items) {
    if (item.isFile()) {
      modules.push((await import(join('../../', item.parentPath, item.name)) as { default: TimeZone }).default);
    }
  }
  return modules;
};

describe('Timezones', async () => {
  const modules = await importModules('src/timezones/');

  for (const module of modules) {
    test.concurrent('timezone', () => {
      expect(typeof module === 'object').toBe(true);

      expect('zone_name' in module).toBe(true);
      expect(typeof module.zone_name === 'string').toBe(true);

      expect('gmt_offset' in module).toBe(true);
      expect(Array.isArray(module.gmt_offset)).toBe(true);
    });
  }
});
