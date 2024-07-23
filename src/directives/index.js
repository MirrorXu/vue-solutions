import fullScreen from "./fullScreen";
import copy from "./copy/index";
export default {
  install(Vue, ...args) {
    console.log("安装钩子函数 ， 参数", ...args);
    Vue.directive("fullScreen", fullScreen);
    Vue.directive("copy", copy);
  },
};
