<script>
import MTitle from "@/components-ui/MTitle.vue";
export default {
  name: "MPanel",
  components: {
    MTitle,
  },
  props: {
    title: {
      default: "",
      type: [String, Number],
    },
    titleLevel: {
      default: 2,
      type: [String, Number],
      validator: (value) => {
        return [1, 2, 3, 4, 5, 6].some((v) => v == value);
      },
    },
  },
};
</script>

<template>
  <div class="panel">
    <div class="panel-header">
      <template v-if="$slots.header"> <slot name="header"></slot>/ </template>
      <template v-else>
        <MTitle v-if="title" :level="titleLevel" class="panel-header-title">
          {{ title }}
        </MTitle>
      </template>
    </div>
    <div class="panel-body"><slot></slot></div>
    <div v-if="$slots.footer" class="panel-header">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 10px;
  border: 1px solid red;
  overflow: hidden;
  //box-shadow: 1px 1px 1px 4px rgba(129, 128, 128, 0.3);
  &-header {
    //display: flex;
    border-bottom: 1px solid darkcyan;
    &-title {
      border-bottom: none !important;
      text-align: center !important;
    }
  }
}
</style>
