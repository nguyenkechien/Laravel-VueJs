<template>
  <div class="nav" :class="{active:isOpen}">
    <div class="nav-icon-menu">
      <div class="nav-icon-menu-group" v-on:click="isOpen = !isOpen">
        <span class="nav-icon-menu-name">Menu</span>
        <span class="nav-icon-menu-icon">
          <i class="fal fa-bars"></i>
        </span>
      </div>
    </div>
    <div class="nav-info-page"></div>
    <ul class="nav-group">
      <li v-for="menu in dataMenus" :key="menu.code">
        <router-link tag="a" :to="{path: menu.link}">
          <div class="nav-icon-menu-group">
            <span class="nav-icon-menu-name">{{menu.name}}</span>
            <span class="nav-icon-menu-icon">
              <i :class="menu.classIcon"></i>
            </span>
          </div>
        </router-link>
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
          name: "Home",
          classIcon: "fas fa-home-lg-alt"
        },
        {
          code: 2,
          link: "/login",
          name: "Login",
          classIcon: "fas fa-sign-in"
        },
        {
          code: 3,
          link: "/about",
          name: "ABOUT",
          classIcon: "fas fa-address-card"
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
  width: 75px;
  background: #000;
  color: #fff;
  transition: 0.75s;
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
      padding: 10px 0;
      span {
        cursor: pointer;
        user-select: none;
      }
      &-name {
        opacity: 0;
        transition: 0.5s;
        font-size: 0;
      }
      &-icon {
        i{
          font-size: 30px;
        }
      }
      &-group {
        display: inline-flex;
        font-size: 18px;
        justify-content: center;
        align-items: center;
      }
    }
  }
  &.active {
    width: 200px;
    .nav {
      &-icon-menu {
        &-name {
          opacity: 1;
          transition: 0.5s;
          font-size: 100%;
        }
      }
    }
  }
}
</style>
