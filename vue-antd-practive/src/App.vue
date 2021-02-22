<template>
  <div class="y-app">
    <!-- <div class="global-loading"></div> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang='css'>
.y-app {
  height: 100%;
  width: 100%;
}
#global-loading {
  background: linear-gradient(to right, rgb(55, 153, 219), #fff, blue);
  height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 0;
  animation: grow 1s infinite forwards;
}
@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>