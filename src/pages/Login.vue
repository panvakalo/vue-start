<template>
  <div class="full__width full__height vertical-middle">
    <div class="vertical-middle__inner text-align__center pa-s">
      <div class="m-auto l4 m6 s10 xs12 text-color__black">
        <div class="bg__gray overflow-hidden">
          <h2 class="uppercase">
            Log in
          </h2>
        </div>
        <section class="pa-l bg__gray-lighter">
          <form @submit.prevent="auth">
            <input
              v-model="loginForm.username"
              type="text"
              name="username"
              class="xs12 text-color__black"
              placeholder="Username"
            >
            <input
              v-model="loginForm.password"
              type="password"
              name="password"
              class="xs12 text-color__black"
              placeholder="Password"
            >
            <button type="submit">
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('customer', ['login']),
    async auth () {
      await this.login(this.loginForm)
    }
  }
}
</script>

<style scoped>

</style>
