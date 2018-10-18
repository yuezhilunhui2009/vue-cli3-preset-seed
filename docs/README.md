# vue-cli3 问题记录

## 问题：如何从任意 git 仓库获取 remote preset 初始化项目？
### 背景
* 截止 2018/10/16 官方文档关于获取远程 preset 说明包含 github、gitlab、bitbucket 三个云仓库；
* 尝试直接在 --preset 后填写完整 url 直接报 404 或 auth 相关错误；
* 添加 --clone 参数后报 'git clone' failed with status 128 错误；
### 解决方案
```bash
# 关键点：
# 1. 在 git 仓库 url 前添加 "direct:"
# 2. 添加 --clone 参数
vue create --preset direct:https://github.com/yuezhilunhui2009/vue-cli3-preset-seed.git preset-seed-demo --clone
```
### 解决过程
1. 打开全局 node_modules/@vue/cli 扫一眼目录结构，从 bin 目录找到 vue create --preset 入口；
2. 根据入口代码发现调用链 [bin/vue](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/bin/vue.js) -&gt; [lib/create](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/create.js) -&gt; [lib/Creator](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/Creator.js) -&gt; [util/loadRemotePreset](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/util/loadRemotePreset.js) -&gt; [download-git-repo](https://www.npmjs.com/package/download-git-repo)；

3. 最终看到 vue-cli3 使用了 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 这个 npm 包；
4. 回头看看 vue create --preset &lt;url/gitRepoName&gt; 命令参数的传递过程发现 url 是透传到 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 的；
5. 根据 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 文档我们直接使用 Direct + clone 模式；
6. 反映到 vue create --preset 这边就是 vue create --preset direct:&lt;git url&gt; &lt;projectName&gt; --clone

## 问题：preset 项目如何配置 eslint ？
### 背景
* preset 项目可以在 preset.json 中配置 eslint 插件，例如：@vue/cli-plugin-eslint；
* preset 项目可以在 generator/index.js 中配置 eslint 相关依赖及配置；
* 两种配置是否会冲突，比较晕；
### 结论
* preset.json 中添加 @vue/cli-plugin-eslint 这个插件带来的是 eslint 整套配置，包含依赖、rule、githook；
* generator/index.js 中配置 eslint 主要通过自己改写 package.json 以及 eslintConfig 内容来配置 eslint，每一处都需要自己写；
* preset.json 与 generator/index.js 的配置可能会产生冲突，例如对 eslintConfig rules 进行配置，如果配置项是数组，那么最终创建的项目里此项会合并两处配置，导致配置错误；

## 问题：browserlist 有什么作用，如何正确配置 browserlist ？
### 背景
* 在使用多种项目脚手架都看到过 browserlist，经常看到这样的默认配置：
```
last 1 version
> 1%
```
### 结论
* browserlist 作用于以下工具：
    * Autoprefixer
    * Babel
    * postcss-preset-env
    * eslint-plugin-compat
    * stylelint-no-unsupported-browser-features
    * postcss-normalize
* 可以使上面列表中的工具针对特定版本区间的浏览器生成对应的兼容性代码；
* [vue-cli3 中有 @babel/preset-env 和 Autoprefixer 会用到 browserlist 配置](https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist)；
* browserlist 配置参考：
    * [https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist)
* 与 browserlist 配合的工具配置参考：
    * [https://github.com/browserslist/browserslist-example](https://github.com/browserslist/browserslist-example)
* 一个在线工具，用于查看 browserlist 配置文件匹配到哪些浏览器：
    * [https://browserl.ist/?q=defaults](https://browserl.ist/?q=defaults)
* 注意：并不是项目中所有依赖都支持低版本浏览器，例如 vue 本身不支持低于 IE9 的浏览器；

## 问题：如何删除 vue-cli3 创建的默认目录或文件 ？
### 背景
* 自己编写的 preset 有一套自定义目录结构，但是 vue-cli3 创建项目后总会有一些默认结构：
    /public
    /src/main.js
    /src/App.vue
    /src/components/HelloWorld.vue
### 结论
* 在 /generator/index.js 中利用 [GeneratorAPI](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/GeneratorAPI.js) 进行目录文件编辑：
```js
// generator
module.exports = (api, options, rootOptions) => {
  // 删除 vue-cli3 默认的 /src 和 /public 目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path])
  })

  // 根据自定义模板生成项目结构
  api.render('./template')
}
```
