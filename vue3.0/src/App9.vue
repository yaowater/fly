<template>
  <div>
    <p v-text="state"></p>

    <button @click="changeState">改变</button>
  </div>
</template>

<script>
import { reactive, toRaw, ref, markRaw, toRef } from "vue";
export default {
  name: "App",
  setup() {
    let obj = {
      name: "xm",
      age: 18,
    };

    // let state = reactive(obj);
    // let state = ref(obj);
    // let obj2 = toRaw(state);
    // let obj2 = toRaw(state.value);
    // console.log("obj", obj);
    // console.log("state", state);
    // console.log("obj2", obj2);
    // console.log(obj === state);
    // console.log(obj === obj2);

    // obj=markRaw(obj)
    // let state = reactive(obj);

    // let state=ref(obj.name)
    let state = ref(obj.name);
    // let state2 = toRef(obj, "name");
    // console.log("state", state);
    // console.log("state2", state2);

    function changeState() {
      state.value = "666";
      // state2.value= "666";
      // obj.age = 77777;
      console.log("state", state);
      // console.log("state2", state2);
      console.log("obj", obj);
      // state.value="xiaom"
    }
    return { state, changeState };
  },
};
</script>

<style lang="css">
</style>
