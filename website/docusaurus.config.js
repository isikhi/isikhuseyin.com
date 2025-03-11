module.exports = {
  title: 'Huseyin ISIK',
  tagline: 'A curious and dedicated backend developer and team lead with an interest in startups, DevSecOps, MLOps, road bike, bike repair, simple electronics, and fixing things both at home and beyond.',
  url: 'https://isikhuseyin.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'isikhi',
  projectName: 'isikhuseyin.com',
  themeConfig: {
    navbar: {
      title: 'Huseyin ISIK',
      logo: {
        alt: 'Just Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
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
              label: 'Blogs',
              to: 'blog/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitLab',
              href: 'https://gitlab.com/isikhi',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/isikhi',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@huseyin.isik000',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/isikhi/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
