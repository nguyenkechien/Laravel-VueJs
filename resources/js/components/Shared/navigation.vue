<template>
  <div class="nav" :class="{active:isOpen}">
    <div class="nav-icon-menu">
      <div class="nav-icon-menu-group" v-on:click="isOpen = !isOpen">
        <span class="nav-icon-menu-icon">
          <i class="fal fa-bars"></i>
        </span>
        <span class="nav-icon-menu-name">Menu</span>
      </div>
    </div>
    <div class="nav-search"></div>
    <ul class="nav-group">
      <li v-for="menu in dataMenus" :key="menu.code">
        <router-link tag="a" :to="{path: menu.link}">
          <div class="nav-icon-menu-group">
            <span class="nav-icon-menu-icon">
              <i :class="menu.classIcon"></i>
            </span>
            <span class="nav-icon-menu-name">{{menu.name}}</span>
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
@import "./../../../sass/Global/_variables.scss";
.nav {
  a {
    color: #fff !important;
  }
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  height: 100%;
  width: 75px;
  background: #000;
  color: #fff;
  transition: 0.75s;
  text-align: left;
  text-transform: capitalize;
  overflow: hidden;
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
        width: 0%;
        display: none;
      }
      &-icon {
        width: 100%;
        padding: 0 0.5em 0;
        text-align: center;
        margin: $mx-center;
        transition: 0.5s;
        i {
          font-size: 30px;
        }
      }
      &-group {
        display: flex;
        font-size: 18px;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 0.6em 0;
      }
    }
  }
  &.active {
    width: 200px;
    .nav {
      &-icon-menu {
        &-name {
          display: block;
          width: 60%;
        }
        &-icon {
          width: 40%;
        }
      }
    }
  }
}
</style>
