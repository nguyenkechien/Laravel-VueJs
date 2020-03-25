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
    <ul class="nav-group">
      <li v-for="(menu, i) in dataMenus" :key="i">
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
          link: "/",
          name: "Home",
          classIcon: "fal fa-home"
        },
        {
          link: "/dashboard",
          name: "Dashboard",
          classIcon: "fal fa-tachometer-slowest"
        },
        {
          link: "/companies",
          name: "Companies",
          classIcon: "fal fa-building"
        },
        {
          link: "/about",
          name: "About",
          classIcon: "fal fa-address-card"
        },
        {
          link: "/logout",
          name: "Logout",
          classIcon: "fal fa-sign-out-alt"
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
  top: 0;
  left: 0;
  transform: translate(0, 0);
  height: 100vh;
  width: 75px;
  background: #000;
  color: #fff;
  transition: 0.75s;
  text-align: left;
  padding: 0 1em;
  &-group {
    margin: 0;
    padding: 0 !important;
  }
  &-icon {
    &-menu {
      padding: 10px 0;
      &-name {
        visibility: hidden;
        opacity: 0;
        font-size: 0;
      }
      &-icon {
        width: 100%;
        i {
          font-size: 20px;
        }
      }
      &-group {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        span {
          padding: 15px 5px;
          cursor: pointer;
          user-select: none;
        }
      }
    }
  }
  &.active {
    width: 160px;
    .nav {
      &-icon {
        &-menu {
          &-name {
            visibility: visible;
            opacity: 1;
            font-size: 16px;
            width: 70%;
            transition: 0.75s opacity;
          }
          &-icon {
            width: 30%;
          }
        }
      }
    }
  }
}
</style>
