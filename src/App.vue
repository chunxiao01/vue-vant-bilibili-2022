<template>
  <div id="app">
    <nav-bar :isShowNavbarTitleArrow="isShowTabBar" />
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
