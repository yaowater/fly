<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>
    <form>
      <input type="text" v-model="obj.id" />
      <input type="text" v-model="obj.name" />
      <input type="submit" @click.prevent="addArr" />
    </form>
    <ul>
      <li
        v-for="(item, index) in arr"
        :key="item.id"
        v-text="item.id + '--' + item.name"
        @click="changeArr(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      arr: [
        { id: 1, name: "aa" },
        { id: 2, name: "bb" },
        { id: 3, name: "cc" },
      ],
      obj: {
        id: "",
        name: "",
      },
    };
  },
  methods: {
    changeMsg() {
      this.msg = "3333333";
    },
    changeArr(idx) {
      this.arr = this.arr.filter((ele, index) => {
        return index != idx;
      });
    },
    addArr() {
      let obj2 = Object.assign({}, this.obj);
      console.log("obj2", obj2);
      this.arr.push(obj2);
      //  this.obj={
      //   id: "",
      //   name: "",
      // },
      this.obj.id=""
      this.obj.name=""
    },
  },
};
</script>

<style lang="css">
</style>
