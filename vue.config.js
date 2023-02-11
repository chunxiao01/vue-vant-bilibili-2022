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
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue_vant_bilibili_2022/" : "/",
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
  },
  // css: {
  //   extract: true
  // },
  devServer: {
    // https: false,
    // hotOnly: false,
    proxy: {
      "/api": {
        target: "https://api.bilibili.com/x/web-interface",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
