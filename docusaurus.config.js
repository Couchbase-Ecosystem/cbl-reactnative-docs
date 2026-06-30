
import 'dotenv/config';
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Couchbase Lite Enterprise Edition Native Module',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cbl-reactnative.dev',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'couchbase', // Usually your GitHub org/user name.
  projectName: 'cbl-reactnative-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // OneTrust cookie consent (Couchbase script; see static/js/onetrust-wrapper.js
  // for cbl-reactnative.dev persistence workaround).
  headTags: [
    {
      tagName: 'script',
      attributes: {
        src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
        type: 'text/javascript',
        charset: 'UTF-8',
        'data-domain-script':
          process.env.ONETRUST_DOMAIN_SCRIPT ||
          '748511ff-10bf-44bf-88b8-36382e5b5fd9',
      },
    },
    {
      tagName: 'script',
      attributes: {
        src: '/js/onetrust-wrapper.js',
        type: 'text/javascript',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `!function(){var e,t,n;e="${process.env.REO_CLIENT_ID}",t=function(){Reo.init({clientID:"${process.env.REO_CLIENT_ID}"})},(n=document.createElement("script")).src="https://static.reo.dev/"+e+"/reo.js",n.async=!0,n.onload=t,document.head.appendChild(n)}();`,
    },
  ],

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
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1.1',
              path: '',
              banner: 'none',
            },
            '1.0': {
              label: 'v1.0',
              path: '1.0',
              banner: 'none',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/couchbase/cbl-reactnative-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/couchbase/cbl-reactnative-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'hourly',
        },
        googleTagManager: {
          containerId: 'GTM-MVPNN2',
        },
        gtag: {
          trackingID: 'G-CVKKEY0D6B',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false, 
        respectPrefersColorScheme: false,
      },
      image: 'img/couchbase-social-card.jpg',
      navbar: {
        title: 'Couchbase Lite React Native',
        logo: {
          alt: 'Couchbase Logo',
          src: 'img/couchbase.svg',
        },
        items: [
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/tags/couchbase/info/',
              },
              {
                label: 'Discord',
                href: 'https://bit.ly/3NbK5vg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/couchbase',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/CouchbaseServer/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Couchbase/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/couchbase/couchbase-lite-react-native',
              },
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/@couchbase/couchbase-lite-react-native',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Couchbase.   Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
