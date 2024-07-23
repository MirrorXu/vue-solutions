import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// // 定义一个加载目录的函数
// const requireAll = (requireContext) =>
//   requireContext.keys().map(requireContext);
// const req = require.context("./components-ui/svg-icon/svgs", false, /\.svg$/);
// console.log(req);
// // 加载目录下的所有的 svg 文件
// requireAll(req);

Vue.config.productionTip = false;

// 加载svg图标
// import "@/components-ui/svg-icon/icons";

// 注册组件
import myUi from "@/components-ui";
const myUiOptions = { themeColor: "red" };
Vue.use(myUi, myUiOptions);

// 注册指令
import myDirectives from "./directives";
Vue.use(myDirectives);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
