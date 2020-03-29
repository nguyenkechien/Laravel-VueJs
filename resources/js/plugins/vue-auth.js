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
  registerData: {
    url: "/api/user/register",
    method: "POST",
    redirect: "/login.html",
  },
  loginData: {
    url: "/api/user/login",
    method: "POST",
    redirect: "/",
    fetchUser: true
  },
  logoutData: {
    url: "/api/user/logout",
    method: "POST",
    redirect: "/login.html",
    makeRequest: true
  },
  fetchData: {
    url: "/api/user/",
    method: "GET",
    enabled: true
  },
  parseUserData(data) {
    return data || {};
  }
};

export default config;
