<template>
  <v-footer>
    <div class="links footer-bar">
      <a href="https://www.facebook.com/KyS1111" target="_blank">
        <v-icon>fab fa-facebook-f</v-icon>
      </a>
      <a href="https://www.instagram.com/b_ll_p/" target="_blank">
        <v-icon>fab fa-instagram</v-icon>
      </a>
      <a href="https://twitter.com/Chin58351840" target="_blank">
        <v-icon>fab fa-twitter</v-icon>
      </a>
    </div>
    <div class="copy">&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  width: 100%;
  background-color: #fff !important;
  position: unset !important;
}
.footer-bar {
  width: 80%;
  text-align: left;
  a {
    i {
      &:hover {
        color: #0190ec;
      }
    }
  }
}
.copy {
  width: 20%;
  text-align: right;
}
</style>
