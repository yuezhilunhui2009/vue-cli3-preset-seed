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
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '@pages/verbose/views/about')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
