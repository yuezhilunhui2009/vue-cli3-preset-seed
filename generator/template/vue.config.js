const fs = require('fs')
const path = require('path')

/**
 * 生成多页面配置
 * @param {string} pagesDir 多页面文件夹相对路径
 */
const generatePagesConfig = ({ pagesDir, customConfig = {} }) => {
    // 多页面文件夹目录
    const PAGES_DIR = path.resolve(__dirname, pagesDir)
    const pagesConfig = {}

    // 读取多页面目录生成 vue.config.js 中的 pages 配置
    fs.readdir(PAGES_DIR, (err, files) => {
        if (err) {
            console.error(`configure error: ${__filename} message：${err.message}`)
            return
        }
        return files.reduce((pagesConfig, fileName) => {
            pagesConfig[fileName] = {
                // page 的入口
                entry: path.resolve(PAGES_DIR, fileName, 'index.js'),
                template: path.resolve(PAGES_DIR, fileName, 'index.html'),
                // 在 dist/index.html 的输出
                filename: `${fileName}.html`,
                // 
                chunks: ['chunk-vendors', 'chunk-common', fileName]
            }
        }, pagesConfig)
    })

    return {
        ...pagesConfig,
        ...customConfig
    }
}

module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    assetsDir: '',
    filenameHashing: true,
    lintOnSave: true,
    // 需要经过 babel-loader 的 node_module
    transpileDependencies: [],
    productionSourceMap: true,
    pages: generatePagesConfig({ pagesDir: path.resolve(__dirname, './src/pages/') }),
    // 以 webpack-merge 形式修改 webpack 配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境
        } else {
            // 开发环境
        }
    },
    // 以 webpack-chain 形式修改 webpack 配置
    chainWebpack: config => {
        config.resolve.alias
            .set('@src', path.resolve(__dirname, './src'))
            .set('@apis', path.resolve(__dirname, './src/apis'))
            .set('@assets', path.resolve(__dirname, './src/assets'))
            .set('@comps', path.resolve(__dirname, './src/components'))
            .set('@pages', path.resolve(__dirname, './src/pages'))
            .set('@scripts', path.resolve(__dirname, './src/scripts'))
            .set('@styles', path.resolve(__dirname, './src/styles'))

        if (process.env.NODE_ENV === 'production') {
            // 生产环境
        } else {
            // 开发环境
        }
    }
}