<template>
  <div class="unlogin_historyview_container">
    <div class="unlogin_historyview_content">
      <scroll
        class="__scroll__wrapper"
        ref="scrollcpn"
        :probeType="3"
        :click="true"
        :pullUpLoad="false"
        :observeDOM="true"
        @scrollposition="scrollPosition"
      >
        <unlogin-history-view-detail-list
          :unloginhistoryviewlist="unloginhistoryviewdata"
        />
      </scroll>
      <back-top v-show="isShowbacktop" @click.native="clickBackTop" />
    </div>
    <div class="unlogin_historyview_bottomtab">
      <span class="unlogin_historyview_bottomtab_text">编辑</span>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/common/backtop/BackTop"
import UnloginHistoryViewDetailList from "components/content/videohistory/UnloginHistoryViewDetailList.vue"

export default {
  data() {
    return {
      unloginhistoryviewdata: [],
      isShowbacktop: false //推荐相关视频列表是否回到顶部
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

    this.unloginhistoryviewdata = [
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”",
        name: "",
        ctime: 0
      }
    ]
  },
  methods: {
    //动态设置滚动条wrapper高度 body:100vh 减去顶部和底部高度
    setscrollwrapperheight() {
      let _height = document.body.clientHeight
      let _width = document.body.clientWidth
      let top_menu = 46
      let bottom_nav = 52
      let _scrollwrapper_height = _height - top_menu - bottom_nav
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
  },
  components: {
    UnloginHistoryViewDetailList,
    Scroll,
    BackTop
  }
}
</script>

<style scoped>
.unlogin_historyview_content {
  overflow: hidden;
}
.unlogin_historyview_bottomtab {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  background-color: #fff;
  border-top: 1px solid #aaa;
  text-align: center;
}
.unlogin_historyview_bottomtab_text {
  font-size: 18px;
  color: #888;
}
</style>
