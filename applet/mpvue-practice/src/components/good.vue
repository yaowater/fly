<template>
<view class="qf-good">
  <view class="qfg-left">
    <view class="qfgl-top">
      <text>新品</text>
      <text>促销活动满500减50名额有限先到先得！</text>
    </view>
    <view class="qfgl-middle">
      <image class="qfg-icon" :src='img.posIcon' />
      <text>B层204号店铺</text>
    </view>
    <view class="qfgl-bottom">
      <view class="qfglb-1">
        <image class="qfg-icon" :src='img.posIcon' />
        <text>店铺名</text>
      </view>
      <view class="qfglb-2">
        <image class="qfg-icon" :src='img.posIcon' />
        <text>9999</text>
      </view>
      <view class="qfglb-3">9月1日09:34</view>
    </view>
  </view>
  <view class="qfg-right">
    <image class="qfgr-img" src='//m.360buyimg.com/babel/s333x333_jfs/t23602/220/811778657/329340/5fac2e4c/5b43905aNb28d406e.png' />
  </view>
</view>
</template>

<script>
import img from '@/utils/img'
export default {
  props: {
    // good: {
    //   type: Object,
    //   required: true
    // }
  },
  data: function() {
    return {
      img
    }
  }
}
</script>

<style>
.qf-good {
  width: 100%;
  height: 250rpx;
  display: flex;
  box-sizing: border-box;
  padding-top: 30rpx;
  background-color: white;
}
.qfg-left {
  flex: 470;
  padding-left: 30rpx;
  border-bottom: 1px solid rgba(221,221,221,1);
}
.qfgl-top {
  height: 98rpx;
  width: 100%;
  line-height: 49rpx;
  font-weight:400;
  color:rgba(53,53,53,1);
  font-size: 34rpx;
}
.qfg-icon {
  display: inline-block;
  width: 30rpx;
  height: 30rpx;
  vertical-align: middle;
}
.qfgl-middle {
  height: 42rpx;
  line-height: 42rpx;
  font-size: 24rpx;
  font-weight:400;
  color:rgba(168,168,168,1);
}
.qfgl-bottom {
  display: flex;
  height: 62rpx;
  line-height: 62rpx;
  font-size: 24rpx;
  color:rgba(168,168,168,1);
}
.qfglb-1 {
  flex: 170;
}
.qfglb-2 {
  flex: 110;
}
.qfglb-3 {
  flex: 142;
}



.qfg-right {
  flex: 280;
  padding-left: 20rpx;
  padding-right: 30rpx;
}
.qfgr-img {
  display: block;
  width: 230rpx;
  height: 190rpx;
}
</style>
