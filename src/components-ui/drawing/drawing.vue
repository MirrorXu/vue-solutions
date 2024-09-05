<template>
  <div class="wrap" :ref="wrapId">
    <canvas v-bind="$attrs" :ref="id" id="canvas"></canvas>
  </div>
</template>
<script>
export default {
  name: "drawing",
  props: {
    // 笔的颜色
    color: {
      type: String,
      default: "black",
    },
    // 线宽，书写时笔尖的粗细
    lineWidth: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      wrapId: "wrap",
      id: "drawing",
    };
  },
  canvas: null,
  mounted() {
    const wrapper = this.$refs[this.wrapId];
    console.log(
      "## wrapper clientWidth clientHeight:",
      wrapper.clientWidth,
      wrapper.clientHeight
    );

    const canvas = (this.$options.canvas = document.getElementById("canvas"));
    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;
    console.log("## canvas width height:", canvas.width, canvas.height);
    const ctx = (this.$options.ctx = canvas.getContext("2d"));

    console.log(" ctx.direction:", ctx.direction);
    console.log("canvas === ctx.canvas ?", canvas === ctx.canvas);
    console.log("ctx.fillStyle:", ctx.fillStyle);

    ctx.lineWidth = this.lineWidth || 2; //直线的宽度状态设置
    // ctx.fillStyle = "#ffffff"; //直线的颜色状态设置
    ctx.fillStyle = "#0000ff";
    console.log(
      "canvas clientWidth clientHeight",
      canvas.clientWidth,
      canvas.clientHeight
    );
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    ctx.fillStyle = "#ade08a";
    ctx.fillRect(20, 20, canvas.clientWidth - 40, canvas.clientHeight - 40);
    ctx.strokeStyle = "#000"; //直线的颜色状态设置
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    let isDown = false;
    // 鼠标按下
    canvas.addEventListener("mousedown", (e) => {
      isDown = true;
      ctx.beginPath(); //开始路径
      ctx.moveTo(e.offsetX, e.offsetY); //绘制点移动
    });
    // 鼠标移动
    canvas.addEventListener("mousemove", (e) => {
      if (isDown) {
        ctx.lineTo(e.offsetX, e.offsetY); //绘制直线
        ctx.stroke(); //描边
      }
    });
    // 鼠标抬起
    document.documentElement.addEventListener("mouseup", (e) => {
      isDown = false;
    });
    // 鼠标经过
    canvas.addEventListener("mouseover", (e) => {
      canvas.style.cursor = "crosshair";
    });
    // 鼠标离开
    canvas.addEventListener("mouseout", (e) => {
      canvas.style.cursor = "default";
    });

    // // const canvas = this.$refs[this.id];
    // const canvas = document.getElementById("canvas");
    // this.$options.canvas = canvas;
    // const ctx = canvas.getContext("2d");
    // let isDrawing = false;
    // ctx.fillStyle = "black";
    // function draw(x, y) {
    //   if (isDrawing) {
    //     ctx.beginPath();
    //     // ctx.arc(x, y, 1, 0, Math.PI * 2);
    //     ctx.arc(x, y, 1, 0, Math.PI);
    //     ctx.closePath();
    //     ctx.fill();
    //   }
    // }
    // canvas.addEventListener("mousemove", (event) => {
    //   const { offsetX, offsetY } = event;
    //   console.log(offsetX, offsetY);
    //   if (isDrawing) {
    //     // debugger;
    //     draw(offsetX, offsetY);
    //   }
    // });
    // canvas.addEventListener("mousedown", () => (isDrawing = true));
    // canvas.addEventListener("mouseup", () => (isDrawing = false));
  },
  methods: {
    async save(dataType, quality = 0.92) {
      const { canvas: canvasDom } = this.$options;
      console.log(canvasDom);
      if (dataType == "blob") {
        const blob = await new Promise((resolve, reject) => {
          try {
            canvasDom.toBlob(
              function (blob) {
                resolve(blob);
              },
              "image/png",
              quality
            );
          } catch (e) {
            reject(e);
          }
        });
        return blob;
      } else if (dataType === "url") {
        const base64Data = canvasDom.toDataURL("image/png", quality);
        console.log(base64Data);
        return base64Data;
      } else {
        throw new Error("unsupported dataType");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: deeppink;
  //border: 10px solid #313c4d;

  canvas {
    width: 100%;
    height: 100%;
    //background: rgba(75, 236, 157, 0.89);
    //border: 10px solid red;
    box-sizing: border-box;
    background: #09a16a;
  }
}
</style>
