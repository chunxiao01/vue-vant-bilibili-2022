<template>
  <div class="unloginhistoryview">
    <div class="unloginhistoryview-container">
      <div class="unloginhistoryview-edit" v-if="ifShowEditHistory">
        <van-checkbox
          v-model="unloginhistoryviewinfo.checked"
          checked-color="#ff509b"
        ></van-checkbox>
      </div>
      <div
        class="unloginhistoryview-content"
        @click="
          clickVideoPlayLink(
            unloginhistoryviewinfo.aid,
            unloginhistoryviewinfo.bvid,
            unloginhistoryviewinfo.cid,
            unloginhistoryviewinfo.short_link
          )
        "
      >
        <a class="unloginhistoryview-img">
          <div class="unloginhistoryview-img-container">
            <img
              :src="unloginhistoryviewinfo.pic + '@412w_232h_1c.webp'"
              alt=""
              class="unloginhistoryview-img__img"
            />
          </div>
        </a>
        <div class="unloginhistoryview-info">
          <div class="unloginhistoryview-title">
            <span class="unloginhistoryview-title-text">{{
              unloginhistoryviewinfo.title
            }}</span>
          </div>
          <div class="unloginhistoryview-up">
            <span class="unloginhistoryview-up-icon"></span>
            <span class="unloginhistoryview-up-name">{{
              unloginhistoryviewinfo.name
            }}</span>
          </div>
          <div class="unloginhistoryview-play-info">
            <div
              class="unloginhistoryview-play-info-detail unloginhistoryview-play-date"
            >
              <span class="unloginhistoryview-play-date-text">{{
                playDateFormat(unloginhistoryviewinfo.ctime)
              }}</span>
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
    unloginhistoryviewinfo: {
      type: Object,
      default() {
        return {}
      }
    },
    ifShowEditHistory: {
      type: Boolean,
      default: false
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
    },

    //添加视频观看记录，以点击视频图片跳转至视频详情为标准
    recordVideoView() {
      const { aid, bvid, cid, short_link, pic, title, name, ctime } =
        this.unloginhistoryviewinfo
      const payload = {
        aid,
        bvid,
        cid,
        short_link,
        pic,
        title,
        name,
        ctime
      }
      this.$store.dispatch("addHistoryView", payload)
    }
  }
}
</script>
<style scoped>
.unloginhistoryview {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  border-bottom: 1px solid #cfcfcf;
}
.unloginhistoryview:not(:first-child) {
  margin-top: 8px;
}
.unloginhistoryview-container {
  display: flex;
}
.unloginhistoryview-edit {
  width: 30px;
  display: flex;
  text-align: center;
}
.unloginhistoryview-edit >>> .van-checkbox {
  flex: 1;
}
.unloginhistoryview-edit >>> .van-checkbox__icon {
  display: inline-block;
}
.unloginhistoryview-content {
  flex: 1;
  display: flex;
}
.unloginhistoryview-img {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 178px;
  height: 100px;
  margin-right: 8px;
}
.unloginhistoryview-info {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-width: 0;
  min-height: 100px;
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
.unloginhistoryview-time {
  display: inline-block;
  position: absolute;
  padding: 1px;
  bottom: 3px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: #eee;
  font-size: 14px;
  border-radius: 5px;
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

.unloginhistoryview-up-icon {
  position: relative;
  display: inline-block;
  border: 1px solid #999;
  color: #999;
  font-size: 14px;
  border-radius: 2px;
  margin-right: 1px;
}
.unloginhistoryview-up-icon::before {
  content: "up";
  pointer-events: none;
}
.unloginhistoryview-up-name {
  font-size: 14px;
  color: #999;
}
.unloginhistoryview-play-info {
  display: flex;
}
.unloginhistoryview-play-date {
  width: 70px;
}
</style>
