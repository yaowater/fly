<template>
  <div class="app">
    <!-- 这个容器，只给Login组件用 -->
    <router-view v-if='$route.path=="/login"' name="login"></router-view>
    <Layout v-else />


  </div>
</template>

<script>

import { Layout } from '@/components'
export default {
  name: 'App',
  components: {
    Layout
  },
  computed: {
    isLogin() {
      return localStorage.getItem('token') ? true : false
    }
  },
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
