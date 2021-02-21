<template>
<view class="map-page">
  <map
    class="map"
    :latitude="latitude"
    :longitude="longitude"
    :markers="covers">
    </map>
    <cover-view class="logo"></cover-view>
</view>
</template>

<script>
export default {
  data: function() {
    return {
      latitude: 39.909,
      longitude: 116.39742,
      covers: [{
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: '../../static/pos.png'
      }, {
          latitude: 39.90,
          longitude: 116.39,
          iconPath: '../../static/pos.png'
      }]
    }
  },
  // 路由传参，只能通过onLoad()来接收
  onLoad(query) {
    console.log('query', query)
  }
}
</script>

<style lang="css" scoped>
.map-page {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}
.map {
  width: 100%;
  height: 100%;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80rpx;
  background-color: red;
}
</style>
