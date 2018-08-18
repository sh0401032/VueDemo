import Vue from 'vue'
import Router from 'vue-router'
import GanK from '../components/gank/Gank'
import ShopCar from '../components/Car'
import Search from '../components/Search'
import NewsList from '../components/news/NewsList'
import WanAndroid from '../components/wanandroid/WanAndroid'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      redirect: '/wanandroid'
    },
    {
      path: '/wanandroid',
      component: WanAndroid
    },
    {
      path: '/gank',
      component: GanK
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
    }
  ]
})
