import { reactive } from "vue";
function useRemoveStudent() {
    let state = reactive({
      arr: [
        { id: 1, name: "aa" },
        { id: 2, name: "bb" },
        { id: 3, name: "cc" },
      ],
      obj: {
        id: "",
        name: "",
      },
    });
    function removeArr(index) {
      state.arr.splice(index, 1);
    }
    return { state, removeArr };
  }

export default useRemoveStudent