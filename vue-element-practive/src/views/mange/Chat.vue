<template>
<div class="chat">

  <div class="container">

    <div ref='chat' class="top">
      <div class="row" v-for='item in charArr' :key='item.id'>
        <!-- <span v-text='item.user'></span> -->
        <div v-html="item.msg"></div>
      </div>
    </div>

    <div class="bottom">
      <input class="msg" v-model.trim="msg" type="text" @keyup.enter='send'>
      <button class="btn" @click="send">发送</button>
    </div>
  </div>

</div>
</template>
<script>
import io from 'socket.io-client'

export default {
    data: function() {
        return {
            msg: '',
            socket: null,
            charArr: []
        }
    },
    mounted() {
        // this.socket = io('http://10.36.135.68:9999')
          this.socket=io('http://localhost:9999')
        this.socket.on('connect', function() {
            console.log('socket连接成功')
        })
        // 接受服务器发来的聊天消息
        this.socket.on('client', msg=> {
            console.log('msg', msg)
            this.charArr.push({
                id: Date.now(),
                msg
            })
        })
    },
    updated() {
        // 让滚动条每次都滚动到底部
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
    },
    methods: {
        send() {
            // 客户向服务器发消息
            this.socket.emit('server', this.msg)
            this.msg = ''
        }
    },
    beforeDestroy() {
        // 关闭socket
        this.socket = null
    }    
}
</script>
<style scoped>
.chat {
  background: white;
  padding: 20px;
}
.container {
  width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  height: 400px;
  position: relative;
  overflow: auto;
}
/* 底部按钮 */
.bottom {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  overflow: hidden;
}
.bottom .msg {
  float: left;
  width: 420px;
  height: 30px;
  box-sizing: border-box;
}
.bottom .btn {
  float: right;
  width: 70px;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
/* 消息面板 */
.top {
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 80px;
  right: 20px;
  overflow: auto;
  padding-bottom: 30px;
}
.row {
  line-height: 35px;
  width: 300px;
}
</style>