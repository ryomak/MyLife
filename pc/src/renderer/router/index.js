import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/magical-memo',
      name: 'magical-memo',
      component: require('@/components/MagicalMemo/index').default      
    },
    {
      path: '/magical-memo/new',
      name: 'magical-memo',
      component: require('@/components/MagicalMemo/new').default      
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
