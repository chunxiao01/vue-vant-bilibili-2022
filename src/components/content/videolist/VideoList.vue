<template>
  <div>
    <video-card
      v-for="(videoinfo, index) in videolist"
      :key="index"
      :videoinfo="videoinfo"
    />
  </div>
</template>

<script>
import VideoCard from "./VideoCard"
export default {
  props: {
    videolist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { VideoCard }
}
</script>

<style></style>
