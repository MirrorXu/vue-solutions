<template>
  <svg class="svg-icon" :style="c_style" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      // required: true,
      default: "fullscreen",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    c_style() {
      return {};
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
