import Vue from 'vue'
import Router from 'vue-router'

import Flex from '@/demo/Flex'
import Home from '@/demo/Home'
import Button from '@/demo/Button'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/flex',
      name: 'Flex',
      component: Flex
    }, {
      path: '/button',
      name: 'Button',
      component: Button
    }
  ]
})

export default router
