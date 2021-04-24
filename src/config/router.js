import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import DashBoard from '@/components/Dashboard'
import Products from '@/components/Product'
import Categories from '@/components/Category'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'dashboard',
    path: '/dashboard',
    component: DashBoard,
}, {
    name: 'products',
    path: '/products',
    component: Products
}, {
    name: 'categories',
    path: '/categories',
    component: Categories
}, {
    name: 'notFound',
    path: '*',
    component: NotFound
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

/*router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})*/

export default router