<template>
  <div class="video_related_container">
    <div class="video_detail_container">
      <div class="video_detail_info">
        <van-collapse v-model="activeNames" @change="clickToggle">
          <van-collapse-item name="1">
            <template #title>
              <div class="video_detail_title_info">
                <span class="video_detail_tag" v-if="isShowVideoDetailTag">{{
                  videodetailtag
                }}</span>
                <span
                  class="video_detail_title"
                  :class="{ video_detail_title_toggle_up: isToggleup }"
                  >{{ videodetailtitle }}</span
                >
              </div>
            </template>
            <div class="video_detail_introduce">
              <div class="video_detail_author">
                <div class="video_detail_author_avatar">
                  <img :src="videodetailauthor.authoravatar" alt="" />
                </div>
                <div class="video_detail_author_info">
                  <span class="video_detail_author_name">
                    {{ videodetailauthor.authorname }}
                  </span>
                  <span class="video_detail_author_fans"
                    >{{ videodetailauthor.authorfans }}粉丝</span
                  >
                </div>
              </div>
              <div class="video_detail_play_info">
                <span class="video_detail_play_count"
                  >{{ videodetailplayinfo.videodetailplaycount }}次观看</span
                >
                <span class="video_detail_play_danmu"
                  >{{ videodetailplayinfo.videodetailplaydanmu }}弹幕</span
                >
                <span class="video_detail_play_date">{{
                  videodetailplayinfo.videodetailplaydate
                }}</span>
                <span class="video_detail_play_bvid">{{
                  videodetailplayinfo.videodetailplaybvid
                }}</span>
              </div>
              <div class="video_detail_copyright">
                <span class="video_detail_copyright_text">
                  {{ videodetailcopyright }}
                </span>
              </div>
              <div class="video_detail_author_sign">
                <span class="video_detail_author_sign_text">
                  {{ videodetailauthor.sign }}
                </span>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="video_author_info_container" v-if="isToggleup">
          <div class="video_author_info">
            <span class="video_author_avatar">
              <img :src="videodetailauthor.authoravatar" alt="" />
            </span>
            <span class="video_author_name">{{
              videodetailauthor.authorname
            }}</span>
          </div>
          <div class="video_author_play">
            <span class="video_author_play_count"
              >{{ videodetailplayinfo.videodetailplaycount }}观看</span
            >
            <span class="video_author_play_danmu"
              >{{ videodetailplayinfo.videodetailplaydanmu }}弹幕</span
            >
          </div>
        </div>
        <div class="video_detail_share_container">
          <span class="video_detail_collect">{{ videodetailshare }}</span>
          <span class="video_detail_share_playbill">分享海报</span>
          <span class="video_detail_share_wechat">分享好友</span>
        </div>
      </div>
    </div>
    <van-divider :style="{ borderColor: '#999' }" />
    <video-detail-card-list :videodetaillist="videodetaillistdata" />
  </div>
</template>

<script>
import VideoDetailCardList from "components/content/videodetaicardlist/VideoDetailCardList.vue"
export default {
  components: { VideoDetailCardList },
  data() {
    return {
      activeNames: ["0"],
      isToggleup: true,
      videodetailauthor: {
        authorname: "垣气满满的gakki",
        authorfans: 0,
        authoravatar: require("@/assets/img/common/0.svg"),
        sign: "认识你自己！"
      },
      videodetailplayinfo: {
        videodetailplaycount: 0,
        videodetailplaydanmu: 0,
        videodetailplaydate: "",
        videodetailplaybvid: ""
      },
      videodetailcopyright: "未经作者授权禁止转载",
      videodetailshare: 0
    }
  },
  props: {
    isShowVideoDetailTag: {
      type: Boolean,
      default: true
    },
    videodetailtag: {
      type: String,
      default: "热门"
    },
    videodetailtitle: {
      type: String,
      default:
        "这里是视频标题这里是视频标题这里是视频标题这里是视频标题这里是视频标题"
    },
    videodetaillistdata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    clickToggle() {
      this.isToggleup = !this.isToggleup
    }
  }
}
</script>

<style scoped>
.video_detail_tag {
  border: 1px solid #ea6da3;
  color: #ea6da3;
  font-size: 14px;
  border-radius: 2px;
  margin-right: 5px;
}
.video_detail_title {
  font-size: 14px;
}
.video_detail_title.video_detail_title_toggle_up {
  display: inline-block;
  width: calc(100vw - 105px);
  line-height: 16px;
  height: 14px;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
}
.video_detail_container >>> .van-collapse-item__content {
  padding-bottom: 5px;
}
.video_detail_author {
  display: flex;
  margin-bottom: 10px;
}
.video_detail_author_avatar {
  width: 40px;
}
.video_detail_author_avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.video_detail_author_info {
  flex: 1;
  margin-left: 10px;
}
.video_detail_author_info span {
  display: block;
  font-size: 14px;
}
.video_detail_play_info {
  display: flex;
  margin-bottom: 10px;
}
.video_detail_play_info span {
  display: inline-block;
  flex: 1;
  font-size: 14px;
}

.video_detail_copyright {
  margin-bottom: 10px;
}
.video_detail_copyright_text {
  font-size: 14px;
}
.video_detail_copyright_text::before {
  content: "🚫";
}
.video_detail_author_sign_text {
  font-size: 14px;
}

.video_author_info_container {
  display: flex;
  padding: 0 16px 10px;
}
.video_author_info {
  flex: 1;
  height: 24px;
  font-size: 14px;
  align-items: center;
}
.video_author_play {
  display: flex;
  align-items: center;
  width: 150px;
  height: 24px;
  font-size: 14px;
}
.video_author_avatar {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  margin-right: 5px;
  margin-top: 2px;
  vertical-align: bottom;
}
.video_author_avatar img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.video_author_name {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
}
.video_author_play_count,
.video_author_play_danmu {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  margin-top: 3px;
}
.video_author_play_count {
  margin-right: 20px;
}
.video_detail_share_container {
  padding: 0 16px 10px;
}
.video_detail_share_container span {
  font-size: 14px;
  margin: 0 20px 0 0;
  color: #888;
}

.video_detail_collect::before {
  content: "❤";
  margin-right: 2px;
}
.video_detail_share_playbill::before {
  content: "🖼";
  margin-right: 2px;
}
.video_detail_share_wechat::before {
  content: "💬";
  margin-right: 2px;
}
</style>
