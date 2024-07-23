// const chalk = require("chalk");
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgDir = path.resolve(__dirname, "src/components-ui/svg-icon/svgs");
    // console.log(chalk.red("svgDir"), chalk.yellow(svgDir));
    console.log("svgDir", svgDir);
    config.module
      .rule("svg")
      .exclude.add(path.resolve(__dirname, "src/components-ui/svg-icon/svgs"))
      .end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "src/components-ui/svg-icon/svgs"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
});
