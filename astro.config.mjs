import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  srcDir: './docs',
  site: 'https://knowledgecode.github.io',
  base: '/date-and-time',
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [
    starlight({
      title: 'date-and-time',
      description: 'The simplest, most intuitive date and time library',
      logo: {
        src: './public/logo.png',
        alt: 'date-and-time',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/knowledgecode/date-and-time' },
        { icon: 'npm', label: 'npm', href: 'https://www.npmjs.com/package/date-and-time' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'guide/index' },
            { label: 'Installation', slug: 'guide/installation' },
            { label: 'Quick Start', slug: 'guide/quick-start' },
          ],
        },
        {
          label: 'API Reference',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'api/index' },
            {
              label: 'Core Functions',
              items: [
                { label: 'format()', slug: 'api/format' },
                { label: 'parse()', slug: 'api/parse' },
                { label: 'compile()', slug: 'api/compile' },
                { label: 'preparse()', slug: 'api/preparse' },
                { label: 'isValid()', slug: 'api/isValid' },
                { label: 'transform()', slug: 'api/transform' },
                { label: 'addYears()', slug: 'api/addYears' },
                { label: 'addMonths()', slug: 'api/addMonths' },
                { label: 'addDays()', slug: 'api/addDays' },
                { label: 'addHours()', slug: 'api/addHours' },
                { label: 'addMinutes()', slug: 'api/addMinutes' },
                { label: 'addSeconds()', slug: 'api/addSeconds' },
                { label: 'addMilliseconds()', slug: 'api/addMilliseconds' },
                { label: 'subtract()', slug: 'api/subtract' },
              ],
            },
            {
              label: 'Utility Functions',
              items: [
                { label: 'isLeapYear()', slug: 'api/utils/isLeapYear' },
                { label: 'isSameDay()', slug: 'api/utils/isSameDay' },
                { label: 'getDaysInMonth()', slug: 'api/utils/getDaysInMonth' },
                { label: 'getISOWeekYear()', slug: 'api/utils/getISOWeekYear' },
                { label: 'getISOWeek()', slug: 'api/utils/getISOWeek' },
              ],
            },
          ],
        },
        { label: 'Locales', slug: 'locales' },
        { label: 'Timezones', slug: 'timezones' },
        { label: 'Plugins', slug: 'plugins' },
        { label: 'Migration Guide', slug: 'migration' },
      ],
    }),
  ],
});
