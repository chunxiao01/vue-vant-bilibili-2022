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
          ref="unloginhistoryviewdetaillist"
          :unloginhistoryviewlist="unloginhistoryviewdata"
          :ifShowEditHistory="ifShowEditHistory"
        />
      </scroll>
      <back-top v-show="isShowbacktop" @click.native="clickBackTop" />
    </div>
    <div class="unlogin_historyview_bottomtab">
      <div class="unlogin_historyview_edit_tab">
        <span
          class="unlogin_historyview_bottomtab_text"
          @click="clickShowEditHistory"
          >编辑</span
        >
      </div>
      <div class="unlogin_historyview_edit_check_tab" v-if="ifShowEditHistory">
        <div class="unlogin_historyview_edit_checkall_tab">
          <span class="unlogin_historyview_edit_checkall_text"
            ><van-checkbox
              v-model="isCheckedAll"
              checked-color="#ff509b"
              @click="clickEditCheckAll"
              >全选</van-checkbox
            ></span
          >
        </div>
        <div class="unlogin_historyview_edit_select_tab">
          <span class="unlogin_historyview_edit_cancel" @click="clickEditCancel"
            >取消</span
          >
          <span
            class="unlogin_historyview_edit_delete"
            @click="clickEditDelete"
            disabled
            >删除</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/common/backtop/BackTop"
import UnloginHistoryViewDetailList from "components/content/videohistory/UnloginHistoryViewDetailList.vue"

import { mapGetters } from "vuex"

export default {
  data() {
    return {
      unloginhistoryviewdata: [],
      isShowbacktop: false, //推荐相关视频列表是否回到顶部
      ifShowEditHistory: false //是否显示历史记录编辑
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
      ...this.$store.state.historyViewList
    ].reverse()
  },
  computed: {
    ...mapGetters(["historyviewinfoArr"]),
    isCheckedAll: {
      get() {
        if (this.historyviewinfoArr.length === 0) {
          return false
        }
        //return !this.historyviewinfoArr.filter((item) => !item.checked).length
        return !this.historyviewinfoArr.find((item) => !item.checked)
      },
      set(res) {}
    }
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
    },
    //是否显示编辑历史记录
    clickShowEditHistory() {
      this.ifShowEditHistory = !this.ifShowEditHistory
    },
    //全选/全不选 编辑
    clickEditCheckAll() {
      if (this.isCheckedAll) {
        this.historyviewinfoArr.forEach((item) => (item.checked = false))
      } else {
        this.historyviewinfoArr.forEach((item) => (item.checked = true))
      }
    },
    //取消编辑
    clickEditCancel() {
      this.historyviewinfoArr.forEach((item) => (item.checked = false))
      this.ifShowEditHistory = !this.ifShowEditHistory
    },
    //删除历史记录
    clickEditDelete() {
      const payload = this.historyviewinfoArr.filter(
        (item) => (item.checked = true)
      )
      this.$store.dispatch("editHistoryViewLog", payload).then(() => {
        console.log("删除历史记录")
        this.ifShowEditHistory = !this.ifShowEditHistory

        this.unloginhistoryviewdata = [
          ...this.$store.state.historyViewList
        ].reverse()

        const dom_scrollwrapper =
          document.getElementsByClassName("__scroll__wrapper")
        if (dom_scrollwrapper && dom_scrollwrapper[0]) {
          dom_scrollwrapper[0].style.height =
            this.setscrollwrapperheight() + "px"
        }
        if (this.$refs.scrollcpn) {
          this.$refs.scrollcpn.scrollRefresh()
        }
      })
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
  padding: 15px 8px;
  background-color: #fff;
  border-top: 1px solid #aaa;
  text-align: center;
}
.unlogin_historyview_bottomtab_text,
.unlogin_historyview_edit_checkall_text,
.unlogin_historyview_edit_cancel,
.unlogin_historyview_edit_delete {
  font-size: 18px;
  color: #555;
}
.unlogin_historyview_edit_check_tab {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 8px;
  background-color: #fff;
  border-top: 1px solid #aaa;
  text-align: center;
}
.unlogin_historyview_edit_checkall_tab,
.unlogin_historyview_edit_select_tab {
  flex: 1;
}
.unlogin_historyview_edit_select_tab {
  display: flex;
}
.unlogin_historyview_edit_cancel,
.unlogin_historyview_edit_delete {
  flex: 1;
}
</style>
