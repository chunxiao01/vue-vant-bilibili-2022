<template>
  <div
    class="videodetailcard"
    @click="
      clickVideoPlayLink(
        videodetailinfo.aid,
        videodetailinfo.bvid,
        videodetailinfo.cid,
        videodetailinfo.short_link
      )
    "
  >
    <div class="videodetailcard_container">
      <a class="videodetailcard_img">
        <div class="videodetailcard_img_container">
          <img
            :src="videodetailinfo.pic + '@412w_232h_1c.webp'"
            alt=""
            class="videodetailcardimg__img"
          />
        </div>
        <div
          class="videodetailcard_tag"
          v-if="isShowPlayTag(videodetailinfo.rcmd_reason.content)"
        >
          <span class="videodetailcard_tag_text">{{
            videodetailinfo.rcmd_reason.content
          }}</span>
        </div>
        <div class="videodetailcard_play">
          <span class="videodetailcard_play_count">{{
            playCounterFormat(videodetailinfo.stat.view)
          }}</span>
          <span class="videodetailcard_play_danmu">{{
            playCounterFormat(videodetailinfo.stat.danmaku)
          }}</span>
          <span class="videodetailcard_play_time">{{
            playSecondsFormat(videodetailinfo.duration)
          }}</span>
        </div>
      </a>
    </div>
    <div class="videodetailcard_introduce">
      <span class="videodetailcard_introduce_text">
        {{ videodetailinfo.title }}
      </span>
    </div>
  </div>
</template>

<script>
import { numbersFormat, dateFormat, secondsFormat } from "common/utils"

export default {
  props: {
    videodetailinfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.info("==当前路由id==" + this.$route.query.bvid)
    if (this.$route.query.bvid) {
      console.info("加载页面数据")
    }
    next()
  },
  methods: {
    //数字格式化
    playCounterFormat(num) {
      return numbersFormat(num)
    },

    //日期格式化
    playDateFormat(date) {
      return dateFormat(date)
    },

    //秒时间格式化
    playSecondsFormat(second) {
      return secondsFormat(second)
    },

    //是否显示视频tag
    isShowPlayTag(tag) {
      return tag
    },

    //监听图片加载完成事件
    //imgload() {},

    //监听图片点击事件
    clickVideoPlayLink(aid, bvid, cid, bvurl) {
      console.log(aid, bvid, cid, bvurl)
      console.log(123)
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
.videodetailcard {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
}

.videodetailcard_img_container img {
  width: 100%;
  border-radius: 8px;
}
.videodetailcard_tag {
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 14px;
  background-color: #f79707;
  color: #fff;
  display: none;
  padding: 4px;
  border-top-left-radius: 8px;
}

.videodetailcard_play {
  position: absolute;
  display: flex;
  padding: 4px;
  bottom: 32px;
  left: 8px;
  right: 8px;
  font-size: 12px;
  color: #fff;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.videodetailcard_play span {
  display: inline-block;
}
.videodetailcard_introduce {
  height: 20px;
}
.videodetailcard_introduce_text {
  font-size: 14px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  /* autoprefixer: ignore next */
  -webkit-box-orient: vertical;
}
.videodetailcard_play_count::before {
  content: "▶";
  margin-right: 1px;
}
.videodetailcard_play_danmu::before {
  content: "💬";
  margin-right: 1px;
}
.videodetailcard_play_count,
.videodetailcard_play_danmu {
  flex: 1;
}
.videodetailcard_play_time {
  text-align: right;
  max-width: 70px;
}
</style>
