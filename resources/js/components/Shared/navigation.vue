<template>
  <v-card style="border-radius: 0">
    <v-navigation-drawer v-model="drawer" dark :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img v-if="$auth.user().avatar" src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          <v-icon v-else>fal fa-user-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-title style="text-transform: capitalize;">{{ $auth.user().name }}</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>far fa-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="{path: item.link}">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <!-- is Opent -->
          <v-btn block @click="logOut" v-if="!mini">Logout</v-btn>
          <!-- is Close -->
          <v-btn small fab dark color="teal" @click="logOut" v-else>
            <v-icon dark>fa-sign-out-alt</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: true,
      items: [
        {
          link: "/",
          title: "Home",
          icon: "fal fa-home"
        },
        {
          link: "/dashboard.html",
          title: "Dashboard",
          icon: "fal fa-tachometer-slowest"
        },
        {
          link: "/companies.html",
          title: "Companies",
          icon: "fal fa-building"
        },
        {
          link: "/users.html",
          title: "Users",
          icon: "fal fa-user"
        },
        {
          link: "/about.html",
          title: "About",
          icon: "fal fa-address-card"
        }
      ],
      mini: true
    };
  },
  methods: {
    logOut: function() {
      localStorage.removeItem("users");
      this.$auth.logout();
    }
  }
};
</script>

<style lang="scss"></style>


