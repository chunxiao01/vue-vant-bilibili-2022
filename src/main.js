import Vue from "vue"
import Vant from "vant"
import "vant/lib/index.css"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueLazyload)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app")
