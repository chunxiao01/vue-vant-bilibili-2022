<template>
  <div class="videodetail_list">
    <unlogin-history-view-detail
      class="videodetail_list_item"
      v-for="(unloginhistoryviewinfo, index) in unloginhistoryviewlist"
      :key="index"
      :unloginhistoryviewinfo="unloginhistoryviewinfo"
    />
  </div>
</template>

<script>
import UnloginHistoryViewDetail from "./UnloginHistoryViewDetail.vue"

export default {
  props: {
    unloginhistoryviewlist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { UnloginHistoryViewDetail }
}
</script>

<style scoped></style>
