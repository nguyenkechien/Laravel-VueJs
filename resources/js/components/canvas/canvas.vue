<template>
  <div class="dashboard-canvas-wrapper">
    <canvas ref="dashboard-canvas"></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**
       * By creating the provider in the data property, it becomes reactive,
       * so child components will update when `context` changes.
       */
      provider: {
        /**
         * This is the CanvasRenderingContext that children will draw to.
         */
        context: null
      }
    };
  },
  provide() {
    return {
      provider: this.provider
    };
  },
  mounted() {
    /**
     * We can't access the rendering context until the canvas is mounted to the DOM.
     * Once we have it, provide it to all child components.
     */
    this.provider.context = this.$refs["dashboard-canvas"].getContext("2d");

    this.$refs["dashboard-canvas"].width = this.$refs["dashboard-canvas"].parentElement.clientWidth;
    this.$refs["dashboard-canvas"].height = this.$refs["dashboard-canvas"].parentElement.clientHeight;
  }
};
</script>

<style>
</style>
