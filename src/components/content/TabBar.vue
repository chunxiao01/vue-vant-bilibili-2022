<template>
  <van-tabbar
    v-model="active"
    active-color="#FF509B"
    inactive-color="#8A8A8A"
    route
  >
    <van-tabbar-item replace to="/home">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icons[0].active : icons[0].inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/category">
      <span>分区</span>
      <template #icon="props">
        <img :src="props.active ? icons[1].active : icons[1].inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icons[2].active : icons[2].inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icons: [
        {
          active: require("@/assets/img/tabbar/0_0.svg"),
          inactive: require("@/assets/img/tabbar/0_1.svg")
        },
        {
          active: require("@/assets/img/tabbar/1_0.svg"),
          inactive: require("@/assets/img/tabbar/1_1.svg")
        },
        {
          active: require("@/assets/img/tabbar/2_0.svg"),
          inactive: require("@/assets/img/tabbar/2_1.svg")
        }
      ]
    }
  }
}
</script>

<style>
.van-tabbar-item {
  font-size: 16px;
  font-weight: 500;
}
.van-tabbar-item__icon img {
  height: 24px;
}
</style>
