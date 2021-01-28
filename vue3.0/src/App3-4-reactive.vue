<template>
  <div>
    <!-- <h1 v-text="state.age" @click="changeState"></h1> -->
    <!-- <h1 v-text="obj.time" @click="changeObj"></h1> -->
    <h1 v-text="obj" @click="changeObj"></h1>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // let state=reactive({
    //   age:123
    // })
    // let changeState=()=>{
    //   console.log("state",state);
    //   state.age=666
    //   console.log("state",state);
    // }

    // let arr=reactive([1,2,3])
    // let changeArr=()=>{
    //   console.log("arr",arr);
    //   arr[0]=666
    //   console.log("arr",arr);
    // }

    let obj = reactive({
      time: new Date(),
    });
    let changeObj = () => {
      // obj.time.setDate(obj.time.getDate() + 1);
      // console.log("obj.time", obj.time);

      let newTime=new Date(obj.time.getTime())
      newTime.setDate(obj.time.getDate() + 1);
      obj.time=newTime
    };
    return { obj, changeObj };
  },
};
</script>

<style lang="css">
</style>
