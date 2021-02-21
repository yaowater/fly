<template>
<view class="shop">
  <!-- 自定义的navbar -->
  <navbar />

  <!-- scroll-view -->
  <!-- 加这两个css属性，让scroll-view变成一行
  white-space: nowrap;
  overflow: hidden; -->
  <!-- scroll-with-animation开启滚动动画 -->
  <!-- scroll-view的子元素的id不能以数字以开头 -->
  <!-- toView 比 onView 小1 -->
  <!-- toView用于控制最左侧元素的显示位置 -->
  <!-- onView用于高亮样式 -->
  <view class="shop-filter">
    <scroll-view
    class="sf-scroll"
    :scroll-x="true"
    :scroll-into-view='toView'
    :scroll-with-animation='true'>
      <view
        v-for='item in cityArr'
        :id="'k'+item.id"
        class='sf-city'
        :key='item.id'
        v-text='item.name'
        :class="onView=='k'+item.id&&'on'"
        @tap="cityTap(item.id)"
        >
        </view>
    </scroll-view>
  </view>

  <!-- 店铺信息 -->
  <view class="shop-info">
    <view class="si-left">
      <view>9：00~22：00</view>
      <view @tap='go'>深圳市宝安区西部硅谷（去这里）</view>
    </view>
    <view class="si-right">
      <view class="sir-call" @tap='call'>
        <image :src='img.callIcon' />
        <text>咨询</text>
      </view>
    </view>
  </view>

  <!-- Tab组件 -->
  <view class="shop-tap">
    <view class="st-tab">
      <view :class='tab==0 && "on"' @tap='tabChange(0)'>活动</view>
      <view :class='tab==1 && "on"' @tap='tabChange(1)'>商品</view>
      <view :class='tab==2 && "on"' @tap='tabChange(2)'>更多信息</view>
    </view>
    <swiper
      class="st-swiper"
      :current='tab'
      @change='swiperChange'
      :style='{"height": height+"rpx"}'>
      <swiper-item>
        <view>活动列表（循环）</view>
      </swiper-item>
      <swiper-item>
        <view>商品列表（循环）</view>
      </swiper-item>
      <swiper-item>
        <view>店铺品牌信息</view>
      </swiper-item>
    </swiper>
  </view>
</view>
</template>

<script>
import img from '@/utils/img'
import navbar from '@/components/navbar'
export default {
  components: {
    navbar
  },
  data: function() {
    return {
      img,
      flag: false,  // 确定用户是否授权过定位
      tab: 0,
      height: 0,
      cityArr: [
        {id: 1, name:'深圳1'},
        {id: 2, name:'深圳2'},
        {id: 3, name:'深圳3'},
        {id: 4, name:'深圳4'},
        {id: 5, name:'深圳5'},
        {id: 6, name:'深圳6'},
        {id: 7, name:'深圳7'},
        {id: 8, name:'深圳8'},
        {id: 9, name:'深圳9'},
        {id: 10, name:'深圳10'},
        {id: 11, name:'深圳11'}
      ],
      toView: 'k1',   // 用于控制最左边显示的那个tab
      onView: 'k2'    // 用于控制高亮样式
    }
  },
  // 当页面滚动时，触发
  onPageScroll(e) {
    console.log(e.scrollTop)
    if(e.scrollTop==50) {
      // 让页面向上滚动到哪个位置
      mpvue.pageScrollTo({
        scrollTop: 200,
        duration: 300
      })
    }
  },
  // 当页面进入前台时触发
  onShow() {
    // 初始化
    const that = this
    mpvue.getSetting({
      success(res) {
        console.log('授权列表', res.authSetting)
        if(res.authSetting['scope.userLocation']) {
          that.flag = true
        } else {
          console.log('----------')
          mpvue.authorize({
            scope: 'scope.userLocation',
            success () {
              that.flag = true
            },
            fail() {
              that.flag = false
            }
          })
        }
      }
    })
    // 调接口成功时
    this.calcHeight(0)
  },
  methods: {
    call() {
      mpvue.makePhoneCall({
        phoneNumber: '13202264877'
      })
    },
    openMap() {
      // 判断当前用户授权过地理定位
      // 获取用户的经纬度
      // 打开第三地图应用、实现导航功能（无须自己写一个新页面来导航）
      mpvue.getLocation({
        type: 'wgs84',
         success (res) {
           // 这是我的经纬度
           const lat = res.latitude
           const long = res.longitude
           console.log('经纬度', lat, long)
           wx.openLocation({
             name: '千锋教育',
             address: '深圳市宝安区西部硅谷',
             latitude: lat,  // 店铺的经纬度
             longitude: long,
             scale: 18
           })
         }
      })
    },
    go() {
      const that = this
      if(that.flag) {
        that.openMap()
      } else {
        // 这个方法，只能通过 tap 事件触发
        mpvue.openSetting({
          success (res) {
            that.openMap()
          }
        })
      }
    },
    tabChange(idx) {
      this.tab = idx
      this.calcHeight(idx)
    },
    swiperChange(e) {
      console.log(e.target.current)
      this.tab = e.target.current
      this.calcHeight(e.target.current)
    },
    calcHeight(idx) {
      let h = 0
      switch (idx) {
        case 0:
          h = 200*2+50
          break;
        case 1:
          h = 100*5+80
          break;
        case 2:
          h = 1000
          break;
        default:
      }
      this.height = h
    },
    // scroll-view
    cityTap(id) {
      this.onView = 'k'+(id)
      this.toView = 'k'+(id-1)
    }
  }
}
</script>

<style lang="css" scoped>
.shop {
  padding-bottom: 2000rpx;
}
.shop-info {
  width: 690rpx;
  box-sizing: border-box;
  height: 128rpx;
  margin: 0 auto;
  border-top:1rpx solid rgba(221,221,221,1);
  border-bottom:1rpx solid rgba(221,221,221,1);
  display: flex;
}
.si-left {
  flex: 462;
}
.si-right {
  flex: 230;
}
.sir-call {
  width: 124rpx;
  height: 50rpx;
  border-radius: 25rpx;
  background-color: #E33C49;
  color: #ffffff;
  font-size: 24rpx;
  line-height: 50rpx;
  text-align: center;
}
.sir-call image {
  display: inline-block;
  width: 26rpx;
  height: 26rpx;
  vertical-align: middle;
}

.shop-tap {
  box-sizing: border-box;
  padding: 30rpx;
  width: 100%;
}
.st-tab {
  display: flex;
  border-bottom:1px solid rgba(221,221,221,1);
}
.st-tab view {
  flex: 1;
  text-align: center;
  font-size: 30rpx;
  color: #A8A8A8;
  line-height: 42rpx;
}
.st-tab view.on {
  color: red;
}

.st-swiper {
  background-color: red;
}
.st-swiper view {
  line-height: 200rpx;
  font-size: 40rpx;
  text-align: center;
}

.sf-scroll {
  white-space: nowrap;
  overflow: hidden;
}
.sf-city {
  height: 80rpx;
  line-height: 80rpx;
  display: inline-block;
  padding: 0 30rpx;
  border: 1rpx solid #ccc;
  margin-right: 20rpx;
}
.sf-city.on {
  color: red;
}
</style>
