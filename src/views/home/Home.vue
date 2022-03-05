<template>
  <div>
    <van-search disabled @click="onHomeSearchClick" />
    <h2>首页</h2>
  </div>
</template>

<script>
import { Search } from "vant"

export default {
  methods: {
    onHomeSearchClick() {
      this.$router.replace("/search")
    }
  },
  components: {
    Search
  }
}
</script>

<style></style>
