import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AboutPage from '@/components/AboutPage'
import BlogPage from '@/components/BlogPage'
import EffortPage from '@/components/EffortPage'
import PhotoPage from '@/components/PhotoPage'
import PoemPage from '@/components/PoemPage'
import ResumePage from '@/components/ResumePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    }, {
      path: '/blog',
      name: 'BlogPage',
      component: BlogPage
    }, {
      path: '/effort',
      name: 'EffortPage',
      component: EffortPage
    }, {
      path: '/photo',
      name: 'PhotoPage',
      component: PhotoPage
    }, {
      path: '/poem',
      name: 'PoemPage',
      component: PoemPage
    }, {
      path: '/resume',
      name: 'ResumePage',
      component: ResumePage
    }
  ]
})
