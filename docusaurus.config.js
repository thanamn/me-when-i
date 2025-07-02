// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Me When I Thesis',
  tagline: 'A Digital Thesis on Meme Culture',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://me-when-i-thesis.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-username', // Usually your GitHub org/user name.
  projectName: 'me-when-i-thesis', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Remove edit links for thesis content
          // editUrl: 'https://github.com/your-username/me-when-i-thesis/tree/main/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Me When I Thesis',
        logo: {
          alt: 'Thesis Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'thesisSidebar',
            position: 'left',
            label: 'Thesis',
          },
          {
            href: 'https://github.com/your-username/me-when-i-thesis',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Thesis',
            items: [
              {
                label: 'Read Thesis',
                to: '/docs/00_title-page',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Abstract',
                to: '/docs/01_abstract',
              },
              {
                label: 'Works Cited',
                to: '/docs/14_works_cited',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Appendix',
                to: '/docs/15_appendix',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/your-username/me-when-i-thesis',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Me When I Thesis. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
