<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">添加待办事项</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      v-model="inputValue"
      @keydown.enter="add(inputValue)"
    />
    <div id="emailHelp" class="form-text">回车即可加入</div>
  </div>
  <ul class="list-group">
    <div>
      <li class="list-group-item" v-for="(item, index) in todos" :key="index">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckIndeterminate"
            @click.prevent="check(index)"
          />
          <label class="form-check-label">
            {{ item }}
          </label>
           <div class="float-right">
          <button class="btn btn-danger" type="button" @click="deleteA(index)">
            删除
          </button>
        </div>
        </div>

      </li>
    </div>
  </ul>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, reactive, ref, computed } from "vue";
import store from "@/store";
export default defineComponent({
  setup() {
    const inputValue = ref("");

    let add = (value: string) => {
      if (value.trim() === "") return;
      store.commit("add", value);
      inputValue.value = "";
    };

    const deleteA = (index: number) => {
      store.commit("delete", index);
    };

    const check = (index: number) => {
      store.commit("dones", index);
    };

    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      add,
      deleteA,
      check
    });
  },
});
/* eslint-disable */
</script>

<style lang="scss">
</style>
