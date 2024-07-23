import * as clipboard from "clipboard-polyfill";
import {
  isPrimary,
  isString,
  isFunction,
  isPlainObject,
} from "@/helpers/types";
const eventNameKey = "_v_eventName";
const eventHandlerKey = "_v_eventHandler";
export default {
  bind(el, binding) {
    // console.log("### bind", el, binding);
    const config = {
      value: "",
      event: "click",
      callback: null,
    };
    const { value, arg } = binding;
    if (isPrimary(value)) {
      config.value = value;
    } else if (isPlainObject(value)) {
      config.value = value.value || "";
      if (isFunction(value.callback)) {
        config.callback = value.callback;
      }
    }
    if (isString(arg)) {
      config.event = arg;
    }
    if (!config.value) return;

    // 将事件类型和事件回调绑定到el上
    el[eventNameKey] = config.event;
    el[eventHandlerKey] = () => {
      clipboard.writeText(config.value).then(
        () => {
          if (config.callback) {
            config.callback(config);
          }
        },
        (e) => {
          if (config.callback) {
            config.callback(e);
          }
        }
      );
    };
    el.addEventListener(config.event, el[eventHandlerKey]);
  },
  unbind(el) {
    el.removeEventListener(el[eventNameKey], el[eventHandlerKey]);
  },
  // componentUpdated(el, binding) {
  // console.log(el, binding);
  // },
};
