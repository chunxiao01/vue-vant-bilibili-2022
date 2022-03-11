<template>
  <div class="__scroll__wrapper" ref="wrapper">
    <div class="__scroll__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
import ObserveDOM from "@better-scroll/observe-dom"
import Pullup from "@better-scroll/pull-up"

BScroll.use(ObserveDOM)
BScroll.use(Pullup)

export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    observeDOM: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, // 0,1,2:手指滚动就滚动,3:手指滚动和手指离开惯性滚动
      click: this.click, // 容器内元素是否可以点击
      observeDOM: this.observeDOM, //开启 observe-dom 插件，监听容器高度变化
      pullUpLoad: this.pullUpLoad //开启 pull-up插件，上拉加载更多
    })

    //滚动事件
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scrollposition", position)
      })
    }

    //上拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("scrollpullup")
      })
    }
  },
  methods: {
    scrollBackTop(x, y, t = 300) {
      this.scroll.scrollTo(x, y, t)
    },
    scrollFinishPullUp() {
      this.scroll.finishPullUp()
    },
    scrollRefresh() {
      this.scroll.refresh()
    }
  }
}
</script>

<style></style>
