import fullScreen from "./fullScreen";

export default {
  install(Vue, ...args) {
    console.log("安装钩子函数 ， 参数", ...args);
    Vue.directive("fullScreen", fullScreen);
  },
};
