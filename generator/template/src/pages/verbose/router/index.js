import Vue from 'vue'
import Router from 'vue-router'

import Home from '@pages/verbose/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/article-list',
      name: 'article-list',
      component: () => import(/* webpackChunkName: "article-list" */ '@pages/verbose/views/article-list')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
