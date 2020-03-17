<script>
const percentWidthToPix = (percent, ctx) =>
  Math.floor((ctx.canvas.width / 100) * percent);
const percentHeightToPix = (percent, ctx) =>
  Math.floor((ctx.canvas.height / 100) * percent);

export default {
  inject: ["provider"],

  props: {
    /**
     * Start coordinates (percentage of canvas dimensions).
     */
    x1: {
      type: Number,
      default: 0
    },
    y1: {
      type: Number,
      default: 0
    },
    /**
     * End coordinates (percentage of canvas dimensions).
     */
    x2: {
      type: Number,
      default: 0
    },
    y2: {
      type: Number,
      default: 0
    },
    /**
     * The value to display.
     */
    value: {
      type: Number,
      defualt: 0
    },
    /**
     * The color of the box.
     */
    color: {
      type: String,
      default: "#F00"
    }
  },
  data() {
    return {
      oldBox: {
        x: null,
        y: null,
        w: null,
        h: null
      }
    };
  },
  computed: {
    calculatedBox() {
      const ctx = this.provider.context;

      const calculated = {
        x: percentWidthToPix(this.x1, ctx),
        y: percentHeightToPix(this.y1, ctx),
        w: percentWidthToPix(this.x2 - this.x1, ctx),
        h: percentHeightToPix(this.y2 - this.y1, ctx)
      };

      this.oldBox = calculated;
      return calculated;
    }
  },
  render() {
    if (!this.provider.context) {
      return;
    }
    const ctx = this.provider.context;

    const oldBox = this.oldBox;

    const newBox = this.calculatedBox;

    ctx.beginPath();

    ctx.clearRect(oldBox.x, oldBox.y, oldBox.w, oldBox.h);

    ctx.clearRect(newBox.x, newBox.y - 42, newBox.w, 100);

    ctx.rect(newBox.x, newBox.y, newBox.w, newBox.h);
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.fillStyle = "#000";
    ctx.font = "28px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      Math.floor(this.value),
      newBox.x + newBox.w / 2,
      newBox.y - 14
    );
  }
};
</script>

<style>
</style>
