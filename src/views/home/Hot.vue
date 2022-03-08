<template>
  <div class="videolist_container">
    <video-list :videolist="videolistdata.videolist" />
  </div>
</template>

<script>
import VideoList from "components/content/videolist/VideoList"
import { getHomeHotMultidata } from "network/home/hot_request"

export default {
  data() {
    return {
      videolistdata: {
        ps: 30,
        pn: 0,
        videolist: []
      }
    }
  },
  components: { VideoList },
  created() {
    this.getHomeHotVideoListData(
      this.videolistdata.ps,
      this.videolistdata.pn + 1
    )
    console.log(this.videolistdata)
  },
  methods: {
    getHomeHotVideoListData(ps, pn) {
      getHomeHotMultidata(ps, pn).then((res) => {
        if (res.data.data.list) {
          this.videolistdata.videolist.push(...res.data.data.list)
          this.videolistdata.pn += 1
        }
      })
    }
  }
}
</script>

<style>
.videolist_container {
  height: 630px;
  overflow: auto;
}
</style>
