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
        src: './docs/assets/logo.png',
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
            { label: 'Introduction', link: '/guide/' },
            { label: 'Installation', link: '/guide/installation' },
            { label: 'Quick Start', link: '/guide/quick-start' },
          ],
        },
        {
          label: 'API Reference',
          collapsed: true,
          items: [
            { label: 'Overview', link: '/api/' },
            {
              label: 'Core Functions',
              items: [
                { label: 'format()', link: '/api/format' },
                { label: 'parse()', link: '/api/parse' },
                { label: 'compile()', link: '/api/compile' },
                { label: 'preparse()', link: '/api/preparse' },
                { label: 'isValid()', link: '/api/isvalid' },
                { label: 'transform()', link: '/api/transform' },
                { label: 'addYears()', link: '/api/addyears' },
                { label: 'addMonths()', link: '/api/addmonths' },
                { label: 'addDays()', link: '/api/adddays' },
                { label: 'addHours()', link: '/api/addhours' },
                { label: 'addMinutes()', link: '/api/addminutes' },
                { label: 'addSeconds()', link: '/api/addseconds' },
                { label: 'addMilliseconds()', link: '/api/addmilliseconds' },
                { label: 'subtract()', link: '/api/subtract' },
              ],
            },
            {
              label: 'Utility Functions',
              items: [
                { label: 'isLeapYear()', link: '/api/utils/isleapyear' },
                { label: 'isSameDay()', link: '/api/utils/issameday' },
                { label: 'getDaysInMonth()', link: '/api/utils/getdaysinmonth' },
                { label: 'getISOWeekYear()', link: '/api/utils/getisoweekyear' },
                { label: 'getISOWeek()', link: '/api/utils/getisoweek' },
              ],
            },
          ],
        },
        { label: 'Locales', link: '/locales' },
        { label: 'Timezones', link: '/timezones' },
        { label: 'Plugins', link: '/plugins' },
        { label: 'Migration Guide', link: '/migration' },
      ],
    }),
  ],
});
