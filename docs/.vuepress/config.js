module.exports = {
  base: '/vuepress-proj/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Your title',
      description: 'To test Vuepress by publishing VueCLI docs'
    },
  },
  serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  theme: '',
  themeConfig: {
    repo: 'vuejs/vue-cli',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinks: false,
    lastUpdated: false,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Plugin Dev Guide',
            items: [
              { text: 'Plugin Dev Guide', link: '/dev-guide/plugin-dev.md' },
              { text: 'UI Plugin Info', link: '/dev-guide/ui-info.md' },
              { text: 'UI Plugin API', link: '/dev-guide/ui-api.md' },
              { text: 'UI Localization', link: '/dev-guide/ui-localization.md' }
            ]
          },
          {
            text: 'Plugins',
            items: [
              { text: 'Babel', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel' },
              { text: 'TypeScript', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript' },
              { text: 'ESLint', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint' },
              { text: 'PWA', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa' },
              { text: 'Jest', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest' },
              { text: 'Mocha', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha' },
              { text: 'Cypress', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress' },
              { text: 'Nightwatch', link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch' }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            '/guide/',
            '/guide/installation',
            {
              title: 'Basics',
              collapsable: false,
              children: [
                '/guide/prototyping',
                '/guide/creating-a-project',
                '/guide/plugins-and-presets',
                '/guide/cli-service'
              ]
            },
            {
              title: 'Development',
              collapsable: false,
              children: [
                '/guide/browser-compatibility',
                '/guide/html-and-static-assets',
                '/guide/css',
                '/guide/webpack',
                '/guide/mode-and-env',
                '/guide/build-targets',
                '/guide/deployment'
              ]
            }
          ],
          '/dev-guide/': [
            '/dev-guide/plugin-dev.md',
            {
              title: 'UI Development',
              collapsable: false,
              children: [
                '/dev-guide/ui-info.md',
                '/dev-guide/ui-api.md',
                '/dev-guide/ui-localization.md'
              ]
            }
          ]
        }
      }
    }
  }
}
