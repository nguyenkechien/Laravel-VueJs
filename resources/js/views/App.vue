<template>
  <div id="app">
    <div class="flex-center position-ref full-height">
      <app-Header></app-Header>
      <app-Navigation></app-Navigation>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "@/js/components/Shared/menu";
import Navigation from "./../components/Shared/navigation";
export default {
  name: "App",
  components: {
    "app-Header": Nav,
    "app-Navigation": Navigation
  }
};
</script>

<style>
/* @import "./../sass/main.scss"; */
</style>