<script>
export default {
  name: "MTitle",
  props: {
    level: {
      type: [String, Number],
      default: 1,
      validator: (value) => {
        return [1, 2, 3, 4, 5, 6].some((v) => v == value);
      },
    },
  },
  computed: {
    c_style() {
      const { level } = this;
      return {
        fontSize: `${12 + 10 / level}px`,
        padding: `${(6 / level) * 2}px 0px`,
        "border-bottom": `1px solid #ccc`,
      };
    },
  },
};
</script>

<template>
  <h1 v-if="level == 1" :style="c_style"><slot></slot></h1>
  <h2 v-else-if="level == 2" :style="c_style"><slot></slot></h2>
  <h3 v-else-if="level == 3" :style="c_style"><slot></slot></h3>
  <h4 v-else-if="level == 4" :style="c_style"><slot></slot></h4>
  <h5 v-else-if="level == 5" :style="c_style"><slot></slot></h5>
  <h6 v-else :style="c_style"><slot></slot></h6>
</template>

<style scoped lang="scss"></style>
