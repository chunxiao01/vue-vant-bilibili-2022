<template>
  <van-nav-bar
    title=""
    :left-text="navbartext"
    :left-arrow="isShowNavbarTitleArrow"
    nav-bar-text-color="#000"
    @click-left="onClickLeft"
  >
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    isShowNavbarTitleArrow: Boolean,
    navbartext: String
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
