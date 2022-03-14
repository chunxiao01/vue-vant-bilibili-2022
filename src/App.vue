<template>
  <div id="app">
    <nav-bar :isShowNavbarTitleArrow="isShowTabBar" :navbartext="navbartext" />
    <router-view :key="$route.fullPath" />
    <tab-bar v-if="!isShowTabBar" />
  </div>
</template>

<script>
import NavBar from "components/content/NavBar"
import TabBar from "components/content/TabBar"

export default {
  name: "App",
  data() {
    return {
      //isShowTabBar: false,
      //navbartext: "哔哩哔哩"
    }
  },
  computed: {
    isShowTabBar() {
      return (
        this.$route.path === "/search" ||
        this.$route.path === "/videodetail" ||
        this.$route.path === "/historyview"
      )
    },
    navbartext() {
      const route_path = this.$route.path
      let res = "哔哩哔哩"
      if (route_path === "/historyview") {
        res = "历史记录"
      }
      return res
    }
  },
  mounted() {},
  methods: {
    // showTabBar(res) {
    //   this.isShowTabBar = res
    // },
    // changeNavBarText(res) {
    //   this.navbartext = res
    // }
  },
  components: {
    TabBar,
    NavBar
  }
}
</script>

<style>
@import "assets/css/normalize.css";
body {
  height: 100vh;
}
.van-nav-bar__left .van-icon-arrow-left {
  color: #000;
  font-weight: 600;
  font-size: 20px;
  margin-right: 15px;
}
.van-search__action {
  font-weight: normal;
  font-size: 17px;
}
</style>
