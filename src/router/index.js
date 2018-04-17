import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/demo/Home'
import Flex from '@/demo/Flex'
import Button from '@/demo/Button'
import ButtonGroup from '@/demo/Button-Group'
import Grid from '@/demo/Grid'
import List from '@/demo/List'
import Form from '@/demo/Form'
import Modal from '@/demo/Modal'
import Popup from '@/demo/Popup'
import Navbar from '@/demo/Navbar'
import Steps from '@/demo/Steps'
import Toast from '@/demo/Toast'
import Slider from '@/demo/Slider'
import Scroll from '@/demo/Scroll'
import SwiperPic from '@/demo/SwiperPic'

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
      path: '/button-group',
      name: 'ButtonGroup',
      component: ButtonGroup
    }, {
      path: '/button',
      name: 'Button',
      component: Button
    }, {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/form',
      name: 'Form',
      component: Form
    }, {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }, {
      path: '/popup',
      name: 'Popup',
      component: Popup
    }, {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    }, {
      path: '/steps',
      name: 'Steps',
      component: Steps
    }, {
      path: '/toast',
      name: 'Toast',
      component: Toast
    }, {
      path: '/slider',
      name: 'Slider',
      component: Slider
    }, {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }, {
      path: '/swiperpic',
      name: 'SwiperPic',
      component: SwiperPic
    }
  ]
})

export default router
