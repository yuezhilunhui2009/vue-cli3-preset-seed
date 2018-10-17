const fs = require('fs')
const path = require('path')

/**
 * 生成多页面配置
 * @param {string} pagesDir 多页面文件夹相对路径
 */
const generatePagesConfig = ({ pagesDir, customConfig = {} }) => {
  // 多页面文件夹目录
  const PAGES_DIR = path.resolve(__dirname, pagesDir)
  let pagesConfig = {}

  // 读取多页面目录生成 vue.config.js 中的 pages 配置
  if (!fs.existsSync(PAGES_DIR)) {
    throw Error('vue.config.js pages 配置路径不存在')
  }

  fs.readdirSync(PAGES_DIR)
    .reduce((pagesConfig, fileName) => {
      pagesConfig[fileName] = {
        // page 的入口
        entry: path.resolve(PAGES_DIR, fileName, 'index.js'),
        template: path.resolve(PAGES_DIR, fileName, 'index.html'),
        // 在 dist/index.html 的输出
        filename: `${fileName}.html`
      }
      return pagesConfig
    }, pagesConfig)

  return {
    ...pagesConfig,
    ...customConfig
  }
}

/**
 * 样式预处理全局变量
 * @param {string} rule webpack 规则
 */
const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less')
      ]
    })
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://cdn_static_root/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  transpileDependencies: [],
  productionSourceMap: true,
  pages: generatePagesConfig({ pagesDir: './src/pages/' }),
  chainWebpack: config => {
    // 路径别名
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@apis', path.resolve(__dirname, './src/apis'))
      .set('@assets', path.resolve(__dirname, './src/assets'))
      .set('@comps', path.resolve(__dirname, './src/components'))
      .set('@pages', path.resolve(__dirname, './src/pages'))
      .set('@scripts', path.resolve(__dirname, './src/scripts'))
      .set('@styles', path.resolve(__dirname, './src/styles'))

    // 添加样式预处理全局变量插件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  /**
   * 本地代理配置
   * 完整选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
   */
  devServer: {
    proxy: {
      // '/api/*': {
      //   target: 'https://baidu.com',
      //   changeOrigin: true
      // }
    }
  }
}
