<template>
  <div v-text="age.value"></div>
  <div v-text="age"></div>
  <button @click="changeAge">改变</button>
</template>

<script>
import { reactive, ref, isRef, isReactive } from "vue";
export default {
  name: "App",
  setup() {
    let age = reactive({ value: 18 });
    let age2 = ref(19);
    let changeAge = () => {
      // console.log("age",age);
      console.log("isRef(age)", isRef(age));
      console.log("isRef(age2)", isRef(age2));
      console.log("isReactive(age)", isReactive(age));
      console.log("isReactive(age2)", isReactive(age2));
      // console.log("age2",age2);
      // age.value=666
    };
    return { age, changeAge };
  },
};
</script>

<style lang="css">
</style>
