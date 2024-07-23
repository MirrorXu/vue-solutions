<template>
  <div>
    <h1>Svg 图标</h1>
    <div class="icon-box">
      <div
        v-for="(icon, index) in icons"
        :key="icon.name"
        class="icon-box-item"
      >
        <svg-icon :name="icon.name" class="icon"></svg-icon>
        <div class="icon-name" v-copy="index">{{ index }}</div>
        <div
          v-copy:click="{ value: icon.name, callback: copyCb }"
          class="icon-name"
        >
          {{ icon.name }}
        </div>
        <div
          v-copy:dblclick="{ value: icon.id, callback: copyCb }"
          class="icon-id"
        >
          {{ icon.id }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { svgs } from "@/components-ui/svg-icon/icons";
export default {
  name: "IconsView",
  data() {
    return {
      icons: svgs.map((iconName) => {
        return {
          name: iconName,
          id: `#icon-${iconName}`,
        };
      }),
    };
  },
  methods: {
    copyCb(e) {
      if (e.value) {
        console.log("copy success", e.value);
      } else {
        throw e;
      }
    },
  },
  mounted() {
    // console.log("mounted:", this.icons);
  },
};
</script>

<style scoped lang="scss">
.icon-box {
  //background: darkgray;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  &-item {
    padding: 10px;
    width: 100px;
    align-items: center;
    align-self: stretch;
    border: 1px solid #ddd;
    &:hover {
      color: #42b983;
    }
    .icon-name {
      margin-top: 10px;
      user-select: none;
      cursor: pointer;
      &:hover {
        color: #cb9510;
        transform: scale(1.02);
      }
    }
    .icon-id {
      margin-top: 10px;
      user-select: none;
      cursor: pointer;
      &:hover {
        color: #cb9510;
        transform: scale(1.02);
      }
    }
  }
}
.icon {
  width: 30px;
  height: 30px;
}
</style>
