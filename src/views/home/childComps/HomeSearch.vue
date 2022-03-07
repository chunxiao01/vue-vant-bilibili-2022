<template>
  <div>
    <van-search disabled @click="onHomeSearchClick" />
  </div>
</template>

<script>
export default {
  methods: {
    onHomeSearchClick() {
      this.$router.replace("/search")
    }
  }
}
</script>

<style></style>
