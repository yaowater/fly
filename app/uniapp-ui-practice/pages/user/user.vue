<template>
<view>
  <canvas class='canvas' canvas-id="firstCanvas"></canvas>
  <button @tap='drawMe'>给制我的头像</button>
</view>
</template>

<script>
export default {
  data: function() {
    return {
      ctx: null
    }
  },
  onReady() {
    // 创建canvas上下文
    this.ctx = uni.createCanvasContext('firstCanvas')

    this.ctx.setStrokeStyle("#00ff00")
    this.ctx.setLineWidth(5)
    this.ctx.rect(0, 0, 200, 200)

    this.ctx.stroke()
    this.ctx.setStrokeStyle("#ff0000")
    this.ctx.setLineWidth(2)
    this.ctx.moveTo(160, 100)
    this.ctx.arc(100, 100, 60, 0, 2 * Math.PI, true)
    this.ctx.moveTo(140, 100)
    this.ctx.arc(100, 100, 40, 0, Math.PI, false)
    this.ctx.moveTo(85, 80)
    this.ctx.arc(80, 80, 5, 0, 2 * Math.PI, true)
    this.ctx.moveTo(125, 80)
    this.ctx.arc(120, 80, 5, 0, 2 * Math.PI, true)
    this.ctx.stroke()

    this.ctx.draw()
  },
  methods: {
    // 把rpx单位，转化成px单位，给canvas使用
    rpx2px(arg) {
      let w = uni.getSystemInfoSync().windowWidth
      return w*arg / 750
    },
    drawMe() {
      // 有画布上下文
      var that = this
      // 打开手机相册、选一张图片
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function (res) {
          // 把图片绘制在画布上
          that.ctx.drawImage(res.tempFilePaths[0], that.rpx2px(225), that.rpx2px(275), that.rpx2px(300), that.rpx2px(200))
          that.ctx.draw()
        }
      })

    }
  }
}
</script>

<style lang="css" scoped>
.canvas {
  background-color: #ccc;
  width: 750rpx;
  height: 750rpx;
}
</style>
