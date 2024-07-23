import SvgIcon from "@/components-ui/svg-icon/SvgIcon.vue";
import "./svg-icon/icons";
export default {
  install(Vue, ...args) {
    console.log("安装UI组件库 , 参数：", ...args);
    Vue.component("SvgIcon", SvgIcon);
  },
};
