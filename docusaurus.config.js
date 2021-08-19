const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "欢迎来到悠悦易存",
  tagline: "智联空间，共享悠悦生活",
  // tagline: 'Smart link space，Share the best life',
  url: "https://vxiaozhe1998.github.io",
  baseUrl: "/yespace-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo-white.svg",
  organizationName: "Vxiaozhe1998", // Usually your GitHub org/user name.
  projectName: "yespace-docs", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["en", "zh-cn"],
  },
  themeConfig: {
    // algolia: {
    //   contextualSearch: true,
    // },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        lightIcon: "\u2600",
        // React 内联样式对象
        // 参见 https://zh-hans.reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    navbar: {
      title: "Yespace",
      logo: {
        alt: "Yesoace Logo",
        src: "img/logo-white.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            //   {
            //   label: 'Tutorial',
            //   to: '/docs/intro',
            // },
            {
              label: "Deposit and fetch",
              to: "/docs/basic/aboutAccess",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Privacy",
              to: "/docs/terms/userPrivacyPolicy",
            },
            {
              label: "Contact",
              to: "/docs/afterSales/contactUs",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Yespace, Yespace Intelligent Network Technology Co., Ltd`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/Vxiaozhe1998/yespace-docs/tree/gh-pages/",
        },
        blog: {
          /**
           * 文件系统中，数据对站点的相对路径。
           */
          path: "blog",
          /**
           * 编辑您站点的 URL。
           * Docusaurus will compute the final editUrl with "editUrl + relativeDocPath"
           */
          editUrl:
            "https://github.com/Vxiaozhe1998/yespace-docs/tree/gh-pages/blog/",
          /**
           * For advanced cases, compute the edit url for each Markdown file yourself.
           */
          editUrl: ({ locale, blogDirPath, blogPath }) => {
            return `https://github.com/Vxiaozhe1998/yespace-docs/tree/gh-pages/blog/${blogDirPath}/${blogPath}`;
          },
          /**
           * 在提交本地文件至 Git 时有用。
           * When Markdown files are localized, the edit url will target the localized file,
           * instead of the original unlocalized file.
           * 注：此选项将在 editUrl 为函数时被自动忽略
           */
          editLocalizedFiles: false,
          /**
           * 用以优化 SEO 的博客页面标题
           */
          blogTitle: "新闻",
          /**
           * 用以优化 SEO 的博客页面源描述
           */
          blogDescription: "新闻内容",
          /**
           * 显示于博客侧边栏的博文数量，设置为
           * 'ALL' 以显示所有博文，0 则禁用此功能
           */
          blogSidebarCount: 5,
          /**
           * 博客侧边栏标题
           */
          blogSidebarTitle: "最近的文章",
          /**
           * 通往您博客的 URL 路由。
           * *请务必不要*添加斜杠。
           */
          routeBasePath: "blog",
          include: ["*.md", "*.mdx"],
          postsPerPage: 10,
          /**
           * 博客页面所使用的主题组件。
           */
          blogListComponent: "@theme/BlogListPage",
          blogPostComponent: "@theme/BlogPostPage",
          blogTagsListComponent: "@theme/BlogTagsListPage",
          blogTagsPostsComponent: "@theme/BlogTagsPostsPage",
          /**
           * 传递至 MDX 的 Remark 及 Rehype 插件。
           */
          remarkPlugins: [
            /* require('remark-math') */
          ],
          rehypePlugins: [],
          /**
           * 于 Docusaurus 自带的默认 Remark 及 Rehype 插件前
           * 传递至 MDX 的自定义 Remark 及 Rehype 插件。
           */
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          /**
           * 截断标记，可为正则表达式或字符串。
           */
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          /**
           * 显示博文的估计阅读时间。
           */
          showReadingTime: true,
          /**
           * 博客订阅；若 feedOptions 为 undefined，则不会生成订阅源。
            
           */
          feedOptions: {
            type: "rss", // 必填，可为 'rss' | 'feed' | 'all'
            title: "", // 默认为 siteConfig.title
            description: "", // 默认为 `${siteConfig.title} Blog`
            copyright: "Yespace",
            language: "en", // 参见：http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
