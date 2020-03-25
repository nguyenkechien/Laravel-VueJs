<template>
  <div class="links footer-bar">
    <router-link tag="a" to="/">Home</router-link>
    <router-link tag="a" to="/dashboard">Dashboard</router-link>
    <router-link tag="a" to="/companies">Companies</router-link>
    <router-link tag="a" to="/login">Login</router-link>
    <router-link tag="a" to="/register">Register</router-link>
    <router-link tag="a" to="/about">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-bar {
  width: 100%;
  text-align: left;
}
</style>
