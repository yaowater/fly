<template>
  <div>
    <h1 v-text="age" @click="fn2"></h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  data() {
    return {
      name: "xm",
    };
  },
  setup() {
    let age = ref(18);
    function fn2() {
      alert("22hihi");
    }
    // console.log("this", this);
    // console.log("this.name", this.name);
    return { age, fn2 };
  },
};
</script>

<style lang="css">
</style>
