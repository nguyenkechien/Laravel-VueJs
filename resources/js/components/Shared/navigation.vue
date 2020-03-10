<template>
  <div class="nav">
    <div class="nav-icon-menu">
      <i class="fal fa-bars"></i>
    </div>
    <div class="nav-info-page"></div>
    <ul class="nav-group">
      <li>
        <router-link tag="a" to="/">Home</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isOpen: true
    };
  },
  methods: {
    toogleMenu: function() {}
  }
};
</script>

<style lang="scss">
.nav {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  height: 100vh;
  width: 250px;
  background: #000;
  color: #fff;
  translate: 1s;
  &-group {
    margin: 0;
  }
  &-info {
    &-page {
      padding: 5em;
    }
  }
  &-icon {
    &-menu {

    }
  }
}
</style>
