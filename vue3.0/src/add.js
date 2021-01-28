import { reactive } from "vue";
function useAddStudent(state) {
    let state2 = reactive({
        obj: {
            id: "",
            name: "",
        },
    });

    function addArr() {
        let obj2 = Object.assign({}, state2.obj);
        state.arr.push(obj2);
        state2.obj.id = "";
        state2.obj.name = "";
    }
    return { state2, addArr };
}

export default useAddStudent