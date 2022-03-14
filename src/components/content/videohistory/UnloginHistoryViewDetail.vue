<template>
  <div
    class="videocard"
    @click="
      clickVideoPlayLink(
        videoinfo.aid,
        videoinfo.bvid,
        videoinfo.cid,
        videoinfo.short_link
      )
    "
  >
    <div class="videocard-container">
      <a class="videocard-img">
        <div class="videocard-img-container">
          <img
            :src="videoinfo.pic + '@412w_232h_1c.webp'"
            alt=""
            class="videocard-img__img"
          />
        </div>
        <div class="videocard-time">
          <span class="videocard-time-text">{{
            playSecondsFormat(videoinfo.duration)
          }}</span>
        </div>
      </a>
      <div class="videocard-content">
        <div class="videocard-title">
          <span class="videocard-title-text">{{ videoinfo.title }}</span>
        </div>
        <div
          class="videocard-tag"
          v-if="isShowPlayTag(videoinfo.rcmd_reason.content)"
        >
          <span class="videocard-tag-text">{{
            videoinfo.rcmd_reason.content
          }}</span>
        </div>
        <div class="videocard-up">
          <span class="videocard-up-icon"></span>
          <span class="videocard-up-name">{{ videoinfo.owner.name }}</span>
        </div>
        <div class="videocard-play-info">
          <div class="videocard-play-info-detail videocard-play-counter">
            <div class="videocard-play-icon__img">
              <img src="~assets/img/home/hot/play.svg" alt="" />
            </div>
            <span class="videocard-play-counter-text">{{
              playCounterFormat(videoinfo.stat.view)
            }}</span>
          </div>
          <div class="videocard-play-info-detail videocard-play-date">
            <span class="videocard-play-date-text">{{
              playDateFormat(videoinfo.ctime)
            }}</span>
          </div>
          <div class="videocard-play-info-detail videocard-play-share">
            <div class="videocard-share-icon__img">
              <img src="~assets/img/home/hot/share.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { numbersFormat, dateFormat, secondsFormat } from "common/utils"

export default {
  props: {
    videoinfo: {
      type: Object,
      default() {
        return {}
      }
    }
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
<style>