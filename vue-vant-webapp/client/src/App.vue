<template>
  <div class="app">
    <router-view></router-view>

  </div>
</template>

<script>
// 外部引入的组件，不能直接使用，必须先转化成局部组件
// import TodoList from './views/TodoList.vue'
// const TodoList = ()=>import('./views/TodoList.vue')

export default {
  // 把外部引入的组件，变成局部组件
  components: {
    // TodoList: ()=>import('./views/TodoList.vue')
  },
  data: function() {
    return {
      msg: 'hello app',
      count: 0
    }
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    clickHandle() {
      this.count++
    }
  }
}
</script>

<style lang='scss'>
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.app {
  width: 100%;
  height: 100%;
}
.navs {
  padding: 10px;
  background: white;
  border-bottom: 1px solid #ccc;
}
.navs span {
  padding: 0 10px;
  cursor: pointer;
}
.navs span.on {
  color: orange;
}
.box1 {
  width: 200px;
  height: 200px;
  border: 1px solid red;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
.box2 {
  width: 200px;
  height: 200px;
  border: 1px solid green;
  position: absolute;
  top: 250px;
  left: 250px;
  overflow: hidden;
}
.box3 {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  position: absolute;
  top: 500px;
  left: 500px;
  overflow: hidden;
}

.van-checkbox {
    .van-checkbox__icon {
        margin: 0 auto;
    }
}
</style>
