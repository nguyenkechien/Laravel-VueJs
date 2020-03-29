<template>
  <div class="user">
    <app-Login></app-Login>
  </div>
</template>

<script>
import appLogin from "./../components/Auth/Login";
export default {
  name: "Login",
  components: {
    "app-Login": appLogin
  }
};
</script>

<style lang="scss">
.user {
  height: 100%;
}
</style>