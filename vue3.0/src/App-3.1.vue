<template>
 
  <div>
    <p>{{count}}</p>
    <button @click="changeCount" >按钮</button>
  </div>
  
</template>

<script>

import {ref} from 'vue'
export default {
  name: "App",
  setup(){
    let count=ref(1)
    function changeCount(){
      console.log("count.value",count.value);
      count.value+=1
    }
    return {count,changeCount}
  }

};
</script>

<style lang="css">
</style>
