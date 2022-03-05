<template>
  <div>
    <van-search disabled @click="onHomeSearchClick" />
    <van-tabs
      v-model="active"
      class="home-top-tab"
      color="#ff509b"
      title-active-color="#ff509b"
    >
      <van-divider
        class="home-top-tab-divider"
        :style="{ borderColor: '#999' }"
      />
      <van-tab title="热门">
        <hot />
      </van-tab>
      <van-tab title="追番">
        <zf />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Hot from "./Hot"
import Zf from "./Zf"

export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    onHomeSearchClick() {
      this.$router.replace("/search")
    }
  },
  components: {
    Hot,
    Zf
  }
}
</script>

<style>
.home-top-tab .van-tab,
.home-top-tab .van-tab--active {
  font-size: 16px;
}
.home-top-tab-divider.van-divider {
  margin-top: 0;
}
</style>
