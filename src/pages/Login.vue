<template>
  <div class="full__width full__height vertical-middle bg__blue-gray">
    <div class="vertical-middle__inner text-align__center pa-s">
      <div class="m-auto l4 m6 s10 xs12 text-color__black">
        <div class="bg__gray overflow-hidden">
          <h2 class="uppercase">
            Log in
          </h2>
        </div>
        <section class="pa-l bg__gray-lighter login">
          <form @submit.prevent="auth">
            <input
              v-model="loginForm.username"
              type="text"
              name="username"
              required
              class="xs12 text-color__black"
              placeholder="Username"
            >
            <input
              v-model="loginForm.password"
              type="password"
              name="password"
              required
              class="xs12 text-color__black"
              placeholder="Password"
            >
            <button
              type="submit"
            >
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
      try {
        await this.login(this.loginForm)
        this.$router.push('/home')
      } catch (error) {
        console.log('Error while authenticating user: ' + error)
      }
    }
  }
}
</script>

<style scoped>

</style>
