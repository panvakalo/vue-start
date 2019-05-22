import customerService from '@/common/services/customer.service'

export const customerStore = {
  namespaced: true,
  state: {
    loggedIn: false,
    customer: {}
  },
  mutations: {
    setAuthToken (state, data) {
      state.customer.authToken = data.authToken
    },
    setLoginStatus (state, status) {
      state.loggedIn = status
    }
  },
  actions: {
    async login ({ commit }, credentials) {
      try {
        let data = await customerService.login(credentials)

        commit('setAuthToken', data)
        commit('setLoginStatus', true)
      } catch (error) {
        throw error
      }
    }
  }
}
