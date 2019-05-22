import Vue from 'vue'
import Vuex from 'vuex'
import { customerStore } from './stores/customer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    customer: customerStore
  }
})
