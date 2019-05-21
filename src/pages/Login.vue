<template>
  <div class="full__width full__height vertical-middle">
    <div class="vertical-middle__inner text-align__center pa-s">
      <div class="m-auto l4 m6 s10 xs12 text-color__black">
        <div class="bg__gray overflow-hidden">
          <h2 class="uppercase">Log in</h2>
        </div>
        <div class="pa-l bg__gray-lighter">
          <form>
            <input
              type="text"
              name="username"
              class="xs12 text-color__black"
              placeholder="Username"
            >
            <input
              type="password"
              name="password"
              class="xs12 text-color__black"
              placeholder="Password"
            >
            <button type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>
