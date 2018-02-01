import Vue from 'vue'
import Router from 'vue-router'


//import HelloWorld from '@/components/HelloWorld'
//import Flex from '@/demo/flex'
import Home from '@/demo/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    }
    // , {
    //   path: '/flex',
    //   name: 'Flex',
    //   component: Flex
    // }
  ]
})
