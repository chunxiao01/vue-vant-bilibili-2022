<template>
  <div>
    <video-card
      v-for="(video, index) in videolist"
      :key="index"
      :videoinfos="video"
    />
  </div>
</template>

<script>
import VideoCard from "components/content/VideoCard"
import { getHomeHotMultidata } from "network/home/hot_request"

export default {
  data() {
    return {
      videolist: []
    }
  },
  components: { VideoCard },
  mounted() {
    getHomeHotMultidata().then((res) => {
      console.log(res.data.data.list)
      if (res.data.data.list) {
        this.videolist = res.data.data.list
      }
    })
  }
}
</script>

<style></style>
