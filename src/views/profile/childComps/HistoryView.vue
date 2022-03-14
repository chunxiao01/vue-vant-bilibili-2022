<template>
  <div class="unlogin_historyview_container">
    <div class="unlogin_historyview_content"></div>
    <div class="unlogin_historyview_bottomtab">
      <span class="unlogin_historyview_bottomtab_text">编辑</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.unlogin_historyview_bottomtab {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0;
  border-top: 1px solid #aaa;
  text-align: center;
}
.unlogin_historyview_bottomtab_text {
  font-size: 18px;
  color: #888;
}
</style>
