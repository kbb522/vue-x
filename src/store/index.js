import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/Global'

import testApi from '../api/testApi'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

  modules: {
    global
  },

  strict: debug,
  //plugins: debug ? [createLogger()] : []
})
