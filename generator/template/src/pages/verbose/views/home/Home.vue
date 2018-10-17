<template>
  <div class="home-view">
    Home view
    <div>nickname: {{ user.nickname }}</div>
    <img :src="user.headimgurl">
  </div>
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

<style lang="less" scoped>
.home-view {

}
</style>
