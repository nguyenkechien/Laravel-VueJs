<template>
  <div class="user__register">
    <div class="user__register__bg">
      <img class="wave" src="../../../images/wave.png" alt="wave" />
    </div>
    <div class="user__register__container row">
      <div class="user__register__img col-4">
        <img src="../../../images/bg.svg" alt="bg" />
      </div>
      <div class="user__register__register-content col-4">
        <v-card>
          <v-form ref="form" v-model="valid" @submit.prevent="register" :lazy-validation="lazy">
            <v-avatar color="#2dcd94" size="100">
              <v-img src="../../../images/avatar.svg" alt="avatar" class="avatar" />
            </v-avatar>
            <v-card-title class="title">Welcome</v-card-title>
            <v-alert type="error" v-if="error">Account already exists</v-alert>
            <v-text-field
              v-model="name"
              :counter="50"
              :rules="nameRules"
              label="Your Name"
              required
            ></v-text-field>
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
              <router-link tag="a" to="/forgot-password.html">Forgot Password?</router-link>
              <router-link tag="a" to="/login.html">Login</router-link>
            </v-card-actions>

            <v-btn color="#2dcd94" class="my-4" :type="'submit'" :loading="btnLoading">Register</v-btn>
          </v-form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appRegister",
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
      name: null,
      nameRules: [
        v => !!v || "Your Name required",
        v =>
          (v && v.length <= 50) || "Your Name must be less than 50 characters"
      ],
      lazy: false
    };
  },
  methods: {
    register() {
      let app = this;
      if (app.$refs.form.validate()) {
        app.btnLoading = true;
        this.$auth.register({
          params: {
            name: app.name,
            email: app.email,
            password: app.password
          },
          success(response) {
            app.btnLoading = false;
          },
          error(err) {
            app.error = true;
            app.btnLoading = false;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  &__register {
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