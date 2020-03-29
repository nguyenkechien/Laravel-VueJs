<template>
  <div class="links top-bar">
    <router-link tag="a" to="/">Home</router-link>
    <router-link tag="a" to="/dashboard.html">Dashboard</router-link>
    <router-link tag="a" to="/companies.html">Companies</router-link>
    <router-link tag="a" to="/login.html">Login</router-link>
    <router-link tag="a" to="/register.html">Register</router-link>
    <router-link tag="a" to="/about.html">About</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.top-bar {
  width: 100%;
  text-align: right;
}
</style>
