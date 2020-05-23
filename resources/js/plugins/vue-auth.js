import bearer from "@websanova/vue-auth/drivers/auth/bearer";
import axios from "@websanova/vue-auth/drivers/http/axios.1.x";
import router from "@websanova/vue-auth/drivers/router/vue-router.2.x";

const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: "auth-token",
  tokenStore: ["cookie"],
  notFoundRedirect: {
    path: "/"
  },
  authRedirect: {
    path: "/login.html"
  },
  registerData: {
    url: "/api/auth/register",
    method: "POST",
    redirect: "/login.html"
  },
  loginData: {
    url: "/api/auth/login",
    method: "POST",
    redirect: "/",
    fetchUser: true
  },
  logoutData: {
    url: "/api/auth/logout",
    method: "POST",
    redirect: "/login.html",
    makeRequest: true
  },
  fetchData: {
    url: "/api/auth/",
    method: "GET",
    enabled: true
  },
  parseUserData(data) {
    return data || {};
  }
};

export default config;
