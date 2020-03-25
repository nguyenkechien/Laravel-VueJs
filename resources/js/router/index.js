import Vue from "vue";
import VueRouter from "vue-router";
import Webcome from '@/js/pages/webcome';
import About from '@/js/pages/about';
import Dashboard from '@/js/pages/dashboard';
import Companies from '@/js/pages/companies';

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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/companies',
      name: 'Companies',
      component: Companies
    },
  ]
});

export default router;
