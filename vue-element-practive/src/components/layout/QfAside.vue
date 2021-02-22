<template>
<div class="qf-aside">
    <div class="logo">
        <img src="/1.png">
    </div>

        <!-- @open="handleOpen"
      @close="handleClose" -->

    <el-menu
      :router="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <!-- 第一大组：一层循环 -->
      <el-submenu v-for='sub in routes' :index="sub.id+''" :key='sub.id'>
        <template slot="title">
          <i :class="sub.icon"></i>
          <span v-text='sub.text'></span>
        </template>
        <!-- 子导航：二层循环 -->
        <el-menu-item 
            v-for='item in sub.children' 
            :index="item.id+''"
            :key='item.id' 
            :route="{'path':item.path.replace(':id',0),'component':item.component}">
            <i :class="item.icon"></i>
            <span v-text="item.text"></span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
</div> 
</template>

<script>

import routes from '@/views/'
export default {
    data: function() {
        return {
            routes,
        }
    }
    
}
</script>

<style lang='scss' scoped>
.logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 30px;
}
.logo img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>