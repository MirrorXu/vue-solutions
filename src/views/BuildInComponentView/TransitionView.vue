<template>
  <div>
    <MTitle>transition 组件</MTitle>
    <MTitle level="2">
      css 变形 transform属性: [translate | rotate | scale | skew ]
    </MTitle>
    <div style="background: #f5e9ce" class="flex-row flex-center">
      <div class="box translate flex flex-center">translate平移</div>
      <div class="box rotate flex flex-center">
        <svg-icon name="arrowup"></svg-icon>rotate 旋转
      </div>
      <div class="box scale flex flex-center">scale 缩放</div>
      <div class="box skew flex flex-center">skew 偏移</div>
    </div>
    <MTitle level="2">css 过渡 transition 属性</MTitle>
    <pre>
      语法：transition: property(属性名) duration(过渡时间)
      timing-function(混动函数) delay(开始延迟时间)；
    </pre>
    <div style="background: #f5e9ce" class="transition flex-row flex-center">
      <div class="box flex flex-center">:hover scale(1.5)</div>
      <div
        :ref="refId"
        @click="doTransition"
        class="box flex flex-center transitionAll"
      >
        click to change style
      </div>
    </div>
  </div>
</template>
<script>
import { randomNumber } from "@/helpers/random";

export default {
  name: "TransitionView",
  components: {},
  data() {
    return {
      refId: "xxx",
    };
  },
  methods: {
    doTransition() {
      const dom = this.$refs[this.refId];
      // console.log(dom);
      const num = randomNumber(0.5, 1.5);
      dom.style.transform = `scale(${num})`;
      console.log("scale:", num);
      const rgba = `rgba(${randomNumber(0, 255)}, ${randomNumber(
        0,
        255
      )} , ${randomNumber(0, 255)}, ${randomNumber(0.3, 1)})`;
      console.log("background:", rgba);
      dom.style.background = `${rgba}`;
    },
  },
};
</script>

<style scoped lang="scss">
$baseLength: 80px;
.box {
  margin: 30px;
  background: #a9e55e;
  width: $baseLength;
  height: $baseLength;
  border: 1px solid #2c3e50;
  user-select: none;
}
.translate {
  &:hover {
    transform: translate(10px, 10px);
    //可以使用百分比，百分比相对于自身
    //transform: translate(-10%, 10%);
  }
}
.rotate {
  //transform-origin: 30px 30px;
  transform-origin: top left;
  transform-origin: bottom right;
  transform-origin: bottom right 10px;
  &:hover {
    transform: rotate(30deg);
  }
}
.scale {
  //transform-origin: 30px 30px;
  transform-origin: top left;
  //transform-origin: bottom right;
  //transform-origin: bottom right 10px;
  &:hover {
    transform: scale(0.5);
    transform: scale(1.2, 0.8);
  }
}
.skew {
  //transform-origin: 30px 30px;
  //transform-origin: top left;
  //transform-origin: bottom right;
  //transform-origin: bottom right 10px;
  &:hover {
    transform: skew(20deg, 30deg);
  }
}
.transition {
  .box {
    background-color: #f1edce;
    transition: all 2s ease;

    &:nth-child(1) {
      background: darkcyan;
      &:hover {
        background-color: #ea0c47;
        transform: scale(1.5);
      }
    }
    &:nth-child(2) {
      background: #f1b6d6;
    }
  }
}
</style>
