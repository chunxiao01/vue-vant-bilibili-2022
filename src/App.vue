<template>
  <div id="app">
    <router-view />
    <tabbar />
  </div>
</template>

<script>
import Tabbar from "components/content/Tabbar"
export default {
  name: "App",
  components: {
    Tabbar
  }
}
</script>

<style>
@import "assets/css/normalize.css";
</style>
