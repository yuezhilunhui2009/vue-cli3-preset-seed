# vue-cli3 的一些技巧

## 问题：如何从任意 git 仓库获取 remote preset 初始化项目？

### 背景
* 截止 2018/10/16 官方文档关于获取远程 preset 说明包含 github、gitlab、bitbucket 三个云仓库；
* 尝试直接在 --preset 后填写完整 url 直接报 404 或 auth 相关错误；
* 添加 --clone 参数后报 'git clone' failed with status 128 错误；

### 解决方案
```bash
# 关键点：
# 1. 在 git 仓库 url 前添加 "direct:"
# 2. 添加 --clone 参数
vue create --preset direct:https://github.com/yuezhilunhui2009/vue-cli3-preset-seed.git preset-seed-demo --bare --clone
```

### 解决过程
1. 打开全局 node_modules/@vue/cli 扫一眼目录结构，从 bin 目录找到 vue create --preset 入口；
2. 根据入口代码发现调用链 [bin/vue](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/bin/vue.js) -> [lib/create](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/create.js) -> [lib/Creator](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/Creator.js) -> [util/loadRemotePreset](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/util/loadRemotePreset.js) -> [download-git-repo](https://www.npmjs.com/package/download-git-repo)；

3. 最终看到 vue-cli3 使用了 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 这个 npm 包；
4. 回头看看 vue create --preset <url/gitRepoName> 命令参数的传递过程发现 url 是透传到 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 的；
5. 根据 [download-git-repo](https://www.npmjs.com/package/download-git-repo) 文档我们直接使用 Direct + clone 模式；
6. 反应到 vue create --preset 这边就是 vue create --preset direct:<git url> <projectName> --clone
