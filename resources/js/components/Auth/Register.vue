<template>
  <div class="user__register">
    <div class="user__register__bg d-none d-md-block">
      <img class="wave" src="../../../images/wave.png" alt="wave" />
    </div>
    <div class="user__register__container row">
      <div class="user__register__img col-4 d-none d-md-block">
        <img src="../../../images/bg.svg" alt="bg" />
      </div>
      <div class="user__register__register-content col-md-4 col-xs-12">
        <v-card>
          <v-form ref="form" v-model="valid" @submit.prevent="register" :lazy-validation="lazy">
            <v-avatar color="#2dcd94" size="100">
              <img :src="srcAvatar" width="100" alt="avatar" class="avatar" />
            </v-avatar>
            <v-card-text class="red--text darken-2" v-if="avatarRulse.length">{{avatarRulse}}</v-card-text>

            <v-card-actions class="justify-center">
              <v-btn text small color="#2dcd94" @click="fileChange">Choose avatar</v-btn>
              <input
                type="file"
                class="d-none"
                name="avatar"
                @change="onFileChange"
                ref="changeAvatar"
              />
            </v-card-actions>
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
import CallAPI from "./../CallAPI";

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
      srcAvatar: "../../../images/avatar.svg",
      avatar: null,
      avatarRulse: "",
      lazy: false
    };
  },
  methods: {
    register() {
      let app = this;
      if (app.$refs.form.validate()) {
        app.btnLoading = true;
        let _data = new FormData();
        _data.append("avatar", app.avatar);
        _data.append("email", app.email);
        _data.append("name", app.name);
        _data.append("password", app.password);

        this.$auth.register({
          data: _data,
          success(response) {
            app.btnLoading = false;
          },
          error(err) {
            app.error = true;
            app.btnLoading = false;
          }
        });
      }
    },
    fileChange() {
      this.$refs.changeAvatar.click();
    },
    onFileChange(e) {
      const self = this;
      const files = e.target.files;
      if (!files[0]) {
        return false;
      }
      if (
        /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i.test(files[0].name) ===
        false
      ) {
        self.avatarRulse = "Vui lòng chọn file ảnh";
        return false;
      }
      self.avatarRulse = "";
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.onload = e => {
        self.srcAvatar = e.target.result;
        self.avatar = files[0];
      };
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