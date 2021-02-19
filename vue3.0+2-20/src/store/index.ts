/* eslint-disable */
import { createStore } from "vuex";
export default createStore({
  state: {
    todos: [] as string[],
    dones: [] as string[],
    deletes: [] as string[]
  },
  mutations: {
    add(state, payload) {
      state.todos.push(payload);
    },
    delete(state, index) {
     let item=state.todos[index]
     state.todos.splice(index,1)
     state.deletes.push(item);
    },
    dones(state, index) {
      let item=state.todos[index]
      state.todos.splice(index,1)
      state.dones.push(item);
     },
  },
  actions: {},
  modules: {}
});
/* eslint-disable */
