// 单独引入svg图标
// import "./svgs/fullscreen.svg";

// 引入全部图标
// eslint-disable-next-line no-unused-vars
let svgFiles = [];
function importAll() {
  // console.log(require.context);
  const req = require.context("./svgs", false, /\.svg$/);
  req.keys().forEach(req);
  // console.log(req);
  // console.log(Object.keys(req));
  // console.log(req.keys());
  svgFiles = req.keys();
}
importAll();

// console.log("svgFiles:", svgFiles);
function pathToName(path) {
  const fileName = path.replace(/(.*\/)*([^.]+).*/gi, "$2");
  // console.log("###", fileName);
  return fileName;
}

export const svgs = svgFiles.map((svgFile) => {
  return pathToName(svgFile);
});
