<template>
  <div class="wrap">
    <div class="links">
      <MLink v-for="route in links" :name="route.name" :key="route.name">
        {{ route?.meta?.title || route.name || route.path }}
      </MLink>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavTree from "@/router/routes";
const links = NavTree.find((item) => {
  return item.name === "buildInComponents";
}).children;
export default {
  name: "BuildInComponentView",
  data() {
    return {
      links: links,
    };
  },

  created() {
    console.log(this.$route);
    console.log("created:", this.links);
    // console.log(NavTree);
  },
};
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  .links {
    //position: absolute;
    width: 100%;
    padding: 10px;
    //background: deeppink;
    display: flex;
    justify-content: flex-start;
  }
  .content {
    background: darkcyan;
    border: 1px solid red;
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
