<template>
  <div class="home-view">
    <h2>Home view</h2>
    <p v-show="user.fetching">loading...</p>
    <p v-show="showError">加载失败，<a @click="loadUser" src="javascript:;">点击重试</a></p>
    <div v-show="user.nickname">昵称: {{ user.nickname }}</div>
    <img :src="user.headimgurl" v-show="user.headimgurl">
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
    showError () {
      return this.user.fetching === false && 
        this.user.code !== 0
    },
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
    this.loadUser()
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
  methods: {
    loadUser () {
      this.$store.dispatch('fetchUser')
    }
  }
}
</script>

<style lang="less" scoped>
.home-view {
  img {
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 50%;
    border: solid 10px #eee;
  }

  a {
    text-decoration: underline;
  }
}
</style>
