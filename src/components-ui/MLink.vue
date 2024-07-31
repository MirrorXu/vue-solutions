<template>
  <!--  v-copy:dblclick="{ value: name, callback: handleCopy }"-->
  <a
    class="link"
    :class="{ 'link-disable': disable }"
    @click.prevent.stop="handleClick"
  >
    <slot name="icon">
      <svg-icon name="attachment"></svg-icon>
    </slot>
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "MLink",
  props: {
    name: {
      required: true,
      type: String,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      if (this.$route.name === this.name) {
        console.warn("无需跳转，正在当前路由");
        return;
      }
      if (this.disable) {
        console.warn("事件被禁用");
        return;
      }
      this.$router.push({ name: this.name });
    },
    handleCopy(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped lang="scss">
.link {
  font-weight: bold;
  color: #335d4f;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #09a16a;
  }
  &:active {
    color: #09a16a;
  }
  &-disable {
    cursor: not-allowed;
    color: #313c4d !important;
  }
}
</style>
