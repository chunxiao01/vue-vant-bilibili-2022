<template>
  <div
    class="videocard"
    @click="
      clickVideoPlayLink(
        unloginhistoryviewinfo.aid,
        unloginhistoryviewinfo.bvid,
        unloginhistoryviewinfo.cid,
        unloginhistoryviewinfo.short_link
      )
    "
  >
    <div class="videocard-container">
      <a class="videocard-img">
        <div class="videocard-img-container">
          <img
            :src="unloginhistoryviewinfo.pic + '@412w_232h_1c.webp'"
            alt=""
            class="videocard-img__img"
          />
        </div>
      </a>
      <div class="videocard-content">
        <div class="videocard-title">
          <span class="videocard-title-text">{{
            unloginhistoryviewinfo.title
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    unloginhistoryviewinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    //监听图片点击事件
    clickVideoPlayLink(aid, bvid, cid, bvurl) {
      console.log(aid, bvid, cid, bvurl)
      // this.$router.push("/videodetail/" + bvid)
      this.$router.push({
        path: "/videodetail",
        query: {
          aid,
          bvid,
          cid
        }
      })
    }
  }
}
</script>

<style scoped>
.videocard {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
}
.videocard-img {
  width: 100%;
}
.videocard-img-container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.videocard-img__error,
.videocard-img__img,
.videocard-img__loading {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.videocard-title {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 32px;
  font-weight: 500;
  line-height: 16px;
  font-size: 15px;
  word-wrap: break-word;
}
</style>
