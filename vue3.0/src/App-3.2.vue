<template>
  <div>
    <form>
      <input type="text" v-model="state2.obj.id" />
      <input type="text" v-model="state2.obj.name" />
      <input type="submit" @click.prevent="addArr" />
    </form>
    <ul>
      <li
        v-for="(item, index) in state.arr"
        :key="item.id"
        v-text="item.name"
        @click="removeArr(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
// import { reactive } from "vue";
import useRemoveStudent from "./remove.js";
import useAddStudent from "./add.js";
export default {
  name: "App",
  setup() {
    let { state, removeArr } = useRemoveStudent();
    let { state2, addArr } = useAddStudent(state);
    return { state, removeArr, state2, addArr };
  },
};
// function useRemoveStudent() {
//   let state = reactive({
//     arr: [
//       { id: 1, name: "aa" },
//       { id: 2, name: "bb" },
//       { id: 3, name: "cc" },
//     ],
//     obj: {
//       id: "",
//       name: "",
//     },
//   });
//   function removeArr(index) {
//     state.arr.splice(index, 1);
//   }
//   return { state, removeArr };
// }
// function useAddStudent(state) {
//   let state2 = reactive({
//     obj: {
//       id: "",
//       name: "",
//     },
//   });

//   function addArr() {
//     let obj2 = Object.assign({}, state2.obj);
//     state.arr.push(obj2);
//     state2.obj.id = "";
//     state2.obj.name = "";
//   }
//   return { state2, addArr };
// }
</script>

<style lang="css">
</style>
