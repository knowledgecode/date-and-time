/**
 * @description
 * This script reads timezone data from a CSV file obtained from timezonedb.com,
 * extracts unique timezone names, and generates a mapping of timezone long names
 * to their abbreviations by analyzing timezone name variations across historical time periods.
 */

import { readFile } from 'node:fs/promises';
import prettier from 'prettier';
import zonenames from '@/zonenames.ts';

const getTimezone = async (path: string) => {
  try {
    const csv = await readFile(path, 'utf8');
    const timezones = new Set<string>();

    csv.split('\n').forEach(line => {
      const [zone_name] = line.split(',');

      if (zone_name) {
        timezones.add(zone_name);
      }
    });
    return Array.from(timezones);
  } catch (e) {
    console.error(`Error reading CSV file: ${path}`);
    console.error(e);
    return [];
  }
};

const getTimezoneName = (dtf: Intl.DateTimeFormat, time: number) => {
  return dtf.formatToParts(time).find(part => part.type === 'timeZoneName')?.value.replace(/^GMT([+-].+)?$/, '') ?? '';
};

const getTimezoneNames = (timeZone: string, names: Record<string, string>) => {
  const dtf = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'long' });
  const map = new Map<string, string>();
  const errors = new Set<string>();

  const start = Date.UTC(0, -12 * 16, 1);                   // year 1884
  const end = Date.UTC(new Date().getUTCFullYear(), 0, 1);  // current year
  const step = 30 * 24 * 60 * 60 * 1000;                    // 30days

  for (let i = start, len = end; i < len; i += step) {
    const timeZoneName = getTimezoneName(dtf, i);

    if (timeZoneName && !map.has(timeZoneName)) {
      const abbreviation = names[timeZoneName];

      if (abbreviation) {
        map.set(timeZoneName, abbreviation);
      } else {
        errors.add(timeZoneName);
      }
    }
  }
  return { names: map, errors };
};

const sort = (timeZoneNames: Map<string, string>) => {
  return new Map(Array.from(timeZoneNames).sort((a, b) => a[0].localeCompare(b[0])));
};

const format = (code: Map<string, string>) => {
  return prettier.format(`export default {
    ${Array.from(code).map(([key, value]) => `'${key}': '${value}',`).join('\n')}
  };`, { parser: 'typescript', singleQuote: true, trailingComma: 'none' });
};

const path = process.argv[2];

if (!path) {
  console.error('Please provide a CSV file path');
  process.exit();
}

const timezones = await getTimezone(path);
const timeZoneNames = new Map<string, string>();
const errorNames = new Set<string>();

timezones.forEach(timeZone => {
  const { names, errors } = getTimezoneNames(timeZone, zonenames);

  for (const [key, value] of names.entries()) {
    timeZoneNames.set(key, value);
  }
  errors.forEach(err => errorNames.add(err));
});

if (errorNames.size) {
  console.error('Not Found');
  console.error(Array.from(errorNames));
} else {
  process.stdout.write(await format(sort(timeZoneNames)));
}
