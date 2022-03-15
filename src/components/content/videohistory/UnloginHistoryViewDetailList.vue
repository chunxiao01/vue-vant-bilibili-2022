<template>
  <div class="unloginhistoryview_list">
    <unlogin-history-view-detail
      class="unloginhistoryview_list_item"
      v-for="(unloginhistoryviewinfo, index) in unloginhistoryviewlist"
      :key="index"
      :unloginhistoryviewinfo="unloginhistoryviewinfo"
      :ifShowEditHistory="ifShowEditHistory"
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
    },
    ifShowEditHistory: {
      type: Boolean,
      default: false
    }
  },
  components: { UnloginHistoryViewDetail }
}
</script>

<style scoped></style>
