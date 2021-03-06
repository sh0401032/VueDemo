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
  routes: [{
    path: '/',
    redirect: '/app/wanandroid'
  },
  {
    path: '/app/wanandroid',
    component: WanAndroid
  },
  {
    path: '/app/gank',
    component: GanK
  },
  {
    path: '/app/shopcar',
    component: ShopCar
  },
  {
    path: '/app/search',
    component: Search
  },
  {
    path: '/app/news/newslist',
    component: NewsList
  },
  {
    path: '/app/vue-video-player',
    component: () => import('@/components/video/VueVideoPlayer'),
    meta: {
      title: '视频播放'
    }
  },
  {
    path: '/app/video',
    component: () => import('@/components/video/Video')
  }
  ]
})
