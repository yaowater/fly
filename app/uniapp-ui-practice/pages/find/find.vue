<template>
	<view>
		<view class="count" v-text='count'></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        count: 0
			}
		},
		onLoad() {
			console.log('load')
		},
    // 每次当页面出现在前台时，触发
    onShow() {
      this.count = getApp().globalData.count
			console.log('show')
    },
		onReady() {
			console.log('ready')
		},
		onHide() {
			console.log('hide')
		}
	}
</script>

<style>
.count {
  font-size: 100rpx;
  text-align: center;
}
</style>
