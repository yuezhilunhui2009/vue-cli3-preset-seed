<template>
  <div>page_verbose: page_with_router_vuex</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
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
</style>
