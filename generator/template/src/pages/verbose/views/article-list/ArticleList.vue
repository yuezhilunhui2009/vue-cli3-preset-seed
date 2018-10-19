<template>
  <div>
    <h2>ArticleList view</h2>
    <p v-show="article.fetching">loading...</p>
    <p v-show="showError">加载失败，<a @click="loadArticleList" src="javascript:;">点击重试</a></p>
    <ul>
      <li v-for="item in article.list" :key="item.url">
        {{ item.title }}
      </li>
    </ul>
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
      return this.article.fetching === false &&
        this.article.code !== 0
    },
    ...mapState({
      article: state => state.article
    })
  },
  watch: {},
  beforeCreate () {
    // now --> data observer --> event / watcher
  },
  created () {
    // data observer --> event / watcher --> now --> compile template
    this.loadArticleList()
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
  methods: {
    loadArticleList () {
      this.$store.dispatch('fetchArticleList')
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  padding: 0;
  list-style-type: none;

  li {
    margin: 0 1em;
    padding: 1em 0;
    border-bottom: solid 1px #eee;
    text-align: left;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
