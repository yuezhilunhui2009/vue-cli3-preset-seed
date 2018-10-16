const os = require('os')
const fs = require('fs')
const path = require('path')

module.exports = (api, options, rootOptions) => {
  // 命令
  api.extendPackage({
    scripts: {
      'build-dev': 'vue-cli-service build --mode dev',
      'build-test': 'vue-cli-service build --mode test',
      'build': 'vue-cli-service build --mode prod'
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

  // less
  api.extendPackage({
    devDependencies: {
      'style-resources-loader': '1.2.1',
      'less': '^3.0.4',
      'less-loader': '^4.1.0'
    }
  })

  // 自动导入
  api.extendPackage({
    devDependencies: {
      'style-resources-loader': '1.2.1'
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

  // eslint
  api.extendPackage({
    eslintConfig: {
      rules: {
        indent: [
          'error',
          2
        ]
      },
      overrides: [
        {
          files: ['*.vue'],
          rules: {
            'vue/script-indent': ['error', 2]
          }
        }
      ]
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
