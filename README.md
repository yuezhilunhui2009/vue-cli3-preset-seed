# vue-cli3-preset-demo

## 准备工作
已安装 nodejs v8.11.0+ 与 npm

## 快速开始
```bash
# 安装 vue-cli
npm install -g @vue/cli

# 根据远程 preset 创建项目 
vue create --preset  ./vue-cli3-preset-demo/ --clone preset-demo --bare

# 本地预览
cd preset-demo && npm run serve

# 构建部署版本
npm run build
```

## 使用 GUI 管理项目
```bash
# 在项目的上一级目录执行
vue ui
```

## 阅读详细工程文档
```bash
# 本地预览
npm run docs:dev

# 构建部署版本
npm run docs:build
```