<template>
  <div
    class="unloginhistoryview"
    @click="
      clickVideoPlayLink(
        unloginhistoryviewinfo.aid,
        unloginhistoryviewinfo.bvid,
        unloginhistoryviewinfo.cid,
        unloginhistoryviewinfo.short_link
      )
    "
  >
    <div class="unloginhistoryview-container">
      <a class="unloginhistoryview-img">
        <div class="unloginhistoryview-img-container">
          <img
            :src="unloginhistoryviewinfo.pic + '@412w_232h_1c.webp'"
            alt=""
            class="unloginhistoryview-img__img"
          />
        </div>
      </a>
      <div class="unloginhistoryview-content">
        <div class="unloginhistoryview-title">
          <span class="unloginhistoryview-title-text">{{
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
.unloginhistoryview {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
}
.unloginhistoryview-img {
  width: 100%;
}
.unloginhistoryview-img-container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.unloginhistoryview-img__error,
.unloginhistoryview-img__img,
.unloginhistoryview-img__loading {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.unloginhistoryview-title {
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
