<template>
  <div>
    <van-tabs
      v-model="tagActive"
      class="home-top-tab"
      color="#ff509b"
      title-active-color="#ff509b"
    >
      <van-divider
        class="home-top-tab-divider"
        :style="{ borderColor: '#999' }"
      />
      <van-tab :title="tabs[0]">
        <slot name="tab1"></slot>
      </van-tab>
      <van-tab :title="tabs[1]">
        <slot name="tab2"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagActive: this.active
    }
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
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
