const os = require('os')
const fs = require('fs')
const path = require('path')

module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1',
      'normalize.css': '^8.0.0'
    },
    devDependencies: {
      'commitizen': '^3.0.2',
      'cz-conventional-changelog': '^2.1.0',
      '@commitlint/cli': '^7.2.1',
      '@commitlint/config-conventional': '^7.1.2'
    },
    scripts: {
      'build-dev': 'vue-cli-service build --mode dev',
      'build-test': 'vue-cli-service build --mode test',
      'build': 'vue-cli-service build --mode prod'
    },
    config: {
      'commitizen': {
        'path': './node_modules/cz-conventional-changelog'
      }
    },
    gitHooks: {
      'commit-msg': 'commitlint -e'
    },
    commitlint: {
      'extends': ['@commitlint/config-conventional']
    }
  })

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template')

  if (options.foo) {
    // 有条件地生成文件
  }

  // {fileName: fileValue}
  api.postProcessFiles(function (files) {

  })

  // 借助此回调函数删除 vue-cli 创建的多余入口文件
  // 1. src/main.js
  // 2. src/App.vue
  api.onCreateComplete(() => {
    const cliEntryFile = `${api.resolve(api.entryFile)}`
    const cliDefaultVue = cliEntryFile.replace(/main\.js$/, 'App.vue')

    const regEntryFile = os.platform() === 'win32' ? /\\src\\main\.js$/ : /\/src\/main\.js$/
    const regDefaultVue = os.platform() === 'win32' ? /\\src\\App\.vue$/ : /\/src\/App\.vue$/

    if (regEntryFile.test(cliEntryFile) &&
        fs.existsSync(cliEntryFile)) {
      try {
        fs.unlinkSync(cliEntryFile)
      } catch (e) {
        console.log(e.message)
      }
    }

    if (regDefaultVue.test(cliDefaultVue) &&
        fs.existsSync(cliDefaultVue)) {
      try {
        fs.unlinkSync(cliDefaultVue)
      } catch (e) {
        console.log(e)
      }
    }
  })
}
