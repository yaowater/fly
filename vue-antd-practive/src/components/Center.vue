<template>
  <div class="y-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"Center"
};
</script>

<style lang="css">
.y-center {
  display: flex;
  justify-content: center;
  padding: 10px 20px;
}
</style>