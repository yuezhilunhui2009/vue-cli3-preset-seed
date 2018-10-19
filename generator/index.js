const os = require('os')
const fs = require('fs')
const path = require('path')

module.exports = (api, options, rootOptions) => {
  // 命令
  api.extendPackage({
    scripts: {
      'build:dev': 'vue-cli-service build --mode dev',
      'build:test': 'vue-cli-service build --mode test',
      'build:prod': 'vue-cli-service build --mode prod'
    }
  })

  // 项目依赖
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1',
      'normalize.css': '^8.0.0'
    }
  })

  // css 预处理 - less
  // 在 preset.json cssPreprocessor 配置
  // 会自动添加 less、less-loader 依赖
  // 自动配置 loader

  // 自动导入
  api.extendPackage({
    devDependencies: {
      'style-resources-loader': '1.2.1'
    }
  })

  // eslint
  // 有一些功能在 preset.json 中配置，例如：
  // package.json devDependencies 包含 "@vue/eslint-config-standard"
  // .eslintrc extends 包含 "@vue/standard"
  // package.json gitHooks 包含 "pre-commit": "lint-staged"
  api.extendPackage({
    eslintConfig: {
      rules: {
        'indent': ['error', 2],
        'vue/script-indent': ['error', 2]
      }
    }
  })

  // commitizen - 协助开发者提交标准的 git message
  api.extendPackage({
    devDependencies: {
      'commitizen': '^3.0.2',
      'cz-conventional-changelog': '^2.1.0'
    }
  })

  api.extendPackage({
    config: {
      'commitizen': {
        'path': './node_modules/cz-conventional-changelog'
      }
    }
  })

  // commitlint - 校验 git 提交信息格式
  api.extendPackage({
    devDependencies: {
      '@commitlint/cli': '^7.2.1',
      '@commitlint/config-conventional': '^7.1.2'
    }
  })

  api.extendPackage({
    gitHooks: {
      'commit-msg': 'commitlint -e'
    }
  })

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 生成项目文件
  api.render('./template')
}
