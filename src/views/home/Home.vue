<template>
  <div>
    <home-search />
    <home-tabs :active="active" :tabs="tabs">
      <template v-slot:tab1>
        <hot />
      </template>
      <template v-slot:tab2>
        <zf />
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
}
</script>

<style></style>
