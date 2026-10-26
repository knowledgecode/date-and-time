import { spawnSync } from 'node:child_process';
import { expect, test } from 'vitest';

type Case = [method: string, input: string, amount: number, expected: string];

const utcCases: Case[] = [
  ['addDays', '2025-03-08T12:00:00.000Z', 1, '2025-03-09T12:00:00.000Z'],
  ['addDays', '2025-03-09T12:00:00.000Z', -1, '2025-03-08T12:00:00.000Z'],
  ['addDays', '2025-11-01T12:00:00.000Z', 1, '2025-11-02T12:00:00.000Z'],
  ['addDays', '2025-11-02T12:00:00.000Z', -1, '2025-11-01T12:00:00.000Z'],
  ['addDays', '2025-03-29T12:00:00.000Z', 1, '2025-03-30T12:00:00.000Z'],
  ['addDays', '2025-10-26T12:00:00.000Z', -1, '2025-10-25T12:00:00.000Z'],
  ['addMonths', '2025-01-31T00:30:00.000Z', 1, '2025-02-28T00:30:00.000Z'],
  ['addMonths', '2025-01-30T23:30:00.000Z', 1, '2025-02-28T23:30:00.000Z'],
  ['addMonths', '2025-03-31T00:30:00.000Z', -1, '2025-02-28T00:30:00.000Z'],
  ['addMonths', '2025-02-28T12:00:00.000Z', 1, '2025-03-28T12:00:00.000Z'],
  ['addMonths', '2025-11-30T12:00:00.000Z', -1, '2025-10-30T12:00:00.000Z'],
  ['addYears', '2024-02-29T00:30:00.000Z', 1, '2025-02-28T00:30:00.000Z'],
  ['addYears', '2024-02-28T23:30:00.000Z', 1, '2025-02-28T23:30:00.000Z'],
  ['addYears', '2024-02-29T00:30:00.000Z', -1, '2023-02-28T00:30:00.000Z'],
  ['addYears', '2024-03-09T12:00:00.000Z', 1, '2025-03-09T12:00:00.000Z']
];

const losAngelesCases: Case[] = [
  ['addDays', '2025-03-08T20:00:00.000Z', 1, '2025-03-09T19:00:00.000Z'],
  ['addMonths', '2025-02-28T20:00:00.000Z', 1, '2025-03-28T19:00:00.000Z'],
  ['addYears', '2024-03-09T20:00:00.000Z', 1, '2025-03-09T19:00:00.000Z']
];

const utcZones = ['UTC', 'utc', 'uTc'].flatMap((zone_name) => [
  zone_name,
  { zone_name, gmt_offset: [0] }
]);

const program = `
  import * as date from ${JSON.stringify(new URL('../src/index.ts', import.meta.url).href)};
  import Los_Angeles from ${JSON.stringify(new URL('../src/timezones/America/Los_Angeles.ts', import.meta.url).href)};

  const run = (cases, zones) => cases.flatMap(([method, input, amount]) =>
    zones.map(zone => {
      const original = new Date(input);
      const result = date[method](original, amount, zone);
      return {
        actual: result.toISOString(),
        original: original.toISOString(),
        distinct: result !== original
      };
    })
  );

  console.log(JSON.stringify([
    ...run(${JSON.stringify(utcCases)}, ${JSON.stringify(utcZones)}),
    ...run(${JSON.stringify(losAngelesCases)}, ['America/Los_Angeles', Los_Angeles])
  ]));
`;

interface Result {
  actual: string;
  original: string;
  distinct: boolean;
}

// Set TZ only in child processes, independently of other tests' local time zones.
test.each(['America/New_York', 'America/Los_Angeles', 'Europe/Berlin', 'Asia/Tokyo', 'UTC'])(
  'UTC objects and names use the same calendar arithmetic on a %s host',
  (hostZone) => {
    const result = spawnSync(process.execPath, ['--import', 'tsx', '--input-type', 'module', '--eval', program], {
      env: { ...process.env, TZ: hostZone },
      encoding: 'utf8'
    });

    expect(result.status, result.stderr).toBe(0);

    const actual = JSON.parse(result.stdout) as Result[];
    const expected = [
      ...utcCases.flatMap(([, input, , value]) => utcZones.map(() => ({
        actual: value, original: input, distinct: true
      }))),
      ...losAngelesCases.flatMap(([, input, , value]) => Array.from({ length: 2 }, () => ({
        actual: value, original: input, distinct: true
      })))
    ];

    expect(actual).toEqual(expected);
  }
);
