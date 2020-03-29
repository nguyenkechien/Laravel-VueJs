<template>
  <app-UserRegister></app-UserRegister>
</template>

<script>
import appRegister from "./../components/Auth/Register";
export default {
  name: "Register",
  components: {
    "app-UserRegister": appRegister
  }
};
</script>

<style>
</style>