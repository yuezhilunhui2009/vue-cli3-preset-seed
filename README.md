# vue-cli3-preset-demo

## 准备工作
已安装 nodejs v8.11.0+ 与 npm

## 快速开始
```bash
# 安装 vue-cli
npm install -g @vue/cli

# 根据远程 preset 创建项目 
vue create --preset yuezhilunhui2009/vue-cli3-preset-demo preset-demo --bare

# 本地预览
# 示例链接：http://localhost:8080/simple.html
cd preset-demo && npm run serve

# 构建部署版本
npm run build
```

## 使用 GUI 管理项目
```bash
# 在项目的上一级目录执行
vue ui
```

## 项目结构
标识：
** 根据需要可选的目录或者文件

```bash
├── docs                            # 项目文档
├── public                          # 公开静态文件（未被代码引用）
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
    │       ├── store               # 状态仓库
    │       │   ├── modules**       # 按业务拆分的 store
    │       │   ├── plugins**       # Vuex 插件
    │       │   ├── actions.js      # Vuex 的 Action
    │       │   ├── mutations.js    # Vuex 的 Mutation
    │       │   └── index.js        # store 入口文件
    │       ├── views**             # SPA 的各个视图
    │       │   ├── about           # 示例视图
    │       │   └── home            # 示例视图
    │       ├── App.vue             # 必须，页面根组件
    │       ├── index.js            # 必须，页面入口文件
    │       └── index.html          # 必须，页面模板文件
    ├── scripts                     # 项目级公共脚本
    │   ├── directives**            # vue 指令
    │   └── filters**               # vue 过滤器
    └── styles
```

## 项目子结构说明
标识说明：
** 根据需要可选的目录或者文件

### 业务子结构
在一些目录下通常是根据业务进行分割的，例如：

* src/pages/
* src/pages/views/
* src/pages/store/modules/

这些目录下可以根据业务为文件夹命名。

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

## 特性 & 待确认特性
- [x] 项目目录结构
- [x] CSS 预处理器 less
- [x] normalize.css
- [x] postcss 配置
    - [x] cssnano 优化 CSS 尺寸
    - [x] autoprefixer 根据 browserlist 进行前缀补齐
- [ ] git-hook 配置
- [x] eslint 配置
- [x] babel 配置
- [x] browserslist 配置
- [x] proxy 配置
- [ ] API 层
- [ ] simple、verbose 两个示例页面
- [ ] 创建项目子结构命令
    - [ ] 创建 vue 组件
    - [ ] 创建新页面
    - [ ] 添加 API
    - [ ] 添加新的 View （SPA的一个视图）
