import { defineConfig } from 'dumi';

const repo = 'react-toby-comps';

const logo =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

export default defineConfig({
  title: 'react-toby-comps',
  favicon: logo,
  logo: logo,
  outputPath: 'docs-dist',
  mode: 'doc',
  resolve: {
    includes: ['mdx'],
  },
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }
    ],
  ],
  chainWebpack: function (config, { webpack, env }) {
    config.merge({
      cache: {
        type: 'filesystem',
        name: 'ruc-' + env,
        buildDependencies: {
          config: [__filename],
        },
        store: 'pack',
      },
    });
  },
  dynamicImport: false,
  locales: [['zh-CN', '中文']],
  hash: true,
  fastRefresh: {},
  apiParser: {
    propFilter: (prop, component) => {
      if (prop.declarations !== undefined && prop.declarations.length > 0) {
        const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
          return (
            !declaration.fileName.includes('node_modules') ||
            declaration.fileName.includes('Popover') ||
            declaration.fileName.includes('TouchElement')
          );
        });

        return Boolean(hasPropAdditionalDescription);
      }

      return true;
    },
  },
  // Because of using GitHub Pages
  base: repo ? `/${repo}/` : '/',
  publicPath: repo ? `/${repo}/` : '/',
  styles: [
    `
    #root .__dumi-default-menu-header p {
      display:none;
    }
    #root .__dumi-default-menu-header h1 {
      font-size: 24px;
      margin: 16px auto;
    }

    #root .__dumi-default-menu-header{
      padding-top: 10px;
    }

    #root .__dumi-default-menu-logo{
      display:none;
    }

    `,
  ],
});
