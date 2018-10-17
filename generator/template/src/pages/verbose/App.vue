<template>
  <div id="app">
    <Header />
    <h1>Hello App!</h1>
    <p>
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/about">Go to About</router-link>
    </p>
    <router-view></router-view>
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
    this.$store.dispatch('fetchUser')
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
