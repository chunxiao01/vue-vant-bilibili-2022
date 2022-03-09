<template>
  <van-search disabled @click="onHomeSearchClick" />
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
