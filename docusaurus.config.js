import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JACK.SYSTEMS',
  tagline: 'LLM Observability and Infrastructure',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://JackSteve-code.github.io',
  
  // FIXED: Logic to use root '/' locally and '/LLM-Observability/' on GitHub Pages
  baseUrl: process.env.NODE_ENV === 'production' ? '/LLM-Observability/' : '/',

  organizationName: 'JackSteve-code',
  projectName: 'LLM-Observability',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Serve docs at site root
          routeBasePath: '/', 
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      navbar: {
        title: 'JACK.SYSTEMS',
        items: [
          {
            href: 'https://github.com/JackSteve-code/LLM-Observability', 
            label: 'Source Code',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `© ${new Date().getFullYear()} Jack Steve | AI/ML Infrastructure Expert`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;