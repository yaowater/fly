<template>
<view class="home">
  <!-- 轮播图 -->
  <swiper
    :indicator-dots="true"
    :autoplay="true"
    :interval="5000"
    :duration="500"
    class="home-swiper"
  >
    <block v-for="item in imgArr" :key="item.id">
      <swiper-item>
        <image class="hs-img" :src='item.src' />
      </swiper-item>
    </block>
  </swiper>

  <!-- 搜索框 -->
  <view class="home-search">
    <input class="hs-input" disabled placeholder="手镯"/>
    <image class="hs-icon" :src='img.searchIcon' />
  </view>

  <!-- 筛选组 -->
  <view class="home-filter">
    <picker
      @change="cateChange"
      :value="cateIndex"
      :range="cateArr"
      range-key='cate_zh'
      class="hf-picker"
    >
      <view class="hf-view">
        <text v-text='cateArr[cateIndex].cate_zh'></text>
        <image class="hf-icon" :src='img.filterIcon' />
      </view>
    </picker>
    <picker
      mode="region"
      @change="regionChange"
      :value="region"
      :custom-item="customItem"
      class="hf-picker"
      >
      <view class="picker">
        {{region[1]}}
        <image class="hf-icon" :src='img.filterIcon' />
      </view>
    </picker>
  </view>

  <!-- 商品列表 -->
  <view class="home-list">
    <good />
  </view>

</view>
</template>

<script>
import img from '@/utils/img'
import good from '@/components/good.vue'
// import { good } from '@/components/index.js'

export default {
  components: {
    good
  },
  data: function() {
    return {
      img,
      imgArr: [
        { id: 1, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/120852/20/10143/75777/5f3e7132Ef1cc95d4/ed0deadd9e9328dd.jpg!cr_1125x445_0_171!q70.jpg.dpg'},
        { id: 2, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/135939/37/8192/112345/5f45cd5aEdfd6f109/16224b949b6fa8ac.jpg!cr_1125x445_0_171!q70.jpg.dpg'},
        { id: 3, src: '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/149116/22/5856/138519/5f3de541E1ed03aba/29d7ba7810fa6023.jpg!cr_1125x445_0_171!q70.jpg.dpg'}
      ],
      cateArr: [
        {id: 0, cate: '', cate_zh: '全部品类' },
        {id: 1, cate: 'a', cate_zh: '家用电器' },
        {id: 2, cate: 'b', cate_zh: '办公用品' },
        {id: 3, cate: 'c', cate_zh: '男装女装' }
      ],
      cateIndex: 0,
      region: ['广东省', '深圳市', '宝安区'],
      customItem: '全部',
      goodArr: [
        {id: 1, name: '电脑', price: '56' },
        {id: 2, name: '电脑', price: '56' },
        {id: 3, name: '电脑', price: '56' },
        {id: 4, name: '电脑', price: '56' }
      ]
    }
  },
  methods: {
    // 品类
    cateChange(e) {
      console.log('品类筛选', e)
      this.cateIndex = e.target.value
    },
    // 地址
    regionChange(e) {
      console.log('地址筛选', e)
      this.region = e.target.value
    }
  },
  onShow() {
    console.log('on show')
  },
  onPullDownRefresh() {
    console.log('正在下拉刷新')
    console.log('mp', mpvue)
    setTimeout(()=>{
      mpvue.stopPullDownRefresh()
    }, 2000)
  }
}
</script>

<style>
.home-swiper {
  width: 100%;
  height: 528rpx;
}
.hs-img {
  display: block;
  width: 100%;
  height: 100%;
}

.home-search {
  box-sizing: border-box;
  width: 100%;
  padding: 14rpx 30rpx;
  background-color: white;
  position: relative;
}
.hs-input {
  width: 690rpx;
  height: 60rpx;
  margin: 0 auto;
  background:rgba(239,239,239,1);
  border-radius:30rpx;
  padding-left: 60rpx;
  box-sizing: border-box;
}
.hs-icon {
  position: absolute;
  left: 49rpx;
  top: 30rpx;
  width: 28rpx;
  height: 28rpx;
}

.home-filter {
  display: flex;
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
}
.hf-picker {
  flex: 1;
  text-align: center;
}
.hf-view {
  /* vertical-align: middle; */
}
.hf-icon {
  display: inline-block;
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
}

.home-list {
  padding-top: 20rpx;
  background:rgba(255,255,255,1);
}
</style>
