<template>
  <v-row>
    <v-col lg="8" sm="12" xs="12"></v-col>
    <v-col lg="4" sm="12" xs="12">
      <v-card class="mx-auto" max-width="434" tile>
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">{{ $auth.user().name }}</v-list-item-title>
                  <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TabProfile"
};
</script>

<style>
</style>