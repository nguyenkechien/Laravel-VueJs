<template>
  <div class="dashboard">
    <h2>Bar Chart Example</h2>
    <my-canvas style="width: 100%; height: 600px;">
      <my-box
        v-for="(obj, index) in chartValues"
        :x1="((index / chartValues.length) * 100)"
        :x2="((index / chartValues.length) * 100) + (100 / chartValues.length)"
        :y1="100"
        :y2="100 - obj.val"
        :color="obj.color"
        :value="obj.val"
        :key="index"
      ></my-box>
    </my-canvas>
  </div>
</template>

<script>
import MyCanvas from "@/js/components/canvas/canvas.vue";
import MyBox from "@/js/components/canvas/box.vue";

export default {
  name: "dashboard",
  components: {
    MyCanvas,
    MyBox
  },
  data() {
    return {
      chartValues: [
        { value: 24, color: "red" },
        { value: 32, color: "#0f0" },
        { value: 66, color: "rebeccapurple" },
        { value: 1, color: "green" },
        { value: 28, color: "blue" },
        { value: 60, color: "rgba(150, 100, 0, 0.2)" }
      ]
    };
  },
  mounted() {
    let dir = 1;
    let selectedVal = Math.floor(Math.random() * this.chartValues.length);
    setInterval(() => {
      if (Math.random() > 0.995) {
        dir *= -1;
      }
      if (Math.random() > 0.99) {
        selectedVal = Math.floor(Math.random() * this.chartValues.length);
      }

      this.chartValues[selectedVal].value = Math.min(
        Math.max(this.chartValues[selectedVal].value + dir * 0.5, 0),
        100
      );
    }, 16);
  }
};
</script>

<style lang="scss">
.dashboard {
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}
</style>
