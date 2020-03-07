import Vue from "vue";
import VueRouter from "vue-router";
import Webcome from '@/js/components/webcome';
import About from '@/js/components/about';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Webcome
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
});

export default router;
