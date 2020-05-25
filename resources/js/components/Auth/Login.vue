<template>
  <div class="user__login">
    <div class="user__login__bg d-none d-md-block">
      <img class="wave" src="../../../images/wave.png" alt="wave" />
    </div>
    <div class="user__login__container row">
      <div class="user__login__img col-4 d-none d-md-block">
        <img src="../../../images/bg.svg" alt="bg" />
      </div>
      <div class="user__login__login-content col-md-4 col-xs-12">
        <v-card>
          <v-form ref="form" v-model="valid" @submit.prevent="login" :lazy-validation="lazy">
            <v-avatar color="#2dcd94" size="100">
              <v-img src="../../../images/avatar.svg" alt="avatar" class="avatar" />
            </v-avatar>
            <v-card-title class="title">Welcome</v-card-title>
            <v-alert type="error" v-if="error">Wrong account or password</v-alert>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-text-field
              v-model="password"
              :counter="50"
              :rules="passwordRules"
              label="Password"
              :append-icon="show ? 'fal fa-eye' : 'fal fa-eye-slash'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              required
            ></v-text-field>
            <v-card-actions>
              <router-link tag="a" to="forgot-password.html">Forgot Password?</router-link>
              <router-link tag="a" to="register.html">Register</router-link>
            </v-card-actions>
            <v-checkbox v-model="checkbox" label="Remember" class="mt-2"></v-checkbox>
            <v-btn color="#2dcd94" :type="'submit'" :loading="btnLoading">Login</v-btn>
          </v-form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appLogin",
  data() {
    return {
      btnLoading: false,
      show: false,
      valid: true,
      error: false,
      password: null,
      passwordRules: [
        v => !!v || "Password is required",
        v =>
          (v && v.length <= 50) || "Password must be less than 50 characters",
        v => (v && v.length > 6) || "Password is greater than 6 characters"
      ],
      email: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checkbox: false,
      lazy: false
    };
  },
  methods: {
    login() {
      let app = this;
      if (app.$refs.form.validate()) {
        app.btnLoading = true;
        this.$auth.login({
          params: {
            email: app.email,
            password: app.password
          },
          success(response) {
            app.btnLoading = false;
          },
          error(err) {
            console.log(err);
            app.error = true;
            app.btnLoading = false;
          },
          rememberMe: app.checkbox
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  &__login {
    position: relative;
    height: 100%;

    &__bg {
      position: fixed;
      bottom: 25%;
      left: 0;
      height: 100%;
      z-index: 0;
    }
    &__container {
      justify-content: center;
      align-items: center;
      height: 100%;
      .title {
        padding: 0.85em 0;
        text-align: center;
        justify-content: center;
      }
      .v-card {
        background-color: transparent;
        max-width: 60%;
        margin: 0 auto;
        box-shadow: none;
        border: 0;
        @media (max-width: 991px) {
          max-width: 70%;
        }
        @media (max-width: 600px) {
          max-width: 90%;
        }
        &__actions {
          justify-content: space-between;
          padding-left: 0;
          padding-right: 0;
          a {
            color: #2dcd94;
            transition: 0.5s;
            &:hover {
              color: #068457;
            }
          }
        }
      }
    }
    &__img {
      position: relative;
      img {
        width: 500px;
      }
    }
  }
}
</style>