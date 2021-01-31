<template>
  <div>
    <p v-text="state.a"></p>
    <p v-text="state.gf.b"></p>
    <p v-text="state.gf.f.c"></p>
    <p v-text="state.gf.f.s.d"></p>
    <button @click="changeState">改变</button>
  </div>
</template>

<script>
import {
  reactive,
  ref,
  isRef,
  isReactive,
  shallowReactive,
  shallowRef,
  triggerRef
} from "vue";
export default {
  name: "App",
  setup() {
    let state = shallowReactive({
    // let state = ref({
    // let state = shallowRef({
      a: "a",
      gf: {
        b: "b",
        f: {
          c: "c",
          s: {
            d: "d",
          },
        },
      },
    });
    let changeState = () => {
      state.a = "1";
      // state.gf.b = "2";
      // state.gf.f.c = "3";
      // state.gf.f.s.d = "4";
      // console.log(state);
      // console.log(state.a);
      // console.log(state.gf);
      // console.log(state.gf.f);+
      // console.log(state.gf.f.s);
      // state.value.a = "1";
      // state.value.gf.b = "2";
      // state.value.gf.f.c = "3";
      // state.value.gf.f.s.d = "4";
      // triggerRef(state)

      // state.value = {
      //   a: "1",
      //   gf: {
      //     b: "2",
      //     f: {
      //       c: "3",
      //       s: {
      //         d: "4",
      //       },
      //     },
      //   },
      // };
      // console.log(state);
      // console.log(state.value);
      // console.log(state.value.gf);
      // console.log(state.value.gf.f);
      // console.log(state.value.gf.f.s);
    };
    return { state, changeState };
  },
};
</script>

<style lang="css">
</style>
