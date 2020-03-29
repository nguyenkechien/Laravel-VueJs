import "./bootstrap";
import Vue from "vue";
import vuetify from "@/js/plugins/vuetify";
import Routes from "@/js/router";
import App from "@/js/views/App";
import VueAuth from "@websanova/vue-auth";
import auth from "@/js/plugins/vue-auth";
import axios from "axios";
import VueAxios from 'vue-axios';
import VueRouter from "vue-router";

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     return error.response;
//   }
// );

Vue.use(VueAxios, axios);
Vue.router = Routes;
App.router = Vue.router;
Vue.use(VueRouter);

Vue.use(VueAuth, auth);


const app = new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default app;
