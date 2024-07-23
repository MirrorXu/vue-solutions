<template>
  <div class="nav">
    <div class="nav-item" v-for="nav in NavTree" :key="nav.name">
      <a
        @click.prevent="clickNav(nav)"
        :class="{ active: $route.name === nav.name }"
        >{{ nav.title }}
      </a>
    </div>
  </div>
</template>
<script>
import { NavTree } from "@/router/routes";

export default {
  name: "NavCom",
  data() {
    return { NavTree };
  },
  mounted() {
    // console.log(this.$route);
  },
  methods: {
    clickNav(nav) {
      console.log(nav);
      if (nav.name === this.$route.name) {
        console.log("正在当前页面，无需跳转");
        return;
      } else {
        this.$router.push({ name: nav.name });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    display: flex;
    padding: 5px 10px;
    font-weight: bold;
    color: #2c3e50;
    cursor: default;

    &:hover {
      color: #42b983;
    }

    &:active {
      color: #42b983;
    }

    &.active {
      color: #42b983;
    }
  }
}
</style>
