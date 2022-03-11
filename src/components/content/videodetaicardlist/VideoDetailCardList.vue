<template>
  <div class="videodetail_list">
    <video-detail-card
      class="videodetail_list_item"
      v-for="(videodetailinfo, index) in videodetaillist"
      :key="index"
      :videodetailinfo="videodetailinfo"
    />
  </div>
</template>

<script>
import VideoDetailCard from "./VideoDetailCard.vue"

export default {
  props: {
    videodetaillist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { VideoDetailCard }
}
</script>

<style scoped>
.videodetail_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.videodetail_list_item {
  flex-basis: 50%;
  margin: 1.5% 0;
  box-sizing: border-box;
}
</style>
