import timeFormat from "@/filters/timeFormat";
export default {
  install(Vue, options) {
    console.log("Vue install filters", options);
    Vue.filter("timeFormat", timeFormat);
  },
};
