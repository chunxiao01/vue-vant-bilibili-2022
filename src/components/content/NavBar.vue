<template>
  <div>
    <van-nav-bar
      title=""
      left-text="哔哩哔哩"
      :left-arrow="isShowNavbarTitleArrow"
      nav-bar-text-color="#000"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    isShowNavbarTitleArrow: Boolean
  },
  data() {
    return {
      titlearrow: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/home")
    }
  }
}
</script>

<style>
.van-nav-bar__left {
  padding-left: 10px;
}
.van-nav-bar__text {
  color: #000;
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
}
</style>
