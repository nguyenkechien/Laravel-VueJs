<template>
  <div class="nav">
    <div class="nav-icon-menu">
      <span>
        Menu
        <i class="fal fa-bars"></i>
      </span>
    </div>
    <div class="nav-info-page"></div>
    <ul class="nav-group">
      <li v-for="menu in dataMenus" :key="menu.code">
        <router-link tag="a" :to="{path: menu.link}" >{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isOpen: true,
      dataMenus: [
        {
          code: 1,
          link: "/",
          name: "Home"
        },
        {
          code: 2,
          link: "/login",
          name: "Login"
        },
        {
          code: 3,
          link: "/about",
          name: "ABOUT"
        }
      ]
    };
  },
  methods: {
    toogleMenu: function() {}
  }
};
</script>

<style lang="scss">
.nav {
  a {
    color: #fff !important;
  }
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  height: 100vh;
  width: 250px;
  background: #000;
  color: #fff;
  translate: 1s;
  text-align: right;
  padding-right: 10px;
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
