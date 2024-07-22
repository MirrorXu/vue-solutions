<template>
  <div id="app">
    <!--    v-full-screen-->
    <span v-full-screen class="full-screen">全屏</span>
    <NavCom></NavCom>
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
  width: 30px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background: deeppink;
  position: fixed;
  right: 20px;
  cursor: pointer;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
