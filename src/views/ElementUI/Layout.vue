<template>
  <div class="layout">
    <div class="nav">
      <!--      :collapse="isCollapse"-->
      <!--      default-active="1-4-1"-->
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="routeSelected"
        :default-active="defaultRouteName"
      >
        <!--        <el-submenu index="1">-->
        <!--          <template #title>-->
        <!--            <i class="el-icon-location"></i>-->
        <!--            <span slot="title">导航一</span>-->
        <!--          </template>-->
        <!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
        <!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--          <el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--        </el-submenu>-->
        <el-menu-item
          v-for="route in ElementUIRoutes"
          :key="route.name"
          :index="route.name"
        >
          <i class="el-icon-menu"></i>
          <span>{{ route.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { ElementUIRoutes } from "@/router/routes";
export default {
  name: "ElementUILayout",
  components: {},
  data() {
    return {
      isCollapse: true,
      ElementUIRoutes: ElementUIRoutes,
      defaultRouteName: "",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    routeSelected(...args) {
      // eslint-disable-next-line no-unused-vars
      const [index, indexPath, vm] = args;
      const currentRoute = this.ElementUIRoutes.find(
        (route) => route.name === index
      );
      const { name } = currentRoute;
      if (name === this.$route.name) return;
      this.$router.push({ name });
    },
    _setDefaultRouteName() {
      const { name } = this.$route;
      this.defaultRouteName = name;
    },
  },
  mounted() {
    this._setDefaultRouteName();
    mlog.info(
      "ElementUIRoutes",
      this.ElementUIRoutes,
      this.ElementUIRoutes.map((item) => item.meta.title)
    );
  },
};
</script>
<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100%;
  .nav {
    background: darkcyan;
  }
  .router-view {
    flex: 1;
    overflow-y: scroll;
  }
}
.nav {
  width: 200px;
}
</style>
