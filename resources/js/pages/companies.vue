<template>
  <section class="companies">
    <app-Companies></app-Companies>
  </section>
</template>

<script>
import TabCompanies from "@/js/components/Companies/Companies";
export default {
  name: "Companies",
  components: {
    "app-Companies": TabCompanies
  }
};
</script>

<style lang="scss">
  .companies{
    text-align: left;
  }
</style>