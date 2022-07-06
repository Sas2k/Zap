// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zap! Doc',
  tagline: 'Zap!',
  url: 'https://sas2k.github.io',
  baseUrl: '/Zap/docs/build/',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ZAP!-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sas2k', // Usually your GitHub org/user name.
  projectName: 'Zap', // Usually your repo name.
  

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/sas2k/Zap/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Zap! Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/ZAP!-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Usage/Usage',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/Sas2k/Zap',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'Quick-Start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/MB2kR2Hh9Z"
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Sas2k/Zap',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zap!, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
