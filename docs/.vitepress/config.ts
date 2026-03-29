import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'date-and-time',
  description: 'The simplest, most intuitive date and time library',
  base: '/date-and-time/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/date-and-time/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Locales', link: '/locales' },
      { text: 'Timezones', link: '/timezones' },
      { text: 'Plugins', link: '/plugins' },
      { text: 'Migration', link: '/migration' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub', link: 'https://github.com/knowledgecode/date-and-time' },
          { text: 'npm', link: 'https://www.npmjs.com/package/date-and-time' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'Core Functions',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'format()', link: '/api/format' },
            { text: 'parse()', link: '/api/parse' },
            { text: 'compile()', link: '/api/compile' },
            { text: 'preparse()', link: '/api/preparse' },
            { text: 'isValid()', link: '/api/isValid' },
            { text: 'transform()', link: '/api/transform' },
            { text: 'addYears()', link: '/api/addYears' },
            { text: 'addMonths()', link: '/api/addMonths' },
            { text: 'addDays()', link: '/api/addDays' },
            { text: 'addHours()', link: '/api/addHours' },
            { text: 'addMinutes()', link: '/api/addMinutes' },
            { text: 'addSeconds()', link: '/api/addSeconds' },
            { text: 'addMilliseconds()', link: '/api/addMilliseconds' },
            { text: 'subtract()', link: '/api/subtract' },
          ]
        },
        {
          text: 'Utility Functions',
          items: [
            { text: 'isLeapYear()', link: '/api/utils/isLeapYear' },
            { text: 'isSameDay()', link: '/api/utils/isSameDay' },
            { text: 'getDaysInMonth()', link: '/api/utils/getDaysInMonth' },
            { text: 'getISOWeekYear()', link: '/api/utils/getISOWeekYear' },
            { text: 'getISOWeek()', link: '/api/utils/getISOWeek' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/knowledgecode/date-and-time' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2015 KNOWLEDGECODE'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})
