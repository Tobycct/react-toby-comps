import { defineConfig } from 'dumi';

const repo = 'react-toby-comps';

const logo =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K';

export default defineConfig({
  title: 'react-toby-comps',
  favicon: logo,
  logo: logo,
  outputPath: 'docs',
  mode: 'doc',
  resolve: {
    includes: ['mdx'],
  },
  mfsu: {
    development: {
      output: './.mfsu-dev',
    },
  },
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
  webpack5: {},
  fastRefresh: {},
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    // propFilter: {
    //   // 是否忽略从 node_modules 继承的属性，默认值为 false
    //   skipNodeModules: true,
    //   // 需要忽略的属性名列表，默认为空数组
    //   skipPropsWithName: [],
    //   // 是否忽略没有文档说明的属性，默认值为 false
    //   skipPropsWithoutDoc: false,
    // },
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
});
