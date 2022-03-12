<template>
  <div class="video_related_container">
    <div class="video_detail_container">
      <div class="video_detail_info">
        <van-collapse v-model="activeNames" @change="clickToggle">
          <van-collapse-item name="1">
            <template #title>
              <div class="video_detail_title_info">
                <span
                  class="video_detail_tag"
                  v-if="videodetailplayinfo.isShowVideoDetailTag"
                  >{{ videodetailplayinfo.videodetailplaytag }}</span
                >
                <span
                  class="video_detail_title"
                  :class="{ video_detail_title_toggle_up: isToggleup }"
                  >{{ videodetailplayinfo.videodetailplaytitle }}</span
                >
              </div>
            </template>
            <div class="video_detail_introduce">
              <div class="video_detail_author">
                <div class="video_detail_author_avatar">
                  <img :src="videodetailauthor.authoravatar" alt="" />
                  <span
                    class="video_detail_author_icon"
                    v-if="videodetailauthor.officialverify.isShowVerify"
                  >
                    <img
                      :src="videodetailauthor.officialverify.verifyiconurl"
                      alt=""
                    />
                  </span>
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
              <div
                class="video_detail_copyright"
                v-if="videodetailplayinfo.isShowCopyRight"
              >
                <span class="video_detail_copyright_text">
                  {{ videodetailplayinfo.videodetailplaycopyright }}
                </span>
              </div>
              <div class="video_detail_introduce">
                <span class="video_detail_introduce_text">
                  {{ videodetailplayinfo.videodetailplaydesc }}
                </span>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
        <div class="video_author_info_container" v-if="isToggleup">
          <div class="video_author_info">
            <span class="video_author_avatar">
              <img :src="videodetailauthor.authoravatar" alt="" />
              <span
                class="video_detail_author_icon"
                v-if="videodetailauthor.officialverify.isShowVerify"
              >
                <img
                  :src="videodetailauthor.officialverify.verifyiconurl"
                  alt=""
                />
              </span>
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
          <span class="video_detail_collect">{{
            videodetailplayinfo.videodetailplayshare
          }}</span>
          <span class="video_detail_share_playbill">分享海报</span>
          <span class="video_detail_share_wechat">分享好友</span>
        </div>
      </div>
    </div>
    <van-divider :style="{ borderColor: '#999' }" />
    <scroll
      class="__scroll__wrapper"
      ref="scrollcpn"
      :probeType="3"
      :click="true"
      :pullUpLoad="false"
      :observeDOM="true"
      @scrollposition="scrollPosition"
    >
      <video-detail-card-list :videodetaillist="videodetaillistdata" />
    </scroll>
    <back-top v-show="isShowbacktop" @click.native="clickBackTop" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/common/backtop/BackTop"
import VideoDetailCardList from "components/content/videodetaicardlist/VideoDetailCardList.vue"

export default {
  components: { VideoDetailCardList, Scroll, BackTop },
  data() {
    return {
      activeNames: ["0"],
      isToggleup: true,
      isShowbacktop: false //推荐相关视频列表是否回到顶部
    }
  },
  props: {
    videodetailauthor: {
      type: Object,
      default() {
        return {
          authorname: "bilibili",
          authorfans: 0,
          authoravatar: require("@/assets/img/common/0.svg"),
          officialverify: {
            isShowVerify: false,
            verifytype: 0,
            verifyiconurl: require("@/assets/img/verify/v_0.svg")
          }
        }
      }
    },
    videodetailplayinfo: {
      type: Object,
      default() {
        return {
          videodetailplaytitle: "",
          videodetailplaydesc: "",
          videodetailplaycount: 0,
          videodetailplaydanmu: 0,
          videodetailplaydate: "",
          videodetailplaybvid: "",
          isShowCopyRight: false,
          videodetailplaycopyright: "未经作者授权禁止转载",
          videodetailplayshare: 0,
          isShowVideoDetailTag: false,
          videodetailplaytag: "热门"
        }
      }
    },
    videodetaillistdata: {
      //相关视频推荐列表
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    aauthoriconurl() {
      return "url(" + this.authoriconurl + ")"
    }
  },
  mounted() {
    const dom_scrollwrapper =
      document.getElementsByClassName("__scroll__wrapper")
    if (dom_scrollwrapper && dom_scrollwrapper[0]) {
      dom_scrollwrapper[0].style.height = this.setscrollwrapperheight() + "px"
    }
    if (this.$refs.scrollcpn) {
      this.$refs.scrollcpn.scrollRefresh()
    }
  },
  methods: {
    //判断折叠面板折叠
    clickToggle() {
      this.isToggleup = !this.isToggleup
    },
    //动态设置滚动条wrapper高度 body:100vh 减去顶部和底部高度
    setscrollwrapperheight() {
      let _height = document.body.clientHeight
      let _width = document.body.clientWidth
      let _video_info_height = 215
      let _scrollwrapper_height =
        _height - (_width * 9) / 16 - _video_info_height
      return _scrollwrapper_height
    },
    //滚动内容实时监听位置
    scrollPosition(position) {
      const position_y = Math.abs(position.y)
      this.isShowbacktop = position_y > 1000
    },
    //返回顶部
    clickBackTop() {
      if (this.$refs.scrollcpn) {
        this.$refs.scrollcpn.scrollBackTop(0, 0, 800)
      }
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
.video_detail_play_date {
  width: 40px;
  font-size: 14px;
}
.video_detail_play_bvid {
  width: 110px;
  font-size: 14px;
  text-align: right;
}
.video_detail_play_count,
.video_detail_play_danmu {
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
.video_detail_introduce_text {
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
  width: 160px;
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
.video_author_avatar {
  position: relative;
}
.video_author_avatar > .video_detail_author_icon {
  position: absolute;
  bottom: -5px;
  right: 0px;
}
.video_author_avatar > .video_detail_author_icon img {
  width: 12px;
  height: 12px;
}
.video_detail_author_avatar {
  position: relative;
}
.video_detail_author_avatar > .video_detail_author_icon {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.video_detail_author_avatar > .video_detail_author_icon img {
  width: 18px;
  height: 18px;
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
  margin-right: 10px;
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

.__scroll__wrapper {
  overflow: hidden;
}
</style>
