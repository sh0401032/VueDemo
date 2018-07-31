import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import Vip from '../components/Vip'
import ShopCar from '../components/Car'
import Search from '../components/Search'
import NewsList from '../components/news/NewsList'
import WanAndroid from '../components/wanandroid/WanAndroid'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/shopcar',
      component: ShopCar
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/news/newslist',
      component: NewsList
    },
    {
      path: '/wanandroid',
      component: WanAndroid
    }
  ]
})
