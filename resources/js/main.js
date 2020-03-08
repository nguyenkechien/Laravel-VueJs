import './bootstrap';
import Vue from 'vue';
import Routes from '@/js/router/index.js';
import App from '@/js/views/App';

const app = new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app');

export default app;