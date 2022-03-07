<template>
  <div id="app">
    <nav-bar :isShowNavbarTitleArrow="isShowTabBar" navbartext="哔哩哔哩" />
    <router-view />
    <div v-if="!isShowTabBar">
      <tab-bar />
    </div>
  </div>
</template>

<script>
import NavBar from "components/content/NavBar"
import TabBar from "components/content/TabBar"

export default {
  name: "App",
  computed: {
    isShowTabBar() {
      return this.$route.path === "/search"
    },
    navbartext() {
      const route_path = this.$route.path
    }
  },
  components: {
    TabBar,
    NavBar
  }
}
</script>

<style>
@import "assets/css/normalize.css";
</style>
