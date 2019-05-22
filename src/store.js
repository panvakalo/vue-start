import Vue from 'vue'
import Vuex from 'vuex'
import { customerStore } from './stores/customer'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    paths: ['customer']
  })],
  modules: {
    customer: customerStore
  }
})
