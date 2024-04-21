import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/category-product',
    name: 'categoryProduct',
    component: () => import(/* webpackChunkName: "categoryProduct" */ '../views/CategoryProduct.vue')
  },
  {
    path: '/product-detail',
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "productDetail" */ '../views/ProductDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
