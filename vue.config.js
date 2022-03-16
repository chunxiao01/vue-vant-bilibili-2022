const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set("@", resolve("./src"))
//       .set("components", resolve("./src/components"))
//       .set("assets", resolve("./src/assets"))
//       .set("common", resolve("./src/common"))
//       .set("network", resolve("./src/network"))
//       .set("router", resolve("./src/router"))
//       .set("store", resolve("./src/store"))
//       .set("views", resolve("./src/views"))
//   }
// }

module.exports = {
  publicPath: "/vue_vant_bilibili_2022/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        common: "@/common",
        network: "@/network",
        views: "@/views"
      }
    }
  }
}
