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
import Loading from '@/demo/Loading'
import Toast from '@/demo/Toast'
import Scroll from '@/demo/Scroll'

Vue.use(Router)

const router = new Router({
  routes: [{
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
    path: '/loading',
    name: 'Loading',
    component: Loading
  }, {
    path: '/toast',
    name: 'Toast',
    component: Toast
  }, {
    path: '/scroll',
    name: 'Scroll',
    component: Scroll
  }]
})

export default router
