<template>
  <div>
    <div
      class="videocard"
      @click="
        clickVideoPlayLink(videoinfos.aid, videoinfos.bvid, videoinfos.cid)
      "
    >
      <div class="videocard-container">
        <a class="videocard-img">
          <div class="videocard-img-container">
            <img
              :src="videoinfos.pic + '@412w_232h_1c.webp'"
              alt=""
              class="videocard-img__img"
            />
          </div>
          <div class="videocard-time">
            <span class="videocard-time-text">{{ videoinfos.duration }}</span>
          </div>
        </a>
        <div class="videocard-content">
          <div class="videocard-title">
            <span class="videocard-title-text">{{ videoinfos.title }}</span>
          </div>
          <div
            class="videocard-tag"
            v-if="isShowPlayTag(videoinfos.rcmd_reason.content)"
          >
            <span class="videocard-tag-text">{{
              videoinfos.rcmd_reason.content
            }}</span>
          </div>
          <div class="videocard-up">
            <span class="videocard-up-icon"></span>
            <span class="videocard-up-name">{{ videoinfos.owner.name }}</span>
          </div>
          <div class="videocard-play-info">
            <div class="videocard-play-info-detail videocard-play-counter">
              <div class="videocard-play-icon__img">
                <img src="~assets/img/home/hot/play.svg" alt="" />
              </div>
              <span class="videocard-play-counter-text">{{
                playCounterFormat(videoinfos.stat.view)
              }}</span>
            </div>
            <div class="videocard-play-info-detail videocard-play-date">
              <span class="videocard-play-date-text">{{
                playDateFormat(videoinfos.ctime)
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
  </div>
</template>

<script>
export default {
  props: {
    videoinfos: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    playCounterFormat(num) {
      //将数字转换为字符串, 然后通过split方法用.分隔, 取到第0个
      let numStr = num.toString().split(".")[0]
      let point = 1
      if (numStr.length < 6) {
        // 判断数字有多长,如果小于6,,表示10万以内的数字,让其直接显示
        console.log(numStr)
        return numStr
      } else if (numStr.length >= 6 && numStr.length <= 8) {
        // 如果数字大于6位,小于8位,让其数字后面加单位万
        let decimal = numStr.substring(
          numStr.length - 4,
          numStr.length - 4 + point
        )
        // 由千位,百位组成的一个数字
        return parseFloat(parseInt(num / 10000) + "." + decimal) + "万"
      } else if (numStr.length > 8) {
        // 如果数字大于8位,让其数字后面加单位亿
        let decimal = numStr.substring(
          numStr.length - 8,
          numStr.length - 8 + point
        )
        return parseFloat(parseInt(num / 100000000) + "." + decimal) + "亿"
      }
    },
    isShowPlayTag(tag) {
      return tag
    },
    playDateFormat(date) {
      if (date < new Date("1970-12-31").getTime()) {
        date = date * 1000 //添加毫秒数
      }
      let month = new Date(date).getMonth() + 1
      let day = new Date(date).getDate()
      return month + "-" + day
    },
    clickVideoPlayLink(aid, bvid, cid) {
      console.log(aid, bvid, cid)
    }
  }
}
</script>
<style>
.videocard {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  background-color: #fafafa;
  border-bottom: 1px solid #cfcfcf;
}
.videocard:not(:first-child) {
  margin-top: 8px;
}
.videocard-container {
  display: flex;
}
.videocard-img {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 156px;
  height: 88px;
  margin-right: 8px;
}
.videocard-content {
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
  min-height: 82px;
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
.videocard-time {
  display: inline-block;
  position: absolute;
  padding: 1px;
  bottom: 3px;
  right: 5px;
  background: rgba(0, 0, 0, 0.3);
  color: #eee;
  font-size: 14px;
  border-radius: 5px;
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
.videocard-tag-text {
  border: 1px solid #ea6da3;
  color: #ea6da3;
  font-size: 12px;
  border-radius: 2px;
}
.videocard-tag-text::before {
  content: "";
  pointer-events: none;
}
.videocard-up-icon {
  position: relative;
  display: inline-block;
  border: 1px solid #999;
  color: #999;
  font-size: 14px;
  border-radius: 2px;
  margin-right: 1px;
}
.videocard-up-icon::before {
  content: "up";
  pointer-events: none;
}
.videocard-up-name {
  font-size: 14px;
  color: #999;
}
.videocard-play-info {
  display: flex;
}
.videocard-play-date {
  width: 70px;
}
.videocard-play-share {
  width: 50px;
}
.videocard-play-counter {
  flex: 1;
}
.videocard-play-icon__img,
.videocard-share-icon__img {
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 3px;
  vertical-align: middle;
}
.videocard-play-counter-text,
.videocard-play-date-text {
  font-size: 14px;
  color: #666;
}
.videocard-play-date {
  text-align: center;
}
.videocard-play-share {
  text-align: right;
}
</style>
