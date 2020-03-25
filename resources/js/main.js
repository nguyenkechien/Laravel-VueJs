import "./bootstrap";
import Vue from "vue";
import vuetify from "@/js/plugins/vuetify";
import Routes from "@/js/router";
import App from "@/js/views/App";


const app = new Vue({
  router: Routes,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default app;
