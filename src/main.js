// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import store from './store'
import router from './router'
import FastClick from 'fastclick'
import db from './utils/SessionStorage'

import Back from './directives/back'
import Focus from './directives/focus'

Vue.config.productionTip = false

Vue.directive('back-link', Back)
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', Focus)
new Vue({store, router}).$mount('#app')
const router1 = router
router.beforeEach(function (to, from, next) {
  //console.log(to, from, next)
  try {
    const _to = to.path
    const _from = from.path
    let pc = router1.app.$el.querySelector('.page-content')
    const scrollTop = pc ? pc.scrollTop : 0
    const h = db.get(_to)
    if ((h && h.history) || (_from && _from.indexOf(_to) === 0)) {
      router1.app.$el.className = 'transition-reverse'
      h.history = false
      db.set(_to, h)
    } else {
      db.set(_from, {
        scrollTop: scrollTop,
        history: true
      })
      router1.app.$el.className = ''
    }
  } catch (e) {
    // swallo error
    console.log(e)
  }
  next()
})

// Vum.router(router)

/* eslint-disable no-new */
// new Vue({
// el: '#app',
/// router,
// components: { App },
// template: '<App/>'
// })
FastClick.attach(document.body)
