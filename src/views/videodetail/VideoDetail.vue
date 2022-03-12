<template>
  <div class="videodetail_container">
    <div class="video_container">
      <iframe
        :src="getvideosrc"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
    </div>
    <van-tabs
      v-model="tagActive"
      class="videodetail_tabs"
      color="#ff509b"
      title-active-color="#ff509b"
    >
      <van-divider :style="{ borderColor: '#999' }" />
      <van-tab title="简介">
        <video-related
          :videodetailauthor="videodetailauthordata"
          :videodetailplayinfo="videodetailplayinfodata"
          :videodetaillistdata="videorecommendlistdata.videorecommendlist"
        />
      </van-tab>
      <van-tab :title="tab_reply_title">
        <video-reply />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//视频详情 相关组件
import VideoRelated from "views/videodetail/VideoRelated"
import VideoReply from "views/videodetail/VideoReply"
import { numbersFormat, dateFormat } from "common/utils"
//请求视频推荐数据
import {
  getVideoDetailRelateddata,
  getVideoReplydata
} from "network/video/video_request"

export default {
  data() {
    return {
      aid: null,
      bvid: null,
      cid: null,
      bvurl: null,
      videodetailauthordata: {
        authorname: "bilibili",
        authorfans: 0,
        authoravatar: require("@/assets/img/common/0.svg"),
        officialverify: {
          isShowVerify: true,
          verifytype: 0,
          verifyiconurl: require("@/assets/img/verify/v_0.svg")
        }
      },
      videodetailplayinfodata: {
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
      },
      videorecommendlistdata: {
        videorecommendlist: []
      },
      videoreplylistdata: {
        ps: 30,
        pn: 0,
        videoreplylist: []
      },
      tagActive: 0,
      tab_reply_title: "评论"
    }
  },
  created() {
    this.aid = this.$route.query.aid
    this.bvid = this.$route.query.bvid
    this.cid = this.$route.query.cid
    this.bvurl = "https://b23.tv/" + this.bvid

    this.getVideoDetailRelatedListData(this.aid, this.bvid, null, 1)

    // this.getVideoReplyListData(
    //   1,
    //   this.aid,
    //   0,
    //   this.videoreplylistdata.ps,
    //   this.videoreplylistdata.pn + 1
    // )
  },
  computed: {
    getvideosrc() {
      const videosrc = `//player.bilibili.com/player.html?aid=${this.aid}&bvid=${this.bvid}&cid=${this.cid}&page=1`
      console.log(videosrc)
      return videosrc
    }
  },
  methods: {
    //动态请求视频详情和视频相关推荐数据
    getVideoDetailRelatedListData(aid, bvid, recommend_type, need_rcmd_reason) {
      getVideoDetailRelateddata(
        aid,
        bvid,
        recommend_type,
        need_rcmd_reason
      ).then((res) => {
        if (res && res.data && res.data.data) {
          console.log(res.data.data)
          if (res.data.data.Card) {
            const { name, fans, face, Official } = res.data.data.Card.card
            this.videodetailauthordata.authorname = name
            this.videodetailauthordata.authorfans = numbersFormat(fans)
            this.videodetailauthordata.authoravatar = face
            if (Official.type < 0) {
              this.videodetailauthordata.officialverify.isShowVerify = false
            } else {
              this.videodetailauthordata.officialverify.isShowVerify = true
              this.videodetailauthordata.officialverify.verifytype =
                Official.type
              this.videodetailauthordata.officialverify.verifyiconurl = require("@/assets/img/verify/v_" +
                Official.type +
                ".svg")
            }
          }
          if (res.data.data.View) {
            const title = res.data.data.View.title
            const desc = res.data.data.View.desc
            const { view, danmaku, favorite } = res.data.data.View.stat
            const pubdate = res.data.data.View.pubdate
            const bvid = res.data.data.View.bvid
            const isshowcoperight = res.data.data.View.rights.no_reprint === 1
            const honor = res.data.data.View.honor_reply.honor
            let tag = ""
            let ishowtag = false
            if (honor && honor.length > 0) {
              tag = honor[honor.length - 1].desc
              ishowtag = true
            }

            this.videodetailplayinfodata.videodetailplaytitle = title
            this.videodetailplayinfodata.videodetailplaydesc = desc
            this.videodetailplayinfodata.videodetailplaycount =
              numbersFormat(view)
            this.videodetailplayinfodata.videodetailplaydanmu =
              numbersFormat(danmaku)
            this.videodetailplayinfodata.videodetailplaydate =
              dateFormat(pubdate)
            this.videodetailplayinfodata.videodetailplaybvid = bvid
            this.videodetailplayinfodata.isShowCopyRight = isshowcoperight
            this.videodetailplayinfodata.videodetailplaycopyright =
              "未经作者授权禁止转载"
            this.videodetailplayinfodata.videodetailplayshare =
              numbersFormat(favorite)
            this.videodetailplayinfodata.isShowVideoDetailTag = ishowtag
            this.videodetailplayinfodata.videodetailplaytag = tag
          }
          if (res.data.data.Related) {
            this.videorecommendlistdata.videorecommendlist =
              res.data.data.Related
          }
          if (res.data.data.Reply) {
            this.tab_reply_title =
              "评论 " + numbersFormat(res.data.data.Reply.page.acount)
          }
        }
      })
    },

    //动态请求视频评论数据
    getVideoReplyListData(type, oid, sort, ps, pn) {
      getVideoReplydata(type, oid, sort, ps, pn).then((res) => {
        if (res && res.data && res.data.data) {
          console.log(res.data.data)
          // this.videoreplylistdata.pn += 1
        }
      })
    }
  },
  components: {
    VideoRelated,
    VideoReply
  }
}
</script>

<style scoped>
.video_container {
  width: 100vw;
  height: 56.25vw;
}
.video_container iframe {
  width: 100%;
  height: 100%;
}
.videodetail_tabs {
  width: 100%;
}
.videodetail_tabs >>> .van-tabs__wrap {
  width: 50%;
}

.videodetail_tabs >>> .van-tabs__nav--line {
  padding-bottom: 5px;
}

.videodetail_tabs >>> .van-tabs__line {
  bottom: 10px;
  width: 20px;
  height: 2px;
}
.videodetail_tabs >>> .van-divider {
  margin: 2px 0 5px;
}
</style>
