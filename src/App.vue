<template>
  <div id="app">
    <!--    v-full-screen-->
    <div class="navbar">
      <NavCom></NavCom>
      <span v-full-screen class="full-screen">
        <svg-icon name="fullscreen" class="icon" />
      </span>
    </div>
    <div class="content">
      <router-view />
    </div>
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
  position: fixed;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(1, 19, 11, 0.56);
    background: #d2f6e5;
    min-width: 400px;

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
  }
  .content {
    flex: 1;
    overflow-y: scroll;
    background: #e8f8f1;
  }
}
</style>
