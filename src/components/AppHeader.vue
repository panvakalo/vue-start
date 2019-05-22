<template>
  <section class="full__width header-wrapper bg__gray-light vertical-middle">
    <div class="vertical-middle__inner">
      <div class="wrapper">
        <section class="logo float-left">
          <img src="../assets/images/logo.png" alt="Page logo" class="float-left">
        </section>
        <section class="float-right">
          <div class="display-inline ma-none mr-m bold">
            Welcome {{ customer.username }}
          </div>
          <button
            class="display-inline"
            @click="logoutCustomer"
          >
            Logout
          </button>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapState('customer', ['customer'])
  },
  methods: {
    ...mapActions('customer', ['logout']),
    async logoutCustomer () {
      try {
        await this.logout()
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    &-wrapper {
      height: 60px;

      .logo img {
        height: 40px;
      }
    }
  }
</style>
