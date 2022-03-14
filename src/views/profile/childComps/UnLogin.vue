<template>
  <div class="unlogin_container">
    <div class="unlogin_img">
      <img src="~/assets/img/common/unlogin.svg" alt="" />
    </div>
    <div class="unlogin_text">
      <span>B站登录</span>
    </div>
    <div class="unlogin_history">
      <div class="unlogin_history_top">
        <span class="unlogin_history_text">历史记录</span>
        <span class="unlogin_history_view_text" @click="clickHistoryView"
          >查看更多</span
        >
      </div>
      <div class="unlogin_history_content">
        <unlogin-history-view
          class="unlogin_history_item"
          v-for="(item, index) in unloginhistoryviewdata"
          :unloginhistoryviewinfo="item"
          :key="index"
        />
      </div>
    </div>
    <div class="unlogin_feedback">
      <span class="unlogin_feedback_text">意见反馈</span>
    </div>
  </div>
</template>

<script>
import UnloginHistoryView from "components/content/videohistory/UnloginHistoryView.vue"
export default {
  data() {
    return {
      unloginhistoryviewdata: []
    }
  },
  mounted() {
    this.unloginhistoryviewdata = [
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”"
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”"
      },
      {
        aid: 339625620,
        bvid: "BV1QR4y1G7vA",
        cid: 548527437,
        short_link: "https://b23.tv/BV1QR4y1G7vA",
        pic: "http://i1.hdslb.com/bfs/archive/e6b77c462a3d53e7bbbeca8355c8873f550133f9.jpg",
        title: "“七年了，他还是走不出来”"
      }
    ]
  },
  components: { UnloginHistoryView },
  methods: {
    clickHistoryView() {
      this.$router.push("/historyview")
    }
  }
}
</script>

<style scoped>
.unlogin_container {
  text-align: center;
}
.unlogin_img {
  padding: 0 5px;
  text-align: center;
}
.unlogin_img img {
  width: 50px;
  height: 50px;
}

.unlogin_text {
  text-align: center;
  padding: 10px 5px 20px;
  border-bottom: 1px solid #aaa;
}
.unlogin_text span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  background-color: #ff509b;
  color: #fff;
  padding: 5px;
}

.unlogin_history {
  padding: 20px 5px;
  border-bottom: 1px solid #aaa;
}

.unlogin_history_top {
  display: flex;
}
.unlogin_history_top span {
  font-size: 14px;
  color: #888;
}
.unlogin_history_text {
  text-align: left;
}
.unlogin_history_view_text {
  text-align: right;
}
.unlogin_history_view_text::after {
  content: "＞";
  margin-left: 2px;
}

.unlogin_history_content {
  display: flex;
}
.unlogin_history_item {
  flex: 1 1 33.33%;
}
.unlogin_feedback {
  padding: 20px 5px;
  border-bottom: 1px solid #aaa;
  text-align: left;
}
.unlogin_feedback_text {
  font-size: 14px;
  color: #888;
}
</style>
