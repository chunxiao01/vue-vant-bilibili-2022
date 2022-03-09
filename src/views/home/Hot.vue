<template>
  <div class="videolist_container">
    <scroll
      class="__scroll__wrapper"
      ref="scrollcpn"
      :probeType="3"
      :click="true"
      :pullUpLoad="true"
      :observeDOM="true"
      @scrollposition="scrollPosition"
      @scrollpullup="scrollPullUpDoMore"
    >
      <video-list class="videolist_content" :videolist="allvideolist" />
    </scroll>
    <back-top v-show="isShowbacktop" @click.native="clickBackTop" />
  </div>
  <!-- <div>
    <van-empty
      class="custom-image"
      :image="emptyvideoimgsrc"
      description="网络请求失败，请稍后再试"
    />
  </div> -->
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/common/backtop/BackTop"
import VideoList from "components/content/videolist/VideoList"

import { getHomeHotMultidata } from "network/home/hot_request"

export default {
  data() {
    return {
      videolistdata: {
        ps: 30,
        pn: 0,
        videolist: []
      },
      isShowbacktop: false,
      emptyvideoimgsrc: require("@/assets/img/common/network_error.svg")
    }
  },
  computed: {
    allvideolist() {
      return this.videolistdata.videolist
    },
    isShowVideolist() {
      return
    }
  },
  components: { Scroll, BackTop, VideoList },
  created() {
    this.getHomeHotVideoListData(
      this.videolistdata.ps,
      this.videolistdata.pn + 1
    )
    console.log(this.videolistdata)
  },
  mounted() {
    const dom_scrollwrapper =
      document.getElementsByClassName("__scroll__wrapper")
    if (dom_scrollwrapper && dom_scrollwrapper[0]) {
      dom_scrollwrapper[0].style.height = this.setscrollwrapperheight() + "px"
    }
  },
  // updated() {
  //   const dom_scrollwrapper =
  //     document.getElementsByClassName("__scroll__wrapper")
  //   if (dom_scrollwrapper && dom_scrollwrapper[0]) {
  //     dom_scrollwrapper[0].style.height = this.setscrollwrapperheight() + "px"
  //   }
  //   console.log(dom_scrollwrapper[0])
  // },
  methods: {
    //动态设置滚动条wrapper高度 body:100vh 减去顶部和底部高度
    setscrollwrapperheight() {
      let _height = document.body.clientHeight
      let _scrollwrapper_height = _height - 210
      return _scrollwrapper_height
    },

    //动态请求数据
    getHomeHotVideoListData(ps, pn) {
      getHomeHotMultidata(ps, pn).then((res) => {
        if (res && res.data.data.list) {
          this.videolistdata.videolist.push(...res.data.data.list)
          this.videolistdata.pn += 1
        } else {
          console.log("数据请求失败!")
        }
        if (this.$refs.scrollcpn) {
          this.$refs.scrollcpn.scrollFinishPullUp()
        }
      })
    },

    //滚动内容实时监听位置
    scrollPosition(position) {
      const position_y = Math.abs(position.y)
      this.isShowbacktop = position_y > 1000
    },

    //上拉加载更多
    scrollPullUpDoMore() {
      this.getHomeHotVideoListData(
        this.videolistdata.ps,
        this.videolistdata.pn + 1
      )
      console.log(this.videolistdata)
    },

    //返回顶部
    clickBackTop() {
      this.$refs.scrollcpn.scrollBackTop(0, 0, 800)
    }

    //网络请求失败
    // NetworkErr() {
    //   return this.videolistdata.videolist.length === 0
    // }
  }
}
</script>

<style>
.__scroll__wrapper {
  overflow: hidden;
}
.custom-image .van-empty__image {
  width: 100px;
  height: 100px;
}
</style>
