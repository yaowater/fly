<template>
<view class="qf-good" @tap='skipToDetail'>
  <image class="qf-good-img" :src='good.img' />
</view>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
      required: true
    }
  },
  methods: {
    skipToDetail() {
      console.log('skip')
      let id = this.good._id
      uni.navigateTo({
        url: '/pages/detail/detail?id='+id
      })
    }
  }
}
</script>

<style lang="css" scoped>
.qf-good {
  width: 50%;
  float: left;
  height: 375rpx;
  box-sizing: border-box;
  border: 1rpx solid orange;
}
.qf-good-img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
