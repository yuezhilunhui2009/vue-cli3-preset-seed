<template>
  <div id="app">
    <Header />
    <h1>Hello App!</h1>
    <p>
      <router-link to="/home">首页</router-link>
      <router-link to="/article-list">列表页</router-link>
    </p>
    <p>路径：{{ this.$route.path }}</p>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <a href="./index.html">另外一个项目结构简单的页面 index.html</a>
  </div>
</template>

<script>
import Header from '@comps/Header'

export default {
  name: '',
  components: {
    Header
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
