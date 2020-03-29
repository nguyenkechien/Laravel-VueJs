import Vue from "vue";
import VueRouter from "vue-router";
import Webcome from "@/js/pages/webcome";
import About from "@/js/pages/about";
import Dashboard from "@/js/pages/dashboard";
import Companies from "@/js/pages/companies";
import Login from "@/js/pages/login";
import Register from "@/js/pages/register";


const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Webcome,
      meta: {
        auth: true
      }
    },
    {
      path: "/about.html",
      name: "about",
      component: About,
      meta: {
        auth: true
      }
    },
    {
      path: "/dashboard.html",
      name: "dashboard",
      component: Dashboard,
      meta: {
        auth: true
      }
    },
    {
      path: "/companies.html",
      name: "Companies",
      component: Companies,
      meta: {
        auth: true
      }
    },
    {
      path: "/login.html",
      component: Login,
      name: "login",
      meta: {
        auth: false
      }
    },
    {
      path: "/register.html",
      component: Register,
      name: "register",
      meta: {
        auth: false
      }
    }
  ]
});

export default router;
