import dayjs from "dayjs";

/**
 *
 * @param value
 * @param format  参考：https://dayjs.fenxianglu.cn/category/display.html#%E6%A0%BC%E5%BC%8F%E5%8C%96
 * @returns {string}
 */
export default function (value, format) {
  // console.log(value, format);
  return dayjs(value).format(format);
}
