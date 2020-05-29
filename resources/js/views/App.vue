<template>
  <v-app>
    <div id="app" class="app position-ref full-height d-flex">
      <app-Navigation v-if="$auth.check()"></app-Navigation>
      <div class="app-view" :class="{'app-view-login':!$auth.check()}">
        <div class="app-view-header flex-center" v-if="$auth.check()">
          <app-Header></app-Header>
        </div>
        <div class="app-view-content">
          <router-view ></router-view>
        </div>
        <div class="app-view-footer flex-center">
          <app-Footer></app-Footer>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "@/js/components/Shared/menu";
import Navigation from "@/js/components/Shared/navigation";
import Footer from "@/js/components/Shared/footer";

export default {
  name: "App",
  components: {
    "app-Header": Header,
    "app-Navigation": Navigation,
    "app-Footer": Footer
  }
};
</script>

<style lang="scss">
.app {
  max-height: 100vh;
  width: 100%;
  &-view {
    position: relative;
    width: 100%;
    &-header,
    &-footer {
      height: 5%;
    }
    &-content {
      height: 90%;
      padding: 1.25rem;
      background: #eef1f3;
    }
    &-login {
      .app-view-content{
        height: 95%;
      }
    }
  }
}
</style>
