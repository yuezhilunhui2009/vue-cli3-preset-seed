# vue-cli3-preset-seed
[![Build Status](https://travis-ci.com/yuezhilunhui2009/vue-cli3-preset-seed.svg?branch=master)](https://travis-ci.com/yuezhilunhui2009/vue-cli3-preset-seed)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

vue-cli3-preset-seed 是一个 web 前端项目骨架，用于配合 Vue.js 开发标准工具 [Vue CLI 3](https://cli.vuejs.org/zh/) 在创建新项目时使用。

## 准备工作
确认计算机已安装 [nodejs v8.11.0+](https://nodejs.org/en/download/) 与 npm

## 快速开始
```bash
# 安装 vue-cli
npm install -g @vue/cli

# 根据远程 preset 创建项目 
vue create --preset yuezhilunhui2009/vue-cli3-preset-seed preset-seed-demo
# or
vue create --preset direct:https://github.com/yuezhilunhui2009/vue-cli3-preset-seed.git preset-demo --clone

# 本地预览
# 示例链接：http://localhost:8080/simple.html
# 示例链接：http://localhost:8080/verbose.html
cd preset-seed-demo && npm run serve

# 构建测试版本
npm run build:test

# 构建部署版本
npm run build:prod

# 代码提交
git-cz
```

## 环境变量
* dev 模式
```bash
NODE_ENV=development
VUE_APP_BUILD_MODE=DEV
```
* test 模式
```bash
NODE_ENV=production
VUE_APP_BUILD_MODE=TEST
```
* prod 模式
```bash
NODE_ENV=production
VUE_APP_BUILD_MODE=PROD
```

## 项目结构
标识：
** 根据需要可选的目录或者文件

```bash
├── docs                            # 项目文档
├── dist                            # 输出目录
└── src                             # 源代码
    ├── apis                        # 数据 API 层
    ├── assets                      # 项目级公共资产文件
    ├── components                  # 项目级公共组件
    ├── pages                       # 页面文件夹
    │   ├── simple                  # 简单页面示例，文件夹名字将作为最终页面名字，例如：dist/simple.html
    │   │   ├── App.vue             # 必须，页面根组件
    │   │   ├── index.js            # 必须，页面入口文件
    │   │   └── index.html          # 必须，页面模板文件
    │   └── verbose                 # 复杂页面示例，文件夹名字将作为最终页面名字，例如：dist/verbose.html
    │       ├── components          # 页面级公共组件
    │       ├── router              # 路由
    │       ├── scripts             # 页面级公共脚本
    │       ├── store               # 页面 store
    │       │   ├── modules         # 页面 store 子模块
    │       │   ├── actions.js      # 页面 Actions
    │       │   ├── mutations.js    # 页面 Mutations
    │       │   └── index.js        # 页面 store 入口文件
    │       ├── views**             # SPA 的各个视图
    │       │   ├── article-list    # 示例视图
    │       │   └── home            # 示例视图
    │       ├── App.vue             # 必须，页面根组件
    │       ├── index.js            # 必须，页面入口文件
    │       └── index.html          # 必须，页面模板文件
    ├── store                       # 项目级公共 store，提供生成 store 函数
    │   └── modules                 # 项目级公共 store 子模块
    ├── scripts                     # 项目级公共脚本
    │   ├── directives**            # vue 自定义指令
    │   └── filters**               # vue 自定义过滤器
    └── styles                      # 项目级公共样式
```

## 项目子结构说明
标识说明：
** 根据需要可选的目录或者文件

### 业务子结构
项目中的一些路径通常是根据业务进行分割的，例如：

* src/apis/
* src/store/modules/
* src/pages/
* src/pages/views/
* src/pages/store/modules/

这些路径下可以根据业务为文件/文件夹命名。

### 通用结构
* scripts、assets、styles 文件夹可以根据情况添加，原则是放在里面的文件只有同级或者同级的子级会用到。

### 页面结构
* 页面文件夹最少需要 App.vue、index.js、index.html 三个文件组成。
* 最简结构：
```bash
└── simple
    ├── App.vue
    ├── index.html
    └── index.js
```

### vue 组件结构
* 最简结构：
```bash
└── Example.vue
```

* 复杂的酌情使用以下结构：
```bash
└── Example
    ├── assets**
    ├── scripts**
    ├── Example.vue
    ├── ExampleSubA.vue**
    ├── ExampleSubB.vue**
    └── index.js
```

### 其他组件要求的项目结构
* 对于 router、store 等组件尽量根据官方或者最佳实践创建。

<!--
## 阅读详细工程文档
```bash
# 本地预览
npm run docs:dev

# 构建部署版本
npm run docs:build
```
-->

## TODO
2018/10/8 ~ 2018/10/12

- [x] 项目目录结构
- [x] CSS 预处理器 less
- [x] postcss 配置
    - [x] cssnano 优化 CSS 尺寸
    - [x] autoprefixer 根据 browserlist 进行前缀补齐
- [x] babel 配置
- [x] browserslist 配置
- [x] eslint 配置

2018/10/15 ~ 2018/10/19

- [x] commitizen、cz-conventional-changelog 配置，辅助生成标准提交格式
- [x] commitlint、@commitlint/config-conventional 配置，检验提交信息格式
- [x] git-hook 配置，强制 git 提交前执行 eslint、commitlint
- [x] 自动 @import variables.less
- [ ] API 层
- [x] proxy 配置
- [x] 环境变量配置
- [x] vuex、vue-router 示例
- [x] simple、verbose 两个示例页面

