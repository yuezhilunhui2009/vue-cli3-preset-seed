<template>
  <div id="app">
    <Header />
    <h2>这是一个简单的页面</h2>
    <h2>只包含 3 个文件</h2>
    <p>js 文件：src/pages/simple/index.js</p>
    <p>html 模板： src/pages/simple/index.html</p>
    <p>vue 根组件：src/pages/simple/App.vue</p>
    <h2>这 3 个文件是必需的</h2>
    <p>入口： index.js</p>
    <p>模板： index.html</p>
    <p>根组件： App.vue</p>
    <Footer />
  </div>
</template>

<script>
import Header from '@comps/Header'
import Footer from '@comps/Footer'

export default {
  name: '',
  components: {
    Header,
    Footer
  },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate () {
    // now --> data observer --> event / watcher
  },
  created () {
    // data observer --> event / watcher --> now --> compile template
  },
  beforeMount () {
    // compile template --> now --> mounted
  },
  mounted () {
    // vm.$el ready
  },
  beforeUpdate () {
    // when data change
  },
  updated () {
    //
  },
  beforeDestroy () {
    //
  },
  destroyed () {
    //
  },
  methods: {}
}
</script>

<style>
/* 全局样式 */
@import '~normalize.css/normalize.css'
</style>

<style lang="less" scoped>
/* 局部样式 */
/* 自动注入 variables.less */
#app {
  text-align: center;

  h1 {
    color: @vue-font-green;
  }

  p {
    display: flex;
    justify-content: space-around;
  }
}
</style>
