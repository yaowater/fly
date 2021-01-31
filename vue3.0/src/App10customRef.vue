<template>
  <div>
    <p v-text="age"></p>
    <!-- <p v-text="state2"></p> -->

    <button @click="changeState">改变</button>
  </div>
</template>

<script>
import { reactive, toRaw, ref, markRaw, toRef, toRefs, customRef } from "vue";

function myRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track() //这个数据是需要追踪变化的
        console.log("get", value);
        return value;
      },
      set(newValue) {
        console.log("newValue", newValue);
        value = newValue;
        trigger()//告诉Vue触发界面更新
      },
    };
  });
}

export default {
  name: "App",
  setup() {
    // let obj = {
    //   name: "xm",
    //   age: 18,
    // };

    // let state = toRef(obj, "name");
    // let state2 = toRef(obj, "age");

    // let state=toRefs(obj)

    // let state=ref(12) //reactive({value:12})

    let age = myRef(11);

    function changeState() {
      // console.log("state",state);
      // state.name.value = "abbbbbbb";
      // state.age.value = 25;
      // console.log("state",state);
      // console.log("obj",obj);
      // state.value+=1

      age.value+=1
    }
    return { age,changeState };
  },
};
</script>

<style lang="css">
</style>
 