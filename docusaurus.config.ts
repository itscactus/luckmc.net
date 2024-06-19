import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LuckMC',
  tagline: 'En iyi minecraft sunucusu fasa fiso',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://luckmc.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'luckmc-net', // Usually your GitHub org/user name.
  projectName: 'luckmc.net', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    navbar: {
      title: 'LuckMC',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Başlangıç',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/kurallar', label: 'Kurallar', position: 'left'},
        {
          href: 'https://github.com/luckmc-net/luckmc.net',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Genel',
          items: [
            {
              label: 'Giriş',
              to: '/docs/baslangic',
            },
          ],
        },
        {
          title: 'Topluluk',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Aq8XKPncDX',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com',
            }
          ],
        },
        {
          title: 'Fazlası',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/luckmc-net',
            },
          ],
        },
      ],
      copyright: `Tüm hakları saklıdır © ${new Date().getFullYear()} LuckMC & Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
