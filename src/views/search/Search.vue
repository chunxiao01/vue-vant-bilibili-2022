<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        ref="search"
      />
    </form>
  </div>
</template>

<script>
import { Search } from "vant"

export default {
  data() {
    return {
      value: ""
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$refs.search
      let _el = el.getElementsByTagName("input")
      if (el && _el && _el[0]) {
        _el[0].focus()
      }
    })
  },
  methods: {
    onSearch(val) {
      console.log(val)
    },
    onCancel() {
      this.$router.replace("/home")
    }
  },
  components: {
    Search
  }
}
</script>

<style>
.van-nav-bar__left .van-icon-arrow-left {
  color: #000;
  font-weight: 600;
  font-size: 20px;
  margin-right: 15px;
}
.van-search__action {
  font-weight: normal;
  font-size: 17px;
}
</style>
