<template>
  <div v-text="num" @click="changeNum"></div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let num = ref(666);
    let changeNum=()=>{
      console.log("num",num);
      num.value=777
       console.log("num22",num);
    }
    return {num,changeNum};
  },
};
</script>

<style lang="css">
</style>
