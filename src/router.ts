import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home/Home.vue';
import PermissionsWeb from './views/PermissionsWeb/PermissionsWeb';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }, {
            path: '/permissions',
            name: 'permissions',
            component: PermissionsWeb
        }
    ]
})
