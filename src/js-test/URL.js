const log = console.log;

console.log(location);
const url = new URL(window.location.origin);
console.log(url);
url.searchParams.append("a", 1);
url.pathname = "/about";
console.log(url.toString());
import logo from "@/assets/logo.png";

console.log(logo);

log("\n测试以 URL 对象为基本 URL 的相对 URL");
// let baseUrl = new URL("https://developer.mozilla.org/");
const path = "/zh-CN/docs";
const result = URL.canParse(path);
console.log(result);
