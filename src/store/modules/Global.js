import testApi from '../../api/testApi'

// initial state
const state = {
  count: 0,
  list: []
}

// getters
const getters = {
  getList(state, getters, rootState) {
    return [...state.list].sort((a, b) => a.id > b.id)
  }
}

// mutations
const mutations = {
  listUpdate(state, payload) {

    if (Array.isArray(payload)) {
      state.list = payload
      //console.log(state.list)
    }
  }
}

//actions
const actions = {
  // ctx, payload
  listUpdate({
    dispatch,
    commit,
    getters,
    rootGetters
  }, payload) {
    //  Action 提交的是 mutation，而不是直接变更状态。
    //  Action 可以包含任意异步操作。
    testApi.loginSystem('admin', '123').then(function(response) {}, function(err) {

      testApi.search_read({
        model: "bjc.base.config",
        fields: [],
        limit: 20,
        offset: 0,
        sort: '',
        domain: []
      }).then(function(response) {
        //console.log(response.data.result.records)
        commit('listUpdate', response.data.result.records)
      })

    })

  }
}

export default {state, getters, mutations, actions}
