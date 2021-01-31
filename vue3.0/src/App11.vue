<template>
  <div>
    <!-- <h1 @click="changeState">参数</h1> -->
    <h2>{{ state }}</h2>
    <ul>
      <li v-for="(item, index) in state" :key="index" v-text="item.name"></li>
    </ul>
    <div ref="box">我是div</div>
  </div>
</template>

<script>
import { ref, reactive, customRef,onMounted } from "vue";

function myRef(value) {
  return customRef((track, trigger) => {
    fetch(value)
      // fetch("value")
      .then((res) => {
        // console.log("res",res);
        return res.json();
      })
      .then((data) => {
        value = data;
        trigger();
      })
      .catch((err) => {
        console.log("err", err);
      });
    return {
      get() {
        track(); //这个数据是需要追踪变化的
        // console.log("get", value);
        return value;
      },
      set(newValue) {
        console.log("newValue", newValue);
        value = newValue;
        trigger(); //告诉Vue触发界面更新
      },
    };
  });
}

export default {
  name: "App",
  setup() {
    // let state = reactive([]);
    // let state = ref([]);
    // console.log("state", state);
    // fetch("../public/data.json")
    //   .then((res) => {
    //     // console.log("res",res);
    //     return res.json();
    //   })
    //   .then((data) => {
    //     state.value = data;
    //     // state = data;
    //     console.log("data", data);
    //     console.log("state", state);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    function changeState() {
      console.log("changeState");
      // let state2 = [
      //   {
      //     id: 1,
      //     name: "zs",
      //   },
      //   {
      //     id: 2,
      //     name: "ls",
      //   },
      //   {
      //     id: 3,
      //     name: "ww",
      //   },
      // ];
      // state2.map((ele) => {
      //   state.push(ele);
      // });

      // // state=state2
      // console.log("state", state);
    }
    let state=myRef("../public/data.json")

    let box=ref(null)
    // console.log("box",box);
     onMounted(()=>{
       console.log("box.value",box.value);
    })
    console.log("box.value11111111",box.value);

   

    // let state = ref([]);
    return { state,box };
  },
};
</script>

<style lang="css">
</style>
 