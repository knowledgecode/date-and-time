/**
 * @description
 * This script extracts GMT offset values from a CSV file obtained from timezonedb.com,
 * creates subdirectories for each timezone under the src/timezones directory,
 * and outputs timezone data as TypeScript files.
 */

import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import prettier from 'prettier';
import type { TimeZone } from '@/timezone.ts';

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
    name: `${re.exec(timezone.zone_name)?.[0] ?? ''}.ts`
  };
};

const format = (timezone: TimeZone) => {
  const code = `export default {
    zone_name: '${timezone.zone_name}',
    gmt_offset: ${JSON.stringify(timezone.gmt_offset.sort((a, b) => b - a))}
  };`;
  return prettier.format(code, { parser: 'typescript', singleQuote: true, trailingComma: 'none' });
};

const path = process.argv[2];

if (!path) {
  console.error('Please provide a CSV file path');
  process.exit();
}

const csv = await readFile(path, 'utf8');
const map = createTimeZones(csv);

for (const timezone of map.values()) {
  const { dir, name } = getPath(timezone);

  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, name), await format(timezone));
}
