import VueRouter from "vue-router";
import Webcome from "@/js/pages/webcome";
import About from "@/js/pages/about";
import Dashboard from "@/js/pages/dashboard";
import Companies from "@/js/pages/companies";
import Login from "@/js/pages/login";
import Register from "@/js/pages/register";
import Users from "@/js/pages/users";
import Profile from "@/js/pages/profile";
import Category from "@/js/pages/category";
import Admin from "@/js/views/admin";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Admin",
      name: "home",
      component: Admin,
      children: [
        {
          path: "webcome.html",
          name: "webcome",
          component: Webcome,
        },
        {
          path: "about.html",
          name: "about",
          component: About,
        },
        {
          path: "dashboard.html",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "users.html",
          name: "users",
          component: Users,
        },
        {
          path: "profile.html",
          name: "profile",
          component: Profile,
        },
        {
          path: "companies.html",
          name: "companies",
          component: Companies,
        },
        {
          path: "category.html",
          name: "category",
          component: Category,
        },
        {
          path: "*",
          redirect: '/webcome.html'
        }
      ],
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
    },
    {
      path: "*",
      redirect: '/login.html'
    }
  ]
});

export default router;
