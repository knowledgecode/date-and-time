/**
 * @description
 * This script generates timezone data files from a CSV file obtained from timezonedb.com,
 * creates individual timezone files, and an integrated timezone file for easier imports.
 */

import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import prettier from 'prettier';
import type { TimeZone } from '@/zone.ts';

const createTimeZones = (csv: string) => {
  const map = new Map<string, TimeZone>();

  csv.split('\n').forEach(line => {
    const [zone_name, , , , gmt_offset] = line.split(',');

    if (zone_name && !zone_name.endsWith('UTC')) {
      const data = map.get(zone_name);

      if (data) {
        if (!data.gmt_offset.includes(+gmt_offset)) {
          data.gmt_offset.push(+gmt_offset);
        }
      } else {
        map.set(zone_name, { zone_name, gmt_offset: [+gmt_offset] });
      }
    }
  });
  return map;
};

const getPath = (timezone: TimeZone) => {
  const re = /[^/]+$/;
  return {
    dir: join('src', 'timezones', timezone.zone_name.replace(re, '')),
    name: re.exec(timezone.zone_name)?.[0] ?? ''
  };
};

const format = (timezone: TimeZone) => {
  const code = `export default {
    zone_name: '${timezone.zone_name}',
    gmt_offset: ${JSON.stringify(timezone.gmt_offset.sort((a, b) => b - a))}
  };`;
  return prettier.format(code, { parser: 'typescript', singleQuote: true, trailingComma: 'none' });
};

const sortMap = (map: Map<string, TimeZone>) => {
  return Array.from(map.values()).sort((a, b) => getPath(a).name.localeCompare(getPath(b).name));
};

const formatAll = (map: Map<string, TimeZone>) => {
  const code = [];

  code.push('import { TimeZone } from \'@/zone.ts\';');

  for (const timezone of sortMap(map)) {
    const name = getPath(timezone).name.replace(/-/g, '_');

    code.push(`export const ${name}: TimeZone = {
      zone_name: '${timezone.zone_name}',
      gmt_offset: ${JSON.stringify(timezone.gmt_offset.sort((a, b) => b - a))}
    };`);
  }
  return prettier.format(code.join('\n\n'), { parser: 'typescript', singleQuote: true, trailingComma: 'none' });
};

const path = process.argv[2];

if (!path) {
  console.error('Please provide a CSV file path');
  process.exit();
}

const csv = await readFile(path, 'utf8');
const map = createTimeZones(csv);

// Generate individual timezone files
for (const timezone of map.values()) {
  const { dir, name } = getPath(timezone);

  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, `${name}.ts`), await format(timezone));
}

// Generate integrated timezone file
await writeFile(join('src', 'timezone.ts'), await formatAll(map));
