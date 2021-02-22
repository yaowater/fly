<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/add" class="nav-link">待办事件</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/done" class="nav-link">已完成</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/delete" class="nav-link">已删除</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home'
})
</script>
<style lang="scss">
</style>
