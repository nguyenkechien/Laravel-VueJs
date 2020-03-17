<template>
  <div id="app">
    <div class="flex-center position-ref full-height">
      <app-Header></app-Header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/js/components/Shared/menu";

export default {
  name: "App",
  components: {
    "app-Header": Header,
  }
};
</script>

<style>
</style>
