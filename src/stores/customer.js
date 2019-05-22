import customerService from '@/common/services/customer.service'

export const customerStore = {
  namespaced: true,
  state: {
    loggedIn: false,
    customer: {},
    authToken: null
  },
  mutations: {
    setAuthToken (state, data) {
      state.authToken = state.authToken
        ? state.authToken
        : data.authToken.split('.')[1]
    },
    setLoginStatus (state, status) {
      state.loggedIn = status
    },
    setCustomerData (state, data) {
      state.customer = data.user
    }
  },
  actions: {
    async login ({ commit }, credentials) {
      try {
        let data = await customerService.login(credentials)

        commit('setCustomerData', data)
        commit('setAuthToken', data)
        commit('setLoginStatus', true)
      } catch (error) {
        throw error
      }
    },
    async logout ({ commit }) {
      await customerService.logout()
      commit('setLoginStatus', false)
    }
  }
}
