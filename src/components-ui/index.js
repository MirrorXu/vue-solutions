import "./svg-icon/icons";
import SvgIcon from "@/components-ui/svg-icon/SvgIcon.vue";
import MTitle from "./MTitle.vue";
import MLink from "@/components-ui/MLink.vue";
export default {
  install(Vue, ...args) {
    console.log("安装UI组件库 , 参数：", ...args);
    Vue.component("SvgIcon", SvgIcon);
    Vue.component("MTitle", MTitle);
    Vue.component("MLink", MLink);
  },
};
