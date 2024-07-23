<template>
  <div id="app">
    <!--    v-full-screen-->
    <div class="navbar">
      <NavCom></NavCom>
      <span v-full-screen class="full-screen">
        <svg-icon name="fullscreen" class="icon" />
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import NavCom from "./components/NavCom.vue";

export default {
  name: "AppRoot",
  components: {
    NavCom,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid red;
  min-height: 100vh;
}

.full-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  //background: #f1b6d6;
  cursor: pointer;
  color: #1058a1;
  margin-right: 20px;
  .icon {
    height: 20px !important;
    width: 20px !important;
  }
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
