module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    api.extendPackage({
      dependencies: {
        "vue-router": "^3.0.1",
        "vuex": "^3.0.1"
      }
    })
  
    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./template')
  
    if (options.foo) {
      // 有条件地生成文件
    }
  }