<template>
  <div>
    <h1 v-text="obj.name"></h1>
    <h1 v-text="obj.val.age"></h1>
    <button @click="changeObj">改变</button>
  </div>
</template>

<script>
import { readonly, shallowReadonly,isReadonly } from "vue";
export default {
  name: "App",
  setup() {
    let obj=readonly({
    // let obj = shallowReadonly({
      name: "zs",
      val: {
        age: 13,
      },
    });
    const obj2={a:1}
    // const num=1
    let changeObj = () => {
      obj.name = "aabb";
      obj.val.age = 22;
      console.log(obj);
      console.log("isReadonly(obj)",isReadonly(obj));
      obj2.a=22
      console.log(obj2);
      // num=111
      // console.log(num);
      
    };
    return { obj, changeObj };
  },
};
</script>

<style lang="css">
</style>
 