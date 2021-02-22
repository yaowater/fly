<template>
  <div>
    <a-breadcrumb>
      <a-breadcrumb-item>英雄联盟LOL</a-breadcrumb-item>
      <!-- <a-breadcrumb-item v-if="$route.meta.module"
        ><a>{{ $route.meta.module }}</a></a-breadcrumb-item
      > -->
      <a-breadcrumb-item v-if="$route.meta.module">{{
        $route.meta.module
      }}</a-breadcrumb-item>
      <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css">
</style>