import './bootstrap';
import Vue from 'vue';
import vuetify  from '@/js/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import Routes from '@/js/router/index.js';
import App from '@/js/views/App';

const app = new Vue({
  vuetify,
  router: Routes,
  render: h => h(App),
}).$mount('#app');

export default app;