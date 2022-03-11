<template>
  <div class="home-view">
    <home-search />
    <home-tabs :active="active" :tabs="tabs" ref="hometagscpn">
      <template v-slot:tab1>
        <hot ref="hotcpn" />
      </template>
      <template v-slot:tab2>
        <zf ref="zfcpn" />
      </template>
    </home-tabs>
  </div>
</template>

<script>
import HomeSearch from "./childComps/HomeSearch"
import HomeTabs from "./childComps/HomeTabs"
import Hot from "./Hot"
import Zf from "./Zf"

export default {
  data() {
    return {
      active: 0,
      tabs: ["热门", "追番"]
    }
  },
  components: {
    HomeSearch,
    HomeTabs,
    Hot,
    Zf
  }
  // activated() {
  //   console.log("activated", this.$refs.hometagscpn.tagActive)
  //   console.log("hotcpn:", this.$refs.hotcpn)
  // },
  // deactivated() {
  //   console.log("deactivated:", this.$refs.hometagscpn.tagActive)
  //   console.log("zfcpn:", this.$refs.zfcpn)
  // }
}
</script>

<style scoped></style>
